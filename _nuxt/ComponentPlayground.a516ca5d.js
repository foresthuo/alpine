import{u as m}from"./asyncData.dd3f0382.js";import{M as c,I as p,d as i,a9 as u,r as l,N as e,k as d}from"./entry.a3763850.js";import f from"./Ellipsis.db836f45.js";import _ from"./ComponentPlaygroundData.9f3f35fe.js";import"./TabsHeader.9d336071.js";import"./ComponentPlaygroundProps.a1a64203.js";import"./ProseH4.b9c35ef2.js";import"./ProseCodeInline.2ad8792b.js";import"./Badge.3c8e3261.js";import"./MDCSlot.e84c1f42.js";import"./slot.f5e586a7.js";import"./ProseP.6a6c977a.js";import"./index.86bc865a.js";import"./ComponentPlaygroundSlots.vue.fe6379cd.js";import"./ComponentPlaygroundTokens.vue.2825c2df.js";async function y(o){const t=c(o);{const{data:n}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const g=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>u(o.component)),n=l({...o.props}),r=await y(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(_,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}});const V=d(g,[["__scopeId","data-v-51227037"]]);export{V as default};
