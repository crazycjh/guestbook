(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{12:function(e,t,n){e.exports={header:"MainNavigation_header__pcWBd",logo:"MainNavigation_logo__3mTft",nav:"MainNavigation_nav__2KJfX",active:"MainNavigation_active__oN3Ka"}},14:function(e,t,n){"use strict";var r=n(27),c=n.n(r),a=n(0);t.a=function(){return Object(a.jsx)("div",{className:c.a.spinner})}},18:function(e,t,n){e.exports={list:"QuoteList_list__3pzcl",sorting:"QuoteList_sorting__rL6H1"}},19:function(e,t,n){"use strict";var r=n(11),c=n(5),a=n(9),s=n(21),o=n(1);function i(e,t){return"SEND"===t.type?{data:null,error:null,status:"pending"}:"SUCCESS"===t.type?{data:t.responseData,error:null,status:"completed"}:"ERROR"===t.type?{data:null,error:t.errorMessage,status:"completed"}:e}t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(o.useReducer)(i,{status:t?"pending":null,data:null,error:null}),u=Object(s.a)(n,2),j=u[0],l=u[1],d=Object(o.useCallback)(function(){var t=Object(a.a)(Object(c.a)().mark((function t(n){var r;return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l({type:"SEND"}),t.prev=1,t.next=4,e(n);case 4:r=t.sent,l({type:"SUCCESS",responseData:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),l({type:"ERROR",errorMessage:t.t0.message||"Something went wrong!"});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),[e]);return Object(r.a)({sendRequest:d},j)}},20:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return u})),n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return b})),n.d(t,"c",(function(){return h}));var r=n(5),c=n(11),a=n(9),s="https://react-http-f4180-default-rtdb.firebaseio.com/";function o(){return i.apply(this,arguments)}function i(){return(i=Object(a.a)(Object(r.a)().mark((function e(){var t,n,a,o,i;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/quotes.json"));case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,console.log(n),t.ok){e.next=9;break}throw new Error(n.message||"Could not fetch quotes.");case 9:for(o in a=[],n)i=Object(c.a)({id:o},n[o]),a.push(i);return e.abrupt("return",a);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e){return j.apply(this,arguments)}function j(){return(j=Object(a.a)(Object(r.a)().mark((function e(t){var n,a,o;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/quotes/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(a=e.sent,n.ok){e.next=8;break}throw new Error(a.message||"Could not fetch quote.");case 8:return o=Object(c.a)({id:t},a),e.abrupt("return",o);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return d.apply(this,arguments)}function d(){return(d=Object(a.a)(Object(r.a)().mark((function e(t){var n,c;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/quotes.json"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not create quote.");case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return p.apply(this,arguments)}function p(){return(p=Object(a.a)(Object(r.a)().mark((function e(t){var n,c;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/comments/").concat(t.quoteId,".json"),{method:"POST",body:JSON.stringify(t.commentData),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not add comment.");case 8:return e.abrupt("return",{commentId:c.name});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return f.apply(this,arguments)}function f(){return(f=Object(a.a)(Object(r.a)().mark((function e(t){var n,a,o,i,u;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/comments/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(a=e.sent,n.ok){e.next=8;break}throw new Error(a.message||"Could not get comments.");case 8:for(i in o=[],a)u=Object(c.a)({id:i},a[i]),o.push(u);return e.abrupt("return",o);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},24:function(e,t,n){e.exports={item:"QuoteItem_item__2dOvb"}},27:function(e,t,n){e.exports={spinner:"LoadingSpinner_spinner__2Kyqv"}},28:function(e,t,n){e.exports={noquotes:"NoQuotesFound_noquotes__3DIYb"}},29:function(e,t,n){e.exports={main:"Layout_main__auk_r"}},37:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var r=n(23),c=n.n(r),a=n(8),s=(n(37),n(1)),o=n.n(s),i=n(2),u=n(24),j=n.n(u),l=n(0),d=function(e){return Object(l.jsxs)("li",{className:j.a.item,children:[Object(l.jsxs)("figure",{children:[Object(l.jsx)("blockquote",{children:Object(l.jsx)("p",{children:e.text})}),Object(l.jsx)("figcaption",{children:e.author})]}),Object(l.jsx)(a.b,{to:"/quotes/".concat(e.id),className:"btn",children:"View Fullscreen"})]})},b=n(18),p=n.n(b),h=function(e){var t,n,r=Object(i.h)(),c=Object(i.i)(),a=(Object(i.k)(),"asc"===new URLSearchParams(c.search).get("sort")),o=(t=e.quotes,n=a,t.sort((function(e,t){return n?e.id>t.id?1:-1:e.id<t.id?1:-1})));return Object(l.jsxs)(s.Fragment,{children:[Object(l.jsx)("div",{className:p.a.sorting,children:Object(l.jsxs)("button",{onClick:function(){r.push(c.pathname+"?sort="+(a?"desc":"asc"))},children:["Sort ",a?"Descending":"Ascending"]})}),Object(l.jsx)("ul",{className:p.a.list,children:o.map((function(e){return Object(l.jsx)(d,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},f=n(14),O=n(28),x=n.n(O),m=function(){return Object(l.jsxs)("div",{className:x.a.noquotes,children:[Object(l.jsx)("p",{children:"No quotes found!"}),Object(l.jsx)(a.b,{className:"btn",to:"/new-quote",children:"Add a Quote"})]})},v=n(19),g=n(20),w=function(){var e=Object(v.a)(g.d,!0),t=e.sendRequest,n=e.status,r=e.data,c=e.error;return Object(s.useEffect)((function(){t()}),[t]),"pending"===n?Object(l.jsx)("div",{className:"centered",children:Object(l.jsx)(f.a,{})}):c?Object(l.jsx)("p",{className:"centered focused",children:c}):"completed"!==n||r&&0!==r.length?Object(l.jsx)(h,{quotes:r}):Object(l.jsx)(m,{})},_=(n(22),n(29)),y=n.n(_),N=n(12),q=n.n(N),k=function(){return Object(l.jsxs)("header",{className:q.a.header,children:[Object(l.jsx)("div",{className:q.a.logo,children:"\u7559\u8a00\u677f"}),Object(l.jsx)("nav",{className:q.a.nav,children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(a.c,{to:"/quotes",activeClassName:q.a.active,children:"\u5168\u90e8\u7559\u8a00"})}),Object(l.jsx)("li",{children:Object(l.jsx)(a.c,{to:"/new-quote",activeClassName:q.a.active,children:"\u65b0\u589e\u7559\u8a00"})})]})})]})},S=function(e){return Object(l.jsxs)(s.Fragment,{children:[Object(l.jsx)(k,{}),Object(l.jsx)("main",{className:y.a.main,children:e.children})]})},C=o.a.lazy((function(){return n.e(4).then(n.bind(null,56))})),E=o.a.lazy((function(){return n.e(3).then(n.bind(null,55))})),R=o.a.lazy((function(){return n.e(5).then(n.bind(null,54))}));var D=function(){return Object(l.jsx)(S,{children:Object(l.jsx)(s.Suspense,{fallback:Object(l.jsxs)("div",{className:"centered",children:[Object(l.jsx)(f.a,{})," "]}),children:Object(l.jsxs)(i.e,{children:[Object(l.jsx)(i.c,{path:"/",exact:!0,children:Object(l.jsx)(i.b,{to:"/quotes"})}),Object(l.jsx)(i.c,{path:"/quotes",exact:!0,children:Object(l.jsx)(w,{})}),Object(l.jsx)(i.c,{path:"/quotes/:quoteId",children:Object(l.jsx)(E,{})}),Object(l.jsx)(i.c,{path:"/new-quote",children:Object(l.jsx)(C,{})}),Object(l.jsx)(i.c,{path:"*",children:Object(l.jsx)(R,{})})]})})})};c.a.createRoot(document.getElementById("root")).render(Object(l.jsx)(a.a,{children:Object(l.jsx)(D,{})}))}},[[46,1,2]]]);
//# sourceMappingURL=main.6384d325.chunk.js.map