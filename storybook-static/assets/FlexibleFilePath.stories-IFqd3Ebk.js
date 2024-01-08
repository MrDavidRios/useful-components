import{r as y}from"./index-XiNr8FW2.js";import"./_commonjsHelpers-5-cIlDoe.js";var m={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=y,h=Symbol.for("react.element"),b=Symbol.for("react.fragment"),g=Object.prototype.hasOwnProperty,F=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function _(r,e,s){var t,o={},i=null,p=null;s!==void 0&&(i=""+s),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(p=e.ref);for(t in e)g.call(e,t)&&!v.hasOwnProperty(t)&&(o[t]=e[t]);if(r&&r.defaultProps)for(t in e=r.defaultProps,e)o[t]===void 0&&(o[t]=e[t]);return{$$typeof:h,type:r,key:i,ref:p,props:o,_owner:F.current}}n.Fragment=b;n.jsx=_;n.jsxs=_;m.exports=n;var c=m.exports;const l=({path:r})=>{const e=s=>s.split("\\");return c.jsx("div",{style:{display:"flex",justifyContent:"center",flexWrap:"wrap"},children:e(r).map((s,t)=>c.jsx("p",{children:`${s}${t===e(r).length-1?"":"\\"}`},`${s.substring(0,1)}`))})};try{l.displayName="FlexibleFilePath",l.__docgenInfo={description:"",displayName:"FlexibleFilePath",props:{path:{defaultValue:null,description:"",name:"path",required:!0,type:{name:"string"}}}}}catch{}const j={component:l,title:"Flexible File Path",tags:["autodocs"],parameters:{docs:{description:{component:"A component that displays a file path and allows it to wrap, allowing it to adjust to a variety of different widths. Its wrapping behaves as if slashes are spaces in normally wrapping text."}}}},a={args:{path:"C:\\Users\\User\\Documents\\GitHub\\react-ts-storybook"}};var d,u,f;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    path: "C:\\\\Users\\\\User\\\\Documents\\\\GitHub\\\\react-ts-storybook"
  }
}`,...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const E=["Default"];export{a as Default,E as __namedExportsOrder,j as default};
