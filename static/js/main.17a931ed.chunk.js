(this.webpackJsonppostwithwaifu=this.webpackJsonppostwithwaifu||[]).push([[0],{22:function(t,e,n){},23:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var c=n(2),i=n.n(c),a=n(15),s=n.n(a),r=(n(22),n(17)),o=n(3),u=(n(23),n(0));var l=function(){return Object(u.jsx)("header",{className:"Navbar",children:" Post with waifu "})};var j=function(){return Object(u.jsxs)("footer",{className:"Footer",children:[" API from ",Object(u.jsx)("a",{href:"https://github.com/Waifu-pics/waifu-api",className:"Footer__info",children:"waifu-api"})," "]})};var d=function(t){var e=t.addPost,n=Object(c.useState)(""),i=Object(o.a)(n,2),a=i[0],s=i[1];return Object(u.jsxs)("div",{className:"Input",children:[Object(u.jsx)("div",{className:"Input__header",children:" Create Post "}),Object(u.jsx)("input",{type:"text",placeholder:"Write something.",className:"Input__field",value:a,onChange:function(t){s(t.target.value)},onKeyDown:function(t){var n=t.target.value;"Enter"===t.key&&n&&(e(n),s(""))}})]})},f=n(16),b=n.n(f);var h=function(t){var e=t.id,n=t.title,i=t.deletePost,a=Object(c.useState)(null),s=Object(o.a)(a,2),r=s[0],l=s[1];return Object(c.useEffect)((function(){b.a.get("https://api.waifu.pics/sfw/waifu").then((function(t){l(t.data)}))}),[]),r?Object(u.jsxs)("div",{className:"Post",children:[" ",Object(u.jsx)("button",{className:"Post__delete",onClick:function(){return i(e)},children:"X"}),Object(u.jsx)("div",{className:"Post__title",children:n}),Object(u.jsx)("img",{className:"Post__image",alt:e,src:r.url})]}):null},O=1;var p=function(){var t=Object(c.useState)([]),e=Object(o.a)(t,2),n=e[0],i=e[1];function a(t){var e=n.filter((function(e){return e.id!==t}));i(e)}return Object(u.jsxs)("div",{children:[Object(u.jsx)(l,{}),Object(u.jsx)(d,{addPost:function(t){i([{id:O,title:t}].concat(Object(r.a)(n))),O+=1}}),n.map((function(t){return Object(u.jsx)(h,{id:t.id,title:t.title,deletePost:a},t.id)})),Object(u.jsx)(j,{})]})},v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),c(t),i(t),a(t),s(t)}))};s.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root")),v()}},[[43,1,2]]]);
//# sourceMappingURL=main.17a931ed.chunk.js.map