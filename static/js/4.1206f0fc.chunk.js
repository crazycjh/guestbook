(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{47:function(e,t,c){e.exports={card:"Card_card__1m44e"}},48:function(e,t,c){e.exports={form:"QuoteForm_form__3Ndw9",loading:"QuoteForm_loading__iDpS0",control:"QuoteForm_control__2lCiE",actions:"QuoteForm_actions__354La"}},56:function(e,t,c){"use strict";c.r(t);var n=c(1),o=c(2),s=c(21),a=c(47),r=c.n(a),i=c(0),u=function(e){return Object(i.jsx)("div",{className:r.a.card,children:e.children})},l=c(14),d=c(48),j=c.n(d),b=function(e){var t=Object(n.useState)(!1),c=Object(s.a)(t,2),a=c[0],r=c[1],d=Object(n.useRef)(),b=Object(n.useRef)();return Object(i.jsxs)(n.Fragment,{children:[Object(i.jsx)(o.a,{when:a,message:function(e){return"You are leaving now"}}),Object(i.jsx)(u,{children:Object(i.jsxs)("form",{onFocus:function(){r(!0)},className:j.a.form,onSubmit:function(t){t.preventDefault();var c=d.current.value,n=b.current.value;e.onAddQuote({author:c,text:n})},children:[e.isLoading&&Object(i.jsx)("div",{className:j.a.loading,children:Object(i.jsx)(l.a,{})}),Object(i.jsxs)("div",{className:j.a.control,children:[Object(i.jsx)("label",{htmlFor:"author",children:"\u4f7f\u7528\u8005"}),Object(i.jsx)("input",{type:"text",id:"author",ref:d})]}),Object(i.jsxs)("div",{className:j.a.control,children:[Object(i.jsx)("label",{htmlFor:"text",children:"\u5167\u5bb9"}),Object(i.jsx)("textarea",{id:"text",rows:"5",ref:b})]}),Object(i.jsx)("div",{className:j.a.actions,children:Object(i.jsx)("button",{className:"btn",onClick:function(){r(!1)},children:"\u65b0\u589e\u7559\u8a00"})})]})})]})},f=c(19),m=c(20);t.default=function(){var e=Object(f.a)(m.b),t=e.sendRequest,c=e.status,s=Object(o.h)();Object(n.useEffect)((function(){"completed"===c&&s.push("/quotes")}),[c,s]);return Object(i.jsx)(b,{isLoading:"pending"===c,onAddQuote:function(e){t(e),console.log(e)}})}}}]);
//# sourceMappingURL=4.1206f0fc.chunk.js.map