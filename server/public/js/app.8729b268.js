(function(t){function e(e){for(var r,a,i=e[0],c=e[1],l=e[2],u=0,f=[];u<i.length;u++)a=i[u],n[a]&&f.push(n[a][0]),n[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],r=!0,a=1;a<o.length;a++){var c=o[a];0!==n[c]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=o[0]))}return t}var r={},n={app:0},s=[];function a(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"e8de88ed"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.e=function(t){var e=[],o=n[t];if(0!==o)if(o)e.push(o[2]);else{var r=new Promise(function(e,r){o=n[t]=[e,r]});e.push(o[2]=r);var s,c=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=a(t),s=function(e){l.onerror=l.onload=null,clearTimeout(u);var o=n[t];if(0!==o){if(o){var r=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src,a=new Error("Loading chunk "+t+" failed.\n("+r+": "+s+")");a.type=r,a.request=s,o[1](a)}n[t]=void 0}};var u=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,c.appendChild(l)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(o,r,function(e){return t[e]}.bind(null,r));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"05b0":function(t,e,o){},"17ea":function(t,e,o){"use strict";var r=o("31b8"),n=o.n(r);n.a},2856:function(t,e,o){},"2cfd":function(t,e,o){"use strict";var r=o("e3a0"),n=o.n(r);n.a},"31b8":function(t,e,o){},4242:function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("097d"),o("bf40");var r=o("31bd"),n=o("ce5b"),s=o.n(n),a=o("2b0e"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("Toolbar"),o("div",{attrs:{id:"app"}},[o("div",{attrs:{id:"nav"}},[o("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" |\n      "),o("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),o("router-view")],1)],1)},c=[],l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-toolbar",{attrs:{color:"green",dark:"",fixed:""}},[o("v-toolbar-title",{staticClass:"mr-4"},[t._v("VUE TODO")]),o("v-toolbar-items",[t.isLoggedIn?o("v-btn",{attrs:{to:"/",flat:""}},[o("v-icon",{staticClass:"mr-1"},[t._v("playlist_add_check")]),t._v("Projects")],1):t._e()],1),o("v-spacer"),o("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[t.isLoggedIn?t._e():o("v-btn",{attrs:{flat:"",to:"/register"}},[o("v-icon",{staticClass:"mr-1"},[t._v("account_box")]),t._v("Register")],1),t.isLoggedIn?t._e():o("v-btn",{attrs:{flat:"",to:"/login"}},[o("v-icon",{staticClass:"mr-1"},[t._v("fingerprint")]),t._v("Login")],1),t.isLoggedIn?o("v-btn",{attrs:{flat:""},on:{click:t.logout}},[o("v-icon",{staticClass:"mr-1"},[t._v("exit_to_app")]),t._v("Logout")],1):t._e(),o("v-btn",{attrs:{flat:""}},[o("v-icon",{staticClass:"mr-1"},[t._v("ondemand_video")]),t._v("How it was made")],1)],1)],1)},u=[],d=o("c93e"),f=o("2f62"),p={computed:Object(d["a"])({},Object(f["c"])("authentication",["isLoggedIn"])),methods:Object(d["a"])({},Object(f["b"])("authentication",["logout"]))},v=p,m=(o("60f8"),o("2877")),g=Object(m["a"])(v,l,u,!1,null,null,null);g.options.__file="Toolbar.vue";var j=g.exports,b={components:{Toolbar:j}},h=b,k=(o("5c0b"),Object(m["a"])(h,i,c,!1,null,null,null));k.options.__file="App.vue";var E=k.exports,_=o("8c4f"),P=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{staticClass:"about"},[o("v-alert",{attrs:{value:t.ProjectError,type:"error"}},[t._v(t._s(t.ProjectError))]),o("v-layout",[o("v-flex",{attrs:{xs4:""}},[o("Projects")],1),t.currentProject?o("v-flex",{staticClass:"pl-2",attrs:{xs8:""}},[o("Tasks",{attrs:{currentProject:t.currentProject}})],1):t._e()],1)],1)},w=[],T=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("panel",{attrs:{title:"Projects"}},[t._l(t.projects,function(e){return o("div",{key:e.id,staticClass:"project mt-2"},[o("editableRecord",{staticClass:"editable-record",attrs:{record:e,isEditMode:e.isEditMode,title:e.title},on:{onClick:function(o){t.setProject(e)},onDelete:function(o){t.deleteProject(e)},onSave:function(o){t.saveProject(e)},onEdit:function(o){t.setEditMode(e)},onInput:function(o){t.setProjectTitle({project:e,title:o})}}})],1)}),o("CreateRecord",{attrs:{placeholder:"Project Title...",value:t.newProjectName},on:{onInput:t.setNewProjectName,create:t.createProject}})],2)},O=[],x=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-layout",{staticClass:"mt-4",attrs:{row:"",wrap:""}},[o("v-flex",{attrs:{xs8:""}},[o("v-text-field",{attrs:{value:t.value,placeholder:t.placeholder},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.$emit("create")},input:function(e){t.$emit("onInput",e)}}})],1),o("v-flex",{staticClass:"text-xs-right",attrs:{xs4:""}},[o("v-btn",{staticClass:"mt-2",attrs:{color:"green",dark:""},on:{click:function(e){t.$emit("create")}}},[o("v-icon",{staticClass:"mr-1"},[t._v("add_circle")]),t._v("Create")],1)],1)],1)},C=[],y={props:["placeholder","value"]},L=y,R=(o("da8b"),Object(m["a"])(L,x,C,!1,null,null,null));R.options.__file="CreateRecord.vue";var M=R.exports,D=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-layout",{attrs:{row:"",wrap:""}},[o("v-flex",{staticClass:"text-xs-left",attrs:{xs9:""}},[t._t("default"),t.isEditMode?t._e():o("span",{on:{click:function(e){t.$emit("onClick")}}},[t._v("\n        "+t._s(t.title)+"\n        ")]),t.isEditMode?o("v-text-field",{attrs:{autofocus:"",value:t.title},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.$emit("onSave")},input:function(e){t.$emit("onInput",e)}}}):t._e()],2),o("v-flex",{staticClass:"text-xs-right",attrs:{xs3:""}},[t.isEditMode?t._e():o("v-icon",{staticClass:"icon",on:{click:function(e){t.$emit("onEdit")}}},[t._v("edit")]),t.isEditMode?o("v-icon",{staticClass:"icon",on:{click:function(e){t.$emit("onSave")}}},[t._v("check")]):t._e(),o("v-icon",{staticClass:"icon",on:{click:function(e){t.$emit("onDelete")}}},[t._v("delete")])],1)],1)},$=[],N={props:["isEditMode","title","record"]},I=N,S=(o("c93e2"),Object(m["a"])(I,D,$,!1,null,null,null));S.options.__file="EditableRecord.vue";var A=S.exports,U={computed:Object(d["a"])({},Object(f["e"])("projects",["newProjectName","projects"])),methods:Object(d["a"])({},Object(f["d"])("projects",["setNewProjectName","setEditMode","setProjectTitle","setCurrentProject"]),Object(f["b"])("projects",["createProject","fetchProjects","saveProject","deleteProject"]),Object(f["b"])("tasks",["fetchTasks"]),{setProject:function(t){this.setCurrentProject(t),this.fetchTasks(t)}}),mounted:function(){this.fetchProjects()},components:{CreateRecord:M,EditableRecord:A}},B=U,H=(o("f6ca"),Object(m["a"])(B,T,O,!1,null,null,null));H.options.__file="Projects.vue";var J=H.exports,q=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("panel",{attrs:{title:"Tasks"}},[t._l(t.tasks,function(e){return o("div",{key:e.id,staticClass:"task mt-2"},[o("EditableRecord",{attrs:{record:e,isEditMode:e.isEditMode,title:e.description},on:{onInput:function(o){t.setTaskDescription({task:e,description:o})},onSave:function(o){t.saveTask(e)},onEdit:function(o){t.setEditMode(e)},onDelete:function(o){t.deleteTask(e)}}},[o("v-icon",{staticClass:"icon",on:{click:function(o){t.toggleCompleted(e)}}},[t._v(t._s(e.completed?"radio_button_checked":"radio_button_unchecked"))])],1)],1)}),o("CreateRecord",{attrs:{placeholder:"Task Description...",value:t.newTaskDescription},on:{onInput:t.setNewTaskDescription,create:function(e){t.createTask(t.currentProject)}}})],2)},z=[],V={computed:Object(d["a"])({},Object(f["e"])("tasks",["tasks","newTaskDescription"]),Object(f["e"])("projects",["currentProject"])),methods:Object(d["a"])({},Object(f["d"])("tasks",["setNewTaskDescription","setEditMode","setTaskDescription"]),Object(f["b"])("tasks",["createTask","fetchTasks","deleteTask","saveTask","toggleCompleted"])),mounted:function(){},components:{CreateRecord:M,EditableRecord:A}},F=V,G=(o("17ea"),Object(m["a"])(F,q,z,!1,null,null,null));G.options.__file="Tasks.vue";var K=G.exports,Q={components:{Projects:J,Tasks:K},computed:Object(d["a"])({},Object(f["e"])("projects",["ProjectError","currentProject"]),Object(f["c"])("authentication",["isLoggedIn"])),mounted:function(){this.isLoggedIn||dt.push("/login")}},W=Q,X=Object(m["a"])(W,P,w,!1,null,null,null);X.options.__file="Projects.vue";var Y=X.exports,Z=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{staticClass:"about"},[o("v-layout",{attrs:{row:"",wrap:""}},[o("v-flex",{attrs:{xs6:"","offset-xs3":""}},[o("h1",[t._v("Register")]),o("v-alert",{attrs:{value:t.registerError,type:"error"}},[t._v(t._s(t.registerError))]),o("v-text-field",{attrs:{label:"Email",placeholder:"Email",value:t.registerEmail},on:{input:t.setRegisterEmail}}),o("v-text-field",{attrs:{label:"Password",placeholder:"Password",type:"password",autocomplete:"new-password",value:t.registerPassword},on:{input:t.setRegisterPassword}}),o("v-btn",{attrs:{color:"green",dark:""},on:{click:t.register}},[o("v-icon",{staticClass:"mr-1"},[t._v("account_circle")]),t._v("Register")],1)],1)],1)],1)},tt=[],et={computed:Object(d["a"])({},Object(f["e"])("authentication",["registerEmail","registerPassword","registerError"])),methods:Object(d["a"])({},Object(f["d"])("authentication",["setRegisterEmail","setRegisterPassword"]),Object(f["b"])("authentication",["register"]))},ot=et,rt=(o("2cfd"),Object(m["a"])(ot,Z,tt,!1,null,null,null));rt.options.__file="Register.vue";var nt=rt.exports,st=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{staticClass:"about"},[o("v-layout",{attrs:{row:"",wrap:""}},[o("v-flex",{attrs:{xs6:"","offset-xs3":""}},[o("h1",[t._v("Login")]),o("v-alert",{attrs:{value:t.loginError,type:"error"}},[t._v(t._s(t.loginError))]),o("v-text-field",{attrs:{label:"Email",placeholder:"Email",value:t.loginEmail},on:{input:t.setLoginEmail}}),o("v-text-field",{attrs:{label:"Password",placeholder:"Password",type:"password",autocomplete:"new-password",value:t.loginPassword},on:{input:t.setLoginPassword}}),o("v-btn",{attrs:{color:"green",dark:""},on:{click:t.login}},[o("v-icon",{staticClass:"mr-1"},[t._v("fingerprint")]),t._v("Login")],1)],1)],1)],1)},at=[],it={computed:Object(d["a"])({},Object(f["e"])("authentication",["loginEmail","loginPassword","loginError"])),methods:Object(d["a"])({},Object(f["d"])("authentication",["setLoginEmail","setLoginPassword"]),Object(f["b"])("authentication",["login"]))},ct=it,lt=(o("d6db"),Object(m["a"])(ct,st,at,!1,null,null,null));lt.options.__file="Login.vue";var ut=lt.exports;a["default"].use(_["a"]);var dt=new _["a"]({mode:"history",base:"/",routes:[{path:"/",name:"projects",component:Y},{path:"/register",name:"register",component:nt},{path:"/login",name:"login",component:ut},{path:"/about",name:"about",component:function(){return o.e("about").then(o.bind(null,"f820"))}}]}),ft=o("0e44"),pt=o("bc3a"),vt=o.n(pt),mt=function(){return vt.a.create({baseURL:ht.state.baseURL,timeout:5e3,headers:{Authorization:"Bearer ".concat(ht.state.authentication.token)}})},gt={namespaced:!0,state:{registerEmail:"test@test.com",registerPassword:"12345",registerError:null,loginEmail:"test@test.com",loginPassword:"12345",loginError:null,token:null},actions:{register:function(t){var e=t.commit,o=t.state;e("setRegisterError",null),mt().post("auth/register",{email:o.registerEmail,password:o.registerPassword}).then(function(t){var o=t.data;e("setToken",o.token),dt.push("/")}).catch(function(){e("setRegisterError","Error while registering user")})},login:function(t){var e=t.commit,o=t.state;e("setLoginError",null),mt().post("auth/login",{email:o.loginEmail,password:o.loginPassword}).then(function(t){var o=t.data;e("setToken",o.token),dt.push("/")}).catch(function(){e("setLoginError","Invalid Email or Password")})},logout:function(t){var e=t.commit;e("setToken",null),dt.push("/login")}},getters:{isLoggedIn:function(t){return!!t.token}},mutations:{setToken:function(t,e){t.token=e},setRegisterError:function(t,e){t.registerError=e},setRegisterEmail:function(t,e){t.registerEmail=e},setRegisterPassword:function(t,e){t.registerPassword=e},setLoginError:function(t,e){t.loginError=e},setLoginEmail:function(t,e){t.loginEmail=e},setLoginPassword:function(t,e){t.loginPassword=e}}},jt={namespaced:!0,state:{newProjectName:null,ProjectError:null,currentProject:null,projects:[]},actions:{saveProject:function(t,e){var o=t.commit;mt().patch("project/".concat(e.id),e).then(function(){o("setEditMode",e)}).catch(function(){o("setProjectError","Error Editing project")})},deleteProject:function(t,e){var o=t.commit;mt().delete("project/".concat(e.id)).then(function(){o("unsetDeletedProject",e)}).catch(function(){o("setProjectError","Error deleting project")})},createProject:function(t){var e=t.commit,o=t.state;mt().post("project",{title:o.newProjectName}).then(function(t){var o=t.data;e("appendProject",o),e("setNewProjectName",null)}).catch(function(){e("setCreateProjectError","Error creating new project")})},fetchProjects:function(t){var e=t.commit;e("setProjectError",null),mt().get("projects").then(function(t){var o=t.data;e("setProjects",o)}).catch(function(){e("setProjectError","Error fetching projects")})}},getters:{},mutations:{setNewProjectName:function(t,e){t.newProjectName=e},appendProject:function(t,e){t.projects.push(e)},setProjectError:function(t,e){t.ProjectError=e},setProjects:function(t,e){t.projects=e},setProjectTitle:function(t,e){var o=e.project,r=e.title;o.title=r},setEditMode:function(t,e){a["default"].set(e,"isEditMode",!e.isEditMode)},unsetDeletedProject:function(t,e){t.projects.splice(t.projects.indexOf(e),1)},setCurrentProject:function(t,e){t.currentProject=e}}},bt={namespaced:!0,state:{newTaskDescription:null,TaskError:null,tasks:[]},actions:{createTask:function(t,e){var o=t.commit,r=t.state;mt().post("project/".concat(e.id,"/task"),{description:r.newTaskDescription}).then(function(t){var e=t.data;o("appendTask",e),o("setNewTaskDescription",null)}).catch(function(){o("setTaskError","Error creating new task")})},deleteTask:function(t,e){var o=t.commit;mt().delete("task/".concat(e.id)).then(function(){o("unsetDeletedTask",e)}).catch(function(){o("setTaskError","Error deleting task")})},fetchTasks:function(t,e){var o=t.commit;o("setTaskError",null),mt().get("project/".concat(e.id,"/task")).then(function(t){var e=t.data;o("setTasks",e)}).catch(function(){o("setTaskError","Error fetching projects")})},saveTask:function(t,e){var o=t.commit;mt().patch("task/".concat(e.id),e).then(function(){o("setEditMode",e)}).catch(function(){o("setTaskError","Error Editing task")})},toggleCompleted:function(t,e){var o=t.commit;o("toggleCompleted",e),mt().patch("task/".concat(e.id),e).then(function(){}).catch(function(){o("setTaskError","Error Editing task")})}},getters:{},mutations:{setNewTaskDescription:function(t,e){t.newTaskDescription=e},appendTask:function(t,e){t.tasks.push(e)},setTaskError:function(t,e){t.TaskError=e},setTasks:function(t,e){t.tasks=e},toggleCompleted:function(t,e){e.completed=!e.completed},unsetDeletedTask:function(t,e){t.tasks.splice(t.tasks.indexOf(e),1)},setEditMode:function(t,e){a["default"].set(e,"isEditMode",!e.isEditMode)},setTaskDescription:function(t,e){var o=e.task,r=e.description;o.description=r}}};a["default"].use(f["a"]);var ht=new f["a"].Store({strict:!0,state:{baseURL:"/api"},modules:{authentication:gt,projects:jt,tasks:bt},mutations:{},actions:{},plugins:[Object(ft["a"])()]}),kt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"white elevation-2"},[o("v-toolbar",{attrs:{flat:"",dense:"",dark:"",color:"green"}},[o("v-toolbar-title",[t._v("\n            "+t._s(t.title)+"\n        ")])],1),o("div",{staticClass:"pl-4 pr-4 pt-2 pb-2"},[t._t("default",[t._v("No Content")])],2)],1)},Et=[],_t={props:{title:String}},Pt=_t,wt=(o("645c"),Object(m["a"])(Pt,kt,Et,!1,null,null,null));wt.options.__file="Panel.vue";var Tt=wt.exports;a["default"].config.productionTip=!1,Object(r["sync"])(ht,dt),a["default"].use(s.a),a["default"].component("panel",Tt),new a["default"]({router:dt,store:ht,render:function(t){return t(E)}}).$mount("#app")},"56da":function(t,e,o){},"5c0b":function(t,e,o){"use strict";var r=o("2856"),n=o.n(r);n.a},"60f8":function(t,e,o){"use strict";var r=o("4242"),n=o.n(r);n.a},"645c":function(t,e,o){"use strict";var r=o("7a8b"),n=o.n(r);n.a},"7a8b":function(t,e,o){},b9f2:function(t,e,o){},c93e2:function(t,e,o){"use strict";var r=o("56da"),n=o.n(r);n.a},d6db:function(t,e,o){"use strict";var r=o("05b0"),n=o.n(r);n.a},da8b:function(t,e,o){"use strict";var r=o("fea3"),n=o.n(r);n.a},e3a0:function(t,e,o){},f6ca:function(t,e,o){"use strict";var r=o("b9f2"),n=o.n(r);n.a},fea3:function(t,e,o){}});
//# sourceMappingURL=app.8729b268.js.map