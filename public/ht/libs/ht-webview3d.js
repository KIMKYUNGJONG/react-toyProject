!function(e){"use strict";function k(n){var s,d,r,T,b,f,e,o=[],c=0;s=O.createDiv(),s.style.overflow="hidden";var v=n.getView();v.insertBefore(s,n.getCanvas()),d=I.Default.createDiv(),d.style.WebkitTransformStyle="preserve-3d",d.style.MozTransformStyle="preserve-3d",d.style.transformStyle="preserve-3d",s.appendChild(d),[{event:"mousedown",style:"none"},{event:"mouseup",style:"auto"},{event:"touchstart",style:"none"},{event:"touchend",style:"auto"}].forEach(function(h){var D=h.style;v.addEventListener(h.event,function(){s.style.pointerEvents=D})}),this.updateWebView=function(){var V=n.getCanvas(),U=1*V.style.width.slice(0,-2),P=1*V.style.height.slice(0,-2);(o[0]!==U||o[1]!==P)&&(o[0]=U,o[1]=P,s.style.width=U+"px",s.style.height=P+"px",d.style.width=U+"px",d.style.height=P+"px");var i=n._projectMatrix[5]*o[1]/2;i!==r&&(r=i,s.style.WebkitPerspective=r+"px",s.style.MozPerspective=r+"px",s.style.perspective=r+"px"),f="translateZ("+r+"px)"+R(n._viewMatrix);var m=f+"translate("+o[0]/2+"px,"+o[1]/2+"px)";T===m||b||(d.style.WebkitTransform=m,d.style.MozTransform=m,d.style.transform=m,T=m),c++,e=!1,n.dm().each(function(W){W.isWebView&&S(W)});for(var Y,Q=d.children,L=[],J=0,G=Q.length;G>J;J++)Y=Q[J],Y._isHtWebView&&Y._renderCookie!==c&&L.push(Y);L.length&&L.forEach(function(E){d.removeChild(E)})};var M=new Array(16),S=function(j){var h=j.getAttach();if(h){h.parentElement!==d&&d.appendChild(h),h._renderCookie=c,e=!0;var s=j.getFinalScale3d(),x=j._prefrenceSize;x&&x[0]?x[1]||(x[1]=x[0]/s[0]*s[1]):x=[s[0],s[1]],h.style.width=x[0]+"px",h.style.height=x[1]+"px";var y=1/x[0],U=1/x[1],n=1,X=j.mat;M[0]=X[0]*y,M[1]=X[1]*y,M[2]=X[2]*y,M[3]=X[3]*y,M[4]=X[4]*U,M[5]=X[5]*U,M[6]=X[6]*U,M[7]=X[7]*U,M[8]=X[8]*n,M[9]=X[9]*n,M[10]=X[10]*n,M[11]=X[11]*n,M[12]=X[12],M[13]=X[13],M[14]=X[14],M[15]=X[15];var q=g(M,b?"translate("+o[0]/2+"px,"+o[1]/2+"px)"+f:""),E=h.$a2;E!==q&&(h.$a2=q,h.style.WebkitTransform=q,h.style.MozTransform=q,h.style.transform=q)}}}function K(r){return Math.abs(r)<1e-10?0:r}function R(F){var g=F;return"matrix3d("+K(g[0])+","+K(-g[1])+","+K(g[2])+","+K(g[3])+","+K(g[4])+","+K(-g[5])+","+K(g[6])+","+K(g[7])+","+K(g[8])+","+K(-g[9])+","+K(g[10])+","+K(g[11])+","+K(g[12])+","+K(-g[13])+","+K(g[14])+","+K(g[15])+")"}function g(_,l){var B=_,G="matrix3d("+K(B[0])+","+K(B[1])+","+K(B[2])+","+K(B[3])+","+K(-B[4])+","+K(-B[5])+","+K(-B[6])+","+K(-B[7])+","+K(B[8])+","+K(B[9])+","+K(B[10])+","+K(B[11])+","+K(B[12])+","+K(B[13])+","+K(B[14])+","+K(B[15])+")";return"translate(-50%,-50%)"+(l||"")+G}var M="ht",I=e[M],O=I.Default,f=O.getInternal(),s=f.superCall,c=I.graph3d.Graph3dView,p=c.prototype.validateImpl;c.prototype.validateImpl=function(){p.call(this);var K=this._webViewRenderer;K||(K=this._webViewRenderer=new k(this)),K.updateWebView()};var B=I.WebView3d=function(){var F=this;s(B,F),F.s({shape3d:"billboard","shape3d.reverse.flip":!0})},P=[1,1,1,1],q=[0,0,0,0];O.def(M+"."+"WebView3d",I.Node,{ms_ac:["attach"],isWebView:!0,attachDOM:function(h,U,y){if(!h)return this.detachDOM();if("string"==typeof h){var Z=document.createElement("iframe");Z.src=h,h=Z}var Y=h.style;Y.position="absolute",Y.border=0,Y.outline=0,Y.padding=0,Y.margin=0,h._isHtWebView=!0,this.setAttach(h),this._prefrenceSize=[U,y],this.s("shape3d.blend",q)},detachDOM:function(){this.setAttach(null),this.s("shape3d.blend",this.getBgColor())},setBgColor:function(M){this.a("defaultBgColor",M),this.getAttach()||this.s("shape3d.blend",M)},getBgColor:function(){return this.a("defaultBgColor")||P}})}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);