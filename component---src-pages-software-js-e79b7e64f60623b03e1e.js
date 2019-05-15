(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{146:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(158),i=a(170);t.default=function(){return l.a.createElement(r.a,{software:!0},l.a.createElement(i.a,null))}},148:function(e,t,a){"use strict";var n=a(149),l=a(0),r=a.n(l),i=a(4),c=a.n(i),o=a(153),s=a.n(o);function m(e){var t=e.description,a=e.lang,l=e.meta,i=e.keywords,c=e.title,o=n.data.site,m=t||o.siteMetadata.description;return r.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+o.siteMetadata.title,defaultTitle:o.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:c},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:m}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(l)})}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=m},149:function(e){e.exports={data:{site:{siteMetadata:{title:"Wes Huapaya",description:"Wes Huapaya's personal portfolio website. Learn more about my abilities as a software developer and graphic designer",author:"Wes Huapaya"}}}}},151:function(e,t,a){var n;e.exports=(n=a(157))&&n.default||n},152:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(154),i=a(159),c=a(160);a(150);r.b.add(c.a),t.a=function(){return l.a.createElement("footer",null,l.a.createElement("a",{href:"https://github.com/mhuap"},l.a.createElement(i.a,{icon:["fab","github"]})),l.a.createElement("a",{href:"https://twitter.com/wes_huapaya"},l.a.createElement(i.a,{icon:["fab","twitter"]})),l.a.createElement("a",{href:"https://www.linkedin.com/in/wes-huapaya-2b50a0129/"},l.a.createElement(i.a,{icon:["fab","linkedin-in"]})))}},155:function(e,t,a){e.exports=a.p+"static/logo-3c4e553c22c1d712486903f435f3caeb.png"},157:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),l=a.n(n),r=a(4),i=a.n(r),c=a(55),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return a?l.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},158:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(148),i=(a(150),a(155)),c=a.n(i),o=(a(162),a(163));var s=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("a",{id:"about-link",href:"/about"},"Learn more about me!"),l.a.createElement("div",{id:"home",className:"full-for-center"},l.a.createElement("div",{className:"center"},l.a.createElement("img",{src:c.a,alt:"cute ghost logo"}),l.a.createElement("p",{id:"hi"},"Hi, I'm"),l.a.createElement("h1",null,"wes huapaya")),l.a.createElement("div",{id:"scroll"},l.a.createElement(o.Link,{to:"projects",smooth:!0},l.a.createElement("span",null),l.a.createElement("small",{id:"scroll-text"},"scroll down")))))},m=a(4),u=a.n(m),d=a(33),p=a.n(d);a(151),l.a.createContext({});u.a.object,u.a.string.isRequired,u.a.func,u.a.func;a(168);var h=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"projects"},l.a.createElement("div",{id:"menu"},l.a.createElement("div",null,l.a.createElement("h2",null,"Here's some of my work as a"),l.a.createElement("h2",{className:e.initVal?"active":"not-active"},l.a.createElement(p.a,{to:"software/#projects"},"software developer")),l.a.createElement("h2",{className:e.initVal?"not-active":"active"},l.a.createElement(p.a,{to:"/design/#projects"},"graphic designer")),l.a.createElement("h2",null,":")),l.a.createElement("hr",null)),l.a.createElement("div",{id:"content"},e.children)))},E=a(152);t.a=function(e){return l.a.createElement("div",{className:"container"},l.a.createElement(r.a,{title:"",keywords:["portfolio","website","huapaya","homepage"]}),l.a.createElement(s,null),l.a.createElement(h,{initVal:e.software},e.children),l.a.createElement(E.a,null))}},169:function(e,t,a){var n=a(25).f,l=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in l||a(18)&&n(l,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},170:function(e,t,a){"use strict";var n=a(0),l=a.n(n);a(169);function r(e){var t=e.text;return l.a.createElement("div",{className:"subtitle"},l.a.createElement("div",{className:"mobileSub"},l.a.createElement("p",{className:"slashes"}," ","//"),l.a.createElement("p",{className:"subText"},t),l.a.createElement("div",{className:"highlight"})))}var i=function(e){var t=e.name,a=e.subtitle,n=e.children;return l.a.createElement("div",{className:"function"},l.a.createElement("h3",null,t," ","{"),a?l.a.createElement(r,{text:a}):"",n,l.a.createElement("h3",null,"}"))};t.a=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i,{name:"Portfolio",subtitle:"Website - personal project [solo]"},l.a.createElement("p",null,"Built and designed the website you're looking at right now!"),l.a.createElement("p",null,"I worked on this as an exercise in front-end development."),l.a.createElement("ul",{className:"techs"},l.a.createElement("li",null,"Javascript"),l.a.createElement("li",null,"HTML/CSS"),l.a.createElement("li",null,"ReactJS"),l.a.createElement("li",null,"Gatsby"))),l.a.createElement(i,{name:"SmartFleet",subtitle:"Web-app - hackathon project [team of 4]"},l.a.createElement("p",null,"Built a car fleet management system for B2B use. Managers can assign tasks to drivers, and remotely give them access to the car. Drivers can then access the car without a key. Once on a task, managers can keep track of the car's location, and are alerted to any unreasonable odometer readings."),l.a.createElement("p",null,"I mainly focused on the back-end and built the API connecting our app to the SmartCar and Google APIs."),l.a.createElement("ul",{className:"techs"},l.a.createElement("li",null,"Python"),l.a.createElement("li",null,"Flask"),l.a.createElement("li",null,"SmartCar API"),l.a.createElement("li",null,"Google APIs: Geocoding, Maps Javascript, Distance Matrix "),l.a.createElement("li",null,"Javascript"),l.a.createElement("li",null,"HTML/CSS"))),l.a.createElement(i,{name:"Childhood Illness Diagnosis App",subtitle:"Android mobile app - personal project [solo]"},l.a.createElement("p",null,"Built an app to facilitate the use of the diagnosis questionnaire described in ",l.a.createElement("a",{href:"http://apps.who.int/iris/bitstream/10665/104772/16/9789241506823_Chartbook_eng.pdf?ua=1"},"WHO’s Integrated Management of Childhood Illness Chart Booklet"),". Users input the patient’s age, answer questions, and receive a diagnosis based on their answers."),l.a.createElement("p",null,"I worked on this as an exercise in Android development."),l.a.createElement("ul",{className:"techs"},l.a.createElement("li",null,"Java"),l.a.createElement("li",null,"SQL"),l.a.createElement("li",null,"Room Persistance Library"),l.a.createElement("li",null,"Android Platforms API"),l.a.createElement("li",null,"Android Studio"))),l.a.createElement(i,{name:"Maze Cube",subtitle:"Desktop video-game - personal project [solo]"},l.a.createElement("p",null,"Built a 3D game in Unity that involved moving a cube around a maze and shooting projectiles to spring the cube over walls and defeat enemies."),l.a.createElement("ul",{className:"techs"},l.a.createElement("li",null,"C#"),l.a.createElement("li",null,"Unity3D"))),l.a.createElement(i,{name:"Pseudo-theremin Looper",subtitle:"FPGA Musical Instrument - course project [solo]"},l.a.createElement("p",null,"Created a musical instrument and looping machine with an FPGA. The user controls notes with simultaneous use and coordination of switches and PS2 mouse. I also implemented a looping feature that allowed the user to load in notes and play them back."),l.a.createElement("ul",{className:"techs"},l.a.createElement("li",null,"Verilog"),l.a.createElement("li",null,"Altera DE1-SoC"),l.a.createElement("li",null,"Quartus II"))))}}}]);
//# sourceMappingURL=component---src-pages-software-js-e79b7e64f60623b03e1e.js.map