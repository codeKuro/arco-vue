var k=Object.defineProperty,E=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var F=(u,r,i)=>r in u?k(u,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):u[r]=i,$=(u,r)=>{for(var i in r||(r={}))w.call(r,i)&&F(u,i,r[i]);if(v)for(var i of v(r))D.call(r,i)&&F(u,i,r[i]);return u},j=(u,r)=>E(u,S(r));import{_ as I}from"./index.093538c0.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css                *//* empty css                *//* empty css              *//* empty css               *//* empty css               */import{d as L,e as A,aJ as N,A as T,B as V,aG as o,aF as e,aL as l,aM as _,E as G,u as z,bC as J,bk as M,b5 as O,bd as H,b0 as K,be as P,bj as Q,bo as U,b3 as W,aS as X,b4 as Y}from"./arco.a53b75be.js";import{u as Z}from"./loading.c387c5f5.js";import"./chart.da3854a0.js";import"./vue.0de19953.js";const x={class:"container"},ee=l("\u81EA\u5B9A\u4E49"),oe=l("\u6A21\u5F0F1"),ae=l("\u6A21\u5F0F2"),le=l("\u5206\u8FA8\u73871"),de=l("\u5206\u8FA8\u73872"),te=l("\u5206\u8FA8\u73873"),re=l(" fps "),ne=l("\u5206\u8FA8\u73871"),ie=l("\u5206\u8FA8\u73872"),ue=l("\u5206\u8FA8\u73873"),se=l(" bps "),pe=l(" bps "),ce=l(" bps "),_e=l(" fps "),fe=l(" bps "),me=l("\u81EA\u5B9A\u4E49"),he=l("\u6A21\u5F0F1"),ge=l("\u6A21\u5F0F2"),be=l("1"),ve=l("2"),Fe=l("3"),$e=l(" bps "),je=l(" bps "),Ae=l(" fps "),qe={class:"actions"},Be={name:"Group"},Re=L(j($({},Be),{setup(u){const r=A({}),i=A(),{loading:q,setLoading:h}=Z(),B=async()=>{var f;await((f=i.value)==null?void 0:f.validate())||h(!0),setTimeout(()=>{h(!1)},1e3)};return(a,f)=>{const R=N("Breadcrumb"),d=J,p=M,t=O,n=H,s=K,c=P,m=Q,y=U,g=W,b=X,C=Y;return T(),V("div",x,[o(R,{items:["menu.form","menu.form.group"]},null,8,["items"]),o(C,{ref_key:"formRef",ref:i,layout:"vertical",model:r.value},{default:e(()=>[o(g,{direction:"vertical",size:16},{default:e(()=>[o(m,{class:"general-card"},{title:e(()=>[l(_(a.$t("groupForm.title.video")),1)]),default:e(()=>[o(c,{gutter:80},{default:e(()=>[o(n,{span:8},{default:e(()=>[o(t,{label:a.$t("groupForm.form.label.video.mode"),field:"video.mode"},{default:e(()=>[o(p,{placeholder:a.$t("groupForm.placeholder.video.mode")},{default:e(()=>[o(d,{value:"custom"},{default:e(()=>[ee]),_:1}),o(d,{value:"mode1"},{default:e(()=>[oe]),_:1}),o(d,{value:"mode2"},{default:e(()=>[ae]),_:1})]),_:1},8,["placeholder"])]),_:1},8,["label"])]),_:1}),o(n,{span:8},{default:e(()=>[o(t,{label:a.$t("groupForm.form.label.video.acquisition.resolution"),field:"video.acquisition.resolution"},{default:e(()=>[o(p,{placeholder:a.$t("groupForm.placeholder.video.acquisition.resolution")},{default:e(()=>[o(d,{value:"resolution1"},{default:e(()=>[le]),_:1}),o(d,{value:"resolution2"},{default:e(()=>[de]),_:1}),o(d,{value:"resolution3"},{default:e(()=>[te]),_:1})]),_:1},8,["placeholder"])]),_:1},8,["label"])]),_:1}),o(n,{span:8},{default:e(()=>[o(t,{label:a.$t("groupForm.form.label.video.acquisition.frameRate"),field:"video.acquisition.frameRate"},{default:e(()=>[o(s,{placeholder:a.$t("groupForm.placeholder.video.acquisition.frameRate")},{append:e(()=>[re]),_:1},8,["placeholder"])]),_:1},8,["label"])]),_:1})]),_:1}),o(c,{gutter:80},{default:e(()=>[o(n,{span:8},{default:e(()=>[o(t,{label:a.$t("groupForm.form.label.video.encoding.resolution"),field:"video.encoding.resolution"},{default:e(()=>[o(p,{placeholder:a.$t("groupForm.placeholder.video.encoding.resolution")},{default:e(()=>[o(d,{value:"resolution1"},{default:e(()=>[ne]),_:1}),o(d,{value:"resolution2"},{default:e(()=>[ie]),_:1}),o(d,{value:"resolution3"},{default:e(()=>[ue]),_:1})]),_:1},8,["placeholder"])]),_:1},8,["label"])]),_:1}),o(n,{span:8},{default:e(()=>[o(t,{label:a.$t("groupForm.form.label.video.encoding.rate.min"),field:"video.encoding.rate.min"},{default:e(()=>[o(s,{placeholder:a.$t("groupForm.placeholder.video.encoding.rate.min"),"add-after":"bps"},{append:e(()=>[se]),_:1},8,["placeholder"])]),_:1},8,["label"])]),_:1}),o(n,{span:8},{default:e(()=>[o(t,{label:a.$t("groupForm.form.label.video.encoding.rate.max"),field:"video.encoding.rate.max"},{default:e(()=>[o(s,{placeholder:a.$t("groupForm.placeholder.video.encoding.rate.max")},{append:e(()=>[pe]),_:1},8,["placeholder"])]),_:1},8,["label"])]),_:1})]),_:1}),o(c,{gutter:80},{default:e(()=>[o(n,{span:8},{default:e(()=>[o(t,{label:a.$t("groupForm.form.label.video.encoding.rate.default"),field:"video.encoding.rate.default"},{default:e(()=>[o(s,{placeholder:a.$t("groupForm.placeholder.video.encoding.rate.default")},{append:e(()=>[ce]),_:1},8,["placeholder"])]),_:1},8,["label"])]),_:1}),o(n,{span:8},{default:e(()=>[o(t,{label:a.$t("groupForm.form.label.video.encoding.frameRate"),field:"video.encoding.frameRate"},{default:e(()=>[o(s,{placeholder:a.$t("groupForm.placeholder.video.encoding.frameRate")},{append:e(()=>[_e]),_:1},8,["placeholder"])]),_:1},8,["label"])]),_:1}),o(n,{span:8},{default:e(()=>[o(t,{label:a.$t("groupForm.form.label.video.encoding.profile"),field:"video.encoding.profile"},{default:e(()=>[o(s,{placeholder:a.$t("groupForm.placeholder.video.encoding.profile")},{append:e(()=>[fe]),_:1},8,["placeholder"])]),_:1},8,["label"])]),_:1})]),_:1})]),_:1}),o(m,{class:"general-card"},{title:e(()=>[l(_(a.$t("groupForm.title.audio")),1)]),default:e(()=>[o(c,{gutter:80},{default:e(()=>[o(n,{span:8},{default:e(()=>[o(t,{label:a.$t("groupForm.form.label.audio.mode"),field:"audio.mode"},{default:e(()=>[o(p,{placeholder:a.$t("groupForm.placeholder.audio.mode")},{default:e(()=>[o(d,{value:"custom"},{default:e(()=>[me]),_:1}),o(d,{value:"mode1"},{default:e(()=>[he]),_:1}),o(d,{value:"mode2"},{default:e(()=>[ge]),_:1})]),_:1},8,["placeholder"])]),_:1},8,["label"])]),_:1}),o(n,{span:8},{default:e(()=>[o(t,{label:a.$t("groupForm.form.label.audio.acquisition.channels"),field:"audio.acquisition.channels"},{default:e(()=>[o(p,{placeholder:a.$t("groupForm.placeholder.audio.acquisition.channels")},{default:e(()=>[o(d,{value:"1"},{default:e(()=>[be]),_:1}),o(d,{value:"2"},{default:e(()=>[ve]),_:1}),o(d,{value:"3"},{default:e(()=>[Fe]),_:1})]),_:1},8,["placeholder"])]),_:1},8,["label"])]),_:1}),o(n,{span:8},{default:e(()=>[o(t,{label:a.$t("groupForm.form.label.audio.encoding.channels"),field:"audio.encoding.channels"},{default:e(()=>[o(s,{placeholder:a.$t("groupForm.placeholder.audio.encoding.channels")},{append:e(()=>[$e]),_:1},8,["placeholder"])]),_:1},8,["label"])]),_:1})]),_:1}),o(c,{gutter:80},{default:e(()=>[o(n,{span:8},{default:e(()=>[o(t,{label:a.$t("groupForm.form.label.audio.encoding.rate"),field:"audio.encoding.rate"},{default:e(()=>[o(s,{placeholder:a.$t("groupForm.placeholder.audio.encoding.rate")},{append:e(()=>[je]),_:1},8,["placeholder"])]),_:1},8,["label"])]),_:1}),o(n,{span:8},{default:e(()=>[o(t,{label:a.$t("groupForm.form.label.audio.encoding.profile"),field:"audio.encoding.profile"},{default:e(()=>[o(s,{placeholder:a.$t("groupForm.placeholder.audio.encoding.profile")},{append:e(()=>[Ae]),_:1},8,["placeholder"])]),_:1},8,["label"])]),_:1})]),_:1})]),_:1}),o(m,{class:"general-card",bordered:!1},{title:e(()=>[l(_(a.$t("groupForm.title.description")),1)]),default:e(()=>[o(t,{label:a.$t("groupForm.form.label.parameterDescription"),field:"audio.approvers"},{default:e(()=>[o(y,{placeholder:a.$t("groupForm.placeholder.description")},null,8,["placeholder"])]),_:1},8,["label"])]),_:1})]),_:1}),G("div",qe,[o(g,null,{default:e(()=>[o(b,null,{default:e(()=>[l(_(a.$t("groupForm.reset")),1)]),_:1}),o(b,{type:"primary",loading:z(q),onClick:B},{default:e(()=>[l(_(a.$t("groupForm.submit")),1)]),_:1},8,["loading"])]),_:1})])]),_:1},8,["model"])])}}}));var Me=I(Re,[["__scopeId","data-v-b843b21a"]]);export{Me as default};
