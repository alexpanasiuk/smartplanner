(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports={container:"home_container__1tDa_",menu:"home_menu__1hbYA",menuWrapper:"home_menuWrapper__3Gq0c",logo:"home_logo__8IeU_",menuList:"home_menuList__1D8Xc",menuItem:"home_menuItem__2gWry",menuButton:"home_menuButton__3_9BL",firstScreen:"home_firstScreen__1aBm3",textWrapper:"home_textWrapper__xpQr2",title:"home_title__1o5PN",subtitle:"home_subtitle__DlRH2",text:"home_text__3uIHB",cta:"home_cta__eMf8m"}},13:function(e,t,a){e.exports={r_angle:"projects_r_angle__rf2DA",projects:"projects_projects__LONI_",projectsTitle:"projects_projectsTitle__aBVTi",project:"projects_project__297Qq",plus:"projects_plus__3WXjt",addProject:"projects_addProject__3nH7J",addProjectText:"projects_addProjectText__K7SJv",ellipsis:"projects_ellipsis__uBJRw",dropdown:"projects_dropdown__3wfuy",dropdownItem:"projects_dropdownItem__2I4md",dropdownText:"projects_dropdownText__1kadi"}},2:function(e,t,a){e.exports={input:"forms_input__2yVQI",submit:"forms_submit__XNPVt",addTaskForm:"forms_addTaskForm__1K2Pm",popupForm:"forms_popupForm__2BZ8K",smallSubmit:"forms_smallSubmit__1O4YC",link:"forms_link__1bIpv",error:"forms_error__2hNP8",activationText:"forms_activationText__37BJn",cansel:"forms_cansel__3gs6L"}},20:function(e,t,a){e.exports={popup:"popup_popup__8U6Jh","popup-header":"popup_popup-header__3Gf3g","popup-title":"popup_popup-title__1ty4L","popup-close":"popup_popup-close__3lrH_","popup-content":"popup_popup-content__1sCpN"}},3:function(e,t,a){e.exports={bg:"app_bg__3yXFk",container:"app_container__2u_iY",menuWrapper:"app_menuWrapper__rlACz",menu:"app_menu__28kMM",menuLogo:"app_menuLogo__3Dvko",menuText:"app_menuText__Q8Upz",menuItem:"app_menuItem__2bVWq",mobileMenuBtn:"app_mobileMenuBtn__2v_cF",app_holder:"app_app_holder__1GDE6",left_menu:"app_left_menu__1u6ms",content:"app_content__2dzlF",project:"app_project__Y4M_t",project__title:"app_project__title__vnSFb",task:"app_task__XdofC",addTask:"app_addTask__39ocb",plus:"app_plus__3DRbw",taskFinished:"app_taskFinished__2NTPk",finished:"app_finished__mS_Mu",finishedTrue:"app_finishedTrue__1-YXQ",editIcon:"app_editIcon__1UQgg",icon:"app_icon__2KJ5L",open:"app_open__39deV"}},44:function(e,t,a){e.exports=a(90)},90:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(38),o=a.n(s),c=a(16),i=a(92),p=a(18),l=a(41),u=a.n(l),d=a(42),m=a(23),h=a(19),_=Object(p.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_USER":return Object(m.a)({},t.payload);case"LOGOUT_USER":return{};case"REGISTER_USER":return Object(m.a)({},e,t.payload);case"AUTH":return Object(m.a)({},t.payload);default:return e}},projects:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_PROJECTS":return Array.isArray(a.payload)?Object(h.a)(a.payload):t;case"ADD_TASK":e=Object(h.a)(t);for(var r=0;r<e.length;r++)e[r]._id===a.payload.project._id&&(e[r]=a.payload.project);return e;case"UPDATE_TASK":e=Object(h.a)(t);for(var n=0;n<e.length;n++)if(e[n]._id===a.payload.project._id){e[n]=a.payload.project;break}return e;case"DELETE_TASK":e=Object(h.a)(t);for(var s=0;s<e.length;s++)if(e[s]._id===a.payload.project._id){e[s]=a.payload.project;break}return e;case"ADD_PROJECT":return Object(h.a)(t).concat([a.payload.project]);case"UPDATE_PROJECT":e=Object(h.a)(t);for(var o=0;o<e.length;o++)if(e[o]._id===a.payload.project._id){e[o]=a.payload.project;break}return e;case"DELETE_PROJECT":e=[];for(var c=0;c<t.length;c++)a.payload.project&&t[c]._id!==a.payload.project._id&&e.push(t[c]);return e;default:return t}}}),f=a(94),j=a(93),g=a(4),v=a(5),E=a(7),b=a(6),k=a(8),y=a(91),N=a(15),P=a.n(N);function T(e){var t=e.taskId,a=e.projectId,r=e.name,n=e.creator,s=e.finished,o=e.finishTime;return{type:"UPDATE_TASK",payload:P.a.post("/api/updateTask",{taskId:t,name:r,creator:n,finished:s,finishTime:o,projectId:a}).then(function(e){return e.data})}}var w=a(2),O=a.n(w),S=function(e){function t(){var e,a;Object(g.a)(this,t);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(a=Object(E.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(s)))).state={email:"test@gmail.com",password:"qweqweqwe",success:!1,errors:""},a.handleInputEmail=function(e){a.setState({email:e.target.value})},a.handleInputPassword=function(e){a.setState({password:e.target.value})},a.submitForm=function(e){e.preventDefault();var t=a.validateForm();0!==t.length?a.setState({errors:t}):(a.setState({errors:""}),a.props.submitForm(e,a.state.email,a.state.password,a.state.name))},a.validateForm=function(){var e=[],t=a.state.email.match(/[a-z]+([a-z0-9-_.])*@[a-z]+\.[a-z]+/gi);!t&&a.state.email?e.push("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0439 email \u0430\u0434\u0440\u0435\u0441"):t&&t[0]!==a.state.email&&e.push("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0439 email \u0430\u0434\u0440\u0435\u0441");var r=a.state.password.match(/[a-z0-9-_]+/gi);return r&&r[0]!==a.state.password?e.push("\u041d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u044b \u0432 \u043f\u0430\u0440\u043e\u043b\u0435"):r[0].length<6&&e.push("\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043f\u0430\u0440\u043e\u043b\u044f 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),e},a.showErrors=function(e){return e.map(function(e,t){return n.a.createElement("p",{key:t,className:O.a.error},e)})},a}return Object(k.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return n.a.createElement("form",{onSubmit:this.submitForm,className:O.a.popupForm},n.a.createElement("input",{className:O.a.input,type:"email",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0443 \u043f\u043e\u0447\u0442\u0443",value:this.state.email,onChange:this.handleInputEmail,required:"required"}),n.a.createElement("input",{className:O.a.input,type:"password",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c",value:this.state.password,onChange:this.handleInputPassword,required:"required"}),n.a.createElement("button",{type:"submit",className:O.a.submit},"\u0412\u0445\u043e\u0434"),n.a.createElement("p",{className:O.a.txt},"\u041d\u0435\u0442 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430?",n.a.createElement("a",{href:"/register",onClick:this.props.showRegister,className:O.a.link}," \u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0435\u0433\u043e \u0437\u0430 \u043f\u0430\u0440\u0443 \u0441\u0435\u043a\u0443\u043d\u0434")),this.props.user&&this.props.user.msg?n.a.createElement("p",{className:O.a.error},this.props.user.msg):null,this.state.errors?this.showErrors(this.state.errors):null)}}]),t}(r.Component),C=a(20),I=a.n(C);function A(e){return n.a.createElement("div",{className:I.a.popup},n.a.createElement("div",{className:I.a["popup-content"]},n.a.createElement("table",{className:I.a["popup-header"]},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",{className:I.a["popup-title"]},e.title),n.a.createElement("td",null,n.a.createElement("div",{className:I.a["popup-close"],onClick:e.close},"X"))))),e.children))}var R=function(e){function t(){var e,a;Object(g.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(E.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(n)))).submitForm=function(e,t,r){e.preventDefault(),a.props.dispatch(function(e){var t=e.email,a=e.password;return{type:"LOGIN_USER",payload:P.a.post("/api/login",{email:t,password:a}).then(function(e){return e.data})}}({email:t,password:r}))},a}return Object(k.a)(t,e),Object(v.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.user.isAuth&&this.props.history.push("/app")}},{key:"render",value:function(){return n.a.createElement(A,{close:this.props.close,title:"\u0412\u0445\u043e\u0434"},n.a.createElement(S,{showRegister:this.props.showRegister,submitForm:this.submitForm,user:this.props.user}))}}]),t}(r.Component);var D=Object(c.b)(function(e){return{user:e.user}})(R),L=function(e){function t(){var e,a;Object(g.a)(this,t);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(a=Object(E.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(s)))).state={email:"",password:"",confirmPassword:"",name:"",success:!1,errors:""},a.handleInputEmail=function(e){a.setState({email:e.target.value})},a.handleInputPassword=function(e){a.setState({password:e.target.value})},a.handleInputConfirmPassword=function(e){a.setState({confirmPassword:e.target.value})},a.handleInputName=function(e){a.setState({name:e.target.value})},a.submitForm=function(e){e.preventDefault();var t=a.validateForm();0!==t.length?a.setState({errors:t}):(a.setState({errors:""}),a.props.submitForm(e,a.state.email,a.state.password,a.state.name))},a.validateForm=function(){var e=[],t=a.state.email.match(/[a-z]+([a-z0-9-_.])*@[a-z]+\.[a-z]+/gi);!t&&a.state.email?e.push("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0439 email \u0430\u0434\u0440\u0435\u0441"):t&&t[0]!==a.state.email&&e.push("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0439 email \u0430\u0434\u0440\u0435\u0441");var r=a.state.password.match(/[a-z0-9-_]+/gi);r&&r[0]!==a.state.password?e.push("\u041d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u044b \u0432 \u043f\u0430\u0440\u043e\u043b\u0435"):r[0].length<=6?e.push("\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043f\u0430\u0440\u043e\u043b\u044f 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"):r[0]!==a.state.confirmPassword&&e.push("\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442");var n=a.state.name.match(/[a-z0-9]+/gi);return n&&n[0]!==a.state.name&&e.push("\u041d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u044b \u0432 \u0438\u043c\u0435\u043d\u0438"),e},a.showErrors=function(e){return e.map(function(e,t){return n.a.createElement("p",{key:t,className:O.a.error},e)})},a}return Object(k.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,!1===this.props.user.activated?n.a.createElement("p",{className:O.a.activationText},this.props.user.msg):n.a.createElement("form",{onSubmit:this.submitForm,className:O.a.popupForm},n.a.createElement("input",{className:O.a.input,type:"email",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0443 \u043f\u043e\u0447\u0442\u0443",value:this.state.email,onChange:this.handleInputEmail,required:"required"}),n.a.createElement("input",{className:O.a.input,type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043c\u044f",value:this.state.name,onChange:this.handleInputName,required:"required"}),n.a.createElement("input",{className:O.a.input,type:"password",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c",value:this.state.password,onChange:this.handleInputPassword,required:"required"}),n.a.createElement("input",{className:O.a.input,type:"password",placeholder:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",value:this.state.confirmPassword,onChange:this.handleInputConfirmPassword,required:"required"}),n.a.createElement("button",{type:"submit",className:O.a.submit},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"),n.a.createElement("p",{className:O.a.txt},"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",n.a.createElement("a",{href:"/login",onClick:this.props.showLogin,className:O.a.link}," \u0412\u0445\u043e\u0434")),this.props.user&&this.props.user.msg?n.a.createElement("p",{className:O.a.error},this.props.user.msg):null,this.state.errors?this.showErrors(this.state.errors):null))}}]),t}(r.Component),x=function(e){function t(){var e,a;Object(g.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(E.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(n)))).submitForm=function(e,t,r,n){e.preventDefault(),a.props.dispatch(function(e){var t=e.email,a=e.password,r=e.name;return{type:"REGISTER_USER",payload:P.a.post("/api/register",{email:t,password:a,name:r}).then(function(e){return e.data})}}({email:t,password:r,name:n}))},a}return Object(k.a)(t,e),Object(v.a)(t,[{key:"componentWillReceiveProps",value:function(e){console.log(e)}},{key:"render",value:function(){return n.a.createElement(A,{close:this.props.close,title:"\u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0435\u0433\u043e \u0437\u0430 \u043f\u0430\u0440\u0443 \u0441\u0435\u043a\u0443\u043d\u0434!"},n.a.createElement(L,{showLogin:this.props.showLogin,submitForm:this.submitForm,user:this.props.user}))}}]),t}(r.Component);var F=Object(c.b)(function(e){return{user:e.user}})(x),U=a(11),M=a.n(U),q=function(e){function t(){var e,a;Object(g.a)(this,t);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(a=Object(E.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(s)))).state={openLogin:!1,openRegister:!1},a.toggleOpenLogin=function(e){e.preventDefault(),a.setState({openLogin:!a.state.openLogin})},a.toggleOpenRegister=function(e){e.preventDefault(),a.setState({openRegister:!a.state.openRegister})},a.showRegister=function(e){e.preventDefault(),a.setState({openLogin:!1,openRegister:!0})},a.showLogin=function(e){e.preventDefault(),a.setState({openLogin:!0,openRegister:!1})},a.menu=n.a.createElement("div",{className:M.a.menuWrapper},n.a.createElement("div",{className:M.a.container},n.a.createElement("nav",{className:M.a.menu},n.a.createElement(y.a,{to:"/",className:M.a.logo},"SmartPlanner"),n.a.createElement("ul",{className:M.a.menuList},n.a.createElement("li",{className:M.a.menuItem},n.a.createElement("a",{href:"/login",onClick:a.toggleOpenLogin,className:M.a.menuButton},"\u0412\u0445\u043e\u0434")),n.a.createElement("li",{className:M.a.menuItem},n.a.createElement("a",{href:"/register",onClick:a.toggleOpenRegister,className:M.a.menuButton},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f")))))),a.firstScreen=n.a.createElement("section",{className:M.a.firstScreen},n.a.createElement("div",{className:M.a.container},n.a.createElement("div",{className:M.a.textWrapper},n.a.createElement("h1",{className:M.a.title},"\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0443\u0439 \u0437\u0430\u0434\u0430\u0447\u0438"),n.a.createElement("p",{className:M.a.subtitle},"\u0418 \u043d\u0430\u0441\u043b\u0430\u0436\u0434\u0430\u0439\u0441\u044f \u043e\u0442\u0434\u044b\u0445\u043e\u043c"),n.a.createElement("p",{className:M.a.text},"\u041c\u044b \u043f\u043e\u043c\u043e\u0436\u0435\u043c \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u0442\u044c \u0412\u0430\u0448\u0438 \u0437\u0430\u0434\u0430\u0447\u0438. \u0410 \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 \u044d\u0442\u0438\u043c \u044d\u043a\u043e\u043d\u043e\u043c\u0438\u0442\u044c \u0432\u0440\u0435\u043c\u044f \u0438 \u043d\u0435 \u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0432\u0441\u0435 \u0432 \u0433\u043e\u043b\u043e\u0432\u0435."),n.a.createElement("a",{href:"/register",className:M.a.cta,onClick:a.toggleOpenRegister},"\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u0441\u0435\u0439\u0447\u0430\u0441")))),a}return Object(k.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,this.menu,this.firstScreen,this.state.openLogin?n.a.createElement(D,{close:this.toggleOpenLogin,showRegister:this.showRegister,history:this.props.history}):null,this.state.openRegister?n.a.createElement(F,{close:this.toggleOpenRegister,showLogin:this.showLogin}):null)}}]),t}(r.Component),W=a(3),J=a.n(W),B=function(e){function t(){var e,a;Object(g.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(E.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(n)))).state={taskName:a.props.task?a.props.task.name:""},a.handleTaskName=function(e){a.setState({taskName:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.props.task?a.props.updateTask(e,a.state.taskName):a.props.submitAddTask(e,a.state.taskName,a.props.user.id,Date.now()+2e4),a.props.onClose()},a}return Object(k.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return n.a.createElement("form",{className:O.a.addTaskForm,onSubmit:this.handleSubmit},n.a.createElement("input",{type:"text",className:O.a.input,value:this.state.taskName,required:!0,onChange:this.handleTaskName,placeholder:"\u0422\u0435\u043a\u0441\u0442 \u0437\u0430\u0434\u0430\u0447\u0438"}),n.a.createElement("input",{type:"submit",className:"".concat(O.a.smallSubmit," ").concat(O.a.submit),value:this.props.task?"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443"}),n.a.createElement("div",{className:O.a.cansel,onClick:this.props.onClose},"\u041e\u0442\u043c\u0435\u043d\u0430"))}}]),t}(r.Component),z=a(17),G=a.n(z),K=a(13),H=a.n(K),X=function(e){function t(){var e,a;Object(g.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(E.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(n)))).state={projectName:a.props.project?a.props.project.name:""},a.handleProjectName=function(e){a.setState({projectName:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.props.project?a.props.updateProject(a.props.project._id,a.state.projectName):a.props.addProject(a.state.projectName),a.props.onClose()},a}return Object(k.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return n.a.createElement("form",{className:O.a.addTaskForm,onSubmit:this.handleSubmit},n.a.createElement("input",{type:"text",className:O.a.input,value:this.state.projectName,required:!0,onChange:this.handleProjectName,placeholder:"\u0422\u0435\u043a\u0441\u0442 \u0437\u0430\u0434\u0430\u0447\u0438"}),n.a.createElement("input",{type:"submit",className:"".concat(O.a.smallSubmit," ").concat(O.a.submit),value:this.props.project?"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442"}),n.a.createElement("div",{className:O.a.cansel,onClick:this.props.onClose},"\u041e\u0442\u043c\u0435\u043d\u0430"))}}]),t}(r.Component),Q=function(e){function t(){var e,a;Object(g.a)(this,t);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(a=Object(E.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(s)))).state={showAddProject:!1,updatedProject:null},a.prepereToUpdateProject=function(e){e.stopPropagation();for(var t="",r=e.target.parentNode;!t;){if(r.dataset.projectid){t=r.dataset.projectid;break}r=r.parentNode}var n=a.props.projects.find(function(e){return e._id===t});a.setState({updatedProject:n})},a.canselUpdatingProject=function(){a.setState({updatedProject:""})},a.renderDropdown=function(e){return e.map(function(e,t){return e.protected&&e.creator===a.props.user._id||!e.protected?n.a.createElement("li",{key:t,className:H.a.dropdownItem,onClick:e.callback},n.a.createElement(G.a,{name:e.icon}),n.a.createElement("span",{className:H.a.dropdownText},e.text)):null})},a.toggleAddProject=function(){a.setState({showAddProject:!a.state.showAddProject})},a.showDropdown=function(e){e.stopPropagation();var t=e.target.nextSibling,a=document.querySelector("body");t.style="display: block;",a.addEventListener("click",function(e){t.style="",a.removeEventListener("click",this)})},a.renderProjects=function(e){var t=a.state.updatedProject;return 0!==e.length?e.map(function(e,r){return t&&t._id===e._id?null:n.a.createElement("li",{key:r,className:H.a.project,"data-projectid":e._id,onClick:a.props.setProject},e.name,n.a.createElement(G.a,{name:"ellipsis-h",className:H.a.ellipsis,onClick:a.showDropdown}),n.a.createElement("ul",{className:H.a.dropdown},a.renderDropdown(a.dropdown,e)))}):null},a.dropdown=[{icon:"edit",text:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442",protected:!1,callback:a.prepereToUpdateProject},{icon:"trash",text:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442",protected:!0,callback:a.props.deleteProject}],a}return Object(k.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:H.a.projects},n.a.createElement(G.a,{name:"angle-right",className:H.a.r_angle}),n.a.createElement("span",{className:H.a.projectsTitle},"\u041f\u0440\u043e\u0435\u043a\u0442\u044b:"),n.a.createElement("span",{className:H.a.plus,onClick:this.toggleAddProject},"+")),n.a.createElement("ul",null,this.renderProjects(this.props.projects)),this.state.updatedProject?n.a.createElement(X,{updateProject:this.props.updateProject,user:this.props.user,project:this.state.updatedProject,onClose:this.canselUpdatingProject}):null,this.state.showAddProject?n.a.createElement(X,{onClose:this.toggleAddProject,addProject:this.props.addProject,user:this.props.user}):null,n.a.createElement("div",{className:H.a.addProject,onClick:this.toggleAddProject},n.a.createElement("span",{className:H.a.plus},"+"),n.a.createElement("span",{className:H.a.addProjectText},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442")))}}]),t}(r.Component),V=function(e){function t(){var e,a;Object(g.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(E.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(n)))).addProject=function(e){var t=a.props.user.id;a.props.dispatch(function(e){var t=e.name,a=e.creator;return{type:"ADD_PROJECT",payload:P.a.post("/api/addProject",{name:t,creator:a}).then(function(e){return e.data})}}({name:e,creator:t}))},a.updateProject=function(e,t){a.props.dispatch(function(e){var t=e.projectId,a=e.name;return{type:"UPDATE_PROJECT",payload:P.a.post("/api/updateProject",{projectId:t,name:a}).then(function(e){return e.data})}}({projectId:e,name:t}))},a.deleteProject=function(e){e.stopPropagation();for(var t="",r=e.target.parentNode;!t;){if(r.dataset.projectid){t=r.dataset.projectid;break}r=r.parentNode}a.props.dispatch(function(e){var t=e.projectId;return{type:"DELETE_PROJECT",payload:P.a.delete("/api/deleteProject",{data:{projectId:t}}).then(function(e){return e.data})}}({projectId:t}))},a}return Object(k.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return n.a.createElement(Q,{projects:this.props.projects,user:this.props.user,addProject:this.addProject,updateProject:this.updateProject,deleteProject:this.deleteProject,setProject:this.props.setProject})}}]),t}(r.Component),Y=function(e){function t(){var e,a;Object(g.a)(this,t);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(a=Object(E.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(s)))).state={showAddTask:!1,currentProject:"",updatedTask:null,showMobileMenu:!1},a.toggleMobileMenu=function(){a.setState({showMobileMenu:!a.state.showMobileMenu})},a.logOut=function(){a.props.dispatch({type:"LOGOUT_USER",payload:P.a.get("/api/logout").then(function(e){return e.data})})},a.setCurrentProject=function(e){var t=e.target.dataset.projectid;a.setState({currentProject:a.props.projects.find(function(e){return e._id===t})})},a.submitAddTask=function(e,t,r,n){a.props.dispatch(function(e){var t=e.name,a=e.creator,r=e.finishTime,n=e.projectId;return{type:"ADD_TASK",payload:P.a.post("/api/addTask",{name:t,creator:a,finishTime:r,projectId:n}).then(function(e){return e.data})}}({projectId:a.state.currentProject._id,name:t,creator:r,finishTime:n}))},a.finishTask=function(e){var t=e.target.parentNode.dataset.taskid,r=a.state.currentProject.tasks.find(function(e){return e._id===t});a.props.dispatch(T({projectId:a.state.currentProject._id,taskId:r._id,creator:r.creator,finishTime:r.finishTime,name:r.name,finished:!r.finished}))},a.prepereToUpdateTask=function(e){var t=e.target.parentNode.dataset.taskid,r=a.state.currentProject,n=r.tasks.find(function(e){return e._id===t}),s=r;s.tasks=r.tasks.map(function(e){return e._id===t&&(e.hidden=!0),e}),a.setState({currentProject:s,updatedTask:n})},a.updateTask=function(e,t){var r=a.state.updatedTask;a.props.dispatch(T({projectId:a.state.currentProject._id,taskId:r._id,creator:r.creator,finishTime:r.finishTime,name:t,finished:r.finished})),a.setState({updatedTask:null})},a.canselUpdatingTask=function(){var e=a.props.projects.find(function(e){return e._id===a.state.currentProject._id});e.tasks=e.tasks.map(function(e){return e.hidden=!1,e}),a.setState({currentProject:e,updatedTask:null})},a.deleteTask=function(e){var t=e.target.parentNode.dataset.taskid,r=a.state.currentProject._id;a.props.dispatch(function(e){var t=e.taskId,a=e.projectId;return{type:"DELETE_TASK",payload:P.a.delete("/api/deleteTask",{data:{taskId:t,projectId:a}}).then(function(e){return e.data})}}({taskId:t,projectId:r}))},a.toggleAddTask=function(){a.setState({showAddTask:!a.state.showAddTask})},a.renderTasks=function(e){return e.map(function(e,t){return e.hidden?null:n.a.createElement("div",{key:t,className:"".concat(J.a.task," ").concat(e.finished?J.a.taskFinished:""),"data-taskid":e._id},n.a.createElement(G.a,{name:"check-circle",className:"".concat(J.a.finished," ").concat(e.finished?J.a.finishedTrue:""),onClick:a.finishTask}),n.a.createElement("span",null,e.name),n.a.createElement(G.a,{name:"edit",className:"".concat(J.a.icon," ").concat(J.a.editIcon),onClick:a.prepereToUpdateTask}),n.a.createElement(G.a,{name:"trash",className:J.a.icon,onClick:a.deleteTask}))})},a.renderProject=function(e){return n.a.createElement("div",{className:J.a.project},n.a.createElement("div",{className:J.a.project__title},e.name),a.renderTasks(e.tasks))},a.renderHeader=function(){return n.a.createElement("div",{className:J.a.menuWrapper},n.a.createElement("div",{className:J.a.container},n.a.createElement("div",{className:J.a.menu},n.a.createElement(G.a,{name:a.state.showMobileMenu?"close":"bars",className:J.a.mobileMenuBtn,onClick:a.toggleMobileMenu}),n.a.createElement(y.a,{to:"/",className:J.a.menuLogo},"SmartPlanner"),n.a.createElement("ul",{className:J.a.menuList},n.a.createElement("li",{className:J.a.menuItem,onClick:a.logOut},n.a.createElement(G.a,{name:"sign-out"}),n.a.createElement("span",{className:J.a.menuText},"\u0412\u044b\u0445\u043e\u0434"))))))},a}return Object(k.a)(t,e),Object(v.a)(t,[{key:"componentWillMount",value:function(){this.props.dispatch({type:"GET_PROJECTS",payload:P.a.get("/api/getProjects").then(function(e){return e.data})})}},{key:"componentWillReceiveProps",value:function(e){var t=this.state.currentProject;t?this.setState({currentProject:e.projects.find(function(e){return e._id===t._id})}):this.setState({currentProject:e.projects[0]?e.projects[0]:""})}},{key:"render",value:function(){return n.a.createElement("div",{className:J.a.bg},this.renderHeader(),n.a.createElement("div",{id:"app_holder",className:"".concat(J.a.app_holder," ").concat(J.a.container)},n.a.createElement("div",{className:"".concat(J.a.left_menu," ").concat(this.state.showMobileMenu?J.a.open:null)},n.a.createElement(V,{projects:this.props.projects,dispatch:this.props.dispatch,user:this.props.user,setProject:this.setCurrentProject})),n.a.createElement("div",{className:J.a.content},this.state.currentProject?this.renderProject(this.state.currentProject):null,this.state.updatedTask?n.a.createElement(B,{updateTask:this.updateTask,user:this.props.user,task:this.state.updatedTask,onClose:this.canselUpdatingTask}):null,this.state.showAddTask?n.a.createElement(B,{onClose:this.toggleAddTask,submitAddTask:this.submitAddTask,user:this.props.user}):null,this.state.currentProject?n.a.createElement("div",{className:J.a.addTask,onClick:this.toggleAddTask},n.a.createElement("span",{className:J.a.plus},"+"),"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443"):null)))}}]),t}(r.Component);var Z=Object(c.b)(function(e){return{projects:e.projects}})(Y),$=function(e,t){var a=function(a){function r(){var e,t;Object(g.a)(this,r);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(t=Object(E.a)(this,(e=Object(b.a)(r)).call.apply(e,[this].concat(n)))).state={loading:!0},t}return Object(k.a)(r,a),Object(v.a)(r,[{key:"componentWillMount",value:function(){this.props.dispatch({type:"AUTH",payload:P.a.get("/api/auth").then(function(e){return e.data})})}},{key:"componentWillReceiveProps",value:function(e){this.setState({loading:!1}),e.user.isAuth?!1===t&&this.props.history.push("/app"):t&&this.props.history.push("/")}},{key:"render",value:function(){return this.state.loading?n.a.createElement("div",{className:"loader"},"Loading..."):n.a.createElement(e,Object.assign({},this.props,{user:this.props.user}))}}]),r}(r.Component);return Object(c.b)(function(e){return{user:e.user}})(a)};var ee=Object(p.a)(u.a,d.a)(p.d);o.a.render(n.a.createElement(c.a,{store:ee(_)},n.a.createElement(i.a,null,n.a.createElement(function(){return n.a.createElement(f.a,null,n.a.createElement(j.a,{path:"/app",component:$(Z,!0)}),n.a.createElement(j.a,{path:"/",exact:!0,component:q}))},null))),document.getElementById("root"))}},[[44,2,1]]]);
//# sourceMappingURL=main.d9be46d6.chunk.js.map