(this.webpackJsonpcovidtracker=this.webpackJsonpcovidtracker||[]).push([[0],{11:function(e,c,t){"use strict";t.r(c);var i=t(1),n=t.n(i),r=t(3),s=t.n(r),d=(t(9),t(4)),j=t(0);var h=function(){var e=Object(i.useState)([]),c=Object(d.a)(e,2),t=c[0],n=c[1];Object(i.useEffect)((function(){r()}),[]);var r=function(){fetch("https://data.covid19india.org/data.json").then((function(e){return e.json()})).then((function(e){console.log(e.statewise[0]),n(e.statewise[0])}))};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"heading",children:"Covid-19 CoronaVirus Tracker"}),Object(j.jsx)("h2",{className:"heading1",children:"Live Results"}),Object(j.jsxs)("div",{id:"container",children:[Object(j.jsxs)("div",{id:"info",children:[Object(j.jsx)("p",{children:"Country  "}),Object(j.jsx)("h3",{children:"India"})]}),Object(j.jsxs)("div",{id:"info",children:[Object(j.jsx)("p",{children:"Recovered  "}),Object(j.jsx)("h3",{children:t.recovered})]}),Object(j.jsxs)("div",{id:"info",children:[Object(j.jsx)("p",{children:"Confirmed  "}),Object(j.jsx)("h3",{children:t.confirmed})]}),Object(j.jsxs)("div",{id:"info",children:[Object(j.jsx)("p",{children:"Death  "}),Object(j.jsx)("h3",{children:t.deaths})]}),Object(j.jsxs)("div",{id:"info",children:[Object(j.jsx)("p",{children:"Active  "}),Object(j.jsx)("h3",{children:t.active})]})]})]})};var o=function(){return Object(j.jsx)(h,{})};s.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(o,{})}),document.getElementById("root"))},9:function(e,c,t){}},[[11,1,2]]]);
//# sourceMappingURL=main.8f2fcef8.chunk.js.map