"use strict";(self.webpackChunkmatias_huapaya_portfolio=self.webpackChunkmatias_huapaya_portfolio||[]).push([[356],{3695:function(e,t,a){var n=a(7294),l=a(1883);t.Z=function(e){const{0:t,1:a}=(0,n.useState)(!1),r=e=>{e.preventDefault(),a(!t)};return n.createElement(n.Fragment,null,n.createElement("nav",{id:"top-bar",className:"caps "+(t?"is-expanded":"")},n.createElement("div",{id:"initials"},n.createElement(l.rU,{to:"/"},"Matias",n.createElement("br",null),"Huapaya")),n.createElement("div",{id:"menu-container",className:t?"is-expanded":""},n.createElement("ul",{id:"menu",className:"collapsed "+(t?"is-expanded":"")},n.createElement("li",{className:"big"},n.createElement(l.rU,{to:"/about"},"about me")),n.createElement("li",{className:"big"},n.createElement("a",{href:"https://drive.google.com/file/d/1JAX1C2G02xuYuxuripNENvbYk7sqhqEd/view?usp=sharing",target:"_blank",rel:"noreferrer"},"resume")),n.createElement("li",null,n.createElement("a",{href:"https://twitter.com/matias_huapaya",target:"_blank",rel:"noreferrer"},"Twitter")),n.createElement("li",null,n.createElement("a",{href:"https://www.linkedin.com/in/matias-huapaya-2b50a0129/",target:"_blank",rel:"noreferrer"},"LinkedIn")),n.createElement("li",null,n.createElement("a",{href:"mailto: matiashuapayabutron@gmail.com",target:"_blank",rel:"noreferrer"},"Email")))),n.createElement("button",{className:"hamburger",onClick:r,onKeyDown:r},t?"✕":"☰")),n.createElement("div",{id:"page"},e.children),n.createElement("div",{id:"cta"},n.createElement("div",null,n.createElement("h1",null,"get in touch"),n.createElement("p",null,"I can help you build your next website from scratch, or redesign what you already have. Reach out if you have a project in mind!"),n.createElement("div",{id:"cta-links",className:"caps"},n.createElement("a",{href:"https://twitter.com/matias_huapaya",target:"_blank",rel:"noreferrer"},"Twitter"),n.createElement("a",{href:"https://www.linkedin.com/in/matias-huapaya-2b50a0129/",target:"_blank",rel:"noreferrer"},"LinkedIn"),n.createElement("a",{href:"mailto: matiashuapayabutron@gmail.com",target:"_blank",rel:"noreferrer"},"Email")))),n.createElement("footer",null,n.createElement("p",null,"designed + coded with ♥ by Matias Huapaya")))}},7197:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7294),l=a(3695);function r(e){let{name:t,group:a}=e;return n.createElement("div",{className:"project-header--list"},n.createElement("span",{className:"project-header--title"},t),n.createElement("ul",null,a.map((e=>n.createElement("li",{key:e},e)))))}function i(e){let{name:t,text:a}=e;return n.createElement("p",null,n.createElement("span",{className:"project-header--title"},t),a)}var c=a(9991);var o=function(e){let{title:t,date:a,description:l,team:o,role:s,context:m,techs:u,award:d,featuredimage:h}=e;return n.createElement("div",{className:"project-header"},n.createElement("div",{className:"project-header--top"},n.createElement("div",null,n.createElement("h1",null,t),n.createElement("p",{className:"project-date"},a)),n.createElement("h2",null,l," ")),n.createElement("div",{className:"project-header--info"},n.createElement("div",{className:"project-header--info-left"},n.createElement(i,{name:"Project Teammates",text:o}),n.createElement(i,{name:"My Role",text:s}),n.createElement(i,{name:"Context",text:m})),n.createElement("div",null,""===d?"":n.createElement(i,{name:"Award",text:d}),n.createElement(r,{name:"Skills",group:u}))),n.createElement("img",{className:"featured-img",alt:t,src:h||c.Z}))},s=a(8183);var m=function(e){let{title:t,date:a,description:r,team:i,role:c,context:m,techs:u,featuredimage:d,award:h,children:p}=e;return n.createElement(n.Fragment,null,n.createElement(s.Z,{title:t,keywords:["portfolio","website","matias","huapaya","development","app"]}),n.createElement(l.Z,null,n.createElement("div",{className:"project-content not-caps"},n.createElement("div",null,n.createElement(o,{title:t,date:a,description:r,team:i,role:c,context:m,techs:u,featuredimage:d,award:h}),n.createElement("div",{className:"project-content--html"},p)))))}},4513:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var n=a(7294),l=a(7197),r=a.p+"static/nooutlinegreen-0c6c962400ffb6ee033f3e6d4e4a5fb8.png",i=a.p+"static/everwear-329a087dbede59338df43f3471104888.gif";var c=function(){return n.createElement(l.Z,{title:"everwear",date:"28 JAN 2020",description:"A web-app that suggests sustainable alternatives to clothes the user is already interested in buying.",team:"Dhruv Sharma, Andrew So, Emma Wai",role:"Front-end developer, UX/UI Designer, and graphic designer",context:"Hackathon project at UofT Hacks VII",techs:["Google Cloud Functions","ReactJS","Conversational Form","Node.js","Puppeteer","Adobe XD"],featuredimage:i,award:"Best Use of Google Cloud: UofT Hacks"},n.createElement("div",{className:"demo"},n.createElement("a",{href:"https://e-wai.github.io/UofTHacksVII/"},"Live Demo"),n.createElement("a",{href:"https://github.com/e-wai/UofTHacksVII"},"Github")),n.createElement("h3",null,"Inspiration"),n.createElement("p",null,"After looking at the sponsor challenges, we knew we wanted to build a product for social good that was focused on fashion. Initially, we discussed outfit picking mechanisms and were interested in using to computer vision to recognize clothing items, so we decided to develop a website that would focus on finding ethically-sourced alternatives for clothing - hopefully making ethical, sustainable fashion more accessible."),n.createElement("h3",null,"Walkthrough"),n.createElement("p",null,n.createElement("strong",null,"Before navigating to everwear: "),"User is shopping online (on any site) and finds an item they would like to purchase. User copies image URL of item they want (this can usually be done with a right click on the image)."),n.createElement("p",null,n.createElement("strong",null,"On everwear site:")),n.createElement("ol",null,n.createElement("li",null,"Chatbot",n.createElement("ol",{type:"a"},n.createElement("li",null,"Prompts user for image URL."),n.createElement("li",null,"Asks user if they want to search for the item in the same color as pictured or a different one."))),n.createElement("li",null,"Results page",n.createElement("ol",{type:"a"},n.createElement("li",null,"displays image supplied by user and images similar clothing items from sustainable clothing sites (4 results per site)."),n.createElement("li",null,"Clicking on images takes user to site where they can purchase the item.")))),n.createElement("h3",null,"Build"),n.createElement("p",null,n.createElement("strong",null,"Frontend: "),"We built on ReactJS and used ",n.createElement("a",{href:"https://space10-community.github.io/conversational-form/docs/1.0.0/getting-started/"},"Conversational Form")," for the chatbot"),n.createElement("p",null,n.createElement("strong",null,"Backend: "),"We used Node.js and Google Cloud Functions for the backend. Puppeteer handled scraping images and links from Google custom searches."),n.createElement("h3",null,"Brand"),n.createElement("figure",null,n.createElement("img",{src:r,alt:"everwear logo"}),n.createElement("figcaption",null,"Wordmark I designed using custom typography")))}},9991:function(e,t,a){t.Z=a.p+"static/filler-79e381527c3f83e798df417daf8e13ae.jpeg"}}]);
//# sourceMappingURL=component---src-pages-projects-everwear-js-1576113a1e3148112c11.js.map