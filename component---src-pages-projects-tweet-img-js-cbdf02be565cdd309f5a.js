(self.webpackChunkmatias_huapaya_portfolio=self.webpackChunkmatias_huapaya_portfolio||[]).push([[917],{3888:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});var n=a(7294),r=a(6260),o=a(5918),l=a(9991);var c=function(e){var t=e.title,a=e.date,r=e.description,c=e.team,i=e.role,s=e.context,m=e.techs,u=e.award,d=e.featuredimage;return n.createElement("div",{className:"project-header"},n.createElement("div",{className:"project-header--top"},n.createElement("div",null,n.createElement("h1",null,t),n.createElement("p",{className:"project-date"},a)),n.createElement("h2",null,r," ")),n.createElement("div",{className:"project-header--info"},n.createElement("div",{className:"project-header--info-left"},n.createElement(o.m,{name:"Project Teammates",text:c}),n.createElement(o.m,{name:"My Role",text:i}),n.createElement(o.m,{name:"Context",text:s})),n.createElement("div",null,""===u?"":n.createElement(o.m,{name:"Award",text:u}),n.createElement(o.Q,{name:"Skills",group:m}))),n.createElement("img",{className:"featured-img",alt:t,src:d||l.Z}))},i=a(3751);var s=function(e){var t=e.title,a=e.date,o=e.description,l=e.team,s=e.role,m=e.context,u=e.techs,d=e.featuredimage,h=e.award,p=e.children;return n.createElement(n.Fragment,null,n.createElement(i.Z,{title:t,keywords:["portfolio","website","huapaya","development"]}),n.createElement(r.Z,null,n.createElement("div",{className:"page-content project-content page-section"},n.createElement("div",null,n.createElement(c,{title:t,date:a,description:o,team:l,role:s,context:m,techs:u,featuredimage:d,award:h}),n.createElement("div",{className:"project-content--html"},p)))))}},5918:function(e,t,a){"use strict";a.d(t,{Q:function(){return r},m:function(){return o}});var n=a(7294);function r(e){var t=e.name,a=e.group;return n.createElement("div",{className:"project-header--list"},n.createElement("span",{className:"project-header--title"},t),n.createElement("ul",null,a.map((function(e){return n.createElement("li",{key:e},e)}))))}function o(e){var t=e.name,a=e.text;return n.createElement("p",null,n.createElement("span",{className:"project-header--title"},t),a)}},5542:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return c}});var n=a(7294),r=a(3888),o=a.p+"static/insta-examples@2x-7d9be52b589ddfb04a01d72af468c2a6.jpg",l=a(1670);var c=function(){return n.createElement(r.Z,{title:"tweet-img",date:"JAN.2020",description:"Web app converts tweets into images with colored backgrounds. Perfect for sharing tweets\n        on Instagram.",team:"N/A",role:"Full-stack developer",context:"Personal project",techs:["React","Twitter API","Next.js","html2canvas"],featuredimage:l.Z,award:""},n.createElement("div",{className:"demo"},n.createElement("a",{href:"https://mhuap.github.io/tweet-img/"},"Visit Site"),n.createElement("a",{href:"https://github.com/mhuap/tweet-img"},"Github")),n.createElement("h3",null,"Inspiration"),n.createElement("p",null,"I noticed a trend of posting tweets to instagram with a colored background. Usually, these are made with screenshots of tweets, but in some cases further edits are made (e.g. adding a border to tweet section, or deleting the tweet background entirely)."),n.createElement("figure",null,n.createElement("img",{src:o,alt:"Collage of instagram posts of tweets."}),n.createElement("figcaption",null,"Examples of Instagram posts of tweets")),n.createElement("p",null,"I searched for an existing automated way to do this without using some sort of external graphic-design program, and I found ",n.createElement("a",{href:"http://www.twimmage.com"},"Twimmage"),". Twimmage has a lot of the features I was looking for in terms of the backgrounds, but it didn't handle the tweet content very well - the tweet box size is always fixed irregardless of tweet length, and it does not support images or emojis."),n.createElement("p",null,"So I decided to make my own."),n.createElement("h3",null,"Build"),n.createElement("p",null,"Initially, I scraped the tweet data from Twitter using cheerio.js via Google Cloud Functions. At some point Twitter obfuscated their CSS, which made scraping impossible. In a way it all worked out for the better because I made a Developer account and got access to the official Twitter API, which gave me more flexibility."),n.createElement("p",null,"The current tech stack looks like this:"),n.createElement("p",null,n.createElement("strong",null,"Frontend: "),"I built on Next.js and used html2canvas to convert html into a canvas to save as an image. I used axios to make the call to the backend. Also I created a custom colorpicker using ",n.createElement("a",{href:"https://casesandberg.github.io/react-color/"},"React Color"),"."),n.createElement("p",null,n.createElement("strong",null,"Backend: "),"I used Next.js's serverless functions to create an HTTPs request between the front-end and Twitter's API."),n.createElement("p",null,"I chose to use Next.js out of curiosity for the framework and desire to experiment with it. I ended up deploying with Vercel and the whole experience was very smooth and convenient seeing as they're made to be used together."),n.createElement("h3",null,"What's Next"),n.createElement("p",null,"I just finished working on a good amount of features for this project. It has truly grown into more than just a minimum viable product - so much so that my friends and I use it regularly. I keep track of all upcoming changes on ",n.createElement("a",{href:"https://github.com/mhuap/tweet-img/projects/3"},"github"),"."),n.createElement("p",null,"Current background customization features include using a solid color, an uploaded image, or an image from a URL."))}},9991:function(e,t,a){"use strict";t.Z=a.p+"static/filler-79e381527c3f83e798df417daf8e13ae.jpeg"},1670:function(e,t,a){"use strict";t.Z=a.p+"static/tweetimg-117f45a6016a3f297c7c3f59faaaf1d9.jpg"}}]);
//# sourceMappingURL=component---src-pages-projects-tweet-img-js-cbdf02be565cdd309f5a.js.map