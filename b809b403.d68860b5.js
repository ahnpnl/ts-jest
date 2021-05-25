(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(158)),s={title:"useESM option"},i={unversionedId:"getting-started/options/useESM",id:"version-27.0/getting-started/options/useESM",isDocsHomePage:!1,title:"useESM option",description:"The useESM option allows ts-jest to transform codes to ESM syntax if possible.",source:"@site/versioned_docs/version-27.0/getting-started/options/useESM.md",slug:"/getting-started/options/useESM",permalink:"/ts-jest/docs/getting-started/options/useESM",editUrl:"https://github.com/kulshekhar/ts-jest/edit/master/website/versioned_docs/version-27.0/getting-started/options/useESM.md",version:"27.0"},c=[{value:"Examples",id:"examples",children:[]}],p={toc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"useESM")," option allows ",Object(a.b)("inlineCode",{parentName:"p"},"ts-jest")," to transform codes to ESM syntax ",Object(a.b)("strong",{parentName:"p"},"if possible"),"."),Object(a.b)("p",null,"The default value is ",Object(a.b)("strong",{parentName:"p"},"false"),", ",Object(a.b)("inlineCode",{parentName:"p"},"ts-jest")," will transform codes to ",Object(a.b)("inlineCode",{parentName:"p"},"CommonJS")," syntax."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      useESM: true,\n    },\n  },\n}\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'// OR package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "useESM": true\n      }\n    }\n  }\n}\n')))}l.isMDXComponent=!0},158:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,f=u["".concat(s,".").concat(d)]||u[d]||b[d]||a;return n?o.a.createElement(f,i(i({ref:t},p),{},{components:n})):o.a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);