import{c as t,q as a}from"./index.97a7fd5a.js";function u(e){return t.get("/admin/v1/auth/node-tree",{params:e,paramsSerializer:n=>a.stringify(n)})}function d(e){return t.post("/admin/v1/auth/node-create",e)}function o(e){return t.get("/admin/v1/auth/get-node",{params:e})}function i(e){return t.post("/admin/v1/auth/node-update",e)}function s(e){return t.post("/admin/v1/auth/delete-node",e)}function c(e){return t.post("/admin/v1/auth/set-node-status",e)}export{c as a,d as c,s as d,o as g,u as q,i as u};