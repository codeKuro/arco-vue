var R=Object.defineProperty,H=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var z=(s,a,t)=>a in s?R(s,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[a]=t,C=(s,a)=>{for(var t in a||(a={}))Q.call(a,t)&&z(s,t,a[t]);if(q)for(var t of q(a))J.call(a,t)&&z(s,t,a[t]);return s},G=(s,a)=>H(s,M(a));import{d as F,O as K,Q as j,r as h,e as l,o as m,c as y,w as r,f as e,g as L,h as X,L as O,b8 as Y,a as k,u as _,F as Z,i as tt,t as et}from"./vendor.e6e9099f.js";import{u as at,d as ot,e as nt}from"./visualization.ceda90c4.js";import{u as T}from"./loading.3e447ed2.js";import{u as S}from"./chart-option.e062bf69.js";import{_ as W}from"./index.525cc014.js";const lt=F({setup(s){const a=p=>p.map(n=>`<div class="content-panel">
        <p>
          <span style="background-color: ${n.color}" class="tooltip-item-icon"></span><span>${n.seriesName}</span>
        </p>
        <span class="tooltip-value">${n.value.toLocaleString()}</span>
      </div>`).reverse().join(""),t=(p,n,d,A)=>({name:p,data:A,stack:"Total",type:"line",smooth:!0,symbol:"circle",symbolSize:10,itemStyle:{color:n},emphasis:{focus:"series",itemStyle:{color:n,borderWidth:2,borderColor:d}},lineStyle:{width:2,color:n},showSymbol:!1,areaStyle:{opacity:.1,color:n}}),{t:o}=K(),{loading:i,setLoading:c}=T(!0),{isDark:u}=at(),v=j(()=>[{title:o("multiDAnalysis.dataOverview.contentProduction"),value:1902,prefix:{icon:"icon-edit",background:u.value?"#593E2F":"#FFE4BA",iconColor:u.value?"#F29A43":"#F77234"}},{title:o("multiDAnalysis.dataOverview.contentClick"),value:2445,prefix:{icon:"icon-thumb-up",background:u.value?"#3D5A62":"#E8FFFB",iconColor:u.value?"#6ED1CE":"#33D1C9"}},{title:o("multiDAnalysis.dataOverview.contentExposure"),value:3034,prefix:{icon:"icon-heart",background:u.value?"#354276":"#E8F3FF",iconColor:u.value?"#4A7FF7":"#165DFF"}},{title:o("multiDAnalysis.dataOverview.activeUsers"),value:1275,prefix:{icon:"icon-user",background:u.value?"#3F385E":"#F5E8FF",iconColor:u.value?"#8558D3":"#722ED1"}}]),E=h([]),$=h([]),b=h([]),f=h([]),g=h([]),{chartOption:x}=S(p=>({grid:{left:"2.6%",right:"4",top:"40",bottom:"40"},xAxis:{type:"category",offset:2,data:E.value,boundaryGap:!1,axisLabel:{color:"#4E5969",formatter(n,d){return d===0||d===E.value.length-1?"":`${n}`}},axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1},axisPointer:{show:!0,lineStyle:{color:"#23ADFF",width:2}}},yAxis:{type:"value",axisLine:{show:!1},axisLabel:{formatter(n,d){return d===0?String(n):`${n/1e3}k`}},splitLine:{lineStyle:{color:p?"#2E2E30":"#F2F3F5"}}},tooltip:{trigger:"axis",formatter(n){const[d]=n;return`<div>
            <p class="tooltip-title">${d.axisValueLabel}</p>
            ${a(n)}
          </div>`},className:"echarts-tooltip-diy"},graphic:{elements:[{type:"text",left:"2.6%",bottom:"18",style:{text:"12.10",textAlign:"center",fill:"#4E5969",fontSize:12}},{type:"text",right:"0",bottom:"18",style:{text:"12.17",textAlign:"center",fill:"#4E5969",fontSize:12}}]},series:[t("\u6D3B\u8DC3\u7528\u6237\u6570","#722ED1","#F5E8FF",$.value),t("\u5185\u5BB9\u751F\u4EA7\u91CF","#F77234","#FFE4BA",b.value),t("\u5185\u5BB9\u70B9\u51FB\u91CF","#33D1C9","#E8FFFB",f.value),t("\u5185\u5BB9\u66DD\u5149\u91CF","#3469FF","#E8F3FF",g.value)]}));return(async()=>{c(!0);try{const{data:p}=await ot();E.value=p.xAxis,p.data.forEach(n=>{n.name==="\u5185\u5BB9\u751F\u4EA7\u91CF"?$.value=n.value:n.name==="\u5185\u5BB9\u70B9\u51FB\u91CF"?b.value=n.value:n.name==="\u5185\u5BB9\u66DD\u5149\u91CF"&&(f.value=n.value),g.value=n.value})}catch{}finally{c(!1)}})(),(p,n)=>{const d=l("a-statistic"),A=l("a-col"),I=l("a-row"),N=l("Chart"),U=l("a-card"),P=l("a-spin");return m(),y(P,{loading:_(i),style:{width:"100%"}},{default:r(()=>[e(U,{class:"general-card",title:p.$t("multiDAnalysis.card.title.dataOverview")},{default:r(()=>[e(I,{justify:"space-between"},{default:r(()=>[(m(!0),L(Z,null,X(_(v),(D,V)=>(m(),y(A,{key:V,span:6},{default:r(()=>[e(d,{title:D.title,value:D.value,"show-group-separator":"","value-from":0,animation:""},{prefix:r(()=>[O("span",{class:"statistic-prefix",style:k({background:D.prefix.background})},[(m(),y(Y(D.prefix.icon),{style:k({color:D.prefix.iconColor})},null,8,["style"]))],4)]),_:2},1032,["title","value"])]),_:2},1024))),128))]),_:1}),e(N,{style:{height:"328px","margin-top":"20px"},option:_(x)},null,8,["option"])]),_:1},8,["title"])]),_:1},8,["loading"])}}});var rt=W(lt,[["__scopeId","data-v-62d8309a"]]);const it={class:"content"},st={class:"chart"},ut=F({props:{title:{type:String,default:""},quota:{type:String,default:""},chartType:{type:String,default:""}},setup(s){const a=s,{loading:t,setLoading:o}=T(!0),i=h(0),c=h(100),u=j(()=>c.value>50),v=h([]),{chartOption:E}=S(()=>({grid:{left:0,right:0,top:0,bottom:0},xAxis:{type:"category",show:!1},yAxis:{show:!1},tooltip:{show:!0,trigger:"axis",formatter:"{c}"},series:[C({data:v.value},a.chartType==="bar"?{type:"bar",barWidth:7,barGap:"0"}:{type:"line",showSymbol:!1,smooth:!0,lineStyle:{color:"#4080FF"}})]}));return(async b=>{try{const{data:f}=await nt(b),{chartData:g}=f;i.value=f.count,c.value=f.growth,g.data.value.forEach((x,B)=>{a.chartType==="bar"?v.value.push({value:x,itemStyle:{color:B%2?"#468DFF":"#86DF6C"}}):v.value.push(x)})}catch{}finally{o(!1)}})({quota:a.quota}),(b,f)=>{const g=l("a-statistic"),x=l("icon-arrow-rise"),B=l("icon-arrow-fall"),p=l("a-typography-text"),n=l("Chart"),d=l("a-card"),A=l("a-spin");return m(),y(A,{loading:_(t),style:{width:"100%"}},{default:r(()=>[e(d,{class:"general-card",title:s.title,"header-style":{paddingBottom:"12px"}},{default:r(()=>[O("div",it,[e(g,{value:i.value,"show-group-separator":!0,"value-from":0,animation:""},null,8,["value"]),e(p,{class:"percent-text",type:_(u)?"danger":"success"},{default:r(()=>[tt(et(c.value)+"% ",1),_(u)?(m(),y(x,{key:0})):(m(),y(B,{key:1}))]),_:1},8,["type"])]),O("div",st,[e(n,{option:_(E)},null,8,["option"])])]),_:1},8,["title"])]),_:1},8,["loading"])}}});var w=W(ut,[["__scopeId","data-v-06b1f338"]]);const ct=F({setup(s){return(a,t)=>{const o=l("a-col"),i=l("a-row");return m(),L("div",null,[e(i,{gutter:16},{default:r(()=>[e(o,{span:6},{default:r(()=>[e(w,{title:a.$t("multiDAnalysis.card.title.retentionTrends"),quota:"retentionTrends","chart-type":"line"},null,8,["title"])]),_:1}),e(o,{span:6},{default:r(()=>[e(w,{title:a.$t("multiDAnalysis.card.title.userRetention"),quota:"userRetention","chart-type":"bar"},null,8,["title"])]),_:1}),e(o,{span:6},{default:r(()=>[e(w,{title:a.$t("multiDAnalysis.card.title.contentConsumptionTrends"),quota:"contentConsumptionTrends","chart-type":"line"},null,8,["title"])]),_:1}),e(o,{span:6},{default:r(()=>[e(w,{title:a.$t("multiDAnalysis.card.title.contentConsumption"),quota:"contentConsumption","chart-type":"bar"},null,8,["title"])]),_:1})]),_:1})])}}}),pt=F({setup(s){const{chartOption:a}=S(t=>({grid:{left:44,right:20,top:0,bottom:20},xAxis:{type:"value",axisLabel:{show:!0,formatter(o,i){return i===0?String(o):`${Number(o)/1e3}k`}},splitLine:{lineStyle:{color:t?"#484849":"#E5E8EF"}}},yAxis:{type:"category",data:["\u70B9\u8D5E\u91CF","\u8BC4\u8BBA\u91CF","\u5206\u4EAB\u91CF"],axisLabel:{show:!0,color:"#4E5969"},axisTick:{show:!0,length:2,lineStyle:{color:"#A9AEB8"},alignWithLabel:!0},axisLine:{lineStyle:{color:t?"#484849":"#A9AEB8"}}},tooltip:{show:!0,trigger:"axis"},series:[{data:[1033,1244,1520],type:"bar",barWidth:7,itemStyle:{color:"#4086FF",borderRadius:4}}]}));return(t,o)=>{const i=l("Chart"),c=l("a-card");return m(),y(c,{class:"general-card",title:t.$t("multiDAnalysis.card.title.userActions")},{default:r(()=>[e(i,{height:"122px",option:_(a)},null,8,["option"])]),_:1},8,["title"])}}}),dt=F({setup(s){const{chartOption:a}=S(t=>({grid:{left:0,right:0,top:0,bottom:20},legend:{show:!0,top:"center",right:"0",orient:"vertical",icon:"circle",itemWidth:10,itemHeight:10,itemGap:20,textStyle:{color:t?"#ffffff":"#4E5969"}},radar:{center:["40%","50%"],radius:80,indicator:[{name:"\u56FD\u9645",max:6500},{name:"\u8D22\u7ECF",max:22e3},{name:"\u79D1\u6280",max:3e4},{name:"\u5176\u4ED6",max:38e3},{name:"\u4F53\u80B2",max:52e3},{name:"\u5A31\u4E50",max:25e3}],axisName:{color:t?"#ffffff":"#1D2129"},axisLine:{lineStyle:{color:t?"#484849":"#E5E6EB"}},splitLine:{lineStyle:{color:t?"#484849":"#E5E6EB"}},splitArea:{areaStyle:{color:[]}}},series:[{type:"radar",areaStyle:{opacity:.2},data:[{value:[4850,19e3,19e3,29500,35200,2e4],name:"\u7EAF\u6587\u672C",symbol:"none",itemStyle:{color:t?"#6CAAF5":"#249EFF"}},{value:[2250,17e3,21e3,23500,42950,22e3],name:"\u56FE\u6587\u7C7B",symbol:"none",itemStyle:{color:t?"#A079DC":"#313CA9"}},{value:[5850,11e3,26e3,27500,46950,18e3],name:"\u89C6\u9891\u7C7B",symbol:"none",itemStyle:{color:t?"#3D72F6":"#21CCFF"}}]}]}));return(t,o)=>{const i=l("Chart"),c=l("a-card");return m(),y(c,{class:"general-card",title:t.$t("multiDAnalysis.card.title.contentTypeDistribution"),"header-style":{paddingBottom:0}},{default:r(()=>[e(i,{style:{height:"222px"},option:_(a)},null,8,["option"])]),_:1},8,["title"])}}}),mt=F({setup(s){const{chartOption:a}=S(o=>{const i={textAlign:"center",fill:o?"rgba(255,255,255,0.7)":"#4E5969",fontSize:14,lineWidth:10,fontWeight:"bold"};return{legend:{left:"center",data:["UGC\u539F\u521B","\u56FD\u5916\u7F51\u7AD9","\u8F6C\u8F7D\u6587\u7AE0","\u884C\u4E1A\u62A5\u544A","\u5176\u4ED6"],bottom:0,icon:"circle",itemWidth:8,textStyle:{color:o?"rgba(255,255,255,0.7)":"#4E5969"},itemStyle:{borderWidth:0}},tooltip:{show:!0,trigger:"item"},graphic:{elements:[{type:"text",left:"9.6%",top:"center",style:C({text:"\u7EAF\u6587\u672C"},i)},{type:"text",left:"center",top:"center",style:C({text:"\u56FE\u6587\u7C7B"},i)},{type:"text",left:"86.6%",top:"center",style:C({text:"\u89C6\u9891\u7C7B"},i)}]},series:[{type:"pie",radius:["50%","70%"],center:["11%","50%"],label:{formatter:"{d}% ",color:o?"rgba(255, 255, 255, 0.7)":"#4E5969"},itemStyle:{borderColor:o?"#000":"#fff",borderWidth:1},data:[{value:[148564],name:"UGC\u539F\u521B",itemStyle:{color:"#249EFF"}},{value:[334271],name:"\u56FD\u5916\u7F51\u7AD9",itemStyle:{color:"#846BCE"}},{value:[445694],name:"\u8F6C\u8F7D\u6587\u7AE0",itemStyle:{color:"#21CCFF"}},{value:[445694],name:"\u884C\u4E1A\u62A5\u544A",itemStyle:{color:"#0E42D2"}},{value:[445694],name:"\u5176\u4ED6",itemStyle:{color:"#86DF6C"}}]},{type:"pie",radius:["50%","70%"],center:["50%","50%"],label:{formatter:"{d}% ",color:o?"rgba(255, 255, 255, 0.7)":"#4E5969"},itemStyle:{borderColor:o?"#000":"#fff",borderWidth:1},data:[{value:[148564],name:"UGC\u539F\u521B",itemStyle:{color:"#249EFF"}},{value:[334271],name:"\u56FD\u5916\u7F51\u7AD9",itemStyle:{color:"#846BCE"}},{value:[445694],name:"\u8F6C\u8F7D\u6587\u7AE0",itemStyle:{color:"#21CCFF"}},{value:[445694],name:"\u884C\u4E1A\u62A5\u544A",itemStyle:{color:"#0E42D2"}},{value:[445694],name:"\u5176\u4ED6",itemStyle:{color:"#86DF6C"}}]},{type:"pie",radius:["50%","70%"],center:["88%","50%"],label:{formatter:"{d}% ",color:o?"rgba(255, 255, 255, 0.7)":"#4E5969"},itemStyle:{borderColor:o?"#000":"#fff",borderWidth:1},data:[{value:[148564],name:"UGC\u539F\u521B",itemStyle:{color:"#249EFF"}},{value:[334271],name:"\u56FD\u5916\u7F51\u7AD9",itemStyle:{color:"#846BCE"}},{value:[445694],name:"\u8F6C\u8F7D\u6587\u7AE0",itemStyle:{color:"#21CCFF"}},{value:[445694],name:"\u884C\u4E1A\u62A5\u544A",itemStyle:{color:"#0E42D2"}},{value:[445694],name:"\u5176\u4ED6",itemStyle:{color:"#86DF6C"}}]}]}}),{loading:t}=T(!1);return(o,i)=>{const c=l("Chart"),u=l("a-card"),v=l("a-spin");return m(),y(v,{loading:_(t),style:{width:"100%"}},{default:r(()=>[e(u,{class:"general-card",title:o.$t("multiDAnalysis.card.title.contentPublishingSource")},{default:r(()=>[e(c,{style:{width:"100%",height:"300px"},option:_(a)},null,8,["option"])]),_:1},8,["title"])]),_:1},8,["loading"])}}});const _t={class:"container"},yt={name:"MultiDimensionDataAnalysis"},ft=F(G(C({},yt),{setup(s){return(a,t)=>{const o=l("Breadcrumb"),i=l("a-grid-item"),c=l("a-grid"),u=l("a-space");return m(),L("div",_t,[e(o,{items:["menu.visualization","menu.visualization.multiDimensionDataAnalysis"]},null,8,["items"]),e(u,{direction:"vertical",size:16,fill:""},{default:r(()=>[e(c,{cols:24,"col-gap":16,"row-gap":16},{default:r(()=>[e(i,{span:{xs:24,sm:24,md:24,lg:18,xl:18,xxl:18}},{default:r(()=>[e(rt)]),_:1}),e(i,{span:{xs:24,sm:24,md:24,lg:6,xl:6,xxl:6}},{default:r(()=>[e(pt,{style:{"margin-bottom":"16px"}}),e(dt)]),_:1})]),_:1}),e(ct),e(mt)]),_:1})])}}}));var Et=W(ft,[["__scopeId","data-v-b9b1d85c"]]);export{Et as default};