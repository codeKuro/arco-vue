//远程测试主机 有需要扩展在这里
def getRemoteTestHost() {
    return [
        "root@152.69.211.177"
    ]
}
//远程灰度主机 有需要扩展在这里
def getRemoteGrayHost() {
    return []
}
//远程生产主机 有需要扩展在这里
def getRemoteProdHost() {
    return []
}

pipeline {
    //全部的CICD流程都需要在这里定义
    agent any

    //定义一些环境信息
    environment {
        //项目名称
        PROJECT_NAME_CN = 'saas管理平台web'
        //远程主机配置（需对应新建） 
        REMOTE_PROJECT_DIR = "/deploy/projects/web/mili-saas-web"

        //获取Jenkins配置的凭据
        FEISHU_WEBHOOK_URL = credentials("feishu_webhook_url")

        TAB_STR = "✔   "
    }

    options {
        //集成gitlab作业状态推送配置
        gitLabConnection('gitlab_root_connection')
    }

    //定义流水线的加工流程
    stages {
        //流水线的所有阶段
        //1、环境检查
        stage('环境检查') {
            steps {
                sh 'docker version'
                script {
                    //基于分支判断需要部署的环境
                    if (env.TAG_NAME && env.TAG_NAME ==~ /^v\d.*/) {//基于标签发布版本 e.g v0.0.1
                        env.APP_ENV = "prod"
                    } else if (BRANCH_NAME == "gray") {
                        env.APP_ENV = "gray"
                    } else if (BRANCH_NAME == "test") {
                        env.APP_ENV = "test"
                    } else {
                        env.APP_ENV = "other"
                    }
                    sh "git log --oneline -n 1 > gitlog.file"
                    env.GIT_LOG = readFile("gitlog.file").trim()
                    env.BUILD_TASKS = ""
                }
                sh 'printenv'
                sh 'ls -al ${REF}'
            }
        }

        //2、远程部署环境
        stage('远程部署') {
            when {
                expression {
                    //测试、灰度、生产环境
                    return env.APP_ENV == 'test' || env.APP_ENV == 'gray' || env.APP_ENV == 'prod'
                }
            }
            steps {
                script {//groovy
                    //灰度和生产确认一下
                    if (env.APP_ENV == "gray") {
                        input message: '需要部署到远程灰度环境吗？', ok: '需要'

                        echo "开始部署到灰度环境"
                        def remote_host = getRemoteGrayHost()

                        if(remote_host.size() > 0) {
                            for (int i = 0; i < remote_host.size(); ++i) {
                                def order_num = i + 1
                                echo "部署第 ${order_num} 台 - ${remote_host[i]} - 开始。。。"
                                //拉取最新代码
                                sh "ssh ${remote_host[i]} 'cd ${REMOTE_PROJECT_DIR} && git pull origin ${BRANCH_NAME} && git checkout ${BRANCH_NAME}' "
                                //执行部署脚本
                                retry(2) {
                                    sh "ssh ${remote_host[i]} 'cd ${REMOTE_PROJECT_DIR}/deploy && sh deploy.sh ${APP_ENV}' "
                                }
                                echo "部署第 ${order_num} 台 - ${remote_host[i]} - 完成"
                            }
                        } else {
                            echo "没有需要部署的远程主机"
                        }
                    } else if (env.APP_ENV == "prod") {
                        input message: '需要部署到远程生产环境吗？', ok: '需要'

                        echo "开始部署到生产环境"
                        def remote_host = getRemoteProdHost()

                        if(remote_host.size() > 0) {
                            for (int i = 0; i < remote_host.size(); ++i) {
                                def order_num = i + 1
                                echo "部署第 ${order_num} 台 - ${remote_host[i]} - 开始。。。"
                                //拉取最新代码
                                sh "ssh ${remote_host[i]} 'cd ${REMOTE_PROJECT_DIR} && git pull origin && git checkout -b temp ${TAG_NAME}' "
                                //执行部署脚本
                                retry(2) {
                                    sh "ssh ${remote_host[i]} 'cd ${REMOTE_PROJECT_DIR}/deploy && sh deploy.sh ${APP_ENV} && git checkout master && git branch -D temp' "
                                }
                                echo "部署第 ${order_num} 台 - ${remote_host[i]} - 完成"
                            }
                        } else {
                            echo "没有需要部署的远程主机"
                        }
                    } else {
                        echo "开始部署到测试环境"
                        def remote_host = getRemoteTestHost()

                        if(remote_host.size() > 0) {
                            for (int i = 0; i < remote_host.size(); ++i) {
                                def order_num = i + 1
                                echo "部署第 ${order_num} 台 - ${remote_host[i]} - 开始。。。"
                                //拉取最新代码
                                sh "ssh ${remote_host[i]} 'cd ${REMOTE_PROJECT_DIR} && git pull origin ${BRANCH_NAME} && git checkout ${BRANCH_NAME}' "
                                //执行部署脚本
                                retry(2) {
                                    sh "ssh ${remote_host[i]} 'cd ${REMOTE_PROJECT_DIR}/deploy && sh deploy.sh ${APP_ENV}' "
                                }
                                echo "部署第 ${order_num} 台 - ${remote_host[i]} - 完成"
                            }
                        } else {
                            echo "没有需要部署的远程主机"
                        }
                    }

                    env.BUILD_TASKS += env.STAGE_NAME + env.APP_ENV + env.TAB_STR
                }
            }
            post {
                //gitlab作业状态同步
                failure { updateGitlabCommitStatus name: env.STAGE_NAME + env.APP_ENV, state: 'failed' }
                success { updateGitlabCommitStatus name: env.STAGE_NAME + env.APP_ENV, state: 'success' }
            }
        }
    }

    //后置处理过程
    post {
      success {
        //发送到飞书
        timeout(time: 1, unit: 'MINUTES') {
            sh """
                curl -X POST '${FEISHU_WEBHOOK_URL}' \
                  -H 'Content-Type: application/json' \
                  -d '{
                        "msg_type": "post",
                            "content": {
                              "post": {
                                  "zh_cn": {
                                      "title": " 😃👍 发布成功 👍😃",
                                      "content": [
                                          [
                                              {
                                                  "tag": "text",
                                                  "un_escape": true,
                                                  "text": "项目名称：${PROJECT_NAME_CN}"
                                              }
                                            ],
                                          [
                                              {
                                                  "tag": "text",
                                                  "un_escape": true,
                                                  "text": "仓库地址："
                                              },
                                              {
                                                  "tag": "a",
                                                  "text": "点击跳转",
                                                  "href": "${GIT_URL}"
                                              }
                                          ],
                                          [
                                            {
                                                "tag": "text",
                                                "un_escape": true,
                                                "text": "GIT LOG：${GIT_LOG}"
                                            }
                                          ],
                                          [
                                              {
                                                  "tag": "text",
                                                  "un_escape": true,
                                                  "text": "部署环境：${APP_ENV}"
                                              }
                                          ],
                                          [
                                              {
                                                  "tag": "text",
                                                  "un_escape": true,
                                                  "text": "构建编号：第${BUILD_NUMBER}次构建"
                                              }
                                          ],
                                          [
                                                {
                                                    "tag": "text",
                                                    "text": "构建任务：${BUILD_TASKS}"
                                                }
                                          ],
                                          [
                                            {
                                                "tag": "text",
                                                "un_escape": true,
                                                "text": "构建日志："
                                            },
                                            {
                                                "tag": "a",
                                                "text": "${BUILD_URL}console",
                                                "href": "${BUILD_URL}console"
                                            }
                                          ]
                                      ]
                                  }
                              }
                          }
                      }'
              """
          }
      }
      failure {
        //发送到飞书
        timeout(time: 1, unit: 'MINUTES') {
            sh """
                curl -X POST ${FEISHU_WEBHOOK_URL} \
                  -H 'Content-Type: application/json' \
                  -d '{
                        "msg_type": "post",
                            "content": {
                              "post": {
                                  "zh_cn": {
                                      "title": " 😱 发布失败提醒  😱",
                                      "content": [
                                          [
                                            {
                                                "tag": "text",
                                                "un_escape": true,
                                                "text": "项目名称：${PROJECT_NAME_CN}"
                                            }
                                          ],
                                          [
                                              {
                                                  "tag": "text",
                                                  "un_escape": true,
                                                  "text": "GIT LOG：${GIT_LOG}"
                                              }
                                          ],
                                          [
                                                {
                                                    "tag": "text",
                                                    "un_escape": true,
                                                    "text": "部署环境：${APP_ENV}"
                                                }
                                          ],
                                          [
                                              {
                                                  "tag": "text",
                                                  "text": "构建任务：${BUILD_TASKS}"
                                              }
                                          ],
                                          [
                                            {
                                                "tag": "text",
                                                "un_escape": true,
                                                "text": "查看日志："
                                            },
                                            {
                                                "tag": "a",
                                                "text": "${BUILD_URL}console",
                                                "href": "${BUILD_URL}console"
                                            }
                                          ]
                                      ]
                                  }
                              }
                          }
                      }'
              """
          }
      }
      aborted {
          //发送到飞书
          timeout(time: 1, unit: 'MINUTES') {
              sh """
                  curl -X POST ${FEISHU_WEBHOOK_URL} \
                    -H 'Content-Type: application/json' \
                    -d '{
                          "msg_type": "post",
                              "content": {
                                "post": {
                                    "zh_cn": {
                                        "title": "😓 发布流程被终止 😓",
                                        "content": [
                                            [
                                              {
                                                  "tag": "text",
                                                  "un_escape": true,
                                                  "text": "项目名称：${PROJECT_NAME_CN}"
                                              }
                                            ],
                                            [
                                                {
                                                    "tag": "text",
                                                    "un_escape": true,
                                                    "text": "GIT LOG：${GIT_LOG}"
                                                }
                                            ],
                                            [
                                                  {
                                                      "tag": "text",
                                                      "un_escape": true,
                                                      "text": "部署环境：${APP_ENV}"
                                                  }
                                            ],
                                            [
                                                {
                                                    "tag": "text",
                                                    "text": "构建任务：${BUILD_TASKS}"
                                                }
                                            ],
                                            [
                                              {
                                                  "tag": "text",
                                                  "un_escape": true,
                                                  "text": "查看日志："
                                              },
                                              {
                                                  "tag": "a",
                                                  "text": "${BUILD_URL}console",
                                                  "href": "${BUILD_URL}console"
                                              }
                                            ]
                                        ]
                                    }
                                }
                            }
                        }'
                """
            }
        }
    }
}