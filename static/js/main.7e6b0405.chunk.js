(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,,,function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var n=s(1),i=s.n(n),a=s(8),r=s.n(a),c=(s(13),s(14),s(0));var o=function(){return Object(c.jsxs)("div",{id:"header",children:[Object(c.jsx)("a",{href:"#about-section",class:"header-item",children:"About"}),Object(c.jsx)("a",{href:"#work-section",class:"header-item",children:"Resume"}),Object(c.jsx)("a",{href:"#projects-section",class:"header-item",children:"Projects"}),Object(c.jsx)("a",{href:"#contact-section",class:"header-item",children:"Contact"})]})},l=s(2),d=s(3),A=s(5),m=s(4),u=(s(16),function(e){Object(A.a)(s,e);var t=Object(m.a)(s);function s(e){var n;return Object(l.a)(this,s),(n=t.call(this,e)).state={title:e.title,url:e.url,icon:e.icon},n}return Object(d.a)(s,[{key:"render",value:function(){return Object(c.jsx)("div",{class:"social-item",children:Object(c.jsx)("a",{class:"social-link",href:this.state.url,title:this.state.title,target:"_blank",rel:"noreferrer",children:this.state.icon})})}}]),s}(i.a.Component)),b=s.p+"static/media/Resume.95c69f88.pdf";s(17);var j=function(){return Object(c.jsxs)("div",{id:"sidebar",children:[Object(c.jsx)("div",{id:"sidebar-tip",children:"Find me @ "}),Object(c.jsx)(u,{title:"Resume (PDF)",url:b,icon:Object(c.jsx)("i",{class:"fas fa-file-pdf"})}),Object(c.jsx)(u,{title:"Email",url:"mailto:helenfang524@gmail.com",icon:Object(c.jsx)("i",{class:"fas fa-envelope",style:{fontSize:"0.9em"}})}),Object(c.jsx)(u,{title:"Github",url:"https://github.com/fang-helen",icon:Object(c.jsx)("i",{class:"fab fa-github"})}),Object(c.jsx)(u,{title:"LinkedIn",url:"https://www.linkedin.com/in/helen-fang/",icon:Object(c.jsx)("i",{class:"fab fa-linkedin"})})]})};s(18);var h=function(){return Object(c.jsxs)("div",{id:"react",children:["Built using React"," ",Object(c.jsx)("a",{href:"https://github.com/fang-helen/fang-helen.github.io/tree/project-code",target:"_blank",rel:"noreferrer",children:Object(c.jsx)("i",{id:"react-icon",class:"fas fa-code"})})]})},p=s.p+"static/media/nyc_cropped.768388e8.png",g=(s(19),function(e){Object(A.a)(s,e);var t=Object(m.a)(s);function s(e){var n;return Object(l.a)(this,s),(n=t.call(this,e)).state={id:e.elementId,colored:e.colored,children:e.children,title:e.title},n}return Object(d.a)(s,[{key:"render",value:function(){return Object(c.jsxs)("div",{id:this.state.id,class:"section"+(this.state.colored?" colored":""),children:[this.state.title?Object(c.jsx)("div",{class:"section-title",children:this.state.title}):null,this.state.children]})}}]),s}(i.a.Component));s(20);var x=function(){return Object(c.jsx)("a",{href:"#work-section",children:Object(c.jsxs)("div",{class:"resume-button",children:[Object(c.jsx)("span",{children:"Jump to resume"})," ",Object(c.jsx)("i",{class:"fas fa-angle-double-down"})]})})};s(21);var f=function(){return Object(c.jsx)(g,{elementId:"intro-section",colored:!0,children:Object(c.jsxs)("div",{id:"intro-box",class:"center-contents",children:[Object(c.jsxs)("div",{id:"intro-box-right",children:[Object(c.jsx)("img",{src:p,id:"pfp",alt:"me!"}),Object(c.jsx)(x,{})]}),Object(c.jsxs)("div",{id:"blurb-box",children:[Object(c.jsx)("div",{id:"intro-greeting",children:"Hi! I'm"}),Object(c.jsx)("div",{id:"intro-title",class:"section-title",children:"Helen Fang"}),Object(c.jsx)("div",{class:"blurb one",children:"Computer Science @ UT Austin"}),Object(c.jsx)("div",{class:"blurb two",children:"Software Engineer"})]})]})})};var y=function(){return Object(c.jsx)(g,{elementId:"about-section",title:"About Me",children:Object(c.jsxs)("div",{id:"about-content",children:[Object(c.jsx)("p",{children:"I'm currently in the third year of my computer science degree at the University of Texas at Austin and an incoming SWE intern at Jane Street for summer 2022."}),Object(c.jsx)("p",{children:"I think software engineering is really great because I get to solve interesting problems every day! So far I've completed software internships at Google, Meta/Facebook, and Slack which were all lots of fun, and I enjoy backend and full-stack work."}),Object(c.jsx)("p",{children:"I also speak Mandarin fluently, and in my free time some things I enjoy include cooking, eating desserts, playing games with friends, and sewing!"})]})})},v=s(6),O=(s(22),"expanded"),Z=function(e){Object(A.a)(s,e);var t=Object(m.a)(s);function s(e){var n;return Object(l.a)(this,s),(n=t.call(this,e)).state={company:e.company,title:e.title,dates:e.dates,summary:e.summary,technologies:e.technologies,details:e.details,identifier:Math.random().toString(36).substr(2,9)},n.toggle=n.toggle.bind(Object(v.a)(n)),n}return Object(d.a)(s,[{key:"toggle",value:function(){var e=document.getElementById("arrow-"+this.state.identifier),t=document.getElementById("container-"+this.state.identifier),s=document.getElementById("bullets-"+this.state.identifier);e.classList.contains(O)?(t.style.height="0",e.classList.remove("one"),e.offsetWidth,e.classList.add("two")):(t.style.height=s.scrollHeight+"px",e.classList.remove("two"),e.offsetWidth,e.classList.add("one")),e.classList.toggle(O)}},{key:"render",value:function(){return Object(c.jsxs)("div",{class:"experience-tile",children:[Object(c.jsx)("div",{class:"experience-company",children:this.state.company}),Object(c.jsxs)("div",{class:"experience-container-top",children:[Object(c.jsx)("div",{class:"experience-title",children:this.state.title}),Object(c.jsx)("div",{class:"experience-dates",children:this.state.dates})]}),Object(c.jsx)("div",{class:"experience-container-bottom",children:Object(c.jsx)("div",{class:"experience-summary",children:this.state.summary})}),Object(c.jsxs)("div",{class:"experience-container-middle",children:[null!=this.state.details&&this.state.details.length>0?Object(c.jsx)("div",{class:"center-contents",children:Object(c.jsx)("div",{class:"experience-bullets-toggle",id:"toggle-"+this.state.identifier,title:"Expand",onClick:this.toggle,children:Object(c.jsx)("i",{class:"fa fa-chevron-down toggle-arrow",id:"arrow-"+this.state.identifier})})}):null,Object(c.jsx)("div",{class:"experience-technologies",children:this.state.technologies.join(", ")})]}),Object(c.jsx)("div",{class:"experience-bullets-container expanded",id:"container-"+this.state.identifier,children:Object(c.jsx)("div",{class:"experience-bullets",id:"bullets-"+this.state.identifier,children:this.state.details.map((function(e,t){return Object(c.jsx)("li",{children:Object(c.jsx)("span",{children:e})},t)}))})})]})}}]),s}(i.a.Component);var z=function(){return Object(c.jsx)(g,{elementId:"work-section",colored:!0,title:"Work Experience",children:Object(c.jsxs)("div",{children:["(Or, download a PDF resume ",Object(c.jsx)("a",{class:"formatted",href:b,target:"_blank",rel:"noreferrer",children:"here"}),").",Object(c.jsx)(Z,{company:"Jane Street",title:"SWE Intern",dates:"May 2022 - Aug 2022",summary:"Worked on a tool to infer metadata for datasets used for trading and research while on the Research Infra team; expanded scripting and logging for a tool used widely by trading desks across the firm while on the International ETFs trading desk.",technologies:["OCaml"],details:["Implemented an RPC protocol and command-line interface for inferring column schemas and other metadata for .csv and .parquet datasets and Postgres databases, streamlining data ingestion. (Research Infra)","Extended scripting syntax, expanded logging support, and added syntax highlighting to an internal tool used widely by trading desks across the firm  (International ETFs)"]}),Object(c.jsx)(Z,{company:"Meta",title:"SWE Intern",dates:"Aug 2021 - Nov 2021",summary:"Built out a new feature from end\u2011to\u2011end to set custom product cover images in creator collections on Instagram Shops.",technologies:["Hack/PHP","Python Django"],details:["Created a new database schema to support the feature and collaborated with other engineers, both within and outside immediate team, to integrate it with other Shops backend infrastructure.","Implemented full in-app flow by adding UI elements and async controllers using Bloks, a server\u2011side rendering framework.","Adapted a Django endpoint to more flexibly query product media."]}),Object(c.jsx)(Z,{company:"Slack Technologies",title:"SWE Intern",dates:"May 2021 - Aug 2021",summary:"Completed two projects to improve the scalability, transparency, and accuracy of the Grid migrations estimates ecosystem.",technologies:["Hack/PHP","XHP","MySQL"],details:["Restructured the Enterprise Grid migrations framework to ensure duration estimates are front\u2011of\u2011mind and easily accounted for during development, improving scalability and accuracy for a system that represents $84M in ARR (18% of Slack Enterprise APR).","Designed and developed a tool to keep track of duration estimates in a MySQL table and alert of significant updates for scheduled migrations, in order to enhance transparency and streamline the migration process for both Slack representatives and customers"]}),Object(c.jsx)(Z,{company:"UT Department of Computer Science",title:"Undergraduate Teaching Assistant",dates:"Jan 2021 - May 2022",summary:"Worked as teaching assistant for CS313E, a data structures and algorithms course taught in Python.",technologies:["Python"],details:["Wrote test cases and autograding scripts for student assignments and exams, as well as designed exam questions.","Held biweekly office hours to help students debug code.","Frequently interacted with students on Piazza to discuss concepts and answer questions."]}),Object(c.jsx)(Z,{company:"Google",title:"STEP Intern",dates:"May 2020 - Aug 2020",summary:"Used Google Cloud APIs to build full-stack web applications.",technologies:["HTML","CSS","Java","Google Cloud","Apache Spark"],details:["Implemented an interactive portfolio page where visitors can add comments and translate content.","Worked closely with two other interns to design and develop a web application to search for, save, and create events within users\u2019 communities.","Utilized Apache Spark to create a recommendation system that combines collaborative and content\u2010based filtering to suggest events to users.","Engaged in an end-to-end software development cycle, including creating design docs, writing code, mocking objects and adding unit tests, setting up continuous integration, and completing code reviews."]}),Object(c.jsx)(Z,{company:"Sanger Learning Center (UT School of Undergraduate Studies)",title:"Tutor",dates:"Jan 2020 - Dec 2020",summary:"Tutored other undergraduate students in data structures, linear algebra, and calculus.",technologies:[],details:[]})]})})},k=(s(23),function(e){Object(A.a)(s,e);var t=Object(m.a)(s);function s(e){var n;return Object(l.a)(this,s),(n=t.call(this,e)).state={title:e.title,subtitle:e.subtitle,bullets:e.bullets,link:e.link,image:e.image,visit:e.visit},n}return Object(d.a)(s,[{key:"render",value:function(){return Object(c.jsxs)("div",{class:"project-tile-square",children:[Object(c.jsxs)("div",{class:"project-tile-overlay",children:[Object(c.jsx)("img",{class:"project-image",src:this.state.image,alt:""}),Object(c.jsxs)("div",{class:"project-overlay-text",children:[Object(c.jsx)("div",{class:"project-title",children:this.state.title}),Object(c.jsx)("div",{class:"project-subtitle",children:this.state.subtitle})]})]}),Object(c.jsxs)("div",{class:"project-tile-contents",children:[this.state.bullets.map((function(e,t){return Object(c.jsx)("li",{children:Object(c.jsx)("span",{children:e})},t)})),Object(c.jsxs)("div",{class:"project-link-container",children:[null!=this.state.link?Object(c.jsx)("a",{class:"project-link",href:this.state.link,title:this.state.title+" - GitHub",target:"_blank",rel:"noreferrer",children:Object(c.jsx)("i",{class:"fab fa-github"})}):Object(c.jsx)("div",{class:"project-request-code",children:"Code available upon request!"}),this.state.visit&&Object(c.jsx)("a",{class:"project-link",href:this.state.visit,title:this.state.title+" - Visit",target:"_blank",rel:"noreferrer",children:Object(c.jsx)("i",{class:"fa fa-link","aria-hidden":"true"})})]})]})]})}}]),s}(i.a.Component)),M=s.p+"static/media/hinglebasin.6e37c9df.PNG",w=s.p+"static/media/polymesh.0e3f165a.PNG",S=s.p+"static/media/uniteLogo.a421185d.png",N=s.p+"static/media/gerrymap.3ac8a298.png";s(24);var W=function(){return Object(c.jsx)(g,{elementId:"projects-section",title:"My Projects",children:Object(c.jsxs)("div",{id:"projects-container",children:[Object(c.jsx)(k,{title:"GerryMap",subtitle:"Full-stack web application",bullets:["Created a website to visualize gerrymandering and consolidate information about US states, congressional districts, and House representatives.","Built frontend using React, and created a RESTful API for the backend using Flask and MySQL that supports dynamic sorting, filtering, searching, and pagination of database models.","Leveraged AWS Amplify, Elastic Beanstalk, and RDS to host and deploy the website, and leveraged GitLab CI/CD to set up automated testing and deployment pipelines."],link:"https://gitlab.com/alex.chandler/GerryMap/-/tree/main",visit:"https://www.gerrymap.com",image:N}),Object(c.jsx)(k,{title:"Polymesh Subdivider",subtitle:"Computer graphics capstone project",bullets:["Used C++ and OpenGL to create a polymesh renderer that loads 3D models from .OBJ files.","Implemented the catmull\u2011clark, loop, and doo\u2011sabin polymesh subdivision algorithms.","Added camera controls using matrix transforms in order to interactively view meshes from various angles."],link:"https://github.com/fang-helen/subdivision",image:w}),Object(c.jsx)(k,{title:"PintOS",subtitle:"Operating systems class project",bullets:["Significantly expanded a toy OS using C.","Incorporated priority scheduling, system calls for user programs, and virtual memory.","Converted the existing single\u2011threaded file system into an multi\u2011threaded, multi\u2011level indexed file system."],image:"data:image/png;base64,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"}),Object(c.jsx)(k,{title:"UniteBySTEP",subtitle:"Capstone project for Google STEP 2020 program",bullets:["Worked closely with two other interns to design and create an event organizer web application using HTML, CSS, JavaScript, and Java servlets.","Used Apache Spark to build a recommendation system that combines collaborative and content-based filtering to suggest events to users.","Utilized many Google Cloud APIs including Cloud Datastore, Firebase, Geocoding, and Cloud Tasks to implement backend database management, user authentication, location-based search, and more."],link:"https://github.com/fang-helen/unitebystep",image:S}),Object(c.jsx)(k,{title:"Hingle Basin",subtitle:"Energy Analytics Fall 2019 final project",bullets:["Used a random tree regression to optimize the locations and parameters for ten oilwells in Hingle Basin.","Worked in Jupyter Notebook using Python, utilizing pandas and matplotlib to visualize and analyze the data.","Achieved second-best performance for oil production out of six groups total."],link:"https://github.com/fang-helen/Final-Project-FRI",image:M})]})})};s(25),s(26),s(27);var L=function(){return Object(c.jsxs)("div",{id:"content",children:[Object(c.jsx)(o,{}),Object(c.jsxs)("div",{id:"page-contents",children:[Object(c.jsx)("div",{id:"sidebar-padding"}),Object(c.jsxs)("div",{id:"page-sections",children:[Object(c.jsx)(f,{}),Object(c.jsx)(h,{}),Object(c.jsx)(y,{}),Object(c.jsx)(z,{}),Object(c.jsx)(W,{})]}),Object(c.jsx)(j,{})]})]})},P=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,29)).then((function(t){var s=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;s(e),n(e),i(e),a(e),r(e)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(L,{})}),document.getElementById("root")),P()}],[[28,1,2]]]);
//# sourceMappingURL=main.7e6b0405.chunk.js.map