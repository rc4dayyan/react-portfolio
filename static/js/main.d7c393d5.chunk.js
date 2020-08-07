(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{3:function(e,a,t){e.exports=t(9)},8:function(e,a,t){},9:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),l=t(2),c=t.n(l),r=(t(8),{firstname:"Your",lastname:"Name",city:"Majalengka",country:"Indonesia",email:"youremail@email.com",aboutDescription:"Senior Web Developer specializing in back end development. Experienced with all stages of the development cycle for dynamic web projects. Well- versed in numerous programming languages including HTML5, PHP OOP, JavaScript, ReactJs, CSS, MySQL. Enthusiastic about new technology and happy to learn new technology.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com",className:"fa-linkedin"},{name:"github",url:"http://github.com",className:"fa-github"}],experiences:[{title:"Senior Web Developer",companyName:"Company name, Indonesia",periode:"2015 to present",description:[{descNote:"Develop project concepts and maintain optimal workflow."},{descNote:"Complete detailed programming and development tasks for back end and front end public and internal websites."},{descNote:"Carry out quality assurance tests to discover errors and optimize usability."}]},{title:"Junior Web Developer",companyName:"Company name, Indonesia",periode:"2010 to 2013",description:[{descNote:"Worked as Junior Web Developer in this company. My role was to understand and execute the client's requirement in efficiently and timely manner."}]}],education:[{school:"University",areaStudy:"TECHNOLOGY EDUCATION",gpa:"3.2",periode:"2010-2013"},{school:"University",areaStudy:"INFORMATION TECHNOLOGY",gpa:"3.6",periode:"2005-2009"}],skills:{highlight:[{desc:"Strong decision maker"},{desc:"Complex problem solver"},{desc:"Innovative"},{desc:"Service-focused"}],programLanguage:[{name:"html",classname:"fa-html5"},{name:"css",classname:"fa-css3-alt"},{name:"javascript",classname:"fa-js-square"},{name:"PHP",classname:"fa-php"},{name:"angular",classname:"fa-angular"},{name:"react",classname:"fa-react"},{name:"wordpress",classname:"fa-wordpress"},{name:"npm",classname:"fa-npm"}],workflow:[{desc:"Mobile-First, Responsive Design"},{desc:"Cross Browser Testing & Debugging"},{desc:"Cross Functional Teams"},{desc:"Agile Development & Scrum"}]}}),i=function(e){var a=e.portfolioData;return s.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",id:"sideNav"},s.a.createElement("a",{className:"navbar-brand js-scroll-trigger",href:"#page-top"},s.a.createElement("span",{className:"d-block d-lg-none"},a.firstname+a.lastname),s.a.createElement("span",{className:"d-none d-lg-block"},s.a.createElement("img",{className:"img-fluid img-profile rounded-circle mx-auto mb-2",src:"img/profile.png",alt:""}))),s.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},s.a.createElement("span",{className:"navbar-toggler-icon"})),s.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},s.a.createElement("ul",{className:"navbar-nav"},s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#about"},"About")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#experience"},"Experience")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#education"},"Education")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#skills"},"Skills")))))},o=function(e){var a=e.portfolioData;return s.a.createElement("section",{className:"resume-section",id:"about"},s.a.createElement("div",{className:"resume-section-content"},s.a.createElement("h1",{className:"mb-0"},a.firstname,s.a.createElement("span",{className:"text-primary"},a.lastname)),s.a.createElement("div",{className:"subheading mb-5"},a.city,", ",a.country," \xb7",s.a.createElement("a",{href:"mailto:name@email.com"},a.email)),s.a.createElement("p",{className:"lead mb-5"},a.aboutDescription),s.a.createElement("div",{className:"social-icons"},a.socialLinks&&a.socialLinks.map((function(e,a){return s.a.createElement("a",{key:a,className:"social-icon",href:e.url},s.a.createElement("i",{className:"fab "+e.className}))})))))},m=function(e){var a=e.portfolioData;return s.a.createElement("section",{className:"resume-section",id:"experience"},s.a.createElement("div",{className:"resume-section-content"},s.a.createElement("h2",{className:"mb-5"},"Experience"),a.experiences&&a.experiences.map((function(e,a){return s.a.createElement("div",{key:a,className:"d-flex flex-column flex-md-row justify-content-between mb-5"},s.a.createElement("div",{className:"flex-grow-1"},s.a.createElement("h3",{className:"mb-0"},e.title),s.a.createElement("div",{className:"subheading mb-3"},e.companyName),s.a.createElement("ul",{className:"fa-ul"},e.description&&e.description.map((function(e,a){return s.a.createElement("li",{key:a},s.a.createElement("span",{className:"fa-li"},s.a.createElement("i",{className:"fas fa-check"})),e.descNote)})))),s.a.createElement("div",{className:"flex-shrink-0"},s.a.createElement("span",{className:"text-primary"},e.periode)))}))))},d=function(e){var a=e.portfolioData;return s.a.createElement("section",{className:"resume-section",id:"education"},s.a.createElement("div",{className:"resume-section-content"},s.a.createElement("h2",{className:"mb-5"},"Education"),a.education&&a.education.map((function(e,a){return s.a.createElement("div",{key:a,className:"d-flex flex-column flex-md-row justify-content-between mb-5"},s.a.createElement("div",{className:"flex-grow-1"},s.a.createElement("h3",{className:"mb-0"},e.school),s.a.createElement("div",{className:"subheading mb-3"},e.areaStudy),s.a.createElement("p",null,"GPA: ",e.gpa)),s.a.createElement("div",{className:"flex-shrink-0"},s.a.createElement("span",{className:"text-primary"},e.periode)))}))))},p=function(e){var a=e.portfolioData;return s.a.createElement("section",{className:"resume-section",id:"skills"},s.a.createElement("div",{className:"resume-section-content"},s.a.createElement("h2",{className:"mb-5"},"Skills"),s.a.createElement("div",{className:"subheading mb-3"},"Highlights"),s.a.createElement("ul",{className:"fa-ul"},a.skills.highlight&&a.skills.highlight.map((function(e,a){return s.a.createElement("li",{key:a},s.a.createElement("span",{className:"fa-li"},s.a.createElement("i",{className:"fas fa-check"})),e.desc)}))),s.a.createElement("div",{className:"subheading mb-3"},"Programming Languages & Tools"),s.a.createElement("ul",{className:"list-inline dev-icons"},a.skills.programLanguage&&a.skills.programLanguage.map((function(e,a){return s.a.createElement("li",{className:"list-inline-item"},s.a.createElement("i",{className:"fab "+e.classname}))}))),s.a.createElement("div",{className:"subheading mb-3"},"Workflow"),s.a.createElement("ul",{className:"fa-ul mb-0"},a.skills.workflow&&a.skills.workflow.map((function(e,a){return s.a.createElement("li",{key:a},s.a.createElement("span",{className:"fa-li"},s.a.createElement("i",{className:"fas fa-check"})),e.desc)})))))};var u=function(){return Object(n.useEffect)((function(){var e=window.$;e('a.js-scroll-trigger[href*="#"]:not([href="#"])').click((function(){if(window.location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&window.location.hostname===this.hostname){var a=e(this.hash);if((a=a.length?a:e("[name="+this.hash.slice(1)+"]")).length)return e("html, body").animate({scrollTop:a.offset().top},1e3,"easeInOutExpo"),!1}})),e(".js-scroll-trigger").click((function(){e(".navbar-collapse").collapse("hide")})),e("body").scrollspy({target:"#sideNav"})}),[]),s.a.createElement("div",{className:"App"},s.a.createElement(i,{portfolioData:r}),s.a.createElement("div",{className:"container-fluid p-0"},s.a.createElement(o,{portfolioData:r}),s.a.createElement("hr",{className:"m-0"}),s.a.createElement(m,{portfolioData:r}),s.a.createElement("hr",{className:"m-0"}),s.a.createElement(d,{portfolioData:r}),s.a.createElement("hr",{className:"m-0"}),s.a.createElement(p,{portfolioData:r})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[3,1,2]]]);
//# sourceMappingURL=main.d7c393d5.chunk.js.map