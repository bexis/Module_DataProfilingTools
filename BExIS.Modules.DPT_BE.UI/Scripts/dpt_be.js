var app=function(){"use strict";function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function l(t){t.forEach(e)}function r(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(t,e,o,l){return t[1]&&l?n(o.ctx.slice(),t[1](l(e))):o.ctx}function i(t,n){const e={};n=new Set(n);for(const o in t)n.has(o)||"$"===o[0]||(e[o]=t[o]);return e}function u(t,n){t.appendChild(n)}function f(t,n,e){t.insertBefore(n,e||null)}function a(t){t.parentNode.removeChild(t)}function d(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function p(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function h(){return m(" ")}function b(){return m("")}function g(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function $(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function x(t,n){const e=Object.getOwnPropertyDescriptors(t.__proto__);for(const o in n)null==n[o]?t.removeAttribute(o):"style"===o?t.style.cssText=n[o]:"__value"===o?t.value=t[o]=n[o]:e[o]&&e[o].set?t[o]=n[o]:$(t,o,n[o])}function y(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function v(t,n){t.value=null==n?"":n}function _(t,n,e,o){null===e?t.style.removeProperty(n):t.style.setProperty(n,e,o?"important":"")}let P;function C(t){P=t}function N(t){(function(){if(!P)throw new Error("Function called outside component initialization");return P})().$$.on_mount.push(t)}const k=[],w=[],L=[],E=[],O=Promise.resolve();let T=!1;function A(t){L.push(t)}const j=new Set;let F=0;function I(){const t=P;do{for(;F<k.length;){const t=k[F];F++,C(t),z(t.$$)}for(C(null),k.length=0,F=0;w.length;)w.pop()();for(let t=0;t<L.length;t+=1){const n=L[t];j.has(n)||(j.add(n),n())}L.length=0}while(k.length);for(;E.length;)E.pop()();T=!1,j.clear(),C(t)}function z(t){if(null!==t.fragment){t.update(),l(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(A)}}const D=new Set;let B;function R(t,n){t&&t.i&&(D.delete(t),t.i(n))}function S(t,n,e,o){if(t&&t.o){if(D.has(t))return;D.add(t),B.c.push((()=>{D.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}else o&&o()}function H(t,n,o,s){const{fragment:c,on_mount:i,on_destroy:u,after_update:f}=t.$$;c&&c.m(n,o),s||A((()=>{const n=i.map(e).filter(r);u?u.push(...n):l(n),t.$$.on_mount=[]})),f.forEach(A)}function M(t,n){const e=t.$$;null!==e.fragment&&(l(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function V(t,n){-1===t.$$.dirty[0]&&(k.push(t),T||(T=!0,O.then(I)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function J(n,e,r,s,c,i,u,f=[-1]){const d=P;C(n);const p=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(d?d.$$.context:[])),callbacks:o(),dirty:f,skip_bound:!1,root:e.target||d.$$.root};u&&u(p.root);let m=!1;if(p.ctx=r?r(n,e.props||{},((t,e,...o)=>{const l=o.length?o[0]:e;return p.ctx&&c(p.ctx[t],p.ctx[t]=l)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](l),m&&V(n,t)),e})):[],p.update(),m=!0,l(p.before_update),p.fragment=!!s&&s(p.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);p.fragment&&p.fragment.l(t),t.forEach(a)}else p.fragment&&p.fragment.c();e.intro&&R(n.$$.fragment),H(n,e.target,e.anchor,e.customElement),I()}C(d)}class G{$destroy(){M(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function U(t){let n="";if("string"==typeof t||"number"==typeof t)n+=t;else if("object"==typeof t)if(Array.isArray(t))n=t.map(U).filter(Boolean).join(" ");else for(let e in t)t[e]&&(n&&(n+=" "),n+=e);return n}function q(t){let e,o,l;const r=t[7].default,s=function(t,n,e,o){if(t){const l=c(t,n,e,o);return t[0](l)}}(r,t,t[6],null),i=s||function(t){let n;return{c(){n=m("Loading...")},m(t,e){f(t,n,e)},d(t){t&&a(n)}}}();let d=[t[1],{role:"status"},{class:t[0]}],h={};for(let t=0;t<d.length;t+=1)h=n(h,d[t]);return{c(){e=p("div"),o=p("span"),i&&i.c(),$(o,"class","visually-hidden"),x(e,h)},m(t,n){f(t,e,n),u(e,o),i&&i.m(o,null),l=!0},p(t,[n]){s&&s.p&&(!l||64&n)&&function(t,n,e,o,l,r){if(l){const s=c(n,e,o,r);t.p(s,l)}}(s,r,t,t[6],l?function(t,n,e,o){if(t[2]&&o){const l=t[2](o(e));if(void 0===n.dirty)return l;if("object"==typeof l){const t=[],e=Math.max(n.dirty.length,l.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|l[o];return t}return n.dirty|l}return n.dirty}(r,t[6],n,null):function(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let t=0;t<e;t++)n[t]=-1;return n}return-1}(t[6]),null),x(e,h=function(t,n){const e={},o={},l={$$scope:1};let r=t.length;for(;r--;){const s=t[r],c=n[r];if(c){for(const t in s)t in c||(o[t]=1);for(const t in c)l[t]||(e[t]=c[t],l[t]=1);t[r]=c}else for(const t in s)l[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}(d,[2&n&&t[1],{role:"status"},(!l||1&n)&&{class:t[0]}]))},i(t){l||(R(i,t),l=!0)},o(t){S(i,t),l=!1},d(t){t&&a(e),i&&i.d(t)}}}function K(t,e,o){let l;const r=["class","type","size","color"];let s=i(e,r),{$$slots:c={},$$scope:u}=e,{class:f=""}=e,{type:a="border"}=e,{size:d=""}=e,{color:p=""}=e;return t.$$set=t=>{e=n(n({},e),function(t){const n={};for(const e in t)"$"!==e[0]&&(n[e]=t[e]);return n}(t)),o(1,s=i(e,r)),"class"in t&&o(2,f=t.class),"type"in t&&o(3,a=t.type),"size"in t&&o(4,d=t.size),"color"in t&&o(5,p=t.color),"$$scope"in t&&o(6,u=t.$$scope)},t.$$.update=()=>{60&t.$$.dirty&&o(0,l=function(...t){return t.map(U).filter(Boolean).join(" ")}(f,!!d&&`spinner-${a}-${d}`,`spinner-${a}`,!!p&&`text-${p}`))},[l,s,f,a,d,p,u,c]}class Q extends G{constructor(t){super(),J(this,t,K,q,s,{class:2,type:3,size:4,color:5})}}function W(t,n,e){const o=t.slice();return o[17]=n[e],o[19]=e,o}function X(t,n,e){const o=t.slice();return o[17]=n[e],o[19]=e,o}function Y(t){let n,e,o,r,s,c,i,d,b,x,v,P,C;return{c(){n=p("div"),e=p("input"),o=m(" File header exist\r\n\t\t"),r=p("form"),s=p("input"),c=p("br"),i=h(),d=p("input"),b=h(),x=p("p"),v=m(t[5]),$(e,"type","checkbox"),$(s,"type","file"),$(d,"type","submit"),d.value="Submit",$(d,"class","bx-button small function"),_(x,"color","red"),_(x,"width","400px"),$(n,"class","boxLeft svelte-1f7li9m")},m(l,a){var p;f(l,n,a),u(n,e),e.checked=t[3],u(n,o),u(n,r),u(r,s),u(r,c),u(r,i),u(r,d),u(r,b),u(r,x),u(x,v),P||(C=[g(e,"change",t[13]),g(s,"change",t[14]),g(r,"submit",(p=t[7],function(t){return t.preventDefault(),p.call(this,t)}))],P=!0)},p(t,n){8&n&&(e.checked=t[3]),32&n&&y(v,t[5])},d(t){t&&a(n),P=!1,l(C)}}}function Z(n){let e,o,r,s,c;return{c(){e=p("button"),e.textContent="Run",o=h(),r=p("button"),r.textContent="Clear",$(e,"class","bx-button small function bx-disabled"),$(r,"class","bx-button small function bx-disabled")},m(t,l){f(t,e,l),f(t,o,l),f(t,r,l),s||(c=[g(e,"click",n[8]),g(r,"click",n[9])],s=!0)},p:t,d(t){t&&a(e),t&&a(o),t&&a(r),s=!1,l(c)}}}function tt(n){let e,o,r,s,c;return{c(){e=p("button"),e.textContent="Run",o=h(),r=p("button"),r.textContent="Clear",$(e,"class","bx-button small function"),$(r,"class","bx-button small function")},m(t,l){f(t,e,l),f(t,o,l),f(t,r,l),s||(c=[g(e,"click",n[8]),g(r,"click",n[9])],s=!0)},p:t,d(t){t&&a(e),t&&a(o),t&&a(r),s=!1,l(c)}}}function nt(n){let e,o,l;return o=new Q({props:{color:"primary",size:"sm"}}),{c(){var t;e=p("div"),(t=o.$$.fragment)&&t.c(),$(e,"class","spinnerBox svelte-1f7li9m")},m(t,n){f(t,e,n),H(o,e,null),l=!0},p:t,i(t){l||(R(o.$$.fragment,t),l=!0)},o(t){S(o.$$.fragment,t),l=!1},d(t){t&&a(e),M(o)}}}function et(n){let e,o,l,r,s,c,i,b,g,x,v,_,P,C,N,k,w,L,E,O,T,A,j,F,I,z,D,B,R,S,H,M,V=n[1].NumberOfAllPlots+"",J=n[1].NumberOfDuplicates+"",G=n[1].PlotProfiling.PlotTypeCounters,U=[];for(let t=0;t<G.length;t+=1)U[t]=ot(X(n,G,t));function q(t,n){return 1==t[1].PlotProfiling.JointExperimentForest?rt:lt}let K=q(n),Q=K(n);function W(t,n){return 1==t[1].PlotProfiling.JointExperimentGrld?ct:st}let Y=W(n),Z=Y(n);function tt(t,n){return t[1].NotVaildPlotIds.length>0?ut:it}let nt=tt(n),et=nt(n);return{c(){e=p("div"),o=p("p"),o.textContent="Result",l=h(),r=p("ul"),s=p("li"),s.innerHTML="<b>Number of plots</b>",c=h();for(let t=0;t<U.length;t+=1)U[t].c();i=h(),b=p("li"),b.innerHTML="<b>Joint Experiment 2020</b>",g=h(),x=p("p"),v=p("b"),v.textContent="Forest:",_=h(),Q.c(),P=h(),C=p("p"),N=p("b"),N.textContent="Grassland:",k=h(),Z.c(),w=h(),L=p("li"),L.innerHTML="<b>Further details</b>",E=h(),O=p("p"),T=p("b"),T.textContent="Number of entered plots:",A=h(),j=m(V),F=h(),I=p("p"),z=p("b"),z.textContent="Number of duplicate plots:",D=h(),B=m(J),R=h(),S=p("p"),H=p("b"),H.textContent="Non-valid plots:",M=h(),et.c(),$(o,"class","dtm-para_green svelte-1f7li9m"),$(x,"class","resultList svelte-1f7li9m"),$(C,"class","resultList svelte-1f7li9m"),$(O,"class","resultList svelte-1f7li9m"),$(I,"class","resultList svelte-1f7li9m"),$(S,"class","resultList-overflow svelte-1f7li9m"),$(e,"class","boxOuter svelte-1f7li9m"),$(e,"id","results")},m(t,n){f(t,e,n),u(e,o),u(e,l),u(e,r),u(r,s),u(r,c);for(let t=0;t<U.length;t+=1)U[t].m(r,null);u(r,i),u(r,b),u(r,g),u(r,x),u(x,v),u(x,_),Q.m(x,null),u(r,P),u(r,C),u(C,N),u(C,k),Z.m(C,null),u(r,w),u(r,L),u(r,E),u(r,O),u(O,T),u(O,A),u(O,j),u(r,F),u(r,I),u(I,z),u(I,D),u(I,B),u(r,R),u(r,S),u(S,H),u(S,M),et.m(S,null)},p(t,n){if(2&n){let e;for(G=t[1].PlotProfiling.PlotTypeCounters,e=0;e<G.length;e+=1){const o=X(t,G,e);U[e]?U[e].p(o,n):(U[e]=ot(o),U[e].c(),U[e].m(r,i))}for(;e<U.length;e+=1)U[e].d(1);U.length=G.length}K!==(K=q(t))&&(Q.d(1),Q=K(t),Q&&(Q.c(),Q.m(x,null))),Y!==(Y=W(t))&&(Z.d(1),Z=Y(t),Z&&(Z.c(),Z.m(C,null))),2&n&&V!==(V=t[1].NumberOfAllPlots+"")&&y(j,V),2&n&&J!==(J=t[1].NumberOfDuplicates+"")&&y(B,J),nt===(nt=tt(t))&&et?et.p(t,n):(et.d(1),et=nt(t),et&&(et.c(),et.m(S,null)))},i:t,o:t,d(t){t&&a(e),d(U,t),Q.d(),Z.d(),et.d()}}}function ot(t){let n,e,o,l,r,s,c,i=t[17].PlotType+"",d=t[17].Number+"";return{c(){n=p("p"),e=p("b"),o=m("Number of "),l=m(i),r=m(":"),s=h(),c=m(d),$(n,"class","resultList svelte-1f7li9m")},m(t,i){f(t,n,i),u(n,e),u(e,o),u(e,l),u(e,r),u(n,s),u(n,c)},p(t,n){2&n&&i!==(i=t[17].PlotType+"")&&y(l,i),2&n&&d!==(d=t[17].Number+"")&&y(c,d)},d(t){t&&a(n)}}}function lt(t){let n;return{c(){n=m("no")},m(t,e){f(t,n,e)},d(t){t&&a(n)}}}function rt(t){let n;return{c(){n=m("yes")},m(t,e){f(t,n,e)},d(t){t&&a(n)}}}function st(t){let n;return{c(){n=m("no")},m(t,e){f(t,n,e)},d(t){t&&a(n)}}}function ct(t){let n;return{c(){n=m("yes")},m(t,e){f(t,n,e)},d(t){t&&a(n)}}}function it(n){let e;return{c(){e=m("none")},m(t,n){f(t,e,n)},p:t,d(t){t&&a(e)}}}function ut(t){let n,e=t[1].NotVaildPlotIds,o=[];for(let n=0;n<e.length;n+=1)o[n]=at(W(t,e,n));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();n=b()},m(t,e){for(let n=0;n<o.length;n+=1)o[n].m(t,e);f(t,n,e)},p(t,l){if(2&l){let r;for(e=t[1].NotVaildPlotIds,r=0;r<e.length;r+=1){const s=W(t,e,r);o[r]?o[r].p(s,l):(o[r]=at(s),o[r].c(),o[r].m(n.parentNode,n))}for(;r<o.length;r+=1)o[r].d(1);o.length=e.length}},d(t){d(o,t),t&&a(n)}}}function ft(t){let n;return{c(){n=m(",")},m(t,e){f(t,n,e)},d(t){t&&a(n)}}}function at(t){let n,e,o=t[17]+"",l=t[19]<t[1].NotVaildPlotIds.length-1&&ft();return{c(){n=m(o),l&&l.c(),e=b()},m(t,o){f(t,n,o),l&&l.m(t,o),f(t,e,o)},p(t,r){2&r&&o!==(o=t[17]+"")&&y(n,o),t[19]<t[1].NotVaildPlotIds.length-1?l||(l=ft(),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},d(t){t&&a(n),l&&l.d(t),t&&a(e)}}}function dt(t){let n,e,o,r,s,c,i,d,m,b,x,y,_,P,C,N,k,w,L,E,O,T,A,j,F,I,z,D,H,M,V,J,G=1==t[2]&&Y(t);function U(t,n){return t[6]?tt:Z}let q=U(t),K=q(t);const Q=[et,nt],W=[];function X(t,n){return t[1]?0:1==t[4]?1:-1}return~(D=X(t))&&(H=W[D]=Q[D](t)),{c(){n=p("main"),e=p("div"),o=p("div"),r=p("p"),r.textContent="Count and check plot IDs",s=h(),c=p("p"),c.textContent="Enter plot IDs or upload a file. Allowed separators: comma, semicolon, space characters and enter. Also in combination.",i=h(),d=p("div"),m=p("b"),m.textContent="Plots:",b=p("br"),x=h(),y=p("textarea"),_=p("br"),P=h(),C=p("input"),N=h(),k=p("b"),k.textContent="File upload (.csv, .txt)",w=h(),G&&G.c(),L=h(),E=p("hr"),O=h(),T=p("div"),K.c(),A=h(),j=p("br"),F=h(),I=p("p"),z=h(),H&&H.c(),$(r,"class","dtm-para_green svelte-1f7li9m"),$(c,"class","text svelte-1f7li9m"),$(y,"class","svelte-1f7li9m"),$(C,"type","checkbox"),$(d,"class","boxLeft svelte-1f7li9m"),$(E,"class","dtm-para_green svelte-1f7li9m"),$(I,"class","errors"),$(T,"class","buttonList svelte-1f7li9m"),$(o,"class","boxOuter svelte-1f7li9m"),$(e,"class","container svelte-1f7li9m"),$(n,"class","svelte-1f7li9m")},m(l,a){f(l,n,a),u(n,e),u(e,o),u(o,r),u(o,s),u(o,c),u(o,i),u(o,d),u(d,m),u(d,b),u(d,x),u(d,y),v(y,t[6]),u(d,_),u(d,P),u(d,C),C.checked=t[2],u(d,N),u(d,k),u(o,w),G&&G.m(o,null),u(o,L),u(o,E),u(o,O),u(o,T),K.m(T,null),u(T,A),u(T,j),u(T,F),u(T,I),u(e,z),~D&&W[D].m(e,null),M=!0,V||(J=[g(y,"input",t[11]),g(C,"change",t[12])],V=!0)},p(t,[n]){64&n&&v(y,t[6]),4&n&&(C.checked=t[2]),1==t[2]?G?G.p(t,n):(G=Y(t),G.c(),G.m(o,L)):G&&(G.d(1),G=null),q===(q=U(t))&&K?K.p(t,n):(K.d(1),K=q(t),K&&(K.c(),K.m(T,A)));let r=D;D=X(t),D===r?~D&&W[D].p(t,n):(H&&(B={r:0,c:[],p:B},S(W[r],1,1,(()=>{W[r]=null})),B.r||l(B.c),B=B.p),~D?(H=W[D],H?H.p(t,n):(H=W[D]=Q[D](t),H.c()),R(H,1),H.m(e,null)):H=null)},i(t){M||(R(H),M=!0)},o(t){S(H),M=!1},d(t){t&&a(n),G&&G.d(),K.d(),~D&&W[D].d(),V=!1,l(J)}}}function pt(t,n,e){let o,l,r=[],s=!1,c=!1,i=!1,u="";const f="/api/DPT_BE/CountPlots";N((async()=>{}));let a="";return[o,l,s,c,i,u,a,()=>{!function(t){if("text/plain"==t.type||"text/csv"==t.type){e(5,u="");const n=new FileReader,o=t;n.readAsText(o),n.onload=function(t){const n=t.target.result;console.log("text",n),e(6,a=n)}}else e(5,u="File format is not supported. Please use .txt or .csv.")}(o[0])},async function(){if(e(4,i=!0),e(1,l=""),c){var t=a.split("\n");t.filter((t=>""!==t.trim())),t.splice(0,1);let n=t.join("\n");r=n.split(/[\r\n,\t\s;]+/)}else r=a.split(/[\r\n,\t\s;]+/).filter((t=>""!==t.trim()));const n=await async function(t,n){let e={plots:n};console.log(e);const o=await fetch(t,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)});return await o.json()}(f,r);console.log(n),e(1,l=n)},function(){e(6,a=""),e(1,l=""),e(4,i=!1)},f,function(){a=this.value,e(6,a)},function(){s=this.checked,e(2,s)},function(){c=this.checked,e(3,c)},function(){o=this.files,e(0,o)}]}return new class extends G{constructor(t){super(),J(this,t,pt,dt,s,{HostURL:10})}get HostURL(){return this.$$.ctx[10]}}({target:document.getElementById("plotProfiling")})}();
//# sourceMappingURL=dpt_be.js.map
