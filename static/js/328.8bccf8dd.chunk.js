"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[328],{8328:function(e,n,t){t.r(n),t.d(n,{default:function(){return q}});var r,a,o,i,s,c,u,l=t(6907),d=t(9439),m=t(2791),h=t(9434),f=t(9085),p=t(6382),x=t(713),j=t(5923),b={position:"bottom-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"},g=function(e){return e.filter},v=function(e){var n=function(e){return e.contacts.items}(e),t=g(e).toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(t)}))},Z=t(3634),y=t(3329),C=function(){var e=(0,m.useState)(""),n=(0,d.Z)(e,2),t=n[0],r=n[1],a=(0,m.useState)(""),o=(0,d.Z)(a,2),i=o[0],s=o[1],c=(0,h.v9)(v),u=(0,h.I0)(),l=function(e){var n=e.target,t=n.name,a=n.value;switch(t){case"name":r(a);break;case"number":s(a);break;default:return}};return(0,y.jsxs)(j.l0,{onSubmit:function(e){e.preventDefault();var n=t.toLowerCase();c.find((function(e){return e.name.toLowerCase()===n}))?f.Am.error("".concat(t,": is already in contacts"),b):(u((0,Z.uK)({id:(0,p.x0)(),name:t,number:i})),r(""),s(""))},children:[(0,y.jsxs)(j.__,{children:[(0,y.jsx)(j.Dr,{children:"Name"}),(0,y.jsx)(j.II,{type:"text",placeholder:"Your name",name:"name",value:t,onChange:l,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,y.jsxs)(j.__,{children:[(0,y.jsx)(j.Dr,{children:"Number"}),(0,y.jsx)(j.II,{type:"tel",placeholder:"Your number",name:"number",value:i,onChange:l,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,y.jsxs)(j.zx,{type:"submit",children:["Add to contacts",(0,y.jsx)(x.Z,{})]})]})},w=t(168),_=t(9202),k=_.Z.ul(r||(r=(0,w.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: ","px;\n"])),(function(e){return e.theme.space[4]})),z=_.Z.li(a||(a=(0,w.Z)(["\n  padding: 10px;\n  margin-bottom: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: ",";\n  color: ",";\n"])),(function(e){return e.theme.fontSize.m}),(function(e){return e.theme.colors.white})),I=t(3142),A=function(){var e=(0,h.v9)(v),n=(0,h.I0)();return(0,y.jsx)(k,{children:e.map((function(e){var t=e.id,r=e.name,a=e.number;return(0,y.jsxs)(z,{children:[r+" : "+a,(0,y.jsx)(j.zx,{type:"button",onClick:function(){return n((0,Z.GK)(t))},children:(0,y.jsx)(I.Z,{})})]},t)}))})},S=_.Z.form(o||(o=(0,w.Z)(["\ndisplay: flex;\njustify-content: center;\n"]))),L=_.Z.label(i||(i=(0,w.Z)(["\ncolor: ",";\n"])),(function(e){return e.theme.colors.grey})),P=(_.Z.input(s||(s=(0,w.Z)([""]))),t(4808)),B=function(){var e=(0,h.v9)(g),n=(0,h.I0)();return(0,y.jsx)(S,{children:(0,y.jsx)(L,{children:(0,y.jsx)(j.II,{type:"name",value:e,onChange:function(e){n((0,P.M)(e.target.value))},placeholder:"Please enter a name to search"})})})},D=(_.Z.div(c||(c=(0,w.Z)(["\n    padding: 40px;\n    width: 400px;\n    margin: 0 auto;\n"]))),_.Z.h1(u||(u=(0,w.Z)(["\n  text-align: center;\n  margin-top: 30px;\n  margin-bottom: 30px;\n  font-size: ",";\n  color: ",";\n"])),(function(e){return e.theme.fontSize.xl}),(function(e){return e.theme.colors.white}))),N=function(e){var n=e.title;return(0,y.jsx)(D,{children:n})};var q=function(){return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(l.B6,{children:[(0,y.jsx)(N,{title:"Phonebook"}),(0,y.jsx)(C,{}),(0,y.jsx)(N,{title:"Contacts"}),(0,y.jsx)(B,{}),(0,y.jsx)(A,{})]})})}}}]);
//# sourceMappingURL=328.8bccf8dd.chunk.js.map