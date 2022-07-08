var M=Object.defineProperty,U=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var R=(s,o,a)=>o in s?M(s,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[o]=a,T=(s,o)=>{for(var a in o||(o={}))Q.call(o,a)&&R(s,a,o[a]);if(N)for(var a of N(o))W.call(o,a)&&R(s,a,o[a]);return s},V=(s,o)=>U(s,K(o));import{c as O,_ as B,u as X}from"./index.c67f8be3.js";/* empty css                *//* empty css                *//* empty css                *//* empty css               */import{d as w,c as Y,A as p,B as y,aG as t,aF as i,aI as Z,aH as D,aC as I,aM as r,u as k,bO as ee,bP as ae,bF as te,b3 as A,e as L,aL as m,E as S,aD as F,b7 as ie,b8 as oe,bf as le,aS as z,bg as ne,bx as se,bj as E,aJ as ce,bI as re,bJ as de}from"./arco.a53b75be.js";import{u as C}from"./loading.c387c5f5.js";/* empty css                *//* empty css                *//* empty css               *//* empty css              *//* empty css               *//* empty css                *//* empty css              *//* empty css                */import"./chart.da3854a0.js";import"./vue.0de19953.js";function J(){return O.get("/api/profile/basic")}function ue(){return O.get("/api/operation/log")}const pe={class:"item-container"},_e={key:1},be=w({props:{type:{type:String,default:""},renderData:{type:Object,required:!0},loading:{type:Boolean,default:!1}},setup(s){const o=s,{t:a}=X(),v=Y(()=>{var _,c,b,f,n,d,u,h,$,g,x,P,j,q;const{renderData:e}=o,l=[];return l.push({title:o.type==="pre"?a("basicProfile.title.preVideo"):a("basicProfile.title.video"),data:[{label:a("basicProfile.label.video.mode"),value:((_=e==null?void 0:e.video)==null?void 0:_.mode)||"-"},{label:a("basicProfile.label.video.acquisition.resolution"),value:((c=e==null?void 0:e.video)==null?void 0:c.acquisition.resolution)||"-"},{label:a("basicProfile.label.video.acquisition.frameRate"),value:`${((b=e==null?void 0:e.video)==null?void 0:b.acquisition.frameRate)||"-"} fps`},{label:a("basicProfile.label.video.encoding.resolution"),value:((f=e==null?void 0:e.video)==null?void 0:f.encoding.resolution)||"-"},{label:a("basicProfile.label.video.encoding.rate.min"),value:`${((n=e==null?void 0:e.video)==null?void 0:n.encoding.rate.min)||"-"} bps`},{label:a("basicProfile.label.video.encoding.rate.max"),value:`${((d=e==null?void 0:e.video)==null?void 0:d.encoding.rate.max)||"-"} bps`},{label:a("basicProfile.label.video.encoding.rate.default"),value:`${((u=e==null?void 0:e.video)==null?void 0:u.encoding.rate.default)||"-"} bps`},{label:a("basicProfile.label.video.encoding.frameRate"),value:`${((h=e==null?void 0:e.video)==null?void 0:h.encoding.frameRate)||"-"} fpx`},{label:a("basicProfile.label.video.encoding.profile"),value:(($=e==null?void 0:e.video)==null?void 0:$.encoding.profile)||"-"}]}),l.push({title:o.type==="pre"?a("basicProfile.title.preAudio"):a("basicProfile.title.audio"),data:[{label:a("basicProfile.label.audio.mode"),value:((g=e==null?void 0:e.audio)==null?void 0:g.mode)||"-"},{label:a("basicProfile.label.audio.acquisition.channels"),value:`${((x=e==null?void 0:e.audio)==null?void 0:x.acquisition.channels)||"-"} ${a("basicProfile.unit.audio.channels")}`},{label:a("basicProfile.label.audio.encoding.channels"),value:`${((P=e==null?void 0:e.audio)==null?void 0:P.encoding.channels)||"-"} ${a("basicProfile.unit.audio.channels")}`},{label:a("basicProfile.label.audio.encoding.rate"),value:`${((j=e==null?void 0:e.audio)==null?void 0:j.encoding.rate)||"-"} kbps`},{label:a("basicProfile.label.audio.encoding.profile"),value:((q=e==null?void 0:e.audio)==null?void 0:q.encoding.profile)||"-"}]}),l});return(e,l)=>{const _=ee,c=ae,b=te,f=A;return p(),y("div",pe,[t(f,{size:16,direction:"vertical",fill:""},{default:i(()=>[(p(!0),y(Z,null,D(k(v),(n,d)=>(p(),I(b,{key:d,"label-style":{textAlign:"right",width:"200px",paddingRight:"10px",color:"rgb(var(--gray-8))"},"value-style":{width:"400px"},title:n.title,data:n.data},{value:i(({value:u})=>[s.loading?(p(),I(c,{key:0,animation:!0},{default:i(()=>[t(_,{widths:["200px"],rows:1})]),_:1})):(p(),y("span",_e,r(u),1))]),_:2},1032,["label-style","title","data"]))),128))]),_:1})])}}});var G=B(be,[["__scopeId","data-v-65b76384"]]);const H=s=>(ie("data-v-6328abb2"),s=s(),oe(),s),fe={key:0},me=H(()=>S("span",{class:"circle"},null,-1)),ve={key:1},ge=H(()=>S("span",{class:"circle pass"},null,-1)),Pe=w({setup(s){const{loading:o,setLoading:a}=C(!0),v=L([]);return(async()=>{try{const{data:l}=await ue();v.value=l}catch{}finally{a(!1)}})(),(l,_)=>{const c=le,b=z,f=ne,n=se,d=E;return p(),I(d,{class:"general-card"},{title:i(()=>[m(r(l.$t("basicProfile.title.operationLog")),1)]),default:i(()=>[t(n,{loading:k(o),style:{width:"100%"}},{default:i(()=>[t(f,{data:v.value},{columns:i(()=>[t(c,{title:l.$t("basicProfile.column.contentNumber"),"data-index":"contentNumber"},null,8,["title"]),t(c,{title:l.$t("basicProfile.column.updateContent"),"data-index":"updateContent"},null,8,["title"]),t(c,{title:l.$t("basicProfile.column.status"),"data-index":"status"},{cell:i(({record:u})=>[u.status===0?(p(),y("p",fe,[me,S("span",null,r(l.$t("basicProfile.cell.auditing")),1)])):F("",!0),u.status===1?(p(),y("p",ve,[ge,S("span",null,r(l.$t("basicProfile.cell.pass")),1)])):F("",!0)]),_:1},8,["title"]),t(c,{title:l.$t("basicProfile.column.updateTime"),"data-index":"updateTime"},null,8,["title"]),t(c,{title:l.$t("basicProfile.column.operation")},{cell:i(()=>[t(b,{type:"text"},{default:i(()=>[m(r(l.$t("basicProfile.cell.view")),1)]),_:1})]),_:1},8,["title"])]),_:1},8,["data"])]),_:1},8,["loading"])]),_:1})}}});var ye=B(Pe,[["__scopeId","data-v-6328abb2"]]);const he={class:"container"},$e={name:"Basic"},xe=w(V(T({},$e),{setup(s){const{loading:o,setLoading:a}=C(!0),{loading:v,setLoading:e}=C(!0),l=L({}),_=L({}),c=L(1),b=async()=>{try{const{data:n}=await J();l.value=n,c.value=2}catch{}finally{a(!1)}},f=async()=>{try{const{data:n}=await J();_.value=n}catch{}finally{e(!1)}};return b(),f(),(n,d)=>{const u=ce("Breadcrumb"),h=z,$=A,g=re,x=de,P=E;return p(),y("div",he,[t(u,{items:["menu.profile","menu.profile.basic"]},null,8,["items"]),t($,{direction:"vertical",size:16,fill:""},{default:i(()=>[t(P,{class:"general-card",title:n.$t("basicProfile.title.form")},{extra:i(()=>[t($,null,{default:i(()=>[t(h,null,{default:i(()=>[m(r(n.$t("basicProfile.cancel")),1)]),_:1}),t(h,{type:"primary"},{default:i(()=>[m(r(n.$t("basicProfile.goBack")),1)]),_:1})]),_:1})]),default:i(()=>[t(x,{current:c.value,"onUpdate:current":d[0]||(d[0]=j=>c.value=j),"line-less":"",class:"steps"},{default:i(()=>[t(g,null,{default:i(()=>[m(r(n.$t("basicProfile.steps.commit")),1)]),_:1}),t(g,null,{default:i(()=>[m(r(n.$t("basicProfile.steps.approval")),1)]),_:1}),t(g,null,{default:i(()=>[m(r(n.$t("basicProfile.steps.finish")),1)]),_:1})]),_:1},8,["current"])]),_:1},8,["title"]),t(P,{class:"general-card"},{default:i(()=>[t(G,{loading:k(o),"render-data":l.value},null,8,["loading","render-data"])]),_:1}),t(P,{class:"general-card"},{default:i(()=>[t(G,{loading:k(v),type:"pre","render-data":_.value},null,8,["loading","render-data"])]),_:1}),t(ye)]),_:1})])}}}));var Je=B(xe,[["__scopeId","data-v-9208e62e"]]);export{Je as default};