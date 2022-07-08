var Q=Object.defineProperty,X=Object.defineProperties;var Y=Object.getOwnPropertyDescriptors;var z=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,tt=Object.prototype.propertyIsEnumerable;var q=(i,a,t)=>a in i?Q(i,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[a]=t,C=(i,a)=>{for(var t in a||(a={}))Z.call(a,t)&&q(i,t,a[t]);if(z)for(var t of z(a))tt.call(a,t)&&q(i,t,a[t]);return i},I=(i,a)=>X(i,Y(a));import{_ as j,u as et}from"./index.093538c0.js";/* empty css               *//* empty css               */import{d as F,c as k,e as f,aJ as h,A as d,aC as _,aF as l,aG as e,B as T,aH as at,E as O,bz as ot,D as N,u as m,aI as nt,bu as U,bd as P,be as R,bj as S,bx as W,aL as lt,aM as rt,bB as it,bv as st,bw as ut,b3 as ct}from"./arco.a53b75be.js";/* empty css                *//* empty css                */import{u as B}from"./chart-option.1bd1f27e.js";import{u as pt,d as dt,e as mt}from"./visualization.cb9cd9b9.js";import{u as G}from"./loading.c387c5f5.js";/* empty css                */import"./chart.da3854a0.js";import"./vue.0de19953.js";const _t=F({setup(i){const a=c=>c.map(n=>`<div class="content-panel">
        <p>
          <span style="background-color: ${n.color}" class="tooltip-item-icon"></span><span>${n.seriesName}</span>
        </p>
        <span class="tooltip-value">${n.value.toLocaleString()}</span>
      </div>`).reverse().join(""),t=(c,n,p,A)=>({name:c,data:A,stack:"Total",type:"line",smooth:!0,symbol:"circle",symbolSize:10,itemStyle:{color:n},emphasis:{focus:"series",itemStyle:{color:n,borderWidth:2,borderColor:p}},lineStyle:{width:2,color:n},showSymbol:!1,areaStyle:{opacity:.1,color:n}}),{t:o}=et(),{loading:r,setLoading:u}=G(!0),{isDark:s}=pt(),v=k(()=>[{title:o("multiDAnalysis.dataOverview.contentProduction"),value:1902,prefix:{icon:"icon-edit",background:s.value?"#593E2F":"#FFE4BA",iconColor:s.value?"#F29A43":"#F77234"}},{title:o("multiDAnalysis.dataOverview.contentClick"),value:2445,prefix:{icon:"icon-thumb-up",background:s.value?"#3D5A62":"#E8FFFB",iconColor:s.value?"#6ED1CE":"#33D1C9"}},{title:o("multiDAnalysis.dataOverview.contentExposure"),value:3034,prefix:{icon:"icon-heart",background:s.value?"#354276":"#E8F3FF",iconColor:s.value?"#4A7FF7":"#165DFF"}},{title:o("multiDAnalysis.dataOverview.activeUsers"),value:1275,prefix:{icon:"icon-user",background:s.value?"#3F385E":"#F5E8FF",iconColor:s.value?"#8558D3":"#722ED1"}}]),b=f([]),L=f([]),E=f([]),y=f([]),g=f([]),{chartOption:x}=B(c=>({grid:{left:"2.6%",right:"4",top:"40",bottom:"40"},xAxis:{type:"category",offset:2,data:b.value,boundaryGap:!1,axisLabel:{color:"#4E5969",formatter(n,p){return p===0||p===b.value.length-1?"":`${n}`}},axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1},axisPointer:{show:!0,lineStyle:{color:"#23ADFF",width:2}}},yAxis:{type:"value",axisLine:{show:!1},axisLabel:{formatter(n,p){return p===0?String(n):`${n/1e3}k`}},splitLine:{lineStyle:{color:c?"#2E2E30":"#F2F3F5"}}},tooltip:{trigger:"axis",formatter(n){const[p]=n;return`<div>
            <p class="tooltip-title">${p.axisValueLabel}</p>
            ${a(n)}
          </div>`},className:"echarts-tooltip-diy"},graphic:{elements:[{type:"text",left:"2.6%",bottom:"18",style:{text:"12.10",textAlign:"center",fill:"#4E5969",fontSize:12}},{type:"text",right:"0",bottom:"18",style:{text:"12.17",textAlign:"center",fill:"#4E5969",fontSize:12}}]},series:[t("\u6D3B\u8DC3\u7528\u6237\u6570","#722ED1","#F5E8FF",L.value),t("\u5185\u5BB9\u751F\u4EA7\u91CF","#F77234","#FFE4BA",E.value),t("\u5185\u5BB9\u70B9\u51FB\u91CF","#33D1C9","#E8FFFB",y.value),t("\u5185\u5BB9\u66DD\u5149\u91CF","#3469FF","#E8F3FF",g.value)]}));return(async()=>{u(!0);try{const{data:c}=await dt();b.value=c.xAxis,c.data.forEach(n=>{n.name==="\u5185\u5BB9\u751F\u4EA7\u91CF"?L.value=n.value:n.name==="\u5185\u5BB9\u70B9\u51FB\u91CF"?E.value=n.value:n.name==="\u5185\u5BB9\u66DD\u5149\u91CF"&&(y.value=n.value),g.value=n.value})}catch{}finally{u(!1)}})(),(c,n)=>{const p=U,A=P,V=R,H=h("Chart"),M=S,J=W;return d(),_(J,{loading:m(r),style:{width:"100%"}},{default:l(()=>[e(M,{class:"general-card",title:c.$t("multiDAnalysis.card.title.dataOverview")},{default:l(()=>[e(V,{justify:"space-between"},{default:l(()=>[(d(!0),T(nt,null,at(m(v),(D,K)=>(d(),_(A,{key:K,span:6},{default:l(()=>[e(p,{title:D.title,value:D.value,"show-group-separator":"","value-from":0,animation:""},{prefix:l(()=>[O("span",{class:"statistic-prefix",style:N({background:D.prefix.background})},[(d(),_(ot(D.prefix.icon),{style:N({color:D.prefix.iconColor})},null,8,["style"]))],4)]),_:2},1032,["title","value"])]),_:2},1024))),128))]),_:1}),e(H,{style:{height:"328px","margin-top":"20px"},option:m(x)},null,8,["option"])]),_:1},8,["title"])]),_:1},8,["loading"])}}});var yt=j(_t,[["__scopeId","data-v-89dc6b16"]]);const ft={class:"content"},ht={class:"chart"},vt=F({props:{title:{type:String,default:""},quota:{type:String,default:""},chartType:{type:String,default:""}},setup(i){const a=i,{loading:t,setLoading:o}=G(!0),r=f(0),u=f(100),s=k(()=>u.value>50),v=f([]),{chartOption:b}=B(()=>({grid:{left:0,right:0,top:0,bottom:0},xAxis:{type:"category",show:!1},yAxis:{show:!1},tooltip:{show:!0,trigger:"axis",formatter:"{c}"},series:[C({data:v.value},a.chartType==="bar"?{type:"bar",barWidth:7,barGap:"0"}:{type:"line",showSymbol:!1,smooth:!0,lineStyle:{color:"#4080FF"}})]}));return(async E=>{try{const{data:y}=await mt(E),{chartData:g}=y;r.value=y.count,u.value=y.growth,g.data.value.forEach((x,w)=>{a.chartType==="bar"?v.value.push({value:x,itemStyle:{color:w%2?"#468DFF":"#86DF6C"}}):v.value.push(x)})}catch{}finally{o(!1)}})({quota:a.quota}),(E,y)=>{const g=U,x=h("icon-arrow-rise"),w=h("icon-arrow-fall"),c=it,n=h("Chart"),p=S,A=W;return d(),_(A,{loading:m(t),style:{width:"100%"}},{default:l(()=>[e(p,{class:"general-card",title:i.title,"header-style":{paddingBottom:"12px"}},{default:l(()=>[O("div",ft,[e(g,{value:r.value,"show-group-separator":!0,"value-from":0,animation:""},null,8,["value"]),e(c,{class:"percent-text",type:m(s)?"danger":"success"},{default:l(()=>[lt(rt(u.value)+"% ",1),m(s)?(d(),_(x,{key:0})):(d(),_(w,{key:1}))]),_:1},8,["type"])]),O("div",ht,[e(n,{option:m(b)},null,8,["option"])])]),_:1},8,["title"])]),_:1},8,["loading"])}}});var $=j(vt,[["__scopeId","data-v-1f49da78"]]);const Ft=F({setup(i){return(a,t)=>{const o=P,r=R;return d(),T("div",null,[e(r,{gutter:16},{default:l(()=>[e(o,{span:6},{default:l(()=>[e($,{title:a.$t("multiDAnalysis.card.title.retentionTrends"),quota:"retentionTrends","chart-type":"line"},null,8,["title"])]),_:1}),e(o,{span:6},{default:l(()=>[e($,{title:a.$t("multiDAnalysis.card.title.userRetention"),quota:"userRetention","chart-type":"bar"},null,8,["title"])]),_:1}),e(o,{span:6},{default:l(()=>[e($,{title:a.$t("multiDAnalysis.card.title.contentConsumptionTrends"),quota:"contentConsumptionTrends","chart-type":"line"},null,8,["title"])]),_:1}),e(o,{span:6},{default:l(()=>[e($,{title:a.$t("multiDAnalysis.card.title.contentConsumption"),quota:"contentConsumption","chart-type":"bar"},null,8,["title"])]),_:1})]),_:1})])}}}),gt=F({setup(i){const{chartOption:a}=B(t=>({grid:{left:44,right:20,top:0,bottom:20},xAxis:{type:"value",axisLabel:{show:!0,formatter(o,r){return r===0?String(o):`${Number(o)/1e3}k`}},splitLine:{lineStyle:{color:t?"#484849":"#E5E8EF"}}},yAxis:{type:"category",data:["\u70B9\u8D5E\u91CF","\u8BC4\u8BBA\u91CF","\u5206\u4EAB\u91CF"],axisLabel:{show:!0,color:"#4E5969"},axisTick:{show:!0,length:2,lineStyle:{color:"#A9AEB8"},alignWithLabel:!0},axisLine:{lineStyle:{color:t?"#484849":"#A9AEB8"}}},tooltip:{show:!0,trigger:"axis"},series:[{data:[1033,1244,1520],type:"bar",barWidth:7,itemStyle:{color:"#4086FF",borderRadius:4}}]}));return(t,o)=>{const r=h("Chart"),u=S;return d(),_(u,{class:"general-card",title:t.$t("multiDAnalysis.card.title.userActions")},{default:l(()=>[e(r,{height:"122px",option:m(a)},null,8,["option"])]),_:1},8,["title"])}}}),xt=F({setup(i){const{chartOption:a}=B(t=>({grid:{left:0,right:0,top:0,bottom:20},legend:{show:!0,top:"center",right:"0",orient:"vertical",icon:"circle",itemWidth:10,itemHeight:10,itemGap:20,textStyle:{color:t?"#ffffff":"#4E5969"}},radar:{center:["40%","50%"],radius:80,indicator:[{name:"\u56FD\u9645",max:6500},{name:"\u8D22\u7ECF",max:22e3},{name:"\u79D1\u6280",max:3e4},{name:"\u5176\u4ED6",max:38e3},{name:"\u4F53\u80B2",max:52e3},{name:"\u5A31\u4E50",max:25e3}],axisName:{color:t?"#ffffff":"#1D2129"},axisLine:{lineStyle:{color:t?"#484849":"#E5E6EB"}},splitLine:{lineStyle:{color:t?"#484849":"#E5E6EB"}},splitArea:{areaStyle:{color:[]}}},series:[{type:"radar",areaStyle:{opacity:.2},data:[{value:[4850,19e3,19e3,29500,35200,2e4],name:"\u7EAF\u6587\u672C",symbol:"none",itemStyle:{color:t?"#6CAAF5":"#249EFF"}},{value:[2250,17e3,21e3,23500,42950,22e3],name:"\u56FE\u6587\u7C7B",symbol:"none",itemStyle:{color:t?"#A079DC":"#313CA9"}},{value:[5850,11e3,26e3,27500,46950,18e3],name:"\u89C6\u9891\u7C7B",symbol:"none",itemStyle:{color:t?"#3D72F6":"#21CCFF"}}]}]}));return(t,o)=>{const r=h("Chart"),u=S;return d(),_(u,{class:"general-card",title:t.$t("multiDAnalysis.card.title.contentTypeDistribution"),"header-style":{paddingBottom:0}},{default:l(()=>[e(r,{style:{height:"222px"},option:m(a)},null,8,["option"])]),_:1},8,["title"])}}}),Ct=F({setup(i){const{chartOption:a}=B(o=>{const r={textAlign:"center",fill:o?"rgba(255,255,255,0.7)":"#4E5969",fontSize:14,lineWidth:10,fontWeight:"bold"};return{legend:{left:"center",data:["UGC\u539F\u521B","\u56FD\u5916\u7F51\u7AD9","\u8F6C\u8F7D\u6587\u7AE0","\u884C\u4E1A\u62A5\u544A","\u5176\u4ED6"],bottom:0,icon:"circle",itemWidth:8,textStyle:{color:o?"rgba(255,255,255,0.7)":"#4E5969"},itemStyle:{borderWidth:0}},tooltip:{show:!0,trigger:"item"},graphic:{elements:[{type:"text",left:"9.6%",top:"center",style:C({text:"\u7EAF\u6587\u672C"},r)},{type:"text",left:"center",top:"center",style:C({text:"\u56FE\u6587\u7C7B"},r)},{type:"text",left:"86.6%",top:"center",style:C({text:"\u89C6\u9891\u7C7B"},r)}]},series:[{type:"pie",radius:["50%","70%"],center:["11%","50%"],label:{formatter:"{d}% ",color:o?"rgba(255, 255, 255, 0.7)":"#4E5969"},itemStyle:{borderColor:o?"#000":"#fff",borderWidth:1},data:[{value:[148564],name:"UGC\u539F\u521B",itemStyle:{color:"#249EFF"}},{value:[334271],name:"\u56FD\u5916\u7F51\u7AD9",itemStyle:{color:"#846BCE"}},{value:[445694],name:"\u8F6C\u8F7D\u6587\u7AE0",itemStyle:{color:"#21CCFF"}},{value:[445694],name:"\u884C\u4E1A\u62A5\u544A",itemStyle:{color:"#0E42D2"}},{value:[445694],name:"\u5176\u4ED6",itemStyle:{color:"#86DF6C"}}]},{type:"pie",radius:["50%","70%"],center:["50%","50%"],label:{formatter:"{d}% ",color:o?"rgba(255, 255, 255, 0.7)":"#4E5969"},itemStyle:{borderColor:o?"#000":"#fff",borderWidth:1},data:[{value:[148564],name:"UGC\u539F\u521B",itemStyle:{color:"#249EFF"}},{value:[334271],name:"\u56FD\u5916\u7F51\u7AD9",itemStyle:{color:"#846BCE"}},{value:[445694],name:"\u8F6C\u8F7D\u6587\u7AE0",itemStyle:{color:"#21CCFF"}},{value:[445694],name:"\u884C\u4E1A\u62A5\u544A",itemStyle:{color:"#0E42D2"}},{value:[445694],name:"\u5176\u4ED6",itemStyle:{color:"#86DF6C"}}]},{type:"pie",radius:["50%","70%"],center:["88%","50%"],label:{formatter:"{d}% ",color:o?"rgba(255, 255, 255, 0.7)":"#4E5969"},itemStyle:{borderColor:o?"#000":"#fff",borderWidth:1},data:[{value:[148564],name:"UGC\u539F\u521B",itemStyle:{color:"#249EFF"}},{value:[334271],name:"\u56FD\u5916\u7F51\u7AD9",itemStyle:{color:"#846BCE"}},{value:[445694],name:"\u8F6C\u8F7D\u6587\u7AE0",itemStyle:{color:"#21CCFF"}},{value:[445694],name:"\u884C\u4E1A\u62A5\u544A",itemStyle:{color:"#0E42D2"}},{value:[445694],name:"\u5176\u4ED6",itemStyle:{color:"#86DF6C"}}]}]}}),{loading:t}=G(!1);return(o,r)=>{const u=h("Chart"),s=S,v=W;return d(),_(v,{loading:m(t),style:{width:"100%"}},{default:l(()=>[e(s,{class:"general-card",title:o.$t("multiDAnalysis.card.title.contentPublishingSource")},{default:l(()=>[e(u,{style:{width:"100%",height:"300px"},option:m(a)},null,8,["option"])]),_:1},8,["title"])]),_:1},8,["loading"])}}});const bt={class:"container"},Et={name:"MultiDimensionDataAnalysis"},At=F(I(C({},Et),{setup(i){return(a,t)=>{const o=h("Breadcrumb"),r=st,u=ut,s=ct;return d(),T("div",bt,[e(o,{items:["menu.visualization","menu.visualization.multiDimensionDataAnalysis"]},null,8,["items"]),e(s,{direction:"vertical",size:16,fill:""},{default:l(()=>[e(u,{cols:24,"col-gap":16,"row-gap":16},{default:l(()=>[e(r,{span:{xs:24,sm:24,md:24,lg:18,xl:18,xxl:18}},{default:l(()=>[e(yt)]),_:1}),e(r,{span:{xs:24,sm:24,md:24,lg:6,xl:6,xxl:6}},{default:l(()=>[e(gt,{style:{"margin-bottom":"16px"}}),e(xt)]),_:1})]),_:1}),e(Ft),e(Ct)]),_:1})])}}}));var It=j(At,[["__scopeId","data-v-69d480f4"]]);export{It as default};
