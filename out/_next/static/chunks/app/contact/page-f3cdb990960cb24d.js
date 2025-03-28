(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{9633:function(e,r,t){Promise.resolve().then(t.bind(t,9403))},9403:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return l}});var a=t(7437),s=t(2265),n=t(9089);function l(){let[e,r]=(0,s.useState)({name:"",email:"",subject:"",message:""}),[t,l]=(0,s.useState)(!1),[i,o]=(0,s.useState)(!1),[c,m]=(0,s.useState)(""),d=e=>{let{name:t,value:a}=e.target;r(e=>({...e,[t]:a}))},u=async e=>{e.preventDefault(),l(!0),o(!1),m("");try{await new Promise(e=>setTimeout(e,1e3)),o(!0),r({name:"",email:"",subject:"",message:""})}catch(e){m("There was an error sending your message. Please try again.")}finally{l(!1)}};return(0,a.jsxs)("div",{className:"container mx-auto py-12",children:[(0,a.jsx)("h1",{className:"text-4xl font-bold mb-8",children:"Contact Me"}),(0,a.jsxs)("div",{className:"grid md:grid-cols-2 gap-8",children:[(0,a.jsx)("div",{children:(0,a.jsxs)("div",{className:"card p-6 mb-8",children:[(0,a.jsx)("h2",{className:"text-2xl font-bold mb-6",children:"Get in Touch"}),(0,a.jsx)("p",{className:"text-gray-700 dark:text-gray-300 mb-6",children:"Feel free to reach out if you have any questions about my work, potential collaborations, or just want to say hello!"}),(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsxs)("div",{className:"flex items-start",children:[(0,a.jsx)("div",{className:"flex-shrink-0 mt-1",children:(0,a.jsx)(n.SRX,{className:"h-5 w-5 text-primary-600 dark:text-primary-400"})}),(0,a.jsxs)("div",{className:"ml-3",children:[(0,a.jsx)("h3",{className:"text-lg font-medium",children:"Email"}),(0,a.jsx)("p",{className:"text-gray-600 dark:text-gray-400",children:"your.email@example.com"})]})]}),(0,a.jsxs)("div",{className:"flex items-start",children:[(0,a.jsx)("div",{className:"flex-shrink-0 mt-1",children:(0,a.jsx)(n.Nh4,{className:"h-5 w-5 text-primary-600 dark:text-primary-400"})}),(0,a.jsxs)("div",{className:"ml-3",children:[(0,a.jsx)("h3",{className:"text-lg font-medium",children:"Location"}),(0,a.jsx)("p",{className:"text-gray-600 dark:text-gray-400",children:"Shanghai, China"})]})]})]}),(0,a.jsxs)("div",{className:"mt-8",children:[(0,a.jsx)("h3",{className:"text-lg font-medium mb-3",children:"Connect with me"}),(0,a.jsxs)("div",{className:"flex space-x-4",children:[(0,a.jsx)("a",{href:"https://github.com/hexiaoyi95",target:"_blank",rel:"noopener noreferrer",className:"text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400",children:(0,a.jsx)(n.hJX,{className:"h-6 w-6"})}),(0,a.jsx)("a",{href:"https://linkedin.com/in/yourprofile",target:"_blank",rel:"noopener noreferrer",className:"text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400",children:(0,a.jsx)(n.ltd,{className:"h-6 w-6"})}),(0,a.jsx)("a",{href:"mailto:your.email@example.com",className:"text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400",children:(0,a.jsx)(n.SRX,{className:"h-6 w-6"})})]})]})]})}),(0,a.jsxs)("div",{className:"card p-6",children:[(0,a.jsx)("h2",{className:"text-2xl font-bold mb-6",children:"Send a Message"}),i?(0,a.jsx)("div",{className:"p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-md mb-6",children:"Thank you for your message! I will get back to you as soon as possible."}):null,c?(0,a.jsx)("div",{className:"p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-md mb-6",children:c}):null,(0,a.jsxs)("form",{onSubmit:u,children:[(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Name"}),(0,a.jsx)("input",{type:"text",id:"name",name:"name",value:e.name,onChange:d,required:!0,className:"w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800"})]}),(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Email"}),(0,a.jsx)("input",{type:"email",id:"email",name:"email",value:e.email,onChange:d,required:!0,className:"w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800"})]}),(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("label",{htmlFor:"subject",className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Subject"}),(0,a.jsx)("input",{type:"text",id:"subject",name:"subject",value:e.subject,onChange:d,required:!0,className:"w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800"})]}),(0,a.jsxs)("div",{className:"mb-6",children:[(0,a.jsx)("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Message"}),(0,a.jsx)("textarea",{id:"message",name:"message",value:e.message,onChange:d,required:!0,rows:5,className:"w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800"})]}),(0,a.jsx)("button",{type:"submit",disabled:t,className:"btn w-full flex justify-center",children:t?"Sending...":"Send Message"})]})]})]})]})}},6231:function(e,r,t){"use strict";t.d(r,{w_:function(){return m}});var a=t(2265),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},n=a.createContext&&a.createContext(s),l=["attr","size","title"];function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,a)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach(function(r){var a,s;a=r,s=t[r],(a=function(e){var r=function(e,r){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var a=t.call(e,r||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==typeof r?r:r+""}(a))in e?Object.defineProperty(e,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[a]=s}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function m(e){return r=>a.createElement(d,i({attr:c({},e.attr)},r),function e(r){return r&&r.map((r,t)=>a.createElement(r.tag,c({key:t},r.attr),e(r.child)))}(e.child))}function d(e){var r=r=>{var t,{attr:s,size:n,title:o}=e,m=function(e,r){if(null==e)return{};var t,a,s=function(e,r){if(null==e)return{};var t={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(r.indexOf(a)>=0)continue;t[a]=e[a]}return t}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}(e,l),d=n||r.size||"1em";return r.className&&(t=r.className),e.className&&(t=(t?t+" ":"")+e.className),a.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,s,m,{className:t,style:c(c({color:e.color||r.color},r.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),o&&a.createElement("title",null,o),e.children)};return void 0!==n?a.createElement(n.Consumer,null,e=>r(e)):r(s)}}},function(e){e.O(0,[699,971,117,744],function(){return e(e.s=9633)}),_N_E=e.O()}]);