(this["webpackJsonpcarousel-react-component"]=this["webpackJsonpcarousel-react-component"]||[]).push([[0],[,,,function(e,t,a){},,,,,function(e,t,a){e.exports=a(39)},,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){var n={"./1_01.png":21,"./1_02.png":22,"./1_03.png":23,"./1_04.png":24,"./1_05.png":25};function r(e){var t=c(e);return a(t)}function c(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=c,e.exports=r,r.id=20},function(e,t,a){e.exports=a.p+"static/media/1_01.2a263fdb.png"},function(e,t,a){e.exports=a.p+"static/media/1_02.845e13ba.png"},function(e,t,a){e.exports=a.p+"static/media/1_03.0aa48e15.png"},function(e,t,a){e.exports=a.p+"static/media/1_04.ac41c6ef.png"},function(e,t,a){e.exports=a.p+"static/media/1_05.eace8528.png"},function(e,t,a){var n={"./3_01.png":27,"./3_02.png":28,"./3_03.png":29,"./3_04.png":30,"./3_05.png":31};function r(e){var t=c(e);return a(t)}function c(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=c,e.exports=r,r.id=26},function(e,t,a){e.exports=a.p+"static/media/3_01.09c09f36.png"},function(e,t,a){e.exports=a.p+"static/media/3_02.0c2d7739.png"},function(e,t,a){e.exports=a.p+"static/media/3_03.5135438b.png"},function(e,t,a){e.exports=a.p+"static/media/3_04.25026f15.png"},function(e,t,a){e.exports=a.p+"static/media/3_05.25266b96.png"},function(e,t,a){var n={"./4_01.png":33,"./4_02.png":34,"./4_03.png":35,"./4_04.png":36,"./4_05.png":37,"./4_06.png":38};function r(e){var t=c(e);return a(t)}function c(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=c,e.exports=r,r.id=32},function(e,t,a){e.exports=a.p+"static/media/4_01.588d6d06.png"},function(e,t,a){e.exports=a.p+"static/media/4_02.7eb93d11.png"},function(e,t,a){e.exports=a.p+"static/media/4_03.f8f49767.png"},function(e,t,a){e.exports=a.p+"static/media/4_04.755dc1f0.png"},function(e,t,a){e.exports=a.p+"static/media/4_05.383f1a1d.png"},function(e,t,a){e.exports=a.p+"static/media/4_06.8617a69a.png"},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),s=a.n(c);a(16),a(17),a(18),a(3);var o=()=>r.a.createElement("div",{className:"Home"},r.a.createElement("div",{className:"Button"},r.a.createElement("a",{href:"./FirstC"},"1st Carousel")),r.a.createElement("div",{className:"Button"},r.a.createElement("a",{href:"./SecondC"},"2nd Carousel")),r.a.createElement("div",{className:"Button"},r.a.createElement("a",{href:"./ThirdC"},"3rd Carousel")));a(19);var l=e=>{let{imagesSrc:t}=e;const[a,c]=Object(n.useState)(0);return r.a.createElement("div",{className:"carousel"},r.a.createElement("div",{className:"carousel-inner",style:{transform:"translateX(-".concat(100*a,"%)")}},t.map((e,t)=>r.a.createElement("div",{key:t,className:"slide"},r.a.createElement("img",{src:e,alt:"Carousel Image ".concat(t)})))),r.a.createElement("button",{className:"prev-button",onClick:()=>{c(e=>0===e?t.length-1:e-1)}},r.a.createElement("div",{className:"left-arrow"})),r.a.createElement("button",{className:"next-button",onClick:()=>{c(e=>(e+1)%t.length)}},r.a.createElement("div",{className:"right-arrow"})))};const i=(m=a(20)).keys().map(m);var m;var p=()=>r.a.createElement("div",{className:"PagesDefaul"},r.a.createElement(l,{imagesSrc:i}),r.a.createElement("div",{className:"Button"},r.a.createElement("a",{href:"./"},r.a.createElement("i",{class:"fas fa-long-arrow-left"}))));const u=(e=>e.keys().map(e))(a(26));var f=()=>r.a.createElement("div",{className:"PagesDefaul"},r.a.createElement(l,{imagesSrc:u}),r.a.createElement("div",{className:"Button"},r.a.createElement("a",{href:"./"},r.a.createElement("i",{class:"fas fa-long-arrow-left"}))));const d=(e=>e.keys().map(e))(a(32));var g=()=>r.a.createElement("div",{className:"PagesDefault"},r.a.createElement(l,{imagesSrc:d}),r.a.createElement("div",{className:"Button"},r.a.createElement("a",{href:"./"},r.a.createElement("i",{class:"fas fa-long-arrow-left"})))),E=a(7),v=a(2);var _=()=>r.a.createElement("div",{className:"App"},r.a.createElement(E.a,{basename:"/instagramLike-carousel"},r.a.createElement(v.c,null,r.a.createElement(v.a,{path:"/",element:r.a.createElement(o,null)}),r.a.createElement(v.a,{path:"FirstC",element:r.a.createElement(p,null)}),r.a.createElement(v.a,{path:"SecondC",element:r.a.createElement(f,null)}),r.a.createElement(v.a,{path:"ThirdC",element:r.a.createElement(g,null)}))));var N=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,40)).then(t=>{let{getCLS:a,getFID:n,getFCP:r,getLCP:c,getTTFB:s}=t;a(e),n(e),r(e),c(e),s(e)})};s.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null))),N()}],[[8,1,2]]]);
//# sourceMappingURL=main.980617d8.chunk.js.map