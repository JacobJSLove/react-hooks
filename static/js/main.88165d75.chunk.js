(window["webpackJsonphooks-simple"]=window["webpackJsonphooks-simple"]||[]).push([[0],{16:function(e,t,n){e.exports=n(39)},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),o=n.n(c),u=n(2),l=n(3),i=n.n(l),s=n(14),p=n(15),m=n.n(p).a.create({baseURL:"https://jsonplaceholder.typicode.com"}),d=function(e){var t=Object(a.useState)([]),n=Object(u.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)(function(){!function(){var e=Object(s.a)(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.get("/".concat(t));case 2:n=e.sent,c(n.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()(e)},[e]),r},f=function(e){var t=e.patch,n=d(t);return 0===n.length?r.a.createElement("div",null,"Loading..."):r.a.createElement("ul",null,n.map(function(e){var t=e.id,n=e.title;return r.a.createElement("li",{key:t},n)}))},v=function(){var e=d("users");return 0===e.length?r.a.createElement("div",null,"Loading..."):r.a.createElement("ul",null,e.map(function(e){var t=e.id,n=e.name;return r.a.createElement("li",{key:t},n)}))},E=function(){var e=Object(a.useState)("posts"),t=Object(u.a)(e,2),n=t[0],c=t[1];return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return c("posts")}},"Posts"),r.a.createElement("button",{onClick:function(){return c("todos")}},"Todos")),r.a.createElement(f,{patch:n}))};o.a.render(r.a.createElement(E,null),document.querySelector("#root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.88165d75.chunk.js.map