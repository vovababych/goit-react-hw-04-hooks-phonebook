(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],[,,,function(t,e,n){t.exports={form:"ContactForm_form__8_dbI",label:"ContactForm_label__3WUry",input:"ContactForm_input__2aazO",btnAddContact:"ContactForm_btnAddContact__9a779"}},function(t,e,n){t.exports={title:"Contacts_title__aabGq",contactsList:"Contacts_contactsList__3QSl4",contact:"Contacts_contact__1NDBd",name:"Contacts_name__TS4-w",phone:"Contacts_phone__3vRG_",btnDeleteContact:"Contacts_btnDeleteContact__16YvN"}},,,,function(t,e,n){t.exports={section:"Phonebook_section__3JIpD",title:"Phonebook_title__121Rv"}},function(t,e,n){t.exports={input:"Filter_input__c0S41"}},,,,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),o=n.n(c),s=n(10),i=n.n(s),r=(n(17),n(11)),l=n(2),u=n(8),b=n.n(u);var j=function(t){var e=t.title,n=t.children;return Object(a.jsxs)("section",{className:b.a.section,children:[Object(a.jsx)("h1",{className:b.a.title,children:e}),n]})},m=n(20),f=n(3),d=n.n(f);var _=function(t){var e=t.onAdd,n=t.onCheckforUniqName,o=Object(c.useState)(""),s=Object(l.a)(o,2),i=s[0],r=s[1],u=Object(c.useState)(""),b=Object(l.a)(u,2),j=b[0],f=b[1],_=function(){r(""),f("")};return Object(a.jsxs)("form",{className:d.a.form,onSubmit:function(t){t.preventDefault(),n(i)&&(i&&j?(e({id:Object(m.a)(),name:i,tel:j}),_()):alert("Empty field"))},children:[Object(a.jsxs)("label",{className:d.a.label,children:["Name",Object(a.jsx)("input",{className:d.a.input,type:"text",name:"name",value:i,onChange:function(t){r(t.target.value)}})]}),Object(a.jsxs)("label",{className:d.a.label,children:["Number",Object(a.jsx)("input",{className:d.a.input,type:"tel",name:"tel",value:j,onChange:function(t){f(t.target.value)}})]}),Object(a.jsx)("button",{className:d.a.btnAddContact,type:"submit",children:"Add contact"})]})},h=n(4),O=n.n(h),p=n(9),x=n.n(p);var C=function(t){var e=t.filter,n=t.onFilter;return Object(a.jsxs)("label",{className:x.a.label,children:["Find contacts by name",Object(a.jsx)("input",{className:x.a.input,type:"text",name:"filter",value:e,onChange:function(t){return n(t.target.value)}})]})};var N=function(t){var e=t.contacts,n=t.title,o=t.onDeleteContact,s=Object(c.useState)(""),i=Object(l.a)(s,2),r=i[0],u=i[1],b=e.filter((function(t){return t.name.toLowerCase().includes(r.toLowerCase())}));return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{className:O.a.title,children:n}),Object(a.jsx)(C,{filter:r,onFilter:function(t){u(t)}}),Object(a.jsx)("ul",{className:O.a.contactsList,children:b.length>0&&b.map((function(t){var e=t.id,n=t.name,c=t.tel;return Object(a.jsxs)("li",{className:O.a.contact,children:[Object(a.jsx)("span",{className:O.a.name,children:n}),Object(a.jsx)("span",{className:O.a.phone,children:c}),Object(a.jsx)("button",{className:O.a.btnDeleteContact,type:"button",onClick:function(){return o(e)},children:"Delete"})]},e)}))})]})};var v=function(){var t=Object(c.useState)([]),e=Object(l.a)(t,2),n=e[0],o=e[1];return Object(c.useEffect)((function(){var t=JSON.parse(localStorage.getItem("contacts"));t&&o(t)}),[]),Object(c.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(n))}),[n]),Object(a.jsxs)(j,{title:"Phonebook",children:[Object(a.jsx)(_,{onAdd:function(t){o((function(e){return[].concat(Object(r.a)(e),[t])}))},onCheckforUniqName:function(t){return!!!n.find((function(e){return e.name.toLowerCase()===t.toLowerCase()}))||(alert("".concat(t," is already in contacts")),!1)}}),Object(a.jsx)(N,{title:"Contacts",contacts:n,onDeleteContact:function(t){o(n.filter((function(e){return e.id!==t})))}})]})};i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(v,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.4453a620.chunk.js.map