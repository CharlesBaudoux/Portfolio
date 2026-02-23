import{s as Ot,q as Te,d as m,i as b,f as rt,ad as Gi,G as bt,R as D,F as ci,b as L,e as x,r as $e,k as X,E as ml,c as G,j as q,I as mi,C as us,a as pe,g as Oe,z as ui,ae as Ll,l as di,aj as cs,af as ti,ag as qi,M as ms,D as dl,t as Ri,u as Fi,S as Ki,T as Zi,n as al,v as ji,w as Yi,x as xi,y as Xi,ak as Zl,h as ds,m as _s,o as hs,p as ys}from"../chunks/scheduler.DOwO_r-Y.js";import{S as Mt,i as Rt,h as gs,d as ae,t as H,a as F,g as ft,c as ut,m as oe,b as fe,e as ue}from"../chunks/index.Yeb2f34e.js";import{aa as Wi,ab as bs,ac as Ss,ad as _l,ae as hl,af as pl,ag as Es,h as ii,f as As,ah as Cs,t as vl,ai as ei,aj as Ts,ak as ks,al as nl,am as ol,an as fl,a7 as Ve,ao as ul,w as $i,ap as ws,aq as Bt,ar as $t,as as pi,y as Ut,at as $l,au as yl,av as gl,aw as es,ax as ts,Q as Lt,a2 as is,a5 as ls,ay as ss,az as Ls,aA as Os,aB as Ms,aC as Rs,a9 as Fs,D as rl,e as Ds,s as Ns,p as Is,a as Ol,r as Ml,C as Hs}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.DIxf2g0u.js";import{w as cl}from"../chunks/entry.CFyaggiO.js";import{h as wt,p as Ps}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as Bs}from"../chunks/stores.DLYYSNmR.js";import{Q as Ni}from"../chunks/QueryViewer.DHltdr0Q.js";function Rl(l){return t=>t.map(i=>{var s;const n={},r=Object.keys(i);for(const f of r){const a=(s=l[f])!=null?s:f;n[a]=i[f]}return n})}function Us(l,e){if(l.length===0||e.length===0)return{};const t=Object.keys(l[0]),i=Object.keys(e[0]),s={};for(const n of t)i.includes(n)&&(s[n]=n);return s}function Gs(l,e,t){for(const i in t){const s=t[i];if(l[s]!==e[i])return!1}return!0}function qs(l,e){return i=>{if(!l.length)return i;const s=Us(i,l),n=Object.keys(l[0]);return i.flatMap(f=>{const a=l.filter(T=>Gs(f,T,s));if(a.length)return a.map(T=>({...f,...T}));const _=Object.fromEntries(n.filter(T=>f[T]==null).map(T=>[T,void 0]));return{...f,..._}})}}function Fl(l){return t=>{const i=t.map(s=>({...s}));for(const s in l){const n=l[s],r=typeof n=="function"?n(i):n,f=r!=null&&r[Symbol.iterator]&&typeof r!="string"?r:t.map(()=>r);let a=-1;for(const _ of i)_[s]=f[++a]}return i}}function Ws(l){return t=>{const i=Vs(l),s=[];for(const n in i){const r=i[n];let f;typeof r=="function"?f=r(t):Array.isArray(r)?f=r:f=Array.from(new Set(t.map(a=>a[n]))),s.push(f.map(a=>({[n]:a})))}return zs(s)}}function zs(l){function e(i,s,n){if(!n.length&&s!=null){i.push(s);return}const r=n[0],f=n.slice(1);for(const a of r)e(i,{...s,...a},f)}const t=[];return e(t,null,l),t}function Vs(l){if(Array.isArray(l)){const e={};for(const t of l)e[t]=t;return e}else if(typeof l=="object")return l;return{[l]:l}}function ns(l){return t=>{const i=[];for(const s of t){const n={...s};for(const r in l)n[r]==null&&(n[r]=l[r]);i.push(n)}return i}}function Dl(l,e){return i=>{const s=Ws(l)(i),n=qs(i)(s);return e?ns(e)(n):n}}function Nl(l,e,t){return l==null||e==null?void 0:e===0&&l===0?0:!t&&e===0?void 0:l/e}function Il(l,e,t){const i=typeof l=="function"?l:f=>f[l],s=f=>f[e],{predicate:n,allowDivideByZero:r}={};return n==null?(f,a,_)=>{const T=s(f),A=i(f,a,_);return Nl(A,T,r)}:(f,a,_)=>{if(!n(f,a,_))return;const T=s(f),A=i(f,a,_);return Nl(A,T,r)}}const Di=Symbol.for("__evidence-chart-window-debug__"),js=(l,e)=>{window[Di]||(window[Di]={}),window[Di][l]=e},Ys=l=>{window[Di]||(window[Di]={}),delete window[Di][l]},Mi=500,xs=(l,e)=>{var E;const t=["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)&&l.clientWidth*3*l.clientHeight*3>16777215;Wi("light",hl),Wi("dark",pl);let i;const s=()=>{i=_l(l,e.theme,{renderer:t?"svg":e.renderer??"canvas"})};s(),js(i.id,i),e.connectGroup&&(i.group=e.connectGroup,bs(e.connectGroup));const n=()=>{if(e.seriesColors){const d=i.getOption();if(!d)return;const M={...d};for(const R of Object.keys(e.seriesColors)){const W=d.series.findIndex(N=>N.name===R);W!==-1&&(M.series[W]={...M.series[W],itemStyle:{...M.series[W].itemStyle,color:e.seriesColors[R]}})}i.setOption(M)}},r=()=>{e.echartsOptions&&i.setOption({...e.echartsOptions})},f=()=>{let d=[];if(e.seriesOptions){const M=e.config.series.reduce((R,{evidenceSeriesType:W},N)=>((W==="reference_line"||W==="reference_area"||W==="reference_point")&&R.push(N),R),[]);for(let R=0;R<e.config.series.length;R++)M.includes(R)?d.push({}):d.push({...e.seriesOptions});i.setOption({series:d})}};i.setOption({...e.config,animationDuration:Mi,animationDurationUpdate:Mi}),n(),r(),f();const a=e.dispatch;i.on("click",function(d){a("click",d)});const _=l.parentElement,T=Ss(()=>{i.resize({animation:{duration:Mi}}),O()},100);let A;window.ResizeObserver&&_?(A=new ResizeObserver(T),A.observe(_)):window.addEventListener("resize",T);const O=()=>{if(e.showAllXAxisLabels){const d=i.getOption();if(!d)return;const M=new Set(d.series.flatMap(N=>{var V;return(V=N.data)==null?void 0:V.map(J=>J[0])})),R=4/5,W=(l==null?void 0:l.clientWidth)??0;if(!e.swapXY){const N={xAxis:{axisLabel:{interval:0,overflow:e.xAxisLabelOverflow,width:W*R/M.size}}};i.setOption(N)}}},k=d=>{d.theme!==e.theme&&(i.dispose(),e=d,s()),e=d,i.setOption({...e.config,animationDuration:Mi,animationDurationUpdate:Mi},!0),n(),r(),f(),i.resize({animation:{duration:Mi}}),O()};return T(),window[E=Symbol.for("chart renders")]??(window[E]=0),window[Symbol.for("chart renders")]++,{update(d){window[Symbol.for("chart renders")]++,k(d)},destroy(){A?A.unobserve(_):window.removeEventListener("resize",T),i.dispose(),Ys(i.id)}}},Xs=(l,e)=>{Wi("light",hl),Wi("dark",pl),console.log("echartsCanvasDownloadAction",e.theme);const t=_l(l,e.theme,{renderer:"canvas"});e.config.animation=!1,t.setOption(e.config);const i=()=>{if(e.seriesColors){const _=t.getOption();if(!_)return;const T={..._};for(const A of Object.keys(e.seriesColors)){const O=_.series.findIndex(k=>k.name===A);O!==-1&&(T.series[O]={...T.series[O],itemStyle:{...T.series[O].itemStyle,color:e.seriesColors[A]}})}t.setOption(T)}},s=()=>{e.echartsOptions&&t.setOption({...e.echartsOptions})},n=()=>{let _=[];if(e.seriesOptions){const T=e.config.series.reduce((A,{evidenceSeriesType:O},k)=>((O==="reference_line"||O==="reference_area"||O==="reference_point")&&A.push(k),A),[]);for(let A=0;A<e.config.series.length;A++)T.includes(A)?_.push({}):_.push({...e.seriesOptions});t.setOption({series:_})}};s(),i(),n();let r=t.getConnectedDataURL({type:"png",pixelRatio:3,backgroundColor:e.backgroundColor,excludeComponents:["toolbox"]});const f=new Date,a=new Date(f.getTime()-f.getTimezoneOffset()*6e4).toISOString().slice(0,19).replaceAll(":","-");return Es(r,(e.evidenceChartTitle??e.queryID??"evidence-chart")+`_${a}.png`),t.dispose(),{destroy(){t.dispose()}}},zi=(l,e)=>{Wi("evidence-light",hl);const{config:t,ratio:i,echartsOptions:s,seriesOptions:n,seriesColors:r,isMap:f,extraHeight:a,width:_}=e;let T={renderer:"canvas"};f&&(T.height=_*.5+a,l&&l.parentNode&&(l.style.height=T.height+"px",l.parentNode.style.height=T.height+"px"));const A=_l(l,"evidence-light",T);t.animation=!1,A.setOption(t),s&&A.setOption(s);const O=()=>{if(r){const M=A.getOption();if(!M)return;const R={...M};for(const W of Object.keys(r)){const N=M.series.findIndex(V=>V.name===W);N!==-1&&(R.series[N]={...R.series[N],itemStyle:{...R.series[N].itemStyle,color:r[W]}})}A.setOption(R)}},k=()=>{s&&A.setOption({...s})},E=()=>{let M=[];if(n){const R=t.series.reduce((W,{evidenceSeriesType:N},V)=>((N==="reference_line"||N==="reference_area"||N==="reference_point")&&W.push(V),W),[]);for(let W=0;W<t.series.length;W++)R.includes(W)?M.push({}):M.push({...n});A.setOption({series:M})}};k(),O(),E();let d=A.getConnectedDataURL({type:"jpeg",pixelRatio:i,backgroundColor:"#fff",excludeComponents:["toolbox"]});l.innerHTML=`<img src=${d} width="100%" style="
        position: absolute; 
        top: 0;
        user-select: all;
        -webkit-user-select: all;
        -moz-user-select: all;
        -ms-user-select: all;
    " />`,e.config.animation=!0};function Qs(l){let e;function t(n,r){return n[9]?Zs:Ks}let i=t(l),s=i(l);return{c(){s.c(),e=rt()},l(n){s.l(n),e=rt()},m(n,r){s.m(n,r),b(n,e,r)},p(n,r){i===(i=t(n))&&s?s.p(n,r):(s.d(1),s=i(n),s&&(s.c(),s.m(e.parentNode,e)))},d(n){n&&m(e),s.d(n)}}}function Js(l){let e,t,i,s;return{c(){e=X("div"),this.h()},l(n){e=x(n,"DIV",{class:!0,style:!0}),$e(e).forEach(m),this.h()},h(){L(e,"class","chart"),D(e,"height",l[1]),D(e,"width",l[2]),D(e,"margin-left","0"),D(e,"margin-top","15px"),D(e,"margin-bottom","10px"),D(e,"overflow","visible"),D(e,"break-inside","avoid")},m(n,r){b(n,e,r),i||(s=ci(t=zi.call(null,e,{config:l[0],ratio:2,echartsOptions:l[5],seriesOptions:l[6],seriesColors:l[13]})),i=!0)},p(n,r){r&2&&D(e,"height",n[1]),r&4&&D(e,"width",n[2]),t&&mi(t.update)&&r&8289&&t.update.call(null,{config:n[0],ratio:2,echartsOptions:n[5],seriesOptions:n[6],seriesColors:n[13]})},d(n){n&&m(e),i=!1,s()}}}function Ks(l){let e,t,i,s,n,r,f;return{c(){e=X("div"),i=q(),s=X("div"),this.h()},l(a){e=x(a,"DIV",{class:!0,style:!0}),$e(e).forEach(m),i=G(a),s=x(a,"DIV",{class:!0,style:!0}),$e(s).forEach(m),this.h()},h(){L(e,"class","chart md:hidden"),D(e,"height",l[1]),D(e,"width","650px"),D(e,"margin-left","0"),D(e,"margin-top","15px"),D(e,"margin-bottom","10px"),D(e,"overflow","visible"),D(e,"break-inside","avoid"),L(s,"class","chart hidden md:block"),D(s,"height",l[1]),D(s,"width","841px"),D(s,"margin-left","0"),D(s,"margin-top","15px"),D(s,"margin-bottom","10px"),D(s,"overflow","visible"),D(s,"break-inside","avoid")},m(a,_){b(a,e,_),b(a,i,_),b(a,s,_),r||(f=[ci(t=zi.call(null,e,{config:l[0],ratio:4,echartsOptions:l[5],seriesOptions:l[6],seriesColors:l[13],isMap:l[7],extraHeight:l[8],width:650})),ci(n=zi.call(null,s,{config:l[0],ratio:4,echartsOptions:l[5],seriesOptions:l[6],seriesColors:l[13],isMap:l[7],extraHeight:l[8],width:841}))],r=!0)},p(a,_){_&2&&D(e,"height",a[1]),t&&mi(t.update)&&_&8673&&t.update.call(null,{config:a[0],ratio:4,echartsOptions:a[5],seriesOptions:a[6],seriesColors:a[13],isMap:a[7],extraHeight:a[8],width:650}),_&2&&D(s,"height",a[1]),n&&mi(n.update)&&_&8673&&n.update.call(null,{config:a[0],ratio:4,echartsOptions:a[5],seriesOptions:a[6],seriesColors:a[13],isMap:a[7],extraHeight:a[8],width:841})},d(a){a&&(m(e),m(i),m(s)),r=!1,ml(f)}}}function Zs(l){let e,t,i,s,n,r,f;return{c(){e=X("div"),i=q(),s=X("div"),this.h()},l(a){e=x(a,"DIV",{class:!0,style:!0}),$e(e).forEach(m),i=G(a),s=x(a,"DIV",{class:!0,style:!0}),$e(s).forEach(m),this.h()},h(){L(e,"class","chart md:hidden"),D(e,"height",l[1]),D(e,"width",l[11]+"px"),D(e,"margin-left","0"),D(e,"margin-top","15px"),D(e,"margin-bottom","10px"),D(e,"overflow","visible"),D(e,"break-inside","avoid"),L(s,"class","chart hidden md:block"),D(s,"height",l[1]),D(s,"width",l[10]+"px"),D(s,"margin-left","0"),D(s,"margin-top","15px"),D(s,"margin-bottom","10px"),D(s,"overflow","visible"),D(s,"break-inside","avoid")},m(a,_){b(a,e,_),b(a,i,_),b(a,s,_),r||(f=[ci(t=zi.call(null,e,{config:l[0],ratio:4,echartsOptions:l[5],seriesOptions:l[6],seriesColors:l[13],isMap:l[7],extraHeight:l[8],width:l[11]})),ci(n=zi.call(null,s,{config:l[0],ratio:4,echartsOptions:l[5],seriesOptions:l[6],seriesColors:l[13],isMap:l[7],extraHeight:l[8],width:l[10]}))],r=!0)},p(a,_){_&2&&D(e,"height",a[1]),_&2048&&D(e,"width",a[11]+"px"),t&&mi(t.update)&&_&10721&&t.update.call(null,{config:a[0],ratio:4,echartsOptions:a[5],seriesOptions:a[6],seriesColors:a[13],isMap:a[7],extraHeight:a[8],width:a[11]}),_&2&&D(s,"height",a[1]),_&1024&&D(s,"width",a[10]+"px"),n&&mi(n.update)&&_&9697&&n.update.call(null,{config:a[0],ratio:4,echartsOptions:a[5],seriesOptions:a[6],seriesColors:a[13],isMap:a[7],extraHeight:a[8],width:a[10]})},d(a){a&&(m(e),m(i),m(s)),r=!1,ml(f)}}}function ps(l){let e;function t(n,r){if(n[3])return Js;if(n[4])return Qs}let i=t(l),s=i&&i(l);return{c(){s&&s.c(),e=rt()},l(n){s&&s.l(n),e=rt()},m(n,r){s&&s.m(n,r),b(n,e,r)},p(n,[r]){i===(i=t(n))&&s?s.p(n,r):(s&&s.d(1),s=i&&i(n),s&&(s.c(),s.m(e.parentNode,e)))},i:Te,o:Te,d(n){n&&m(e),s&&s.d(n)}}}function vs(l,e,t){let i,s,n,r,f,a,_=Te,T=()=>(_(),_=bt(i,g=>t(13,a=g)),i);l.$$.on_destroy.push(()=>_());const{resolveColorsObject:A}=ii();let{config:O=void 0}=e,{height:k="291px"}=e,{width:E="100%"}=e,{copying:d=!1}=e,{printing:M=!1}=e,{echartsOptions:R=void 0}=e,{seriesOptions:W=void 0}=e,{seriesColors:N=void 0}=e,{isMap:V=!1}=e,{extraHeight:J=void 0}=e,j=!1,K,$;const I=Gi("gridConfig");return I&&(j=!0,{cols:K,gapWidth:$}=I),l.$$set=g=>{"config"in g&&t(0,O=g.config),"height"in g&&t(1,k=g.height),"width"in g&&t(2,E=g.width),"copying"in g&&t(3,d=g.copying),"printing"in g&&t(4,M=g.printing),"echartsOptions"in g&&t(5,R=g.echartsOptions),"seriesOptions"in g&&t(6,W=g.seriesOptions),"seriesColors"in g&&t(14,N=g.seriesColors),"isMap"in g&&t(7,V=g.isMap),"extraHeight"in g&&t(8,J=g.extraHeight)},l.$$.update=()=>{l.$$.dirty&16384&&T(t(12,i=A(N))),l.$$.dirty&32768&&t(18,s=Math.min(Number(K),2)),l.$$.dirty&327680&&t(11,n=(650-Number($)*(s-1))/s),l.$$.dirty&32768&&t(17,r=Math.min(Number(K),3)),l.$$.dirty&196608&&t(10,f=(841-Number($)*(r-1))/r)},[O,k,E,d,M,R,W,V,J,j,f,n,i,a,N,K,$,r,s]}class $s extends Mt{constructor(e){super(),Rt(this,e,vs,ps,Ot,{config:0,height:1,width:2,copying:3,printing:4,echartsOptions:5,seriesOptions:6,seriesColors:14,isMap:7,extraHeight:8})}}function en(l){let e,t,i="Loading...",s,n,r;return{c(){e=X("div"),t=X("span"),t.textContent=i,s=q(),n=X("div"),this.h()},l(f){e=x(f,"DIV",{role:!0,class:!0});var a=$e(e);t=x(a,"SPAN",{class:!0,"data-svelte-h":!0}),Oe(t)!=="svelte-1wtojot"&&(t.textContent=i),s=G(a),n=x(a,"DIV",{class:!0,style:!0}),$e(n).forEach(m),a.forEach(m),this.h()},h(){L(t,"class","sr-only"),L(n,"class","bg-base-100 rounded-md max-w-[100%]"),D(n,"height",l[0]),D(n,"margin-top","15px"),D(n,"margin-bottom","31px"),L(e,"role","status"),L(e,"class","animate-pulse")},m(f,a){b(f,e,a),pe(e,t),pe(e,s),pe(e,n)},p(f,[a]){a&1&&D(n,"height",f[0])},i(f){f&&(r||us(()=>{r=gs(e,As,{}),r.start()}))},o:Te,d(f){f&&m(e)}}}function tn(l,e,t){let{height:i="231px"}=e;return l.$$set=s=>{"height"in s&&t(0,i=s.height)},[i]}class ln extends Mt{constructor(e){super(),Rt(this,e,tn,en,Ot,{height:0})}}function Hl(l){let e,t,i,s;const n=[nn,sn],r=[];function f(a,_){return 1}return e=f(),t=r[e]=n[e](l),{c(){t.c(),i=rt()},l(a){t.l(a),i=rt()},m(a,_){r[e].m(a,_),b(a,i,_),s=!0},p(a,_){t.p(a,_)},i(a){s||(F(t),s=!0)},o(a){H(t),s=!1},d(a){a&&m(i),r[e].d(a)}}}function sn(l){let e,t,i,s;return{c(){e=X("div"),this.h()},l(n){e=x(n,"DIV",{class:!0,style:!0}),$e(e).forEach(m),this.h()},h(){L(e,"class","chart svelte-19r8f8"),D(e,"height",l[3]),D(e,"width",l[4]),D(e,"overflow","visible"),D(e,"display",l[15]?"none":"inherit")},m(n,r){b(n,e,r),i||(s=ci(t=xs.call(null,e,{config:l[0],...l[25],echartsOptions:l[9],seriesOptions:l[10],dispatch:l[24],renderer:l[6],connectGroup:l[12],xAxisLabelOverflow:l[13],seriesColors:l[19],theme:l[20]})),i=!0)},p(n,r){r[0]&8&&D(e,"height",n[3]),r[0]&16&&D(e,"width",n[4]),r[0]&32768&&D(e,"display",n[15]?"none":"inherit"),t&&mi(t.update)&&r[0]&35141185&&t.update.call(null,{config:n[0],...n[25],echartsOptions:n[9],seriesOptions:n[10],dispatch:n[24],renderer:n[6],connectGroup:n[12],xAxisLabelOverflow:n[13],seriesColors:n[19],theme:n[20]})},i:Te,o:Te,d(n){n&&m(e),i=!1,s()}}}function nn(l){let e,t;return e=new ln({props:{height:l[3]}}),{c(){ue(e.$$.fragment)},l(i){fe(e.$$.fragment,i)},m(i,s){oe(e,i,s),t=!0},p(i,s){const n={};s[0]&8&&(n.height=i[3]),e.$set(n)},i(i){t||(F(e.$$.fragment,i),t=!0)},o(i){H(e.$$.fragment,i),t=!1},d(i){ae(e,i)}}}function Pl(l){let e,t,i,s=l[8]&&Bl(l),n=l[5]&&l[7]&&Ul(l);return{c(){e=X("div"),s&&s.c(),t=q(),n&&n.c(),this.h()},l(r){e=x(r,"DIV",{class:!0});var f=$e(e);s&&s.l(f),t=G(f),n&&n.l(f),f.forEach(m),this.h()},h(){L(e,"class","chart-footer svelte-19r8f8")},m(r,f){b(r,e,f),s&&s.m(e,null),pe(e,t),n&&n.m(e,null),i=!0},p(r,f){r[8]?s?(s.p(r,f),f[0]&256&&F(s,1)):(s=Bl(r),s.c(),F(s,1),s.m(e,t)):s&&(ft(),H(s,1,1,()=>{s=null}),ut()),r[5]&&r[7]?n?(n.p(r,f),f[0]&160&&F(n,1)):(n=Ul(r),n.c(),F(n,1),n.m(e,null)):n&&(ft(),H(n,1,1,()=>{n=null}),ut())},i(r){i||(F(s),F(n),i=!0)},o(r){H(s),H(n),i=!1},d(r){r&&m(e),s&&s.d(),n&&n.d()}}}function Bl(l){let e,t;return e=new vl({props:{text:"Save Image",class:"download-button",downloadData:l[32],display:l[17],queryID:l[1],$$slots:{default:[rn]},$$scope:{ctx:l}}}),{c(){ue(e.$$.fragment)},l(i){fe(e.$$.fragment,i)},m(i,s){oe(e,i,s),t=!0},p(i,s){const n={};s[0]&16384&&(n.downloadData=i[32]),s[0]&131072&&(n.display=i[17]),s[0]&2&&(n.queryID=i[1]),s[1]&32&&(n.$$scope={dirty:s,ctx:i}),e.$set(n)},i(i){t||(F(e.$$.fragment,i),t=!0)},o(i){H(e.$$.fragment,i),t=!1},d(i){ae(e,i)}}}function rn(l){let e,t,i,s;return{c(){e=Zi("svg"),t=Zi("rect"),i=Zi("circle"),s=Zi("path"),this.h()},l(n){e=Ki(n,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0});var r=$e(e);t=Ki(r,"rect",{x:!0,y:!0,width:!0,height:!0,rx:!0}),$e(t).forEach(m),i=Ki(r,"circle",{cx:!0,cy:!0,r:!0}),$e(i).forEach(m),s=Ki(r,"path",{d:!0}),$e(s).forEach(m),r.forEach(m),this.h()},h(){L(t,"x","3"),L(t,"y","3"),L(t,"width","18"),L(t,"height","18"),L(t,"rx","2"),L(i,"cx","8.5"),L(i,"cy","8.5"),L(i,"r","1.5"),L(s,"d","M20.4 14.5L16 10 4 20"),L(e,"xmlns","http://www.w3.org/2000/svg"),L(e,"width","12"),L(e,"height","12"),L(e,"viewBox","0 0 24 24"),L(e,"fill","none"),L(e,"stroke","#000"),L(e,"stroke-width","2"),L(e,"stroke-linecap","round"),L(e,"stroke-linejoin","round")},m(n,r){b(n,e,r),pe(e,t),pe(e,i),pe(e,s)},p:Te,d(n){n&&m(e)}}}function Ul(l){let e,t;return e=new vl({props:{text:"Download Data",data:l[5],queryID:l[1],class:"download-button",display:l[17]}}),{c(){ue(e.$$.fragment)},l(i){fe(e.$$.fragment,i)},m(i,s){oe(e,i,s),t=!0},p(i,s){const n={};s[0]&32&&(n.data=i[5]),s[0]&2&&(n.queryID=i[1]),s[0]&131072&&(n.display=i[17]),e.$set(n)},i(i){t||(F(e.$$.fragment,i),t=!0)},o(i){H(e.$$.fragment,i),t=!1},d(i){ae(e,i)}}}function Gl(l){let e,t;return e=new Cs({props:{source:JSON.stringify(l[0],void 0,3),copyToClipboard:!0,$$slots:{default:[an]},$$scope:{ctx:l}}}),{c(){ue(e.$$.fragment)},l(i){fe(e.$$.fragment,i)},m(i,s){oe(e,i,s),t=!0},p(i,s){const n={};s[0]&1&&(n.source=JSON.stringify(i[0],void 0,3)),s[0]&1|s[1]&32&&(n.$$scope={dirty:s,ctx:i}),e.$set(n)},i(i){t||(F(e.$$.fragment,i),t=!0)},o(i){H(e.$$.fragment,i),t=!1},d(i){ae(e,i)}}}function an(l){let e=JSON.stringify(l[0],void 0,3)+"",t;return{c(){t=Fi(e)},l(i){t=Ri(i,e)},m(i,s){b(i,t,s)},p(i,s){s[0]&1&&e!==(e=JSON.stringify(i[0],void 0,3)+"")&&dl(t,e)},d(i){i&&m(t)}}}function ql(l){let e,t,i,s;return{c(){e=X("div"),this.h()},l(n){e=x(n,"DIV",{class:!0,style:!0}),$e(e).forEach(m),this.h()},h(){L(e,"class","chart svelte-19r8f8"),D(e,"display","none"),D(e,"visibility","visible"),D(e,"height",l[3]),D(e,"width","666px"),D(e,"margin-left","0"),D(e,"margin-top","15px"),D(e,"margin-bottom","15px"),D(e,"overflow","visible")},m(n,r){b(n,e,r),i||(s=ci(t=Xs.call(null,e,{config:l[0],...l[25],echartsOptions:l[9],seriesOptions:l[10],seriesColors:l[19],queryID:l[1],evidenceChartTitle:l[2],theme:l[20],backgroundColor:l[21].colors["base-100"]})),i=!0)},p(n,r){r[0]&8&&D(e,"height",n[3]),t&&mi(t.update)&&r[0]&37225991&&t.update.call(null,{config:n[0],...n[25],echartsOptions:n[9],seriesOptions:n[10],seriesColors:n[19],queryID:n[1],evidenceChartTitle:n[2],theme:n[20],backgroundColor:n[21].colors["base-100"]})},d(n){n&&m(e),i=!1,s()}}}function on(l){let e,t,i,s,n,r,f,a,_,T,A=!l[16]&&Hl(l);i=new $s({props:{config:l[0],height:l[3],width:l[4],copying:l[15],printing:l[16],echartsOptions:l[9],seriesOptions:l[10],seriesColors:l[18]}});let O=(l[7]||l[8])&&Pl(l),k=l[11]&&!l[16]&&Gl(l),E=l[14]&&ql(l);return{c(){e=X("div"),A&&A.c(),t=q(),ue(i.$$.fragment),s=q(),O&&O.c(),n=q(),k&&k.c(),r=q(),E&&E.c(),f=rt(),this.h()},l(d){e=x(d,"DIV",{role:!0,class:!0});var M=$e(e);A&&A.l(M),t=G(M),fe(i.$$.fragment,M),s=G(M),O&&O.l(M),n=G(M),k&&k.l(M),M.forEach(m),r=G(d),E&&E.l(d),f=rt(),this.h()},h(){L(e,"role","none"),L(e,"class","chart-container mt-2 mb-3 svelte-19r8f8")},m(d,M){b(d,e,M),A&&A.m(e,null),pe(e,t),oe(i,e,null),pe(e,s),O&&O.m(e,null),pe(e,n),k&&k.m(e,null),b(d,r,M),E&&E.m(d,M),b(d,f,M),a=!0,_||(T=[ui(window,"copy",l[27]),ui(window,"beforeprint",l[28]),ui(window,"afterprint",l[29]),ui(window,"export-beforeprint",l[30]),ui(window,"export-afterprint",l[31]),ui(e,"mouseenter",l[33]),ui(e,"mouseleave",l[34])],_=!0)},p(d,M){d[16]?A&&(ft(),H(A,1,1,()=>{A=null}),ut()):A?(A.p(d,M),M[0]&65536&&F(A,1)):(A=Hl(d),A.c(),F(A,1),A.m(e,t));const R={};M[0]&1&&(R.config=d[0]),M[0]&8&&(R.height=d[3]),M[0]&16&&(R.width=d[4]),M[0]&32768&&(R.copying=d[15]),M[0]&65536&&(R.printing=d[16]),M[0]&512&&(R.echartsOptions=d[9]),M[0]&1024&&(R.seriesOptions=d[10]),M[0]&262144&&(R.seriesColors=d[18]),i.$set(R),d[7]||d[8]?O?(O.p(d,M),M[0]&384&&F(O,1)):(O=Pl(d),O.c(),F(O,1),O.m(e,n)):O&&(ft(),H(O,1,1,()=>{O=null}),ut()),d[11]&&!d[16]?k?(k.p(d,M),M[0]&67584&&F(k,1)):(k=Gl(d),k.c(),F(k,1),k.m(e,null)):k&&(ft(),H(k,1,1,()=>{k=null}),ut()),d[14]?E?E.p(d,M):(E=ql(d),E.c(),E.m(f.parentNode,f)):E&&(E.d(1),E=null)},i(d){a||(F(A),F(i.$$.fragment,d),F(O),F(k),a=!0)},o(d){H(A),H(i.$$.fragment,d),H(O),H(k),a=!1},d(d){d&&(m(e),m(r),m(f)),A&&A.d(),ae(i),O&&O.d(),k&&k.d(),E&&E.d(d),_=!1,ml(T)}}}function fn(l,e,t){let i;const s=["config","queryID","evidenceChartTitle","height","width","data","renderer","downloadableData","downloadableImage","echartsOptions","seriesOptions","printEchartsConfig","seriesColors","connectGroup","xAxisLabelOverflow"];let n=Ll(e,s),r,f=Te,a=()=>(f(),f=bt(i,B=>t(19,r=B)),i),_,T;l.$$.on_destroy.push(()=>f());const{activeAppearance:A,theme:O,resolveColorsObject:k}=ii();di(l,A,B=>t(20,_=B)),di(l,O,B=>t(21,T=B));let{config:E=void 0}=e,{queryID:d=void 0}=e,{evidenceChartTitle:M=void 0}=e,{height:R="291px"}=e,{width:W="100%"}=e,{data:N}=e,{renderer:V=void 0}=e,{downloadableData:J=void 0}=e,{downloadableImage:j=void 0}=e,{echartsOptions:K=void 0}=e,{seriesOptions:$=void 0}=e,{printEchartsConfig:I}=e,{seriesColors:g=void 0}=e,{connectGroup:U=void 0}=e,{xAxisLabelOverflow:P=void 0}=e;const w=cs();let Y=!1,z=!1,ee=!1,he=!1;const ne=()=>{t(15,z=!0),ms(),setTimeout(()=>{t(15,z=!1)},0)},ie=()=>t(16,ee=!0),be=()=>t(16,ee=!1),se=()=>t(16,ee=!0),v=()=>t(16,ee=!1),te=()=>{t(14,Y=!0),setTimeout(()=>{t(14,Y=!1)},0)},ce=()=>t(17,he=!0),me=()=>t(17,he=!1);return l.$$set=B=>{e=ti(ti({},e),qi(B)),t(25,n=Ll(e,s)),"config"in B&&t(0,E=B.config),"queryID"in B&&t(1,d=B.queryID),"evidenceChartTitle"in B&&t(2,M=B.evidenceChartTitle),"height"in B&&t(3,R=B.height),"width"in B&&t(4,W=B.width),"data"in B&&t(5,N=B.data),"renderer"in B&&t(6,V=B.renderer),"downloadableData"in B&&t(7,J=B.downloadableData),"downloadableImage"in B&&t(8,j=B.downloadableImage),"echartsOptions"in B&&t(9,K=B.echartsOptions),"seriesOptions"in B&&t(10,$=B.seriesOptions),"printEchartsConfig"in B&&t(11,I=B.printEchartsConfig),"seriesColors"in B&&t(26,g=B.seriesColors),"connectGroup"in B&&t(12,U=B.connectGroup),"xAxisLabelOverflow"in B&&t(13,P=B.xAxisLabelOverflow)},l.$$.update=()=>{l.$$.dirty[0]&67108864&&a(t(18,i=k(g)))},[E,d,M,R,W,N,V,J,j,K,$,I,U,P,Y,z,ee,he,i,r,_,T,A,O,w,n,g,ne,ie,be,se,v,te,ce,me]}class un extends Mt{constructor(e){super(),Rt(this,e,fn,on,Ot,{config:0,queryID:1,evidenceChartTitle:2,height:3,width:4,data:5,renderer:6,downloadableData:7,downloadableImage:8,echartsOptions:9,seriesOptions:10,printEchartsConfig:11,seriesColors:26,connectGroup:12,xAxisLabelOverflow:13},null,[-1,-1])}}function Vi(l,e){const t=new Set(l.map(i=>i[e]));return Array.from(t)}function cn(l,e){return ei(l,Ts({count:ks(e)}))[0].count}function mn(l,e,t){let i;if(typeof t!="object")i=ei(l,ol(e,Fl({xTotal:fl(t)})),nl({percentOfX:Il(t,"xTotal")}),Rl({percentOfX:t+"_pct"}));else{i=ei(l,nl({valueSum:0}));for(let s=0;s<i.length;s++){i[s].valueSum=0;for(let n=0;n<t.length;n++)i[s].valueSum=i[s].valueSum+i[s][t[n]]}i=ei(i,ol(e,Fl({xTotal:fl("valueSum")})));for(let s=0;s<t.length;s++)i=ei(i,nl({percentOfX:Il(t[s],"xTotal")}),Rl({percentOfX:t[s]+"_pct"}))}return i}function Ui(l,e,t){return[...l].sort((i,s)=>(i[e]<s[e]?-1:1)*(t?1:-1))}function rs(l,e,t){const i=e+t;return l%i<e?0:1}function dn(l){let e,t;return e=new es({props:{error:l[14],title:l[8]}}),{c(){ue(e.$$.fragment)},l(i){fe(e.$$.fragment,i)},m(i,s){oe(e,i,s),t=!0},p(i,s){const n={};s[0]&16384&&(n.error=i[14]),s[0]&256&&(n.title=i[8]),e.$set(n)},i(i){t||(F(e.$$.fragment,i),t=!0)},o(i){H(e.$$.fragment,i),t=!1},d(i){ae(e,i)}}}function _n(l){let e,t,i;const s=l[136].default,n=ji(s,l,l[135],null);return t=new un({props:{config:l[20],height:l[15],width:l[13],data:l[0],queryID:l[6],evidenceChartTitle:l[7],showAllXAxisLabels:l[1],swapXY:l[3],echartsOptions:l[9],seriesOptions:l[10],printEchartsConfig:l[2],renderer:l[11],downloadableData:l[4],downloadableImage:l[5],connectGroup:l[12],xAxisLabelOverflow:l[23],seriesColors:l[16]}}),{c(){n&&n.c(),e=q(),ue(t.$$.fragment)},l(r){n&&n.l(r),e=G(r),fe(t.$$.fragment,r)},m(r,f){n&&n.m(r,f),b(r,e,f),oe(t,r,f),i=!0},p(r,f){n&&n.p&&(!i||f[4]&2048)&&Yi(n,s,r,r[135],i?Xi(s,r[135],f,null):xi(r[135]),null);const a={};f[0]&1048576&&(a.config=r[20]),f[0]&32768&&(a.height=r[15]),f[0]&8192&&(a.width=r[13]),f[0]&1&&(a.data=r[0]),f[0]&64&&(a.queryID=r[6]),f[0]&128&&(a.evidenceChartTitle=r[7]),f[0]&2&&(a.showAllXAxisLabels=r[1]),f[0]&8&&(a.swapXY=r[3]),f[0]&512&&(a.echartsOptions=r[9]),f[0]&1024&&(a.seriesOptions=r[10]),f[0]&4&&(a.printEchartsConfig=r[2]),f[0]&2048&&(a.renderer=r[11]),f[0]&16&&(a.downloadableData=r[4]),f[0]&32&&(a.downloadableImage=r[5]),f[0]&4096&&(a.connectGroup=r[12]),f[0]&65536&&(a.seriesColors=r[16]),t.$set(a)},i(r){i||(F(n,r),F(t.$$.fragment,r),i=!0)},o(r){H(n,r),H(t.$$.fragment,r),i=!1},d(r){r&&m(e),n&&n.d(r),ae(t,r)}}}function hn(l){let e,t,i,s;const n=[_n,dn],r=[];function f(a,_){return a[14]?1:0}return e=f(l),t=r[e]=n[e](l),{c(){t.c(),i=rt()},l(a){t.l(a),i=rt()},m(a,_){r[e].m(a,_),b(a,i,_),s=!0},p(a,_){let T=e;e=f(a),e===T?r[e].p(a,_):(ft(),H(r[T],1,1,()=>{r[T]=null}),ut(),t=r[e],t?t.p(a,_):(t=r[e]=n[e](a),t.c()),F(t,1),t.m(i.parentNode,i))},i(a){s||(F(t),s=!0)},o(a){H(t),s=!1},d(a){a&&m(i),r[e].d(a)}}}function yn(l,e,t){let i,s,n,r,f,a=Te,_=()=>(a(),a=bt(n,c=>t(131,f=c)),n),T,A,O=Te,k=()=>(O(),O=bt(s,c=>t(133,A=c)),s),E,d=Te,M=()=>(d(),d=bt(i,c=>t(134,E=c)),i),R;l.$$.on_destroy.push(()=>a()),l.$$.on_destroy.push(()=>O()),l.$$.on_destroy.push(()=>d());let{$$slots:W={},$$scope:N}=e,V=cl({}),J=cl({});di(l,J,c=>t(20,R=c));const{theme:j,resolveColor:K,resolveColorsObject:$,resolveColorPalette:I}=ii();di(l,j,c=>t(132,T=c));let{data:g=void 0}=e,{queryID:U=void 0}=e,{x:P=void 0}=e,{y:w=void 0}=e,{y2:Y=void 0}=e,{series:z=void 0}=e,{size:ee=void 0}=e,{tooltipTitle:he=void 0}=e,{showAllXAxisLabels:ne=void 0}=e,{printEchartsConfig:ie=!1}=e,be=!!w,se=!!P,{swapXY:v=!1}=e,{title:te=void 0}=e,{subtitle:ce=void 0}=e,{chartType:me="Chart"}=e,{bubble:B=!1}=e,{hist:le=!1}=e,{boxplot:de=!1}=e,Se,{xType:p=void 0}=e,{xAxisTitle:Ee="false"}=e,{xBaseline:Z=!0}=e,{xTickMarks:ye=!1}=e,{xGridlines:Ae=!1}=e,{xAxisLabels:_e=!0}=e,{sort:ke=!0}=e,{xFmt:Ie=void 0}=e,{xMin:we=void 0}=e,{xMax:He=void 0}=e,{yLog:Le=!1}=e,{yType:Pe=Le===!0?"log":"value"}=e,{yLogBase:Me=10}=e,{yAxisTitle:C="false"}=e,{yBaseline:Ce=!1}=e,{yTickMarks:De=!1}=e,{yGridlines:xe=!0}=e,{yAxisLabels:Ne=!0}=e,{yMin:Ye=void 0}=e,{yMax:je=void 0}=e,{yScale:Re=!1}=e,{yFmt:Xe=void 0}=e,{yAxisColor:Qe="true"}=e,{y2AxisTitle:ve="false"}=e,{y2Baseline:Ke=!1}=e,{y2TickMarks:S=!1}=e,{y2Gridlines:ge=!0}=e,{y2AxisLabels:Je=!0}=e,{y2Min:h=void 0}=e,{y2Max:at=void 0}=e,{y2Scale:mt=!1}=e,{y2Fmt:lt=void 0}=e,{y2AxisColor:Wt="true"}=e,{sizeFmt:St=void 0}=e,{colorPalette:Et="default"}=e,{legend:et=void 0}=e,{echartsOptions:st=void 0}=e,{seriesOptions:Qt=void 0}=e,{seriesColors:Ft=void 0}=e,{stackType:ot=void 0}=e,{stacked100:Dt=!1}=e,{chartAreaHeight:tt}=e,{renderer:At=void 0}=e,{downloadableData:u=!0}=e,{downloadableImage:zt=!0}=e,{connectGroup:Nt=void 0}=e,{leftPadding:_i=void 0}=e,{rightPadding:Jt=void 0}=e,{xLabelWrap:It=!1}=e;const hi=It?"break":"truncate";let re,li,Vt=[],dt=[],Ct,Gt,nt,Kt,Ze,it,ct,_t,yi,qt,ht,gi,jt,Tt,Zt,kt,pt,Ht,yt,Ii,Qi,Yt,gt,Be,Ue,Ge,qe,We,ze,o,y,vt,si,ni,bi,Si,xt,Ei,Ai,ri,bl,tl,ai=[],Ci=!0,Xt=[],Hi=[],Pt,Pi,il,oi;return l.$$set=c=>{"data"in c&&t(0,g=c.data),"queryID"in c&&t(6,U=c.queryID),"x"in c&&t(24,P=c.x),"y"in c&&t(25,w=c.y),"y2"in c&&t(49,Y=c.y2),"series"in c&&t(50,z=c.series),"size"in c&&t(51,ee=c.size),"tooltipTitle"in c&&t(52,he=c.tooltipTitle),"showAllXAxisLabels"in c&&t(1,ne=c.showAllXAxisLabels),"printEchartsConfig"in c&&t(2,ie=c.printEchartsConfig),"swapXY"in c&&t(3,v=c.swapXY),"title"in c&&t(7,te=c.title),"subtitle"in c&&t(53,ce=c.subtitle),"chartType"in c&&t(8,me=c.chartType),"bubble"in c&&t(54,B=c.bubble),"hist"in c&&t(55,le=c.hist),"boxplot"in c&&t(56,de=c.boxplot),"xType"in c&&t(26,p=c.xType),"xAxisTitle"in c&&t(27,Ee=c.xAxisTitle),"xBaseline"in c&&t(28,Z=c.xBaseline),"xTickMarks"in c&&t(29,ye=c.xTickMarks),"xGridlines"in c&&t(30,Ae=c.xGridlines),"xAxisLabels"in c&&t(31,_e=c.xAxisLabels),"sort"in c&&t(32,ke=c.sort),"xFmt"in c&&t(57,Ie=c.xFmt),"xMin"in c&&t(58,we=c.xMin),"xMax"in c&&t(59,He=c.xMax),"yLog"in c&&t(33,Le=c.yLog),"yType"in c&&t(60,Pe=c.yType),"yLogBase"in c&&t(61,Me=c.yLogBase),"yAxisTitle"in c&&t(34,C=c.yAxisTitle),"yBaseline"in c&&t(35,Ce=c.yBaseline),"yTickMarks"in c&&t(36,De=c.yTickMarks),"yGridlines"in c&&t(37,xe=c.yGridlines),"yAxisLabels"in c&&t(38,Ne=c.yAxisLabels),"yMin"in c&&t(62,Ye=c.yMin),"yMax"in c&&t(63,je=c.yMax),"yScale"in c&&t(39,Re=c.yScale),"yFmt"in c&&t(64,Xe=c.yFmt),"yAxisColor"in c&&t(65,Qe=c.yAxisColor),"y2AxisTitle"in c&&t(40,ve=c.y2AxisTitle),"y2Baseline"in c&&t(41,Ke=c.y2Baseline),"y2TickMarks"in c&&t(42,S=c.y2TickMarks),"y2Gridlines"in c&&t(43,ge=c.y2Gridlines),"y2AxisLabels"in c&&t(44,Je=c.y2AxisLabels),"y2Min"in c&&t(66,h=c.y2Min),"y2Max"in c&&t(67,at=c.y2Max),"y2Scale"in c&&t(45,mt=c.y2Scale),"y2Fmt"in c&&t(68,lt=c.y2Fmt),"y2AxisColor"in c&&t(69,Wt=c.y2AxisColor),"sizeFmt"in c&&t(70,St=c.sizeFmt),"colorPalette"in c&&t(71,Et=c.colorPalette),"legend"in c&&t(46,et=c.legend),"echartsOptions"in c&&t(9,st=c.echartsOptions),"seriesOptions"in c&&t(10,Qt=c.seriesOptions),"seriesColors"in c&&t(72,Ft=c.seriesColors),"stackType"in c&&t(73,ot=c.stackType),"stacked100"in c&&t(74,Dt=c.stacked100),"chartAreaHeight"in c&&t(47,tt=c.chartAreaHeight),"renderer"in c&&t(11,At=c.renderer),"downloadableData"in c&&t(4,u=c.downloadableData),"downloadableImage"in c&&t(5,zt=c.downloadableImage),"connectGroup"in c&&t(12,Nt=c.connectGroup),"leftPadding"in c&&t(75,_i=c.leftPadding),"rightPadding"in c&&t(76,Jt=c.rightPadding),"xLabelWrap"in c&&t(48,It=c.xLabelWrap),"$$scope"in c&&t(135,N=c.$$scope)},l.$$.update=()=>{var c,Sl,El,Al,Cl,Tl;if(l.$$.dirty[0]&4&&t(2,ie=Ve(ie)),l.$$.dirty[0]&8&&t(3,v=Ve(v)),l.$$.dirty[0]&268435456&&t(28,Z=Ve(Z)),l.$$.dirty[0]&536870912&&t(29,ye=Ve(ye)),l.$$.dirty[0]&1073741824&&t(30,Ae=Ve(Ae)),l.$$.dirty[1]&1&&t(31,_e=Ve(_e)),l.$$.dirty[1]&2&&t(32,ke=Ve(ke)),l.$$.dirty[1]&4&&t(33,Le=Ve(Le)),l.$$.dirty[1]&16&&t(35,Ce=Ve(Ce)),l.$$.dirty[1]&32&&t(36,De=Ve(De)),l.$$.dirty[1]&64&&t(37,xe=Ve(xe)),l.$$.dirty[1]&128&&t(38,Ne=Ve(Ne)),l.$$.dirty[1]&256&&t(39,Re=Ve(Re)),l.$$.dirty[2]&8&&M(t(19,i=K(Qe))),l.$$.dirty[1]&1024&&t(41,Ke=Ve(Ke)),l.$$.dirty[1]&2048&&t(42,S=Ve(S)),l.$$.dirty[1]&4096&&t(43,ge=Ve(ge)),l.$$.dirty[1]&8192&&t(44,Je=Ve(Je)),l.$$.dirty[1]&16384&&t(45,mt=Ve(mt)),l.$$.dirty[2]&128&&k(t(18,s=K(Wt))),l.$$.dirty[2]&512&&_(t(17,n=I(Et))),l.$$.dirty[2]&1024&&t(16,r=$(Ft)),l.$$.dirty[0]&16&&t(4,u=Ve(u)),l.$$.dirty[0]&32&&t(5,zt=Ve(zt)),l.$$.dirty[1]&131072&&t(48,It=Ve(It)),l.$$.dirty[0]&2130731403|l.$$.dirty[1]&2147352575|l.$$.dirty[2]&2147481975|l.$$.dirty[3]&2147483647|l.$$.dirty[4]&2047)try{if(t(14,Pi=void 0),t(124,ai=[]),t(83,dt=[]),t(126,Xt=[]),t(127,Hi=[]),t(85,Gt=[]),t(77,be=!!w),t(78,se=!!P),ul(g),t(80,re=$i(g)),t(81,li=Object.keys(re)),se||t(24,P=li[0]),!be){t(82,Vt=li.filter(function(Q){return![P,z,ee].includes(Q)}));for(let Q=0;Q<Vt.length;Q++)t(85,Gt=Vt[Q]),t(84,Ct=re[Gt].type),Ct==="number"&&dt.push(Gt);t(25,w=dt.length>1?dt:dt[0])}B?t(79,Se={x:P,y:w,size:ee}):le?t(79,Se={x:P}):de?t(79,Se={}):t(79,Se={x:P,y:w});for(let Q in Se)Se[Q]==null&&ai.push(Q);if(ai.length===1)throw Error(new Intl.ListFormat().format(ai)+" is required");if(ai.length>1)throw Error(new Intl.ListFormat().format(ai)+" are required");if(Dt===!0&&w.includes("_pct")&&Ci===!1)if(typeof w=="object"){for(let Q=0;Q<w.length;Q++)t(25,w[Q]=w[Q].replace("_pct",""),w);t(125,Ci=!1)}else t(25,w=w.replace("_pct","")),t(125,Ci=!1);if(P&&Xt.push(P),w)if(typeof w=="object")for(t(128,Pt=0);Pt<w.length;t(128,Pt++,Pt))Xt.push(w[Pt]);else Xt.push(w);if(Y)if(typeof Y=="object")for(t(128,Pt=0);Pt<Y.length;t(128,Pt++,Pt))Xt.push(Y[Pt]);else Xt.push(Y);if(ee&&Xt.push(ee),z&&Hi.push(z),he&&Hi.push(he),ul(g,Xt,Hi),Dt===!0){if(t(0,g=mn(g,P,w)),typeof w=="object"){for(let Q=0;Q<w.length;Q++)t(25,w[Q]=w[Q]+"_pct",w);t(125,Ci=!1)}else t(25,w=w+"_pct"),t(125,Ci=!1);t(80,re=$i(g))}switch(t(86,nt=re[P].type),nt){case"number":t(86,nt="value");break;case"string":t(86,nt="category");break;case"date":t(86,nt="time");break;default:break}if(t(26,p=p==="category"?"category":nt),ne?t(1,ne=ne==="true"||ne===!0):t(1,ne=p==="category"),v&&p!=="category")throw Error("Horizontal charts do not support a value or time-based x-axis. You can either change your SQL query to output string values or set swapXY=false.");if(v&&Y)throw Error("Horizontal charts do not support a secondary y-axis. You can either set swapXY=false or remove the y2 prop from your chart.");if(v&&t(26,p="category"),t(87,Kt=nt==="value"&&p==="category"),t(0,g=ke?nt==="category"?Ui(g,w,!1):Ui(g,P,!0):g),nt==="time"&&t(0,g=Ui(g,P,!0)),t(129,il=$i(g,"array")),t(130,oi=il.filter(Q=>Q.type==="date")),t(130,oi=oi.map(Q=>Q.id)),oi.length>0)for(let Q=0;Q<oi.length;Q++)t(0,g=ws(g,oi[Q]));Ie?t(88,Ze=Bt(Ie,(c=re[P].format)==null?void 0:c.valueType)):t(88,Ze=re[P].format),w?Xe?typeof w=="object"?t(89,it=Bt(Xe,(Sl=re[w[0]].format)==null?void 0:Sl.valueType)):t(89,it=Bt(Xe,(El=re[w].format)==null?void 0:El.valueType)):typeof w=="object"?t(89,it=re[w[0]].format):t(89,it=re[w].format):t(89,it="str"),Y&&(lt?typeof Y=="object"?t(90,ct=Bt(lt,(Al=re[Y[0]].format)==null?void 0:Al.valueType)):t(90,ct=Bt(lt,(Cl=re[Y].format)==null?void 0:Cl.valueType)):typeof Y=="object"?t(90,ct=re[Y[0]].format):t(90,ct=re[Y].format)),ee&&(St?t(91,_t=Bt(St,(Tl=re[ee].format)==null?void 0:Tl.valueType)):t(91,_t=re[ee].format)),t(92,yi=re[P].columnUnitSummary),w&&(typeof w=="object"?t(93,qt=re[w[0]].columnUnitSummary):t(93,qt=re[w].columnUnitSummary)),Y&&(typeof Y=="object"?t(94,ht=re[Y[0]].columnUnitSummary):t(94,ht=re[Y].columnUnitSummary)),t(27,Ee=Ee==="true"?$t(P,Ze):Ee==="false"?"":Ee),t(34,C=C==="true"?typeof w=="object"?"":$t(w,it):C==="false"?"":C),t(40,ve=ve==="true"?typeof Y=="object"?"":$t(Y,ct):ve==="false"?"":ve);let Ti=typeof w=="object"?w.length:1,kl=z?cn(g,z):1,Bi=Ti*kl,ll=typeof Y=="object"?Y.length:Y?1:0,sl=Bi+ll;if(et!==void 0&&t(46,et=et==="true"||et===!0),t(46,et=et??sl>1),Dt===!0&&Le===!0)throw Error("Log axis cannot be used in a 100% stacked chart");if(ot==="stacked"&&sl>1&&Le===!0)throw Error("Log axis cannot be used in a stacked chart");let ki;if(typeof w=="object"){ki=re[w[0]].columnUnitSummary.min;for(let Q=0;Q<w.length;Q++)re[w[Q]].columnUnitSummary.min<ki&&(ki=re[w[Q]].columnUnitSummary.min)}else w&&(ki=re[w].columnUnitSummary.min);if(Le===!0&&ki<=0&&ki!==null)throw Error("Log axis cannot display values less than or equal to zero");V.update(Q=>({...Q,data:g,x:P,y:w,y2:Y,series:z,swapXY:v,sort:ke,xType:p,xFormat:Ze,yFormat:it,y2Format:ct,sizeFormat:_t,xMismatch:Kt,size:ee,yMin:Ye,y2Min:h,columnSummary:re,xAxisTitle:Ee,yAxisTitle:C,y2AxisTitle:ve,tooltipTitle:he,chartAreaHeight:tt,chartType:me,yCount:Ti,y2Count:ll})),t(95,gi=Vi(g,P));let wl;if(v?t(96,jt={type:Pe,logBase:Me,position:"top",axisLabel:{show:Ne,hideOverlap:!0,showMaxLabel:!0,formatter(Q){return pi(Q,it,qt)},margin:4},min:Ye,max:je,scale:Re,splitLine:{show:xe},axisLine:{show:Ce,onZero:!1},axisTick:{show:De},boundaryGap:!1,z:2}):t(96,jt={type:p,min:we,max:He,tooltip:{show:!0,position:"inside",formatter(Q){if(Q.isTruncated())return Q.name}},splitLine:{show:Ae},axisLine:{show:Z},axisTick:{show:ye},axisLabel:{show:_e,hideOverlap:!0,showMaxLabel:p==="category"||p==="value",formatter:p==="time"||p==="category"?!1:function(Q){return pi(Q,Ze,yi)},margin:6},scale:!0,z:2}),v?t(97,Tt={type:p,inverse:"true",splitLine:{show:Ae},axisLine:{show:Z},axisTick:{show:ye},axisLabel:{show:_e,hideOverlap:!0},scale:!0,min:we,max:He,z:2}):(t(97,Tt={type:Pe,logBase:Me,splitLine:{show:xe},axisLine:{show:Ce,onZero:!1},axisTick:{show:De},axisLabel:{show:Ne,hideOverlap:!0,margin:4,formatter(Q){return pi(Q,it,qt)},color:Y?E==="true"?f[0]:E!=="false"?E:void 0:void 0},name:C,nameLocation:"end",nameTextStyle:{align:"left",verticalAlign:"top",padding:[0,5,0,0],color:Y?E==="true"?f[0]:E!=="false"?E:void 0:void 0},nameGap:6,min:Ye,max:je,scale:Re,boundaryGap:["0%","1%"],z:2}),wl={type:"value",show:!1,alignTicks:!0,splitLine:{show:ge},axisLine:{show:Ke,onZero:!1},axisTick:{show:S},axisLabel:{show:Je,hideOverlap:!0,margin:4,formatter(Q){return pi(Q,ct,ht)},color:A==="true"?f[Bi]:A!=="false"?A:void 0},name:ve,nameLocation:"end",nameTextStyle:{align:"right",verticalAlign:"top",padding:[0,0,0,5],color:A==="true"?f[Bi]:A!=="false"?A:void 0},nameGap:6,min:h,max:at,scale:mt,boundaryGap:["0%","1%"],z:2},t(97,Tt=[Tt,wl])),tt){if(t(47,tt=Number(tt)),isNaN(tt))throw Error("chartAreaHeight must be a number");if(tt<=0)throw Error("chartAreaHeight must be a positive number")}else t(47,tt=180);t(100,pt=!!te),t(101,Ht=!!ce),t(102,yt=et*(z!==null||typeof w=="object"&&w.length>1)),t(103,Ii=C!==""&&v),t(104,Qi=Ee!==""&&!v),t(105,Yt=15),t(106,gt=13),t(107,Be=6*Ht),t(108,Ue=pt*Yt+Ht*gt+Be*Math.max(pt,Ht)),t(109,Ge=10),t(110,qe=10),t(111,We=14),t(112,ze=14),t(113,o=15),t(113,o=o*yt),t(114,y=7),t(114,y=y*Math.max(pt,Ht)),t(115,vt=Ue+y),t(116,si=vt+o+ze*Ii+Ge),t(117,ni=Qi*We+qe),t(121,Ei=8),t(123,ri=1),v&&(t(122,Ai=gi.length),t(123,ri=Math.max(1,Ai/Ei))),t(118,bi=tt*ri+si+ni),t(119,Si=vt+o+7),t(15,bl=bi+"px"),t(13,tl="100%"),t(120,xt=v?C:Ee),xt!==""&&t(120,xt=xt+" →"),t(98,Zt={id:"horiz-axis-title",type:"text",style:{text:xt,textAlign:"right",fill:T.colors["base-content-muted"]},cursor:"auto",right:v?"2%":"3%",top:v?Si:null,bottom:v?null:"2%"}),t(99,kt={title:{text:te,subtext:ce,subtextStyle:{width:tl}},tooltip:{trigger:"axis",show:!0,formatter(Q){let wi,Li,Oi,Ji;if(sl>1){Li=Q[0].value[v?1:0],wi=`<span id="tooltip" style='font-weight: 600;'>${Ut(Li,Ze)}</span>`;for(let fi=Q.length-1;fi>=0;fi--)Q[fi].seriesName!=="stackTotal"&&(Oi=Q[fi].value[v?0:1],wi=wi+`<br> <span style='font-size: 11px;'>${Q[fi].marker} ${Q[fi].seriesName}<span/><span style='float:right; margin-left: 10px; font-size: 12px;'>${Ut(Oi,rs(Q[fi].componentIndex,Ti,ll)===0?it:ct)}</span>`)}else p==="value"?(Li=Q[0].value[v?1:0],Oi=Q[0].value[v?0:1],Ji=Q[0].seriesName,wi=`<span id="tooltip" style='font-weight: 600;'>${$t(P,Ze)}: </span><span style='float:right; margin-left: 10px;'>${Ut(Li,Ze)}</span><br/><span style='font-weight: 600;'>${$t(Ji,it)}: </span><span style='float:right; margin-left: 10px;'>${Ut(Oi,it)}</span>`):(Li=Q[0].value[v?1:0],Oi=Q[0].value[v?0:1],Ji=Q[0].seriesName,wi=`<span id="tooltip" style='font-weight: 600;'>${Ut(Li,Ze)}</span><br/><span>${$t(Ji,it)}: </span><span style='float:right; margin-left: 10px;'>${Ut(Oi,it)}</span>`);return wi},confine:!0,axisPointer:{type:"shadow"},extraCssText:'box-shadow: 0 3px 6px rgba(0,0,0,.15); box-shadow: 0 2px 4px rgba(0,0,0,.12); z-index: 1; font-feature-settings: "cv02", "tnum";',order:"valueDesc"},legend:{show:et,type:"scroll",top:vt,padding:[0,0,0,0],data:[]},grid:{left:_i??(v?"1%":"0.8%"),right:Jt??(v?"4%":"3%"),bottom:ni,top:si,containLabel:!0},xAxis:jt,yAxis:Tt,series:[],animation:!0,graphic:Zt,color:f}),J.update(()=>kt)}catch(Ti){if(t(14,Pi=Ti.message),console.error("\x1B[31m%s\x1B[0m",`Error in ${me}: ${Ti.message}`),$l)throw Pi;V.update(Bi=>({...Bi,error:Pi}))}l.$$.dirty[0]&1},al(yl,V),al(gl,J),[g,ne,ie,v,u,zt,U,te,me,st,Qt,At,Nt,tl,Pi,bl,r,n,s,i,R,J,j,hi,P,w,p,Ee,Z,ye,Ae,_e,ke,Le,C,Ce,De,xe,Ne,Re,ve,Ke,S,ge,Je,mt,et,tt,It,Y,z,ee,he,ce,B,le,de,Ie,we,He,Pe,Me,Ye,je,Xe,Qe,h,at,lt,Wt,St,Et,Ft,ot,Dt,_i,Jt,be,se,Se,re,li,Vt,dt,Ct,Gt,nt,Kt,Ze,it,ct,_t,yi,qt,ht,gi,jt,Tt,Zt,kt,pt,Ht,yt,Ii,Qi,Yt,gt,Be,Ue,Ge,qe,We,ze,o,y,vt,si,ni,bi,Si,xt,Ei,Ai,ri,ai,Ci,Xt,Hi,Pt,il,oi,f,T,A,E,N,W]}class gn extends Mt{constructor(e){super(),Rt(this,e,yn,hn,Ot,{data:0,queryID:6,x:24,y:25,y2:49,series:50,size:51,tooltipTitle:52,showAllXAxisLabels:1,printEchartsConfig:2,swapXY:3,title:7,subtitle:53,chartType:8,bubble:54,hist:55,boxplot:56,xType:26,xAxisTitle:27,xBaseline:28,xTickMarks:29,xGridlines:30,xAxisLabels:31,sort:32,xFmt:57,xMin:58,xMax:59,yLog:33,yType:60,yLogBase:61,yAxisTitle:34,yBaseline:35,yTickMarks:36,yGridlines:37,yAxisLabels:38,yMin:62,yMax:63,yScale:39,yFmt:64,yAxisColor:65,y2AxisTitle:40,y2Baseline:41,y2TickMarks:42,y2Gridlines:43,y2AxisLabels:44,y2Min:66,y2Max:67,y2Scale:45,y2Fmt:68,y2AxisColor:69,sizeFmt:70,colorPalette:71,legend:46,echartsOptions:9,seriesOptions:10,seriesColors:72,stackType:73,stacked100:74,chartAreaHeight:47,renderer:11,downloadableData:4,downloadableImage:5,connectGroup:12,leftPadding:75,rightPadding:76,xLabelWrap:48},null,[-1,-1,-1,-1,-1])}}function bn(l){let e;const t=l[7].default,i=ji(t,l,l[8],null);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,n){i&&i.m(s,n),e=!0},p(s,n){i&&i.p&&(!e||n&256)&&Yi(i,t,s,s[8],e?Xi(t,s[8],n,null):xi(s[8]),null)},i(s){e||(F(i,s),e=!0)},o(s){H(i,s),e=!1},d(s){i&&i.d(s)}}}function Sn(l){let e,t;const i=[l[5],{data:Lt.isQuery(l[11])?Array.from(l[11]):l[11]},{queryID:l[6]}];let s={$$slots:{default:[bn]},$$scope:{ctx:l}};for(let n=0;n<i.length;n+=1)s=ti(s,i[n]);return e=new gn({props:s}),{c(){ue(e.$$.fragment)},l(n){fe(e.$$.fragment,n)},m(n,r){oe(e,n,r),t=!0},p(n,r){const f=r&2144?is(i,[r&32&&ls(n[5]),r&2048&&{data:Lt.isQuery(n[11])?Array.from(n[11]):n[11]},r&64&&{queryID:n[6]}]):{};r&256&&(f.$$scope={dirty:r,ctx:n}),e.$set(f)},i(n){t||(F(e.$$.fragment,n),t=!0)},o(n){H(e.$$.fragment,n),t=!1},d(n){ae(e,n)}}}function En(l){let e,t;return e=new ss({props:{slot:"empty",emptyMessage:l[2],emptySet:l[1],chartType:l[5].chartType,isInitial:l[4]}}),{c(){ue(e.$$.fragment)},l(i){fe(e.$$.fragment,i)},m(i,s){oe(e,i,s),t=!0},p(i,s){const n={};s&4&&(n.emptyMessage=i[2]),s&2&&(n.emptySet=i[1]),s&32&&(n.chartType=i[5].chartType),s&16&&(n.isInitial=i[4]),e.$set(n)},i(i){t||(F(e.$$.fragment,i),t=!0)},o(i){H(e.$$.fragment,i),t=!1},d(i){ae(e,i)}}}function An(l){let e,t;return e=new es({props:{slot:"error",title:l[5].chartType,error:l[11].error.message}}),{c(){ue(e.$$.fragment)},l(i){fe(e.$$.fragment,i)},m(i,s){oe(e,i,s),t=!0},p(i,s){const n={};s&32&&(n.title=i[5].chartType),s&2048&&(n.error=i[11].error.message),e.$set(n)},i(i){t||(F(e.$$.fragment,i),t=!0)},o(i){H(e.$$.fragment,i),t=!1},d(i){ae(e,i)}}}function Cn(l){let e,t;return e=new ts({props:{data:l[0],height:l[3],$$slots:{error:[An,({loaded:i})=>({11:i}),({loaded:i})=>i?2048:0],empty:[En],default:[Sn,({loaded:i})=>({11:i}),({loaded:i})=>i?2048:0]},$$scope:{ctx:l}}}),{c(){ue(e.$$.fragment)},l(i){fe(e.$$.fragment,i)},m(i,s){oe(e,i,s),t=!0},p(i,[s]){const n={};s&1&&(n.data=i[0]),s&8&&(n.height=i[3]),s&2358&&(n.$$scope={dirty:s,ctx:i}),e.$set(n)},i(i){t||(F(e.$$.fragment,i),t=!0)},o(i){H(e.$$.fragment,i),t=!1},d(i){ae(e,i)}}}function Tn(l,e,t){let i,{$$slots:s={},$$scope:n}=e,{data:r}=e;const f=Lt.isQuery(r)?r.hash:void 0;let a=(r==null?void 0:r.hash)===f,{emptySet:_=void 0}=e,{emptyMessage:T=void 0}=e,{height:A=200}=e,O=r==null?void 0:r.id;return l.$$set=k=>{t(10,e=ti(ti({},e),qi(k))),"data"in k&&t(0,r=k.data),"emptySet"in k&&t(1,_=k.emptySet),"emptyMessage"in k&&t(2,T=k.emptyMessage),"height"in k&&t(3,A=k.height),"$$scope"in k&&t(8,n=k.$$scope)},l.$$.update=()=>{l.$$.dirty&1&&t(4,a=(r==null?void 0:r.hash)===f),t(5,i={...Object.fromEntries(Object.entries(e).filter(([,k])=>k!==void 0))})},e=qi(e),[r,_,T,A,a,i,O,s,n]}class as extends Mt{constructor(e){super(),Rt(this,e,Tn,Cn,Ot,{data:0,emptySet:1,emptyMessage:2,height:3})}}function os(l,e,t,i,s,n,r,f,a,_,T=void 0,A=void 0,O=void 0,k=void 0){function E(g,U,P,w){let Y={name:U,data:g,yAxisIndex:P};return Y={...w,...Y},Y}let d,M,R,W=[],N,V,J,j,K;function $(g,U){const P=[];function w(z){return typeof z>"u"}function Y(z,ee){w(z)||(Array.isArray(z)?z.forEach(he=>P.push([he,ee])):P.push([z,ee]))}return Y(g,0),Y(U,1),P}let I=$(t,O);if(i!=null&&I.length===1)for(j=Vi(l,i),d=0;d<j.length;d++){if(V=l.filter(g=>g[i]===j[d]),s?N=V.map(g=>[g[I[0][0]],f?g[e].toString():g[e]]):N=V.map(g=>[f?g[e].toString():g[e],g[I[0][0]]]),T){let g=V.map(U=>U[T]);N.forEach((U,P)=>U.push(g[P]))}if(A){let g=V.map(U=>U[A]);N.forEach((U,P)=>U.push(g[P]))}J=j[d]??"null",K=I[0][1],R=E(N,J,K,n),W.push(R)}if(i!=null&&I.length>1)for(j=Vi(l,i),d=0;d<j.length;d++)for(V=l.filter(g=>g[i]===j[d]),M=0;M<I.length;M++){if(s?N=V.map(g=>[g[I[M][0]],f?g[e].toString():g[e]]):N=V.map(g=>[f?g[e].toString():g[e],g[I[M][0]]]),T){let g=V.map(U=>U[T]);N.forEach((U,P)=>U.push(g[P]))}if(A){let g=V.map(U=>U[A]);N.forEach((U,P)=>U.push(g[P]))}J=(j[d]??"null")+" - "+a[I[M][0]].title,K=I[M][1],R=E(N,J,K,n),W.push(R)}if(i==null&&I.length>1)for(d=0;d<I.length;d++){if(s?N=l.map(g=>[g[I[d][0]],f?g[e].toString():g[e]]):N=l.map(g=>[f?g[e].toString():g[e],g[I[d][0]]]),T){let g=l.map(U=>U[T]);N.forEach((U,P)=>U.push(g[P]))}if(A){let g=l.map(U=>U[A]);N.forEach((U,P)=>U.push(g[P]))}J=a[I[d][0]].title,K=I[d][1],R=E(N,J,K,n),W.push(R)}if(i==null&&I.length===1){if(s?N=l.map(g=>[g[I[0][0]],f?g[e].toString():g[e]]):N=l.map(g=>[f?g[e].toString():g[e],g[I[0][0]]]),T){let g=l.map(U=>U[T]);N.forEach((U,P)=>U.push(g[P]))}if(A){let g=l.map(U=>U[A]);N.forEach((U,P)=>U.push(g[P]))}J=a[I[0][0]].title,K=I[0][1],R=E(N,J,K,n),W.push(R)}return _&&W.sort((g,U)=>_.indexOf(g.name)-_.indexOf(U.name)),k&&W.forEach(g=>{g.name=Ls(g.name,k)}),W}function Wl(l,e){let t={};if(typeof e=="object")for(let i=0;i<e.length;i++)t[e[i]]=0;else t[e]=0;return l=ei(l,ns(t)),l}function kn(l){let e=[];for(let t=1;t<l.length;t++)e.push(l[t]-l[t-1]);return e}function fs(l,e){return(typeof l!="number"||isNaN(l))&&(l=0),(typeof e!="number"||isNaN(e))&&(e=0),l=Math.abs(l),e=Math.abs(e),e<=.01?l:fs(e,l%e)}function wn(l,e){if(!Array.isArray(l))throw new TypeError("Cannot calculate extent of non-array value.");let t,i;for(const s of l)typeof s=="number"&&(t===void 0?s>=s&&(t=i=s):(t>s&&(t=s),i<s&&(i=s)));return[t,i]}function Ln(l,e){let[t,i]=wn(l);const s=[];let n=t;for(;n<=i;)s.push(Math.round((n+Number.EPSILON)*1e8)/1e8),n+=e;return s}function On(l){if(l.length<=1)return;l.sort(function(t,i){return t-i}),l=l.map(function(t){return t*1e8}),l=kn(l);let e=l.reduce((t,i)=>fs(t,i))/1e8;return e=Math.round((e+Number.EPSILON)*1e8)/1e8,e}function el(l,e,t,i,s=!1,n=!1){var k;let r=!1;const f=l.map(E=>Object.assign({},E,{[e]:E[e]instanceof Date?(r=!0,E[e].toISOString()):E[e]})).filter(E=>E[e]!==void 0&&E[e]!==null),a=Array.from(f).reduce((E,d)=>(d[e]instanceof Date&&(d[e]=d[e].toISOString(),r=!0),i?(E[d[i]??"null"]||(E[d[i]??"null"]=[]),E[d[i]??"null"].push(d)):(E.default||(E.default=[]),E.default.push(d)),E),{}),_={};let T;const A=((k=f.find(E=>E&&E[e]!==null&&E[e]!==void 0))==null?void 0:k[e])??null;switch(typeof A){case"object":throw A===null?new Error(`Column '${e}' is entirely null. Column must contain at least one non-null value.`):new Error("Unexpected object property, expected string, date, or number");case"number":if(T=Vi(f,e),n){const E=On(T);_[e]=Ln(T,E)}break;case"string":T=Vi(f,e),_[e]=T;break}const O=[];for(const E of Object.values(a)){const d=i?{[i]:null}:{};if(s)if(t instanceof Array)for(let R=0;R<t.length;R++)d[t[R]]=0;else d[t]=0;else if(t instanceof Array)for(let R=0;R<t.length;R++)d[t[R]]=null;else d[t]=null;i&&(_[i]=i);const M=[];Object.keys(_).length===0?M.push(Dl([e],d)):M.push(Dl(_,d)),O.push(ei(E,...M))}return r?O.flat().map(E=>({...E,[e]:new Date(E[e])})):O.flat()}function Mn(l,e,t){let i,s,n,r,f,a,_,T,A,O,k,E,d,M,R=Te,W=()=>(R(),R=bt(n,C=>t(38,M=C)),n),N,V=Te,J=()=>(V(),V=bt(s,C=>t(39,N=C)),s),j,K=Te,$=()=>(K(),K=bt(i,C=>t(40,j=C)),i),I;l.$$.on_destroy.push(()=>R()),l.$$.on_destroy.push(()=>V()),l.$$.on_destroy.push(()=>K());let g=Gi(yl);di(l,g,C=>t(41,I=C));let U=Gi(gl);const{resolveColor:P}=ii();let{y:w=void 0}=e;const Y=!!w;let{series:z=void 0}=e;const ee=!!z;let{options:he=void 0}=e,{name:ne=void 0}=e,{type:ie="stacked"}=e,{fillColor:be=void 0}=e,{lineColor:se=void 0}=e,{fillOpacity:v=void 0}=e,{line:te=!0}=e,{markers:ce=!1}=e,{markerShape:me="circle"}=e,{markerSize:B=8}=e,{handleMissing:le="gap"}=e,{step:de=!1}=e,{stepPosition:Se="end"}=e,{labels:p=!1}=e,{labelSize:Ee=11}=e,{labelPosition:Z="top"}=e,{labelColor:ye=void 0}=e,{labelFmt:Ae=void 0}=e,_e;Ae&&(_e=Bt(Ae));let{showAllLabels:ke=!1}=e,{seriesOrder:Ie=void 0}=e,{seriesLabelFmt:we=void 0}=e,He;const Le={above:"top",below:"bottom",middle:"inside"},Pe={above:"right",below:"left",middle:"inside"};let Me=a?"right":"top";return Zl(()=>{U.update(C=>(C.tooltip={...C.tooltip,order:"seriesDesc"},a?(C.yAxis={...C.yAxis,...d.xAxis},C.xAxis={...C.xAxis,...d.yAxis}):(C.yAxis[0]={...C.yAxis[0],...d.yAxis},C.xAxis={...C.xAxis,...d.xAxis}),ie==="stacked100"&&(a?C.xAxis={...C.xAxis,max:1}:C.yAxis[0]={...C.yAxis[0],max:1}),p&&(C.axisPointer={triggerEmphasis:!1}),C))}),l.$$set=C=>{"y"in C&&t(4,w=C.y),"series"in C&&t(5,z=C.series),"options"in C&&t(12,he=C.options),"name"in C&&t(6,ne=C.name),"type"in C&&t(13,ie=C.type),"fillColor"in C&&t(14,be=C.fillColor),"lineColor"in C&&t(15,se=C.lineColor),"fillOpacity"in C&&t(16,v=C.fillOpacity),"line"in C&&t(7,te=C.line),"markers"in C&&t(8,ce=C.markers),"markerShape"in C&&t(17,me=C.markerShape),"markerSize"in C&&t(18,B=C.markerSize),"handleMissing"in C&&t(19,le=C.handleMissing),"step"in C&&t(9,de=C.step),"stepPosition"in C&&t(20,Se=C.stepPosition),"labels"in C&&t(10,p=C.labels),"labelSize"in C&&t(21,Ee=C.labelSize),"labelPosition"in C&&t(11,Z=C.labelPosition),"labelColor"in C&&t(22,ye=C.labelColor),"labelFmt"in C&&t(23,Ae=C.labelFmt),"showAllLabels"in C&&t(24,ke=C.showAllLabels),"seriesOrder"in C&&t(25,Ie=C.seriesOrder),"seriesLabelFmt"in C&&t(26,we=C.seriesLabelFmt)},l.$$.update=()=>{l.$$.dirty[0]&16384&&$(t(2,i=P(be))),l.$$.dirty[0]&32768&&J(t(1,s=P(se))),l.$$.dirty[0]&128&&t(7,te=te==="true"||te===!0),l.$$.dirty[0]&256&&t(8,ce=ce==="true"||ce===!0),l.$$.dirty[0]&512&&t(9,de=de==="true"||de===!0),l.$$.dirty[0]&1024&&t(10,p=p==="true"||p===!0),l.$$.dirty[0]&4194304&&W(t(0,n=P(ye))),l.$$.dirty[1]&1024&&t(36,r=I.data),l.$$.dirty[1]&1024&&t(35,f=I.x),l.$$.dirty[0]&16|l.$$.dirty[1]&1024&&t(4,w=Y?w:I.y),l.$$.dirty[1]&1024&&t(29,a=I.swapXY),l.$$.dirty[1]&1024&&t(37,_=I.yFormat),l.$$.dirty[1]&1024&&t(30,T=I.xType),l.$$.dirty[1]&1024&&t(33,A=I.xMismatch),l.$$.dirty[1]&1024&&t(32,O=I.columnSummary),l.$$.dirty[0]&32|l.$$.dirty[1]&1024&&t(5,z=ee?z:I.series),l.$$.dirty[0]&1073741936|l.$$.dirty[1]&50&&(!z&&typeof w!="object"?t(6,ne=ne??$t(w,O[w].title)):(t(28,He="area"),t(36,r=el(r,f,w,z,!1,T==="value")),t(36,r=Wl(r,w)),t(30,T=T==="value"?"category":T))),l.$$.dirty[0]&524304|l.$$.dirty[1]&32&&le==="zero"&&t(36,r=Wl(r,w)),l.$$.dirty[0]&536872960&&t(11,Z=(a?Pe[Z]:Le[Z])??Me),l.$$.dirty[0]&960434048|l.$$.dirty[1]&960&&t(34,k={type:"line",stack:He,areaStyle:{color:j,opacity:v},connectNulls:le==="connect",lineStyle:{width:te?1:0,color:N},label:{show:p,formatter(C){return C.value[a?0:1]===0?"":Ut(C.value[a?0:1],_e??_)},fontSize:Ee,color:M,position:Z,padding:3},labelLayout:{hideOverlap:!ke},emphasis:{focus:"series"},showSymbol:p||ce,symbol:me,symbolSize:p&&!ce?0:B,step:de?Se:!1}),l.$$.dirty[0]&637534320|l.$$.dirty[1]&62&&t(31,E=os(r,f,w,z,a,k,ne,A,O,Ie,void 0,void 0,void 0,we)),l.$$.dirty[1]&1&&U.update(C=>(C.series.push(...E),C.legend.data.push(...E.map(Ce=>Ce.name.toString())),C)),l.$$.dirty[0]&4096&&he&&U.update(C=>({...C,...he})),l.$$.dirty[0]&1073741824&&(d={yAxis:{boundaryGap:["0%","1%"]},xAxis:{boundaryGap:["4%","4%"],type:T}})},[n,s,i,g,w,z,ne,te,ce,de,p,Z,he,ie,be,se,v,me,B,le,Se,Ee,ye,Ae,ke,Ie,we,_e,He,a,T,E,O,A,k,f,r,_,M,N,j,I]}class Rn extends Mt{constructor(e){super(),Rt(this,e,Mn,null,Ot,{y:4,series:5,options:12,name:6,type:13,fillColor:14,lineColor:15,fillOpacity:16,line:7,markers:8,markerShape:17,markerSize:18,handleMissing:19,step:9,stepPosition:20,labels:10,labelSize:21,labelPosition:11,labelColor:22,labelFmt:23,showAllLabels:24,seriesOrder:25,seriesLabelFmt:26},null,[-1,-1])}}function Fn(l){let e,t,i;e=new Rn({props:{line:l[28],fillColor:l[59],lineColor:l[58],fillOpacity:l[29],handleMissing:l[34],type:l[38],step:l[35],stepPosition:l[36],markers:l[31],markerShape:l[32],markerSize:l[33],labels:l[39],labelSize:l[40],labelPosition:l[41],labelColor:l[56],labelFmt:l[42],showAllLabels:l[43],seriesOrder:l[49],seriesLabelFmt:l[51]}});const s=l[66].default,n=ji(s,l,l[67],null);return{c(){ue(e.$$.fragment),t=q(),n&&n.c()},l(r){fe(e.$$.fragment,r),t=G(r),n&&n.l(r)},m(r,f){oe(e,r,f),b(r,t,f),n&&n.m(r,f),i=!0},p(r,f){const a={};f[0]&268435456&&(a.line=r[28]),f[1]&268435456&&(a.fillColor=r[59]),f[1]&134217728&&(a.lineColor=r[58]),f[0]&536870912&&(a.fillOpacity=r[29]),f[1]&8&&(a.handleMissing=r[34]),f[1]&128&&(a.type=r[38]),f[1]&16&&(a.step=r[35]),f[1]&32&&(a.stepPosition=r[36]),f[1]&1&&(a.markers=r[31]),f[1]&2&&(a.markerShape=r[32]),f[1]&4&&(a.markerSize=r[33]),f[1]&256&&(a.labels=r[39]),f[1]&512&&(a.labelSize=r[40]),f[1]&1024&&(a.labelPosition=r[41]),f[1]&33554432&&(a.labelColor=r[56]),f[1]&2048&&(a.labelFmt=r[42]),f[1]&4096&&(a.showAllLabels=r[43]),f[1]&262144&&(a.seriesOrder=r[49]),f[1]&1048576&&(a.seriesLabelFmt=r[51]),e.$set(a),n&&n.p&&(!i||f[2]&32)&&Yi(n,s,r,r[67],i?Xi(s,r[67],f,null):xi(r[67]),null)},i(r){i||(F(e.$$.fragment,r),F(n,r),i=!0)},o(r){H(e.$$.fragment,r),H(n,r),i=!1},d(r){r&&m(t),ae(e,r),n&&n.d(r)}}}function Dn(l){let e,t;return e=new as({props:{data:l[3],x:l[4],y:l[5],xFmt:l[11],yFmt:l[10],series:l[6],xType:l[7],yLog:l[8],yLogBase:l[9],legend:l[14],xAxisTitle:l[15],yAxisTitle:l[16],xGridlines:l[17],yGridlines:l[18],xAxisLabels:l[19],yAxisLabels:l[20],xBaseline:l[21],yBaseline:l[22],xTickMarks:l[23],yTickMarks:l[24],yMin:l[25],yMax:l[26],yScale:l[27],title:l[12],subtitle:l[13],chartType:Nn,sort:l[37],stackType:l[38],stacked100:l[60],chartAreaHeight:l[30],colorPalette:l[57],echartsOptions:l[44],seriesOptions:l[45],printEchartsConfig:l[0],emptySet:l[46],emptyMessage:l[47],renderer:l[48],downloadableData:l[1],downloadableImage:l[2],connectGroup:l[50],seriesColors:l[55],leftPadding:l[52],rightPadding:l[53],xLabelWrap:l[54],$$slots:{default:[Fn]},$$scope:{ctx:l}}}),{c(){ue(e.$$.fragment)},l(i){fe(e.$$.fragment,i)},m(i,s){oe(e,i,s),t=!0},p(i,s){const n={};s[0]&8&&(n.data=i[3]),s[0]&16&&(n.x=i[4]),s[0]&32&&(n.y=i[5]),s[0]&2048&&(n.xFmt=i[11]),s[0]&1024&&(n.yFmt=i[10]),s[0]&64&&(n.series=i[6]),s[0]&128&&(n.xType=i[7]),s[0]&256&&(n.yLog=i[8]),s[0]&512&&(n.yLogBase=i[9]),s[0]&16384&&(n.legend=i[14]),s[0]&32768&&(n.xAxisTitle=i[15]),s[0]&65536&&(n.yAxisTitle=i[16]),s[0]&131072&&(n.xGridlines=i[17]),s[0]&262144&&(n.yGridlines=i[18]),s[0]&524288&&(n.xAxisLabels=i[19]),s[0]&1048576&&(n.yAxisLabels=i[20]),s[0]&2097152&&(n.xBaseline=i[21]),s[0]&4194304&&(n.yBaseline=i[22]),s[0]&8388608&&(n.xTickMarks=i[23]),s[0]&16777216&&(n.yTickMarks=i[24]),s[0]&33554432&&(n.yMin=i[25]),s[0]&67108864&&(n.yMax=i[26]),s[0]&134217728&&(n.yScale=i[27]),s[0]&4096&&(n.title=i[12]),s[0]&8192&&(n.subtitle=i[13]),s[1]&64&&(n.sort=i[37]),s[1]&128&&(n.stackType=i[38]),s[0]&1073741824&&(n.chartAreaHeight=i[30]),s[1]&67108864&&(n.colorPalette=i[57]),s[1]&8192&&(n.echartsOptions=i[44]),s[1]&16384&&(n.seriesOptions=i[45]),s[0]&1&&(n.printEchartsConfig=i[0]),s[1]&32768&&(n.emptySet=i[46]),s[1]&65536&&(n.emptyMessage=i[47]),s[1]&131072&&(n.renderer=i[48]),s[0]&2&&(n.downloadableData=i[1]),s[0]&4&&(n.downloadableImage=i[2]),s[1]&524288&&(n.connectGroup=i[50]),s[1]&16777216&&(n.seriesColors=i[55]),s[1]&2097152&&(n.leftPadding=i[52]),s[1]&4194304&&(n.rightPadding=i[53]),s[1]&8388608&&(n.xLabelWrap=i[54]),s[0]&805306368|s[1]&437526463|s[2]&32&&(n.$$scope={dirty:s,ctx:i}),e.$set(n)},i(i){t||(F(e.$$.fragment,i),t=!0)},o(i){H(e.$$.fragment,i),t=!1},d(i){ae(e,i)}}}let Nn="Area Chart";function In(l,e,t){let i,s,n,r,f,{$$slots:a={},$$scope:_}=e;const{resolveColor:T,resolveColorsObject:A,resolveColorPalette:O}=ii();let{data:k=void 0}=e,{x:E=void 0}=e,{y:d=void 0}=e,{series:M=void 0}=e,{xType:R=void 0}=e,{yLog:W=void 0}=e,{yLogBase:N=void 0}=e,{yFmt:V=void 0}=e,{xFmt:J=void 0}=e,{title:j=void 0}=e,{subtitle:K=void 0}=e,{legend:$=void 0}=e,{xAxisTitle:I=void 0}=e,{yAxisTitle:g=void 0}=e,{xGridlines:U=void 0}=e,{yGridlines:P=void 0}=e,{xAxisLabels:w=void 0}=e,{yAxisLabels:Y=void 0}=e,{xBaseline:z=void 0}=e,{yBaseline:ee=void 0}=e,{xTickMarks:he=void 0}=e,{yTickMarks:ne=void 0}=e,{yMin:ie=void 0}=e,{yMax:be=void 0}=e,{yScale:se=void 0}=e,{line:v=void 0}=e,{fillColor:te=void 0}=e,{lineColor:ce=void 0}=e,{fillOpacity:me=void 0}=e,{chartAreaHeight:B=void 0}=e,{markers:le=void 0}=e,{markerShape:de=void 0}=e,{markerSize:Se=void 0}=e,{handleMissing:p=void 0}=e,{step:Ee=void 0}=e,{stepPosition:Z=void 0}=e,{sort:ye=void 0}=e,{type:Ae="stacked"}=e,_e=Ae==="stacked100",{colorPalette:ke="default"}=e,{labels:Ie=void 0}=e,{labelSize:we=void 0}=e,{labelPosition:He=void 0}=e,{labelColor:Le=void 0}=e,{labelFmt:Pe=void 0}=e,{showAllLabels:Me=void 0}=e,{echartsOptions:C=void 0}=e,{seriesOptions:Ce=void 0}=e,{printEchartsConfig:De=!1}=e,{emptySet:xe=void 0}=e,{emptyMessage:Ne=void 0}=e,{renderer:Ye=void 0}=e,{downloadableData:je=void 0}=e,{downloadableImage:Re=void 0}=e,{seriesColors:Xe=void 0}=e,{seriesOrder:Qe=void 0}=e,{connectGroup:ve=void 0}=e,{seriesLabelFmt:Ke=void 0}=e,{leftPadding:S=void 0}=e,{rightPadding:ge=void 0}=e,{xLabelWrap:Je=void 0}=e;return l.$$set=h=>{"data"in h&&t(3,k=h.data),"x"in h&&t(4,E=h.x),"y"in h&&t(5,d=h.y),"series"in h&&t(6,M=h.series),"xType"in h&&t(7,R=h.xType),"yLog"in h&&t(8,W=h.yLog),"yLogBase"in h&&t(9,N=h.yLogBase),"yFmt"in h&&t(10,V=h.yFmt),"xFmt"in h&&t(11,J=h.xFmt),"title"in h&&t(12,j=h.title),"subtitle"in h&&t(13,K=h.subtitle),"legend"in h&&t(14,$=h.legend),"xAxisTitle"in h&&t(15,I=h.xAxisTitle),"yAxisTitle"in h&&t(16,g=h.yAxisTitle),"xGridlines"in h&&t(17,U=h.xGridlines),"yGridlines"in h&&t(18,P=h.yGridlines),"xAxisLabels"in h&&t(19,w=h.xAxisLabels),"yAxisLabels"in h&&t(20,Y=h.yAxisLabels),"xBaseline"in h&&t(21,z=h.xBaseline),"yBaseline"in h&&t(22,ee=h.yBaseline),"xTickMarks"in h&&t(23,he=h.xTickMarks),"yTickMarks"in h&&t(24,ne=h.yTickMarks),"yMin"in h&&t(25,ie=h.yMin),"yMax"in h&&t(26,be=h.yMax),"yScale"in h&&t(27,se=h.yScale),"line"in h&&t(28,v=h.line),"fillColor"in h&&t(61,te=h.fillColor),"lineColor"in h&&t(62,ce=h.lineColor),"fillOpacity"in h&&t(29,me=h.fillOpacity),"chartAreaHeight"in h&&t(30,B=h.chartAreaHeight),"markers"in h&&t(31,le=h.markers),"markerShape"in h&&t(32,de=h.markerShape),"markerSize"in h&&t(33,Se=h.markerSize),"handleMissing"in h&&t(34,p=h.handleMissing),"step"in h&&t(35,Ee=h.step),"stepPosition"in h&&t(36,Z=h.stepPosition),"sort"in h&&t(37,ye=h.sort),"type"in h&&t(38,Ae=h.type),"colorPalette"in h&&t(63,ke=h.colorPalette),"labels"in h&&t(39,Ie=h.labels),"labelSize"in h&&t(40,we=h.labelSize),"labelPosition"in h&&t(41,He=h.labelPosition),"labelColor"in h&&t(64,Le=h.labelColor),"labelFmt"in h&&t(42,Pe=h.labelFmt),"showAllLabels"in h&&t(43,Me=h.showAllLabels),"echartsOptions"in h&&t(44,C=h.echartsOptions),"seriesOptions"in h&&t(45,Ce=h.seriesOptions),"printEchartsConfig"in h&&t(0,De=h.printEchartsConfig),"emptySet"in h&&t(46,xe=h.emptySet),"emptyMessage"in h&&t(47,Ne=h.emptyMessage),"renderer"in h&&t(48,Ye=h.renderer),"downloadableData"in h&&t(1,je=h.downloadableData),"downloadableImage"in h&&t(2,Re=h.downloadableImage),"seriesColors"in h&&t(65,Xe=h.seriesColors),"seriesOrder"in h&&t(49,Qe=h.seriesOrder),"connectGroup"in h&&t(50,ve=h.connectGroup),"seriesLabelFmt"in h&&t(51,Ke=h.seriesLabelFmt),"leftPadding"in h&&t(52,S=h.leftPadding),"rightPadding"in h&&t(53,ge=h.rightPadding),"xLabelWrap"in h&&t(54,Je=h.xLabelWrap),"$$scope"in h&&t(67,_=h.$$scope)},l.$$.update=()=>{l.$$.dirty[1]&1073741824&&t(59,i=T(te)),l.$$.dirty[2]&1&&t(58,s=T(ce)),l.$$.dirty[2]&2&&t(57,n=O(ke)),l.$$.dirty[2]&4&&t(56,r=T(Le)),l.$$.dirty[0]&1&&t(0,De=Ve(De)),l.$$.dirty[0]&2&&t(1,je=Ve(je)),l.$$.dirty[0]&4&&t(2,Re=Ve(Re)),l.$$.dirty[2]&8&&t(55,f=A(Xe))},[De,je,Re,k,E,d,M,R,W,N,V,J,j,K,$,I,g,U,P,w,Y,z,ee,he,ne,ie,be,se,v,me,B,le,de,Se,p,Ee,Z,ye,Ae,Ie,we,He,Pe,Me,C,Ce,xe,Ne,Ye,Qe,ve,Ke,S,ge,Je,f,r,n,s,i,_e,te,ce,ke,Le,Xe,a,_]}class Hn extends Mt{constructor(e){super(),Rt(this,e,In,Dn,Ot,{data:3,x:4,y:5,series:6,xType:7,yLog:8,yLogBase:9,yFmt:10,xFmt:11,title:12,subtitle:13,legend:14,xAxisTitle:15,yAxisTitle:16,xGridlines:17,yGridlines:18,xAxisLabels:19,yAxisLabels:20,xBaseline:21,yBaseline:22,xTickMarks:23,yTickMarks:24,yMin:25,yMax:26,yScale:27,line:28,fillColor:61,lineColor:62,fillOpacity:29,chartAreaHeight:30,markers:31,markerShape:32,markerSize:33,handleMissing:34,step:35,stepPosition:36,sort:37,type:38,colorPalette:63,labels:39,labelSize:40,labelPosition:41,labelColor:64,labelFmt:42,showAllLabels:43,echartsOptions:44,seriesOptions:45,printEchartsConfig:0,emptySet:46,emptyMessage:47,renderer:48,downloadableData:1,downloadableImage:2,seriesColors:65,seriesOrder:49,connectGroup:50,seriesLabelFmt:51,leftPadding:52,rightPadding:53,xLabelWrap:54},null,[-1,-1,-1])}}function zl(l,e,t){let i=ei(l,ol(e,[Os(t,fl)]));if(typeof t=="object")for(let s=0;s<i.length;s++){i[s].stackTotal=0;for(let n=0;n<t.length;n++)i[s].stackTotal=i[s].stackTotal+i[s][t[n]]}return i}let Pn=60;function Bn(l,e,t){let i,s,n,r,f,a,_,T,A,O,k,E,d,M,R,W,N,V,J,j,K=Te,$=()=>(K(),K=bt(r,S=>t(49,j=S)),r),I,g=Te,U=()=>(g(),g=bt(n,S=>t(50,I=S)),n),P,w=Te,Y=()=>(w(),w=bt(f,S=>t(51,P=S)),f),z,ee=Te,he=()=>(ee(),ee=bt(i,S=>t(52,z=S)),i);l.$$.on_destroy.push(()=>K()),l.$$.on_destroy.push(()=>g()),l.$$.on_destroy.push(()=>w()),l.$$.on_destroy.push(()=>ee());const{resolveColor:ne}=ii();let{y:ie=void 0}=e;const be=!!ie;let{y2:se=void 0}=e;const v=!!se;let{series:te=void 0}=e;const ce=!!te;let{options:me=void 0}=e,{name:B=void 0}=e,{type:le="stacked"}=e,{stackName:de=void 0}=e,{fillColor:Se=void 0}=e,{fillOpacity:p=void 0}=e,{outlineColor:Ee=void 0}=e,{outlineWidth:Z=void 0}=e,{labels:ye=!1}=e,{seriesLabels:Ae=!0}=e,{labelSize:_e=11}=e,{labelPosition:ke=void 0}=e,{labelColor:Ie=void 0}=e,{labelFmt:we=void 0}=e,He;we&&(He=Bt(we));let{yLabelFmt:Le=void 0}=e,Pe;Le&&(Pe=Bt(Le));let{y2LabelFmt:Me=void 0}=e,C;Me&&(C=Bt(Me));let{y2SeriesType:Ce="bar"}=e,{stackTotalLabel:De=!0}=e,{showAllLabels:xe=!1}=e,{seriesOrder:Ne=void 0}=e,Ye,je,Re,Xe;const Qe={outside:"top",inside:"inside"},ve={outside:"right",inside:"inside"};let{seriesLabelFmt:Ke=void 0}=e;return Zl(()=>{me&&s.update(S=>({...S,...me})),J&&s.update(S=>{if(le.includes("stacked")?S.tooltip={...S.tooltip,order:"seriesDesc"}:S.tooltip={...S.tooltip,order:"seriesAsc"},le==="stacked100"&&(E?S.xAxis={...S.xAxis,max:1}:S.yAxis[0]={...S.yAxis[0],max:1}),E)S.yAxis={...S.yAxis,...J.xAxis},S.xAxis={...S.xAxis,...J.yAxis};else if(S.yAxis[0]={...S.yAxis[0],...J.yAxis},S.xAxis={...S.xAxis,...J.xAxis},se&&(S.yAxis[1]={...S.yAxis[1],show:!0},["line","bar","scatter"].includes(Ce)))for(let ge=0;ge<k;ge++)S.series[O+ge].type=Ce,S.series[O+ge].stack=void 0;return S})}),l.$$set=S=>{"y"in S&&t(4,ie=S.y),"y2"in S&&t(5,se=S.y2),"series"in S&&t(6,te=S.series),"options"in S&&t(13,me=S.options),"name"in S&&t(7,B=S.name),"type"in S&&t(14,le=S.type),"stackName"in S&&t(8,de=S.stackName),"fillColor"in S&&t(15,Se=S.fillColor),"fillOpacity"in S&&t(16,p=S.fillOpacity),"outlineColor"in S&&t(17,Ee=S.outlineColor),"outlineWidth"in S&&t(18,Z=S.outlineWidth),"labels"in S&&t(9,ye=S.labels),"seriesLabels"in S&&t(10,Ae=S.seriesLabels),"labelSize"in S&&t(19,_e=S.labelSize),"labelPosition"in S&&t(11,ke=S.labelPosition),"labelColor"in S&&t(20,Ie=S.labelColor),"labelFmt"in S&&t(21,we=S.labelFmt),"yLabelFmt"in S&&t(22,Le=S.yLabelFmt),"y2LabelFmt"in S&&t(23,Me=S.y2LabelFmt),"y2SeriesType"in S&&t(24,Ce=S.y2SeriesType),"stackTotalLabel"in S&&t(12,De=S.stackTotalLabel),"showAllLabels"in S&&t(25,xe=S.showAllLabels),"seriesOrder"in S&&t(26,Ne=S.seriesOrder),"seriesLabelFmt"in S&&t(27,Ke=S.seriesLabelFmt)},l.$$.update=()=>{l.$$.dirty[0]&32768&&U(t(2,n=ne(Se))),l.$$.dirty[0]&131072&&$(t(1,r=ne(Ee))),l.$$.dirty[0]&512&&t(9,ye=ye==="true"||ye===!0),l.$$.dirty[0]&1024&&t(10,Ae=Ae==="true"||Ae===!0),l.$$.dirty[0]&1048576&&Y(t(0,f=ne(Ie))),l.$$.dirty[0]&4096&&t(12,De=De==="true"||De===!0),l.$$.dirty[1]&2097152&&t(46,a=z.data),l.$$.dirty[1]&2097152&&t(42,_=z.x),l.$$.dirty[0]&16|l.$$.dirty[1]&2097152&&t(4,ie=be?ie:z.y),l.$$.dirty[0]&32|l.$$.dirty[1]&2097152&&t(5,se=v?se:z.y2),l.$$.dirty[1]&2097152&&t(40,T=z.yFormat),l.$$.dirty[1]&2097152&&t(47,A=z.y2Format),l.$$.dirty[1]&2097152&&t(35,O=z.yCount),l.$$.dirty[1]&2097152&&t(36,k=z.y2Count),l.$$.dirty[1]&2097152&&t(37,E=z.swapXY),l.$$.dirty[1]&2097152&&t(39,d=z.xType),l.$$.dirty[1]&2097152&&t(43,M=z.xMismatch),l.$$.dirty[1]&2097152&&t(44,R=z.columnSummary),l.$$.dirty[1]&2097152&&t(48,W=z.sort),l.$$.dirty[0]&64|l.$$.dirty[1]&2097152&&t(6,te=ce?te:z.series),l.$$.dirty[0]&16848|l.$$.dirty[1]&174403&&(!te&&typeof ie!="object"?(t(7,B=B??$t(ie,R[ie].title)),E&&d!=="category"&&(t(46,a=el(a,_,ie,te,!0,d!=="time")),t(39,d="category")),t(8,de="stack1"),t(33,Re=E?"right":"top")):(W===!0&&d==="category"&&(t(31,Ye=zl(a,_,ie)),typeof ie=="object"?t(31,Ye=Ui(Ye,"stackTotal",!1)):t(31,Ye=Ui(Ye,ie,!1)),t(32,je=Ye.map(S=>S[_])),t(46,a=[...a].sort(function(S,ge){return je.indexOf(S[_])-je.indexOf(ge[_])}))),E||(d==="value"||d==="category")&&le.includes("stacked")?(t(46,a=el(a,_,ie,te,!0,d==="value")),t(39,d="category")):d==="time"&&le.includes("stacked")&&t(46,a=el(a,_,ie,te,!0,!0)),le.includes("stacked")?(t(8,de=de??"stack1"),t(33,Re="inside")):(t(8,de=void 0),t(33,Re=E?"right":"top")))),l.$$.dirty[0]&16400|l.$$.dirty[1]&34816&&le==="stacked"&&t(34,Xe=zl(a,_,ie)),l.$$.dirty[0]&2048|l.$$.dirty[1]&68&&t(11,ke=(E?ve[ke]:Qe[ke])??Re),l.$$.dirty[0]&1913458432|l.$$.dirty[1]&1901168&&t(45,N={type:"bar",stack:de,label:{show:ye&&Ae,formatter(S){return S.value[E?0:1]===0?"":Ut(S.value[E?0:1],[Pe??He??T,C??He??A][rs(S.componentIndex,O,k)])},position:ke,fontSize:_e,color:P},labelLayout:{hideOverlap:!xe},emphasis:{focus:"series"},barMaxWidth:Pn,itemStyle:{color:I,opacity:p,borderColor:j,borderWidth:Z}}),l.$$.dirty[0]&201326832|l.$$.dirty[1]&63552&&t(41,V=os(a,_,ie,te,E,N,B,M,R,Ne,void 0,void 0,se,Ke)),l.$$.dirty[0]&268981072|l.$$.dirty[1]&7880&&s.update(S=>(S.series.push(...V),S.legend.data.push(...V.map(ge=>ge.name.toString())),ye===!0&&le==="stacked"&&typeof ie=="object"|te!==void 0&&De===!0&&te!==_&&(S.series.push({type:"bar",stack:de,name:"stackTotal",color:"none",data:Xe.map(ge=>[E?0:M?ge[_].toString():ge[_],E?M?ge[_].toString():ge[_]:0]),label:{show:!0,position:E?"right":"top",formatter(ge){let Je=0;return V.forEach(h=>{Je+=h.data[ge.dataIndex][E?0:1]}),Je===0?"":Ut(Je,He??T)},fontWeight:"bold",fontSize:_e,padding:E?[0,0,0,5]:void 0}}),S.legend.selectedMode=!1),S)),l.$$.dirty[1]&256&&(J={xAxis:{boundaryGap:["1%","2%"],type:d}})},he(t(3,i=Gi(yl))),t(38,s=Gi(gl)),[f,r,n,i,ie,se,te,B,de,ye,Ae,ke,De,me,le,Se,p,Ee,Z,_e,Ie,we,Le,Me,Ce,xe,Ne,Ke,He,Pe,C,Ye,je,Re,Xe,O,k,E,s,d,T,V,_,M,R,N,a,A,W,j,I,P,z]}class Un extends Mt{constructor(e){super(),Rt(this,e,Bn,null,Ot,{y:4,y2:5,series:6,options:13,name:7,type:14,stackName:8,fillColor:15,fillOpacity:16,outlineColor:17,outlineWidth:18,labels:9,seriesLabels:10,labelSize:19,labelPosition:11,labelColor:20,labelFmt:21,yLabelFmt:22,y2LabelFmt:23,y2SeriesType:24,stackTotalLabel:12,showAllLabels:25,seriesOrder:26,seriesLabelFmt:27},null,[-1,-1])}}function Gn(l){let e,t,i;e=new Un({props:{type:l[38],fillColor:l[72],fillOpacity:l[39],outlineColor:l[71],outlineWidth:l[40],labels:l[43],labelSize:l[44],labelPosition:l[45],labelColor:l[69],labelFmt:l[46],yLabelFmt:l[47],y2LabelFmt:l[48],stackTotalLabel:l[49],seriesLabels:l[50],showAllLabels:l[51],y2SeriesType:l[9],seriesOrder:l[60],seriesLabelFmt:l[62]}});const s=l[81].default,n=ji(s,l,l[82],null);return{c(){ue(e.$$.fragment),t=q(),n&&n.c()},l(r){fe(e.$$.fragment,r),t=G(r),n&&n.l(r)},m(r,f){oe(e,r,f),b(r,t,f),n&&n.m(r,f),i=!0},p(r,f){const a={};f[1]&128&&(a.type=r[38]),f[2]&1024&&(a.fillColor=r[72]),f[1]&256&&(a.fillOpacity=r[39]),f[2]&512&&(a.outlineColor=r[71]),f[1]&512&&(a.outlineWidth=r[40]),f[1]&4096&&(a.labels=r[43]),f[1]&8192&&(a.labelSize=r[44]),f[1]&16384&&(a.labelPosition=r[45]),f[2]&128&&(a.labelColor=r[69]),f[1]&32768&&(a.labelFmt=r[46]),f[1]&65536&&(a.yLabelFmt=r[47]),f[1]&131072&&(a.y2LabelFmt=r[48]),f[1]&262144&&(a.stackTotalLabel=r[49]),f[1]&524288&&(a.seriesLabels=r[50]),f[1]&1048576&&(a.showAllLabels=r[51]),f[0]&512&&(a.y2SeriesType=r[9]),f[1]&536870912&&(a.seriesOrder=r[60]),f[2]&1&&(a.seriesLabelFmt=r[62]),e.$set(a),n&&n.p&&(!i||f[2]&1048576)&&Yi(n,s,r,r[82],i?Xi(s,r[82],f,null):xi(r[82]),null)},i(r){i||(F(e.$$.fragment,r),F(n,r),i=!0)},o(r){H(e.$$.fragment,r),H(n,r),i=!1},d(r){r&&m(t),ae(e,r),n&&n.d(r)}}}function qn(l){let e,t;return e=new as({props:{data:l[1],x:l[2],y:l[3],y2:l[4],xFmt:l[12],yFmt:l[10],y2Fmt:l[11],series:l[5],xType:l[6],yLog:l[7],yLogBase:l[8],legend:l[15],xAxisTitle:l[16],yAxisTitle:l[17],y2AxisTitle:l[18],xGridlines:l[19],yGridlines:l[20],y2Gridlines:l[21],xAxisLabels:l[22],yAxisLabels:l[23],y2AxisLabels:l[24],xBaseline:l[25],yBaseline:l[26],y2Baseline:l[27],xTickMarks:l[28],yTickMarks:l[29],y2TickMarks:l[30],yAxisColor:l[68],y2AxisColor:l[67],yMin:l[31],yMax:l[32],yScale:l[33],y2Min:l[34],y2Max:l[35],y2Scale:l[36],swapXY:l[0],title:l[13],subtitle:l[14],chartType:"Bar Chart",stackType:l[38],sort:l[42],stacked100:l[73],chartAreaHeight:l[41],showAllXAxisLabels:l[37],colorPalette:l[70],echartsOptions:l[52],seriesOptions:l[53],printEchartsConfig:l[54],emptySet:l[55],emptyMessage:l[56],renderer:l[57],downloadableData:l[58],downloadableImage:l[59],connectGroup:l[61],xLabelWrap:l[65],seriesColors:l[66],leftPadding:l[63],rightPadding:l[64],$$slots:{default:[Gn]},$$scope:{ctx:l}}}),{c(){ue(e.$$.fragment)},l(i){fe(e.$$.fragment,i)},m(i,s){oe(e,i,s),t=!0},p(i,s){const n={};s[0]&2&&(n.data=i[1]),s[0]&4&&(n.x=i[2]),s[0]&8&&(n.y=i[3]),s[0]&16&&(n.y2=i[4]),s[0]&4096&&(n.xFmt=i[12]),s[0]&1024&&(n.yFmt=i[10]),s[0]&2048&&(n.y2Fmt=i[11]),s[0]&32&&(n.series=i[5]),s[0]&64&&(n.xType=i[6]),s[0]&128&&(n.yLog=i[7]),s[0]&256&&(n.yLogBase=i[8]),s[0]&32768&&(n.legend=i[15]),s[0]&65536&&(n.xAxisTitle=i[16]),s[0]&131072&&(n.yAxisTitle=i[17]),s[0]&262144&&(n.y2AxisTitle=i[18]),s[0]&524288&&(n.xGridlines=i[19]),s[0]&1048576&&(n.yGridlines=i[20]),s[0]&2097152&&(n.y2Gridlines=i[21]),s[0]&4194304&&(n.xAxisLabels=i[22]),s[0]&8388608&&(n.yAxisLabels=i[23]),s[0]&16777216&&(n.y2AxisLabels=i[24]),s[0]&33554432&&(n.xBaseline=i[25]),s[0]&67108864&&(n.yBaseline=i[26]),s[0]&134217728&&(n.y2Baseline=i[27]),s[0]&268435456&&(n.xTickMarks=i[28]),s[0]&536870912&&(n.yTickMarks=i[29]),s[0]&1073741824&&(n.y2TickMarks=i[30]),s[2]&64&&(n.yAxisColor=i[68]),s[2]&32&&(n.y2AxisColor=i[67]),s[1]&1&&(n.yMin=i[31]),s[1]&2&&(n.yMax=i[32]),s[1]&4&&(n.yScale=i[33]),s[1]&8&&(n.y2Min=i[34]),s[1]&16&&(n.y2Max=i[35]),s[1]&32&&(n.y2Scale=i[36]),s[0]&1&&(n.swapXY=i[0]),s[0]&8192&&(n.title=i[13]),s[0]&16384&&(n.subtitle=i[14]),s[1]&128&&(n.stackType=i[38]),s[1]&2048&&(n.sort=i[42]),s[1]&1024&&(n.chartAreaHeight=i[41]),s[1]&64&&(n.showAllXAxisLabels=i[37]),s[2]&256&&(n.colorPalette=i[70]),s[1]&2097152&&(n.echartsOptions=i[52]),s[1]&4194304&&(n.seriesOptions=i[53]),s[1]&8388608&&(n.printEchartsConfig=i[54]),s[1]&16777216&&(n.emptySet=i[55]),s[1]&33554432&&(n.emptyMessage=i[56]),s[1]&67108864&&(n.renderer=i[57]),s[1]&134217728&&(n.downloadableData=i[58]),s[1]&268435456&&(n.downloadableImage=i[59]),s[1]&1073741824&&(n.connectGroup=i[61]),s[2]&8&&(n.xLabelWrap=i[65]),s[2]&16&&(n.seriesColors=i[66]),s[2]&2&&(n.leftPadding=i[63]),s[2]&4&&(n.rightPadding=i[64]),s[0]&512|s[1]&538964864|s[2]&1050241&&(n.$$scope={dirty:s,ctx:i}),e.$set(n)},i(i){t||(F(e.$$.fragment,i),t=!0)},o(i){H(e.$$.fragment,i),t=!1},d(i){ae(e,i)}}}function Wn(l,e,t){let i,s,n,r,f,a,_,{$$slots:T={},$$scope:A}=e;const{resolveColor:O,resolveColorsObject:k,resolveColorPalette:E}=ii();let{data:d=void 0}=e,{x:M=void 0}=e,{y:R=void 0}=e,{y2:W=void 0}=e,{series:N=void 0}=e,{xType:V=void 0}=e,{yLog:J=void 0}=e,{yLogBase:j=void 0}=e,{y2SeriesType:K=void 0}=e,{yFmt:$=void 0}=e,{y2Fmt:I=void 0}=e,{xFmt:g=void 0}=e,{title:U=void 0}=e,{subtitle:P=void 0}=e,{legend:w=void 0}=e,{xAxisTitle:Y=void 0}=e,{yAxisTitle:z=W?"true":void 0}=e,{y2AxisTitle:ee=W?"true":void 0}=e,{xGridlines:he=void 0}=e,{yGridlines:ne=void 0}=e,{y2Gridlines:ie=void 0}=e,{xAxisLabels:be=void 0}=e,{yAxisLabels:se=void 0}=e,{y2AxisLabels:v=void 0}=e,{xBaseline:te=void 0}=e,{yBaseline:ce=void 0}=e,{y2Baseline:me=void 0}=e,{xTickMarks:B=void 0}=e,{yTickMarks:le=void 0}=e,{y2TickMarks:de=void 0}=e,{yMin:Se=void 0}=e,{yMax:p=void 0}=e,{yScale:Ee=void 0}=e,{y2Min:Z=void 0}=e,{y2Max:ye=void 0}=e,{y2Scale:Ae=void 0}=e,{swapXY:_e=!1}=e,{showAllXAxisLabels:ke}=e,{type:Ie="stacked"}=e,we=Ie==="stacked100",{fillColor:He=void 0}=e,{fillOpacity:Le=void 0}=e,{outlineColor:Pe=void 0}=e,{outlineWidth:Me=void 0}=e,{chartAreaHeight:C=void 0}=e,{sort:Ce=void 0}=e,{colorPalette:De="default"}=e,{labels:xe=void 0}=e,{labelSize:Ne=void 0}=e,{labelPosition:Ye=void 0}=e,{labelColor:je=void 0}=e,{labelFmt:Re=void 0}=e,{yLabelFmt:Xe=void 0}=e,{y2LabelFmt:Qe=void 0}=e,{stackTotalLabel:ve=void 0}=e,{seriesLabels:Ke=void 0}=e,{showAllLabels:S=void 0}=e,{yAxisColor:ge=void 0}=e,{y2AxisColor:Je=void 0}=e,{echartsOptions:h=void 0}=e,{seriesOptions:at=void 0}=e,{printEchartsConfig:mt=!1}=e,{emptySet:lt=void 0}=e,{emptyMessage:Wt=void 0}=e,{renderer:St=void 0}=e,{downloadableData:Et=void 0}=e,{downloadableImage:et=void 0}=e,{seriesColors:st=void 0}=e,{seriesOrder:Qt=void 0}=e,{connectGroup:Ft=void 0}=e,{seriesLabelFmt:ot=void 0}=e,{leftPadding:Dt=void 0}=e,{rightPadding:tt=void 0}=e,{xLabelWrap:At=void 0}=e;return l.$$set=u=>{"data"in u&&t(1,d=u.data),"x"in u&&t(2,M=u.x),"y"in u&&t(3,R=u.y),"y2"in u&&t(4,W=u.y2),"series"in u&&t(5,N=u.series),"xType"in u&&t(6,V=u.xType),"yLog"in u&&t(7,J=u.yLog),"yLogBase"in u&&t(8,j=u.yLogBase),"y2SeriesType"in u&&t(9,K=u.y2SeriesType),"yFmt"in u&&t(10,$=u.yFmt),"y2Fmt"in u&&t(11,I=u.y2Fmt),"xFmt"in u&&t(12,g=u.xFmt),"title"in u&&t(13,U=u.title),"subtitle"in u&&t(14,P=u.subtitle),"legend"in u&&t(15,w=u.legend),"xAxisTitle"in u&&t(16,Y=u.xAxisTitle),"yAxisTitle"in u&&t(17,z=u.yAxisTitle),"y2AxisTitle"in u&&t(18,ee=u.y2AxisTitle),"xGridlines"in u&&t(19,he=u.xGridlines),"yGridlines"in u&&t(20,ne=u.yGridlines),"y2Gridlines"in u&&t(21,ie=u.y2Gridlines),"xAxisLabels"in u&&t(22,be=u.xAxisLabels),"yAxisLabels"in u&&t(23,se=u.yAxisLabels),"y2AxisLabels"in u&&t(24,v=u.y2AxisLabels),"xBaseline"in u&&t(25,te=u.xBaseline),"yBaseline"in u&&t(26,ce=u.yBaseline),"y2Baseline"in u&&t(27,me=u.y2Baseline),"xTickMarks"in u&&t(28,B=u.xTickMarks),"yTickMarks"in u&&t(29,le=u.yTickMarks),"y2TickMarks"in u&&t(30,de=u.y2TickMarks),"yMin"in u&&t(31,Se=u.yMin),"yMax"in u&&t(32,p=u.yMax),"yScale"in u&&t(33,Ee=u.yScale),"y2Min"in u&&t(34,Z=u.y2Min),"y2Max"in u&&t(35,ye=u.y2Max),"y2Scale"in u&&t(36,Ae=u.y2Scale),"swapXY"in u&&t(0,_e=u.swapXY),"showAllXAxisLabels"in u&&t(37,ke=u.showAllXAxisLabels),"type"in u&&t(38,Ie=u.type),"fillColor"in u&&t(74,He=u.fillColor),"fillOpacity"in u&&t(39,Le=u.fillOpacity),"outlineColor"in u&&t(75,Pe=u.outlineColor),"outlineWidth"in u&&t(40,Me=u.outlineWidth),"chartAreaHeight"in u&&t(41,C=u.chartAreaHeight),"sort"in u&&t(42,Ce=u.sort),"colorPalette"in u&&t(76,De=u.colorPalette),"labels"in u&&t(43,xe=u.labels),"labelSize"in u&&t(44,Ne=u.labelSize),"labelPosition"in u&&t(45,Ye=u.labelPosition),"labelColor"in u&&t(77,je=u.labelColor),"labelFmt"in u&&t(46,Re=u.labelFmt),"yLabelFmt"in u&&t(47,Xe=u.yLabelFmt),"y2LabelFmt"in u&&t(48,Qe=u.y2LabelFmt),"stackTotalLabel"in u&&t(49,ve=u.stackTotalLabel),"seriesLabels"in u&&t(50,Ke=u.seriesLabels),"showAllLabels"in u&&t(51,S=u.showAllLabels),"yAxisColor"in u&&t(78,ge=u.yAxisColor),"y2AxisColor"in u&&t(79,Je=u.y2AxisColor),"echartsOptions"in u&&t(52,h=u.echartsOptions),"seriesOptions"in u&&t(53,at=u.seriesOptions),"printEchartsConfig"in u&&t(54,mt=u.printEchartsConfig),"emptySet"in u&&t(55,lt=u.emptySet),"emptyMessage"in u&&t(56,Wt=u.emptyMessage),"renderer"in u&&t(57,St=u.renderer),"downloadableData"in u&&t(58,Et=u.downloadableData),"downloadableImage"in u&&t(59,et=u.downloadableImage),"seriesColors"in u&&t(80,st=u.seriesColors),"seriesOrder"in u&&t(60,Qt=u.seriesOrder),"connectGroup"in u&&t(61,Ft=u.connectGroup),"seriesLabelFmt"in u&&t(62,ot=u.seriesLabelFmt),"leftPadding"in u&&t(63,Dt=u.leftPadding),"rightPadding"in u&&t(64,tt=u.rightPadding),"xLabelWrap"in u&&t(65,At=u.xLabelWrap),"$$scope"in u&&t(82,A=u.$$scope)},l.$$.update=()=>{l.$$.dirty[0]&1&&(_e==="true"||_e===!0?t(0,_e=!0):t(0,_e=!1)),l.$$.dirty[2]&4096&&t(72,i=O(He)),l.$$.dirty[2]&8192&&t(71,s=O(Pe)),l.$$.dirty[2]&16384&&t(70,n=E(De)),l.$$.dirty[2]&32768&&t(69,r=O(je)),l.$$.dirty[2]&65536&&t(68,f=O(ge)),l.$$.dirty[2]&131072&&t(67,a=O(Je)),l.$$.dirty[2]&262144&&t(66,_=k(st))},[_e,d,M,R,W,N,V,J,j,K,$,I,g,U,P,w,Y,z,ee,he,ne,ie,be,se,v,te,ce,me,B,le,de,Se,p,Ee,Z,ye,Ae,ke,Ie,Le,Me,C,Ce,xe,Ne,Ye,Re,Xe,Qe,ve,Ke,S,h,at,mt,lt,Wt,St,Et,et,Qt,Ft,ot,Dt,tt,At,_,a,f,r,n,s,i,we,He,Pe,De,je,ge,Je,st,T,A]}class zn extends Mt{constructor(e){super(),Rt(this,e,Wn,qn,Ot,{data:1,x:2,y:3,y2:4,series:5,xType:6,yLog:7,yLogBase:8,y2SeriesType:9,yFmt:10,y2Fmt:11,xFmt:12,title:13,subtitle:14,legend:15,xAxisTitle:16,yAxisTitle:17,y2AxisTitle:18,xGridlines:19,yGridlines:20,y2Gridlines:21,xAxisLabels:22,yAxisLabels:23,y2AxisLabels:24,xBaseline:25,yBaseline:26,y2Baseline:27,xTickMarks:28,yTickMarks:29,y2TickMarks:30,yMin:31,yMax:32,yScale:33,y2Min:34,y2Max:35,y2Scale:36,swapXY:0,showAllXAxisLabels:37,type:38,fillColor:74,fillOpacity:39,outlineColor:75,outlineWidth:40,chartAreaHeight:41,sort:42,colorPalette:76,labels:43,labelSize:44,labelPosition:45,labelColor:77,labelFmt:46,yLabelFmt:47,y2LabelFmt:48,stackTotalLabel:49,seriesLabels:50,showAllLabels:51,yAxisColor:78,y2AxisColor:79,echartsOptions:52,seriesOptions:53,printEchartsConfig:54,emptySet:55,emptyMessage:56,renderer:57,downloadableData:58,downloadableImage:59,seriesColors:80,seriesOrder:60,connectGroup:61,seriesLabelFmt:62,leftPadding:63,rightPadding:64,xLabelWrap:65},null,[-1,-1,-1])}}function Vn(l){let e,t;return e=new Rs({props:{error:l[3]}}),{c(){ue(e.$$.fragment)},l(i){fe(e.$$.fragment,i)},m(i,s){oe(e,i,s),t=!0},p(i,s){const n={};s&8&&(n.error=i[3]),e.$set(n)},i(i){t||(F(e.$$.fragment,i),t=!0)},o(i){H(e.$$.fragment,i),t=!1},d(i){ae(e,i)}}}function jn(l){let e,t=Ut(l[2],l[4])+"",i,s,n,r=l[1]&&Vl(l);return{c(){e=X("span"),i=Fi(t),s=q(),r&&r.c(),this.h()},l(f){e=x(f,"SPAN",{style:!0});var a=$e(e);i=Ri(a,t),s=G(a),r&&r.l(a),a.forEach(m),this.h()},h(){D(e,"color",l[5])},m(f,a){b(f,e,a),pe(e,i),pe(e,s),r&&r.m(e,null),n=!0},p(f,a){(!n||a&20)&&t!==(t=Ut(f[2],f[4])+"")&&dl(i,t),f[1]?r?(r.p(f,a),a&2&&F(r,1)):(r=Vl(f),r.c(),F(r,1),r.m(e,null)):r&&(ft(),H(r,1,1,()=>{r=null}),ut()),(!n||a&32)&&D(e,"color",f[5])},i(f){n||(F(r),n=!0)},o(f){H(r),n=!1},d(f){f&&m(e),r&&r.d()}}}function Yn(l){let e,t,i,s,n,r="Placeholder: no data currently referenced.";return{c(){e=X("span"),t=Fi("["),i=Fi(l[0]),s=Fi("]"),n=X("span"),n.textContent=r,this.h()},l(f){e=x(f,"SPAN",{class:!0});var a=$e(e);t=Ri(a,"["),i=Ri(a,l[0]),s=Ri(a,"]"),n=x(a,"SPAN",{class:!0,"data-svelte-h":!0}),Oe(n)!=="svelte-ddarzq"&&(n.textContent=r),a.forEach(m),this.h()},h(){L(n,"class","error-msg svelte-1qvl5jp"),L(e,"class","placeholder svelte-1qvl5jp")},m(f,a){b(f,e,a),pe(e,t),pe(e,i),pe(e,s),pe(e,n)},p(f,a){a&1&&dl(i,f[0])},i:Te,o:Te,d(f){f&&m(e)}}}function Vl(l){let e,t;return e=new Fs({props:{description:l[1]}}),{c(){ue(e.$$.fragment)},l(i){fe(e.$$.fragment,i)},m(i,s){oe(e,i,s),t=!0},p(i,s){const n={};s&2&&(n.description=i[1]),e.$set(n)},i(i){t||(F(e.$$.fragment,i),t=!0)},o(i){H(e.$$.fragment,i),t=!1},d(i){ae(e,i)}}}function xn(l){let e,t,i,s;const n=[Yn,jn,Vn],r=[];function f(a,_){return a[0]?0:a[3]?2:1}return e=f(l),t=r[e]=n[e](l),{c(){t.c(),i=rt()},l(a){t.l(a),i=rt()},m(a,_){r[e].m(a,_),b(a,i,_),s=!0},p(a,[_]){let T=e;e=f(a),e===T?r[e].p(a,_):(ft(),H(r[T],1,1,()=>{r[T]=null}),ut(),t=r[e],t?t.p(a,_):(t=r[e]=n[e](a),t.c()),F(t,1),t.m(i.parentNode,i))},i(a){s||(F(t),s=!0)},o(a){H(t),s=!1},d(a){a&&m(i),r[e].d(a)}}}function Xn(l,e,t){let i,s,n=Te,r=()=>(n(),n=bt(i,j=>t(15,s=j)),i);l.$$.on_destroy.push(()=>n());const{resolveColor:f}=ii();let{data:a=null}=e,{row:_=0}=e,{column:T=null}=e,{value:A=null}=e,{placeholder:O=null}=e,{description:k=void 0}=e,{fmt:E=void 0}=e,d,M,R,{color:W=void 0}=e,N="",{redNegatives:V=!1}=e,J;return l.$$set=j=>{"data"in j&&t(7,a=j.data),"row"in j&&t(10,_=j.row),"column"in j&&t(8,T=j.column),"value"in j&&t(11,A=j.value),"placeholder"in j&&t(0,O=j.placeholder),"description"in j&&t(1,k=j.description),"fmt"in j&&t(12,E=j.fmt),"color"in j&&t(13,W=j.color),"redNegatives"in j&&t(9,V=j.redNegatives)},l.$$.update=()=>{var j;if(l.$$.dirty&2304&&t(8,T=T??A),l.$$.dirty&21897)try{if(t(3,R=void 0),!O)if(a){if(typeof a=="string")throw Error(`Received: data=${a}, expected: data={${a}}`);if(Array.isArray(a)||t(7,a=[a]),isNaN(_))throw Error("row must be a number (row="+_+")");try{Object.keys(a[_])[0]}catch{throw Error("Row "+_+" does not exist in the dataset")}t(8,T=T??Object.keys(a[_])[0]),ul(a,[T]),t(14,J=$i(a,"array"));const K=J.filter($=>{var I;return $.type==="date"&&!(((I=a[0])==null?void 0:I[$.id])instanceof Date)}).map($=>$.id);for(let $=0;$<K.length;$++)t(7,a=Ms(a,K[$]));t(2,M=a[_][T]),t(14,J=J.filter($=>$.id===T)),E?t(4,d=Bt(E,(j=J[0].format)==null?void 0:j.valueType)):t(4,d=J[0].format)}else throw Error("No data provided. If you referenced a query result, check that the name is correct.")}catch(K){if(t(3,R=K.message),console.error("\x1B[31m%s\x1B[0m",`Error in Value: ${R}`),$l)throw R}l.$$.dirty&2304&&A&&T&&console.warn('Both "value" and "column" were supplied as props to Value. "value" will be ignored.'),l.$$.dirty&8192&&r(t(6,i=f(W))),l.$$.dirty&512&&t(9,V=V==="true"||V===!0),l.$$.dirty&33284&&(V||s)&&(V&&M<0?t(5,N="rgb(220 38 38)"):s&&t(5,N=s))},[O,k,M,R,d,N,i,a,T,V,_,A,E,W,J,s]}class Qn extends Mt{constructor(e){super(),Rt(this,e,Xn,xn,Ot,{data:7,row:10,column:8,value:11,placeholder:0,description:1,fmt:12,color:13,redNegatives:9})}}function Jn(l){let e;const t=l[7].default,i=ji(t,l,l[8],null);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,n){i&&i.m(s,n),e=!0},p(s,n){i&&i.p&&(!e||n&256)&&Yi(i,t,s,s[8],e?Xi(t,s[8],n,null):xi(s[8]),null)},i(s){e||(F(i,s),e=!0)},o(s){H(i,s),e=!1},d(s){i&&i.d(s)}}}function Kn(l){let e,t;const i=[l[4],{data:Lt.isQuery(l[11])?Array.from(l[11]):l[11]}];let s={$$slots:{default:[Jn]},$$scope:{ctx:l}};for(let n=0;n<i.length;n+=1)s=ti(s,i[n]);return e=new Qn({props:s}),{c(){ue(e.$$.fragment)},l(n){fe(e.$$.fragment,n)},m(n,r){oe(e,n,r),t=!0},p(n,r){const f=r&2064?is(i,[r&16&&ls(n[4]),r&2048&&{data:Lt.isQuery(n[11])?Array.from(n[11]):n[11]}]):{};r&256&&(f.$$scope={dirty:r,ctx:n}),e.$set(f)},i(n){t||(F(e.$$.fragment,n),t=!0)},o(n){H(e.$$.fragment,n),t=!1},d(n){ae(e,n)}}}function jl(l){let e,t;return e=new ss({props:{emptyMessage:l[2],emptySet:l[1],chartType:$n,isInitial:l[3]}}),{c(){ue(e.$$.fragment)},l(i){fe(e.$$.fragment,i)},m(i,s){oe(e,i,s),t=!0},p(i,s){const n={};s&4&&(n.emptyMessage=i[2]),s&2&&(n.emptySet=i[1]),s&8&&(n.isInitial=i[3]),e.$set(n)},i(i){t||(F(e.$$.fragment,i),t=!0)},o(i){H(e.$$.fragment,i),t=!1},d(i){ae(e,i)}}}function Zn(l){let e,t,i=!l[4].placeholder&&jl(l);return{c(){e=X("span"),i&&i.c(),this.h()},l(s){e=x(s,"SPAN",{slot:!0});var n=$e(e);i&&i.l(n),n.forEach(m),this.h()},h(){L(e,"slot","empty")},m(s,n){b(s,e,n),i&&i.m(e,null),t=!0},p(s,n){s[4].placeholder?i&&(ft(),H(i,1,1,()=>{i=null}),ut()):i?(i.p(s,n),n&16&&F(i,1)):(i=jl(s),i.c(),F(i,1),i.m(e,null))},i(s){t||(F(i),t=!0)},o(s){H(i),t=!1},d(s){s&&m(e),i&&i.d()}}}function pn(l){let e,t="Loading...";return{c(){e=X("span"),e.textContent=t,this.h()},l(i){e=x(i,"SPAN",{slot:!0,class:!0,"data-svelte-h":!0}),Oe(e)!=="svelte-89gxhc"&&(e.textContent=t),this.h()},h(){L(e,"slot","skeleton"),L(e,"class","text-base-content-muted")},m(i,s){b(i,e,s)},p:Te,d(i){i&&m(e)}}}function vn(l){let e,t;return e=new ts({props:{data:l[0],$$slots:{skeleton:[pn],empty:[Zn],default:[Kn,({loaded:i})=>({11:i}),({loaded:i})=>i?2048:0]},$$scope:{ctx:l}}}),{c(){ue(e.$$.fragment)},l(i){fe(e.$$.fragment,i)},m(i,s){oe(e,i,s),t=!0},p(i,[s]){const n={};s&1&&(n.data=i[0]),s&2334&&(n.$$scope={dirty:s,ctx:i}),e.$set(n)},i(i){t||(F(e.$$.fragment,i),t=!0)},o(i){H(e.$$.fragment,i),t=!1},d(i){ae(e,i)}}}let $n="Value";function er(l,e,t){let i,{$$slots:s={},$$scope:n}=e,{data:r}=e,{column:f}=e,{agg:a}=e;const _=Lt.isQuery(r)?r.hash:void 0;let T=(r==null?void 0:r.hash)===_,{emptySet:A=void 0}=e,{emptyMessage:O=void 0}=e;return l.$$set=k=>{t(10,e=ti(ti({},e),qi(k))),"data"in k&&t(0,r=k.data),"column"in k&&t(5,f=k.column),"agg"in k&&t(6,a=k.agg),"emptySet"in k&&t(1,A=k.emptySet),"emptyMessage"in k&&t(2,O=k.emptyMessage),"$$scope"in k&&t(8,n=k.$$scope)},l.$$.update=()=>{l.$$.dirty&97&&a&&t(0,r=r.groupBy(void 0).agg({[a]:{col:f,as:f}})),l.$$.dirty&1&&t(3,T=(r==null?void 0:r.hash)===_),t(4,i=Object.fromEntries(Object.entries(e).filter(([,k])=>k!==void 0)))},e=qi(e),[r,A,O,T,i,f,a,s,n]}class vi extends Mt{constructor(e){super(),Rt(this,e,er,vn,Ot,{data:0,column:5,agg:6,emptySet:1,emptyMessage:2})}}function tr(l){let e,t=Fe.title+"",i;return{c(){e=X("h1"),i=Fi(t),this.h()},l(s){e=x(s,"H1",{class:!0});var n=$e(e);i=Ri(n,t),n.forEach(m),this.h()},h(){L(e,"class","title")},m(s,n){b(s,e,n),pe(e,i)},p:Te,d(s){s&&m(e)}}}function ir(l){return{c(){this.h()},l(e){this.h()},h(){document.title="Evidence"},m:Te,p:Te,d:Te}}function lr(l){let e,t,i,s,n;return document.title=e=Fe.title,{c(){t=q(),i=X("meta"),s=q(),n=X("meta"),this.h()},l(r){t=G(r),i=x(r,"META",{property:!0,content:!0}),s=G(r),n=x(r,"META",{name:!0,content:!0}),this.h()},h(){var r,f;L(i,"property","og:title"),L(i,"content",((r=Fe.og)==null?void 0:r.title)??Fe.title),L(n,"name","twitter:title"),L(n,"content",((f=Fe.og)==null?void 0:f.title)??Fe.title)},m(r,f){b(r,t,f),b(r,i,f),b(r,s,f),b(r,n,f)},p(r,f){f&0&&e!==(e=Fe.title)&&(document.title=e)},d(r){r&&(m(t),m(i),m(s),m(n))}}}function sr(l){var n;let e,t,i=nr(),s=((n=Fe.og)==null?void 0:n.image)&&rr();return{c(){i&&i.c(),e=q(),s&&s.c(),t=rt()},l(r){i&&i.l(r),e=G(r),s&&s.l(r),t=rt()},m(r,f){i&&i.m(r,f),b(r,e,f),s&&s.m(r,f),b(r,t,f)},p(r,f){var a;i.p(r,f),(a=Fe.og)!=null&&a.image&&s.p(r,f)},d(r){r&&(m(e),m(t)),i&&i.d(r),s&&s.d(r)}}}function nr(l){let e,t,i,s,n;return{c(){e=X("meta"),t=q(),i=X("meta"),s=q(),n=X("meta"),this.h()},l(r){e=x(r,"META",{name:!0,content:!0}),t=G(r),i=x(r,"META",{property:!0,content:!0}),s=G(r),n=x(r,"META",{name:!0,content:!0}),this.h()},h(){var r,f;L(e,"name","description"),L(e,"content",Fe.description),L(i,"property","og:description"),L(i,"content",((r=Fe.og)==null?void 0:r.description)??Fe.description),L(n,"name","twitter:description"),L(n,"content",((f=Fe.og)==null?void 0:f.description)??Fe.description)},m(r,f){b(r,e,f),b(r,t,f),b(r,i,f),b(r,s,f),b(r,n,f)},p:Te,d(r){r&&(m(e),m(t),m(i),m(s),m(n))}}}function rr(l){let e,t,i;return{c(){e=X("meta"),t=q(),i=X("meta"),this.h()},l(s){e=x(s,"META",{property:!0,content:!0}),t=G(s),i=x(s,"META",{name:!0,content:!0}),this.h()},h(){var s,n;L(e,"property","og:image"),L(e,"content",Ol((s=Fe.og)==null?void 0:s.image)),L(i,"name","twitter:image"),L(i,"content",Ol((n=Fe.og)==null?void 0:n.image))},m(s,n){b(s,e,n),b(s,t,n),b(s,i,n)},p:Te,d(s){s&&(m(e),m(t),m(i))}}}function Yl(l){let e,t;return e=new Ni({props:{queryID:"risk_summary",queryResult:l[0]}}),{c(){ue(e.$$.fragment)},l(i){fe(e.$$.fragment,i)},m(i,s){oe(e,i,s),t=!0},p(i,s){const n={};s[0]&1&&(n.queryResult=i[0]),e.$set(n)},i(i){t||(F(e.$$.fragment,i),t=!0)},o(i){H(e.$$.fragment,i),t=!1},d(i){ae(e,i)}}}function xl(l){let e,t;return e=new Ni({props:{queryID:"wash_events",queryResult:l[1]}}),{c(){ue(e.$$.fragment)},l(i){fe(e.$$.fragment,i)},m(i,s){oe(e,i,s),t=!0},p(i,s){const n={};s[0]&2&&(n.queryResult=i[1]),e.$set(n)},i(i){t||(F(e.$$.fragment,i),t=!0)},o(i){H(e.$$.fragment,i),t=!1},d(i){ae(e,i)}}}function Xl(l){let e,t;return e=new Ni({props:{queryID:"slippage_summary",queryResult:l[2]}}),{c(){ue(e.$$.fragment)},l(i){fe(e.$$.fragment,i)},m(i,s){oe(e,i,s),t=!0},p(i,s){const n={};s[0]&4&&(n.queryResult=i[2]),e.$set(n)},i(i){t||(F(e.$$.fragment,i),t=!0)},o(i){H(e.$$.fragment,i),t=!1},d(i){ae(e,i)}}}function Ql(l){let e,t;return e=new Ni({props:{queryID:"spikes",queryResult:l[3]}}),{c(){ue(e.$$.fragment)},l(i){fe(e.$$.fragment,i)},m(i,s){oe(e,i,s),t=!0},p(i,s){const n={};s[0]&8&&(n.queryResult=i[3]),e.$set(n)},i(i){t||(F(e.$$.fragment,i),t=!0)},o(i){H(e.$$.fragment,i),t=!1},d(i){ae(e,i)}}}function Jl(l){let e,t;return e=new Ni({props:{queryID:"risk_scores",queryResult:l[4]}}),{c(){ue(e.$$.fragment)},l(i){fe(e.$$.fragment,i)},m(i,s){oe(e,i,s),t=!0},p(i,s){const n={};s[0]&16&&(n.queryResult=i[4]),e.$set(n)},i(i){t||(F(e.$$.fragment,i),t=!0)},o(i){H(e.$$.fragment,i),t=!1},d(i){ae(e,i)}}}function Kl(l){let e,t;return e=new Ni({props:{queryID:"daily_volume",queryResult:l[5]}}),{c(){ue(e.$$.fragment)},l(i){fe(e.$$.fragment,i)},m(i,s){oe(e,i,s),t=!0},p(i,s){const n={};s[0]&32&&(n.queryResult=i[5]),e.$set(n)},i(i){t||(F(e.$$.fragment,i),t=!0)},o(i){H(e.$$.fragment,i),t=!1},d(i){ae(e,i)}}}function ar(l){let e,t,i,s,n,r,f='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> <span>HOME</span>',a,_,T='<a href="#-sentinelsql--analyse-de-fraude-financière">🏦 SentinelSQL – Analyse de Fraude Financière</a>',A,O,k='<em class="markdown">Démonstration de maîtrise SQL avancée avec DuckDB et Evidence.dev – Projet MIAGE Université Paris Dauphine</em>',E,d,M,R,W='<a href="#-tableau-de-bord-de-risque-global">📊 Tableau de Bord de Risque Global</a>',N,V,J,j,K,$,I,g,U,P,w,Y='<strong class="markdown">Explication métier</strong> : Ces indicateurs clés (KPIs) donnent une vision d&#39;ensemble de l&#39;activité du marché. Ils servent de point de départ pour détecter des comportements anormaux. Par exemple, un volume total disproportionné par rapport au nombre d&#39;utilisateurs peut révéler une concentration de trading suspecte.',z,ee,he,ne,ie='<a href="#-détection-de-wash-trading">🔍 Détection de Wash Trading</a>',be,se,v='<strong class="markdown">Problème métier</strong> : Le wash trading consiste à acheter et vendre rapidement le même actif par le même utilisateur, créant artificiellement du volume et de la liquidité. Cette pratique fausse les données de marché et peut masquer des manipulations.',te,ce,me,B,le,de='<strong class="markdown">Comment interpréter ces données</strong> : Ce tableau liste les utilisateurs et actifs présentant le plus grand nombre de transactions suspectes de wash trading (achat-vente en moins de 10 secondes). Un nombre élevé (<code class="markdown">wash_count</code>) indique une activité potentiellement frauduleuse. L&#39;écart moyen permet d&#39;évaluer la rapidité des opérations.',Se,p,Ee='<strong class="markdown">Logique technique</strong> : Self-join sur <code class="markdown">user_id</code>, <code class="markdown">asset_id</code>, <code class="markdown">price</code> avec une fenêtre temporelle de 10 secondes. Utilisation de <code class="markdown">EXTRACT(EPOCH)</code> pour calculer la différence en secondes.',Z,ye,Ae,_e,ke='<a href="#-volatilité-relative--slippage">📉 Volatilité Relative &amp; Slippage</a>',Ie,we,He='<strong class="markdown">Problème métier</strong> : Le slippage mesure l&#39;écart entre le prix d&#39;exécution d&#39;une transaction et le prix de marché au même instant. Un slippage élevé peut indiquer des problèmes de liquidité, du front-running ou des manipulations de prix.',Le,Pe,Me,C,Ce,De='<strong class="markdown">Comment interpréter ces données</strong> : Ce graphique montre le slippage moyen pour chaque actif. Un slippage supérieur à 1% est généralement considéré comme élevé et peut signaler des conditions de marché défavorables.',xe,Ne,Ye='<strong class="markdown">Logique technique</strong> : <code class="markdown">ASOF JOIN</code> aligne chaque transaction avec le dernier prix de marché connu. DuckDB optimise cette jointure pour les séries temporelles.',je,Re,Xe,Qe,ve='<a href="#-anomalies-de-volume-pics">🚨 Anomalies de Volume (Pics)</a>',Ke,S,ge='<strong class="markdown">Problème métier</strong> : Des pics de volume sur de courtes périodes peuvent révéler des manipulations de marché ou du trading d&#39;initié.',Je,h,at,mt,lt,Wt='<strong class="markdown">Comment interpréter ces données</strong> : Ce tableau liste les fenêtres d&#39;une minute où le volume dépasse la moyenne des 24h précédentes. Un <code class="markdown">volume_ratio</code> élevé signale une anomalie statistique.',St,Et,et,st,Qt='<a href="#-score-de-risque-par-utilisateur">🎯 Score de Risque par Utilisateur</a>',Ft,ot,Dt='<strong class="markdown">Problème métier</strong> : Attribuer un score de risque à chaque utilisateur permet de prioriser les revues de conformité.',tt,At,u,zt,Nt,_i='<strong class="markdown">Logique métier MIAGE</strong> : Un score composite permet d&#39;automatiser le tri des dossiers de compliance.',Jt,It,hi,re,li='<a href="#-évolution-du-volume-quotidien">📅 Évolution du Volume Quotidien</a>',Vt,dt,Ct,Gt,nt,Kt,Ze,it='<a href="#-conclusion-analytique">🧠 Conclusion Analytique</a>',ct,_t,yi='Ce dashboard illustre <strong class="markdown">l&#39;approche MIAGE</strong> :',qt,ht,gi='<li class="markdown"><strong class="markdown">Rigueur SQL</strong> : Utilisation de CTEs et Window Functions.</li> <li class="markdown"><strong class="markdown">Sens métier</strong> : Surveillance financière concrète.</li> <li class="markdown"><strong class="markdown">Performance</strong> : Optimisé pour DuckDB.</li>',jt,Tt,Zt,kt,pt='<em class="markdown">Projet SentinelSQL – Charles Baudoux, MIAGE Université Paris Dauphine</em>',Ht,yt=typeof Fe<"u"&&Fe.title&&Fe.hide_title!==!0&&tr();function Ii(o,y){return typeof Fe<"u"&&Fe.title?lr:ir}let Yt=Ii()(l),gt=typeof Fe=="object"&&sr(),Be=l[0]&&Yl(l);J=new vi({props:{data:l[0],column:"total_trades",title:"Nombre Total de Transactions"}}),K=new vi({props:{data:l[0],column:"unique_users",title:"Utilisateurs Distincts"}}),I=new vi({props:{data:l[0],column:"total_volume",title:"Volume Total (€)",fmt:"eur"}}),U=new vi({props:{data:l[0],column:"avg_trade_size",title:"Taille Moyenne par Transaction",fmt:"eur"}});let Ue=l[1]&&xl(l);me=new rl({props:{data:l[1],title:"Top des Événements de Wash Trading"}});let Ge=l[2]&&Xl(l);Me=new zn({props:{data:l[2],x:"asset_id",y:"avg_slippage_pct",yFmt:"pct",title:"Slippage Moyen par Actif"}});let qe=l[3]&&Ql(l);at=new rl({props:{data:l[3],title:"Pics de Volume (au-delà de 3 écarts-type)"}});let We=l[4]&&Jl(l);u=new rl({props:{data:l[4],title:"Classement des Utilisateurs par Score de Risque"}});let ze=l[5]&&Kl(l);return Ct=new Hn({props:{data:l[5],x:"day",y:"volume",title:"Volume Quotidien (€)"}}),{c(){yt&&yt.c(),e=q(),Yt.c(),t=X("meta"),i=X("meta"),gt&&gt.c(),s=rt(),n=q(),r=X("button"),r.innerHTML=f,a=q(),_=X("h1"),_.innerHTML=T,A=q(),O=X("p"),O.innerHTML=k,E=q(),d=X("hr"),M=q(),R=X("h2"),R.innerHTML=W,N=q(),Be&&Be.c(),V=q(),ue(J.$$.fragment),j=q(),ue(K.$$.fragment),$=q(),ue(I.$$.fragment),g=q(),ue(U.$$.fragment),P=q(),w=X("p"),w.innerHTML=Y,z=q(),ee=X("hr"),he=q(),ne=X("h2"),ne.innerHTML=ie,be=q(),se=X("p"),se.innerHTML=v,te=q(),Ue&&Ue.c(),ce=q(),ue(me.$$.fragment),B=q(),le=X("p"),le.innerHTML=de,Se=q(),p=X("p"),p.innerHTML=Ee,Z=q(),ye=X("hr"),Ae=q(),_e=X("h2"),_e.innerHTML=ke,Ie=q(),we=X("p"),we.innerHTML=He,Le=q(),Ge&&Ge.c(),Pe=q(),ue(Me.$$.fragment),C=q(),Ce=X("p"),Ce.innerHTML=De,xe=q(),Ne=X("p"),Ne.innerHTML=Ye,je=q(),Re=X("hr"),Xe=q(),Qe=X("h2"),Qe.innerHTML=ve,Ke=q(),S=X("p"),S.innerHTML=ge,Je=q(),qe&&qe.c(),h=q(),ue(at.$$.fragment),mt=q(),lt=X("p"),lt.innerHTML=Wt,St=q(),Et=X("hr"),et=q(),st=X("h2"),st.innerHTML=Qt,Ft=q(),ot=X("p"),ot.innerHTML=Dt,tt=q(),We&&We.c(),At=q(),ue(u.$$.fragment),zt=q(),Nt=X("p"),Nt.innerHTML=_i,Jt=q(),It=X("hr"),hi=q(),re=X("h2"),re.innerHTML=li,Vt=q(),ze&&ze.c(),dt=q(),ue(Ct.$$.fragment),Gt=q(),nt=X("hr"),Kt=q(),Ze=X("h2"),Ze.innerHTML=it,ct=q(),_t=X("p"),_t.innerHTML=yi,qt=q(),ht=X("ol"),ht.innerHTML=gi,jt=q(),Tt=X("hr"),Zt=q(),kt=X("p"),kt.innerHTML=pt,this.h()},l(o){yt&&yt.l(o),e=G(o);const y=ds("svelte-2igo1p",document.head);Yt.l(y),t=x(y,"META",{name:!0,content:!0}),i=x(y,"META",{name:!0,content:!0}),gt&&gt.l(y),s=rt(),y.forEach(m),n=G(o),r=x(o,"BUTTON",{onclick:!0,style:!0,"data-svelte-h":!0}),Oe(r)!=="svelte-o5xyu1"&&(r.innerHTML=f),a=G(o),_=x(o,"H1",{class:!0,id:!0,"data-svelte-h":!0}),Oe(_)!=="svelte-s21lxr"&&(_.innerHTML=T),A=G(o),O=x(o,"P",{class:!0,"data-svelte-h":!0}),Oe(O)!=="svelte-ucjson"&&(O.innerHTML=k),E=G(o),d=x(o,"HR",{class:!0}),M=G(o),R=x(o,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Oe(R)!=="svelte-3wqnck"&&(R.innerHTML=W),N=G(o),Be&&Be.l(o),V=G(o),fe(J.$$.fragment,o),j=G(o),fe(K.$$.fragment,o),$=G(o),fe(I.$$.fragment,o),g=G(o),fe(U.$$.fragment,o),P=G(o),w=x(o,"P",{class:!0,"data-svelte-h":!0}),Oe(w)!=="svelte-qtu7gy"&&(w.innerHTML=Y),z=G(o),ee=x(o,"HR",{class:!0}),he=G(o),ne=x(o,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Oe(ne)!=="svelte-1ectpwq"&&(ne.innerHTML=ie),be=G(o),se=x(o,"P",{class:!0,"data-svelte-h":!0}),Oe(se)!=="svelte-1x0y4st"&&(se.innerHTML=v),te=G(o),Ue&&Ue.l(o),ce=G(o),fe(me.$$.fragment,o),B=G(o),le=x(o,"P",{class:!0,"data-svelte-h":!0}),Oe(le)!=="svelte-1w990d8"&&(le.innerHTML=de),Se=G(o),p=x(o,"P",{class:!0,"data-svelte-h":!0}),Oe(p)!=="svelte-o30lp3"&&(p.innerHTML=Ee),Z=G(o),ye=x(o,"HR",{class:!0}),Ae=G(o),_e=x(o,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Oe(_e)!=="svelte-zty99a"&&(_e.innerHTML=ke),Ie=G(o),we=x(o,"P",{class:!0,"data-svelte-h":!0}),Oe(we)!=="svelte-ts5x5i"&&(we.innerHTML=He),Le=G(o),Ge&&Ge.l(o),Pe=G(o),fe(Me.$$.fragment,o),C=G(o),Ce=x(o,"P",{class:!0,"data-svelte-h":!0}),Oe(Ce)!=="svelte-1imkrsw"&&(Ce.innerHTML=De),xe=G(o),Ne=x(o,"P",{class:!0,"data-svelte-h":!0}),Oe(Ne)!=="svelte-1jdq8db"&&(Ne.innerHTML=Ye),je=G(o),Re=x(o,"HR",{class:!0}),Xe=G(o),Qe=x(o,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Oe(Qe)!=="svelte-1hgr9ez"&&(Qe.innerHTML=ve),Ke=G(o),S=x(o,"P",{class:!0,"data-svelte-h":!0}),Oe(S)!=="svelte-b5g3fp"&&(S.innerHTML=ge),Je=G(o),qe&&qe.l(o),h=G(o),fe(at.$$.fragment,o),mt=G(o),lt=x(o,"P",{class:!0,"data-svelte-h":!0}),Oe(lt)!=="svelte-rqncqk"&&(lt.innerHTML=Wt),St=G(o),Et=x(o,"HR",{class:!0}),et=G(o),st=x(o,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Oe(st)!=="svelte-1kq58f3"&&(st.innerHTML=Qt),Ft=G(o),ot=x(o,"P",{class:!0,"data-svelte-h":!0}),Oe(ot)!=="svelte-15dr3sd"&&(ot.innerHTML=Dt),tt=G(o),We&&We.l(o),At=G(o),fe(u.$$.fragment,o),zt=G(o),Nt=x(o,"P",{class:!0,"data-svelte-h":!0}),Oe(Nt)!=="svelte-15fqujo"&&(Nt.innerHTML=_i),Jt=G(o),It=x(o,"HR",{class:!0}),hi=G(o),re=x(o,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Oe(re)!=="svelte-162phb0"&&(re.innerHTML=li),Vt=G(o),ze&&ze.l(o),dt=G(o),fe(Ct.$$.fragment,o),Gt=G(o),nt=x(o,"HR",{class:!0}),Kt=G(o),Ze=x(o,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Oe(Ze)!=="svelte-1b2uehg"&&(Ze.innerHTML=it),ct=G(o),_t=x(o,"P",{class:!0,"data-svelte-h":!0}),Oe(_t)!=="svelte-y3cu0v"&&(_t.innerHTML=yi),qt=G(o),ht=x(o,"OL",{class:!0,"data-svelte-h":!0}),Oe(ht)!=="svelte-gpnpq"&&(ht.innerHTML=gi),jt=G(o),Tt=x(o,"HR",{class:!0}),Zt=G(o),kt=x(o,"P",{class:!0,"data-svelte-h":!0}),Oe(kt)!=="svelte-18sdmvw"&&(kt.innerHTML=pt),this.h()},h(){L(t,"name","twitter:card"),L(t,"content","summary_large_image"),L(i,"name","twitter:site"),L(i,"content","@evidence_dev"),L(r,"onclick","window.location.href = window.location.pathname.includes('/Portfolio/') ? '/Portfolio/' : '/'; return false;"),D(r,"position","fixed"),D(r,"top","20px"),D(r,"left","20px"),D(r,"z-index","9999"),D(r,"display","inline-flex"),D(r,"align-items","center"),D(r,"gap","8px"),D(r,"padding","10px 16px"),D(r,"background","rgba(37, 99, 235, 0.85)"),D(r,"backdrop-filter","blur(10px)"),D(r,"border","1px solid rgba(255, 255, 255, 0.2)"),D(r,"border-radius","12px"),D(r,"color","white"),D(r,"cursor","pointer"),D(r,"font-family","ui-sans-serif, system-ui, sans-serif"),D(r,"font-size","14px"),D(r,"font-weight","600"),D(r,"box-shadow","0 4px 20px rgba(0, 0, 0, 0.15)"),D(r,"transition","all 0.2s ease"),L(_,"class","markdown"),L(_,"id","-sentinelsql--analyse-de-fraude-financière"),L(O,"class","markdown"),L(d,"class","markdown"),L(R,"class","markdown"),L(R,"id","-tableau-de-bord-de-risque-global"),L(w,"class","markdown"),L(ee,"class","markdown"),L(ne,"class","markdown"),L(ne,"id","-détection-de-wash-trading"),L(se,"class","markdown"),L(le,"class","markdown"),L(p,"class","markdown"),L(ye,"class","markdown"),L(_e,"class","markdown"),L(_e,"id","-volatilité-relative--slippage"),L(we,"class","markdown"),L(Ce,"class","markdown"),L(Ne,"class","markdown"),L(Re,"class","markdown"),L(Qe,"class","markdown"),L(Qe,"id","-anomalies-de-volume-pics"),L(S,"class","markdown"),L(lt,"class","markdown"),L(Et,"class","markdown"),L(st,"class","markdown"),L(st,"id","-score-de-risque-par-utilisateur"),L(ot,"class","markdown"),L(Nt,"class","markdown"),L(It,"class","markdown"),L(re,"class","markdown"),L(re,"id","-évolution-du-volume-quotidien"),L(nt,"class","markdown"),L(Ze,"class","markdown"),L(Ze,"id","-conclusion-analytique"),L(_t,"class","markdown"),L(ht,"class","markdown"),L(Tt,"class","markdown"),L(kt,"class","markdown")},m(o,y){yt&&yt.m(o,y),b(o,e,y),Yt.m(document.head,null),pe(document.head,t),pe(document.head,i),gt&&gt.m(document.head,null),pe(document.head,s),b(o,n,y),b(o,r,y),b(o,a,y),b(o,_,y),b(o,A,y),b(o,O,y),b(o,E,y),b(o,d,y),b(o,M,y),b(o,R,y),b(o,N,y),Be&&Be.m(o,y),b(o,V,y),oe(J,o,y),b(o,j,y),oe(K,o,y),b(o,$,y),oe(I,o,y),b(o,g,y),oe(U,o,y),b(o,P,y),b(o,w,y),b(o,z,y),b(o,ee,y),b(o,he,y),b(o,ne,y),b(o,be,y),b(o,se,y),b(o,te,y),Ue&&Ue.m(o,y),b(o,ce,y),oe(me,o,y),b(o,B,y),b(o,le,y),b(o,Se,y),b(o,p,y),b(o,Z,y),b(o,ye,y),b(o,Ae,y),b(o,_e,y),b(o,Ie,y),b(o,we,y),b(o,Le,y),Ge&&Ge.m(o,y),b(o,Pe,y),oe(Me,o,y),b(o,C,y),b(o,Ce,y),b(o,xe,y),b(o,Ne,y),b(o,je,y),b(o,Re,y),b(o,Xe,y),b(o,Qe,y),b(o,Ke,y),b(o,S,y),b(o,Je,y),qe&&qe.m(o,y),b(o,h,y),oe(at,o,y),b(o,mt,y),b(o,lt,y),b(o,St,y),b(o,Et,y),b(o,et,y),b(o,st,y),b(o,Ft,y),b(o,ot,y),b(o,tt,y),We&&We.m(o,y),b(o,At,y),oe(u,o,y),b(o,zt,y),b(o,Nt,y),b(o,Jt,y),b(o,It,y),b(o,hi,y),b(o,re,y),b(o,Vt,y),ze&&ze.m(o,y),b(o,dt,y),oe(Ct,o,y),b(o,Gt,y),b(o,nt,y),b(o,Kt,y),b(o,Ze,y),b(o,ct,y),b(o,_t,y),b(o,qt,y),b(o,ht,y),b(o,jt,y),b(o,Tt,y),b(o,Zt,y),b(o,kt,y),Ht=!0},p(o,y){typeof Fe<"u"&&Fe.title&&Fe.hide_title!==!0&&yt.p(o,y),Yt.p(o,y),typeof Fe=="object"&&gt.p(o,y),o[0]?Be?(Be.p(o,y),y[0]&1&&F(Be,1)):(Be=Yl(o),Be.c(),F(Be,1),Be.m(V.parentNode,V)):Be&&(ft(),H(Be,1,1,()=>{Be=null}),ut());const vt={};y[0]&1&&(vt.data=o[0]),J.$set(vt);const si={};y[0]&1&&(si.data=o[0]),K.$set(si);const ni={};y[0]&1&&(ni.data=o[0]),I.$set(ni);const bi={};y[0]&1&&(bi.data=o[0]),U.$set(bi),o[1]?Ue?(Ue.p(o,y),y[0]&2&&F(Ue,1)):(Ue=xl(o),Ue.c(),F(Ue,1),Ue.m(ce.parentNode,ce)):Ue&&(ft(),H(Ue,1,1,()=>{Ue=null}),ut());const Si={};y[0]&2&&(Si.data=o[1]),me.$set(Si),o[2]?Ge?(Ge.p(o,y),y[0]&4&&F(Ge,1)):(Ge=Xl(o),Ge.c(),F(Ge,1),Ge.m(Pe.parentNode,Pe)):Ge&&(ft(),H(Ge,1,1,()=>{Ge=null}),ut());const xt={};y[0]&4&&(xt.data=o[2]),Me.$set(xt),o[3]?qe?(qe.p(o,y),y[0]&8&&F(qe,1)):(qe=Ql(o),qe.c(),F(qe,1),qe.m(h.parentNode,h)):qe&&(ft(),H(qe,1,1,()=>{qe=null}),ut());const Ei={};y[0]&8&&(Ei.data=o[3]),at.$set(Ei),o[4]?We?(We.p(o,y),y[0]&16&&F(We,1)):(We=Jl(o),We.c(),F(We,1),We.m(At.parentNode,At)):We&&(ft(),H(We,1,1,()=>{We=null}),ut());const Ai={};y[0]&16&&(Ai.data=o[4]),u.$set(Ai),o[5]?ze?(ze.p(o,y),y[0]&32&&F(ze,1)):(ze=Kl(o),ze.c(),F(ze,1),ze.m(dt.parentNode,dt)):ze&&(ft(),H(ze,1,1,()=>{ze=null}),ut());const ri={};y[0]&32&&(ri.data=o[5]),Ct.$set(ri)},i(o){Ht||(F(Be),F(J.$$.fragment,o),F(K.$$.fragment,o),F(I.$$.fragment,o),F(U.$$.fragment,o),F(Ue),F(me.$$.fragment,o),F(Ge),F(Me.$$.fragment,o),F(qe),F(at.$$.fragment,o),F(We),F(u.$$.fragment,o),F(ze),F(Ct.$$.fragment,o),Ht=!0)},o(o){H(Be),H(J.$$.fragment,o),H(K.$$.fragment,o),H(I.$$.fragment,o),H(U.$$.fragment,o),H(Ue),H(me.$$.fragment,o),H(Ge),H(Me.$$.fragment,o),H(qe),H(at.$$.fragment,o),H(We),H(u.$$.fragment,o),H(ze),H(Ct.$$.fragment,o),Ht=!1},d(o){o&&(m(e),m(n),m(r),m(a),m(_),m(A),m(O),m(E),m(d),m(M),m(R),m(N),m(V),m(j),m($),m(g),m(P),m(w),m(z),m(ee),m(he),m(ne),m(be),m(se),m(te),m(ce),m(B),m(le),m(Se),m(p),m(Z),m(ye),m(Ae),m(_e),m(Ie),m(we),m(Le),m(Pe),m(C),m(Ce),m(xe),m(Ne),m(je),m(Re),m(Xe),m(Qe),m(Ke),m(S),m(Je),m(h),m(mt),m(lt),m(St),m(Et),m(et),m(st),m(Ft),m(ot),m(tt),m(At),m(zt),m(Nt),m(Jt),m(It),m(hi),m(re),m(Vt),m(dt),m(Gt),m(nt),m(Kt),m(Ze),m(ct),m(_t),m(qt),m(ht),m(jt),m(Tt),m(Zt),m(kt)),yt&&yt.d(o),Yt.d(o),m(t),m(i),gt&&gt.d(o),m(s),Be&&Be.d(o),ae(J,o),ae(K,o),ae(I,o),ae(U,o),Ue&&Ue.d(o),ae(me,o),Ge&&Ge.d(o),ae(Me,o),qe&&qe.d(o),ae(at,o),We&&We.d(o),ae(u,o),ze&&ze.d(o),ae(Ct,o)}}}const Fe={title:"SentinelSQL | Détection de Fraude Analytique",description:"Analytique SQL avancée pour détecter le wash trading, les pics de volume et les manipulations de marché."};function or(l,e,t){let i,s;di(l,Bs,Z=>t(32,i=Z)),di(l,Ml,Z=>t(38,s=Z));let{data:n}=e,{data:r={},customFormattingSettings:f,__db:a,inputs:_}=n;_s(Ml,s="6666cd76f96956469e7be39d750cc7d9",s);let T=Ds(cl(_));hs(T.subscribe(Z=>_=Z)),al(Hs,{getCustomFormats:()=>f.customFormats||[]});const A=(Z,ye)=>Ps(a.query,Z,{query_name:ye});Ns(A),i.params,ys(()=>!0);let O={initialData:void 0,initialError:void 0},k=wt`WITH transactions AS (
  SELECT * FROM sentinel.transactions
),
risk_summary AS (
  SELECT
    COUNT(*) AS total_trades,
    COUNT(DISTINCT user_id) AS unique_users,
    SUM(amount * price) AS total_volume,
    AVG(amount * price) AS avg_trade_size,
    SUM(CASE WHEN status = 'failed' THEN 1 ELSE 0 END) AS failed_trades
  FROM transactions
)
SELECT * FROM risk_summary`,E=`WITH transactions AS (
  SELECT * FROM sentinel.transactions
),
risk_summary AS (
  SELECT
    COUNT(*) AS total_trades,
    COUNT(DISTINCT user_id) AS unique_users,
    SUM(amount * price) AS total_volume,
    AVG(amount * price) AS avg_trade_size,
    SUM(CASE WHEN status = 'failed' THEN 1 ELSE 0 END) AS failed_trades
  FROM transactions
)
SELECT * FROM risk_summary`;r.risk_summary_data&&(r.risk_summary_data instanceof Error?O.initialError=r.risk_summary_data:O.initialData=r.risk_summary_data,r.risk_summary_columns&&(O.knownColumns=r.risk_summary_columns));let d,M=!1;const R=Lt.createReactive({callback:Z=>{t(0,d=Z)},execFn:A},{id:"risk_summary",...O});R(E,{noResolve:k,...O}),globalThis[Symbol.for("risk_summary")]={get value(){return d}};let W={initialData:void 0,initialError:void 0},N=wt`WITH transactions AS (
  SELECT * FROM sentinel.transactions
),
suspicious_pairs AS (
  SELECT
    a.trade_id AS trade_a,
    b.trade_id AS trade_b,
    a.user_id,
    a.asset_id,
    a.price,
    a.timestamp AS time_a,
    b.timestamp AS time_b,
    ABS(EXTRACT(EPOCH FROM (b.timestamp - a.timestamp))) AS sec_diff
  FROM transactions a
  INNER JOIN transactions b
    ON a.user_id = b.user_id
    AND a.asset_id = b.asset_id
    AND a.price = b.price
    AND a.trade_id < b.trade_id
  WHERE a.status = 'completed' AND b.status = 'completed'
),
wash_events AS (
  SELECT
    user_id,
    asset_id,
    COUNT(*) AS wash_count,
    AVG(sec_diff) AS avg_time_gap
  FROM suspicious_pairs
  WHERE sec_diff < 10
  GROUP BY ALL
)
SELECT * FROM wash_events
ORDER BY wash_count DESC
LIMIT 20`,V=`WITH transactions AS (
  SELECT * FROM sentinel.transactions
),
suspicious_pairs AS (
  SELECT
    a.trade_id AS trade_a,
    b.trade_id AS trade_b,
    a.user_id,
    a.asset_id,
    a.price,
    a.timestamp AS time_a,
    b.timestamp AS time_b,
    ABS(EXTRACT(EPOCH FROM (b.timestamp - a.timestamp))) AS sec_diff
  FROM transactions a
  INNER JOIN transactions b
    ON a.user_id = b.user_id
    AND a.asset_id = b.asset_id
    AND a.price = b.price
    AND a.trade_id < b.trade_id
  WHERE a.status = 'completed' AND b.status = 'completed'
),
wash_events AS (
  SELECT
    user_id,
    asset_id,
    COUNT(*) AS wash_count,
    AVG(sec_diff) AS avg_time_gap
  FROM suspicious_pairs
  WHERE sec_diff < 10
  GROUP BY ALL
)
SELECT * FROM wash_events
ORDER BY wash_count DESC
LIMIT 20`;r.wash_events_data&&(r.wash_events_data instanceof Error?W.initialError=r.wash_events_data:W.initialData=r.wash_events_data,r.wash_events_columns&&(W.knownColumns=r.wash_events_columns));let J,j=!1;const K=Lt.createReactive({callback:Z=>{t(1,J=Z)},execFn:A},{id:"wash_events",...W});K(V,{noResolve:N,...W}),globalThis[Symbol.for("wash_events")]={get value(){return J}};let $={initialData:void 0,initialError:void 0},I=wt`WITH transactions AS (
  SELECT * FROM sentinel.transactions
),
market_prices AS (
  SELECT * FROM sentinel.market_prices
),
trade_prices AS (
  SELECT
    t.trade_id,
    t.user_id,
    t.asset_id,
    t.timestamp,
    t.price AS execution_price,
    m.market_price,
    ABS(t.price - m.market_price) / NULLIF(m.market_price, 0) AS slippage_pct
  FROM transactions t
  ASOF JOIN market_prices m
    ON t.asset_id = m.asset_id
    AND t.timestamp >= m.timestamp
  WHERE t.status = 'completed'
),
slippage_summary AS (
  SELECT
    asset_id,
    COUNT(*) AS trades,
    AVG(slippage_pct) AS avg_slippage_pct,
    MAX(slippage_pct) AS max_slippage_pct
  FROM trade_prices
  WHERE slippage_pct < 0.5
  GROUP BY ALL
  ORDER BY avg_slippage_pct DESC
)
SELECT * FROM slippage_summary`,g=`WITH transactions AS (
  SELECT * FROM sentinel.transactions
),
market_prices AS (
  SELECT * FROM sentinel.market_prices
),
trade_prices AS (
  SELECT
    t.trade_id,
    t.user_id,
    t.asset_id,
    t.timestamp,
    t.price AS execution_price,
    m.market_price,
    ABS(t.price - m.market_price) / NULLIF(m.market_price, 0) AS slippage_pct
  FROM transactions t
  ASOF JOIN market_prices m
    ON t.asset_id = m.asset_id
    AND t.timestamp >= m.timestamp
  WHERE t.status = 'completed'
),
slippage_summary AS (
  SELECT
    asset_id,
    COUNT(*) AS trades,
    AVG(slippage_pct) AS avg_slippage_pct,
    MAX(slippage_pct) AS max_slippage_pct
  FROM trade_prices
  WHERE slippage_pct < 0.5
  GROUP BY ALL
  ORDER BY avg_slippage_pct DESC
)
SELECT * FROM slippage_summary`;r.slippage_summary_data&&(r.slippage_summary_data instanceof Error?$.initialError=r.slippage_summary_data:$.initialData=r.slippage_summary_data,r.slippage_summary_columns&&($.knownColumns=r.slippage_summary_columns));let U,P=!1;const w=Lt.createReactive({callback:Z=>{t(2,U=Z)},execFn:A},{id:"slippage_summary",...$});w(g,{noResolve:I,...$}),globalThis[Symbol.for("slippage_summary")]={get value(){return U}};let Y={initialData:void 0,initialError:void 0},z=wt`WITH transactions AS (
  SELECT * FROM sentinel.transactions
),
windowed_volume AS (
  SELECT
    DATE_TRUNC('minute', timestamp) AS window_start,
    SUM(amount) AS volume,
    AVG(SUM(amount)) OVER (
      ORDER BY window_start
      RANGE BETWEEN INTERVAL '24 hours' PRECEDING AND CURRENT ROW
    ) AS mean_24h,
    STDDEV(SUM(amount)) OVER (
      ORDER BY window_start
      RANGE BETWEEN INTERVAL '24 hours' PRECEDING AND CURRENT ROW
    ) AS std_24h
  FROM transactions
  WHERE status = 'completed'
  GROUP BY 1
),
spikes AS (
  SELECT
    window_start,
    volume,
    mean_24h,
    std_24h,
    volume / NULLIF(mean_24h, 0) AS volume_ratio
  FROM windowed_volume
  WHERE volume > mean_24h + 3 * std_24h
  ORDER BY volume_ratio DESC
)
SELECT * FROM spikes LIMIT 15`,ee=`WITH transactions AS (
  SELECT * FROM sentinel.transactions
),
windowed_volume AS (
  SELECT
    DATE_TRUNC('minute', timestamp) AS window_start,
    SUM(amount) AS volume,
    AVG(SUM(amount)) OVER (
      ORDER BY window_start
      RANGE BETWEEN INTERVAL '24 hours' PRECEDING AND CURRENT ROW
    ) AS mean_24h,
    STDDEV(SUM(amount)) OVER (
      ORDER BY window_start
      RANGE BETWEEN INTERVAL '24 hours' PRECEDING AND CURRENT ROW
    ) AS std_24h
  FROM transactions
  WHERE status = 'completed'
  GROUP BY 1
),
spikes AS (
  SELECT
    window_start,
    volume,
    mean_24h,
    std_24h,
    volume / NULLIF(mean_24h, 0) AS volume_ratio
  FROM windowed_volume
  WHERE volume > mean_24h + 3 * std_24h
  ORDER BY volume_ratio DESC
)
SELECT * FROM spikes LIMIT 15`;r.spikes_data&&(r.spikes_data instanceof Error?Y.initialError=r.spikes_data:Y.initialData=r.spikes_data,r.spikes_columns&&(Y.knownColumns=r.spikes_columns));let he,ne=!1;const ie=Lt.createReactive({callback:Z=>{t(3,he=Z)},execFn:A},{id:"spikes",...Y});ie(ee,{noResolve:z,...Y}),globalThis[Symbol.for("spikes")]={get value(){return he}};let be={initialData:void 0,initialError:void 0},se=wt`WITH transactions AS (
  SELECT * FROM sentinel.transactions
),
user_metrics AS (
  SELECT
    user_id,
    COUNT(*) AS trade_count,
    SUM(amount * price) AS total_volume,
    COUNT(CASE WHEN amount > 1000 THEN 1 END) AS large_trades
  FROM transactions
  WHERE status = 'completed'
  GROUP BY user_id
),
normalized AS (
  SELECT
    user_id,
    trade_count,
    total_volume,
    LEAST(3.0, GREATEST(-3.0,
      (trade_count - AVG(trade_count) OVER()) / NULLIF(STDDEV(trade_count) OVER(), 0)
    )) * 10 AS freq_score,
    COALESCE((large_trades * 1.5), 0) AS volume_score
  FROM user_metrics
),
risk_scores AS (
  SELECT
    user_id,
    trade_count,
    total_volume,
    ROUND(freq_score + volume_score) AS risk_score,
    CASE
      WHEN freq_score + volume_score >= 70 THEN 'CRITIQUE'
      WHEN freq_score + volume_score >= 40 THEN 'ÉLEVÉ'
      WHEN freq_score + volume_score >= 20 THEN 'MODÉRÉ'
      ELSE 'FAIBLE'
    END AS risk_level
  FROM normalized
)
SELECT * FROM risk_scores
ORDER BY risk_score DESC
LIMIT 25`,v=`WITH transactions AS (
  SELECT * FROM sentinel.transactions
),
user_metrics AS (
  SELECT
    user_id,
    COUNT(*) AS trade_count,
    SUM(amount * price) AS total_volume,
    COUNT(CASE WHEN amount > 1000 THEN 1 END) AS large_trades
  FROM transactions
  WHERE status = 'completed'
  GROUP BY user_id
),
normalized AS (
  SELECT
    user_id,
    trade_count,
    total_volume,
    LEAST(3.0, GREATEST(-3.0,
      (trade_count - AVG(trade_count) OVER()) / NULLIF(STDDEV(trade_count) OVER(), 0)
    )) * 10 AS freq_score,
    COALESCE((large_trades * 1.5), 0) AS volume_score
  FROM user_metrics
),
risk_scores AS (
  SELECT
    user_id,
    trade_count,
    total_volume,
    ROUND(freq_score + volume_score) AS risk_score,
    CASE
      WHEN freq_score + volume_score >= 70 THEN 'CRITIQUE'
      WHEN freq_score + volume_score >= 40 THEN 'ÉLEVÉ'
      WHEN freq_score + volume_score >= 20 THEN 'MODÉRÉ'
      ELSE 'FAIBLE'
    END AS risk_level
  FROM normalized
)
SELECT * FROM risk_scores
ORDER BY risk_score DESC
LIMIT 25`;r.risk_scores_data&&(r.risk_scores_data instanceof Error?be.initialError=r.risk_scores_data:be.initialData=r.risk_scores_data,r.risk_scores_columns&&(be.knownColumns=r.risk_scores_columns));let te,ce=!1;const me=Lt.createReactive({callback:Z=>{t(4,te=Z)},execFn:A},{id:"risk_scores",...be});me(v,{noResolve:se,...be}),globalThis[Symbol.for("risk_scores")]={get value(){return te}};let B={initialData:void 0,initialError:void 0},le=wt`WITH transactions AS (
  SELECT * FROM sentinel.transactions
)
SELECT
  DATE(timestamp) AS day,
  COUNT(*) AS trades,
  SUM(amount * price) AS volume
FROM transactions
WHERE status = 'completed'
GROUP BY 1
ORDER BY 1`,de=`WITH transactions AS (
  SELECT * FROM sentinel.transactions
)
SELECT
  DATE(timestamp) AS day,
  COUNT(*) AS trades,
  SUM(amount * price) AS volume
FROM transactions
WHERE status = 'completed'
GROUP BY 1
ORDER BY 1`;r.daily_volume_data&&(r.daily_volume_data instanceof Error?B.initialError=r.daily_volume_data:B.initialData=r.daily_volume_data,r.daily_volume_columns&&(B.knownColumns=r.daily_volume_columns));let Se,p=!1;const Ee=Lt.createReactive({callback:Z=>{t(5,Se=Z)},execFn:A},{id:"daily_volume",...B});return Ee(de,{noResolve:le,...B}),globalThis[Symbol.for("daily_volume")]={get value(){return Se}},l.$$set=Z=>{"data"in Z&&t(6,n=Z.data)},l.$$.update=()=>{l.$$.dirty[0]&64&&t(7,{data:r={},customFormattingSettings:f,__db:a}=n,r),l.$$.dirty[0]&128&&Is.set(Object.keys(r).length>0),l.$$.dirty[1]&2&&i.params,l.$$.dirty[0]&3840&&(k||!M?k||(R(E,{noResolve:k,...O}),t(11,M=!0)):R(E,{noResolve:k})),l.$$.dirty[0]&61440&&(N||!j?N||(K(V,{noResolve:N,...W}),t(15,j=!0)):K(V,{noResolve:N})),l.$$.dirty[0]&983040&&(I||!P?I||(w(g,{noResolve:I,...$}),t(19,P=!0)):w(g,{noResolve:I})),l.$$.dirty[0]&15728640&&(z||!ne?z||(ie(ee,{noResolve:z,...Y}),t(23,ne=!0)):ie(ee,{noResolve:z})),l.$$.dirty[0]&251658240&&(se||!ce?se||(me(v,{noResolve:se,...be}),t(27,ce=!0)):me(v,{noResolve:se})),l.$$.dirty[0]&1879048192|l.$$.dirty[1]&1&&(le||!p?le||(Ee(de,{noResolve:le,...B}),t(31,p=!0)):Ee(de,{noResolve:le}))},t(9,k=wt`WITH transactions AS (
  SELECT * FROM sentinel.transactions
),
risk_summary AS (
  SELECT
    COUNT(*) AS total_trades,
    COUNT(DISTINCT user_id) AS unique_users,
    SUM(amount * price) AS total_volume,
    AVG(amount * price) AS avg_trade_size,
    SUM(CASE WHEN status = 'failed' THEN 1 ELSE 0 END) AS failed_trades
  FROM transactions
)
SELECT * FROM risk_summary`),t(10,E=`WITH transactions AS (
  SELECT * FROM sentinel.transactions
),
risk_summary AS (
  SELECT
    COUNT(*) AS total_trades,
    COUNT(DISTINCT user_id) AS unique_users,
    SUM(amount * price) AS total_volume,
    AVG(amount * price) AS avg_trade_size,
    SUM(CASE WHEN status = 'failed' THEN 1 ELSE 0 END) AS failed_trades
  FROM transactions
)
SELECT * FROM risk_summary`),t(13,N=wt`WITH transactions AS (
  SELECT * FROM sentinel.transactions
),
suspicious_pairs AS (
  SELECT
    a.trade_id AS trade_a,
    b.trade_id AS trade_b,
    a.user_id,
    a.asset_id,
    a.price,
    a.timestamp AS time_a,
    b.timestamp AS time_b,
    ABS(EXTRACT(EPOCH FROM (b.timestamp - a.timestamp))) AS sec_diff
  FROM transactions a
  INNER JOIN transactions b
    ON a.user_id = b.user_id
    AND a.asset_id = b.asset_id
    AND a.price = b.price
    AND a.trade_id < b.trade_id
  WHERE a.status = 'completed' AND b.status = 'completed'
),
wash_events AS (
  SELECT
    user_id,
    asset_id,
    COUNT(*) AS wash_count,
    AVG(sec_diff) AS avg_time_gap
  FROM suspicious_pairs
  WHERE sec_diff < 10
  GROUP BY ALL
)
SELECT * FROM wash_events
ORDER BY wash_count DESC
LIMIT 20`),t(14,V=`WITH transactions AS (
  SELECT * FROM sentinel.transactions
),
suspicious_pairs AS (
  SELECT
    a.trade_id AS trade_a,
    b.trade_id AS trade_b,
    a.user_id,
    a.asset_id,
    a.price,
    a.timestamp AS time_a,
    b.timestamp AS time_b,
    ABS(EXTRACT(EPOCH FROM (b.timestamp - a.timestamp))) AS sec_diff
  FROM transactions a
  INNER JOIN transactions b
    ON a.user_id = b.user_id
    AND a.asset_id = b.asset_id
    AND a.price = b.price
    AND a.trade_id < b.trade_id
  WHERE a.status = 'completed' AND b.status = 'completed'
),
wash_events AS (
  SELECT
    user_id,
    asset_id,
    COUNT(*) AS wash_count,
    AVG(sec_diff) AS avg_time_gap
  FROM suspicious_pairs
  WHERE sec_diff < 10
  GROUP BY ALL
)
SELECT * FROM wash_events
ORDER BY wash_count DESC
LIMIT 20`),t(17,I=wt`WITH transactions AS (
  SELECT * FROM sentinel.transactions
),
market_prices AS (
  SELECT * FROM sentinel.market_prices
),
trade_prices AS (
  SELECT
    t.trade_id,
    t.user_id,
    t.asset_id,
    t.timestamp,
    t.price AS execution_price,
    m.market_price,
    ABS(t.price - m.market_price) / NULLIF(m.market_price, 0) AS slippage_pct
  FROM transactions t
  ASOF JOIN market_prices m
    ON t.asset_id = m.asset_id
    AND t.timestamp >= m.timestamp
  WHERE t.status = 'completed'
),
slippage_summary AS (
  SELECT
    asset_id,
    COUNT(*) AS trades,
    AVG(slippage_pct) AS avg_slippage_pct,
    MAX(slippage_pct) AS max_slippage_pct
  FROM trade_prices
  WHERE slippage_pct < 0.5
  GROUP BY ALL
  ORDER BY avg_slippage_pct DESC
)
SELECT * FROM slippage_summary`),t(18,g=`WITH transactions AS (
  SELECT * FROM sentinel.transactions
),
market_prices AS (
  SELECT * FROM sentinel.market_prices
),
trade_prices AS (
  SELECT
    t.trade_id,
    t.user_id,
    t.asset_id,
    t.timestamp,
    t.price AS execution_price,
    m.market_price,
    ABS(t.price - m.market_price) / NULLIF(m.market_price, 0) AS slippage_pct
  FROM transactions t
  ASOF JOIN market_prices m
    ON t.asset_id = m.asset_id
    AND t.timestamp >= m.timestamp
  WHERE t.status = 'completed'
),
slippage_summary AS (
  SELECT
    asset_id,
    COUNT(*) AS trades,
    AVG(slippage_pct) AS avg_slippage_pct,
    MAX(slippage_pct) AS max_slippage_pct
  FROM trade_prices
  WHERE slippage_pct < 0.5
  GROUP BY ALL
  ORDER BY avg_slippage_pct DESC
)
SELECT * FROM slippage_summary`),t(21,z=wt`WITH transactions AS (
  SELECT * FROM sentinel.transactions
),
windowed_volume AS (
  SELECT
    DATE_TRUNC('minute', timestamp) AS window_start,
    SUM(amount) AS volume,
    AVG(SUM(amount)) OVER (
      ORDER BY window_start
      RANGE BETWEEN INTERVAL '24 hours' PRECEDING AND CURRENT ROW
    ) AS mean_24h,
    STDDEV(SUM(amount)) OVER (
      ORDER BY window_start
      RANGE BETWEEN INTERVAL '24 hours' PRECEDING AND CURRENT ROW
    ) AS std_24h
  FROM transactions
  WHERE status = 'completed'
  GROUP BY 1
),
spikes AS (
  SELECT
    window_start,
    volume,
    mean_24h,
    std_24h,
    volume / NULLIF(mean_24h, 0) AS volume_ratio
  FROM windowed_volume
  WHERE volume > mean_24h + 3 * std_24h
  ORDER BY volume_ratio DESC
)
SELECT * FROM spikes LIMIT 15`),t(22,ee=`WITH transactions AS (
  SELECT * FROM sentinel.transactions
),
windowed_volume AS (
  SELECT
    DATE_TRUNC('minute', timestamp) AS window_start,
    SUM(amount) AS volume,
    AVG(SUM(amount)) OVER (
      ORDER BY window_start
      RANGE BETWEEN INTERVAL '24 hours' PRECEDING AND CURRENT ROW
    ) AS mean_24h,
    STDDEV(SUM(amount)) OVER (
      ORDER BY window_start
      RANGE BETWEEN INTERVAL '24 hours' PRECEDING AND CURRENT ROW
    ) AS std_24h
  FROM transactions
  WHERE status = 'completed'
  GROUP BY 1
),
spikes AS (
  SELECT
    window_start,
    volume,
    mean_24h,
    std_24h,
    volume / NULLIF(mean_24h, 0) AS volume_ratio
  FROM windowed_volume
  WHERE volume > mean_24h + 3 * std_24h
  ORDER BY volume_ratio DESC
)
SELECT * FROM spikes LIMIT 15`),t(25,se=wt`WITH transactions AS (
  SELECT * FROM sentinel.transactions
),
user_metrics AS (
  SELECT
    user_id,
    COUNT(*) AS trade_count,
    SUM(amount * price) AS total_volume,
    COUNT(CASE WHEN amount > 1000 THEN 1 END) AS large_trades
  FROM transactions
  WHERE status = 'completed'
  GROUP BY user_id
),
normalized AS (
  SELECT
    user_id,
    trade_count,
    total_volume,
    LEAST(3.0, GREATEST(-3.0,
      (trade_count - AVG(trade_count) OVER()) / NULLIF(STDDEV(trade_count) OVER(), 0)
    )) * 10 AS freq_score,
    COALESCE((large_trades * 1.5), 0) AS volume_score
  FROM user_metrics
),
risk_scores AS (
  SELECT
    user_id,
    trade_count,
    total_volume,
    ROUND(freq_score + volume_score) AS risk_score,
    CASE
      WHEN freq_score + volume_score >= 70 THEN 'CRITIQUE'
      WHEN freq_score + volume_score >= 40 THEN 'ÉLEVÉ'
      WHEN freq_score + volume_score >= 20 THEN 'MODÉRÉ'
      ELSE 'FAIBLE'
    END AS risk_level
  FROM normalized
)
SELECT * FROM risk_scores
ORDER BY risk_score DESC
LIMIT 25`),t(26,v=`WITH transactions AS (
  SELECT * FROM sentinel.transactions
),
user_metrics AS (
  SELECT
    user_id,
    COUNT(*) AS trade_count,
    SUM(amount * price) AS total_volume,
    COUNT(CASE WHEN amount > 1000 THEN 1 END) AS large_trades
  FROM transactions
  WHERE status = 'completed'
  GROUP BY user_id
),
normalized AS (
  SELECT
    user_id,
    trade_count,
    total_volume,
    LEAST(3.0, GREATEST(-3.0,
      (trade_count - AVG(trade_count) OVER()) / NULLIF(STDDEV(trade_count) OVER(), 0)
    )) * 10 AS freq_score,
    COALESCE((large_trades * 1.5), 0) AS volume_score
  FROM user_metrics
),
risk_scores AS (
  SELECT
    user_id,
    trade_count,
    total_volume,
    ROUND(freq_score + volume_score) AS risk_score,
    CASE
      WHEN freq_score + volume_score >= 70 THEN 'CRITIQUE'
      WHEN freq_score + volume_score >= 40 THEN 'ÉLEVÉ'
      WHEN freq_score + volume_score >= 20 THEN 'MODÉRÉ'
      ELSE 'FAIBLE'
    END AS risk_level
  FROM normalized
)
SELECT * FROM risk_scores
ORDER BY risk_score DESC
LIMIT 25`),t(29,le=wt`WITH transactions AS (
  SELECT * FROM sentinel.transactions
)
SELECT
  DATE(timestamp) AS day,
  COUNT(*) AS trades,
  SUM(amount * price) AS volume
FROM transactions
WHERE status = 'completed'
GROUP BY 1
ORDER BY 1`),t(30,de=`WITH transactions AS (
  SELECT * FROM sentinel.transactions
)
SELECT
  DATE(timestamp) AS day,
  COUNT(*) AS trades,
  SUM(amount * price) AS volume
FROM transactions
WHERE status = 'completed'
GROUP BY 1
ORDER BY 1`),[d,J,U,he,te,Se,n,r,O,k,E,M,W,N,V,j,$,I,g,P,Y,z,ee,ne,be,se,v,ce,B,le,de,p,i]}class yr extends Mt{constructor(e){super(),Rt(this,e,or,ar,Ot,{data:6},null,[-1,-1])}}export{yr as component};
