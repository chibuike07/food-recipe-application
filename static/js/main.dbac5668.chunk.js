(this["webpackJsonpreact-recipe-app"]=this["webpackJsonpreact-recipe-app"]||[]).push([[0],{1:function(e,t,a){e.exports={App:"recipe_App__3A1-8",search_form:"recipe_search_form__Z9CtV",select:"recipe_select__3rInL",search_button:"recipe_search_button__1yY_T",splash:"recipe_splash__8eMoF"}},14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),l=a.n(c),i=(a(14),a(4)),o=a.n(i),s=a(7),u=a(2);var m=function(e){var t=e.text,a=e.href;return r.a.createElement("div",null,r.a.createElement("a",{href:a||null},t))},p=a(3),_=a.n(p),f=function(e){var t=e.src,a=e.title,n=e.ingredient,c=e.url,l=_.a.preview_container,i=_.a.items,o=_.a.item_list;return r.a.createElement("div",{className:l},r.a.createElement("div",{className:i},r.a.createElement(m,{href:c,text:r.a.createElement("img",{src:t,alt:"food view"})}),r.a.createElement("h1",null,a)),r.a.createElement("div",{className:o},r.a.createElement("h2",null,"Ingredients"),r.a.createElement("ul",null,n&&n.map((function(e,t){return r.a.createElement("li",{key:t},e)})))))},v=function(e){var t=e.type,a=e.name,n=e.id,c=e.onChange,l=e.value,i=e.placeholder,o=e.autocomplete;return r.a.createElement("div",null,r.a.createElement("input",{type:t||"",name:a||"",id:n||"",value:l||"",onChange:c||null,placeholder:i||null,autoComplete:o||null}))},h=a(1),d=a.n(h),b=["0-10","11-20"," 21-30"," 31-40"," 41-50"],E=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),i=Object(u.a)(l,2),m=i[0],p=i[1],_=Object(n.useState)(""),h=Object(u.a)(_,2),E=h[0],g=h[1],w=Object(n.useState)(["0","10"]),y=Object(u.a)(w,2),k=y[0],j=y[1],x=function(){var e=Object(s.a)(o.a.mark((function e(){var t,a,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Number(k[0]),a=Number(k[1]),e.next=4,fetch("https://api.edamam.com/search?q=".concat(m.foodSearch,"&app_id=").concat("6d6a83db","&app_key=").concat("2301e231e5cf4dc8ba58fb8966ba46d3","&from=").concat(t,"&to=").concat(a));case 4:return n=e.sent,e.next=7,n.json();case 7:r=e.sent,c(r.hits);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=d.a.search_bar,O=d.a.search_form,S=d.a.App,C=d.a.search_button,A=d.a.select;return r.a.createElement("div",{className:S},r.a.createElement("form",{className:O,onSubmit:function(e){e.preventDefault(),x()}},r.a.createElement(v,{className:N,type:"text",name:"foodSearch",value:m,onChange:function(e){var t=e.target;p(t.value)},placeholder:"eg food name , fruits name",autocomplete:"off"}),r.a.createElement("select",{name:"select",value:E,onChange:function(e){var t=e.target;g(t.value);var a=t.value.split("-");j(a)},className:A},b&&b.map((function(e,t){return r.a.createElement("option",{key:t},e)}))),r.a.createElement("div",null,r.a.createElement("button",{className:C,type:"submit"},"searchFoods"))),a.map((function(e){var t=e.recipe;return r.a.createElement(f,{key:t.image,title:t.label,src:t.image,ingredient:t.ingredientLines,calories:t.calories,url:t.url})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},3:function(e,t,a){e.exports={preview_container:"preview_preview_container__3KxJz",items:"preview_items__1no-P",item_list:"preview_item_list__2zd8d",blink:"preview_blink__2P6u3"}},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.dbac5668.chunk.js.map