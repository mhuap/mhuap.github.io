(self.webpackChunkmatias_huapaya_portfolio=self.webpackChunkmatias_huapaya_portfolio||[]).push([[356],{1788:function(e,t,a){"use strict";var n=a(7294),l=a(5444);t.Z=function(e){var t=(0,n.useState)(!1),a=t[0],r=t[1],i=function(e){e.preventDefault(),r(!a)};return n.createElement(n.Fragment,null,n.createElement("nav",{id:"side-bar"},n.createElement(l.rU,{id:"initials",to:"/"},"MH"),n.createElement("ul",{id:"menu",className:"collapsed "+(a?"is-expanded":"")},n.createElement("li",null,n.createElement(l.rU,{to:"/about"},"about me")),n.createElement("li",null,n.createElement("a",{href:"https://drive.google.com/file/d/1JAX1C2G02xuYuxuripNENvbYk7sqhqEd/view?usp=sharing",target:"_blank"},"resume")),n.createElement("li",null,n.createElement("a",{href:"https://twitter.com/matias_huapaya",target:"_blank"},"Twitter")),n.createElement("li",null,n.createElement("a",{href:"https://www.linkedin.com/in/matias-huapaya-2b50a0129/",target:"_blank"},"LinkedIn")),n.createElement("li",null,n.createElement("a",{href:"mailto: huapmar97@gmail.com",target:"_blank"},"Email"))),n.createElement("button",{className:"hamburger",onClick:i,onKeyDown:i},a?"✕":"☰")),n.createElement("div",{id:"page"},e.children),n.createElement("footer",null,n.createElement("p",null,"designed + coded with ♥ by Matias Huapaya")))}},3888:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});var n=a(7294),l=a(1788),r=a(5918),i=a(9991);var c=function(e){var t=e.title,a=e.date,l=e.description,c=e.team,o=e.role,s=e.context,m=e.techs,u=e.award,d=e.featuredimage;return n.createElement("div",{className:"project-header"},n.createElement("div",{className:"project-header--top"},n.createElement("div",null,n.createElement("h1",null,t),n.createElement("p",{className:"project-date"},a)),n.createElement("h2",null,l," ")),n.createElement("div",{className:"project-header--info"},n.createElement("div",{className:"project-header--info-left"},n.createElement(r.m,{name:"Project Teammates",text:c}),n.createElement(r.m,{name:"My Role",text:o}),n.createElement(r.m,{name:"Context",text:s})),n.createElement("div",null,""===u?"":n.createElement(r.m,{name:"Award",text:u}),n.createElement(r.Q,{name:"Skills",group:m}))),n.createElement("img",{className:"featured-img",alt:t,src:d||i.Z}))},o=a(3751);var s=function(e){var t=e.title,a=e.date,r=e.description,i=e.team,s=e.role,m=e.context,u=e.techs,d=e.featuredimage,h=e.award,p=e.children;return n.createElement(n.Fragment,null,n.createElement(o.Z,{title:t,keywords:["portfolio","website","huapaya","development"]}),n.createElement(l.Z,null,n.createElement("div",{className:"page-content project-content page-section"},n.createElement("div",null,n.createElement(c,{title:t,date:a,description:r,team:i,role:s,context:m,techs:u,featuredimage:d,award:h}),n.createElement("div",{className:"project-content--html"},p)))))}},5918:function(e,t,a){"use strict";a.d(t,{Q:function(){return l},m:function(){return r}});var n=a(7294);function l(e){var t=e.name,a=e.group;return n.createElement("div",{className:"project-header--list"},n.createElement("span",{className:"project-header--title"},t),n.createElement("ul",null,a.map((function(e){return n.createElement("li",{key:e},e)}))))}function r(e){var t=e.name,a=e.text;return n.createElement("p",null,n.createElement("span",{className:"project-header--title"},t),a)}},2484:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return c}});var n=a(7294),l=a(3888),r=a.p+"static/nooutlinegreen-0c6c962400ffb6ee033f3e6d4e4a5fb8.png",i=a(4573);var c=function(){return n.createElement(l.Z,{title:"everwear",date:"28 JAN 2020",description:"A web-app that suggests sustainable alternatives to clothes the user is already interested in buying.",team:"Dhruv Sharma, Andrew So, Emma Wai",role:"Front-end developer, UX/UI Designer, and graphic designer",context:"Hackathon project at UofT Hacks VII",techs:["Google Cloud Functions","ReactJS","Conversational Form","Node.js","Puppeteer","Adobe XD"],featuredimage:i.Z,award:"Best Use of Google Cloud: UofT Hacks"},n.createElement("div",{className:"demo"},n.createElement("a",{href:"https://e-wai.github.io/UofTHacksVII/"},"Live Demo"),n.createElement("a",{href:"https://github.com/e-wai/UofTHacksVII"},"Github")),n.createElement("h3",null,"Inspiration"),n.createElement("p",null,"After looking at the sponsor challenges, we knew we wanted to build a product for social good that was focused on fashion. Initially, we discussed outfit picking mechanisms and were interested in using to computer vision to recognize clothing items, so we decided to develop a website that would focus on finding ethically-sourced alternatives for clothing - hopefully making ethical, sustainable fashion more accessible."),n.createElement("h3",null,"Walkthrough"),n.createElement("p",null,n.createElement("strong",null,"Before navigating to everwear: "),"User is shopping online (on any site) and finds an item they would like to purchase. User copies image URL of item they want (this can usually be done with a right click on the image)."),n.createElement("p",null,n.createElement("strong",null,"On everwear site:")),n.createElement("ol",null,n.createElement("li",null,"Chatbot",n.createElement("ol",{type:"a"},n.createElement("li",null,"Prompts user for image URL."),n.createElement("li",null,"Asks user if they want to search for the item in the same color as pictured or a different one."))),n.createElement("li",null,"Results page",n.createElement("ol",{type:"a"},n.createElement("li",null,"displays image supplied by user and images similar clothing items from sustainable clothing sites (4 results per site)."),n.createElement("li",null,"Clicking on images takes user to site where they can purchase the item.")))),n.createElement("h3",null,"Build"),n.createElement("p",null,n.createElement("strong",null,"Frontend: "),"We built on ReactJS and used ",n.createElement("a",{href:"https://space10-community.github.io/conversational-form/docs/1.0.0/getting-started/"},"Conversational Form")," for the chatbot"),n.createElement("p",null,n.createElement("strong",null,"Backend: "),"We used Node.js and Google Cloud Functions for the backend. Puppeteer handled scraping images and links from Google custom searches."),n.createElement("h3",null,"Brand"),n.createElement("figure",null,n.createElement("img",{src:r,alt:"everwear logo"}),n.createElement("figcaption",null,"Wordmark I designed using custom typography")))}},4573:function(e,t,a){"use strict";t.Z=a.p+"static/everwear-329a087dbede59338df43f3471104888.gif"},9991:function(e,t,a){"use strict";t.Z=a.p+"static/filler-79e381527c3f83e798df417daf8e13ae.jpeg"}}]);
//# sourceMappingURL=component---src-pages-projects-everwear-js-6cae2dbbe9590706d4e5.js.map