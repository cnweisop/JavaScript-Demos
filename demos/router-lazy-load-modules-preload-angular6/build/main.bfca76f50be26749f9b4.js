(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0ZzE":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t("DHAg");var o=t("wov0");t("ZYjt").platformBrowser().bootstrapModuleFactory(o.AppModuleNgFactory)},"3oJL":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("ZYCi"),r=t("ZYCi"),l=t("ZYCi"),u=t("ZYCi"),a=(t("ZYCi"),t("ZYCi")),i=t("ZYCi"),d=function(){return function(e){var n=this;this.isShowingRouteLoadIndicator=!1;var t=0,d=0;e.events.subscribe(function(e){e instanceof i.RouteConfigLoadStart?t++:e instanceof a.RouteConfigLoadEnd?t--:e instanceof u.NavigationStart?d++:(e instanceof r.NavigationEnd||e instanceof l.NavigationError||e instanceof o.NavigationCancel)&&d--,n.isShowingRouteLoadIndicator=!(!d||!t)})}}();n.AppViewComponent=d},DHAg:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t("kzjQ"),t("0TWp")},IYUb:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=function(){return function(){}}();n.FeatureCViewComponent=o},"O0+7":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("IYUb"),r=function(){return function(){}}();n.FeatureCViewModule=r,n.FeatureCView={modules:[r],routes:[{path:"feature-c",component:o.FeatureCViewComponent}]}},SmDo:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=function(){return function(){}}();n.AppModule=o},dO1U:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("nNKj"),r=t("CcnG"),l=t("ZYCi"),u=t("Ip0R"),a=t("3oJL"),i=[o.styles],d=r.ɵcrt({encapsulation:0,styles:i,data:{}});function p(e){return r.ɵvid(0,[(e()(),r.ɵeld(0,0,null,null,1,"div",[["class","router-load-indicator"]],null,null,null,null,null)),(e()(),r.ɵted(-1,null,[" Loading Module\n"]))],null,null)}function c(e){return r.ɵvid(0,[(e()(),r.ɵted(-1,null,["\nApp View "])),(e()(),r.ɵeld(1,0,null,null,22,"p",[],null,null,null,null,null)),(e()(),r.ɵeld(2,0,null,null,2,"a",[["routerLink","/app/"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(e,n,t){var o=!0;"click"===n&&(o=!1!==r.ɵnov(e,3).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&o);return o},null,null)),r.ɵdid(3,671744,null,0,l.RouterLinkWithHref,[l.Router,l.ActivatedRoute,u.LocationStrategy],{routerLink:[0,"routerLink"]},null),(e()(),r.ɵted(-1,null,["Home"])),(e()(),r.ɵted(-1,null,[" — "])),(e()(),r.ɵeld(6,0,null,null,2,"a",[["routerLink","/app/feature-a"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(e,n,t){var o=!0;"click"===n&&(o=!1!==r.ɵnov(e,7).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&o);return o},null,null)),r.ɵdid(7,671744,null,0,l.RouterLinkWithHref,[l.Router,l.ActivatedRoute,u.LocationStrategy],{routerLink:[0,"routerLink"]},null),(e()(),r.ɵted(-1,null,["Feature A"])),(e()(),r.ɵted(-1,null,[" — "])),(e()(),r.ɵeld(10,0,null,null,2,"a",[["routerLink","/app/feature-b"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(e,n,t){var o=!0;"click"===n&&(o=!1!==r.ɵnov(e,11).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&o);return o},null,null)),r.ɵdid(11,671744,null,0,l.RouterLinkWithHref,[l.Router,l.ActivatedRoute,u.LocationStrategy],{routerLink:[0,"routerLink"]},null),(e()(),r.ɵted(-1,null,["Feature B"])),(e()(),r.ɵted(-1,null,[" — "])),(e()(),r.ɵeld(14,0,null,null,2,"a",[["routerLink","/app/feature-c"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(e,n,t){var o=!0;"click"===n&&(o=!1!==r.ɵnov(e,15).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&o);return o},null,null)),r.ɵdid(15,671744,null,0,l.RouterLinkWithHref,[l.Router,l.ActivatedRoute,u.LocationStrategy],{routerLink:[0,"routerLink"]},null),(e()(),r.ɵted(-1,null,["Feature C"])),(e()(),r.ɵted(-1,null,[" — "])),(e()(),r.ɵeld(18,0,null,null,5,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(e,n,t){var o=!0;"click"===n&&(o=!1!==r.ɵnov(e,19).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&o);return o},null,null)),r.ɵdid(19,671744,null,0,l.RouterLinkWithHref,[l.Router,l.ActivatedRoute,u.LocationStrategy],{routerLink:[0,"routerLink"]},null),r.ɵpod(20,{aside:0}),r.ɵpod(21,{outlets:0}),r.ɵpad(22,2),(e()(),r.ɵted(-1,null,["Aside"])),(e()(),r.ɵeld(24,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),r.ɵdid(25,212992,null,0,l.RouterOutlet,[l.ChildrenOutletContexts,r.ViewContainerRef,r.ComponentFactoryResolver,[8,null],r.ChangeDetectorRef],null,null),(e()(),r.ɵeld(26,16777216,null,null,1,"router-outlet",[["name","aside"]],null,null,null,null,null)),r.ɵdid(27,212992,null,0,l.RouterOutlet,[l.ChildrenOutletContexts,r.ViewContainerRef,r.ComponentFactoryResolver,[8,"aside"],r.ChangeDetectorRef],null,null),(e()(),r.ɵand(16777216,null,null,1,null,p)),r.ɵdid(29,16384,null,0,u.NgIf,[r.ViewContainerRef,r.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(e,n){var t=n.component;e(n,3,0,"/app/");e(n,7,0,"/app/feature-a");e(n,11,0,"/app/feature-b");e(n,15,0,"/app/feature-c"),e(n,19,0,e(n,22,0,"/app",e(n,21,0,e(n,20,0,"aside")))),e(n,25,0),e(n,27,0),e(n,29,0,t.isShowingRouteLoadIndicator)},function(e,n){e(n,2,0,r.ɵnov(n,3).target,r.ɵnov(n,3).href),e(n,6,0,r.ɵnov(n,7).target,r.ɵnov(n,7).href),e(n,10,0,r.ɵnov(n,11).target,r.ɵnov(n,11).href),e(n,14,0,r.ɵnov(n,15).target,r.ɵnov(n,15).href),e(n,18,0,r.ɵnov(n,19).target,r.ɵnov(n,19).href)})}function s(e){return r.ɵvid(0,[(e()(),r.ɵeld(0,0,null,null,1,"my-app",[],null,null,null,c,d)),r.ɵdid(1,49152,null,0,a.AppViewComponent,[l.Router],null,null)],null,null)}n.RenderType_AppViewComponent=d,n.View_AppViewComponent_0=c,n.View_AppViewComponent_Host_0=s;var _=r.ɵccf("my-app",a.AppViewComponent,s,{},{},[]);n.AppViewComponentNgFactory=_},"n9/P":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("t7rU"),r=t("CcnG"),l=t("IYUb"),u=[o.styles],a=r.ɵcrt({encapsulation:0,styles:u,data:{}});function i(e){return r.ɵvid(0,[(e()(),r.ɵeld(0,0,null,null,1,"h2",[],null,null,null,null,null)),(e()(),r.ɵted(-1,null,[" Feature C\n"])),(e()(),r.ɵeld(2,0,null,null,1,"p",[],null,null,null,null,null)),(e()(),r.ɵted(-1,null,[" This was loaded statically.\n"]))],null,null)}function d(e){return r.ɵvid(0,[(e()(),r.ɵeld(0,0,null,null,1,"feature-c-view",[],null,null,null,i,a)),r.ɵdid(1,49152,null,0,l.FeatureCViewComponent,[],null,null)],null,null)}n.RenderType_FeatureCViewComponent=a,n.View_FeatureCViewComponent_0=i,n.View_FeatureCViewComponent_Host_0=d;var p=r.ɵccf("feature-c-view",l.FeatureCViewComponent,d,{},{},[]);n.FeatureCViewComponentNgFactory=p},nNKj:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.styles=["[_nghost-%COMP%] {\n  display: block ;\n}\na[_ngcontent-%COMP%] {\n  color: red ;\n  cursor: pointer ;\n  text-decoration: underline ;\n}\n@keyframes router-load-indicator-animation {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.router-load-indicator[_ngcontent-%COMP%] {\n  animation-delay: 100ms ;\n  animation-duration: 200ms ;\n  animation-fill-mode: both ;\n  animation-name: router-load-indicator-animation;\n  background-color: #ffdc73;\n  border-radius: 5px 5px 5px 5px ;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);\n  color: #000000;\n  font-family: monospace ;\n  font-size: 16px ;\n  left: 50% ;\n  padding: 7px 15px 7px 15px ;\n  position: fixed ;\n  text-transform: lowercase ;\n  top: 10px ;\n  transform: translateX(-50%);\n  z-index: 2 ;\n}"]},t7rU:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.styles=["[_nghost-%COMP%] {\n  display: block ;\n}"]},wov0:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("CcnG"),r=t("SmDo"),l=t("3oJL"),u=t("pMnS"),a=t("n9/P"),i=t("dO1U"),d=t("Ip0R"),p=t("ZYjt"),c=t("ZYCi"),s=t("O0+7"),_=t("IYUb"),m=o.ɵcmf(r.AppModule,[l.AppViewComponent],function(e){return o.ɵmod([o.ɵmpd(512,o.ComponentFactoryResolver,o.ɵCodegenComponentFactoryResolver,[[8,[u.ɵEmptyOutletComponentNgFactory,a.FeatureCViewComponentNgFactory,i.AppViewComponentNgFactory]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o.ɵmpd(5120,o.LOCALE_ID,o.ɵangular_packages_core_core_k,[[3,o.LOCALE_ID]]),o.ɵmpd(4608,d.NgLocalization,d.NgLocaleLocalization,[o.LOCALE_ID,[2,d.ɵangular_packages_common_common_a]]),o.ɵmpd(5120,o.APP_ID,o.ɵangular_packages_core_core_f,[]),o.ɵmpd(5120,o.IterableDiffers,o.ɵangular_packages_core_core_i,[]),o.ɵmpd(5120,o.KeyValueDiffers,o.ɵangular_packages_core_core_j,[]),o.ɵmpd(4608,p.DomSanitizer,p.ɵDomSanitizerImpl,[d.DOCUMENT]),o.ɵmpd(6144,o.Sanitizer,null,[p.DomSanitizer]),o.ɵmpd(4608,p.HAMMER_GESTURE_CONFIG,p.HammerGestureConfig,[]),o.ɵmpd(5120,p.EVENT_MANAGER_PLUGINS,function(e,n,t,o,r,l,u,a){return[new p.ɵDomEventsPlugin(e,n,t),new p.ɵKeyEventsPlugin(o),new p.ɵHammerGesturesPlugin(r,l,u,a)]},[d.DOCUMENT,o.NgZone,o.PLATFORM_ID,d.DOCUMENT,d.DOCUMENT,p.HAMMER_GESTURE_CONFIG,o.ɵConsole,[2,p.HAMMER_LOADER]]),o.ɵmpd(4608,p.EventManager,p.EventManager,[p.EVENT_MANAGER_PLUGINS,o.NgZone]),o.ɵmpd(135680,p.ɵDomSharedStylesHost,p.ɵDomSharedStylesHost,[d.DOCUMENT]),o.ɵmpd(4608,p.ɵDomRendererFactory2,p.ɵDomRendererFactory2,[p.EventManager,p.ɵDomSharedStylesHost]),o.ɵmpd(6144,o.RendererFactory2,null,[p.ɵDomRendererFactory2]),o.ɵmpd(6144,p.ɵSharedStylesHost,null,[p.ɵDomSharedStylesHost]),o.ɵmpd(4608,o.Testability,o.Testability,[o.NgZone]),o.ɵmpd(5120,c.ActivatedRoute,c.ɵangular_packages_router_router_g,[c.Router]),o.ɵmpd(4608,c.PreloadAllModules,c.PreloadAllModules,[]),o.ɵmpd(6144,c.PreloadingStrategy,null,[c.PreloadAllModules]),o.ɵmpd(135680,c.RouterPreloader,c.RouterPreloader,[c.Router,o.NgModuleFactoryLoader,o.Compiler,o.Injector,c.PreloadingStrategy]),o.ɵmpd(4608,c.NoPreloading,c.NoPreloading,[]),o.ɵmpd(5120,c.ɵangular_packages_router_router_n,c.ɵangular_packages_router_router_c,[c.Router,d.ViewportScroller,c.ROUTER_CONFIGURATION]),o.ɵmpd(5120,c.ROUTER_INITIALIZER,c.ɵangular_packages_router_router_j,[c.ɵangular_packages_router_router_h]),o.ɵmpd(5120,o.APP_BOOTSTRAP_LISTENER,function(e){return[e]},[c.ROUTER_INITIALIZER]),o.ɵmpd(1073742336,d.CommonModule,d.CommonModule,[]),o.ɵmpd(1024,o.ErrorHandler,p.ɵangular_packages_platform_browser_platform_browser_a,[]),o.ɵmpd(1024,o.NgProbeToken,function(){return[c.ɵangular_packages_router_router_b()]},[]),o.ɵmpd(512,c.ɵangular_packages_router_router_h,c.ɵangular_packages_router_router_h,[o.Injector]),o.ɵmpd(1024,o.APP_INITIALIZER,function(e,n){return[p.ɵangular_packages_platform_browser_platform_browser_j(e),c.ɵangular_packages_router_router_i(n)]},[[2,o.NgProbeToken],c.ɵangular_packages_router_router_h]),o.ɵmpd(512,o.ApplicationInitStatus,o.ApplicationInitStatus,[[2,o.APP_INITIALIZER]]),o.ɵmpd(131584,o.ApplicationRef,o.ApplicationRef,[o.NgZone,o.ɵConsole,o.Injector,o.ErrorHandler,o.ComponentFactoryResolver,o.ApplicationInitStatus]),o.ɵmpd(1073742336,o.ApplicationModule,o.ApplicationModule,[o.ApplicationRef]),o.ɵmpd(1073742336,p.BrowserModule,p.BrowserModule,[[3,p.BrowserModule]]),o.ɵmpd(1073742336,s.FeatureCViewModule,s.FeatureCViewModule,[]),o.ɵmpd(1024,c.ɵangular_packages_router_router_a,c.ɵangular_packages_router_router_e,[[3,c.Router]]),o.ɵmpd(512,c.UrlSerializer,c.DefaultUrlSerializer,[]),o.ɵmpd(512,c.ChildrenOutletContexts,c.ChildrenOutletContexts,[]),o.ɵmpd(256,c.ROUTER_CONFIGURATION,{useHash:!0,enableTracing:!1,preloadingStrategy:c.PreloadAllModules},[]),o.ɵmpd(1024,d.LocationStrategy,c.ɵangular_packages_router_router_d,[d.PlatformLocation,[2,d.APP_BASE_HREF],c.ROUTER_CONFIGURATION]),o.ɵmpd(512,d.Location,d.Location,[d.LocationStrategy]),o.ɵmpd(512,o.Compiler,o.Compiler,[]),o.ɵmpd(512,o.NgModuleFactoryLoader,o.SystemJsNgModuleLoader,[o.Compiler,[2,o.SystemJsNgModuleLoaderConfig]]),o.ɵmpd(1024,c.ROUTES,function(){return[[{path:"app",children:[{path:"feature-a",loadChildren:"./views/feature-a-view/feature-a-view.module#FeatureAViewModule"},{path:"feature-b",loadChildren:"./views/feature-b-view/feature-b-view.module#FeatureBViewModule"},{outlet:"aside",path:"aside",loadChildren:"./views/aside-view/aside-view.module#AsideViewModule"},{path:"feature-c",component:_.FeatureCViewComponent}]},{path:"",pathMatch:"full",redirectTo:"app"},{path:"**",redirectTo:"/app"}]]},[]),o.ɵmpd(1024,c.Router,c.ɵangular_packages_router_router_f,[o.ApplicationRef,c.UrlSerializer,c.ChildrenOutletContexts,d.Location,o.Injector,o.NgModuleFactoryLoader,o.Compiler,c.ROUTES,c.ROUTER_CONFIGURATION,[2,c.UrlHandlingStrategy],[2,c.RouteReuseStrategy]]),o.ɵmpd(1073742336,c.RouterModule,c.RouterModule,[[2,c.ɵangular_packages_router_router_a],[2,c.Router]]),o.ɵmpd(1073742336,r.AppModule,r.AppModule,[]),o.ɵmpd(256,o.ɵAPP_ROOT,!0,[])])});n.AppModuleNgFactory=m},zn8P:function(e,n,t){var o={"./sub-b-view/sub-b-view.module.ngfactory":["BRqB",1],"./views/aside-view/aside-view.module.ngfactory":["yDi7",4],"./views/feature-a-view/feature-a-view.module.ngfactory":["kElo",2],"./views/feature-b-view/feature-b-view.module.ngfactory":["BtzB",3]};function r(e){var n=o[e];return n?t.e(n[1]).then(function(){var e=n[0];return t.t(e,7)}):Promise.resolve().then(function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n})}r.keys=function(){return Object.keys(o)},r.id="zn8P",e.exports=r}},[["0ZzE",6,5]]]);
//# sourceMappingURL=main.bfca76f50be26749f9b4.js.map