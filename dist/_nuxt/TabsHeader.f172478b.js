import{a as m,l,Q as b,o as a,f as s,M as v,U as g,j as u,v as x,r as k,h as y,t as I,p as T,i as S,Z as C,k as $}from"./entry.da2796df.js";/* empty css                       */const U=t=>(T("data-v-9b59cc28"),t=t(),S(),t),w={class:"tabs-header"},B=["onClick"],N=U(()=>u("span",{class:"tab"},null,-1)),q=[N],H=m({__name:"TabsHeader",props:{tabs:{type:Array,required:!0},activeTabIndex:{type:Number,required:!0}},emits:["update:activeTabIndex"],setup(t,{emit:p}){const h=t,n=l(),r=l(),o=e=>{e&&(r.value.style.insetInlineStart=`${e.offsetLeft}px`,r.value.style.width=`${e.clientWidth}px`)},f=(e,c)=>{p("update:activeTabIndex",c),C(()=>o(e.target))};return b(n,e=>{e&&setTimeout(()=>{o(n.value.children[h.activeTabIndex])},50)},{immediate:!0}),(e,c)=>(a(),s("div",w,[t.tabs?(a(),s("div",{key:0,ref_key:"tabsRef",ref:n,class:"tabs"},[(a(!0),s(v,null,g(t.tabs,({label:d},i)=>(a(),s("button",{key:`${i}${d}`,class:y([t.activeTabIndex===i?"active":"not-active"]),onClick:_=>f(_,i)},I(d),11,B))),128)),u("span",{ref_key:"highlightUnderline",ref:r,class:"highlight-underline"},q,512)],512)):x("",!0),k(e.$slots,"footer",{},void 0,!0)]))}}),V=$(H,[["__scopeId","data-v-9b59cc28"]]);export{V as default};
