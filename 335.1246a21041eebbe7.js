"use strict";(self.webpackChunklivestream_recorder=self.webpackChunklivestream_recorder||[]).push([[335],{4335:(Y,h,i)=>{i.r(h),i.d(h,{ContentPagesModule:()=>R,createTranslateLoader:()=>w});var y=i(6895),C=i(529),m=i(4006),d=i(2107),s=i(2975),P=i(2101),g=i(8423),l=i(7615),t=i(4650);const Z=function(){return["/"]};let x=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-error-page"]],decls:17,vars:2,consts:[["id","error"],[1,"container-fluid"],[1,"row","auth-height","full-height-vh"],[1,"col-12","d-flex","align-items-center","justify-content-center"],[1,"row"],[1,"col-12","text-center"],["srcset","assets/img/gallery/error.avif","type","image/avif"],["srcset","assets/img/gallery/error.webp","type","image/webp"],["src","assets/img/gallery/error.png","alt","error","height","300","width","400",1,"img-fluid","error-img","mt-2"],[1,"mt-4"],[1,"w-75","error-text","mx-auto","mt-4"],[1,"btn","btn-warning","my-2",3,"routerLink"]],template:function(n,o){1&n&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"picture"),t._UZ(7,"source",6)(8,"source",7)(9,"img",8),t.qZA(),t.TgZ(10,"h1",9),t._uU(11,"404 - Page Not Found!"),t.qZA(),t.TgZ(12,"div",10)(13,"p"),t._uU(14," The page you are looking for might have beel removed, had it's name changed, or is temporarily unavailable. "),t.qZA()(),t.TgZ(15,"a",11),t._uU(16,"Back To Home"),t.qZA()()()()()()()),2&n&&(t.xp6(15),t.Q6J("routerLink",t.DdM(1,Z)))},dependencies:[l.yS]}),e})();var f=i(5861),U=i(5226),v=i.n(U),T=i(866),b=i(7480);function M(e,r){1&e&&(t._UZ(0,"span",33),t.ALo(1,"translate")),2&e&&t.Q6J("innerHTML",t.lcZ(1,1,"loginNotice"),t.oJD)}let S=(()=>{class e{constructor(n,o,a,c,u,p){this.route=n,this.router=o,this.authService=a,this.spinner=c,this.translateService=u,this.configService=p,this.redirectParamString="",this.spinner.show(void 0,{type:"ball-triangle-path",size:"medium",bdColor:"rgba(0, 0, 0, 0.8)",color:"#fff",fullScreen:!0})}ngOnInit(){if(this.apiUrl=this.configService.environment.apiUrl,!this.translateService.currentLang){this.translateService.setDefaultLang("en");const o=this.translateService.getBrowserLang();this.translateService.use(o)}this.route.queryParamMap.subscribe(o=>{this.redirect=o.get("redirect"),this.redirect&&(this.redirectParamString=`?redirect=${this.redirect}`)}),this.authService.loginAlreadySigninUser().subscribe(o=>{this.spinner.hide(),o&&this.router.navigateByUrl(this.redirect??"/")})}loginWithGoogle(){window.location.href=`${this.apiUrl}/.auth/login/google?post_login_redirect_uri=${encodeURI(window.location.origin+"/pages/login-redirect"+this.redirectParamString)}`}loginWithGithub(){window.location.href=`${this.apiUrl}/.auth/login/github?post_login_redirect_uri=${encodeURI(window.location.origin+"/pages/login-redirect"+this.redirectParamString)}`}loginWithMicrosoft(){window.location.href=`${this.apiUrl}/.auth/login/aad?post_login_redirect_uri=${encodeURI(window.location.origin+"/pages/login-redirect"+this.redirectParamString)}`}loginWithDiscord(){window.location.href=`${this.apiUrl}/.auth/login/discord?post_login_redirect_uri=${encodeURI(window.location.origin+"/pages/login-redirect"+this.redirectParamString)}`}guest(){var n=this;return(0,f.Z)(function*(){(yield v().mixin({showCancelButton:!1,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"},cancelButtonText:n.translateService.instant("Cancel"),buttonsStyling:!1,backdrop:!0,title:n.translateService.instant("Welcome new visitors!"),html:n.translateService.instant("<p>Please feel free to explore our platform.</p><p>We will redirect you back to this login page if necessary.</p>"),icon:"info",confirmButtonText:n.translateService.instant('<i class="ft-corner-down-right"></i> Home page')}).fire()).isConfirmed&&n.router.navigateByUrl("/")})()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(l.gz),t.Y36(l.F0),t.Y36(T.e),t.Y36(g.t2),t.Y36(s.sK),t.Y36(b.E))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-login-page"]],decls:45,vars:3,consts:[["id","login"],[1,"row","auth-height","full-height-vh","m-0"],[1,"col-12","d-flex","align-items-center","justify-content-center"],[1,"card","overflow-hidden"],[1,"card-content"],[1,"card-body","auth-img","p-0"],[1,"row","m-0"],[1,"col-lg-6","d-none","d-lg-flex","justify-content-center","align-items-center","auth-img-bg","p-0"],[1,"w-100","h-100"],["srcset","assets/img/page.avif","type","image/avif"],["srcset","assets/img/page.webp","type","image/webp"],["src","assets/img/page.png","alt","logo",1,"img-fluid"],[1,"col-lg-6","col-12","px-4","py-3"],["translate","",1,"mb-2","card-title"],["translate",""],[1,"d-flex","justify-content-between","align-items-center"],[1,"login-options","w-100"],[1,"btn","btn-lg","btn-block","btn-social-icon","btn-outline-google","p-3","w-100",3,"click"],[1,"fa","fa-google","logo"],[1,"d-flex","text"],[1,"btn","btn-lg","btn-block","btn-social-icon","btn-outline-github","p-3","w-100",3,"click"],[1,"fa","fa-github","logo"],[1,"btn","btn-lg","btn-block","btn-social-icon","btn-outline-microsoft","p-3","w-100",3,"click"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 448 512",1,"logo"],["fill","currentColor","d","M0 32h214.6v214.6H0V32zm233.4 0H448v214.6H233.4V32zM0 265.4h214.6V480H0V265.4zm233.4 0H448V480H233.4V265.4z"],[1,"btn","btn-lg","btn-block","btn-social-icon","btn-outline-tumblr","p-3","w-100",3,"click"],[1,"fa","fa-user","logo"],["translate","",1,"d-flex","text"],[1,"card"],[1,"d-block","p-0"],["acc","ngbAccordion"],[3,"title"],["ngbPanelContent",""],[3,"innerHTML"]],template:function(n,o){1&n&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"picture",8),t._UZ(9,"source",9)(10,"source",10)(11,"img",11),t.qZA()(),t.TgZ(12,"div",12)(13,"h4",13),t._uU(14,"Login"),t.qZA(),t.TgZ(15,"p",14),t._uU(16,"Welcome back, please login to your account."),t.qZA(),t.TgZ(17,"div",15),t._UZ(18,"ngx-spinner"),t.TgZ(19,"div",16)(20,"a",17),t.NdJ("click",function(){return o.loginWithGoogle()}),t._UZ(21,"span",18),t.TgZ(22,"span",19),t._uU(23,"Sign in with Google"),t.qZA()(),t.TgZ(24,"a",20),t.NdJ("click",function(){return o.loginWithGithub()}),t._UZ(25,"span",21),t.TgZ(26,"span",19),t._uU(27,"Sign in with GitHub"),t.qZA()(),t.TgZ(28,"a",22),t.NdJ("click",function(){return o.loginWithMicrosoft()}),t.O4$(),t.TgZ(29,"svg",23),t._UZ(30,"path",24),t.qZA(),t.kcU(),t.TgZ(31,"span",19),t._uU(32,"Sign in with Microsoft"),t.qZA()(),t._UZ(33,"hr"),t.TgZ(34,"a",25),t.NdJ("click",function(){return o.guest()}),t._UZ(35,"span",26),t.TgZ(36,"span",27),t._uU(37,"Guest"),t.qZA()()()()()()()()()(),t.TgZ(38,"div",2)(39,"div",28)(40,"ngb-accordion",29,30)(42,"ngb-panel",31),t.ALo(43,"translate"),t.YNc(44,M,2,3,"ng-template",32),t.qZA()()()()()()),2&n&&(t.xp6(42),t.Q6J("title",t.lcZ(43,1,"loginNoticeTitle")))},dependencies:[d.gY,d.Gk,d.gW,g.Ro,s.Pi,s.X$],styles:[".btn-social-icon[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly;align-items:center}.btn-social-icon[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:first-child{position:static}.btn-social-icon.disabled[_ngcontent-%COMP%]{opacity:.1}.btn-social-icon[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{width:28.93px!important;height:33px;margin-right:5px}.btn-social-icon[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{flex-grow:1;justify-content:center}.auth-height[_ngcontent-%COMP%]{align-content:center}ngb-accordion[_ngcontent-%COMP%]{min-width:45vw;max-width:70vw;margin-bottom:1.5rem}img[_ngcontent-%COMP%]{height:100%;width:400px;-o-object-fit:cover;object-fit:cover}"]}),e})();var L=i(7545),O=i(8613);const B=[{path:"",children:[{path:"error",component:x,data:{title:"Error Page"}},{path:"login",component:S,data:{title:"Login Page"}},{path:"login-redirect",component:(()=>{class e{constructor(n,o,a,c,u,p){this.router=n,this.route=o,this.userService=a,this.translateService=c,this.configService=u,this.spinner=p,this.apiUrl=this.configService.environment.apiUrl,this.spinner.show(void 0,{type:"ball-triangle-path",size:"medium",bdColor:"rgba(0, 0, 0, 0.8)",color:"#fff",fullScreen:!0})}ngOnInit(){var n=this;this.route.queryParamMap.subscribe(o=>{this.redirect=o.get("redirect"),this.userService.createUser().pipe((0,L.w)(()=>this.userService.getUserFromDB())).subscribe(a=>{a&&(this.spinner.hide(),this.router.navigateByUrl(decodeURI(this.redirect)||"/"))},function(){var a=(0,f.Z)(function*(c){console.log(c),400===c.status&&(yield v().mixin({showCancelButton:!1,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"},buttonsStyling:!1,backdrop:!0,title:n.translateService.instant("Error!"),text:c.error,icon:"error",confirmButtonText:n.translateService.instant('<i class="ft-corner-down-right"></i> Home page')}).fire()),n.userService.logout(),window.location.href=`${n.apiUrl}/.auth/logout?post_logout_redirect_uri=${encodeURI(window.location.origin)}`});return function(c){return a.apply(this,arguments)}}())})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(l.F0),t.Y36(l.gz),t.Y36(O.K),t.Y36(s.sK),t.Y36(b.E),t.Y36(g.t2))},e.\u0275cmp=t.Xpm({type:e,selectors:[["ng-component"]],decls:19,vars:0,consts:[["id","login"],[1,"row","auth-height","full-height-vh","m-0"],[1,"col-12","d-flex","align-items-center","justify-content-center"],[1,"card","overflow-hidden"],[1,"card-content"],[1,"card-body","auth-img","p-0"],[1,"row","m-0"],[1,"col-lg-6","d-none","d-lg-flex","justify-content-center","align-items-center","auth-img-bg","p-0"],[1,"w-100","h-100"],["srcset","assets/img/page.avif","type","image/avif"],["srcset","assets/img/page.webp","type","image/webp"],["src","assets/img/page.png","alt","logo",1,"img-fluid"],[1,"col-lg-6","col-12","px-4","py-3"],["translate","",1,"mb-2","card-title"],["translate",""],[1,"d-flex","justify-content-between","align-items-center"]],template:function(n,o){1&n&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"picture",8),t._UZ(9,"source",9)(10,"source",10)(11,"img",11),t.qZA()(),t.TgZ(12,"div",12)(13,"h4",13),t._uU(14,"Login"),t.qZA(),t.TgZ(15,"p",14),t._uU(16,"redirect"),t.qZA(),t.TgZ(17,"div",15),t._UZ(18,"ngx-spinner"),t.qZA()()()()()()()()())},dependencies:[g.Ro,s.Pi],styles:[".btn-social-icon[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly;align-items:center}.btn-social-icon[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:first-child{position:static}.btn-social-icon.disabled[_ngcontent-%COMP%]{opacity:.1}.btn-social-icon[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{width:28.93px!important;height:33px;margin-right:5px}.btn-social-icon[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{flex-grow:1;justify-content:center}.auth-height[_ngcontent-%COMP%]{align-content:center}ngb-accordion[_ngcontent-%COMP%]{min-width:45vw;max-width:70vw;margin-bottom:1.5rem}img[_ngcontent-%COMP%]{height:100%;width:400px;-o-object-fit:cover;object-fit:cover}"]}),e})(),data:{title:"Login Redirect Page"}},{path:"faq",component:i(2174).v,data:{title:"FAQ"}}]}];let j=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.Bz.forChild(B),l.Bz]}),e})();function w(e){return new P.w(e,"./assets/i18n/",".json")}let R=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[y.ez,j,m.u5,m.UX,d.IJ,g.ef.forRoot({type:"ball-triangle-path"}),s.aw.forRoot({loader:{provide:s.Zw,useFactory:w,deps:[C.eN]}})]}),e})()}}]);