import{Q as r,B as t}from"./vendor.e6e9099f.js";import{a}from"./index.525cc014.js";function s(){const n=a();return{isDark:r(()=>n.theme==="dark")}}function u(n){return t.post("/api/data-chain-growth",n)}function p(){return t.get("/api/popular-author/list")}function c(){return t.get("/api/content-publish")}function l(){return t.post("/api/content-period-analysis")}function f(n){return t.post("/api/public-opinion-analysis",n)}function h(){return t.post("/api/data-overview")}export{l as a,c as b,p as c,h as d,u as e,f as q,s as u};