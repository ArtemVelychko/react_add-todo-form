(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(6),c=a(2),s=a(7),o=a(1),l=(a(14),a(9)),d=a.n(l),u=a(0),m=function(e){var t=e.user,a=t.name,n=t.email;return Object(u.jsx)("a",{className:"UserInfo",href:"mailto:".concat(n),children:a})},j=function(e){var t=e.todo,a=t.title,n=t.user,i=t.id,r=t.completed;return Object(u.jsxs)("article",{"data-id":i,className:d()("TodoInfo",{"TodoInfo--completed":r}),children:[Object(u.jsx)("h2",{className:"TodoInfo__title",children:a}),n&&Object(u.jsx)(m,{user:n},n.name)]})},b=function(e){var t=e.todos;return Object(u.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(u.jsx)(j,{todo:e,"data-id":e.id},e.id)}))})},h=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}];var O=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(s.a)(Object(s.a)({},e),{},{user:(t=e.userId,h.find((function(e){return e.id===t}))||null)});var t})),f=function(){var e=Object(o.useState)(O),t=Object(c.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(""),s=Object(c.a)(i,2),l=s[0],d=s[1],m=Object(o.useState)(""),j=Object(c.a)(m,2),f=j[0],p=j[1],x=Object(o.useState)(!1),v=Object(c.a)(x,2),y=v[0],S=v[1],N=Object(o.useState)(!1),I=Object(c.a)(N,2),g=I[0],C=I[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Add todo form"}),Object(u.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:function(e){e.preventDefault();var t=Math.max.apply(Math,Object(r.a)(a.map((function(e){return e.id}))).concat([0]));S(!l),C(!f),l&&f&&(n([].concat(Object(r.a)(a),[{id:t+1,title:l,completed:!1,userId:1,user:h.find((function(e){return f===e.name}))||null}])),d(""),p(""))},children:[Object(u.jsxs)("div",{className:"field",children:["Title: ",Object(u.jsx)("input",{type:"text","data-cy":"titleInput",placeholder:"Enter a title",value:l,onChange:function(e){d(e.target.value),S(!1)}}),y&&Object(u.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(u.jsxs)("div",{className:"field",children:["User: ",Object(u.jsxs)("select",{"data-cy":"userSelect",defaultValue:"",value:f,onChange:function(e){p(e.target.value),C(!1)},children:[Object(u.jsx)("option",{disabled:!0,value:"",children:"Choose a user"}),h.map((function(e){return Object(u.jsx)("option",{value:e.name,children:e.name},e.name)}))]}),g&&Object(u.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(u.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(u.jsx)(b,{todos:a})]})};i.a.render(Object(u.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.a0f37bc3.chunk.js.map