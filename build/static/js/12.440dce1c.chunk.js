(this["webpackJsonpmeakle-image-hosting"]=this["webpackJsonpmeakle-image-hosting"]||[]).push([[12],{1916:function(e,t,s){"use strict";s.r(t);var a=s(4),r=(s(0),s(104)),i=s(1920),n=s(1919),o=s(58),c=s(9),m=s(22),l=s(1923),p=s(1922),d=s(1911),j=s(60),b=Object(o.a)((function(){var e=Object(j.a)().AuthStore,t=Object(c.f)(),s=Object(m.b)(["from{opacity:0;transform:translateY(40px);}to{opacity:1;transform:translateY(0px);}"]),o=m.a.div.withConfig({displayName:"Register__Wrapper",componentId:"g8t2b9-0"})(["max-width:600px;margin:30px auto;padding:30px 20px;border-radius:10px;box-shadow:3px 3px 20px #bebebe;background-color:#fff;animation:"," 1500ms ease;"],s),b=Object(m.a)(r.a).withConfig({displayName:"Register__StyleButton",componentId:"g8t2b9-1"})(["border-radius:4px;"]),u=m.a.a.withConfig({displayName:"Register__A",componentId:"g8t2b9-2"})(["margin-left:20px;"]),g=Object(m.a)(i.a).withConfig({displayName:"Register__StyleInput",componentId:"g8t2b9-3"})(["height:40px;border-radius:4px;"]);return Object(a.jsx)(o,{children:Object(a.jsxs)(n.a,{name:"normal_login",className:"login-form",wrapperCol:{span:12,offset:6},initialValues:{remember:!0},onFinish:function(s){e.setUsername(s.username),e.setPassword(s.password),e.register().then((function(){t.push("/login")})).catch((function(e){console.log(e)}))},onFinishFailed:function(e){console.log("Failed:",e)},children:[Object(a.jsx)(n.a.Item,{children:Object(a.jsx)("h1",{children:"\u6ce8\u518c"})}),Object(a.jsx)(n.a.Item,{name:"username",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"},{validator:function(e,t){return/\W/.test(t)?Promise.reject("\u53ea\u80fd\u662f\u5b57\u6bcd\u6570\u5b57\u4e0b\u5212\u7ebf"):t.length<4||t.length>10?Promise.reject("\u957f\u5ea6\u4e3a4-10\u4e2a\u5b57\u7b26"):Promise.resolve()}}],children:Object(a.jsx)(g,{prefix:Object(a.jsx)(l.a,{className:"site-form-item-icon"}),placeholder:"\u7528\u6237\u540d"})}),Object(a.jsx)(n.a.Item,{name:"password",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801"},{min:4,message:"\u6700\u5c114\u4e2a\u5b57\u7b26"},{max:10,message:"\u6700\u592710\u4e2a\u5b57\u7b26"}],children:Object(a.jsx)(g,{prefix:Object(a.jsx)(p.a,{className:"site-form-item-icon"}),type:"password",placeholder:"\u5bc6\u7801"})}),Object(a.jsx)(n.a.Item,{name:"confirmPassword",rules:[{required:!0,message:"\u8bf7\u786e\u8ba4\u5bc6\u7801"},function(e){var t=e.getFieldValue;return{validator:function(e,s){return t("password")===s?Promise.resolve():Promise.reject("\u4e24\u6b21\u5bc6\u7801\u4e0d\u4e00\u81f4")}}}],children:Object(a.jsx)(g,{prefix:Object(a.jsx)(p.a,{className:"site-form-item-icon"}),type:"password",placeholder:"\u786e\u8ba4\u5bc6\u7801"})}),Object(a.jsxs)(n.a.Item,{children:[Object(a.jsx)(b,{type:"primary",htmlType:"submit",className:"login-form-button",children:"\u6ce8\u518c"}),Object(a.jsxs)(u,{onClick:function(){t.push("/login")},children:[Object(a.jsx)(d.a,{}),"\xa0\u5df2\u6709\u8d26\u53f7?"]})]})]})})}));t.default=b}}]);
//# sourceMappingURL=12.440dce1c.chunk.js.map