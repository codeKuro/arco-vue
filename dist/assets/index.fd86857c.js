var Z=Object.defineProperty,ee=Object.defineProperties;var te=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var ae=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable;var G=(_,a,n)=>a in _?Z(_,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):_[a]=n,D=(_,a)=>{for(var n in a||(a={}))ae.call(a,n)&&G(_,n,a[n]);if(E)for(var n of E(a))ne.call(a,n)&&G(_,n,a[n]);return _},H=(_,a)=>ee(_,te(a));import{_ as I,a as oe}from"./index.66d117c3.js";/* empty css               */import{d as w,aJ as B,A as o,B as L,aG as t,aF as e,E as f,u as r,aL as u,aM as p,bt as N,br as se,bB as R,b3 as U,aC as s,bO as T,bP as z,ba as _e,bj as S,aH as M,aI as q,b2 as F,bS as ce,bd as V,be as P,e as re,bT as J,bU as O,bV as W,bW as K,bv as le,bw as ie}from"./arco.a53b75be.js";/* empty css               *//* empty css                *//* empty css                *//* empty css                *//* empty css                *//* empty css               *//* empty css                *//* empty css               *//* empty css              *//* empty css               *//* empty css                *//* empty css              *//* empty css                */import{u as Q}from"./loading.c387c5f5.js";/* empty css               */import{q as de,a as ue,b as pe}from"./user-center.9771fddd.js";import{u as X}from"./request.45df08cd.js";/* empty css                */import"./chart.da3854a0.js";import"./vue.0de19953.js";const me={class:"header"},fe=["src"],ve={class:"user-msg"},ye=w({setup(_){const a=oe();return(n,i)=>{const l=B("icon-camera"),c=N,g=se,v=B("icon-user"),m=R,y=B("icon-home"),x=B("icon-location"),h=U;return o(),L("div",me,[t(h,{size:12,direction:"vertical",align:"center"},{default:e(()=>[t(c,{size:64},{"trigger-icon":e(()=>[t(l)]),default:e(()=>[f("img",{src:r(a).avatar},null,8,fe)]),_:1}),t(g,{heading:6,style:{margin:"0"}},{default:e(()=>[u(p(r(a).name),1)]),_:1}),f("div",ve,[t(h,{size:18},{default:e(()=>[f("div",null,[t(v),t(m,null,{default:e(()=>[u(p(r(a).jobName),1)]),_:1})]),f("div",null,[t(y),t(m,null,{default:e(()=>[u(p(r(a).organizationName),1)]),_:1})]),f("div",null,[t(x),t(m,null,{default:e(()=>[u(p(r(a).locationName),1)]),_:1})])]),_:1})])]),_:1})])}}});var ge=I(ye,[["__scopeId","data-v-7b30efbe"]]);const he=w({setup(_){const{loading:a,setLoading:n}=Q(!0);return setTimeout(()=>{n(!1)},500),(i,l)=>{const c=T,g=z,v=_e,m=S;return o(),s(m,{class:"general-card",title:i.$t("userInfo.title.latestNotification")},{default:e(()=>[r(a)?(o(),s(g,{key:0,animation:!0},{default:e(()=>[t(c,{rows:3})]),_:1})):(o(),s(v,{key:1,status:"404"},{subtitle:e(()=>[u(p(i.$t("userInfo.nodata")),1)]),_:1}))]),_:1},8,["title"])}}});var xe=I(he,[["__scopeId","data-v-53a86088"]]);const be=["src"],ke=w({setup(_){const a=Array(6).fill({}),{loading:n,response:i}=X(de,a);return(l,c)=>{const g=F,v=T,m=z,y=R,x=N,h=ce,b=U,k=S,$=V,A=P;return o(),s(k,{class:"general-card",title:l.$t("userInfo.title.myProject")},{extra:e(()=>[t(g,null,{default:e(()=>[u(p(l.$t("userInfo.showMore")),1)]),_:1})]),default:e(()=>[t(A,{gutter:16},{default:e(()=>[(o(!0),L(q,null,M(r(i),(d,C)=>(o(),s($,{key:C,xs:12,sm:12,md:12,lg:12,xl:8,xxl:8,class:"my-project-item"},{default:e(()=>[t(k,null,{default:e(()=>[r(n)?(o(),s(m,{key:0,loading:r(n),animation:!0},{default:e(()=>[t(v,{rows:3})]),_:1},8,["loading"])):(o(),s(b,{key:1,direction:"vertical"},{default:e(()=>[t(y,{bold:""},{default:e(()=>[u(p(d.name),1)]),_:2},1024),t(y,{type:"secondary"},{default:e(()=>[u(p(d.description),1)]),_:2},1024),t(b,null,{default:e(()=>[t(h,{size:24},{default:e(()=>[u(p(d.contributors)+" ",1),(o(!0),L(q,null,M(d.contributors,(j,Y)=>(o(),s(x,{key:Y,size:32},{default:e(()=>[f("img",{alt:"avatar",src:j.avatar},null,8,be)]),_:2},1024))),128))]),_:2},1024),t(y,{type:"secondary"},{default:e(()=>[u(" \u7B49"+p(d.peopleNumber)+"\u4EBA ",1)]),_:2},1024)]),_:2},1024)]),_:2},1024))]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["title"])}}});var je=I(ke,[["__scopeId","data-v-17feefc4"]]);const Ie=["src"],we=w({setup(_){const{loading:a,setLoading:n}=Q(!0),i=re(new Array(7).fill({}));return(async()=>{try{const{data:c}=await ue();i.value=c}catch{}finally{n(!1)}})(),(c,g)=>{const v=F,m=J,y=V,x=T,h=P,b=z,k=N,$=O,A=W,d=K,C=S;return o(),s(C,{class:"general-card",title:c.$t("userInfo.title.latestActivity")},{extra:e(()=>[t(v,null,{default:e(()=>[u(p(c.$t("userInfo.viewAll")),1)]),_:1})]),default:e(()=>[t(d,{bordered:!1},{default:e(()=>[(o(!0),L(q,null,M(i.value,j=>(o(),s(A,{key:j.id,"action-layout":"horizontal"},{default:e(()=>[r(a)?(o(),s(b,{key:0,loading:r(a),animation:!0,class:"skeleton-item"},{default:e(()=>[t(h,{gutter:6},{default:e(()=>[t(y,{span:2},{default:e(()=>[t(m,{shape:"circle"})]),_:1}),t(y,{span:22},{default:e(()=>[t(x,{widths:["40%","100%"],rows:2})]),_:1})]),_:1})]),_:1},8,["loading"])):(o(),s($,{key:1,title:j.title,description:j.description},{avatar:e(()=>[t(k,null,{default:e(()=>[f("img",{src:j.avatar},null,8,Ie)]),_:2},1024)]),_:2},1032,["title","description"]))]),_:2},1024))),128))]),_:1})]),_:1},8,["title"])}}});var Le=I(we,[["__scopeId","data-v-77f93f87"]]);const $e=["src"],Ae=w({setup(_){const a=new Array(4).fill({}),{loading:n,response:i}=X(pe,a);return(l,c)=>{const g=J,v=V,m=T,y=P,x=z,h=N,b=O,k=W,$=K,A=S;return o(),s(A,{class:"general-card",title:l.$t("userInfo.tab.title.team"),"header-style":{paddingBottom:"18px"},"body-style":{paddingBottom:"12px"}},{default:e(()=>[t($,{bordered:!1},{default:e(()=>[(o(!0),L(q,null,M(r(i),d=>(o(),s(k,{key:d.id,"action-layout":"horizontal"},{default:e(()=>[r(n)?(o(),s(x,{key:0,loading:r(n),animation:!0},{default:e(()=>[t(y,{gutter:6},{default:e(()=>[t(v,{span:6},{default:e(()=>[t(g,{shape:"circle"})]),_:1}),t(v,{span:16},{default:e(()=>[t(m,{widths:["100%","40%"],rows:2})]),_:1})]),_:1})]),_:1},8,["loading"])):(o(),s(b,{key:1,title:d.name},{avatar:e(()=>[t(h,null,{default:e(()=>[f("img",{src:d.avatar},null,8,$e)]),_:2},1024)]),description:e(()=>[u(" \u5171"+p(d.peopleNumber)+"\u4EBA ",1)]),_:2},1032,["title"]))]),_:2},1024))),128))]),_:1})]),_:1},8,["title"])}}});var Be=I(Ae,[["__scopeId","data-v-50e8574b"]]);const Ne={class:"container"},Te={class:"content"},ze={class:"content-left"},Se={class:"content-right"},Me={name:"Info"},qe=w(H(D({},Me),{setup(_){return(a,n)=>{const i=B("Breadcrumb"),l=le,c=ie;return o(),L("div",Ne,[t(i,{items:["menu.user","menu.user.info"]},null,8,["items"]),t(ge),f("div",Te,[f("div",ze,[t(c,{cols:24,"col-gap":16,"row-gap":16},{default:e(()=>[t(l,{span:24},{default:e(()=>[t(je)]),_:1}),t(l,{span:24},{default:e(()=>[t(Le)]),_:1})]),_:1})]),f("div",Se,[t(c,{cols:24,"row-gap":16},{default:e(()=>[t(l,{span:24},{default:e(()=>[t(Be)]),_:1}),t(l,{class:"panel",span:24},{default:e(()=>[t(xe)]),_:1})]),_:1})])])])}}}));var _t=I(qe,[["__scopeId","data-v-46d9b8dc"]]);export{_t as default};
