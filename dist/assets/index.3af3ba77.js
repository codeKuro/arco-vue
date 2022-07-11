var le=Object.defineProperty,oe=Object.defineProperties;var ne=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var se=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable;var P=(i,s,c)=>s in i?le(i,s,{enumerable:!0,configurable:!0,writable:!0,value:c}):i[s]=c,T=(i,s)=>{for(var c in s||(s={}))se.call(s,c)&&P(i,c,s[c]);if(N)for(var c of N(s))re.call(s,c)&&P(i,c,s[c]);return i},S=(i,s)=>oe(i,ne(s));import{d as ie,O as ce,r as M,$ as ue,Q as B,e as o,bd as de,o as _,g as C,f as e,w as a,u as v,i as d,t as p,c as y,a2 as pe,a0 as me,a1 as fe,L as U}from"./vendor.e6e9099f.js";import{u as _e}from"./loading.3e447ed2.js";import{q as be}from"./list.2e0e5ec5.js";import{_ as he}from"./index.525cc014.js";const q=i=>(me("data-v-71ecb013"),i=i(),fe(),i),Te={class:"container"},ve=q(()=>U("img",{alt:"avatar",src:"//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/581b17753093199839f2e327e726b157.svg~tplv-49unhts6dw-image.image"},null,-1)),ye=q(()=>U("img",{alt:"avatar",src:"//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/77721e365eb2ab786c889682cbc721c1.svg~tplv-49unhts6dw-image.image"},null,-1)),ge=q(()=>U("img",{alt:"avatar",src:"//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/ea8b09190046da0ea7e070d83c5d1731.svg~tplv-49unhts6dw-image.image"},null,-1)),$e={key:0,class:"circle"},Ve={key:1,class:"circle pass"},we={name:"SearchTable"},ke=ie(S(T({},we),{setup(i){const s=()=>({number:"",name:"",contentType:"",filterType:"",createdTime:[],status:""}),{loading:c,setLoading:I}=_e(!0),{t:f}=ce(),j=M([]),r=M(s()),g={current:1,pageSize:20},$=ue(T({},g)),E=B(()=>[{label:f("searchTable.form.contentType.img"),value:"img"},{label:f("searchTable.form.contentType.horizontalVideo"),value:"horizontalVideo"},{label:f("searchTable.form.contentType.verticalVideo"),value:"verticalVideo"}]),F=B(()=>[{label:f("searchTable.form.filterType.artificial"),value:"artificial"},{label:f("searchTable.form.filterType.rules"),value:"rules"}]),Q=B(()=>[{label:f("searchTable.form.status.online"),value:"online"},{label:f("searchTable.form.status.offline"),value:"offline"}]),V=async(t={current:1,pageSize:20})=>{I(!0);try{const{data:n}=await be(t);j.value=n.list,$.current=t.current,$.total=n.total}catch{}finally{I(!1)}},A=()=>{V(T(T({},g),r.value))},G=t=>{V(S(T({},g),{current:t}))};V();const H=()=>{r.value=s()};return(t,n)=>{const J=o("Breadcrumb"),L=o("a-input"),b=o("a-form-item"),u=o("a-col"),w=o("a-select"),K=o("a-range-picker"),k=o("a-row"),R=o("a-form"),O=o("a-divider"),W=o("icon-search"),h=o("a-button"),X=o("icon-refresh"),z=o("a-space"),Y=o("icon-plus"),Z=o("a-upload"),x=o("icon-download"),m=o("a-table-column"),D=o("a-avatar"),ee=o("a-table"),ae=o("a-card"),te=de("permission");return _(),C("div",Te,[e(J,{items:["menu.list","menu.list.searchTable"]},null,8,["items"]),e(ae,{class:"general-card",title:t.$t("menu.list.searchTable")},{default:a(()=>[e(k,null,{default:a(()=>[e(u,{flex:1},{default:a(()=>[e(R,{model:r.value,"label-col-props":{span:6},"wrapper-col-props":{span:18},"label-align":"left"},{default:a(()=>[e(k,{gutter:16},{default:a(()=>[e(u,{span:8},{default:a(()=>[e(b,{field:"number",label:t.$t("searchTable.form.number")},{default:a(()=>[e(L,{modelValue:r.value.number,"onUpdate:modelValue":n[0]||(n[0]=l=>r.value.number=l),placeholder:t.$t("searchTable.form.number.placeholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),e(u,{span:8},{default:a(()=>[e(b,{field:"name",label:t.$t("searchTable.form.name")},{default:a(()=>[e(L,{modelValue:r.value.name,"onUpdate:modelValue":n[1]||(n[1]=l=>r.value.name=l),placeholder:t.$t("searchTable.form.name.placeholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),e(u,{span:8},{default:a(()=>[e(b,{field:"contentType",label:t.$t("searchTable.form.contentType")},{default:a(()=>[e(w,{modelValue:r.value.contentType,"onUpdate:modelValue":n[2]||(n[2]=l=>r.value.contentType=l),options:v(E),placeholder:t.$t("searchTable.form.selectDefault")},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"])]),_:1}),e(u,{span:8},{default:a(()=>[e(b,{field:"filterType",label:t.$t("searchTable.form.filterType")},{default:a(()=>[e(w,{modelValue:r.value.filterType,"onUpdate:modelValue":n[3]||(n[3]=l=>r.value.filterType=l),options:v(F),placeholder:t.$t("searchTable.form.selectDefault")},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"])]),_:1}),e(u,{span:8},{default:a(()=>[e(b,{field:"createdTime",label:t.$t("searchTable.form.createdTime")},{default:a(()=>[e(K,{modelValue:r.value.createdTime,"onUpdate:modelValue":n[4]||(n[4]=l=>r.value.createdTime=l),style:{width:"100%"}},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),e(u,{span:8},{default:a(()=>[e(b,{field:"status",label:t.$t("searchTable.form.status")},{default:a(()=>[e(w,{modelValue:r.value.status,"onUpdate:modelValue":n[5]||(n[5]=l=>r.value.status=l),options:v(Q),placeholder:t.$t("searchTable.form.selectDefault")},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(O,{style:{height:"84px"},direction:"vertical"}),e(u,{flex:"86px",style:{"text-align":"right"}},{default:a(()=>[e(z,{direction:"vertical",size:18},{default:a(()=>[e(h,{type:"primary",onClick:A},{icon:a(()=>[e(W)]),default:a(()=>[d(" "+p(t.$t("searchTable.form.search")),1)]),_:1}),e(h,{onClick:H},{icon:a(()=>[e(X)]),default:a(()=>[d(" "+p(t.$t("searchTable.form.reset")),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(O,{style:{"margin-top":"0"}}),e(k,{style:{"margin-bottom":"16px"}},{default:a(()=>[e(u,{span:16},{default:a(()=>[e(z,null,{default:a(()=>[e(h,{type:"primary"},{icon:a(()=>[e(Y)]),default:a(()=>[d(" "+p(t.$t("searchTable.operation.create")),1)]),_:1}),e(Z,{action:"/"},{"upload-button":a(()=>[e(h,null,{default:a(()=>[d(p(t.$t("searchTable.operation.import")),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(u,{span:8,style:{"text-align":"right"}},{default:a(()=>[e(h,null,{icon:a(()=>[e(x)]),default:a(()=>[d(" "+p(t.$t("searchTable.operation.download")),1)]),_:1})]),_:1})]),_:1}),e(ee,{"row-key":"id",loading:v(c),pagination:v($),data:j.value,bordered:!1,onPageChange:G},{columns:a(()=>[e(m,{title:t.$t("searchTable.columns.number"),"data-index":"number"},null,8,["title"]),e(m,{title:t.$t("searchTable.columns.name"),"data-index":"name"},null,8,["title"]),e(m,{title:t.$t("searchTable.columns.contentType"),"data-index":"contentType"},{cell:a(({record:l})=>[e(z,null,{default:a(()=>[l.contentType==="img"?(_(),y(D,{key:0,size:16,shape:"square"},{default:a(()=>[ve]),_:1})):l.contentType==="horizontalVideo"?(_(),y(D,{key:1,size:16,shape:"square"},{default:a(()=>[ye]),_:1})):(_(),y(D,{key:2,size:16,shape:"square"},{default:a(()=>[ge]),_:1})),d(" "+p(t.$t(`searchTable.form.contentType.${l.contentType}`)),1)]),_:2},1024)]),_:1},8,["title"]),e(m,{title:t.$t("searchTable.columns.filterType"),"data-index":"filterType"},{cell:a(({record:l})=>[d(p(t.$t(`searchTable.form.filterType.${l.filterType}`)),1)]),_:1},8,["title"]),e(m,{title:t.$t("searchTable.columns.count"),"data-index":"count"},null,8,["title"]),e(m,{title:t.$t("searchTable.columns.createdTime"),"data-index":"createdTime"},null,8,["title"]),e(m,{title:t.$t("searchTable.columns.status"),"data-index":"status"},{cell:a(({record:l})=>[l.status==="offline"?(_(),C("span",$e)):(_(),C("span",Ve)),d(" "+p(t.$t(`searchTable.form.status.${l.status}`)),1)]),_:1},8,["title"]),e(m,{title:t.$t("searchTable.columns.operations"),"data-index":"operations"},{cell:a(()=>[pe((_(),y(h,{type:"text",size:"small"},{default:a(()=>[d(p(t.$t("searchTable.columns.operations.view")),1)]),_:1})),[[te,["admin"]]])]),_:1},8,["title"])]),_:1},8,["loading","pagination","data"])]),_:1},8,["title"])])}}}));var Ue=he(ke,[["__scopeId","data-v-71ecb013"]]);export{Ue as default};