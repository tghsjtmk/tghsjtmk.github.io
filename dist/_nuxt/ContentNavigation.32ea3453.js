import{u}from"./asyncData.6f5d5d27.js";import{a as c,ae as d,b as l,J as f,G as v,af as _,A as g,al as y,B as m,x as h}from"./entry.da2796df.js";/* empty css                       *//* empty css                                   *//* empty css                     *//* empty css                      *//* empty css                   *//* empty css                           *//* empty css                            *//* empty css                  *//* empty css                         *//* empty css                         *//* empty css                    *//* empty css                           *//* empty css                   *//* empty css                            *//* empty css                      *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                     *//* empty css                    *//* empty css                    *//* empty css                        *//* empty css                       *//* empty css                    *//* empty css                    *//* empty css                       *//* empty css                    *//* empty css                    *//* empty css                  *//* empty css                    *//* empty css                      *//* empty css                       *//* empty css                      *//* empty css                 *//* empty css                    *//* empty css                     *//* empty css                        *//* empty css                           *//* empty css                      *//* empty css                 *//* empty css                     *//* empty css                       *//* empty css                                *//* empty css                                     *//* empty css                                    *//* empty css                          *//* empty css                               *//* empty css                    */const xt=c({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=d(e),r=l(()=>{var o;return typeof((o=t.value)==null?void 0:o.params)=="function"?t.value.params():t.value});if(!r.value&&f("dd-navigation").value){const{navigation:o}=v();return{navigation:o}}const{data:p}=await u(`content-navigation-${_(r.value)}`,()=>y(r.value));return{navigation:p}},render(e){const t=g(),{navigation:r}=e,p=i=>m(h,{to:i._path},()=>i.title),o=(i,n)=>m("ul",n?{"data-level":n}:null,i.map(a=>a.children?m("li",null,[p(a),o(a.children,n+1)]):m("li",null,p(a)))),s=i=>o(i,0);return t!=null&&t.default?t.default({navigation:r,...this.$attrs}):s(r)}});export{xt as default};