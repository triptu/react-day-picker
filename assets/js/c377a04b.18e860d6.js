"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6971],{7127:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>m,default:()=>g,frontMatter:()=>d,metadata:()=>u,toc:()=>k});var a=r(9657),n=r(2896),i=(r(7427),r(9553)),o=["components"],s=[{value:"Main features",id:"main-features",level:2},{value:"Installation",id:"installation",level:2},{value:"Example",id:"example",level:2},{value:"Documentation",id:"documentation",level:2}],c={toc:s};function l(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"react-daypicker"},"React DayPicker"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://react-day-picker.js.org"},"DayPicker")," is a date picker component for ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org"},"React"),". Renders a monthly calendar to select days. DayPicker is customizable, works great with input fields and can be styled to match any design."),(0,i.kt)("p",null,"\u27a1\ufe0f ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"http://react-day-picker.js.org"},"react-day-picker.js.org"))," for guides, examples and API reference."),(0,i.kt)("a",{href:"http://react-day-picker.js.org"},(0,i.kt)("picture",null,(0,i.kt)("source",{media:"(prefers-color-scheme: dark)",srcSet:"https://user-images.githubusercontent.com/120693/188241991-19d0e8a1-230a-48c8-8477-3c90d4e36197.png"}),(0,i.kt)("source",{media:"(prefers-color-scheme: light)",srcSet:"https://user-images.githubusercontent.com/120693/188238076-311ec6d1-503d-4c21-8ffe-d89faa60e40f.png"}),(0,i.kt)("img",{alt:"Shows a screenshot of the React DayPicker component in a browser\u2019s window.",width:"900"}))),(0,i.kt)("h2",{id:"main-features"},"Main features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u2600\ufe0f Select days, ranges or whatever"),(0,i.kt)("li",{parentName:"ul"},"\ud83e\uddd8\u200d\u2640\ufe0f using ",(0,i.kt)("a",{parentName:"li",href:"http://date-fns.org"},"date-fns")," as date library"),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf0e Localizable into any language"),(0,i.kt)("li",{parentName:"ul"},"\u27a1\ufe0f Keyboard navigation"),(0,i.kt)("li",{parentName:"ul"},"\u267f\ufe0f ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA"},"WAI-ARIA")," support"),(0,i.kt)("li",{parentName:"ul"},"\ud83e\udd16 Written in TypeScript"),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udfa8 Easy to style and customize"),(0,i.kt)("li",{parentName:"ul"},"\ud83d\uddd3 Support multiple calendars"),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udcc4 Easy to integrate input fields")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install react-day-picker date-fns  # using npm\npnpm install react-day-picker date-fns # using pnpm\nyarn add react-day-picker date-fns     # using yarn\n")),(0,i.kt)("a",{href:"https://www.npmjs.com/package/react-day-picker"},(0,i.kt)("img",{src:"https://img.shields.io/npm/v/react-day-picker.svg?style=flat-square",alt:"npm version"}))," ",(0,i.kt)("a",{href:"http://npm-stat.com/charts.html?package=react-day-picker"},(0,i.kt)("img",{src:"https://img.shields.io/npm/dm/react-day-picker.svg?style=flat-square",alt:"npm downloads"}))," ",(0,i.kt)("a",{href:"https://github.com/gpbl/react-day-picker/stargazers"},(0,i.kt)("img",{src:"https://img.shields.io/github/stars/gpbl/react-day-picker?style=flat-square",alt:"stars"}))," ",(0,i.kt)("a",{href:"https://github.com/sponsors/gpbl"},(0,i.kt)("img",{src:"https://img.shields.io/github/sponsors/gpbl?style=flat-square",alt:"sponsors"})),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\n\nimport { format } from 'date-fns';\nimport { DayPicker } from 'react-day-picker';\nimport 'react-day-picker/dist/style.css';\n\nexport default function Example() {\n  const [selected, setSelected] = React.useState<Date>();\n\n  let footer = <p>Please pick a day.</p>;\n  if (selected) {\n    footer = <p>You picked {format(selected, 'PP')}.</p>;\n  }\n  return (\n    <DayPicker\n      mode=\"single\"\n      selected={selected}\n      onSelect={setSelected}\n      footer={footer}\n    />\n  );\n}\n")),(0,i.kt)("h2",{id:"documentation"},"Documentation"),(0,i.kt)("p",null,"See ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"http://react-day-picker.js.org"},"react-day-picker.js.org"))," for guides, examples and API reference of the latest version."),(0,i.kt)("small",null,"Docs for version 7 are at ",(0,i.kt)("a",{href:"https://react-day-picker-v7.netlify.app",target:"_blank"},"react-day-picker-v7.netlify.app"),"."))}l.isMDXComponent=!0;var p=["components"],d={title:"Date Picker Component",hide_title:!0,sidebar_label:"Welcome",slug:"/",hide_table_of_contents:!0},m=void 0,u={unversionedId:"index",id:"index",title:"Date Picker Component",description:"",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/gpbl/react-day-picker/edit/master/website/docs/index.md",tags:[],version:"current",frontMatter:{title:"Date Picker Component",hide_title:!0,sidebar_label:"Welcome",slug:"/",hide_table_of_contents:!0},sidebar:"docsSidebar",next:{title:"Getting Started",permalink:"/start"}},f={},k=s,y={toc:k};function g(e){var t=e.components,r=(0,n.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(l,{mdxType:"Readme"}))}g.isMDXComponent=!0},9553:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var a=r(7427);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),u=n,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||i;return r?a.createElement(f,o(o({ref:t},p),{},{components:r})):a.createElement(f,o({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);
//# sourceMappingURL=c377a04b.18e860d6.js.map