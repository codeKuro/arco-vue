var $e=Object.defineProperty,ke=Object.defineProperties;var Ve=Object.getOwnPropertyDescriptors;var te=Object.getOwnPropertySymbols;var Ce=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable;var oe=(p,u,s)=>u in p?$e(p,u,{enumerable:!0,configurable:!0,writable:!0,value:s}):p[u]=s,ne=(p,u)=>{for(var s in u||(u={}))Ce.call(u,s)&&oe(p,s,u[s]);if(te)for(var s of te(u))we.call(u,s)&&oe(p,s,u[s]);return p},se=(p,u)=>ke(p,Ve(u));import{_ as Re,u as Se,t as Ue}from"./index.6eb722a8.js";import{u as je}from"./loading.28115bcb.js";/* empty css              */import{q as Ie}from"./serve.71780e1a.js";/* empty css              *//* empty css              *//* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css               */import{d as Ne,e as m,r as Te,c as Ae,aJ as R,A as S,B as qe,aG as e,aF as l,aC as A,aL as f,aM as g,aD as q,u as U,bb as de,aR as F,aS as Fe,bc as Ke,b3 as De,bd as Le,be as Oe,bf as Be,aQ as ze,bg as Je,bh as Pe,bi as Ee,bj as Ge,bk as He,b5 as Qe,b0 as Xe,bl as We,bm as Ye,bn as Ze,aP as xe,bo as ea,b4 as aa,aX as la,bp as ue}from"./arco.bb856b78.js";import{q as ta,d as oa,g as na,c as sa,u as da,a as ua}from"./authority.cf7f17f7.js";import"./chart.e89f81b2.js";import"./vue.e8f01861.js";const ra={class:"container"},ia={name:"RoleManagement"},ma=Ne(se(ne({},ia),{setup(p){const u=()=>({id:"",type:1,appName:"",name:"",identify:"",remark:"",status:0,sort:0,scopes:"admin",createdAt:"",isSupperRole:0,nodeIds:""}),s=m(""),{loading:O,setLoading:v}=je(!0),{t:M}=Se(),b=m("1"),K=m([]),D=m(),n=m(u()),j=m(!1),h=m(!1),V=m(!1),I=m(),_=m([]),B=Te({type:"checkbox",showCheckedAll:!0,checkStrictly:!0}),z=m([]),N=m(!1),re=Ae(()=>[{label:M("roleManagement.form.type.1"),value:1},{label:M("roleManagement.form.type.2"),value:2}]),$=async(a=b.value==="1"?{scopes:"member"}:{scopes:"admin"})=>{v(!0);try{const{data:o}=await ta(a),r=await Ie(a);K.value=o.roleList,z.value=Ue(r.data.nodeTree)}catch(o){s.value=o.message}finally{v(!1)}};$();const ie=a=>{b.value=a,$()},J=()=>{var a;I.value="add",(a=D.value)==null||a.resetFields(),b.value==="1"?n.value.scopes="member":n.value.scopes="admin",h.value=!0},P=()=>{console.log(_),_.value.length?V.value=!0:F.error(M("roleManagement.button.confirmation.deleteAll"))},E=async(a={ids:_.value})=>{v(!0);try{await oa(a),$()}catch(o){s.value=o.message}finally{v(!1),V.value=!1}},G=()=>{V.value=!1},H=async a=>{var o;v(!0),I.value="edit";try{const{data:r}=await na({id:a.id}),d=Object.keys(r).reduce((C,w)=>(C[w]={value:r[w]},C),{});d.nodeIds.value=d.nodeIds.value.split(","),(o=D.value)==null||o.setFields(d),h.value=!0}catch(r){s.value=r.message}finally{v(!1)}},me=async({errors:a,values:o})=>{if(!a){v(!0),N.value=!0;const r=JSON.parse(JSON.stringify(n.value));if(console.log(n.value),r.nodeIds=r.nodeIds.toString(),I.value==="add")try{await sa(r),F.success(M("roleManagement.form.add.success")),N.value=!1,$()}catch(d){s.value=d.message}finally{v(!1),h.value=!1}else try{await da(r),F.success(M("roleManagement.form.edit.success")),N.value=!1,$()}catch(d){s.value=d.message}finally{v(!1),h.value=!1}}},Q=async a=>{j.value=!0;try{const{data:o}=await ua({id:a.id});F.success(M("roleManagement.form.edit.success")),$()}catch(o){s.value=o.message}finally{j.value=!1}};function ce(){console.log(n)}return(a,o)=>{const r=R("icon-plus"),d=Fe,C=R("icon-delete"),w=Ke,k=De,X=Le,W=Oe,i=Be,Y=R("icon-check"),Z=R("icon-close"),L=ze,x=R("icon-edit"),ee=Je,ae=Pe,pe=Ee,fe=Ge,ge=He,c=Qe,T=Xe,ve=We,le=Ye,be=Ze,_e=xe,ye=ea,Me=aa,he=la;return S(),qe("div",ra,[e(fe,{class:"general-card"},{default:l(()=>[e(pe,{modelValue:b.value,"onUpdate:modelValue":o[2]||(o[2]=t=>b.value=t),"default-active-key":"1",onChange:ie},{default:l(()=>[e(ae,{key:"1",title:a.$t("menu.card.tabOne")},{default:l(()=>[b.value==1?(S(),A(W,{key:0,style:{"margin-bottom":"16px"}},{default:l(()=>[e(X,{span:16},{default:l(()=>[e(k,null,{default:l(()=>[e(d,{type:"primary",onClick:J},{icon:l(()=>[e(r)]),default:l(()=>[f(" "+g(a.$t("roleManagement.operation.create")),1)]),_:1}),e(w,{"popup-visible":V.value,content:a.$t("roleManagement.button.confirmation.delete"),onOk:E,onCancel:G},{default:l(()=>[e(d,{type:"primary",onClick:P},{icon:l(()=>[e(C)]),default:l(()=>[f(" "+g(a.$t("roleManagement.operation.delete")),1)]),_:1})]),_:1},8,["popup-visible","content"])]),_:1})]),_:1})]),_:1})):q("",!0),b.value==1?(S(),A(ee,{key:1,selectedKeys:_.value,"onUpdate:selectedKeys":o[0]||(o[0]=t=>_.value=t),"row-key":"id",loading:U(O),data:K.value,bordered:!1,"row-selection":U(B),pagination:!1},{columns:l(()=>[e(i,{title:a.$t("roleManagement.columns.id"),"data-index":"id"},null,8,["title"]),e(i,{title:a.$t("roleManagement.columns.name"),"data-index":"name"},null,8,["title"]),e(i,{title:a.$t("roleManagement.columns.identify"),"data-index":"identify"},null,8,["title"]),e(i,{title:a.$t("roleManagement.columns.createdAt"),"data-index":"createdAt"},null,8,["title"]),e(i,{title:a.$t("roleManagement.columns.status"),"data-index":"status"},{cell:l(({record:t})=>[e(k,null,{default:l(()=>[e(L,{modelValue:t.status,"onUpdate:modelValue":y=>t.status=y,disabled:t.id==="1",loading:j.value,"checked-value":1,"unchecked-value":0,onChange:y=>Q(t)},{"checked-icon":l(()=>[e(Y)]),"unchecked-icon":l(()=>[e(Z)]),_:2},1032,["modelValue","onUpdate:modelValue","disabled","loading","onChange"])]),_:2},1024)]),_:1},8,["title"]),e(i,{title:a.$t("roleManagement.columns.operations"),"data-index":"operations"},{cell:l(({record:t})=>[e(d,{disabled:t.identify==="super_admin",status:"success",size:"small",onClick:y=>H(t)},{icon:l(()=>[e(x)]),default:l(()=>[f(" "+g(a.$t("roleManagement.columns.operations.edit")),1)]),_:2},1032,["disabled","onClick"])]),_:1},8,["title"])]),_:1},8,["selectedKeys","loading","data","row-selection"])):q("",!0)]),_:1},8,["title"]),e(ae,{key:"2",title:a.$t("menu.card.tabTwo")},{default:l(()=>[b.value==2?(S(),A(W,{key:0,style:{"margin-bottom":"16px"}},{default:l(()=>[e(X,{span:16},{default:l(()=>[e(k,null,{default:l(()=>[e(d,{type:"primary",onClick:J},{icon:l(()=>[e(r)]),default:l(()=>[f(" "+g(a.$t("roleManagement.operation.create")),1)]),_:1}),e(w,{"popup-visible":V.value,content:a.$t("roleManagement.button.confirmation.delete"),onOk:E,onCancel:G},{default:l(()=>[e(d,{type:"primary",onClick:P},{icon:l(()=>[e(C)]),default:l(()=>[f(" "+g(a.$t("roleManagement.operation.delete")),1)]),_:1})]),_:1},8,["popup-visible","content"])]),_:1})]),_:1})]),_:1})):q("",!0),b.value==2?(S(),A(ee,{key:1,selectedKeys:_.value,"onUpdate:selectedKeys":o[1]||(o[1]=t=>_.value=t),"row-key":"id",loading:U(O),data:K.value,bordered:!1,"row-selection":U(B),pagination:!1},{columns:l(()=>[e(i,{title:a.$t("roleManagement.columns.id"),"data-index":"id"},null,8,["title"]),e(i,{title:a.$t("roleManagement.columns.name"),"data-index":"name"},null,8,["title"]),e(i,{title:a.$t("roleManagement.columns.identify"),"data-index":"identify"},null,8,["title"]),e(i,{title:a.$t("roleManagement.columns.createdAt"),"data-index":"createdAt"},null,8,["title"]),e(i,{title:a.$t("roleManagement.columns.status"),"data-index":"status"},{cell:l(({record:t})=>[e(k,null,{default:l(()=>[e(L,{modelValue:t.status,"onUpdate:modelValue":y=>t.status=y,disabled:t.identify==="super_admin",loading:j.value,"checked-value":1,"unchecked-value":0,onChange:y=>Q(t)},{"checked-icon":l(()=>[e(Y)]),"unchecked-icon":l(()=>[e(Z)]),_:2},1032,["modelValue","onUpdate:modelValue","disabled","loading","onChange"])]),_:2},1024)]),_:1},8,["title"]),e(i,{title:a.$t("roleManagement.columns.operations"),"data-index":"operations"},{cell:l(({record:t})=>[e(d,{disabled:t.identify==="super_admin",status:"success",size:"small",onClick:y=>H(t)},{icon:l(()=>[e(x)]),default:l(()=>[f(" "+g(a.$t("roleManagement.columns.operations.edit")),1)]),_:2},1032,["disabled","onClick"])]),_:1},8,["title"])]),_:1},8,["selectedKeys","loading","data","row-selection"])):q("",!0)]),_:1},8,["title"])]),_:1},8,["modelValue"])]),_:1}),e(he,{visible:h.value,"onUpdate:visible":o[14]||(o[14]=t=>h.value=t),width:"auto",title:I.value==="add"?a.$t("roleManagement.form.title.add"):a.$t("roleManagement.form.title.edit"),footer:!1},{default:l(()=>[e(Me,{ref_key:"formRef",ref:D,model:n.value,style:{width:"600px"},onSubmit:me},{default:l(()=>[de(e(c,{field:"type",label:a.$t("roleManagement.form.type"),rules:[{required:!0,message:a.$t("roleManagement.form.placeholder.select")}]},{default:l(()=>[e(ge,{modelValue:n.value.type,"onUpdate:modelValue":o[3]||(o[3]=t=>n.value.type=t),options:U(re),placeholder:a.$t("roleManagement.form.placeholder.select")},null,8,["modelValue","options","placeholder"])]),_:1},8,["label","rules"]),[[ue,!1]]),de(e(c,{field:"id"},{default:l(()=>[e(T,{modelValue:n.value.id,"onUpdate:modelValue":o[4]||(o[4]=t=>n.value.id=t)},null,8,["modelValue"])]),_:1},512),[[ue,!1]]),e(c,{field:"name",label:a.$t("roleManagement.form.name"),rules:[{required:!0,message:a.$t("roleManagement.form.placeholder.input")}],"validate-trigger":["change","input"]},{default:l(()=>[e(T,{modelValue:n.value.name,"onUpdate:modelValue":o[5]||(o[5]=t=>n.value.name=t),placeholder:a.$t("roleManagement.form.placeholder.input")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),e(c,{field:"appName",label:a.$t("roleManagement.form.appName"),rules:[{required:!0,message:a.$t("roleManagement.form.placeholder.input")}],"validate-trigger":["change","input"]},{default:l(()=>[e(T,{modelValue:n.value.appName,"onUpdate:modelValue":o[6]||(o[6]=t=>n.value.appName=t),placeholder:a.$t("roleManagement.form.placeholder.input")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),e(c,{field:"nodeIds",label:a.$t("roleManagement.form.nodeIds"),rules:[{required:!0,message:a.$t("roleManagement.form.placeholder.select")}]},{default:l(()=>[e(ve,{modelValue:n.value.nodeIds,"onUpdate:modelValue":o[7]||(o[7]=t=>n.value.nodeIds=t),"allow-search":!0,"allow-clear":!0,"tree-checkable":!0,"tree-check-strictly":!0,"max-tag-count":4,data:z.value,placeholder:a.$t("roleManagement.form.placeholder.select"),"dropdown-style":{minHeight:"300px",overflow:"auto"},onChange:ce},null,8,["modelValue","data","placeholder"])]),_:1},8,["label","rules"]),e(c,{field:"identify",label:a.$t("roleManagement.form.identify"),rules:[{required:!0,message:a.$t("roleManagement.form.placeholder.input")}],"validate-trigger":["change","input"]},{default:l(()=>[e(T,{modelValue:n.value.identify,"onUpdate:modelValue":o[8]||(o[8]=t=>n.value.identify=t),placeholder:a.$t("roleManagement.form.placeholder.input")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),e(c,{field:"scopes",label:a.$t("menuManagement.form.scopes")},{default:l(()=>[e(k,{size:"large"},{default:l(()=>[e(be,{modelValue:n.value.scopes,"onUpdate:modelValue":o[9]||(o[9]=t=>n.value.scopes=t),disabled:!0},{default:l(()=>[e(le,{value:"admin"},{default:l(()=>[f(g(a.$t("roleManagement.form.scopes.admin")),1)]),_:1}),e(le,{value:"member"},{default:l(()=>[f(g(a.$t("roleManagement.form.scopes.member")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["label"]),e(c,{field:"sort",label:a.$t("roleManagement.form.sort")},{default:l(()=>[e(_e,{modelValue:n.value.sort,"onUpdate:modelValue":o[10]||(o[10]=t=>n.value.sort=t),placeholder:a.$t("roleManagement.form.placeholder.input"),min:0,mode:"button"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e(c,{field:"status",label:a.$t("roleManagement.form.status")},{default:l(()=>[e(L,{modelValue:n.value.status,"onUpdate:modelValue":o[11]||(o[11]=t=>n.value.status=t),"checked-value":1,"unchecked-value":0},null,8,["modelValue"])]),_:1},8,["label"]),e(c,{field:"remark",label:a.$t("roleManagement.form.remark")},{default:l(()=>[e(ye,{modelValue:n.value.remark,"onUpdate:modelValue":o[12]||(o[12]=t=>n.value.remark=t),placeholder:a.$t("roleManagement.form.placeholder.input")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e(c,null,{default:l(()=>[e(k,null,{default:l(()=>[e(d,{loading:N.value,type:"primary","html-type":"submit"},{default:l(()=>[f(g(a.$t("roleManagement.button.submit")),1)]),_:1},8,["loading"]),e(d,{type:"outline",onClick:o[13]||(o[13]=t=>a.$refs.formRef.resetFields())},{default:l(()=>[f(g(a.$t("roleManagement.button.reset")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["visible","title"])])}}}));var Sa=Re(ma,[["__scopeId","data-v-0e2be233"]]);export{Sa as default};
