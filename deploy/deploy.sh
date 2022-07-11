#!/bin/bash
# source /etc/profile
# source ~/.bash_profile

PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
export PATH

# 项目名称
project_name="mili-saas-web"
# 项目目录
project_dir="/deploy/projects/web/${project_name}"
# 部署目录
deploy_dir="/home/www/${project_name}/"
# 部署产生的明细
deploy_log="/deploy/deploy_logs/web/${project_name}.log"

cd ${project_dir}

#代码更新
code_update(){
  rsync -rltvzP --progress --delete ${project_dir}/dist/ ${deploy_dir}
}

echo "" >> ${deploy_log}
echo "" >> ${deploy_log}
echo "+++++++++++++++++++++++++++++++++++++++++" >> ${deploy_log}
echo "$(date +"%Y-%m-%d +%H:%M:%S")   ${project_name} deploy begin" >> ${deploy_log}
echo "" >> ${deploy_log}

echo "${project_name}文件开始拷贝"
#1、直接把dist 目录下的文件都拷贝到部署目录下
code_update

echo "${project_name}文件拷贝完成"

echo "$(date +"%Y-%m-%d +%H:%M:%S")    ${project_name} deploy finished" >> ${deploy_log}
echo "+++++++++++++++++++++++++++++++++++++++++" >> ${deploy_log}