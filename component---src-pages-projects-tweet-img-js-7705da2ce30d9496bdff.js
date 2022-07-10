"use strict";(self.webpackChunkmatias_huapaya_portfolio=self.webpackChunkmatias_huapaya_portfolio||[]).push([[917],{3695:function(e,t,a){var r=a(7294),n=a(1597);t.Z=function(e){var t=(0,r.useState)(!1),a=t[0],l=t[1],o=function(e){e.preventDefault(),l(!a)};return r.createElement(r.Fragment,null,r.createElement("nav",{id:"side-bar"},r.createElement(n.rU,{id:"initials",to:"/"},"Matias",r.createElement("br",null),"Huapaya"),r.createElement("ul",{id:"menu",className:"collapsed "+(a?"is-expanded":"")},r.createElement("li",null,r.createElement(n.rU,{to:"/about"},"about me")),r.createElement("li",null,r.createElement("a",{href:"https://drive.google.com/file/d/1JAX1C2G02xuYuxuripNENvbYk7sqhqEd/view?usp=sharing",target:"_blank",rel:"noreferrer"},"resume")),r.createElement("li",null,r.createElement("a",{href:"https://twitter.com/matias_huapaya",target:"_blank",rel:"noreferrer"},"Twitter")),r.createElement("li",null,r.createElement("a",{href:"https://www.linkedin.com/in/matias-huapaya-2b50a0129/",target:"_blank",rel:"noreferrer"},"LinkedIn")),r.createElement("li",null,r.createElement("a",{href:"mailto: matiashuapayabutron@gmail.com",target:"_blank",rel:"noreferrer"},"Email"))),r.createElement("button",{className:"hamburger",onClick:o,onKeyDown:o},a?"✕":"☰")),r.createElement("div",{id:"page"},e.children),r.createElement("div",{id:"cta"},r.createElement("div",null,r.createElement("h1",null,"get in touch"),r.createElement("p",null,"I can help you build your next website from scratch, or redesign what you already have. Reach out if you have a project in mind!"),r.createElement("div",{id:"cta-links",className:"caps"},r.createElement("a",{href:"https://twitter.com/matias_huapaya",target:"_blank",rel:"noreferrer"},"Twitter"),r.createElement("a",{href:"https://www.linkedin.com/in/matias-huapaya-2b50a0129/",target:"_blank",rel:"noreferrer"},"LinkedIn"),r.createElement("a",{href:"mailto: matiashuapayabutron@gmail.com",target:"_blank",rel:"noreferrer"},"Email")))),r.createElement("footer",null,r.createElement("p",null,"designed + coded with ♥ by Matias Huapaya")))}},7197:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(7294),n=a(3695);function l(e){var t=e.name,a=e.group;return r.createElement("div",{className:"project-header--list"},r.createElement("span",{className:"project-header--title"},t),r.createElement("ul",null,a.map((function(e){return r.createElement("li",{key:e},e)}))))}function o(e){var t=e.name,a=e.text;return r.createElement("p",null,r.createElement("span",{className:"project-header--title"},t),a)}var i=a(9991);var c=function(e){var t=e.title,a=e.date,n=e.description,c=e.team,s=e.role,m=e.context,u=e.techs,d=e.award,h=e.featuredimage;return r.createElement("div",{className:"project-header"},r.createElement("div",{className:"project-header--top"},r.createElement("div",null,r.createElement("h1",null,t),r.createElement("p",{className:"project-date"},a)),r.createElement("h2",null,n," ")),r.createElement("div",{className:"project-header--info"},r.createElement("div",{className:"project-header--info-left"},r.createElement(o,{name:"Project Teammates",text:c}),r.createElement(o,{name:"My Role",text:s}),r.createElement(o,{name:"Context",text:m})),r.createElement("div",null,""===d?"":r.createElement(o,{name:"Award",text:d}),r.createElement(l,{name:"Skills",group:u}))),r.createElement("img",{className:"featured-img",alt:t,src:h||i.Z}))},s=a(262);var m=function(e){var t=e.title,a=e.date,l=e.description,o=e.team,i=e.role,m=e.context,u=e.techs,d=e.featuredimage,h=e.award,p=e.children;return r.createElement(r.Fragment,null,r.createElement(s.Z,{title:t,keywords:["portfolio","website","matias","huapaya","development","app"]}),r.createElement(n.Z,null,r.createElement("div",{className:"project-content not-caps"},r.createElement("div",null,r.createElement(c,{title:t,date:a,description:l,team:o,role:i,context:m,techs:u,featuredimage:d,award:h}),r.createElement("div",{className:"project-content--html"},p)))))}},7746:function(e,t,a){a.r(t),a.d(t,{default:function(){return i}});var r=a(7294),n=a(7197),l=a.p+"static/insta-examples@2x-7d9be52b589ddfb04a01d72af468c2a6.jpg",o=a(1670);var i=function(){return r.createElement(n.Z,{title:"tweet-img",date:"JAN 2020 - PRESENT",description:"Progressive web app that converts tweets into images with colored backgrounds. Perfect for sharing tweets\n        on Instagram.",team:"N/A",role:"Full-stack developer",context:"Personal project",techs:["React","Twitter API","Next.js","Vercel","Unsplash API"],featuredimage:o.Z,award:""},r.createElement("div",{className:"demo"},r.createElement("a",{href:"https://mhuap.github.io/tweet-img/"},"Visit Site"),r.createElement("a",{href:"https://github.com/mhuap/tweet-img"},"Github")),r.createElement("h3",null,"Inspiration"),r.createElement("p",null,"I noticed a trend of posting tweets to instagram with a colored background. Usually, these are made with screenshots of tweets, but in some cases further edits are made (e.g. adding a border to tweet section, or deleting the tweet background entirely)."),r.createElement("figure",null,r.createElement("img",{src:l,alt:"Collage of instagram posts of tweets."}),r.createElement("figcaption",null,"Examples of Instagram posts of tweets")),r.createElement("p",null,"I searched for an existing automated way to do this without using some sort of external graphic-design program, and I found ",r.createElement("a",{href:"http://www.twimmage.com"},"Twimmage"),". Twimmage has a lot of the features I was looking for in terms of the backgrounds, but it didn't handle the tweet content very well - the tweet box size is always fixed irregardless of tweet length, and it does not support images or emojis."),r.createElement("p",null,"So I decided to make my own."),r.createElement("h3",null,"Build"),r.createElement("p",null,"Initially, I scraped the tweet data from Twitter using cheerio.js via Google Cloud Functions. At some point Twitter obfuscated their CSS, which made scraping impossible. In a way it all worked out for the better because I made a Developer account and got access to the official Twitter API, which gave me more flexibility."),r.createElement("p",null,"The current tech stack looks like this:"),r.createElement("p",null,r.createElement("strong",null,"Frontend: "),"I built on Next.js and used dom-to-image to convert html into an image. I used axios to make the call to the backend. Also, I created a custom colorpicker using ",r.createElement("a",{href:"https://casesandberg.github.io/react-color/"},"React Color"),". For the background images, I used Unsplash API."),r.createElement("p",null,r.createElement("strong",null,"Backend: "),"I used Next.js's serverless functions to create an HTTPs request between the front-end and Twitter's API."),r.createElement("p",null,"I chose to use Next.js out of curiosity for the framework and desire to experiment with it. I ended up deploying with Vercel and the whole experience was very smooth and convenient seeing as they're made to be used together."),r.createElement("h3",null,"What's Next"),r.createElement("p",null,"I just finished working on a good amount of features for this project. It has truly grown into more than just a minimum viable product - so much so that my friends and I use it regularly. I keep track of all upcoming changes on ",r.createElement("a",{href:"https://github.com/mhuap/tweet-img/projects/3"},"github"),"."),r.createElement("p",null,"Current background customization features include using a solid color, an uploaded image, an image from a URL, or an image from Unsplash."))}},9991:function(e,t,a){t.Z=a.p+"static/filler-79e381527c3f83e798df417daf8e13ae.jpeg"},1670:function(e,t,a){t.Z=a.p+"static/tweetimg-117f45a6016a3f297c7c3f59faaaf1d9.jpg"}}]);
//# sourceMappingURL=component---src-pages-projects-tweet-img-js-7705da2ce30d9496bdff.js.map