(function(){"use strict";var e={544:function(e,n,t){var r=t(963),a=t(252);function i(e,n,t,r,i,u){var o=(0,a.up)("BabylonExamples");return(0,a.wg)(),(0,a.j4)(o)}var u=function(e){return(0,a.dD)("data-v-89c6dbee"),e=e(),(0,a.Cn)(),e},o=u((function(){return(0,a._)("h3",null,"Babylon Test Project",-1)})),s=u((function(){return(0,a._)("canvas",null,null,-1)})),c=[o,s];function l(e,n,t,r,i,u){return(0,a.wg)(),(0,a.iD)("div",null,c)}var f=t(909),p=function(){function e(e){var n=this;Object.defineProperty(this,"canvas",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"scene",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"engine",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.engine=new f.D4V(this.canvas,!0),this.scene=this.CreateScene(),this.engine.runRenderLoop((function(){n.scene.render()}))}return Object.defineProperty(e.prototype,"CreateScene",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=new f.xsS(this.engine),n=new f.cEJ("camera",new f.Pa4(0,1,-3.5),this.scene);n.attachControl(),n.speed=.25;var t=new f.ezm("hemiLight",new f.Pa4(0,1,0),this.scene);t.intensity=1;var r=f.VO7.CreateGround("ground",{width:10,height:10},this.scene),a=f.VO7.CreateSphere("ball",{diameter:1},this.scene);return a.position=new f.Pa4(0,1,0),r.material=this.CreateGroundMaterial(),a.material=this.CreateBallMaterial(),e}}),Object.defineProperty(e.prototype,"CreateGroundMaterial",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=new f.KuD("groundMat",this.scene),n=3,t=[],r=new f.xEZ("./textures/stone/Stone_D.png",this.scene);e.diffuseTexture=r,t.push(r);var a=new f.xEZ("./textures/stone/Stone_N.png",this.scene);e.bumpTexture=a,t.push(a);var i=new f.xEZ("./textures/stone/Stone_AO.png",this.scene);e.ambientTexture=i,t.push(i);var u=new f.xEZ("./textures/stone/Stone_S.png",this.scene);return e.specularTexture=u,t.push(u),t.forEach((function(e){e.uScale=n,e.vScale=n})),e}}),Object.defineProperty(e.prototype,"CreateBallMaterial",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=new f.KuD("ballMat",this.scene),n=5,t=[],r=new f.xEZ("./textures/metal/Metal_D.png",this.scene);e.diffuseTexture=r,t.push(r);var a=new f.xEZ("./textures/metal/Metal_N.png",this.scene);e.bumpTexture=a,e.invertNormalMapX=!0,e.invertNormalMapY=!0,t.push(a);var i=new f.xEZ("./textures/metal/Metal_AO.png",this.scene);e.ambientTexture=i,t.push(i);var u=new f.xEZ("./textures/metal/Metal_S.png",this.scene);return e.specularTexture=u,e.specularPower=30,t.push(u),t.forEach((function(e){e.uScale=n,e.vScale=n})),e}}),e}(),h=(0,a.aZ)({name:"BabylonExamples",mounted:function(){var e=document.querySelector("canvas");new p(e)}}),v=t(744);const b=(0,v.Z)(h,[["render",l],["__scopeId","data-v-89c6dbee"]]);var d=b,w=(0,a.aZ)({name:"App",components:{BabylonExamples:d}});const m=(0,v.Z)(w,[["render",i]]);var g=m;(0,r.ri)(g).mount("#app")}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var i=n[r]={exports:{}};return e[r](i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,r,a,i){if(!r){var u=1/0;for(l=0;l<e.length;l++){r=e[l][0],a=e[l][1],i=e[l][2];for(var o=!0,s=0;s<r.length;s++)(!1&i||u>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[s])}))?r.splice(s--,1):(o=!1,i<u&&(u=i));if(o){e.splice(l--,1);var c=a();void 0!==c&&(n=c)}}return n}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,a,i]}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,r){var a,i,u=r[0],o=r[1],s=r[2],c=0;if(u.some((function(n){return 0!==e[n]}))){for(a in o)t.o(o,a)&&(t.m[a]=o[a]);if(s)var l=s(t)}for(n&&n(r);c<u.length;c++)i=u[c],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(l)},r=self["webpackChunkbabylontest2"]=self["webpackChunkbabylontest2"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(544)}));r=t.O(r)})();
//# sourceMappingURL=app.458932df.js.map