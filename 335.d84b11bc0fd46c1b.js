"use strict";(self.webpackChunklivestream_recorder=self.webpackChunklivestream_recorder||[]).push([[335],{4335:(W,h,o)=>{o.r(h),o.d(h,{ContentPagesModule:()=>k,createTranslateLoader:()=>v});var b=o(6895),w=o(529),m=o(4006),g=o(9914),a=o(2975),C=o(2101),l=o(8423),s=o(8723),t=o(4650);const Z=function(){return["/"]};let y=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-error-page"]],decls:17,vars:2,consts:[["id","error"],[1,"container-fluid"],[1,"row","auth-height","full-height-vh"],[1,"col-12","d-flex","align-items-center","justify-content-center"],[1,"row"],[1,"col-12","text-center"],["srcset","assets/img/gallery/error.avif","type","image/avif"],["srcset","assets/img/gallery/error.webp","type","image/webp"],["src","assets/img/gallery/error.png","alt","error","height","300","width","400",1,"img-fluid","error-img","mt-2"],[1,"mt-4"],[1,"w-75","error-text","mx-auto","mt-4"],[1,"btn","btn-warning","my-2",3,"routerLink"]],template:function(n,i){1&n&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"picture"),t._UZ(7,"source",6)(8,"source",7)(9,"img",8),t.qZA(),t.TgZ(10,"h1",9),t._uU(11,"404 - Page Not Found!"),t.qZA(),t.TgZ(12,"div",10)(13,"p"),t._uU(14," The page you are looking for might have beel removed, had it's name changed, or is temporarily unavailable. "),t.qZA()(),t.TgZ(15,"a",11),t._uU(16,"Back To Home"),t.qZA()()()()()()()),2&n&&(t.xp6(15),t.Q6J("routerLink",t.DdM(1,Z)))},dependencies:[s.yS]}),e})();var P=o(5861),x=o(5226),T=o.n(x),f=o(1327),M=o(7480);function S(e,r){1&e&&(t._UZ(0,"span",36),t.ALo(1,"translate")),2&e&&t.Q6J("innerHTML",t.lcZ(1,1,"loginNotice"),t.oJD)}const O=[{path:"",children:[{path:"error",component:y,data:{title:"Error Page"}},{path:"login",component:(()=>{class e{constructor(n,i,c,d,u,p){this.route=n,this.router=i,this.authService=c,this.spinner=d,this.translateService=u,this.configService=p,this.redirectParamString="",this.spinner.show(void 0,{type:"ball-triangle-path",size:"medium",bdColor:"rgba(0, 0, 0, 0.8)",color:"#fff",fullScreen:!0})}ngOnInit(){if(!this.translateService.currentLang){this.translateService.setDefaultLang("en");const i=this.translateService.getBrowserLang();this.translateService.use(i)}this.route.queryParamMap.subscribe(i=>{this.redirect=i.get("redirect"),this.redirect&&(this.redirectParamString=`?redirect=${this.redirect}`)}),this.authService.loginAlreadySigninUser().subscribe(i=>{this.spinner.hide(),i&&this.router.navigateByUrl(this.redirect??"/")})}loginWithGoogle(){this.authService.loginWithGoogle(this.redirect)}loginWithGithub(){this.authService.loginWithGithub(this.redirect)}loginWithMicrosoft(){this.authService.loginWithMicrosoft(this.redirect)}loginWithDiscord(){this.authService.loginWithDiscord(this.redirect)}guest(){var n=this;return(0,P.Z)(function*(){(yield T().mixin({showCancelButton:!1,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"},cancelButtonText:n.translateService.instant("Cancel"),buttonsStyling:!1,backdrop:!0,title:n.translateService.instant("Welcome new visitors!"),html:n.translateService.instant("<p>Please feel free to explore our platform.</p><p>We will redirect you back to this login page if necessary.</p>"),icon:"info",confirmButtonText:n.translateService.instant('<i class="ft-corner-down-right"></i> Home page')}).fire()).isConfirmed&&n.router.navigateByUrl("/")})()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(s.gz),t.Y36(s.F0),t.Y36(f.e),t.Y36(l.t2),t.Y36(a.sK),t.Y36(M.E))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-login-page"]],decls:50,vars:11,consts:[["id","login"],[1,"row","auth-height","full-height-vh","m-0"],[1,"col-12","d-flex","align-items-center","justify-content-center"],[1,"card","overflow-hidden"],[1,"card-content"],[1,"card-body","auth-img","p-0"],[1,"row","m-0"],[1,"col-lg-6","d-none","d-lg-flex","justify-content-center","align-items-center","auth-img-bg","p-0"],[1,"w-100","h-100"],["srcset","assets/img/preview.avif","type","image/avif"],["srcset","assets/img/preview.webp","type","image/webp"],["src","assets/img/preview.png","alt","logo",1,"img-fluid"],[1,"col-lg-6","col-12","px-4","py-3"],["translate","",1,"mb-2","card-title"],["translate",""],[1,"d-flex","justify-content-between","align-items-center"],[1,"login-options","w-100"],[1,"btn","btn-lg","btn-block","btn-social-icon","btn-outline-google","p-3","w-100",3,"click"],[1,"fa","fa-google","logo"],[1,"d-flex","text"],[1,"btn","btn-lg","btn-block","btn-social-icon","btn-outline-github","p-3","w-100",3,"click"],[1,"fa","fa-github","logo"],[1,"btn","btn-lg","btn-block","btn-social-icon","btn-outline-microsoft","p-3","w-100",3,"click"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 448 512",1,"logo"],["fill","currentColor","d","M0 32h214.6v214.6H0V32zm233.4 0H448v214.6H233.4V32zM0 265.4h214.6V480H0V265.4zm233.4 0H448V480H233.4V265.4z"],[1,"btn","btn-lg","btn-block","btn-social-icon","btn-outline-discord","p-3","w-100",3,"click"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 640 512",1,"logo"],["d","M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z","fill","currentColor"],[1,"btn","btn-lg","btn-block","btn-social-icon","btn-outline-tumblr","p-3","w-100",3,"click"],[1,"fa","fa-user","logo"],["translate","",1,"d-flex","text"],[1,"card"],[1,"d-block","p-0"],["acc","ngbAccordion"],[3,"title"],["ngbPanelContent",""],[3,"innerHTML"]],template:function(n,i){1&n&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"picture",8),t._UZ(9,"source",9)(10,"source",10)(11,"img",11),t.qZA()(),t.TgZ(12,"div",12)(13,"h4",13),t._uU(14,"Login"),t.qZA(),t.TgZ(15,"p",14),t._uU(16,"Welcome back, please login to your account."),t.qZA(),t.TgZ(17,"div",15),t._UZ(18,"ngx-spinner"),t.TgZ(19,"div",16)(20,"a",17),t.NdJ("click",function(){return i.loginWithGoogle()}),t._UZ(21,"span",18),t.TgZ(22,"span",19),t._uU(23,"Sign in with Google"),t.qZA()(),t.TgZ(24,"a",20),t.NdJ("click",function(){return i.loginWithGithub()}),t._UZ(25,"span",21),t.TgZ(26,"span",19),t._uU(27,"Sign in with GitHub"),t.qZA()(),t.TgZ(28,"a",22),t.NdJ("click",function(){return i.loginWithMicrosoft()}),t.O4$(),t.TgZ(29,"svg",23),t._UZ(30,"path",24),t.qZA(),t.kcU(),t.TgZ(31,"span",19),t._uU(32,"Sign in with Microsoft"),t.qZA()(),t.TgZ(33,"a",25),t.NdJ("click",function(){return i.loginWithDiscord()}),t.O4$(),t.TgZ(34,"svg",26),t._UZ(35,"path",27),t.qZA(),t.kcU(),t.TgZ(36,"span",19),t._uU(37,"Sign in with Discord"),t.qZA()(),t._UZ(38,"hr"),t.TgZ(39,"a",28),t.NdJ("click",function(){return i.guest()}),t._UZ(40,"span",29),t.TgZ(41,"span",30),t._uU(42,"Guest"),t.qZA()()()()()()()()()(),t.TgZ(43,"div",2)(44,"div",31)(45,"ngb-accordion",32,33)(47,"ngb-panel",34),t.ALo(48,"translate"),t.YNc(49,S,2,3,"ng-template",35),t.qZA()()()()()()),2&n&&(t.xp6(20),t.ekj("disabled",""===i.configService.environment.clientId_google),t.xp6(4),t.ekj("disabled",""===i.configService.environment.clientId_github),t.xp6(4),t.ekj("disabled",""===i.configService.environment.clientId_microsoft),t.xp6(5),t.ekj("disabled",""===i.configService.environment.clientId_discord),t.xp6(14),t.Q6J("title",t.lcZ(48,9,"loginNoticeTitle")))},dependencies:[g.gY,g.Gk,g.gW,l.Ro,a.Pi,a.X$],styles:[".btn-social-icon[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly;align-items:center}.btn-social-icon[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:first-child{position:static}.btn-social-icon.disabled[_ngcontent-%COMP%]{opacity:.1}.btn-social-icon[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{width:28.93px!important;height:33px;margin-right:5px}.btn-social-icon[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{flex-grow:1;justify-content:center}.auth-height[_ngcontent-%COMP%]{align-content:center}ngb-accordion[_ngcontent-%COMP%]{min-width:45vw;max-width:70vw;margin-bottom:1.5rem}img[_ngcontent-%COMP%]{height:100%;width:400px;-o-object-fit:cover;object-fit:cover}"]}),e})(),data:{title:"Login Page"}},{path:"login-redirect",component:(()=>{class e{constructor(n,i,c,d,u){this.router=n,this.route=i,this.translateService=c,this.spinner=d,this.authService=u,this.spinner.show(void 0,{type:"ball-triangle-path",size:"medium",bdColor:"rgba(0, 0, 0, 0.8)",color:"#fff",fullScreen:!0}),this.route.queryParamMap.subscribe(p=>{var j=p.get("issuer");this.authService.loginRedirect(j)})}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(s.F0),t.Y36(s.gz),t.Y36(a.sK),t.Y36(l.t2),t.Y36(f.e))},e.\u0275cmp=t.Xpm({type:e,selectors:[["ng-component"]],decls:19,vars:0,consts:[["id","login"],[1,"row","auth-height","full-height-vh","m-0"],[1,"col-12","d-flex","align-items-center","justify-content-center"],[1,"card","overflow-hidden"],[1,"card-content"],[1,"card-body","auth-img","p-0"],[1,"row","m-0"],[1,"col-lg-6","d-none","d-lg-flex","justify-content-center","align-items-center","auth-img-bg","p-0"],[1,"w-100","h-100"],["srcset","assets/img/preview.avif","type","image/avif"],["srcset","assets/img/preview.webp","type","image/webp"],["src","assets/img/preview.png","alt","logo",1,"img-fluid"],[1,"col-lg-6","col-12","px-4","py-3"],["translate","",1,"mb-2","card-title"],["translate",""],[1,"d-flex","justify-content-between","align-items-center"]],template:function(n,i){1&n&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"picture",8),t._UZ(9,"source",9)(10,"source",10)(11,"img",11),t.qZA()(),t.TgZ(12,"div",12)(13,"h4",13),t._uU(14,"Login"),t.qZA(),t.TgZ(15,"p",14),t._uU(16,"redirect"),t.qZA(),t.TgZ(17,"div",15),t._UZ(18,"ngx-spinner"),t.qZA()()()()()()()()())},dependencies:[l.Ro,a.Pi],styles:[".btn-social-icon[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly;align-items:center}.btn-social-icon[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:first-child{position:static}.btn-social-icon.disabled[_ngcontent-%COMP%]{opacity:.1}.btn-social-icon[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{width:28.93px!important;height:33px;margin-right:5px}.btn-social-icon[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{flex-grow:1;justify-content:center}.auth-height[_ngcontent-%COMP%]{align-content:center}ngb-accordion[_ngcontent-%COMP%]{min-width:45vw;max-width:70vw;margin-bottom:1.5rem}img[_ngcontent-%COMP%]{height:100%;width:400px;-o-object-fit:cover;object-fit:cover}"]}),e})(),data:{title:"Login Redirect Page"}},{path:"faq",component:o(2174).v,data:{title:"FAQ"}}]}];let _=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[s.Bz.forChild(O),s.Bz]}),e})();function v(e){return new C.w(e,"./assets/i18n/",".json")}let k=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[b.ez,_,m.u5,m.UX,g.IJ,l.ef.forRoot({type:"ball-triangle-path"}),a.aw.forRoot({loader:{provide:a.Zw,useFactory:v,deps:[w.eN]}})]}),e})()}}]);