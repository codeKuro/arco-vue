var $e=Object.defineProperty,he=Object.defineProperties;var ke=Object.getOwnPropertyDescriptors;var te=Object.getOwnPropertySymbols;var Ve=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable;var oe=(v,d,u)=>d in v?$e(v,d,{enumerable:!0,configurable:!0,writable:!0,value:u}):v[d]=u,ne=(v,d)=>{for(var u in d||(d={}))Ve.call(d,u)&&oe(v,u,d[u]);if(te)for(var u of te(d))we.call(d,u)&&oe(v,u,d[u]);return v},se=(v,d)=>he(v,ke(d));import{d as Ce,r as g,O as Re,$ as Ue,Q as Se,e as n,o as U,g as Ie,f as e,w as l,c as A,i,t as m,b as K,u as S,a2 as Ne,R as O,a3 as qe}from"./vendor.e6e9099f.js";import{u as Ae}from"./loading.3e447ed2.js";import{q as Ke,d as Oe,g as je,c as De,u as Le,a as Be}from"./authority.927ca471.js";import{q as Fe}from"./serve.c5d545d7.js";import{_ as Te,t as ze}from"./index.525cc014.js";const Ee={class:"container"},Je={name:"RoleManagement"},He=Ce(se(ne({},Je),{setup(v){const d=()=>({id:"",type:1,appName:"",name:"",identify:"",remark:"",status:0,sort:0,scopes:"admin",createdAt:"",isSupperRole:0,nodeIds:""}),u=g(""),{loading:F,setLoading:_}=Ae(!0),{t:h}=Re(),b=g("1"),j=g([]),D=g(),s=g(d()),I=g(!1),k=g(!1),C=g(!1),N=g(),M=g([]),T=Ue({type:"checkbox",showCheckedAll:!0,checkStrictly:!0}),z=g([]),de=Se(()=>[{label:h("roleManagement.form.type.1"),value:1},{label:h("roleManagement.form.type.2"),value:2}]),V=async(a=b.value==="1"?{scopes:"admin"}:{scopes:"member"})=>{_(!0);try{const{data:o}=await Ke(a),c=await Fe(a);j.value=o.roleList,z.value=ze(c.data.nodeTree)}catch{}finally{_(!1)}};V();const ue=a=>{b.value=a,V()},E=()=>{var a;N.value="add",(a=D.value)==null||a.resetFields(),b.value==="1"?s.value.scopes="admin":s.value.scopes="member",k.value=!0},J=()=>{console.log(M),M.value.length?C.value=!0:O.error(h("roleManagement.button.confirmation.deleteAll"))},H=async(a={ids:M.value})=>{_(!0);try{await Oe(a),V()}catch(o){u.value=o.message}finally{_(!1),C.value=!1}},Q=()=>{C.value=!1},G=async a=>{var o;_(!0),N.value="edit";try{const{data:c}=await je({id:a.id}),y=Object.keys(c).reduce((p,R)=>(p[R]={value:c[R]},p),{});y.nodeIds.value=y.nodeIds.value.split(","),(o=D.value)==null||o.setFields(y),k.value=!0}catch{}finally{_(!1)}},re=async({errors:a,values:o})=>{if(!a){_(!0);const c=JSON.parse(JSON.stringify(s.value));if(console.log(s.value),c.nodeIds=c.nodeIds.toString(),N.value==="add")try{await De(c),O.success(h("roleManagement.form.add.success")),V()}catch(y){u.value=y.message}finally{_(!1),k.value=!1}else try{await Le(c),O.success(h("roleManagement.form.edit.success")),V()}catch(y){u.value=y.message}finally{_(!1),k.value=!1}}},P=async a=>{I.value=!0;try{const{data:o}=await Be({id:a.id});O.success(h("roleManagement.form.edit.success")),V()}catch{}finally{I.value=!1}};function ie(){console.log(s)}return(a,o)=>{const c=n("Breadcrumb"),y=n("icon-plus"),p=n("a-button"),R=n("icon-delete"),W=n("a-popconfirm"),w=n("a-space"),L=n("a-col"),X=n("a-row"),r=n("a-table-column"),Y=n("icon-check"),Z=n("icon-close"),B=n("a-switch"),x=n("icon-edit"),ee=n("a-table"),ae=n("a-tab-pane"),me=n("icon-download"),ce=n("a-tabs"),pe=n("a-card"),fe=n("a-select"),f=n("a-form-item"),q=n("a-input"),ge=n("a-tree-select"),le=n("a-radio"),ve=n("a-radio-group"),ye=n("a-input-number"),_e=n("a-textarea"),be=n("a-form"),Me=n("a-modal");return U(),Ie("div",Ee,[e(c,{items:["menu.authority","menu.authority.roleManagement"]},null,8,["items"]),e(pe,{class:"general-card",title:a.$t("menu.authority.roleManagement")},{default:l(()=>[e(ce,{modelValue:b.value,"onUpdate:modelValue":o[2]||(o[2]=t=>b.value=t),"default-active-key":"1",onChange:ue},{default:l(()=>[e(ae,{key:"1",title:a.$t("menu.card.tabOne")},{default:l(()=>[b.value==1?(U(),A(X,{key:0,style:{"margin-bottom":"16px"}},{default:l(()=>[e(L,{span:16},{default:l(()=>[e(w,null,{default:l(()=>[e(p,{type:"primary",onClick:E},{icon:l(()=>[e(y)]),default:l(()=>[i(" "+m(a.$t("roleManagement.operation.create")),1)]),_:1}),e(W,{"popup-visible":C.value,content:a.$t("roleManagement.button.confirmation.delete"),onOk:H,onCancel:Q},{default:l(()=>[e(p,{type:"primary",onClick:J},{icon:l(()=>[e(R)]),default:l(()=>[i(" "+m(a.$t("roleManagement.operation.delete")),1)]),_:1})]),_:1},8,["popup-visible","content"])]),_:1})]),_:1})]),_:1})):K("",!0),b.value==1?(U(),A(ee,{key:1,selectedKeys:M.value,"onUpdate:selectedKeys":o[0]||(o[0]=t=>M.value=t),"row-key":"id",loading:S(F),data:j.value,bordered:!1,"row-selection":S(T),pagination:!1},{columns:l(()=>[e(r,{title:a.$t("roleManagement.columns.type"),"data-index":"type"},{cell:l(({record:t})=>[i(m(a.$t(`roleManagement.form.type.${t.type}`)),1)]),_:1},8,["title"]),e(r,{title:a.$t("roleManagement.columns.id"),"data-index":"id"},null,8,["title"]),e(r,{title:a.$t("roleManagement.columns.name"),"data-index":"name"},null,8,["title"]),e(r,{title:a.$t("roleManagement.columns.identify"),"data-index":"identify"},null,8,["title"]),e(r,{title:a.$t("roleManagement.columns.createdAt"),"data-index":"createdAt"},null,8,["title"]),e(r,{title:a.$t("roleManagement.columns.status"),"data-index":"status"},{cell:l(({record:t})=>[e(w,null,{default:l(()=>[e(B,{modelValue:t.status,"onUpdate:modelValue":$=>t.status=$,disabled:t.id==="1",loading:I.value,"checked-value":1,"unchecked-value":0,onChange:$=>P(t)},{"checked-icon":l(()=>[e(Y)]),"unchecked-icon":l(()=>[e(Z)]),_:2},1032,["modelValue","onUpdate:modelValue","disabled","loading","onChange"])]),_:2},1024)]),_:1},8,["title"]),e(r,{title:a.$t("roleManagement.columns.operations"),"data-index":"operations"},{cell:l(({record:t})=>[e(p,{disabled:t.identify==="super_admin",status:"success",size:"small",onClick:$=>G(t)},{icon:l(()=>[e(x)]),default:l(()=>[i(" "+m(a.$t("roleManagement.columns.operations.edit")),1)]),_:2},1032,["disabled","onClick"])]),_:1},8,["title"])]),_:1},8,["selectedKeys","loading","data","row-selection"])):K("",!0)]),_:1},8,["title"]),e(ae,{key:"2",title:a.$t("menu.card.tabTwo")},{default:l(()=>[b.value==2?(U(),A(X,{key:0,style:{"margin-bottom":"16px"}},{default:l(()=>[e(L,{span:16},{default:l(()=>[e(w,null,{default:l(()=>[e(p,{type:"primary",onClick:E},{icon:l(()=>[e(y)]),default:l(()=>[i(" "+m(a.$t("roleManagement.operation.create")),1)]),_:1}),e(W,{"popup-visible":C.value,content:a.$t("roleManagement.button.confirmation.delete"),onOk:H,onCancel:Q},{default:l(()=>[e(p,{type:"primary",onClick:J},{icon:l(()=>[e(R)]),default:l(()=>[i(" "+m(a.$t("roleManagement.operation.delete")),1)]),_:1})]),_:1},8,["popup-visible","content"])]),_:1})]),_:1}),e(L,{span:8,style:{"text-align":"right"}},{default:l(()=>[e(p,null,{icon:l(()=>[e(me)]),default:l(()=>[i(" "+m(a.$t("roleManagement.operation.download")),1)]),_:1})]),_:1})]),_:1})):K("",!0),b.value==2?(U(),A(ee,{key:1,selectedKeys:M.value,"onUpdate:selectedKeys":o[1]||(o[1]=t=>M.value=t),"row-key":"id",loading:S(F),data:j.value,bordered:!1,"row-selection":S(T),pagination:!1},{columns:l(()=>[e(r,{title:a.$t("roleManagement.columns.type"),"data-index":"type"},{cell:l(({record:t})=>[i(m(a.$t(`roleManagement.form.type.${t.type}`)),1)]),_:1},8,["title"]),e(r,{title:a.$t("roleManagement.columns.id"),"data-index":"id"},null,8,["title"]),e(r,{title:a.$t("roleManagement.columns.name"),"data-index":"name"},null,8,["title"]),e(r,{title:a.$t("roleManagement.columns.identify"),"data-index":"identify"},null,8,["title"]),e(r,{title:a.$t("roleManagement.columns.createdAt"),"data-index":"createdAt"},null,8,["title"]),e(r,{title:a.$t("roleManagement.columns.status"),"data-index":"status"},{cell:l(({record:t})=>[e(w,null,{default:l(()=>[e(B,{modelValue:t.status,"onUpdate:modelValue":$=>t.status=$,disabled:t.identify==="super_admin",loading:I.value,"checked-value":1,"unchecked-value":0,onChange:$=>P(t)},{"checked-icon":l(()=>[e(Y)]),"unchecked-icon":l(()=>[e(Z)]),_:2},1032,["modelValue","onUpdate:modelValue","disabled","loading","onChange"])]),_:2},1024)]),_:1},8,["title"]),e(r,{title:a.$t("roleManagement.columns.operations"),"data-index":"operations"},{cell:l(({record:t})=>[e(p,{disabled:t.identify==="super_admin",status:"success",size:"small",onClick:$=>G(t)},{icon:l(()=>[e(x)]),default:l(()=>[i(" "+m(a.$t("roleManagement.columns.operations.edit")),1)]),_:2},1032,["disabled","onClick"])]),_:1},8,["title"])]),_:1},8,["selectedKeys","loading","data","row-selection"])):K("",!0)]),_:1},8,["title"])]),_:1},8,["modelValue"])]),_:1},8,["title"]),e(Me,{visible:k.value,"onUpdate:visible":o[14]||(o[14]=t=>k.value=t),width:"auto",title:N.value==="add"?a.$t("roleManagement.form.title.add"):a.$t("roleManagement.form.title.edit"),footer:!1},{default:l(()=>[e(be,{ref_key:"formRef",ref:D,model:s.value,style:{width:"600px"},onSubmit:re},{default:l(()=>[e(f,{field:"type",label:a.$t("roleManagement.form.type"),rules:[{required:!0,message:a.$t("roleManagement.form.placeholder.select")}]},{default:l(()=>[e(fe,{modelValue:s.value.type,"onUpdate:modelValue":o[3]||(o[3]=t=>s.value.type=t),options:S(de),placeholder:a.$t("roleManagement.form.placeholder.select")},null,8,["modelValue","options","placeholder"])]),_:1},8,["label","rules"]),Ne(e(f,{field:"id"},{default:l(()=>[e(q,{modelValue:s.value.id,"onUpdate:modelValue":o[4]||(o[4]=t=>s.value.id=t)},null,8,["modelValue"])]),_:1},512),[[qe,!1]]),e(f,{field:"name",label:a.$t("roleManagement.form.name"),rules:[{required:!0,message:a.$t("roleManagement.form.placeholder.input")}],"validate-trigger":["change","input"]},{default:l(()=>[e(q,{modelValue:s.value.name,"onUpdate:modelValue":o[5]||(o[5]=t=>s.value.name=t),placeholder:a.$t("roleManagement.form.placeholder.input")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),e(f,{field:"appName",label:a.$t("roleManagement.form.appName"),rules:[{required:!0,message:a.$t("roleManagement.form.placeholder.input")}],"validate-trigger":["change","input"]},{default:l(()=>[e(q,{modelValue:s.value.appName,"onUpdate:modelValue":o[6]||(o[6]=t=>s.value.appName=t),placeholder:a.$t("roleManagement.form.placeholder.input")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),e(f,{field:"nodeIds",label:a.$t("roleManagement.form.nodeIds"),rules:[{required:!0,message:a.$t("roleManagement.form.placeholder.select")}]},{default:l(()=>[e(ge,{modelValue:s.value.nodeIds,"onUpdate:modelValue":o[7]||(o[7]=t=>s.value.nodeIds=t),"allow-search":!0,"allow-clear":!0,"tree-checkable":!0,"tree-check-strictly":!0,"max-tag-count":4,data:z.value,placeholder:a.$t("roleManagement.form.placeholder.select"),"dropdown-style":{minHeight:"300px",overflow:"auto"},onChange:ie},null,8,["modelValue","data","placeholder"])]),_:1},8,["label","rules"]),e(f,{field:"identify",label:a.$t("roleManagement.form.identify"),rules:[{required:!0,message:a.$t("roleManagement.form.placeholder.input")}],"validate-trigger":["change","input"]},{default:l(()=>[e(q,{modelValue:s.value.identify,"onUpdate:modelValue":o[8]||(o[8]=t=>s.value.identify=t),placeholder:a.$t("roleManagement.form.placeholder.input")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),e(f,{field:"scopes",label:a.$t("menuManagement.form.scopes")},{default:l(()=>[e(w,{size:"large"},{default:l(()=>[e(ve,{modelValue:s.value.scopes,"onUpdate:modelValue":o[9]||(o[9]=t=>s.value.scopes=t),disabled:!0},{default:l(()=>[e(le,{value:"admin"},{default:l(()=>[i(m(a.$t("roleManagement.form.scopes.admin")),1)]),_:1}),e(le,{value:"member"},{default:l(()=>[i(m(a.$t("roleManagement.form.scopes.member")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["label"]),e(f,{field:"sort",label:a.$t("roleManagement.form.sort")},{default:l(()=>[e(ye,{modelValue:s.value.sort,"onUpdate:modelValue":o[10]||(o[10]=t=>s.value.sort=t),placeholder:a.$t("roleManagement.form.placeholder.input"),min:0,mode:"button"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e(f,{field:"status",label:a.$t("roleManagement.form.status")},{default:l(()=>[e(B,{modelValue:s.value.status,"onUpdate:modelValue":o[11]||(o[11]=t=>s.value.status=t),"checked-value":1,"unchecked-value":0},null,8,["modelValue"])]),_:1},8,["label"]),e(f,{field:"remark",label:a.$t("roleManagement.form.remark")},{default:l(()=>[e(_e,{modelValue:s.value.remark,"onUpdate:modelValue":o[12]||(o[12]=t=>s.value.remark=t),placeholder:a.$t("roleManagement.form.placeholder.input")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e(f,null,{default:l(()=>[e(w,null,{default:l(()=>[e(p,{type:"primary","html-type":"submit"},{default:l(()=>[i(m(a.$t("roleManagement.button.submit")),1)]),_:1}),e(p,{type:"outline",onClick:o[13]||(o[13]=t=>a.$refs.formRef.resetFields())},{default:l(()=>[i(m(a.$t("roleManagement.button.reset")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["visible","title"])])}}}));var Ze=Te(He,[["__scopeId","data-v-06db39f2"]]);export{Ze as default};