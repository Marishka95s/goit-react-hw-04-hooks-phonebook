(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{17:function(t,e,n){},26:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),o=n.n(r),i=(n(17),n(12)),s=n(2),u=n(11),l=n.n(u);n(26);function b(t,e){var n=Object(a.useState)((function(){var n;return null!==(n=JSON.parse(window.localStorage.getItem(t)))&&void 0!==n?n:e})),c=Object(s.a)(n,2),r=c[0],o=c[1];return Object(a.useEffect)((function(){window.localStorage.setItem(t,JSON.stringify(r))}),[t,r]),[r,o]}var m=n(3),d=n.n(m),j=n(0);function f(t){var e=t.onAddContact,n=b("name",""),a=Object(s.a)(n,2),c=a[0],r=a[1],o=b("number",""),i=Object(s.a)(o,2),u=i[0],l=i[1],m=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":r(a);break;case"number":l(a);break;default:return}};return Object(j.jsxs)("form",{className:d.a.form,children:[Object(j.jsxs)("label",{className:d.a.label,children:["Name:",Object(j.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",className:d.a.input,value:c,onChange:m,required:!0})]}),Object(j.jsxs)("label",{className:d.a.label,children:["Number:",Object(j.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",className:d.a.input,value:u,onChange:m,required:!0})]}),Object(j.jsx)("button",{type:"button",className:d.a.btn,onClick:function(t){t.preventDefault(),e(c,u),r(""),l("")},children:"Add contact"})]})}var p=n(5),O=n.n(p),h=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(j.jsx)("ul",{className:O.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(j.jsxs)("li",{className:O.a.item,children:[Object(j.jsxs)("p",{className:O.a.name,children:[a,": ",Object(j.jsx)("span",{children:c})]}),Object(j.jsx)("button",{type:"button",className:O.a.btn,onClick:function(){return n(e)},children:"Delete"})]},e)}))})},C=n(9),_=n.n(C),v=function(t){var e=t.value,n=t.onChange;return Object(j.jsxs)("label",{className:_.a.label,children:["Find contacts by name",Object(j.jsx)("input",{className:_.a.input,type:"text",value:e,onChange:n})]})},g=[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}];function x(){var t=Object(a.useState)((function(){var t;return null!==(t=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==t?t:g})),e=Object(s.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),o=Object(s.a)(r,2),u=o[0],b=o[1];Object(a.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(n))}),[n]);return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(f,{contacts:n,onAddContact:function(t,e){if(n.some((function(e){return e.name===t})))alert("".concat(t," is already in contacts."));else if(t&&e){var a={id:l.a.generate(),name:t,number:e};c((function(t){return[a].concat(Object(i.a)(t))}))}}}),Object(j.jsxs)("h2",{children:["Contacts (total: ",function(){return n.length},") "]}),Object(j.jsx)(v,{value:u,onChange:function(t){b(t.currentTarget.value)}}),Object(j.jsx)(h,{contacts:function(){var t=u.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(t)}))}(),onDeleteContact:function(t){c((function(e){return e.filter((function(e){return e.id!==t}))}))}})]})}x.defaultProps={totalContactsCount:null,visibleContacts:null};var N=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),r(t),o(t)}))};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root")),N()},3:function(t,e,n){t.exports={form:"ContactForm_form__3hmVW",label:"ContactForm_label__2a09I",input:"ContactForm_input__ukRtb",btn:"ContactForm_btn__3RmAM"}},5:function(t,e,n){t.exports={list:"ContactList_list__1vDxM",item:"ContactList_item__3H2ZU",name:"ContactList_name__2QsUF",btn:"ContactList_btn__2jXud"}},9:function(t,e,n){t.exports={input:"Filter_input__gz8ql",btn:"Filter_btn__2IcEf"}}},[[28,1,2]]]);
//# sourceMappingURL=main.902823d9.chunk.js.map