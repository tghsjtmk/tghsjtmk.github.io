/* empty css                         */import{l as d,Q as f,R as _,L as g,a as k,S as y,o as u,f as v,M as S,U as b,h as m,j as x,t as B,u as C,V as H,c as A,v as M,k as q}from"./entry.da2796df.js";const L=()=>{const c=d(),t=d([]),a=d([]),l=e=>e.forEach(o=>{const s=o.target.id;o.isIntersecting?t.value.push(s):t.value=t.value.filter(r=>r!==s)}),i=e=>e.forEach(o=>{c.value.observe(o)});return f(t,(e,o)=>{e.length===0?a.value=o:a.value=e},{deep:!0}),_(()=>c.value=new IntersectionObserver(l)),g(()=>{var e;return(e=c.value)==null?void 0:e.disconnect()}),{visibleHeadings:t,activeHeadings:a,updateHeadings:i}},T={class:"docs-toc-links"},$=["href","onClick"],w=k({__name:"DocsTocLinks",props:{links:{type:Array,default:()=>[]}},emits:["move"],setup(c,{emit:t}){const a=y(),{activeHeadings:l,updateHeadings:i}=L();setTimeout(()=>{i([...document.querySelectorAll(".document-driven-page h1, .docus-content h1"),...document.querySelectorAll(".document-driven-page h2, .docus-content h2"),...document.querySelectorAll(".document-driven-page h3, .docus-content h3"),...document.querySelectorAll(".document-driven-page h4, .docus-content h4")])},300);function e(s){a.push(`#${s}`),t("move",s)}function o(s){t("move",s)}return(s,r)=>{const h=D;return u(),v("ul",T,[(u(!0),v(S,null,b(c.links,n=>(u(),v("li",{key:n.text,class:m([`depth-${n.depth}`])},[x("a",{href:`#${n.id}`,class:m([C(l).includes(n.id)&&"active"]),onClick:H(p=>e(n.id),["prevent"])},B(n.text),11,$),n.children?(u(),A(h,{key:0,links:n.children,onMove:r[0]||(r[0]=p=>o(p))},null,8,["links"])):M("",!0)],2))),128))])}}}),D=q(w,[["__scopeId","data-v-4331521f"]]);export{D as default};
