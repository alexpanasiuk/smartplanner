(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports={container:"home_container__1tDa_",menu:"home_menu__1hbYA",menuWrapper:"home_menuWrapper__3Gq0c",logo:"home_logo__8IeU_",menuList:"home_menuList__1D8Xc",menuItem:"home_menuItem__2gWry",menuButton:"home_menuButton__3_9BL",firstScreen:"home_firstScreen__1aBm3",textWrapper:"home_textWrapper__xpQr2",title:"home_title__1o5PN",subtitle:"home_subtitle__DlRH2",text:"home_text__3uIHB",cta:"home_cta__eMf8m"}},131:function(e,t){},178:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(77),o=a.n(s),c=a(20),i=a(180),p=a(21),l=a(80),u=a.n(l),d=a(81),m=a(82),h=a.n(m);var _=a(39),f=a(22),j=Object(p.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_USER":return Object(_.a)({},t.payload);case"LOGOUT_USER":return{};case"REGISTER_USER":return Object(_.a)({},e,t.payload);case"AUTH":return Object(_.a)({},t.payload);default:return e}},projects:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_PROJECTS":return Array.isArray(a.payload)?Object(f.a)(a.payload):t;case"ADD_TASK":e=Object(f.a)(t);for(var r=0;r<e.length;r++)e[r]._id===a.payload.project._id&&(e[r]=a.payload.project);return e;case"UPDATE_TASK":e=Object(f.a)(t);for(var n=0;n<e.length;n++)if(e[n]._id===a.payload.project._id){e[n]=a.payload.project;break}return e;case"DELETE_TASK":e=Object(f.a)(t);for(var s=0;s<e.length;s++)if(e[s]._id===a.payload.project._id){e[s]=a.payload.project;break}return e;case"ADD_PROJECT":return Object(f.a)(t).concat([a.payload.project]);case"UPDATE_PROJECT":e=Object(f.a)(t);for(var o=0;o<e.length;o++)if(e[o]._id===a.payload.project._id){e[o]=a.payload.project;break}return e;case"DELETE_PROJECT":e=[];for(var c=0;c<t.length;c++)a.payload.project&&t[c]._id!==a.payload.project._id&&e.push(t[c]);return e;default:return t}}}),g=a(181),E=a(182),v=a(3),k=a(4),b=a(6),T=a(5),y=a(7),N=a(179),w=a(15),P=a.n(w);function O(e){var t=e.taskId,a=e.projectId,r=e.name,n=e.creator,s=e.timeSetted,o=e.finished,c=e.finishTime;return{type:"UPDATE_TASK",payload:P.a.post("/api/updateTask",{taskId:t,name:r,creator:n,finished:o,timeSetted:s,finishTime:c,projectId:a}).then(function(e){return e.data})}}var S=a(2),C=a.n(S),A=function(e){function t(){var e,a;Object(v.a)(this,t);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(a=Object(b.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(s)))).state={email:"test@gmail.com",password:"qweqweqwe",success:!1,errors:""},a.handleInputEmail=function(e){a.setState({email:e.target.value})},a.handleInputPassword=function(e){a.setState({password:e.target.value})},a.submitForm=function(e){e.preventDefault();var t=a.validateForm();0!==t.length?a.setState({errors:t}):(a.setState({errors:""}),a.props.submitForm(e,a.state.email,a.state.password,a.state.name))},a.validateForm=function(){var e=[],t=a.state.email.match(/[a-z]+([a-z0-9-_.])*@[a-z]+\.[a-z]+/gi);!t&&a.state.email?e.push("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0439 email \u0430\u0434\u0440\u0435\u0441"):t&&t[0]!==a.state.email&&e.push("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0439 email \u0430\u0434\u0440\u0435\u0441");var r=a.state.password.match(/[a-z0-9-_]+/gi);return r&&r[0]!==a.state.password?e.push("\u041d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u044b \u0432 \u043f\u0430\u0440\u043e\u043b\u0435"):r[0].length<6&&e.push("\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043f\u0430\u0440\u043e\u043b\u044f 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),e},a.showErrors=function(e){return e.map(function(e,t){return n.a.createElement("p",{key:t,className:C.a.error},e)})},a}return Object(y.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return n.a.createElement("form",{onSubmit:this.submitForm,className:C.a.popupForm},n.a.createElement("input",{className:C.a.input,type:"email",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0443 \u043f\u043e\u0447\u0442\u0443",value:this.state.email,onChange:this.handleInputEmail,required:"required"}),n.a.createElement("input",{className:C.a.input,type:"password",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c",value:this.state.password,onChange:this.handleInputPassword,required:"required"}),n.a.createElement("button",{type:"submit",className:C.a.submit},"\u0412\u0445\u043e\u0434"),n.a.createElement("p",{className:C.a.txt},"\u041d\u0435\u0442 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430?",n.a.createElement("a",{href:"/register",onClick:this.props.showRegister,className:C.a.link}," \u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0435\u0433\u043e \u0437\u0430 \u043f\u0430\u0440\u0443 \u0441\u0435\u043a\u0443\u043d\u0434")),this.props.user&&this.props.user.msg?n.a.createElement("p",{className:C.a.error},this.props.user.msg):null,this.state.errors?this.showErrors(this.state.errors):null)}}]),t}(r.Component),I=a(25),D=a.n(I);function U(e){return n.a.createElement("div",{className:D.a.popup},n.a.createElement("div",{className:D.a["popup-content"]},n.a.createElement("table",{className:D.a["popup-header"]},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",{className:D.a["popup-title"]},e.title),n.a.createElement("td",null,n.a.createElement("div",{className:D.a["popup-close"],onClick:e.close},"X"))))),e.children))}var x=function(e){function t(){var e,a;Object(v.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(b.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(n)))).submitForm=function(e,t,r){e.preventDefault(),a.props.dispatch(function(e){var t=e.email,a=e.password;return{type:"LOGIN_USER",payload:P.a.post("/api/login",{email:t,password:a}).then(function(e){return e.data})}}({email:t,password:r}))},a}return Object(y.a)(t,e),Object(k.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.user.isAuth&&this.props.history.push("/app")}},{key:"render",value:function(){return n.a.createElement(U,{close:this.props.close,title:"\u0412\u0445\u043e\u0434"},n.a.createElement(A,{showRegister:this.props.showRegister,submitForm:this.submitForm,user:this.props.user}))}}]),t}(r.Component);var L=Object(c.b)(function(e){return{user:e.user}})(x),R=function(e){function t(){var e,a;Object(v.a)(this,t);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(a=Object(b.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(s)))).state={email:"",password:"",confirmPassword:"",name:"",success:!1,errors:""},a.handleInputEmail=function(e){a.setState({email:e.target.value})},a.handleInputPassword=function(e){a.setState({password:e.target.value})},a.handleInputConfirmPassword=function(e){a.setState({confirmPassword:e.target.value})},a.handleInputName=function(e){a.setState({name:e.target.value})},a.submitForm=function(e){e.preventDefault();var t=a.validateForm();0!==t.length?a.setState({errors:t}):(a.setState({errors:""}),a.props.submitForm(e,a.state.email,a.state.password,a.state.name))},a.validateForm=function(){var e=[],t=a.state.email.match(/[a-z]+([a-z0-9-_.])*@[a-z]+\.[a-z]+/gi);!t&&a.state.email?e.push("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0439 email \u0430\u0434\u0440\u0435\u0441"):t&&t[0]!==a.state.email&&e.push("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0439 email \u0430\u0434\u0440\u0435\u0441");var r=a.state.password.match(/[a-z0-9-_]+/gi);r&&r[0]!==a.state.password?e.push("\u041d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u044b \u0432 \u043f\u0430\u0440\u043e\u043b\u0435"):r[0].length<=6?e.push("\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043f\u0430\u0440\u043e\u043b\u044f 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"):r[0]!==a.state.confirmPassword&&e.push("\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442");var n=a.state.name.match(/[a-z0-9]+/gi);return n&&n[0]!==a.state.name&&e.push("\u041d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u044b \u0432 \u0438\u043c\u0435\u043d\u0438"),e},a.showErrors=function(e){return e.map(function(e,t){return n.a.createElement("p",{key:t,className:C.a.error},e)})},a}return Object(y.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,!1===this.props.user.activated?n.a.createElement("p",{className:C.a.activationText},this.props.user.msg):n.a.createElement("form",{onSubmit:this.submitForm,className:C.a.popupForm},n.a.createElement("input",{className:C.a.input,type:"email",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0443 \u043f\u043e\u0447\u0442\u0443",value:this.state.email,onChange:this.handleInputEmail,required:"required"}),n.a.createElement("input",{className:C.a.input,type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043c\u044f",value:this.state.name,onChange:this.handleInputName,required:"required"}),n.a.createElement("input",{className:C.a.input,type:"password",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c",value:this.state.password,onChange:this.handleInputPassword,required:"required"}),n.a.createElement("input",{className:C.a.input,type:"password",placeholder:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",value:this.state.confirmPassword,onChange:this.handleInputConfirmPassword,required:"required"}),n.a.createElement("button",{type:"submit",className:C.a.submit},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"),n.a.createElement("p",{className:C.a.txt},"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",n.a.createElement("a",{href:"/login",onClick:this.props.showLogin,className:C.a.link}," \u0412\u0445\u043e\u0434")),this.props.user&&this.props.user.msg?n.a.createElement("p",{className:C.a.error},this.props.user.msg):null,this.state.errors?this.showErrors(this.state.errors):null))}}]),t}(r.Component),F=function(e){function t(){var e,a;Object(v.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(b.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(n)))).submitForm=function(e,t,r,n){e.preventDefault(),a.props.dispatch(function(e){var t=e.email,a=e.password,r=e.name;return{type:"REGISTER_USER",payload:P.a.post("/api/register",{email:t,password:a,name:r}).then(function(e){return e.data})}}({email:t,password:r,name:n}))},a}return Object(y.a)(t,e),Object(k.a)(t,[{key:"componentWillReceiveProps",value:function(e){console.log(e)}},{key:"render",value:function(){return n.a.createElement(U,{close:this.props.close,title:"\u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0435\u0433\u043e \u0437\u0430 \u043f\u0430\u0440\u0443 \u0441\u0435\u043a\u0443\u043d\u0434!"},n.a.createElement(R,{showLogin:this.props.showLogin,submitForm:this.submitForm,user:this.props.user}))}}]),t}(r.Component);var W=Object(c.b)(function(e){return{user:e.user}})(F),M=a(13),q=a.n(M),B=function(e){function t(){var e,a;Object(v.a)(this,t);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(a=Object(b.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(s)))).state={openLogin:!1,openRegister:!1},a.toggleOpenLogin=function(e){e.preventDefault(),a.setState({openLogin:!a.state.openLogin})},a.toggleOpenRegister=function(e){e.preventDefault(),a.setState({openRegister:!a.state.openRegister})},a.showRegister=function(e){e.preventDefault(),a.setState({openLogin:!1,openRegister:!0})},a.showLogin=function(e){e.preventDefault(),a.setState({openLogin:!0,openRegister:!1})},a.menu=n.a.createElement("div",{className:q.a.menuWrapper},n.a.createElement("div",{className:q.a.container},n.a.createElement("nav",{className:q.a.menu},n.a.createElement(N.a,{to:"/",className:q.a.logo},"SmartPlanner"),n.a.createElement("ul",{className:q.a.menuList},n.a.createElement("li",{className:q.a.menuItem},n.a.createElement("a",{href:"/login",onClick:a.toggleOpenLogin,className:q.a.menuButton},"\u0412\u0445\u043e\u0434")),n.a.createElement("li",{className:q.a.menuItem},n.a.createElement("a",{href:"/register",onClick:a.toggleOpenRegister,className:q.a.menuButton},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f")))))),a.firstScreen=n.a.createElement("section",{className:q.a.firstScreen},n.a.createElement("div",{className:q.a.container},n.a.createElement("div",{className:q.a.textWrapper},n.a.createElement("h1",{className:q.a.title},"\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0443\u0439 \u0437\u0430\u0434\u0430\u0447\u0438"),n.a.createElement("p",{className:q.a.subtitle},"\u0418 \u043d\u0430\u0441\u043b\u0430\u0436\u0434\u0430\u0439\u0441\u044f \u043e\u0442\u0434\u044b\u0445\u043e\u043c"),n.a.createElement("p",{className:q.a.text},"\u041c\u044b \u043f\u043e\u043c\u043e\u0436\u0435\u043c \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u0442\u044c \u0412\u0430\u0448\u0438 \u0437\u0430\u0434\u0430\u0447\u0438. \u0410 \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 \u044d\u0442\u0438\u043c \u044d\u043a\u043e\u043d\u043e\u043c\u0438\u0442\u044c \u0432\u0440\u0435\u043c\u044f \u0438 \u043d\u0435 \u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0432\u0441\u0435 \u0432 \u0433\u043e\u043b\u043e\u0432\u0435."),n.a.createElement("a",{href:"/register",className:q.a.cta,onClick:a.toggleOpenRegister},"\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u0441\u0435\u0439\u0447\u0430\u0441")))),a}return Object(y.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,this.menu,this.firstScreen,this.state.openLogin?n.a.createElement(L,{close:this.toggleOpenLogin,showRegister:this.showRegister,history:this.props.history}):null,this.state.openRegister?n.a.createElement(W,{close:this.toggleOpenRegister,showLogin:this.showLogin}):null)}}]),t}(r.Component),J=a(85),z=a(8),V=a.n(z),G=function(e){function t(){var e,a;Object(v.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(b.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(n)))).state={taskName:a.props.task?a.props.task.name:""},a.handleTaskName=function(e){a.setState({taskName:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.props.task?a.props.updateTask(e,a.state.taskName):a.props.submitAddTask(e,a.state.taskName,a.props.user.id,Date.now()+2e4),a.props.onClose()},a}return Object(y.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return n.a.createElement("form",{className:C.a.addTaskForm,onSubmit:this.handleSubmit},n.a.createElement("input",{type:"text",className:C.a.input,value:this.state.taskName,required:!0,onChange:this.handleTaskName,placeholder:"\u0422\u0435\u043a\u0441\u0442 \u0437\u0430\u0434\u0430\u0447\u0438"}),n.a.createElement("input",{type:"submit",className:"".concat(C.a.smallSubmit," ").concat(C.a.submit),value:this.props.task?"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443"}),n.a.createElement("div",{className:C.a.cansel,onClick:this.props.onClose},"\u041e\u0442\u043c\u0435\u043d\u0430"))}}]),t}(r.Component),K=a(14),H=a.n(K),Q=a(18),X=a.n(Q),Y=function(e){function t(){var e,a;Object(v.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(b.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(n)))).state={projectName:a.props.project?a.props.project.name:""},a.handleProjectName=function(e){a.setState({projectName:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.props.project?a.props.updateProject(a.props.project._id,a.state.projectName):a.props.addProject(a.state.projectName),a.props.onClose()},a}return Object(y.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return n.a.createElement("form",{className:C.a.addTaskForm,onSubmit:this.handleSubmit},n.a.createElement("input",{type:"text",className:C.a.input,value:this.state.projectName,required:!0,onChange:this.handleProjectName,placeholder:"\u0422\u0435\u043a\u0441\u0442 \u0437\u0430\u0434\u0430\u0447\u0438"}),n.a.createElement("input",{type:"submit",className:"".concat(C.a.smallSubmit," ").concat(C.a.submit),value:this.props.project?"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442"}),n.a.createElement("div",{className:C.a.cansel,onClick:this.props.onClose},"\u041e\u0442\u043c\u0435\u043d\u0430"))}}]),t}(r.Component),Z=function(e){function t(){var e,a;Object(v.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(b.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(n)))).state={userEmail:""},a.handleUserEmail=function(e){a.setState({userEmail:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.props.addUserToProject(e,a.state.userEmail)},a}return Object(y.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return n.a.createElement(U,{close:this.props.onClose,title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"},n.a.createElement("form",{className:C.a.addUserForm,onSubmit:this.handleSubmit},n.a.createElement("input",{type:"email",className:C.a.input,value:this.state.userEmail,required:!0,onChange:this.handleUserEmail,placeholder:"Email \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),n.a.createElement("input",{type:"submit",className:C.a.submit,value:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})))}}]),t}(r.Component),$=function(e){function t(){var e,a;Object(v.a)(this,t);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(a=Object(b.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(s)))).state={showAddProject:!1,updatedProject:null,openAddUser:!1,workWithProject:""},a.prepereToUpdateProject=function(e){e.stopPropagation();for(var t="",r=e.target.parentNode;!t;){if(r.dataset.projectid){t=r.dataset.projectid;break}r=r.parentNode}var n=a.props.projects.find(function(e){return e._id===t});a.setState({updatedProject:n})},a.canselUpdatingProject=function(){a.setState({updatedProject:""})},a.renderDropdown=function(e){return e.map(function(e,t){return e.protected&&e.creator===a.props.user._id||!e.protected?n.a.createElement("li",{key:t,className:X.a.dropdownItem,onClick:e.callback},n.a.createElement(H.a,{name:e.icon}),n.a.createElement("span",{className:X.a.dropdownText},e.text)):null})},a.toggleAddProject=function(){a.setState({showAddProject:!a.state.showAddProject})},a.showDropdown=function(e){e.stopPropagation();var t=e.target.nextSibling,a=document.querySelector("body");t.style="display: block;",a.addEventListener("click",function e(r){t.style="",a.removeEventListener("click",e)})},a.openAddUser=function(e){for(var t=e.target.parentNode;!t.dataset.projectid;)t=t.parentNode;var r=t.dataset.projectid;a.setState({openAddUser:!a.state.openAddUser,workWithProject:r})},a.toggleAddUser=function(e){a.setState({openAddUser:!a.state.openAddUser})},a.addUserToProject=function(e,t){var r=a.state.workWithProject;P.a.post("/api/sendInviteLink",{projectId:r,userEmail:t}).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)}),a.setState({openAddUser:!1,workWithProject:""})},a.renderProjects=function(e){var t=a.state.updatedProject;return 0!==e.length?e.map(function(e,r){return t&&t._id===e._id?null:n.a.createElement("li",{key:r,className:X.a.project,"data-projectid":e._id,onClick:a.props.setProject},e.name,n.a.createElement(H.a,{name:"ellipsis-h",className:X.a.ellipsis,onClick:a.showDropdown}),n.a.createElement("ul",{className:X.a.dropdown},a.renderDropdown(a.dropdown,e)))}):null},a.dropdown=[{icon:"user-plus",text:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",protected:!1,callback:a.openAddUser},{icon:"edit",text:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442",protected:!1,callback:a.prepereToUpdateProject},{icon:"trash",text:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442",protected:!0,callback:a.props.deleteProject}],a}return Object(y.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:X.a.projects},n.a.createElement(H.a,{name:"angle-right",className:X.a.r_angle}),n.a.createElement("span",{className:X.a.projectsTitle},"\u041f\u0440\u043e\u0435\u043a\u0442\u044b:"),n.a.createElement("span",{className:X.a.plus,onClick:this.toggleAddProject},"+")),n.a.createElement("ul",null,this.renderProjects(this.props.projects)),this.state.updatedProject?n.a.createElement(Y,{updateProject:this.props.updateProject,user:this.props.user,project:this.state.updatedProject,onClose:this.canselUpdatingProject}):null,this.state.showAddProject?n.a.createElement(Y,{onClose:this.toggleAddProject,addProject:this.props.addProject,user:this.props.user}):null,n.a.createElement("div",{className:X.a.addProject,onClick:this.toggleAddProject},n.a.createElement("span",{className:X.a.plus},"+"),n.a.createElement("span",{className:X.a.addProjectText},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442")),this.state.openAddUser?n.a.createElement(Z,{onClose:this.toggleAddUser,addUserToProject:this.addUserToProject}):null)}}]),t}(r.Component),ee=function(e){function t(){var e,a;Object(v.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(b.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(n)))).addProject=function(e){var t=a.props.user.id;a.props.dispatch(function(e){var t=e.name,a=e.creator;return{type:"ADD_PROJECT",payload:P.a.post("/api/addProject",{name:t,creator:a}).then(function(e){return e.data})}}({name:e,creator:t}))},a.updateProject=function(e,t){a.props.dispatch(function(e){var t=e.projectId,a=e.name;return{type:"UPDATE_PROJECT",payload:P.a.post("/api/updateProject",{projectId:t,name:a}).then(function(e){return e.data})}}({projectId:e,name:t}))},a.deleteProject=function(e){e.stopPropagation();for(var t="",r=e.target.parentNode;!t;){if(r.dataset.projectid){t=r.dataset.projectid;break}r=r.parentNode}a.props.dispatch(function(e){var t=e.projectId;return{type:"DELETE_PROJECT",payload:P.a.delete("/api/deleteProject",{data:{projectId:t}}).then(function(e){return e.data})}}({projectId:t}))},a}return Object(y.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return n.a.createElement($,{projects:this.props.projects,user:this.props.user,addProject:this.addProject,updateProject:this.updateProject,deleteProject:this.deleteProject,setProject:this.props.setProject})}}]),t}(r.Component),te=a(9),ae=a.n(te),re=a(26),ne=a(38),se=a.n(ne),oe=function(e){function t(){var e,a;Object(v.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(b.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(n)))).state={open:!1},a.toggleDropdown=function(e){return a.setState({open:!a.state.open})},a.closeDropdown=function(e){document.querySelector("body").addEventListener("click",a._closeDropdown)},a._closeDropdown=function(e){var t=document.querySelector("body"),r=Object(re.a)(Object(re.a)(a));document.getElementById(a.props.name).contains(e.target)||(r.setState({open:!1}),t.removeEventListener("click",a._closeDropdown))},a}return Object(y.a)(t,e),Object(k.a)(t,[{key:"componentWillUnmount",value:function(){document.querySelector("body").removeEventListener("click",this._closeDropdown)}},{key:"render",value:function(){return n.a.createElement("div",{onClick:this.closeDropdown,className:"".concat(se.a.dropdown," ").concat(this.props.className),id:this.props.name},n.a.createElement("div",{className:"".concat(se.a.toggleDropdown),onClick:this.toggleDropdown},this.props.component),this.state.open?n.a.createElement("div",{className:se.a.contentWrapper},this.props.children):null)}}]),t}(r.Component),ce=a(27),ie=a.n(ce);function pe(e){return n.a.createElement("div",{className:ie.a.inputWrapper},n.a.createElement("label",{htmlFor:"time-input",className:ie.a.label},"\u0412\u0440\u0435\u043c\u044f: "),n.a.createElement("input",{id:"time-input",value:e.time,placeholder:"\u041d\u0430\u043f\u0440. 9:23",onChange:e.handleTimeChange,className:ie.a.input}),e.isValidTime?null:n.a.createElement(H.a,{className:ie.a.warning,name:"warning"}))}var le=a(83),ue=a.n(le);function de(e){return e.tasks.map(function(t,a){return t.hidden?null:n.a.createElement("div",{key:a,className:"".concat(ae.a.task," ").concat(t.finished?ae.a.taskFinished:""),"data-taskid":t._id},n.a.createElement(H.a,{name:"check-circle",className:"".concat(ae.a.finished," ").concat(t.finished?ae.a.finishedTrue:""),onClick:e.finishTask}),n.a.createElement("span",{className:ae.a.taskText},t.name),n.a.createElement("div",{className:ae.a.taskIconsWrapper},n.a.createElement(H.a,{name:"trash",className:ae.a.icon,onClick:e.deleteTask}),n.a.createElement(oe,{name:"task-calendar".concat(a),component:t.timeSetted?n.a.createElement("span",{className:ae.a.timeSetted},new Date(t.finishTime).toLocaleDateString().slice(0,-5)):n.a.createElement(H.a,{name:"calendar-o",className:ae.a.icon}),className:ae.a.inline},n.a.createElement(ue.a,{minDate:new Date,onChange:e.handleCalendarChange,value:e.date}),n.a.createElement(pe,{time:e.time,handleTimeChange:e.handleTimeChange,isValidTime:e.isValidTime}),n.a.createElement("div",{className:ae.a.timeSubmitWrapper},n.a.createElement("button",{onClick:e.updateTaskTime,className:"".concat(ae.a.timeSubmit," ").concat(e.isValidTime?null:ae.a.disabled),disabled:!e.isValidTime},"\u0417\u0430\u0434\u0430\u0442\u044c"))),n.a.createElement(oe,{name:"taskActions".concat(a),component:n.a.createElement(H.a,{name:"ellipsis-h",className:ae.a.icon}),className:ae.a.inline},n.a.createElement("div",{className:ae.a.dropdownItem,onClick:e.prepareToUpdateTask},n.a.createElement(H.a,{name:"edit",className:ae.a.icon}),n.a.createElement("span",{className:ae.a.dropdownText},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c")))))})}var me=function(e){function t(){var e,a;Object(v.a)(this,t);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(a=Object(b.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(s)))).state={showAddTask:!1,currentProject:"",updatedTask:null,showMobileMenu:!1,date:new Date,time:"",isValidTime:!0},a.handleCalendarChange=function(e){return a.setState({date:e})},a.handleTimeChange=function(e){var t=e.target.value,r=a.isValidTime(t);a.setState({time:t,isValidTime:r})},a.isValidTime=function(e){if(!e)return!0;if(e.match(/[^0-9: ]/))return!1;var t=e.split(":");if(2!==t.length||!t[1])return!1;var a=t[0].trim(),r=t[1].trim();return!(parseInt(a)>24||parseInt(r)>59)},a.updateTaskTime=function(e){var t=a.state,r=t.date,n=t.time,s=new Date(r.getFullYear(),r.getMonth(),r.getDate()),o=n.split(":"),c=Object(J.a)(o,2),i=c[0],p=c[1];n?(i=parseInt(i),p=parseInt(p),s.setMinutes(s.getMinutes()+60*i+p)):s.setMinutes(s.getMinutes()+720);for(var l=e.target.parentNode;!l.dataset.taskid;)l=l.parentNode;var u=l.dataset.taskid,d=a.state.currentProject.tasks.find(function(e){return e._id===u});a.updateTask(e,null,d,s),document.querySelector("body").click()},a.toggleMobileMenu=function(){a.setState({showMobileMenu:!a.state.showMobileMenu})},a.logOut=function(){a.props.dispatch({type:"LOGOUT_USER",payload:P.a.get("/api/logout").then(function(e){return e.data})})},a.setCurrentProject=function(e){var t=e.target.dataset.projectid;a.setState({currentProject:a.props.projects.find(function(e){return e._id===t})})},a.submitAddTask=function(e,t,r,n){a.props.dispatch(function(e){var t=e.name,a=e.creator,r=e.finishTime,n=e.projectId;return{type:"ADD_TASK",payload:P.a.post("/api/addTask",{name:t,creator:a,finishTime:r,projectId:n}).then(function(e){return e.data})}}({projectId:a.state.currentProject._id,name:t,creator:r,finishTime:n}))},a.finishTask=function(e){var t=e.target.parentNode.dataset.taskid,r=a.state.currentProject.tasks.find(function(e){return e._id===t});a.props.dispatch(O({projectId:a.state.currentProject._id,taskId:r._id,creator:r.creator,finishTime:r.finishTime,name:r.name,finished:!r.finished}))},a.prepareToUpdateTask=function(e){for(var t=e.target.parentNode;!t.dataset.taskid;)t=t.parentNode;var r=t.dataset.taskid,n=a.state.currentProject,s=n.tasks.find(function(e){return e._id===r}),o=n;o.tasks=n.tasks.map(function(e){return e._id===r&&(e.hidden=!0),e}),a.setState({currentProject:o,updatedTask:s})},a.updateTask=function(e,t,r,n){var s=!t,o=!1;s?(t=r.name,o=!0):(n=(r=a.state.updatedTask).finishTime,o=r.timeSetted),a.props.dispatch(O({projectId:a.state.currentProject._id,taskId:r._id,creator:r.creator,timeSetted:o,finishTime:n,name:t,finished:r.finished})),s||a.setState({updatedTask:null})},a.canselUpdatingTask=function(){var e=a.props.projects.find(function(e){return e._id===a.state.currentProject._id});e.tasks=e.tasks.map(function(e){return e.hidden=!1,e}),a.setState({currentProject:e,updatedTask:null})},a.deleteTask=function(e){for(var t=e.target.parentNode;!t.dataset.taskid;)t=t.parentNode;var r=t.dataset.taskid,n=a.state.currentProject._id;a.props.dispatch(function(e){var t=e.taskId,a=e.projectId;return{type:"DELETE_TASK",payload:P.a.delete("/api/deleteTask",{data:{taskId:t,projectId:a}}).then(function(e){return e.data})}}({taskId:r,projectId:n}))},a.toggleAddTask=function(){a.setState({showAddTask:!a.state.showAddTask})},a.renderProject=function(e){return n.a.createElement("div",{className:V.a.project},n.a.createElement("div",{className:V.a.project__title},e.name),n.a.createElement(de,Object.assign({tasks:e.tasks},a.state,{finishTask:a.finishTask,handleCalendarChange:a.handleCalendarChange,handleTimeChange:a.handleTimeChange,updateTaskTime:a.updateTaskTime,prepareToUpdateTask:a.prepareToUpdateTask,deleteTask:a.deleteTask})))},a.renderHeader=function(){return n.a.createElement("div",{className:V.a.menuWrapper},n.a.createElement("div",{className:V.a.container},n.a.createElement("div",{className:V.a.menu},n.a.createElement(H.a,{name:a.state.showMobileMenu?"close":"bars",className:V.a.mobileMenuBtn,onClick:a.toggleMobileMenu}),n.a.createElement(N.a,{to:"/",className:V.a.menuLogo},"SmartPlanner"),n.a.createElement("ul",{className:V.a.menuList},n.a.createElement("li",{className:V.a.menuItem,onClick:a.logOut},n.a.createElement(H.a,{name:"sign-out"}),n.a.createElement("span",{className:V.a.menuText},"\u0412\u044b\u0445\u043e\u0434"))))))},a}return Object(y.a)(t,e),Object(k.a)(t,[{key:"componentWillMount",value:function(){this.props.user.isAuth&&(console.log("connect"),this.props.dispatch({type:"CONNECT_TO_SOCKET",payload:this.props.user})),this.props.dispatch({type:"GET_PROJECTS",payload:P.a.get("/api/getProjects").then(function(e){return e.data})})}},{key:"componentWillReceiveProps",value:function(e){var t=this.state.currentProject;t?this.setState({currentProject:e.projects.find(function(e){return e._id===t._id})}):this.setState({currentProject:e.projects[0]?e.projects[0]:""})}},{key:"render",value:function(){return n.a.createElement("div",{className:V.a.bg},this.renderHeader(),n.a.createElement("div",{id:"app_holder",className:"".concat(V.a.app_holder," ").concat(V.a.container)},n.a.createElement("div",{className:"".concat(V.a.left_menu," ").concat(this.state.showMobileMenu?V.a.open:null)},n.a.createElement(ee,{projects:this.props.projects,dispatch:this.props.dispatch,user:this.props.user,setProject:this.setCurrentProject})),n.a.createElement("div",{className:V.a.content},this.state.currentProject?this.renderProject(this.state.currentProject):null,this.state.updatedTask?n.a.createElement(G,{updateTask:this.updateTask,user:this.props.user,task:this.state.updatedTask,onClose:this.canselUpdatingTask}):null,this.state.showAddTask?n.a.createElement(G,{onClose:this.toggleAddTask,submitAddTask:this.submitAddTask,user:this.props.user}):null,this.state.currentProject?n.a.createElement("div",{className:V.a.addTask,onClick:this.toggleAddTask},n.a.createElement("span",{className:V.a.plus},"+"),"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443"):null)))}}]),t}(r.Component);var he=Object(c.b)(function(e){return{projects:e.projects}})(me),_e=function(e,t){var a=function(a){function r(){var e,t;Object(v.a)(this,r);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(t=Object(b.a)(this,(e=Object(T.a)(r)).call.apply(e,[this].concat(n)))).state={loading:!0},t}return Object(y.a)(r,a),Object(k.a)(r,[{key:"componentWillMount",value:function(){this.props.dispatch({type:"AUTH",payload:P.a.get("/api/auth").then(function(e){return e.data})})}},{key:"componentWillReceiveProps",value:function(e){this.setState({loading:!1}),e.user.isAuth?!1===t&&this.props.history.push("/app"):t&&this.props.history.push("/")}},{key:"render",value:function(){return this.state.loading?n.a.createElement("div",{className:"loader"},"Loading..."):n.a.createElement(e,Object.assign({},this.props,{user:this.props.user}))}}]),r}(r.Component);return Object(c.b)(function(e){return{user:e.user}})(a)};var fe=Object(p.a)(u.a,d.a,function(e){var t,a=["ADD_TASK","UPDATE_TASK","DELETE_TASK","UPDATE_PROJECT","DELETE_PROJECT"];return function(r){return function(r){return function(n){switch(n.type){case"CONNECT_TO_SOCKET":(t=h.a.connect(e)).emit("register",n.payload),t.on("projectUpdated",function(e){r({type:e.type,payload:{project:e.project}})});break;case"LOGOUT_USER":t&&t.disconnect()}for(var s=0;s<a.length;s++)a[s]===n.type&&n.payload.success&&t.emit("projectUpdated",{type:n.type,project:n.payload.project});return r(n)}}}}("https://smart-planner.herokuapp.com"))(p.d);o.a.render(n.a.createElement(c.a,{store:fe(j)},n.a.createElement(i.a,null,n.a.createElement(function(){return n.a.createElement(g.a,null,n.a.createElement(E.a,{path:"/app",component:_e(he,!0)}),n.a.createElement(E.a,{path:"/",exact:!0,component:B}))},null))),document.getElementById("root"))},18:function(e,t,a){e.exports={r_angle:"projects_r_angle__rf2DA",projects:"projects_projects__LONI_",projectsTitle:"projects_projectsTitle__aBVTi",project:"projects_project__297Qq",plus:"projects_plus__3WXjt",addProject:"projects_addProject__3nH7J",addProjectText:"projects_addProjectText__K7SJv",ellipsis:"projects_ellipsis__uBJRw",dropdown:"projects_dropdown__3wfuy",dropdownItem:"projects_dropdownItem__2I4md",dropdownText:"projects_dropdownText__1kadi"}},2:function(e,t,a){e.exports={input:"forms_input__2yVQI",submit:"forms_submit__XNPVt",addTaskForm:"forms_addTaskForm__1K2Pm",popupForm:"forms_popupForm__2BZ8K",smallSubmit:"forms_smallSubmit__1O4YC",link:"forms_link__1bIpv",error:"forms_error__2hNP8",activationText:"forms_activationText__37BJn",cansel:"forms_cansel__3gs6L"}},25:function(e,t,a){e.exports={popup:"popup_popup__8U6Jh","popup-header":"popup_popup-header__3Gf3g","popup-title":"popup_popup-title__1ty4L","popup-close":"popup_popup-close__3lrH_","popup-content":"popup_popup-content__1sCpN"}},27:function(e,t,a){e.exports={inputWrapper:"time_inputWrapper__3x3jc",label:"time_label__31Xma",input:"time_input__1PlE2",warning:"time_warning__33jru"}},38:function(e,t,a){e.exports={dropdown:"dropdown_dropdown__2pgEr",toggleDropdown:"dropdown_toggleDropdown__3o8ZT",contentWrapper:"dropdown_contentWrapper__2Izg1"}},8:function(e,t,a){e.exports={bg:"app_bg__3yXFk",container:"app_container__2u_iY",menuWrapper:"app_menuWrapper__rlACz",menu:"app_menu__28kMM",menuLogo:"app_menuLogo__3Dvko",menuText:"app_menuText__Q8Upz",menuItem:"app_menuItem__2bVWq",mobileMenuBtn:"app_mobileMenuBtn__2v_cF",app_holder:"app_app_holder__1GDE6",left_menu:"app_left_menu__1u6ms",content:"app_content__2dzlF",project:"app_project__Y4M_t",project__title:"app_project__title__vnSFb",plus:"app_plus__3DRbw",addTask:"app_addTask__39ocb",open:"app_open__39deV"}},86:function(e,t,a){e.exports=a(178)},9:function(e,t,a){e.exports={task:"tasks_task__1kF3v",taskText:"tasks_taskText__26zqv",finished:"tasks_finished__1HuJd",finishedTrue:"tasks_finishedTrue__3MI3_",icon:"tasks_icon__2fV97",inline:"tasks_inline__1cGU6",timeSubmitWrapper:"tasks_timeSubmitWrapper__wBixS",timeSubmit:"tasks_timeSubmit__2UBQj",disabled:"tasks_disabled__11bvR",taskFinished:"tasks_taskFinished__-LV2-",taskIconsWrapper:"tasks_taskIconsWrapper__3zA5b",dropdownItem:"tasks_dropdownItem__124yQ",timeSetted:"tasks_timeSetted__3xoGa"}}},[[86,2,1]]]);
//# sourceMappingURL=main.6d7bf1e0.chunk.js.map