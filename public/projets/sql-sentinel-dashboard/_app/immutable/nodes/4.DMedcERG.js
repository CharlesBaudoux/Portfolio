import{s as Ot,q as Le,d as c,i as b,f as nt,ad as Bi,G as Ct,R as V,F as di,b as O,e as x,r as $e,k as Q,E as cl,c as W,j as z,I as _i,C as us,a as Ze,g as Re,z as ci,ae as Ol,l as hi,aj as ms,af as li,ag as Ui,M as cs,D as dl,t as Mi,u as Ri,S as Qi,T as Ji,n as al,v as zi,w as Vi,x as ji,y as Yi,ak as Zl,h as ds,m as _s,o as hs,p as ys}from"../chunks/scheduler.DOwO_r-Y.js";import{S as wt,i as Mt,h as gs,d as fe,t as I,a as F,g as ot,c as ft,m as ue,b as me,e as ce}from"../chunks/index.Yeb2f34e.js";import{aa as Gi,ab as bs,ac as Ss,ad as _l,ae as hl,af as vl,ag as Es,h as si,f as As,ah as Cs,t as pl,ai as ii,aj as Ts,ak as ks,al as nl,am as ol,an as fl,a7 as ze,ao as ul,w as vi,ap as Ls,aq as Nt,ar as ti,as as Ki,y as It,at as $l,au as yl,av as gl,aw as es,ax as ts,Q as Lt,a2 as is,a5 as ls,ay as ss,az as Os,aA as ws,aB as Ms,aC as Rs,a9 as Fs,D as rl,e as Ds,s as Ns,p as Is,a as wl,r as Ml,C as Hs}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.DMYaG_JO.js";import{w as ml}from"../chunks/entry.DshMoVhj.js";import{h as kt,p as Ps}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as Bs}from"../chunks/stores.DCrZFsXl.js";import{Q as Di}from"../chunks/QueryViewer.BLAYZov1.js";function Rl(l){return t=>t.map(i=>{var s;const n={},r=Object.keys(i);for(const o of r){const a=(s=l[o])!=null?s:o;n[a]=i[o]}return n})}function Us(l,e){if(l.length===0||e.length===0)return{};const t=Object.keys(l[0]),i=Object.keys(e[0]),s={};for(const n of t)i.includes(n)&&(s[n]=n);return s}function Gs(l,e,t){for(const i in t){const s=t[i];if(l[s]!==e[i])return!1}return!0}function qs(l,e){return i=>{if(!l.length)return i;const s=Us(i,l),n=Object.keys(l[0]);return i.flatMap(o=>{const a=l.filter(T=>Gs(o,T,s));if(a.length)return a.map(T=>({...o,...T}));const _=Object.fromEntries(n.filter(T=>o[T]==null).map(T=>[T,void 0]));return{...o,..._}})}}function Fl(l){return t=>{const i=t.map(s=>({...s}));for(const s in l){const n=l[s],r=typeof n=="function"?n(i):n,o=r!=null&&r[Symbol.iterator]&&typeof r!="string"?r:t.map(()=>r);let a=-1;for(const _ of i)_[s]=o[++a]}return i}}function Ws(l){return t=>{const i=Vs(l),s=[];for(const n in i){const r=i[n];let o;typeof r=="function"?o=r(t):Array.isArray(r)?o=r:o=Array.from(new Set(t.map(a=>a[n]))),s.push(o.map(a=>({[n]:a})))}return zs(s)}}function zs(l){function e(i,s,n){if(!n.length&&s!=null){i.push(s);return}const r=n[0],o=n.slice(1);for(const a of r)e(i,{...s,...a},o)}const t=[];return e(t,null,l),t}function Vs(l){if(Array.isArray(l)){const e={};for(const t of l)e[t]=t;return e}else if(typeof l=="object")return l;return{[l]:l}}function ns(l){return t=>{const i=[];for(const s of t){const n={...s};for(const r in l)n[r]==null&&(n[r]=l[r]);i.push(n)}return i}}function Dl(l,e){return i=>{const s=Ws(l)(i),n=qs(i)(s);return e?ns(e)(n):n}}function Nl(l,e,t){return l==null||e==null?void 0:e===0&&l===0?0:!t&&e===0?void 0:l/e}function Il(l,e,t){const i=typeof l=="function"?l:o=>o[l],s=o=>o[e],{predicate:n,allowDivideByZero:r}={};return n==null?(o,a,_)=>{const T=s(o),A=i(o,a,_);return Nl(A,T,r)}:(o,a,_)=>{if(!n(o,a,_))return;const T=s(o),A=i(o,a,_);return Nl(A,T,r)}}const Fi=Symbol.for("__evidence-chart-window-debug__"),js=(l,e)=>{window[Fi]||(window[Fi]={}),window[Fi][l]=e},Ys=l=>{window[Fi]||(window[Fi]={}),delete window[Fi][l]},wi=500,Xs=(l,e)=>{var S;const t=["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)&&l.clientWidth*3*l.clientHeight*3>16777215;Gi("light",hl),Gi("dark",vl);let i;const s=()=>{i=_l(l,e.theme,{renderer:t?"svg":e.renderer??"canvas"})};s(),js(i.id,i),e.connectGroup&&(i.group=e.connectGroup,bs(e.connectGroup));const n=()=>{if(e.seriesColors){const h=i.getOption();if(!h)return;const L={...h};for(const R of Object.keys(e.seriesColors)){const N=h.series.findIndex(D=>D.name===R);N!==-1&&(L.series[N]={...L.series[N],itemStyle:{...L.series[N].itemStyle,color:e.seriesColors[R]}})}i.setOption(L)}},r=()=>{e.echartsOptions&&i.setOption({...e.echartsOptions})},o=()=>{let h=[];if(e.seriesOptions){const L=e.config.series.reduce((R,{evidenceSeriesType:N},D)=>((N==="reference_line"||N==="reference_area"||N==="reference_point")&&R.push(D),R),[]);for(let R=0;R<e.config.series.length;R++)L.includes(R)?h.push({}):h.push({...e.seriesOptions});i.setOption({series:h})}};i.setOption({...e.config,animationDuration:wi,animationDurationUpdate:wi}),n(),r(),o();const a=e.dispatch;i.on("click",function(h){a("click",h)});const _=l.parentElement,T=Ss(()=>{i.resize({animation:{duration:wi}}),M()},100);let A;window.ResizeObserver&&_?(A=new ResizeObserver(T),A.observe(_)):window.addEventListener("resize",T);const M=()=>{if(e.showAllXAxisLabels){const h=i.getOption();if(!h)return;const L=new Set(h.series.flatMap(D=>{var q;return(q=D.data)==null?void 0:q.map(Z=>Z[0])})),R=4/5,N=(l==null?void 0:l.clientWidth)??0;if(!e.swapXY){const D={xAxis:{axisLabel:{interval:0,overflow:e.xAxisLabelOverflow,width:N*R/L.size}}};i.setOption(D)}}},k=h=>{h.theme!==e.theme&&(i.dispose(),e=h,s()),e=h,i.setOption({...e.config,animationDuration:wi,animationDurationUpdate:wi},!0),n(),r(),o(),i.resize({animation:{duration:wi}}),M()};return T(),window[S=Symbol.for("chart renders")]??(window[S]=0),window[Symbol.for("chart renders")]++,{update(h){window[Symbol.for("chart renders")]++,k(h)},destroy(){A?A.unobserve(_):window.removeEventListener("resize",T),i.dispose(),Ys(i.id)}}},xs=(l,e)=>{Gi("light",hl),Gi("dark",vl),console.log("echartsCanvasDownloadAction",e.theme);const t=_l(l,e.theme,{renderer:"canvas"});e.config.animation=!1,t.setOption(e.config);const i=()=>{if(e.seriesColors){const _=t.getOption();if(!_)return;const T={..._};for(const A of Object.keys(e.seriesColors)){const M=_.series.findIndex(k=>k.name===A);M!==-1&&(T.series[M]={...T.series[M],itemStyle:{...T.series[M].itemStyle,color:e.seriesColors[A]}})}t.setOption(T)}},s=()=>{e.echartsOptions&&t.setOption({...e.echartsOptions})},n=()=>{let _=[];if(e.seriesOptions){const T=e.config.series.reduce((A,{evidenceSeriesType:M},k)=>((M==="reference_line"||M==="reference_area"||M==="reference_point")&&A.push(k),A),[]);for(let A=0;A<e.config.series.length;A++)T.includes(A)?_.push({}):_.push({...e.seriesOptions});t.setOption({series:_})}};s(),i(),n();let r=t.getConnectedDataURL({type:"png",pixelRatio:3,backgroundColor:e.backgroundColor,excludeComponents:["toolbox"]});const o=new Date,a=new Date(o.getTime()-o.getTimezoneOffset()*6e4).toISOString().slice(0,19).replaceAll(":","-");return Es(r,(e.evidenceChartTitle??e.queryID??"evidence-chart")+`_${a}.png`),t.dispose(),{destroy(){t.dispose()}}},qi=(l,e)=>{Gi("evidence-light",hl);const{config:t,ratio:i,echartsOptions:s,seriesOptions:n,seriesColors:r,isMap:o,extraHeight:a,width:_}=e;let T={renderer:"canvas"};o&&(T.height=_*.5+a,l&&l.parentNode&&(l.style.height=T.height+"px",l.parentNode.style.height=T.height+"px"));const A=_l(l,"evidence-light",T);t.animation=!1,A.setOption(t),s&&A.setOption(s);const M=()=>{if(r){const L=A.getOption();if(!L)return;const R={...L};for(const N of Object.keys(r)){const D=L.series.findIndex(q=>q.name===N);D!==-1&&(R.series[D]={...R.series[D],itemStyle:{...R.series[D].itemStyle,color:r[N]}})}A.setOption(R)}},k=()=>{s&&A.setOption({...s})},S=()=>{let L=[];if(n){const R=t.series.reduce((N,{evidenceSeriesType:D},q)=>((D==="reference_line"||D==="reference_area"||D==="reference_point")&&N.push(q),N),[]);for(let N=0;N<t.series.length;N++)R.includes(N)?L.push({}):L.push({...n});A.setOption({series:L})}};k(),M(),S();let h=A.getConnectedDataURL({type:"jpeg",pixelRatio:i,backgroundColor:"#fff",excludeComponents:["toolbox"]});l.innerHTML=`<img src=${h} width="100%" style="
        position: absolute; 
        top: 0;
        user-select: all;
        -webkit-user-select: all;
        -moz-user-select: all;
        -ms-user-select: all;
    " />`,e.config.animation=!0};function Qs(l){let e;function t(n,r){return n[9]?Zs:Ks}let i=t(l),s=i(l);return{c(){s.c(),e=nt()},l(n){s.l(n),e=nt()},m(n,r){s.m(n,r),b(n,e,r)},p(n,r){i===(i=t(n))&&s?s.p(n,r):(s.d(1),s=i(n),s&&(s.c(),s.m(e.parentNode,e)))},d(n){n&&c(e),s.d(n)}}}function Js(l){let e,t,i,s;return{c(){e=Q("div"),this.h()},l(n){e=x(n,"DIV",{class:!0,style:!0}),$e(e).forEach(c),this.h()},h(){O(e,"class","chart"),V(e,"height",l[1]),V(e,"width",l[2]),V(e,"margin-left","0"),V(e,"margin-top","15px"),V(e,"margin-bottom","10px"),V(e,"overflow","visible"),V(e,"break-inside","avoid")},m(n,r){b(n,e,r),i||(s=di(t=qi.call(null,e,{config:l[0],ratio:2,echartsOptions:l[5],seriesOptions:l[6],seriesColors:l[13]})),i=!0)},p(n,r){r&2&&V(e,"height",n[1]),r&4&&V(e,"width",n[2]),t&&_i(t.update)&&r&8289&&t.update.call(null,{config:n[0],ratio:2,echartsOptions:n[5],seriesOptions:n[6],seriesColors:n[13]})},d(n){n&&c(e),i=!1,s()}}}function Ks(l){let e,t,i,s,n,r,o;return{c(){e=Q("div"),i=z(),s=Q("div"),this.h()},l(a){e=x(a,"DIV",{class:!0,style:!0}),$e(e).forEach(c),i=W(a),s=x(a,"DIV",{class:!0,style:!0}),$e(s).forEach(c),this.h()},h(){O(e,"class","chart md:hidden"),V(e,"height",l[1]),V(e,"width","650px"),V(e,"margin-left","0"),V(e,"margin-top","15px"),V(e,"margin-bottom","10px"),V(e,"overflow","visible"),V(e,"break-inside","avoid"),O(s,"class","chart hidden md:block"),V(s,"height",l[1]),V(s,"width","841px"),V(s,"margin-left","0"),V(s,"margin-top","15px"),V(s,"margin-bottom","10px"),V(s,"overflow","visible"),V(s,"break-inside","avoid")},m(a,_){b(a,e,_),b(a,i,_),b(a,s,_),r||(o=[di(t=qi.call(null,e,{config:l[0],ratio:4,echartsOptions:l[5],seriesOptions:l[6],seriesColors:l[13],isMap:l[7],extraHeight:l[8],width:650})),di(n=qi.call(null,s,{config:l[0],ratio:4,echartsOptions:l[5],seriesOptions:l[6],seriesColors:l[13],isMap:l[7],extraHeight:l[8],width:841}))],r=!0)},p(a,_){_&2&&V(e,"height",a[1]),t&&_i(t.update)&&_&8673&&t.update.call(null,{config:a[0],ratio:4,echartsOptions:a[5],seriesOptions:a[6],seriesColors:a[13],isMap:a[7],extraHeight:a[8],width:650}),_&2&&V(s,"height",a[1]),n&&_i(n.update)&&_&8673&&n.update.call(null,{config:a[0],ratio:4,echartsOptions:a[5],seriesOptions:a[6],seriesColors:a[13],isMap:a[7],extraHeight:a[8],width:841})},d(a){a&&(c(e),c(i),c(s)),r=!1,cl(o)}}}function Zs(l){let e,t,i,s,n,r,o;return{c(){e=Q("div"),i=z(),s=Q("div"),this.h()},l(a){e=x(a,"DIV",{class:!0,style:!0}),$e(e).forEach(c),i=W(a),s=x(a,"DIV",{class:!0,style:!0}),$e(s).forEach(c),this.h()},h(){O(e,"class","chart md:hidden"),V(e,"height",l[1]),V(e,"width",l[11]+"px"),V(e,"margin-left","0"),V(e,"margin-top","15px"),V(e,"margin-bottom","10px"),V(e,"overflow","visible"),V(e,"break-inside","avoid"),O(s,"class","chart hidden md:block"),V(s,"height",l[1]),V(s,"width",l[10]+"px"),V(s,"margin-left","0"),V(s,"margin-top","15px"),V(s,"margin-bottom","10px"),V(s,"overflow","visible"),V(s,"break-inside","avoid")},m(a,_){b(a,e,_),b(a,i,_),b(a,s,_),r||(o=[di(t=qi.call(null,e,{config:l[0],ratio:4,echartsOptions:l[5],seriesOptions:l[6],seriesColors:l[13],isMap:l[7],extraHeight:l[8],width:l[11]})),di(n=qi.call(null,s,{config:l[0],ratio:4,echartsOptions:l[5],seriesOptions:l[6],seriesColors:l[13],isMap:l[7],extraHeight:l[8],width:l[10]}))],r=!0)},p(a,_){_&2&&V(e,"height",a[1]),_&2048&&V(e,"width",a[11]+"px"),t&&_i(t.update)&&_&10721&&t.update.call(null,{config:a[0],ratio:4,echartsOptions:a[5],seriesOptions:a[6],seriesColors:a[13],isMap:a[7],extraHeight:a[8],width:a[11]}),_&2&&V(s,"height",a[1]),_&1024&&V(s,"width",a[10]+"px"),n&&_i(n.update)&&_&9697&&n.update.call(null,{config:a[0],ratio:4,echartsOptions:a[5],seriesOptions:a[6],seriesColors:a[13],isMap:a[7],extraHeight:a[8],width:a[10]})},d(a){a&&(c(e),c(i),c(s)),r=!1,cl(o)}}}function vs(l){let e;function t(n,r){if(n[3])return Js;if(n[4])return Qs}let i=t(l),s=i&&i(l);return{c(){s&&s.c(),e=nt()},l(n){s&&s.l(n),e=nt()},m(n,r){s&&s.m(n,r),b(n,e,r)},p(n,[r]){i===(i=t(n))&&s?s.p(n,r):(s&&s.d(1),s=i&&i(n),s&&(s.c(),s.m(e.parentNode,e)))},i:Le,o:Le,d(n){n&&c(e),s&&s.d(n)}}}function ps(l,e,t){let i,s,n,r,o,a,_=Le,T=()=>(_(),_=Ct(i,y=>t(13,a=y)),i);l.$$.on_destroy.push(()=>_());const{resolveColorsObject:A}=si();let{config:M=void 0}=e,{height:k="291px"}=e,{width:S="100%"}=e,{copying:h=!1}=e,{printing:L=!1}=e,{echartsOptions:R=void 0}=e,{seriesOptions:N=void 0}=e,{seriesColors:D=void 0}=e,{isMap:q=!1}=e,{extraHeight:Z=void 0}=e,U=!1,p,v;const G=Bi("gridConfig");return G&&(U=!0,{cols:p,gapWidth:v}=G),l.$$set=y=>{"config"in y&&t(0,M=y.config),"height"in y&&t(1,k=y.height),"width"in y&&t(2,S=y.width),"copying"in y&&t(3,h=y.copying),"printing"in y&&t(4,L=y.printing),"echartsOptions"in y&&t(5,R=y.echartsOptions),"seriesOptions"in y&&t(6,N=y.seriesOptions),"seriesColors"in y&&t(14,D=y.seriesColors),"isMap"in y&&t(7,q=y.isMap),"extraHeight"in y&&t(8,Z=y.extraHeight)},l.$$.update=()=>{l.$$.dirty&16384&&T(t(12,i=A(D))),l.$$.dirty&32768&&t(18,s=Math.min(Number(p),2)),l.$$.dirty&327680&&t(11,n=(650-Number(v)*(s-1))/s),l.$$.dirty&32768&&t(17,r=Math.min(Number(p),3)),l.$$.dirty&196608&&t(10,o=(841-Number(v)*(r-1))/r)},[M,k,S,h,L,R,N,q,Z,U,o,n,i,a,D,p,v,r,s]}class $s extends wt{constructor(e){super(),Mt(this,e,ps,vs,Ot,{config:0,height:1,width:2,copying:3,printing:4,echartsOptions:5,seriesOptions:6,seriesColors:14,isMap:7,extraHeight:8})}}function en(l){let e,t,i="Loading...",s,n,r;return{c(){e=Q("div"),t=Q("span"),t.textContent=i,s=z(),n=Q("div"),this.h()},l(o){e=x(o,"DIV",{role:!0,class:!0});var a=$e(e);t=x(a,"SPAN",{class:!0,"data-svelte-h":!0}),Re(t)!=="svelte-1wtojot"&&(t.textContent=i),s=W(a),n=x(a,"DIV",{class:!0,style:!0}),$e(n).forEach(c),a.forEach(c),this.h()},h(){O(t,"class","sr-only"),O(n,"class","bg-base-100 rounded-md max-w-[100%]"),V(n,"height",l[0]),V(n,"margin-top","15px"),V(n,"margin-bottom","31px"),O(e,"role","status"),O(e,"class","animate-pulse")},m(o,a){b(o,e,a),Ze(e,t),Ze(e,s),Ze(e,n)},p(o,[a]){a&1&&V(n,"height",o[0])},i(o){o&&(r||us(()=>{r=gs(e,As,{}),r.start()}))},o:Le,d(o){o&&c(e)}}}function tn(l,e,t){let{height:i="231px"}=e;return l.$$set=s=>{"height"in s&&t(0,i=s.height)},[i]}class ln extends wt{constructor(e){super(),Mt(this,e,tn,en,Ot,{height:0})}}function Hl(l){let e,t,i,s;const n=[nn,sn],r=[];function o(a,_){return 1}return e=o(),t=r[e]=n[e](l),{c(){t.c(),i=nt()},l(a){t.l(a),i=nt()},m(a,_){r[e].m(a,_),b(a,i,_),s=!0},p(a,_){t.p(a,_)},i(a){s||(F(t),s=!0)},o(a){I(t),s=!1},d(a){a&&c(i),r[e].d(a)}}}function sn(l){let e,t,i,s;return{c(){e=Q("div"),this.h()},l(n){e=x(n,"DIV",{class:!0,style:!0}),$e(e).forEach(c),this.h()},h(){O(e,"class","chart svelte-19r8f8"),V(e,"height",l[3]),V(e,"width",l[4]),V(e,"overflow","visible"),V(e,"display",l[15]?"none":"inherit")},m(n,r){b(n,e,r),i||(s=di(t=Xs.call(null,e,{config:l[0],...l[25],echartsOptions:l[9],seriesOptions:l[10],dispatch:l[24],renderer:l[6],connectGroup:l[12],xAxisLabelOverflow:l[13],seriesColors:l[19],theme:l[20]})),i=!0)},p(n,r){r[0]&8&&V(e,"height",n[3]),r[0]&16&&V(e,"width",n[4]),r[0]&32768&&V(e,"display",n[15]?"none":"inherit"),t&&_i(t.update)&&r[0]&35141185&&t.update.call(null,{config:n[0],...n[25],echartsOptions:n[9],seriesOptions:n[10],dispatch:n[24],renderer:n[6],connectGroup:n[12],xAxisLabelOverflow:n[13],seriesColors:n[19],theme:n[20]})},i:Le,o:Le,d(n){n&&c(e),i=!1,s()}}}function nn(l){let e,t;return e=new ln({props:{height:l[3]}}),{c(){ce(e.$$.fragment)},l(i){me(e.$$.fragment,i)},m(i,s){ue(e,i,s),t=!0},p(i,s){const n={};s[0]&8&&(n.height=i[3]),e.$set(n)},i(i){t||(F(e.$$.fragment,i),t=!0)},o(i){I(e.$$.fragment,i),t=!1},d(i){fe(e,i)}}}function Pl(l){let e,t,i,s=l[8]&&Bl(l),n=l[5]&&l[7]&&Ul(l);return{c(){e=Q("div"),s&&s.c(),t=z(),n&&n.c(),this.h()},l(r){e=x(r,"DIV",{class:!0});var o=$e(e);s&&s.l(o),t=W(o),n&&n.l(o),o.forEach(c),this.h()},h(){O(e,"class","chart-footer svelte-19r8f8")},m(r,o){b(r,e,o),s&&s.m(e,null),Ze(e,t),n&&n.m(e,null),i=!0},p(r,o){r[8]?s?(s.p(r,o),o[0]&256&&F(s,1)):(s=Bl(r),s.c(),F(s,1),s.m(e,t)):s&&(ot(),I(s,1,1,()=>{s=null}),ft()),r[5]&&r[7]?n?(n.p(r,o),o[0]&160&&F(n,1)):(n=Ul(r),n.c(),F(n,1),n.m(e,null)):n&&(ot(),I(n,1,1,()=>{n=null}),ft())},i(r){i||(F(s),F(n),i=!0)},o(r){I(s),I(n),i=!1},d(r){r&&c(e),s&&s.d(),n&&n.d()}}}function Bl(l){let e,t;return e=new pl({props:{text:"Save Image",class:"download-button",downloadData:l[32],display:l[17],queryID:l[1],$$slots:{default:[rn]},$$scope:{ctx:l}}}),{c(){ce(e.$$.fragment)},l(i){me(e.$$.fragment,i)},m(i,s){ue(e,i,s),t=!0},p(i,s){const n={};s[0]&16384&&(n.downloadData=i[32]),s[0]&131072&&(n.display=i[17]),s[0]&2&&(n.queryID=i[1]),s[1]&32&&(n.$$scope={dirty:s,ctx:i}),e.$set(n)},i(i){t||(F(e.$$.fragment,i),t=!0)},o(i){I(e.$$.fragment,i),t=!1},d(i){fe(e,i)}}}function rn(l){let e,t,i,s;return{c(){e=Ji("svg"),t=Ji("rect"),i=Ji("circle"),s=Ji("path"),this.h()},l(n){e=Qi(n,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0});var r=$e(e);t=Qi(r,"rect",{x:!0,y:!0,width:!0,height:!0,rx:!0}),$e(t).forEach(c),i=Qi(r,"circle",{cx:!0,cy:!0,r:!0}),$e(i).forEach(c),s=Qi(r,"path",{d:!0}),$e(s).forEach(c),r.forEach(c),this.h()},h(){O(t,"x","3"),O(t,"y","3"),O(t,"width","18"),O(t,"height","18"),O(t,"rx","2"),O(i,"cx","8.5"),O(i,"cy","8.5"),O(i,"r","1.5"),O(s,"d","M20.4 14.5L16 10 4 20"),O(e,"xmlns","http://www.w3.org/2000/svg"),O(e,"width","12"),O(e,"height","12"),O(e,"viewBox","0 0 24 24"),O(e,"fill","none"),O(e,"stroke","#000"),O(e,"stroke-width","2"),O(e,"stroke-linecap","round"),O(e,"stroke-linejoin","round")},m(n,r){b(n,e,r),Ze(e,t),Ze(e,i),Ze(e,s)},p:Le,d(n){n&&c(e)}}}function Ul(l){let e,t;return e=new pl({props:{text:"Download Data",data:l[5],queryID:l[1],class:"download-button",display:l[17]}}),{c(){ce(e.$$.fragment)},l(i){me(e.$$.fragment,i)},m(i,s){ue(e,i,s),t=!0},p(i,s){const n={};s[0]&32&&(n.data=i[5]),s[0]&2&&(n.queryID=i[1]),s[0]&131072&&(n.display=i[17]),e.$set(n)},i(i){t||(F(e.$$.fragment,i),t=!0)},o(i){I(e.$$.fragment,i),t=!1},d(i){fe(e,i)}}}function Gl(l){let e,t;return e=new Cs({props:{source:JSON.stringify(l[0],void 0,3),copyToClipboard:!0,$$slots:{default:[an]},$$scope:{ctx:l}}}),{c(){ce(e.$$.fragment)},l(i){me(e.$$.fragment,i)},m(i,s){ue(e,i,s),t=!0},p(i,s){const n={};s[0]&1&&(n.source=JSON.stringify(i[0],void 0,3)),s[0]&1|s[1]&32&&(n.$$scope={dirty:s,ctx:i}),e.$set(n)},i(i){t||(F(e.$$.fragment,i),t=!0)},o(i){I(e.$$.fragment,i),t=!1},d(i){fe(e,i)}}}function an(l){let e=JSON.stringify(l[0],void 0,3)+"",t;return{c(){t=Ri(e)},l(i){t=Mi(i,e)},m(i,s){b(i,t,s)},p(i,s){s[0]&1&&e!==(e=JSON.stringify(i[0],void 0,3)+"")&&dl(t,e)},d(i){i&&c(t)}}}function ql(l){let e,t,i,s;return{c(){e=Q("div"),this.h()},l(n){e=x(n,"DIV",{class:!0,style:!0}),$e(e).forEach(c),this.h()},h(){O(e,"class","chart svelte-19r8f8"),V(e,"display","none"),V(e,"visibility","visible"),V(e,"height",l[3]),V(e,"width","666px"),V(e,"margin-left","0"),V(e,"margin-top","15px"),V(e,"margin-bottom","15px"),V(e,"overflow","visible")},m(n,r){b(n,e,r),i||(s=di(t=xs.call(null,e,{config:l[0],...l[25],echartsOptions:l[9],seriesOptions:l[10],seriesColors:l[19],queryID:l[1],evidenceChartTitle:l[2],theme:l[20],backgroundColor:l[21].colors["base-100"]})),i=!0)},p(n,r){r[0]&8&&V(e,"height",n[3]),t&&_i(t.update)&&r[0]&37225991&&t.update.call(null,{config:n[0],...n[25],echartsOptions:n[9],seriesOptions:n[10],seriesColors:n[19],queryID:n[1],evidenceChartTitle:n[2],theme:n[20],backgroundColor:n[21].colors["base-100"]})},d(n){n&&c(e),i=!1,s()}}}function on(l){let e,t,i,s,n,r,o,a,_,T,A=!l[16]&&Hl(l);i=new $s({props:{config:l[0],height:l[3],width:l[4],copying:l[15],printing:l[16],echartsOptions:l[9],seriesOptions:l[10],seriesColors:l[18]}});let M=(l[7]||l[8])&&Pl(l),k=l[11]&&!l[16]&&Gl(l),S=l[14]&&ql(l);return{c(){e=Q("div"),A&&A.c(),t=z(),ce(i.$$.fragment),s=z(),M&&M.c(),n=z(),k&&k.c(),r=z(),S&&S.c(),o=nt(),this.h()},l(h){e=x(h,"DIV",{role:!0,class:!0});var L=$e(e);A&&A.l(L),t=W(L),me(i.$$.fragment,L),s=W(L),M&&M.l(L),n=W(L),k&&k.l(L),L.forEach(c),r=W(h),S&&S.l(h),o=nt(),this.h()},h(){O(e,"role","none"),O(e,"class","chart-container mt-2 mb-3 svelte-19r8f8")},m(h,L){b(h,e,L),A&&A.m(e,null),Ze(e,t),ue(i,e,null),Ze(e,s),M&&M.m(e,null),Ze(e,n),k&&k.m(e,null),b(h,r,L),S&&S.m(h,L),b(h,o,L),a=!0,_||(T=[ci(window,"copy",l[27]),ci(window,"beforeprint",l[28]),ci(window,"afterprint",l[29]),ci(window,"export-beforeprint",l[30]),ci(window,"export-afterprint",l[31]),ci(e,"mouseenter",l[33]),ci(e,"mouseleave",l[34])],_=!0)},p(h,L){h[16]?A&&(ot(),I(A,1,1,()=>{A=null}),ft()):A?(A.p(h,L),L[0]&65536&&F(A,1)):(A=Hl(h),A.c(),F(A,1),A.m(e,t));const R={};L[0]&1&&(R.config=h[0]),L[0]&8&&(R.height=h[3]),L[0]&16&&(R.width=h[4]),L[0]&32768&&(R.copying=h[15]),L[0]&65536&&(R.printing=h[16]),L[0]&512&&(R.echartsOptions=h[9]),L[0]&1024&&(R.seriesOptions=h[10]),L[0]&262144&&(R.seriesColors=h[18]),i.$set(R),h[7]||h[8]?M?(M.p(h,L),L[0]&384&&F(M,1)):(M=Pl(h),M.c(),F(M,1),M.m(e,n)):M&&(ot(),I(M,1,1,()=>{M=null}),ft()),h[11]&&!h[16]?k?(k.p(h,L),L[0]&67584&&F(k,1)):(k=Gl(h),k.c(),F(k,1),k.m(e,null)):k&&(ot(),I(k,1,1,()=>{k=null}),ft()),h[14]?S?S.p(h,L):(S=ql(h),S.c(),S.m(o.parentNode,o)):S&&(S.d(1),S=null)},i(h){a||(F(A),F(i.$$.fragment,h),F(M),F(k),a=!0)},o(h){I(A),I(i.$$.fragment,h),I(M),I(k),a=!1},d(h){h&&(c(e),c(r),c(o)),A&&A.d(),fe(i),M&&M.d(),k&&k.d(),S&&S.d(h),_=!1,cl(T)}}}function fn(l,e,t){let i;const s=["config","queryID","evidenceChartTitle","height","width","data","renderer","downloadableData","downloadableImage","echartsOptions","seriesOptions","printEchartsConfig","seriesColors","connectGroup","xAxisLabelOverflow"];let n=Ol(e,s),r,o=Le,a=()=>(o(),o=Ct(i,B=>t(19,r=B)),i),_,T;l.$$.on_destroy.push(()=>o());const{activeAppearance:A,theme:M,resolveColorsObject:k}=si();hi(l,A,B=>t(20,_=B)),hi(l,M,B=>t(21,T=B));let{config:S=void 0}=e,{queryID:h=void 0}=e,{evidenceChartTitle:L=void 0}=e,{height:R="291px"}=e,{width:N="100%"}=e,{data:D}=e,{renderer:q=void 0}=e,{downloadableData:Z=void 0}=e,{downloadableImage:U=void 0}=e,{echartsOptions:p=void 0}=e,{seriesOptions:v=void 0}=e,{printEchartsConfig:G}=e,{seriesColors:y=void 0}=e,{connectGroup:j=void 0}=e,{xAxisLabelOverflow:H=void 0}=e;const w=ms();let Y=!1,P=!1,le=!1,_e=!1;const se=()=>{t(15,P=!0),cs(),setTimeout(()=>{t(15,P=!1)},0)},te=()=>t(16,le=!0),ge=()=>t(16,le=!1),ne=()=>t(16,le=!0),K=()=>t(16,le=!1),ee=()=>{t(14,Y=!0),setTimeout(()=>{t(14,Y=!1)},0)},ae=()=>t(17,_e=!0),Ce=()=>t(17,_e=!1);return l.$$set=B=>{e=li(li({},e),Ui(B)),t(25,n=Ol(e,s)),"config"in B&&t(0,S=B.config),"queryID"in B&&t(1,h=B.queryID),"evidenceChartTitle"in B&&t(2,L=B.evidenceChartTitle),"height"in B&&t(3,R=B.height),"width"in B&&t(4,N=B.width),"data"in B&&t(5,D=B.data),"renderer"in B&&t(6,q=B.renderer),"downloadableData"in B&&t(7,Z=B.downloadableData),"downloadableImage"in B&&t(8,U=B.downloadableImage),"echartsOptions"in B&&t(9,p=B.echartsOptions),"seriesOptions"in B&&t(10,v=B.seriesOptions),"printEchartsConfig"in B&&t(11,G=B.printEchartsConfig),"seriesColors"in B&&t(26,y=B.seriesColors),"connectGroup"in B&&t(12,j=B.connectGroup),"xAxisLabelOverflow"in B&&t(13,H=B.xAxisLabelOverflow)},l.$$.update=()=>{l.$$.dirty[0]&67108864&&a(t(18,i=k(y)))},[S,h,L,R,N,D,q,Z,U,p,v,G,j,H,Y,P,le,_e,i,r,_,T,A,M,w,n,y,se,te,ge,ne,K,ee,ae,Ce]}class un extends wt{constructor(e){super(),Mt(this,e,fn,on,Ot,{config:0,queryID:1,evidenceChartTitle:2,height:3,width:4,data:5,renderer:6,downloadableData:7,downloadableImage:8,echartsOptions:9,seriesOptions:10,printEchartsConfig:11,seriesColors:26,connectGroup:12,xAxisLabelOverflow:13},null,[-1,-1])}}function Wi(l,e){const t=new Set(l.map(i=>i[e]));return Array.from(t)}function mn(l,e){return ii(l,Ts({count:ks(e)}))[0].count}function cn(l,e,t){let i;if(typeof t!="object")i=ii(l,ol(e,Fl({xTotal:fl(t)})),nl({percentOfX:Il(t,"xTotal")}),Rl({percentOfX:t+"_pct"}));else{i=ii(l,nl({valueSum:0}));for(let s=0;s<i.length;s++){i[s].valueSum=0;for(let n=0;n<t.length;n++)i[s].valueSum=i[s].valueSum+i[s][t[n]]}i=ii(i,ol(e,Fl({xTotal:fl("valueSum")})));for(let s=0;s<t.length;s++)i=ii(i,nl({percentOfX:Il(t[s],"xTotal")}),Rl({percentOfX:t[s]+"_pct"}))}return i}function Pi(l,e,t){return[...l].sort((i,s)=>(i[e]<s[e]?-1:1)*(t?1:-1))}function rs(l,e,t){const i=e+t;return l%i<e?0:1}function dn(l){let e,t;return e=new es({props:{error:l[14],title:l[8]}}),{c(){ce(e.$$.fragment)},l(i){me(e.$$.fragment,i)},m(i,s){ue(e,i,s),t=!0},p(i,s){const n={};s[0]&16384&&(n.error=i[14]),s[0]&256&&(n.title=i[8]),e.$set(n)},i(i){t||(F(e.$$.fragment,i),t=!0)},o(i){I(e.$$.fragment,i),t=!1},d(i){fe(e,i)}}}function _n(l){let e,t,i;const s=l[136].default,n=zi(s,l,l[135],null);return t=new un({props:{config:l[20],height:l[15],width:l[13],data:l[0],queryID:l[6],evidenceChartTitle:l[7],showAllXAxisLabels:l[1],swapXY:l[3],echartsOptions:l[9],seriesOptions:l[10],printEchartsConfig:l[2],renderer:l[11],downloadableData:l[4],downloadableImage:l[5],connectGroup:l[12],xAxisLabelOverflow:l[23],seriesColors:l[16]}}),{c(){n&&n.c(),e=z(),ce(t.$$.fragment)},l(r){n&&n.l(r),e=W(r),me(t.$$.fragment,r)},m(r,o){n&&n.m(r,o),b(r,e,o),ue(t,r,o),i=!0},p(r,o){n&&n.p&&(!i||o[4]&2048)&&Vi(n,s,r,r[135],i?Yi(s,r[135],o,null):ji(r[135]),null);const a={};o[0]&1048576&&(a.config=r[20]),o[0]&32768&&(a.height=r[15]),o[0]&8192&&(a.width=r[13]),o[0]&1&&(a.data=r[0]),o[0]&64&&(a.queryID=r[6]),o[0]&128&&(a.evidenceChartTitle=r[7]),o[0]&2&&(a.showAllXAxisLabels=r[1]),o[0]&8&&(a.swapXY=r[3]),o[0]&512&&(a.echartsOptions=r[9]),o[0]&1024&&(a.seriesOptions=r[10]),o[0]&4&&(a.printEchartsConfig=r[2]),o[0]&2048&&(a.renderer=r[11]),o[0]&16&&(a.downloadableData=r[4]),o[0]&32&&(a.downloadableImage=r[5]),o[0]&4096&&(a.connectGroup=r[12]),o[0]&65536&&(a.seriesColors=r[16]),t.$set(a)},i(r){i||(F(n,r),F(t.$$.fragment,r),i=!0)},o(r){I(n,r),I(t.$$.fragment,r),i=!1},d(r){r&&c(e),n&&n.d(r),fe(t,r)}}}function hn(l){let e,t,i,s;const n=[_n,dn],r=[];function o(a,_){return a[14]?1:0}return e=o(l),t=r[e]=n[e](l),{c(){t.c(),i=nt()},l(a){t.l(a),i=nt()},m(a,_){r[e].m(a,_),b(a,i,_),s=!0},p(a,_){let T=e;e=o(a),e===T?r[e].p(a,_):(ot(),I(r[T],1,1,()=>{r[T]=null}),ft(),t=r[e],t?t.p(a,_):(t=r[e]=n[e](a),t.c()),F(t,1),t.m(i.parentNode,i))},i(a){s||(F(t),s=!0)},o(a){I(t),s=!1},d(a){a&&c(i),r[e].d(a)}}}function yn(l,e,t){let i,s,n,r,o,a=Le,_=()=>(a(),a=Ct(n,m=>t(131,o=m)),n),T,A,M=Le,k=()=>(M(),M=Ct(s,m=>t(133,A=m)),s),S,h=Le,L=()=>(h(),h=Ct(i,m=>t(134,S=m)),i),R;l.$$.on_destroy.push(()=>a()),l.$$.on_destroy.push(()=>M()),l.$$.on_destroy.push(()=>h());let{$$slots:N={},$$scope:D}=e,q=ml({}),Z=ml({});hi(l,Z,m=>t(20,R=m));const{theme:U,resolveColor:p,resolveColorsObject:v,resolveColorPalette:G}=si();hi(l,U,m=>t(132,T=m));let{data:y=void 0}=e,{queryID:j=void 0}=e,{x:H=void 0}=e,{y:w=void 0}=e,{y2:Y=void 0}=e,{series:P=void 0}=e,{size:le=void 0}=e,{tooltipTitle:_e=void 0}=e,{showAllXAxisLabels:se=void 0}=e,{printEchartsConfig:te=!1}=e,ge=!!w,ne=!!H,{swapXY:K=!1}=e,{title:ee=void 0}=e,{subtitle:ae=void 0}=e,{chartType:Ce="Chart"}=e,{bubble:B=!1}=e,{hist:ie=!1}=e,{boxplot:de=!1}=e,be,{xType:$=void 0}=e,{xAxisTitle:ye="false"}=e,{xBaseline:J=!0}=e,{xTickMarks:Ae=!1}=e,{xGridlines:Se=!1}=e,{xAxisLabels:he=!0}=e,{sort:Oe=!0}=e,{xFmt:Ie=void 0}=e,{xMin:De=void 0}=e,{xMax:Ee=void 0}=e,{yLog:we=!1}=e,{yType:Me=we===!0?"log":"value"}=e,{yLogBase:Qe=10}=e,{yAxisTitle:C="false"}=e,{yBaseline:Te=!1}=e,{yTickMarks:Ne=!1}=e,{yGridlines:Ye=!0}=e,{yAxisLabels:je=!0}=e,{yMin:He=void 0}=e,{yMax:ke=void 0}=e,{yScale:Ve=!1}=e,{yFmt:Xe=void 0}=e,{yAxisColor:Je="true"}=e,{y2AxisTitle:ve="false"}=e,{y2Baseline:Ke=!1}=e,{y2TickMarks:E=!1}=e,{y2Gridlines:re=!0}=e,{y2AxisLabels:xe=!0}=e,{y2Min:d=void 0}=e,{y2Max:Bt=void 0}=e,{y2Scale:dt=!1}=e,{y2Fmt:ut=void 0}=e,{y2AxisColor:Rt="true"}=e,{sizeFmt:lt=void 0}=e,{colorPalette:Ut="default"}=e,{legend:et=void 0}=e,{echartsOptions:rt=void 0}=e,{seriesOptions:Xt=void 0}=e,{seriesColors:Ft=void 0}=e,{stackType:_t=void 0}=e,{stacked100:st=!1}=e,{chartAreaHeight:tt}=e,{renderer:mt=void 0}=e,{downloadableData:u=!0}=e,{downloadableImage:Gt=!0}=e,{connectGroup:xt=void 0}=e,{leftPadding:Qt=void 0}=e,{rightPadding:ht=void 0}=e,{xLabelWrap:Jt=!1}=e;const yi=Jt?"break":"truncate";let oe,yt,qt=[],Tt=[],Kt,at,gt,Zt,pe,it,ct,bt,gi,Ht,Pt,vt,St,Wt,pt,Et,ni,ri,zt,At,Pe,Be,Ue,Ge,qe,We,f,g,bi,Vt,$t,ei,ai,oi,Si,Ei,jt,$i,el,Xi,bl,tl,fi=[],Ai=!0,Yt=[],Ni=[],Dt,Ii,il,ui;return l.$$set=m=>{"data"in m&&t(0,y=m.data),"queryID"in m&&t(6,j=m.queryID),"x"in m&&t(24,H=m.x),"y"in m&&t(25,w=m.y),"y2"in m&&t(49,Y=m.y2),"series"in m&&t(50,P=m.series),"size"in m&&t(51,le=m.size),"tooltipTitle"in m&&t(52,_e=m.tooltipTitle),"showAllXAxisLabels"in m&&t(1,se=m.showAllXAxisLabels),"printEchartsConfig"in m&&t(2,te=m.printEchartsConfig),"swapXY"in m&&t(3,K=m.swapXY),"title"in m&&t(7,ee=m.title),"subtitle"in m&&t(53,ae=m.subtitle),"chartType"in m&&t(8,Ce=m.chartType),"bubble"in m&&t(54,B=m.bubble),"hist"in m&&t(55,ie=m.hist),"boxplot"in m&&t(56,de=m.boxplot),"xType"in m&&t(26,$=m.xType),"xAxisTitle"in m&&t(27,ye=m.xAxisTitle),"xBaseline"in m&&t(28,J=m.xBaseline),"xTickMarks"in m&&t(29,Ae=m.xTickMarks),"xGridlines"in m&&t(30,Se=m.xGridlines),"xAxisLabels"in m&&t(31,he=m.xAxisLabels),"sort"in m&&t(32,Oe=m.sort),"xFmt"in m&&t(57,Ie=m.xFmt),"xMin"in m&&t(58,De=m.xMin),"xMax"in m&&t(59,Ee=m.xMax),"yLog"in m&&t(33,we=m.yLog),"yType"in m&&t(60,Me=m.yType),"yLogBase"in m&&t(61,Qe=m.yLogBase),"yAxisTitle"in m&&t(34,C=m.yAxisTitle),"yBaseline"in m&&t(35,Te=m.yBaseline),"yTickMarks"in m&&t(36,Ne=m.yTickMarks),"yGridlines"in m&&t(37,Ye=m.yGridlines),"yAxisLabels"in m&&t(38,je=m.yAxisLabels),"yMin"in m&&t(62,He=m.yMin),"yMax"in m&&t(63,ke=m.yMax),"yScale"in m&&t(39,Ve=m.yScale),"yFmt"in m&&t(64,Xe=m.yFmt),"yAxisColor"in m&&t(65,Je=m.yAxisColor),"y2AxisTitle"in m&&t(40,ve=m.y2AxisTitle),"y2Baseline"in m&&t(41,Ke=m.y2Baseline),"y2TickMarks"in m&&t(42,E=m.y2TickMarks),"y2Gridlines"in m&&t(43,re=m.y2Gridlines),"y2AxisLabels"in m&&t(44,xe=m.y2AxisLabels),"y2Min"in m&&t(66,d=m.y2Min),"y2Max"in m&&t(67,Bt=m.y2Max),"y2Scale"in m&&t(45,dt=m.y2Scale),"y2Fmt"in m&&t(68,ut=m.y2Fmt),"y2AxisColor"in m&&t(69,Rt=m.y2AxisColor),"sizeFmt"in m&&t(70,lt=m.sizeFmt),"colorPalette"in m&&t(71,Ut=m.colorPalette),"legend"in m&&t(46,et=m.legend),"echartsOptions"in m&&t(9,rt=m.echartsOptions),"seriesOptions"in m&&t(10,Xt=m.seriesOptions),"seriesColors"in m&&t(72,Ft=m.seriesColors),"stackType"in m&&t(73,_t=m.stackType),"stacked100"in m&&t(74,st=m.stacked100),"chartAreaHeight"in m&&t(47,tt=m.chartAreaHeight),"renderer"in m&&t(11,mt=m.renderer),"downloadableData"in m&&t(4,u=m.downloadableData),"downloadableImage"in m&&t(5,Gt=m.downloadableImage),"connectGroup"in m&&t(12,xt=m.connectGroup),"leftPadding"in m&&t(75,Qt=m.leftPadding),"rightPadding"in m&&t(76,ht=m.rightPadding),"xLabelWrap"in m&&t(48,Jt=m.xLabelWrap),"$$scope"in m&&t(135,D=m.$$scope)},l.$$.update=()=>{var m,Sl,El,Al,Cl,Tl;if(l.$$.dirty[0]&4&&t(2,te=ze(te)),l.$$.dirty[0]&8&&t(3,K=ze(K)),l.$$.dirty[0]&268435456&&t(28,J=ze(J)),l.$$.dirty[0]&536870912&&t(29,Ae=ze(Ae)),l.$$.dirty[0]&1073741824&&t(30,Se=ze(Se)),l.$$.dirty[1]&1&&t(31,he=ze(he)),l.$$.dirty[1]&2&&t(32,Oe=ze(Oe)),l.$$.dirty[1]&4&&t(33,we=ze(we)),l.$$.dirty[1]&16&&t(35,Te=ze(Te)),l.$$.dirty[1]&32&&t(36,Ne=ze(Ne)),l.$$.dirty[1]&64&&t(37,Ye=ze(Ye)),l.$$.dirty[1]&128&&t(38,je=ze(je)),l.$$.dirty[1]&256&&t(39,Ve=ze(Ve)),l.$$.dirty[2]&8&&L(t(19,i=p(Je))),l.$$.dirty[1]&1024&&t(41,Ke=ze(Ke)),l.$$.dirty[1]&2048&&t(42,E=ze(E)),l.$$.dirty[1]&4096&&t(43,re=ze(re)),l.$$.dirty[1]&8192&&t(44,xe=ze(xe)),l.$$.dirty[1]&16384&&t(45,dt=ze(dt)),l.$$.dirty[2]&128&&k(t(18,s=p(Rt))),l.$$.dirty[2]&512&&_(t(17,n=G(Ut))),l.$$.dirty[2]&1024&&t(16,r=v(Ft)),l.$$.dirty[0]&16&&t(4,u=ze(u)),l.$$.dirty[0]&32&&t(5,Gt=ze(Gt)),l.$$.dirty[1]&131072&&t(48,Jt=ze(Jt)),l.$$.dirty[0]&2130731403|l.$$.dirty[1]&2147352575|l.$$.dirty[2]&2147481975|l.$$.dirty[3]&2147483647|l.$$.dirty[4]&2047)try{if(t(14,Ii=void 0),t(124,fi=[]),t(83,Tt=[]),t(126,Yt=[]),t(127,Ni=[]),t(85,at=[]),t(77,ge=!!w),t(78,ne=!!H),ul(y),t(80,oe=vi(y)),t(81,yt=Object.keys(oe)),ne||t(24,H=yt[0]),!ge){t(82,qt=yt.filter(function(X){return![H,P,le].includes(X)}));for(let X=0;X<qt.length;X++)t(85,at=qt[X]),t(84,Kt=oe[at].type),Kt==="number"&&Tt.push(at);t(25,w=Tt.length>1?Tt:Tt[0])}B?t(79,be={x:H,y:w,size:le}):ie?t(79,be={x:H}):de?t(79,be={}):t(79,be={x:H,y:w});for(let X in be)be[X]==null&&fi.push(X);if(fi.length===1)throw Error(new Intl.ListFormat().format(fi)+" is required");if(fi.length>1)throw Error(new Intl.ListFormat().format(fi)+" are required");if(st===!0&&w.includes("_pct")&&Ai===!1)if(typeof w=="object"){for(let X=0;X<w.length;X++)t(25,w[X]=w[X].replace("_pct",""),w);t(125,Ai=!1)}else t(25,w=w.replace("_pct","")),t(125,Ai=!1);if(H&&Yt.push(H),w)if(typeof w=="object")for(t(128,Dt=0);Dt<w.length;t(128,Dt++,Dt))Yt.push(w[Dt]);else Yt.push(w);if(Y)if(typeof Y=="object")for(t(128,Dt=0);Dt<Y.length;t(128,Dt++,Dt))Yt.push(Y[Dt]);else Yt.push(Y);if(le&&Yt.push(le),P&&Ni.push(P),_e&&Ni.push(_e),ul(y,Yt,Ni),st===!0){if(t(0,y=cn(y,H,w)),typeof w=="object"){for(let X=0;X<w.length;X++)t(25,w[X]=w[X]+"_pct",w);t(125,Ai=!1)}else t(25,w=w+"_pct"),t(125,Ai=!1);t(80,oe=vi(y))}switch(t(86,gt=oe[H].type),gt){case"number":t(86,gt="value");break;case"string":t(86,gt="category");break;case"date":t(86,gt="time");break;default:break}if(t(26,$=$==="category"?"category":gt),se?t(1,se=se==="true"||se===!0):t(1,se=$==="category"),K&&$!=="category")throw Error("Horizontal charts do not support a value or time-based x-axis. You can either change your SQL query to output string values or set swapXY=false.");if(K&&Y)throw Error("Horizontal charts do not support a secondary y-axis. You can either set swapXY=false or remove the y2 prop from your chart.");if(K&&t(26,$="category"),t(87,Zt=gt==="value"&&$==="category"),t(0,y=Oe?gt==="category"?Pi(y,w,!1):Pi(y,H,!0):y),gt==="time"&&t(0,y=Pi(y,H,!0)),t(129,il=vi(y,"array")),t(130,ui=il.filter(X=>X.type==="date")),t(130,ui=ui.map(X=>X.id)),ui.length>0)for(let X=0;X<ui.length;X++)t(0,y=Ls(y,ui[X]));Ie?t(88,pe=Nt(Ie,(m=oe[H].format)==null?void 0:m.valueType)):t(88,pe=oe[H].format),w?Xe?typeof w=="object"?t(89,it=Nt(Xe,(Sl=oe[w[0]].format)==null?void 0:Sl.valueType)):t(89,it=Nt(Xe,(El=oe[w].format)==null?void 0:El.valueType)):typeof w=="object"?t(89,it=oe[w[0]].format):t(89,it=oe[w].format):t(89,it="str"),Y&&(ut?typeof Y=="object"?t(90,ct=Nt(ut,(Al=oe[Y[0]].format)==null?void 0:Al.valueType)):t(90,ct=Nt(ut,(Cl=oe[Y].format)==null?void 0:Cl.valueType)):typeof Y=="object"?t(90,ct=oe[Y[0]].format):t(90,ct=oe[Y].format)),le&&(lt?t(91,bt=Nt(lt,(Tl=oe[le].format)==null?void 0:Tl.valueType)):t(91,bt=oe[le].format)),t(92,gi=oe[H].columnUnitSummary),w&&(typeof w=="object"?t(93,Ht=oe[w[0]].columnUnitSummary):t(93,Ht=oe[w].columnUnitSummary)),Y&&(typeof Y=="object"?t(94,Pt=oe[Y[0]].columnUnitSummary):t(94,Pt=oe[Y].columnUnitSummary)),t(27,ye=ye==="true"?ti(H,pe):ye==="false"?"":ye),t(34,C=C==="true"?typeof w=="object"?"":ti(w,it):C==="false"?"":C),t(40,ve=ve==="true"?typeof Y=="object"?"":ti(Y,ct):ve==="false"?"":ve);let Ci=typeof w=="object"?w.length:1,kl=P?mn(y,P):1,Hi=Ci*kl,ll=typeof Y=="object"?Y.length:Y?1:0,sl=Hi+ll;if(et!==void 0&&t(46,et=et==="true"||et===!0),t(46,et=et??sl>1),st===!0&&we===!0)throw Error("Log axis cannot be used in a 100% stacked chart");if(_t==="stacked"&&sl>1&&we===!0)throw Error("Log axis cannot be used in a stacked chart");let Ti;if(typeof w=="object"){Ti=oe[w[0]].columnUnitSummary.min;for(let X=0;X<w.length;X++)oe[w[X]].columnUnitSummary.min<Ti&&(Ti=oe[w[X]].columnUnitSummary.min)}else w&&(Ti=oe[w].columnUnitSummary.min);if(we===!0&&Ti<=0&&Ti!==null)throw Error("Log axis cannot display values less than or equal to zero");q.update(X=>({...X,data:y,x:H,y:w,y2:Y,series:P,swapXY:K,sort:Oe,xType:$,xFormat:pe,yFormat:it,y2Format:ct,sizeFormat:bt,xMismatch:Zt,size:le,yMin:He,y2Min:d,columnSummary:oe,xAxisTitle:ye,yAxisTitle:C,y2AxisTitle:ve,tooltipTitle:_e,chartAreaHeight:tt,chartType:Ce,yCount:Ci,y2Count:ll})),t(95,vt=Wi(y,H));let Ll;if(K?t(96,St={type:Me,logBase:Qe,position:"top",axisLabel:{show:je,hideOverlap:!0,showMaxLabel:!0,formatter(X){return Ki(X,it,Ht)},margin:4},min:He,max:ke,scale:Ve,splitLine:{show:Ye},axisLine:{show:Te,onZero:!1},axisTick:{show:Ne},boundaryGap:!1,z:2}):t(96,St={type:$,min:De,max:Ee,tooltip:{show:!0,position:"inside",formatter(X){if(X.isTruncated())return X.name}},splitLine:{show:Se},axisLine:{show:J},axisTick:{show:Ae},axisLabel:{show:he,hideOverlap:!0,showMaxLabel:$==="category"||$==="value",formatter:$==="time"||$==="category"?!1:function(X){return Ki(X,pe,gi)},margin:6},scale:!0,z:2}),K?t(97,Wt={type:$,inverse:"true",splitLine:{show:Se},axisLine:{show:J},axisTick:{show:Ae},axisLabel:{show:he,hideOverlap:!0},scale:!0,min:De,max:Ee,z:2}):(t(97,Wt={type:Me,logBase:Qe,splitLine:{show:Ye},axisLine:{show:Te,onZero:!1},axisTick:{show:Ne},axisLabel:{show:je,hideOverlap:!0,margin:4,formatter(X){return Ki(X,it,Ht)},color:Y?S==="true"?o[0]:S!=="false"?S:void 0:void 0},name:C,nameLocation:"end",nameTextStyle:{align:"left",verticalAlign:"top",padding:[0,5,0,0],color:Y?S==="true"?o[0]:S!=="false"?S:void 0:void 0},nameGap:6,min:He,max:ke,scale:Ve,boundaryGap:["0%","1%"],z:2}),Ll={type:"value",show:!1,alignTicks:!0,splitLine:{show:re},axisLine:{show:Ke,onZero:!1},axisTick:{show:E},axisLabel:{show:xe,hideOverlap:!0,margin:4,formatter(X){return Ki(X,ct,Pt)},color:A==="true"?o[Hi]:A!=="false"?A:void 0},name:ve,nameLocation:"end",nameTextStyle:{align:"right",verticalAlign:"top",padding:[0,0,0,5],color:A==="true"?o[Hi]:A!=="false"?A:void 0},nameGap:6,min:d,max:Bt,scale:dt,boundaryGap:["0%","1%"],z:2},t(97,Wt=[Wt,Ll])),tt){if(t(47,tt=Number(tt)),isNaN(tt))throw Error("chartAreaHeight must be a number");if(tt<=0)throw Error("chartAreaHeight must be a positive number")}else t(47,tt=180);t(100,ni=!!ee),t(101,ri=!!ae),t(102,zt=et*(P!==null||typeof w=="object"&&w.length>1)),t(103,At=C!==""&&K),t(104,Pe=ye!==""&&!K),t(105,Be=15),t(106,Ue=13),t(107,Ge=6*ri),t(108,qe=ni*Be+ri*Ue+Ge*Math.max(ni,ri)),t(109,We=10),t(110,f=10),t(111,g=14),t(112,bi=14),t(113,Vt=15),t(113,Vt=Vt*zt),t(114,$t=7),t(114,$t=$t*Math.max(ni,ri)),t(115,ei=qe+$t),t(116,ai=ei+Vt+bi*At+We),t(117,oi=Pe*g+f),t(121,$i=8),t(123,Xi=1),K&&(t(122,el=vt.length),t(123,Xi=Math.max(1,el/$i))),t(118,Si=tt*Xi+ai+oi),t(119,Ei=ei+Vt+7),t(15,bl=Si+"px"),t(13,tl="100%"),t(120,jt=K?C:ye),jt!==""&&t(120,jt=jt+" →"),t(98,pt={id:"horiz-axis-title",type:"text",style:{text:jt,textAlign:"right",fill:T.colors["base-content-muted"]},cursor:"auto",right:K?"2%":"3%",top:K?Ei:null,bottom:K?null:"2%"}),t(99,Et={title:{text:ee,subtext:ae,subtextStyle:{width:tl}},tooltip:{trigger:"axis",show:!0,formatter(X){let ki,Li,Oi,xi;if(sl>1){Li=X[0].value[K?1:0],ki=`<span id="tooltip" style='font-weight: 600;'>${It(Li,pe)}</span>`;for(let mi=X.length-1;mi>=0;mi--)X[mi].seriesName!=="stackTotal"&&(Oi=X[mi].value[K?0:1],ki=ki+`<br> <span style='font-size: 11px;'>${X[mi].marker} ${X[mi].seriesName}<span/><span style='float:right; margin-left: 10px; font-size: 12px;'>${It(Oi,rs(X[mi].componentIndex,Ci,ll)===0?it:ct)}</span>`)}else $==="value"?(Li=X[0].value[K?1:0],Oi=X[0].value[K?0:1],xi=X[0].seriesName,ki=`<span id="tooltip" style='font-weight: 600;'>${ti(H,pe)}: </span><span style='float:right; margin-left: 10px;'>${It(Li,pe)}</span><br/><span style='font-weight: 600;'>${ti(xi,it)}: </span><span style='float:right; margin-left: 10px;'>${It(Oi,it)}</span>`):(Li=X[0].value[K?1:0],Oi=X[0].value[K?0:1],xi=X[0].seriesName,ki=`<span id="tooltip" style='font-weight: 600;'>${It(Li,pe)}</span><br/><span>${ti(xi,it)}: </span><span style='float:right; margin-left: 10px;'>${It(Oi,it)}</span>`);return ki},confine:!0,axisPointer:{type:"shadow"},extraCssText:'box-shadow: 0 3px 6px rgba(0,0,0,.15); box-shadow: 0 2px 4px rgba(0,0,0,.12); z-index: 1; font-feature-settings: "cv02", "tnum";',order:"valueDesc"},legend:{show:et,type:"scroll",top:ei,padding:[0,0,0,0],data:[]},grid:{left:Qt??(K?"1%":"0.8%"),right:ht??(K?"4%":"3%"),bottom:oi,top:ai,containLabel:!0},xAxis:St,yAxis:Wt,series:[],animation:!0,graphic:pt,color:o}),Z.update(()=>Et)}catch(Ci){if(t(14,Ii=Ci.message),console.error("\x1B[31m%s\x1B[0m",`Error in ${Ce}: ${Ci.message}`),$l)throw Ii;q.update(Hi=>({...Hi,error:Ii}))}l.$$.dirty[0]&1},al(yl,q),al(gl,Z),[y,se,te,K,u,Gt,j,ee,Ce,rt,Xt,mt,xt,tl,Ii,bl,r,n,s,i,R,Z,U,yi,H,w,$,ye,J,Ae,Se,he,Oe,we,C,Te,Ne,Ye,je,Ve,ve,Ke,E,re,xe,dt,et,tt,Jt,Y,P,le,_e,ae,B,ie,de,Ie,De,Ee,Me,Qe,He,ke,Xe,Je,d,Bt,ut,Rt,lt,Ut,Ft,_t,st,Qt,ht,ge,ne,be,oe,yt,qt,Tt,Kt,at,gt,Zt,pe,it,ct,bt,gi,Ht,Pt,vt,St,Wt,pt,Et,ni,ri,zt,At,Pe,Be,Ue,Ge,qe,We,f,g,bi,Vt,$t,ei,ai,oi,Si,Ei,jt,$i,el,Xi,fi,Ai,Yt,Ni,Dt,il,ui,o,T,A,S,D,N]}class gn extends wt{constructor(e){super(),Mt(this,e,yn,hn,Ot,{data:0,queryID:6,x:24,y:25,y2:49,series:50,size:51,tooltipTitle:52,showAllXAxisLabels:1,printEchartsConfig:2,swapXY:3,title:7,subtitle:53,chartType:8,bubble:54,hist:55,boxplot:56,xType:26,xAxisTitle:27,xBaseline:28,xTickMarks:29,xGridlines:30,xAxisLabels:31,sort:32,xFmt:57,xMin:58,xMax:59,yLog:33,yType:60,yLogBase:61,yAxisTitle:34,yBaseline:35,yTickMarks:36,yGridlines:37,yAxisLabels:38,yMin:62,yMax:63,yScale:39,yFmt:64,yAxisColor:65,y2AxisTitle:40,y2Baseline:41,y2TickMarks:42,y2Gridlines:43,y2AxisLabels:44,y2Min:66,y2Max:67,y2Scale:45,y2Fmt:68,y2AxisColor:69,sizeFmt:70,colorPalette:71,legend:46,echartsOptions:9,seriesOptions:10,seriesColors:72,stackType:73,stacked100:74,chartAreaHeight:47,renderer:11,downloadableData:4,downloadableImage:5,connectGroup:12,leftPadding:75,rightPadding:76,xLabelWrap:48},null,[-1,-1,-1,-1,-1])}}function bn(l){let e;const t=l[7].default,i=zi(t,l,l[8],null);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,n){i&&i.m(s,n),e=!0},p(s,n){i&&i.p&&(!e||n&256)&&Vi(i,t,s,s[8],e?Yi(t,s[8],n,null):ji(s[8]),null)},i(s){e||(F(i,s),e=!0)},o(s){I(i,s),e=!1},d(s){i&&i.d(s)}}}function Sn(l){let e,t;const i=[l[5],{data:Lt.isQuery(l[11])?Array.from(l[11]):l[11]},{queryID:l[6]}];let s={$$slots:{default:[bn]},$$scope:{ctx:l}};for(let n=0;n<i.length;n+=1)s=li(s,i[n]);return e=new gn({props:s}),{c(){ce(e.$$.fragment)},l(n){me(e.$$.fragment,n)},m(n,r){ue(e,n,r),t=!0},p(n,r){const o=r&2144?is(i,[r&32&&ls(n[5]),r&2048&&{data:Lt.isQuery(n[11])?Array.from(n[11]):n[11]},r&64&&{queryID:n[6]}]):{};r&256&&(o.$$scope={dirty:r,ctx:n}),e.$set(o)},i(n){t||(F(e.$$.fragment,n),t=!0)},o(n){I(e.$$.fragment,n),t=!1},d(n){fe(e,n)}}}function En(l){let e,t;return e=new ss({props:{slot:"empty",emptyMessage:l[2],emptySet:l[1],chartType:l[5].chartType,isInitial:l[4]}}),{c(){ce(e.$$.fragment)},l(i){me(e.$$.fragment,i)},m(i,s){ue(e,i,s),t=!0},p(i,s){const n={};s&4&&(n.emptyMessage=i[2]),s&2&&(n.emptySet=i[1]),s&32&&(n.chartType=i[5].chartType),s&16&&(n.isInitial=i[4]),e.$set(n)},i(i){t||(F(e.$$.fragment,i),t=!0)},o(i){I(e.$$.fragment,i),t=!1},d(i){fe(e,i)}}}function An(l){let e,t;return e=new es({props:{slot:"error",title:l[5].chartType,error:l[11].error.message}}),{c(){ce(e.$$.fragment)},l(i){me(e.$$.fragment,i)},m(i,s){ue(e,i,s),t=!0},p(i,s){const n={};s&32&&(n.title=i[5].chartType),s&2048&&(n.error=i[11].error.message),e.$set(n)},i(i){t||(F(e.$$.fragment,i),t=!0)},o(i){I(e.$$.fragment,i),t=!1},d(i){fe(e,i)}}}function Cn(l){let e,t;return e=new ts({props:{data:l[0],height:l[3],$$slots:{error:[An,({loaded:i})=>({11:i}),({loaded:i})=>i?2048:0],empty:[En],default:[Sn,({loaded:i})=>({11:i}),({loaded:i})=>i?2048:0]},$$scope:{ctx:l}}}),{c(){ce(e.$$.fragment)},l(i){me(e.$$.fragment,i)},m(i,s){ue(e,i,s),t=!0},p(i,[s]){const n={};s&1&&(n.data=i[0]),s&8&&(n.height=i[3]),s&2358&&(n.$$scope={dirty:s,ctx:i}),e.$set(n)},i(i){t||(F(e.$$.fragment,i),t=!0)},o(i){I(e.$$.fragment,i),t=!1},d(i){fe(e,i)}}}function Tn(l,e,t){let i,{$$slots:s={},$$scope:n}=e,{data:r}=e;const o=Lt.isQuery(r)?r.hash:void 0;let a=(r==null?void 0:r.hash)===o,{emptySet:_=void 0}=e,{emptyMessage:T=void 0}=e,{height:A=200}=e,M=r==null?void 0:r.id;return l.$$set=k=>{t(10,e=li(li({},e),Ui(k))),"data"in k&&t(0,r=k.data),"emptySet"in k&&t(1,_=k.emptySet),"emptyMessage"in k&&t(2,T=k.emptyMessage),"height"in k&&t(3,A=k.height),"$$scope"in k&&t(8,n=k.$$scope)},l.$$.update=()=>{l.$$.dirty&1&&t(4,a=(r==null?void 0:r.hash)===o),t(5,i={...Object.fromEntries(Object.entries(e).filter(([,k])=>k!==void 0))})},e=Ui(e),[r,_,T,A,a,i,M,s,n]}class as extends wt{constructor(e){super(),Mt(this,e,Tn,Cn,Ot,{data:0,emptySet:1,emptyMessage:2,height:3})}}function os(l,e,t,i,s,n,r,o,a,_,T=void 0,A=void 0,M=void 0,k=void 0){function S(y,j,H,w){let Y={name:j,data:y,yAxisIndex:H};return Y={...w,...Y},Y}let h,L,R,N=[],D,q,Z,U,p;function v(y,j){const H=[];function w(P){return typeof P>"u"}function Y(P,le){w(P)||(Array.isArray(P)?P.forEach(_e=>H.push([_e,le])):H.push([P,le]))}return Y(y,0),Y(j,1),H}let G=v(t,M);if(i!=null&&G.length===1)for(U=Wi(l,i),h=0;h<U.length;h++){if(q=l.filter(y=>y[i]===U[h]),s?D=q.map(y=>[y[G[0][0]],o?y[e].toString():y[e]]):D=q.map(y=>[o?y[e].toString():y[e],y[G[0][0]]]),T){let y=q.map(j=>j[T]);D.forEach((j,H)=>j.push(y[H]))}if(A){let y=q.map(j=>j[A]);D.forEach((j,H)=>j.push(y[H]))}Z=U[h]??"null",p=G[0][1],R=S(D,Z,p,n),N.push(R)}if(i!=null&&G.length>1)for(U=Wi(l,i),h=0;h<U.length;h++)for(q=l.filter(y=>y[i]===U[h]),L=0;L<G.length;L++){if(s?D=q.map(y=>[y[G[L][0]],o?y[e].toString():y[e]]):D=q.map(y=>[o?y[e].toString():y[e],y[G[L][0]]]),T){let y=q.map(j=>j[T]);D.forEach((j,H)=>j.push(y[H]))}if(A){let y=q.map(j=>j[A]);D.forEach((j,H)=>j.push(y[H]))}Z=(U[h]??"null")+" - "+a[G[L][0]].title,p=G[L][1],R=S(D,Z,p,n),N.push(R)}if(i==null&&G.length>1)for(h=0;h<G.length;h++){if(s?D=l.map(y=>[y[G[h][0]],o?y[e].toString():y[e]]):D=l.map(y=>[o?y[e].toString():y[e],y[G[h][0]]]),T){let y=l.map(j=>j[T]);D.forEach((j,H)=>j.push(y[H]))}if(A){let y=l.map(j=>j[A]);D.forEach((j,H)=>j.push(y[H]))}Z=a[G[h][0]].title,p=G[h][1],R=S(D,Z,p,n),N.push(R)}if(i==null&&G.length===1){if(s?D=l.map(y=>[y[G[0][0]],o?y[e].toString():y[e]]):D=l.map(y=>[o?y[e].toString():y[e],y[G[0][0]]]),T){let y=l.map(j=>j[T]);D.forEach((j,H)=>j.push(y[H]))}if(A){let y=l.map(j=>j[A]);D.forEach((j,H)=>j.push(y[H]))}Z=a[G[0][0]].title,p=G[0][1],R=S(D,Z,p,n),N.push(R)}return _&&N.sort((y,j)=>_.indexOf(y.name)-_.indexOf(j.name)),k&&N.forEach(y=>{y.name=Os(y.name,k)}),N}function Wl(l,e){let t={};if(typeof e=="object")for(let i=0;i<e.length;i++)t[e[i]]=0;else t[e]=0;return l=ii(l,ns(t)),l}function kn(l){let e=[];for(let t=1;t<l.length;t++)e.push(l[t]-l[t-1]);return e}function fs(l,e){return(typeof l!="number"||isNaN(l))&&(l=0),(typeof e!="number"||isNaN(e))&&(e=0),l=Math.abs(l),e=Math.abs(e),e<=.01?l:fs(e,l%e)}function Ln(l,e){if(!Array.isArray(l))throw new TypeError("Cannot calculate extent of non-array value.");let t,i;for(const s of l)typeof s=="number"&&(t===void 0?s>=s&&(t=i=s):(t>s&&(t=s),i<s&&(i=s)));return[t,i]}function On(l,e){let[t,i]=Ln(l);const s=[];let n=t;for(;n<=i;)s.push(Math.round((n+Number.EPSILON)*1e8)/1e8),n+=e;return s}function wn(l){if(l.length<=1)return;l.sort(function(t,i){return t-i}),l=l.map(function(t){return t*1e8}),l=kn(l);let e=l.reduce((t,i)=>fs(t,i))/1e8;return e=Math.round((e+Number.EPSILON)*1e8)/1e8,e}function pi(l,e,t,i,s=!1,n=!1){var k;let r=!1;const o=l.map(S=>Object.assign({},S,{[e]:S[e]instanceof Date?(r=!0,S[e].toISOString()):S[e]})).filter(S=>S[e]!==void 0&&S[e]!==null),a=Array.from(o).reduce((S,h)=>(h[e]instanceof Date&&(h[e]=h[e].toISOString(),r=!0),i?(S[h[i]??"null"]||(S[h[i]??"null"]=[]),S[h[i]??"null"].push(h)):(S.default||(S.default=[]),S.default.push(h)),S),{}),_={};let T;const A=((k=o.find(S=>S&&S[e]!==null&&S[e]!==void 0))==null?void 0:k[e])??null;switch(typeof A){case"object":throw A===null?new Error(`Column '${e}' is entirely null. Column must contain at least one non-null value.`):new Error("Unexpected object property, expected string, date, or number");case"number":if(T=Wi(o,e),n){const S=wn(T);_[e]=On(T,S)}break;case"string":T=Wi(o,e),_[e]=T;break}const M=[];for(const S of Object.values(a)){const h=i?{[i]:null}:{};if(s)if(t instanceof Array)for(let R=0;R<t.length;R++)h[t[R]]=0;else h[t]=0;else if(t instanceof Array)for(let R=0;R<t.length;R++)h[t[R]]=null;else h[t]=null;i&&(_[i]=i);const L=[];Object.keys(_).length===0?L.push(Dl([e],h)):L.push(Dl(_,h)),M.push(ii(S,...L))}return r?M.flat().map(S=>({...S,[e]:new Date(S[e])})):M.flat()}function Mn(l,e,t){let i,s,n,r,o,a,_,T,A,M,k,S,h,L,R=Le,N=()=>(R(),R=Ct(n,C=>t(38,L=C)),n),D,q=Le,Z=()=>(q(),q=Ct(s,C=>t(39,D=C)),s),U,p=Le,v=()=>(p(),p=Ct(i,C=>t(40,U=C)),i),G;l.$$.on_destroy.push(()=>R()),l.$$.on_destroy.push(()=>q()),l.$$.on_destroy.push(()=>p());let y=Bi(yl);hi(l,y,C=>t(41,G=C));let j=Bi(gl);const{resolveColor:H}=si();let{y:w=void 0}=e;const Y=!!w;let{series:P=void 0}=e;const le=!!P;let{options:_e=void 0}=e,{name:se=void 0}=e,{type:te="stacked"}=e,{fillColor:ge=void 0}=e,{lineColor:ne=void 0}=e,{fillOpacity:K=void 0}=e,{line:ee=!0}=e,{markers:ae=!1}=e,{markerShape:Ce="circle"}=e,{markerSize:B=8}=e,{handleMissing:ie="gap"}=e,{step:de=!1}=e,{stepPosition:be="end"}=e,{labels:$=!1}=e,{labelSize:ye=11}=e,{labelPosition:J="top"}=e,{labelColor:Ae=void 0}=e,{labelFmt:Se=void 0}=e,he;Se&&(he=Nt(Se));let{showAllLabels:Oe=!1}=e,{seriesOrder:Ie=void 0}=e,{seriesLabelFmt:De=void 0}=e,Ee;const we={above:"top",below:"bottom",middle:"inside"},Me={above:"right",below:"left",middle:"inside"};let Qe=a?"right":"top";return Zl(()=>{j.update(C=>(C.tooltip={...C.tooltip,order:"seriesDesc"},a?(C.yAxis={...C.yAxis,...h.xAxis},C.xAxis={...C.xAxis,...h.yAxis}):(C.yAxis[0]={...C.yAxis[0],...h.yAxis},C.xAxis={...C.xAxis,...h.xAxis}),te==="stacked100"&&(a?C.xAxis={...C.xAxis,max:1}:C.yAxis[0]={...C.yAxis[0],max:1}),$&&(C.axisPointer={triggerEmphasis:!1}),C))}),l.$$set=C=>{"y"in C&&t(4,w=C.y),"series"in C&&t(5,P=C.series),"options"in C&&t(12,_e=C.options),"name"in C&&t(6,se=C.name),"type"in C&&t(13,te=C.type),"fillColor"in C&&t(14,ge=C.fillColor),"lineColor"in C&&t(15,ne=C.lineColor),"fillOpacity"in C&&t(16,K=C.fillOpacity),"line"in C&&t(7,ee=C.line),"markers"in C&&t(8,ae=C.markers),"markerShape"in C&&t(17,Ce=C.markerShape),"markerSize"in C&&t(18,B=C.markerSize),"handleMissing"in C&&t(19,ie=C.handleMissing),"step"in C&&t(9,de=C.step),"stepPosition"in C&&t(20,be=C.stepPosition),"labels"in C&&t(10,$=C.labels),"labelSize"in C&&t(21,ye=C.labelSize),"labelPosition"in C&&t(11,J=C.labelPosition),"labelColor"in C&&t(22,Ae=C.labelColor),"labelFmt"in C&&t(23,Se=C.labelFmt),"showAllLabels"in C&&t(24,Oe=C.showAllLabels),"seriesOrder"in C&&t(25,Ie=C.seriesOrder),"seriesLabelFmt"in C&&t(26,De=C.seriesLabelFmt)},l.$$.update=()=>{l.$$.dirty[0]&16384&&v(t(2,i=H(ge))),l.$$.dirty[0]&32768&&Z(t(1,s=H(ne))),l.$$.dirty[0]&128&&t(7,ee=ee==="true"||ee===!0),l.$$.dirty[0]&256&&t(8,ae=ae==="true"||ae===!0),l.$$.dirty[0]&512&&t(9,de=de==="true"||de===!0),l.$$.dirty[0]&1024&&t(10,$=$==="true"||$===!0),l.$$.dirty[0]&4194304&&N(t(0,n=H(Ae))),l.$$.dirty[1]&1024&&t(36,r=G.data),l.$$.dirty[1]&1024&&t(35,o=G.x),l.$$.dirty[0]&16|l.$$.dirty[1]&1024&&t(4,w=Y?w:G.y),l.$$.dirty[1]&1024&&t(29,a=G.swapXY),l.$$.dirty[1]&1024&&t(37,_=G.yFormat),l.$$.dirty[1]&1024&&t(30,T=G.xType),l.$$.dirty[1]&1024&&t(33,A=G.xMismatch),l.$$.dirty[1]&1024&&t(32,M=G.columnSummary),l.$$.dirty[0]&32|l.$$.dirty[1]&1024&&t(5,P=le?P:G.series),l.$$.dirty[0]&1073741936|l.$$.dirty[1]&50&&(!P&&typeof w!="object"?t(6,se=se??ti(w,M[w].title)):(t(28,Ee="area"),t(36,r=pi(r,o,w,P,!1,T==="value")),t(36,r=Wl(r,w)),t(30,T=T==="value"?"category":T))),l.$$.dirty[0]&524304|l.$$.dirty[1]&32&&ie==="zero"&&t(36,r=Wl(r,w)),l.$$.dirty[0]&536872960&&t(11,J=(a?Me[J]:we[J])??Qe),l.$$.dirty[0]&960434048|l.$$.dirty[1]&960&&t(34,k={type:"line",stack:Ee,areaStyle:{color:U,opacity:K},connectNulls:ie==="connect",lineStyle:{width:ee?1:0,color:D},label:{show:$,formatter(C){return C.value[a?0:1]===0?"":It(C.value[a?0:1],he??_)},fontSize:ye,color:L,position:J,padding:3},labelLayout:{hideOverlap:!Oe},emphasis:{focus:"series"},showSymbol:$||ae,symbol:Ce,symbolSize:$&&!ae?0:B,step:de?be:!1}),l.$$.dirty[0]&637534320|l.$$.dirty[1]&62&&t(31,S=os(r,o,w,P,a,k,se,A,M,Ie,void 0,void 0,void 0,De)),l.$$.dirty[1]&1&&j.update(C=>(C.series.push(...S),C.legend.data.push(...S.map(Te=>Te.name.toString())),C)),l.$$.dirty[0]&4096&&_e&&j.update(C=>({...C,..._e})),l.$$.dirty[0]&1073741824&&(h={yAxis:{boundaryGap:["0%","1%"]},xAxis:{boundaryGap:["4%","4%"],type:T}})},[n,s,i,y,w,P,se,ee,ae,de,$,J,_e,te,ge,ne,K,Ce,B,ie,be,ye,Ae,Se,Oe,Ie,De,he,Ee,a,T,S,M,A,k,o,r,_,L,D,U,G]}class Rn extends wt{constructor(e){super(),Mt(this,e,Mn,null,Ot,{y:4,series:5,options:12,name:6,type:13,fillColor:14,lineColor:15,fillOpacity:16,line:7,markers:8,markerShape:17,markerSize:18,handleMissing:19,step:9,stepPosition:20,labels:10,labelSize:21,labelPosition:11,labelColor:22,labelFmt:23,showAllLabels:24,seriesOrder:25,seriesLabelFmt:26},null,[-1,-1])}}function Fn(l){let e,t,i;e=new Rn({props:{line:l[28],fillColor:l[59],lineColor:l[58],fillOpacity:l[29],handleMissing:l[34],type:l[38],step:l[35],stepPosition:l[36],markers:l[31],markerShape:l[32],markerSize:l[33],labels:l[39],labelSize:l[40],labelPosition:l[41],labelColor:l[56],labelFmt:l[42],showAllLabels:l[43],seriesOrder:l[49],seriesLabelFmt:l[51]}});const s=l[66].default,n=zi(s,l,l[67],null);return{c(){ce(e.$$.fragment),t=z(),n&&n.c()},l(r){me(e.$$.fragment,r),t=W(r),n&&n.l(r)},m(r,o){ue(e,r,o),b(r,t,o),n&&n.m(r,o),i=!0},p(r,o){const a={};o[0]&268435456&&(a.line=r[28]),o[1]&268435456&&(a.fillColor=r[59]),o[1]&134217728&&(a.lineColor=r[58]),o[0]&536870912&&(a.fillOpacity=r[29]),o[1]&8&&(a.handleMissing=r[34]),o[1]&128&&(a.type=r[38]),o[1]&16&&(a.step=r[35]),o[1]&32&&(a.stepPosition=r[36]),o[1]&1&&(a.markers=r[31]),o[1]&2&&(a.markerShape=r[32]),o[1]&4&&(a.markerSize=r[33]),o[1]&256&&(a.labels=r[39]),o[1]&512&&(a.labelSize=r[40]),o[1]&1024&&(a.labelPosition=r[41]),o[1]&33554432&&(a.labelColor=r[56]),o[1]&2048&&(a.labelFmt=r[42]),o[1]&4096&&(a.showAllLabels=r[43]),o[1]&262144&&(a.seriesOrder=r[49]),o[1]&1048576&&(a.seriesLabelFmt=r[51]),e.$set(a),n&&n.p&&(!i||o[2]&32)&&Vi(n,s,r,r[67],i?Yi(s,r[67],o,null):ji(r[67]),null)},i(r){i||(F(e.$$.fragment,r),F(n,r),i=!0)},o(r){I(e.$$.fragment,r),I(n,r),i=!1},d(r){r&&c(t),fe(e,r),n&&n.d(r)}}}function Dn(l){let e,t;return e=new as({props:{data:l[3],x:l[4],y:l[5],xFmt:l[11],yFmt:l[10],series:l[6],xType:l[7],yLog:l[8],yLogBase:l[9],legend:l[14],xAxisTitle:l[15],yAxisTitle:l[16],xGridlines:l[17],yGridlines:l[18],xAxisLabels:l[19],yAxisLabels:l[20],xBaseline:l[21],yBaseline:l[22],xTickMarks:l[23],yTickMarks:l[24],yMin:l[25],yMax:l[26],yScale:l[27],title:l[12],subtitle:l[13],chartType:Nn,sort:l[37],stackType:l[38],stacked100:l[60],chartAreaHeight:l[30],colorPalette:l[57],echartsOptions:l[44],seriesOptions:l[45],printEchartsConfig:l[0],emptySet:l[46],emptyMessage:l[47],renderer:l[48],downloadableData:l[1],downloadableImage:l[2],connectGroup:l[50],seriesColors:l[55],leftPadding:l[52],rightPadding:l[53],xLabelWrap:l[54],$$slots:{default:[Fn]},$$scope:{ctx:l}}}),{c(){ce(e.$$.fragment)},l(i){me(e.$$.fragment,i)},m(i,s){ue(e,i,s),t=!0},p(i,s){const n={};s[0]&8&&(n.data=i[3]),s[0]&16&&(n.x=i[4]),s[0]&32&&(n.y=i[5]),s[0]&2048&&(n.xFmt=i[11]),s[0]&1024&&(n.yFmt=i[10]),s[0]&64&&(n.series=i[6]),s[0]&128&&(n.xType=i[7]),s[0]&256&&(n.yLog=i[8]),s[0]&512&&(n.yLogBase=i[9]),s[0]&16384&&(n.legend=i[14]),s[0]&32768&&(n.xAxisTitle=i[15]),s[0]&65536&&(n.yAxisTitle=i[16]),s[0]&131072&&(n.xGridlines=i[17]),s[0]&262144&&(n.yGridlines=i[18]),s[0]&524288&&(n.xAxisLabels=i[19]),s[0]&1048576&&(n.yAxisLabels=i[20]),s[0]&2097152&&(n.xBaseline=i[21]),s[0]&4194304&&(n.yBaseline=i[22]),s[0]&8388608&&(n.xTickMarks=i[23]),s[0]&16777216&&(n.yTickMarks=i[24]),s[0]&33554432&&(n.yMin=i[25]),s[0]&67108864&&(n.yMax=i[26]),s[0]&134217728&&(n.yScale=i[27]),s[0]&4096&&(n.title=i[12]),s[0]&8192&&(n.subtitle=i[13]),s[1]&64&&(n.sort=i[37]),s[1]&128&&(n.stackType=i[38]),s[0]&1073741824&&(n.chartAreaHeight=i[30]),s[1]&67108864&&(n.colorPalette=i[57]),s[1]&8192&&(n.echartsOptions=i[44]),s[1]&16384&&(n.seriesOptions=i[45]),s[0]&1&&(n.printEchartsConfig=i[0]),s[1]&32768&&(n.emptySet=i[46]),s[1]&65536&&(n.emptyMessage=i[47]),s[1]&131072&&(n.renderer=i[48]),s[0]&2&&(n.downloadableData=i[1]),s[0]&4&&(n.downloadableImage=i[2]),s[1]&524288&&(n.connectGroup=i[50]),s[1]&16777216&&(n.seriesColors=i[55]),s[1]&2097152&&(n.leftPadding=i[52]),s[1]&4194304&&(n.rightPadding=i[53]),s[1]&8388608&&(n.xLabelWrap=i[54]),s[0]&805306368|s[1]&437526463|s[2]&32&&(n.$$scope={dirty:s,ctx:i}),e.$set(n)},i(i){t||(F(e.$$.fragment,i),t=!0)},o(i){I(e.$$.fragment,i),t=!1},d(i){fe(e,i)}}}let Nn="Area Chart";function In(l,e,t){let i,s,n,r,o,{$$slots:a={},$$scope:_}=e;const{resolveColor:T,resolveColorsObject:A,resolveColorPalette:M}=si();let{data:k=void 0}=e,{x:S=void 0}=e,{y:h=void 0}=e,{series:L=void 0}=e,{xType:R=void 0}=e,{yLog:N=void 0}=e,{yLogBase:D=void 0}=e,{yFmt:q=void 0}=e,{xFmt:Z=void 0}=e,{title:U=void 0}=e,{subtitle:p=void 0}=e,{legend:v=void 0}=e,{xAxisTitle:G=void 0}=e,{yAxisTitle:y=void 0}=e,{xGridlines:j=void 0}=e,{yGridlines:H=void 0}=e,{xAxisLabels:w=void 0}=e,{yAxisLabels:Y=void 0}=e,{xBaseline:P=void 0}=e,{yBaseline:le=void 0}=e,{xTickMarks:_e=void 0}=e,{yTickMarks:se=void 0}=e,{yMin:te=void 0}=e,{yMax:ge=void 0}=e,{yScale:ne=void 0}=e,{line:K=void 0}=e,{fillColor:ee=void 0}=e,{lineColor:ae=void 0}=e,{fillOpacity:Ce=void 0}=e,{chartAreaHeight:B=void 0}=e,{markers:ie=void 0}=e,{markerShape:de=void 0}=e,{markerSize:be=void 0}=e,{handleMissing:$=void 0}=e,{step:ye=void 0}=e,{stepPosition:J=void 0}=e,{sort:Ae=void 0}=e,{type:Se="stacked"}=e,he=Se==="stacked100",{colorPalette:Oe="default"}=e,{labels:Ie=void 0}=e,{labelSize:De=void 0}=e,{labelPosition:Ee=void 0}=e,{labelColor:we=void 0}=e,{labelFmt:Me=void 0}=e,{showAllLabels:Qe=void 0}=e,{echartsOptions:C=void 0}=e,{seriesOptions:Te=void 0}=e,{printEchartsConfig:Ne=!1}=e,{emptySet:Ye=void 0}=e,{emptyMessage:je=void 0}=e,{renderer:He=void 0}=e,{downloadableData:ke=void 0}=e,{downloadableImage:Ve=void 0}=e,{seriesColors:Xe=void 0}=e,{seriesOrder:Je=void 0}=e,{connectGroup:ve=void 0}=e,{seriesLabelFmt:Ke=void 0}=e,{leftPadding:E=void 0}=e,{rightPadding:re=void 0}=e,{xLabelWrap:xe=void 0}=e;return l.$$set=d=>{"data"in d&&t(3,k=d.data),"x"in d&&t(4,S=d.x),"y"in d&&t(5,h=d.y),"series"in d&&t(6,L=d.series),"xType"in d&&t(7,R=d.xType),"yLog"in d&&t(8,N=d.yLog),"yLogBase"in d&&t(9,D=d.yLogBase),"yFmt"in d&&t(10,q=d.yFmt),"xFmt"in d&&t(11,Z=d.xFmt),"title"in d&&t(12,U=d.title),"subtitle"in d&&t(13,p=d.subtitle),"legend"in d&&t(14,v=d.legend),"xAxisTitle"in d&&t(15,G=d.xAxisTitle),"yAxisTitle"in d&&t(16,y=d.yAxisTitle),"xGridlines"in d&&t(17,j=d.xGridlines),"yGridlines"in d&&t(18,H=d.yGridlines),"xAxisLabels"in d&&t(19,w=d.xAxisLabels),"yAxisLabels"in d&&t(20,Y=d.yAxisLabels),"xBaseline"in d&&t(21,P=d.xBaseline),"yBaseline"in d&&t(22,le=d.yBaseline),"xTickMarks"in d&&t(23,_e=d.xTickMarks),"yTickMarks"in d&&t(24,se=d.yTickMarks),"yMin"in d&&t(25,te=d.yMin),"yMax"in d&&t(26,ge=d.yMax),"yScale"in d&&t(27,ne=d.yScale),"line"in d&&t(28,K=d.line),"fillColor"in d&&t(61,ee=d.fillColor),"lineColor"in d&&t(62,ae=d.lineColor),"fillOpacity"in d&&t(29,Ce=d.fillOpacity),"chartAreaHeight"in d&&t(30,B=d.chartAreaHeight),"markers"in d&&t(31,ie=d.markers),"markerShape"in d&&t(32,de=d.markerShape),"markerSize"in d&&t(33,be=d.markerSize),"handleMissing"in d&&t(34,$=d.handleMissing),"step"in d&&t(35,ye=d.step),"stepPosition"in d&&t(36,J=d.stepPosition),"sort"in d&&t(37,Ae=d.sort),"type"in d&&t(38,Se=d.type),"colorPalette"in d&&t(63,Oe=d.colorPalette),"labels"in d&&t(39,Ie=d.labels),"labelSize"in d&&t(40,De=d.labelSize),"labelPosition"in d&&t(41,Ee=d.labelPosition),"labelColor"in d&&t(64,we=d.labelColor),"labelFmt"in d&&t(42,Me=d.labelFmt),"showAllLabels"in d&&t(43,Qe=d.showAllLabels),"echartsOptions"in d&&t(44,C=d.echartsOptions),"seriesOptions"in d&&t(45,Te=d.seriesOptions),"printEchartsConfig"in d&&t(0,Ne=d.printEchartsConfig),"emptySet"in d&&t(46,Ye=d.emptySet),"emptyMessage"in d&&t(47,je=d.emptyMessage),"renderer"in d&&t(48,He=d.renderer),"downloadableData"in d&&t(1,ke=d.downloadableData),"downloadableImage"in d&&t(2,Ve=d.downloadableImage),"seriesColors"in d&&t(65,Xe=d.seriesColors),"seriesOrder"in d&&t(49,Je=d.seriesOrder),"connectGroup"in d&&t(50,ve=d.connectGroup),"seriesLabelFmt"in d&&t(51,Ke=d.seriesLabelFmt),"leftPadding"in d&&t(52,E=d.leftPadding),"rightPadding"in d&&t(53,re=d.rightPadding),"xLabelWrap"in d&&t(54,xe=d.xLabelWrap),"$$scope"in d&&t(67,_=d.$$scope)},l.$$.update=()=>{l.$$.dirty[1]&1073741824&&t(59,i=T(ee)),l.$$.dirty[2]&1&&t(58,s=T(ae)),l.$$.dirty[2]&2&&t(57,n=M(Oe)),l.$$.dirty[2]&4&&t(56,r=T(we)),l.$$.dirty[0]&1&&t(0,Ne=ze(Ne)),l.$$.dirty[0]&2&&t(1,ke=ze(ke)),l.$$.dirty[0]&4&&t(2,Ve=ze(Ve)),l.$$.dirty[2]&8&&t(55,o=A(Xe))},[Ne,ke,Ve,k,S,h,L,R,N,D,q,Z,U,p,v,G,y,j,H,w,Y,P,le,_e,se,te,ge,ne,K,Ce,B,ie,de,be,$,ye,J,Ae,Se,Ie,De,Ee,Me,Qe,C,Te,Ye,je,He,Je,ve,Ke,E,re,xe,o,r,n,s,i,he,ee,ae,Oe,we,Xe,a,_]}class Hn extends wt{constructor(e){super(),Mt(this,e,In,Dn,Ot,{data:3,x:4,y:5,series:6,xType:7,yLog:8,yLogBase:9,yFmt:10,xFmt:11,title:12,subtitle:13,legend:14,xAxisTitle:15,yAxisTitle:16,xGridlines:17,yGridlines:18,xAxisLabels:19,yAxisLabels:20,xBaseline:21,yBaseline:22,xTickMarks:23,yTickMarks:24,yMin:25,yMax:26,yScale:27,line:28,fillColor:61,lineColor:62,fillOpacity:29,chartAreaHeight:30,markers:31,markerShape:32,markerSize:33,handleMissing:34,step:35,stepPosition:36,sort:37,type:38,colorPalette:63,labels:39,labelSize:40,labelPosition:41,labelColor:64,labelFmt:42,showAllLabels:43,echartsOptions:44,seriesOptions:45,printEchartsConfig:0,emptySet:46,emptyMessage:47,renderer:48,downloadableData:1,downloadableImage:2,seriesColors:65,seriesOrder:49,connectGroup:50,seriesLabelFmt:51,leftPadding:52,rightPadding:53,xLabelWrap:54},null,[-1,-1,-1])}}function zl(l,e,t){let i=ii(l,ol(e,[ws(t,fl)]));if(typeof t=="object")for(let s=0;s<i.length;s++){i[s].stackTotal=0;for(let n=0;n<t.length;n++)i[s].stackTotal=i[s].stackTotal+i[s][t[n]]}return i}let Pn=60;function Bn(l,e,t){let i,s,n,r,o,a,_,T,A,M,k,S,h,L,R,N,D,q,Z,U,p=Le,v=()=>(p(),p=Ct(r,E=>t(49,U=E)),r),G,y=Le,j=()=>(y(),y=Ct(n,E=>t(50,G=E)),n),H,w=Le,Y=()=>(w(),w=Ct(o,E=>t(51,H=E)),o),P,le=Le,_e=()=>(le(),le=Ct(i,E=>t(52,P=E)),i);l.$$.on_destroy.push(()=>p()),l.$$.on_destroy.push(()=>y()),l.$$.on_destroy.push(()=>w()),l.$$.on_destroy.push(()=>le());const{resolveColor:se}=si();let{y:te=void 0}=e;const ge=!!te;let{y2:ne=void 0}=e;const K=!!ne;let{series:ee=void 0}=e;const ae=!!ee;let{options:Ce=void 0}=e,{name:B=void 0}=e,{type:ie="stacked"}=e,{stackName:de=void 0}=e,{fillColor:be=void 0}=e,{fillOpacity:$=void 0}=e,{outlineColor:ye=void 0}=e,{outlineWidth:J=void 0}=e,{labels:Ae=!1}=e,{seriesLabels:Se=!0}=e,{labelSize:he=11}=e,{labelPosition:Oe=void 0}=e,{labelColor:Ie=void 0}=e,{labelFmt:De=void 0}=e,Ee;De&&(Ee=Nt(De));let{yLabelFmt:we=void 0}=e,Me;we&&(Me=Nt(we));let{y2LabelFmt:Qe=void 0}=e,C;Qe&&(C=Nt(Qe));let{y2SeriesType:Te="bar"}=e,{stackTotalLabel:Ne=!0}=e,{showAllLabels:Ye=!1}=e,{seriesOrder:je=void 0}=e,He,ke,Ve,Xe;const Je={outside:"top",inside:"inside"},ve={outside:"right",inside:"inside"};let{seriesLabelFmt:Ke=void 0}=e;return Zl(()=>{Ce&&s.update(E=>({...E,...Ce})),Z&&s.update(E=>{if(ie.includes("stacked")?E.tooltip={...E.tooltip,order:"seriesDesc"}:E.tooltip={...E.tooltip,order:"seriesAsc"},ie==="stacked100"&&(S?E.xAxis={...E.xAxis,max:1}:E.yAxis[0]={...E.yAxis[0],max:1}),S)E.yAxis={...E.yAxis,...Z.xAxis},E.xAxis={...E.xAxis,...Z.yAxis};else if(E.yAxis[0]={...E.yAxis[0],...Z.yAxis},E.xAxis={...E.xAxis,...Z.xAxis},ne&&(E.yAxis[1]={...E.yAxis[1],show:!0},["line","bar","scatter"].includes(Te)))for(let re=0;re<k;re++)E.series[M+re].type=Te,E.series[M+re].stack=void 0;return E})}),l.$$set=E=>{"y"in E&&t(4,te=E.y),"y2"in E&&t(5,ne=E.y2),"series"in E&&t(6,ee=E.series),"options"in E&&t(13,Ce=E.options),"name"in E&&t(7,B=E.name),"type"in E&&t(14,ie=E.type),"stackName"in E&&t(8,de=E.stackName),"fillColor"in E&&t(15,be=E.fillColor),"fillOpacity"in E&&t(16,$=E.fillOpacity),"outlineColor"in E&&t(17,ye=E.outlineColor),"outlineWidth"in E&&t(18,J=E.outlineWidth),"labels"in E&&t(9,Ae=E.labels),"seriesLabels"in E&&t(10,Se=E.seriesLabels),"labelSize"in E&&t(19,he=E.labelSize),"labelPosition"in E&&t(11,Oe=E.labelPosition),"labelColor"in E&&t(20,Ie=E.labelColor),"labelFmt"in E&&t(21,De=E.labelFmt),"yLabelFmt"in E&&t(22,we=E.yLabelFmt),"y2LabelFmt"in E&&t(23,Qe=E.y2LabelFmt),"y2SeriesType"in E&&t(24,Te=E.y2SeriesType),"stackTotalLabel"in E&&t(12,Ne=E.stackTotalLabel),"showAllLabels"in E&&t(25,Ye=E.showAllLabels),"seriesOrder"in E&&t(26,je=E.seriesOrder),"seriesLabelFmt"in E&&t(27,Ke=E.seriesLabelFmt)},l.$$.update=()=>{l.$$.dirty[0]&32768&&j(t(2,n=se(be))),l.$$.dirty[0]&131072&&v(t(1,r=se(ye))),l.$$.dirty[0]&512&&t(9,Ae=Ae==="true"||Ae===!0),l.$$.dirty[0]&1024&&t(10,Se=Se==="true"||Se===!0),l.$$.dirty[0]&1048576&&Y(t(0,o=se(Ie))),l.$$.dirty[0]&4096&&t(12,Ne=Ne==="true"||Ne===!0),l.$$.dirty[1]&2097152&&t(46,a=P.data),l.$$.dirty[1]&2097152&&t(42,_=P.x),l.$$.dirty[0]&16|l.$$.dirty[1]&2097152&&t(4,te=ge?te:P.y),l.$$.dirty[0]&32|l.$$.dirty[1]&2097152&&t(5,ne=K?ne:P.y2),l.$$.dirty[1]&2097152&&t(40,T=P.yFormat),l.$$.dirty[1]&2097152&&t(47,A=P.y2Format),l.$$.dirty[1]&2097152&&t(35,M=P.yCount),l.$$.dirty[1]&2097152&&t(36,k=P.y2Count),l.$$.dirty[1]&2097152&&t(37,S=P.swapXY),l.$$.dirty[1]&2097152&&t(39,h=P.xType),l.$$.dirty[1]&2097152&&t(43,L=P.xMismatch),l.$$.dirty[1]&2097152&&t(44,R=P.columnSummary),l.$$.dirty[1]&2097152&&t(48,N=P.sort),l.$$.dirty[0]&64|l.$$.dirty[1]&2097152&&t(6,ee=ae?ee:P.series),l.$$.dirty[0]&16848|l.$$.dirty[1]&174403&&(!ee&&typeof te!="object"?(t(7,B=B??ti(te,R[te].title)),S&&h!=="category"&&(t(46,a=pi(a,_,te,ee,!0,h!=="time")),t(39,h="category")),t(8,de="stack1"),t(33,Ve=S?"right":"top")):(N===!0&&h==="category"&&(t(31,He=zl(a,_,te)),typeof te=="object"?t(31,He=Pi(He,"stackTotal",!1)):t(31,He=Pi(He,te,!1)),t(32,ke=He.map(E=>E[_])),t(46,a=[...a].sort(function(E,re){return ke.indexOf(E[_])-ke.indexOf(re[_])}))),S||(h==="value"||h==="category")&&ie.includes("stacked")?(t(46,a=pi(a,_,te,ee,!0,h==="value")),t(39,h="category")):h==="time"&&ie.includes("stacked")&&t(46,a=pi(a,_,te,ee,!0,!0)),ie.includes("stacked")?(t(8,de=de??"stack1"),t(33,Ve="inside")):(t(8,de=void 0),t(33,Ve=S?"right":"top")))),l.$$.dirty[0]&16400|l.$$.dirty[1]&34816&&ie==="stacked"&&t(34,Xe=zl(a,_,te)),l.$$.dirty[0]&2048|l.$$.dirty[1]&68&&t(11,Oe=(S?ve[Oe]:Je[Oe])??Ve),l.$$.dirty[0]&1913458432|l.$$.dirty[1]&1901168&&t(45,D={type:"bar",stack:de,label:{show:Ae&&Se,formatter(E){return E.value[S?0:1]===0?"":It(E.value[S?0:1],[Me??Ee??T,C??Ee??A][rs(E.componentIndex,M,k)])},position:Oe,fontSize:he,color:H},labelLayout:{hideOverlap:!Ye},emphasis:{focus:"series"},barMaxWidth:Pn,itemStyle:{color:G,opacity:$,borderColor:U,borderWidth:J}}),l.$$.dirty[0]&201326832|l.$$.dirty[1]&63552&&t(41,q=os(a,_,te,ee,S,D,B,L,R,je,void 0,void 0,ne,Ke)),l.$$.dirty[0]&268981072|l.$$.dirty[1]&7880&&s.update(E=>(E.series.push(...q),E.legend.data.push(...q.map(re=>re.name.toString())),Ae===!0&&ie==="stacked"&&typeof te=="object"|ee!==void 0&&Ne===!0&&ee!==_&&(E.series.push({type:"bar",stack:de,name:"stackTotal",color:"none",data:Xe.map(re=>[S?0:L?re[_].toString():re[_],S?L?re[_].toString():re[_]:0]),label:{show:!0,position:S?"right":"top",formatter(re){let xe=0;return q.forEach(d=>{xe+=d.data[re.dataIndex][S?0:1]}),xe===0?"":It(xe,Ee??T)},fontWeight:"bold",fontSize:he,padding:S?[0,0,0,5]:void 0}}),E.legend.selectedMode=!1),E)),l.$$.dirty[1]&256&&(Z={xAxis:{boundaryGap:["1%","2%"],type:h}})},_e(t(3,i=Bi(yl))),t(38,s=Bi(gl)),[o,r,n,i,te,ne,ee,B,de,Ae,Se,Oe,Ne,Ce,ie,be,$,ye,J,he,Ie,De,we,Qe,Te,Ye,je,Ke,Ee,Me,C,He,ke,Ve,Xe,M,k,S,s,h,T,q,_,L,R,D,a,A,N,U,G,H,P]}class Un extends wt{constructor(e){super(),Mt(this,e,Bn,null,Ot,{y:4,y2:5,series:6,options:13,name:7,type:14,stackName:8,fillColor:15,fillOpacity:16,outlineColor:17,outlineWidth:18,labels:9,seriesLabels:10,labelSize:19,labelPosition:11,labelColor:20,labelFmt:21,yLabelFmt:22,y2LabelFmt:23,y2SeriesType:24,stackTotalLabel:12,showAllLabels:25,seriesOrder:26,seriesLabelFmt:27},null,[-1,-1])}}function Gn(l){let e,t,i;e=new Un({props:{type:l[38],fillColor:l[72],fillOpacity:l[39],outlineColor:l[71],outlineWidth:l[40],labels:l[43],labelSize:l[44],labelPosition:l[45],labelColor:l[69],labelFmt:l[46],yLabelFmt:l[47],y2LabelFmt:l[48],stackTotalLabel:l[49],seriesLabels:l[50],showAllLabels:l[51],y2SeriesType:l[9],seriesOrder:l[60],seriesLabelFmt:l[62]}});const s=l[81].default,n=zi(s,l,l[82],null);return{c(){ce(e.$$.fragment),t=z(),n&&n.c()},l(r){me(e.$$.fragment,r),t=W(r),n&&n.l(r)},m(r,o){ue(e,r,o),b(r,t,o),n&&n.m(r,o),i=!0},p(r,o){const a={};o[1]&128&&(a.type=r[38]),o[2]&1024&&(a.fillColor=r[72]),o[1]&256&&(a.fillOpacity=r[39]),o[2]&512&&(a.outlineColor=r[71]),o[1]&512&&(a.outlineWidth=r[40]),o[1]&4096&&(a.labels=r[43]),o[1]&8192&&(a.labelSize=r[44]),o[1]&16384&&(a.labelPosition=r[45]),o[2]&128&&(a.labelColor=r[69]),o[1]&32768&&(a.labelFmt=r[46]),o[1]&65536&&(a.yLabelFmt=r[47]),o[1]&131072&&(a.y2LabelFmt=r[48]),o[1]&262144&&(a.stackTotalLabel=r[49]),o[1]&524288&&(a.seriesLabels=r[50]),o[1]&1048576&&(a.showAllLabels=r[51]),o[0]&512&&(a.y2SeriesType=r[9]),o[1]&536870912&&(a.seriesOrder=r[60]),o[2]&1&&(a.seriesLabelFmt=r[62]),e.$set(a),n&&n.p&&(!i||o[2]&1048576)&&Vi(n,s,r,r[82],i?Yi(s,r[82],o,null):ji(r[82]),null)},i(r){i||(F(e.$$.fragment,r),F(n,r),i=!0)},o(r){I(e.$$.fragment,r),I(n,r),i=!1},d(r){r&&c(t),fe(e,r),n&&n.d(r)}}}function qn(l){let e,t;return e=new as({props:{data:l[1],x:l[2],y:l[3],y2:l[4],xFmt:l[12],yFmt:l[10],y2Fmt:l[11],series:l[5],xType:l[6],yLog:l[7],yLogBase:l[8],legend:l[15],xAxisTitle:l[16],yAxisTitle:l[17],y2AxisTitle:l[18],xGridlines:l[19],yGridlines:l[20],y2Gridlines:l[21],xAxisLabels:l[22],yAxisLabels:l[23],y2AxisLabels:l[24],xBaseline:l[25],yBaseline:l[26],y2Baseline:l[27],xTickMarks:l[28],yTickMarks:l[29],y2TickMarks:l[30],yAxisColor:l[68],y2AxisColor:l[67],yMin:l[31],yMax:l[32],yScale:l[33],y2Min:l[34],y2Max:l[35],y2Scale:l[36],swapXY:l[0],title:l[13],subtitle:l[14],chartType:"Bar Chart",stackType:l[38],sort:l[42],stacked100:l[73],chartAreaHeight:l[41],showAllXAxisLabels:l[37],colorPalette:l[70],echartsOptions:l[52],seriesOptions:l[53],printEchartsConfig:l[54],emptySet:l[55],emptyMessage:l[56],renderer:l[57],downloadableData:l[58],downloadableImage:l[59],connectGroup:l[61],xLabelWrap:l[65],seriesColors:l[66],leftPadding:l[63],rightPadding:l[64],$$slots:{default:[Gn]},$$scope:{ctx:l}}}),{c(){ce(e.$$.fragment)},l(i){me(e.$$.fragment,i)},m(i,s){ue(e,i,s),t=!0},p(i,s){const n={};s[0]&2&&(n.data=i[1]),s[0]&4&&(n.x=i[2]),s[0]&8&&(n.y=i[3]),s[0]&16&&(n.y2=i[4]),s[0]&4096&&(n.xFmt=i[12]),s[0]&1024&&(n.yFmt=i[10]),s[0]&2048&&(n.y2Fmt=i[11]),s[0]&32&&(n.series=i[5]),s[0]&64&&(n.xType=i[6]),s[0]&128&&(n.yLog=i[7]),s[0]&256&&(n.yLogBase=i[8]),s[0]&32768&&(n.legend=i[15]),s[0]&65536&&(n.xAxisTitle=i[16]),s[0]&131072&&(n.yAxisTitle=i[17]),s[0]&262144&&(n.y2AxisTitle=i[18]),s[0]&524288&&(n.xGridlines=i[19]),s[0]&1048576&&(n.yGridlines=i[20]),s[0]&2097152&&(n.y2Gridlines=i[21]),s[0]&4194304&&(n.xAxisLabels=i[22]),s[0]&8388608&&(n.yAxisLabels=i[23]),s[0]&16777216&&(n.y2AxisLabels=i[24]),s[0]&33554432&&(n.xBaseline=i[25]),s[0]&67108864&&(n.yBaseline=i[26]),s[0]&134217728&&(n.y2Baseline=i[27]),s[0]&268435456&&(n.xTickMarks=i[28]),s[0]&536870912&&(n.yTickMarks=i[29]),s[0]&1073741824&&(n.y2TickMarks=i[30]),s[2]&64&&(n.yAxisColor=i[68]),s[2]&32&&(n.y2AxisColor=i[67]),s[1]&1&&(n.yMin=i[31]),s[1]&2&&(n.yMax=i[32]),s[1]&4&&(n.yScale=i[33]),s[1]&8&&(n.y2Min=i[34]),s[1]&16&&(n.y2Max=i[35]),s[1]&32&&(n.y2Scale=i[36]),s[0]&1&&(n.swapXY=i[0]),s[0]&8192&&(n.title=i[13]),s[0]&16384&&(n.subtitle=i[14]),s[1]&128&&(n.stackType=i[38]),s[1]&2048&&(n.sort=i[42]),s[1]&1024&&(n.chartAreaHeight=i[41]),s[1]&64&&(n.showAllXAxisLabels=i[37]),s[2]&256&&(n.colorPalette=i[70]),s[1]&2097152&&(n.echartsOptions=i[52]),s[1]&4194304&&(n.seriesOptions=i[53]),s[1]&8388608&&(n.printEchartsConfig=i[54]),s[1]&16777216&&(n.emptySet=i[55]),s[1]&33554432&&(n.emptyMessage=i[56]),s[1]&67108864&&(n.renderer=i[57]),s[1]&134217728&&(n.downloadableData=i[58]),s[1]&268435456&&(n.downloadableImage=i[59]),s[1]&1073741824&&(n.connectGroup=i[61]),s[2]&8&&(n.xLabelWrap=i[65]),s[2]&16&&(n.seriesColors=i[66]),s[2]&2&&(n.leftPadding=i[63]),s[2]&4&&(n.rightPadding=i[64]),s[0]&512|s[1]&538964864|s[2]&1050241&&(n.$$scope={dirty:s,ctx:i}),e.$set(n)},i(i){t||(F(e.$$.fragment,i),t=!0)},o(i){I(e.$$.fragment,i),t=!1},d(i){fe(e,i)}}}function Wn(l,e,t){let i,s,n,r,o,a,_,{$$slots:T={},$$scope:A}=e;const{resolveColor:M,resolveColorsObject:k,resolveColorPalette:S}=si();let{data:h=void 0}=e,{x:L=void 0}=e,{y:R=void 0}=e,{y2:N=void 0}=e,{series:D=void 0}=e,{xType:q=void 0}=e,{yLog:Z=void 0}=e,{yLogBase:U=void 0}=e,{y2SeriesType:p=void 0}=e,{yFmt:v=void 0}=e,{y2Fmt:G=void 0}=e,{xFmt:y=void 0}=e,{title:j=void 0}=e,{subtitle:H=void 0}=e,{legend:w=void 0}=e,{xAxisTitle:Y=void 0}=e,{yAxisTitle:P=N?"true":void 0}=e,{y2AxisTitle:le=N?"true":void 0}=e,{xGridlines:_e=void 0}=e,{yGridlines:se=void 0}=e,{y2Gridlines:te=void 0}=e,{xAxisLabels:ge=void 0}=e,{yAxisLabels:ne=void 0}=e,{y2AxisLabels:K=void 0}=e,{xBaseline:ee=void 0}=e,{yBaseline:ae=void 0}=e,{y2Baseline:Ce=void 0}=e,{xTickMarks:B=void 0}=e,{yTickMarks:ie=void 0}=e,{y2TickMarks:de=void 0}=e,{yMin:be=void 0}=e,{yMax:$=void 0}=e,{yScale:ye=void 0}=e,{y2Min:J=void 0}=e,{y2Max:Ae=void 0}=e,{y2Scale:Se=void 0}=e,{swapXY:he=!1}=e,{showAllXAxisLabels:Oe}=e,{type:Ie="stacked"}=e,De=Ie==="stacked100",{fillColor:Ee=void 0}=e,{fillOpacity:we=void 0}=e,{outlineColor:Me=void 0}=e,{outlineWidth:Qe=void 0}=e,{chartAreaHeight:C=void 0}=e,{sort:Te=void 0}=e,{colorPalette:Ne="default"}=e,{labels:Ye=void 0}=e,{labelSize:je=void 0}=e,{labelPosition:He=void 0}=e,{labelColor:ke=void 0}=e,{labelFmt:Ve=void 0}=e,{yLabelFmt:Xe=void 0}=e,{y2LabelFmt:Je=void 0}=e,{stackTotalLabel:ve=void 0}=e,{seriesLabels:Ke=void 0}=e,{showAllLabels:E=void 0}=e,{yAxisColor:re=void 0}=e,{y2AxisColor:xe=void 0}=e,{echartsOptions:d=void 0}=e,{seriesOptions:Bt=void 0}=e,{printEchartsConfig:dt=!1}=e,{emptySet:ut=void 0}=e,{emptyMessage:Rt=void 0}=e,{renderer:lt=void 0}=e,{downloadableData:Ut=void 0}=e,{downloadableImage:et=void 0}=e,{seriesColors:rt=void 0}=e,{seriesOrder:Xt=void 0}=e,{connectGroup:Ft=void 0}=e,{seriesLabelFmt:_t=void 0}=e,{leftPadding:st=void 0}=e,{rightPadding:tt=void 0}=e,{xLabelWrap:mt=void 0}=e;return l.$$set=u=>{"data"in u&&t(1,h=u.data),"x"in u&&t(2,L=u.x),"y"in u&&t(3,R=u.y),"y2"in u&&t(4,N=u.y2),"series"in u&&t(5,D=u.series),"xType"in u&&t(6,q=u.xType),"yLog"in u&&t(7,Z=u.yLog),"yLogBase"in u&&t(8,U=u.yLogBase),"y2SeriesType"in u&&t(9,p=u.y2SeriesType),"yFmt"in u&&t(10,v=u.yFmt),"y2Fmt"in u&&t(11,G=u.y2Fmt),"xFmt"in u&&t(12,y=u.xFmt),"title"in u&&t(13,j=u.title),"subtitle"in u&&t(14,H=u.subtitle),"legend"in u&&t(15,w=u.legend),"xAxisTitle"in u&&t(16,Y=u.xAxisTitle),"yAxisTitle"in u&&t(17,P=u.yAxisTitle),"y2AxisTitle"in u&&t(18,le=u.y2AxisTitle),"xGridlines"in u&&t(19,_e=u.xGridlines),"yGridlines"in u&&t(20,se=u.yGridlines),"y2Gridlines"in u&&t(21,te=u.y2Gridlines),"xAxisLabels"in u&&t(22,ge=u.xAxisLabels),"yAxisLabels"in u&&t(23,ne=u.yAxisLabels),"y2AxisLabels"in u&&t(24,K=u.y2AxisLabels),"xBaseline"in u&&t(25,ee=u.xBaseline),"yBaseline"in u&&t(26,ae=u.yBaseline),"y2Baseline"in u&&t(27,Ce=u.y2Baseline),"xTickMarks"in u&&t(28,B=u.xTickMarks),"yTickMarks"in u&&t(29,ie=u.yTickMarks),"y2TickMarks"in u&&t(30,de=u.y2TickMarks),"yMin"in u&&t(31,be=u.yMin),"yMax"in u&&t(32,$=u.yMax),"yScale"in u&&t(33,ye=u.yScale),"y2Min"in u&&t(34,J=u.y2Min),"y2Max"in u&&t(35,Ae=u.y2Max),"y2Scale"in u&&t(36,Se=u.y2Scale),"swapXY"in u&&t(0,he=u.swapXY),"showAllXAxisLabels"in u&&t(37,Oe=u.showAllXAxisLabels),"type"in u&&t(38,Ie=u.type),"fillColor"in u&&t(74,Ee=u.fillColor),"fillOpacity"in u&&t(39,we=u.fillOpacity),"outlineColor"in u&&t(75,Me=u.outlineColor),"outlineWidth"in u&&t(40,Qe=u.outlineWidth),"chartAreaHeight"in u&&t(41,C=u.chartAreaHeight),"sort"in u&&t(42,Te=u.sort),"colorPalette"in u&&t(76,Ne=u.colorPalette),"labels"in u&&t(43,Ye=u.labels),"labelSize"in u&&t(44,je=u.labelSize),"labelPosition"in u&&t(45,He=u.labelPosition),"labelColor"in u&&t(77,ke=u.labelColor),"labelFmt"in u&&t(46,Ve=u.labelFmt),"yLabelFmt"in u&&t(47,Xe=u.yLabelFmt),"y2LabelFmt"in u&&t(48,Je=u.y2LabelFmt),"stackTotalLabel"in u&&t(49,ve=u.stackTotalLabel),"seriesLabels"in u&&t(50,Ke=u.seriesLabels),"showAllLabels"in u&&t(51,E=u.showAllLabels),"yAxisColor"in u&&t(78,re=u.yAxisColor),"y2AxisColor"in u&&t(79,xe=u.y2AxisColor),"echartsOptions"in u&&t(52,d=u.echartsOptions),"seriesOptions"in u&&t(53,Bt=u.seriesOptions),"printEchartsConfig"in u&&t(54,dt=u.printEchartsConfig),"emptySet"in u&&t(55,ut=u.emptySet),"emptyMessage"in u&&t(56,Rt=u.emptyMessage),"renderer"in u&&t(57,lt=u.renderer),"downloadableData"in u&&t(58,Ut=u.downloadableData),"downloadableImage"in u&&t(59,et=u.downloadableImage),"seriesColors"in u&&t(80,rt=u.seriesColors),"seriesOrder"in u&&t(60,Xt=u.seriesOrder),"connectGroup"in u&&t(61,Ft=u.connectGroup),"seriesLabelFmt"in u&&t(62,_t=u.seriesLabelFmt),"leftPadding"in u&&t(63,st=u.leftPadding),"rightPadding"in u&&t(64,tt=u.rightPadding),"xLabelWrap"in u&&t(65,mt=u.xLabelWrap),"$$scope"in u&&t(82,A=u.$$scope)},l.$$.update=()=>{l.$$.dirty[0]&1&&(he==="true"||he===!0?t(0,he=!0):t(0,he=!1)),l.$$.dirty[2]&4096&&t(72,i=M(Ee)),l.$$.dirty[2]&8192&&t(71,s=M(Me)),l.$$.dirty[2]&16384&&t(70,n=S(Ne)),l.$$.dirty[2]&32768&&t(69,r=M(ke)),l.$$.dirty[2]&65536&&t(68,o=M(re)),l.$$.dirty[2]&131072&&t(67,a=M(xe)),l.$$.dirty[2]&262144&&t(66,_=k(rt))},[he,h,L,R,N,D,q,Z,U,p,v,G,y,j,H,w,Y,P,le,_e,se,te,ge,ne,K,ee,ae,Ce,B,ie,de,be,$,ye,J,Ae,Se,Oe,Ie,we,Qe,C,Te,Ye,je,He,Ve,Xe,Je,ve,Ke,E,d,Bt,dt,ut,Rt,lt,Ut,et,Xt,Ft,_t,st,tt,mt,_,a,o,r,n,s,i,De,Ee,Me,Ne,ke,re,xe,rt,T,A]}class zn extends wt{constructor(e){super(),Mt(this,e,Wn,qn,Ot,{data:1,x:2,y:3,y2:4,series:5,xType:6,yLog:7,yLogBase:8,y2SeriesType:9,yFmt:10,y2Fmt:11,xFmt:12,title:13,subtitle:14,legend:15,xAxisTitle:16,yAxisTitle:17,y2AxisTitle:18,xGridlines:19,yGridlines:20,y2Gridlines:21,xAxisLabels:22,yAxisLabels:23,y2AxisLabels:24,xBaseline:25,yBaseline:26,y2Baseline:27,xTickMarks:28,yTickMarks:29,y2TickMarks:30,yMin:31,yMax:32,yScale:33,y2Min:34,y2Max:35,y2Scale:36,swapXY:0,showAllXAxisLabels:37,type:38,fillColor:74,fillOpacity:39,outlineColor:75,outlineWidth:40,chartAreaHeight:41,sort:42,colorPalette:76,labels:43,labelSize:44,labelPosition:45,labelColor:77,labelFmt:46,yLabelFmt:47,y2LabelFmt:48,stackTotalLabel:49,seriesLabels:50,showAllLabels:51,yAxisColor:78,y2AxisColor:79,echartsOptions:52,seriesOptions:53,printEchartsConfig:54,emptySet:55,emptyMessage:56,renderer:57,downloadableData:58,downloadableImage:59,seriesColors:80,seriesOrder:60,connectGroup:61,seriesLabelFmt:62,leftPadding:63,rightPadding:64,xLabelWrap:65},null,[-1,-1,-1])}}function Vn(l){let e,t;return e=new Rs({props:{error:l[3]}}),{c(){ce(e.$$.fragment)},l(i){me(e.$$.fragment,i)},m(i,s){ue(e,i,s),t=!0},p(i,s){const n={};s&8&&(n.error=i[3]),e.$set(n)},i(i){t||(F(e.$$.fragment,i),t=!0)},o(i){I(e.$$.fragment,i),t=!1},d(i){fe(e,i)}}}function jn(l){let e,t=It(l[2],l[4])+"",i,s,n,r=l[1]&&Vl(l);return{c(){e=Q("span"),i=Ri(t),s=z(),r&&r.c(),this.h()},l(o){e=x(o,"SPAN",{style:!0});var a=$e(e);i=Mi(a,t),s=W(a),r&&r.l(a),a.forEach(c),this.h()},h(){V(e,"color",l[5])},m(o,a){b(o,e,a),Ze(e,i),Ze(e,s),r&&r.m(e,null),n=!0},p(o,a){(!n||a&20)&&t!==(t=It(o[2],o[4])+"")&&dl(i,t),o[1]?r?(r.p(o,a),a&2&&F(r,1)):(r=Vl(o),r.c(),F(r,1),r.m(e,null)):r&&(ot(),I(r,1,1,()=>{r=null}),ft()),(!n||a&32)&&V(e,"color",o[5])},i(o){n||(F(r),n=!0)},o(o){I(r),n=!1},d(o){o&&c(e),r&&r.d()}}}function Yn(l){let e,t,i,s,n,r="Placeholder: no data currently referenced.";return{c(){e=Q("span"),t=Ri("["),i=Ri(l[0]),s=Ri("]"),n=Q("span"),n.textContent=r,this.h()},l(o){e=x(o,"SPAN",{class:!0});var a=$e(e);t=Mi(a,"["),i=Mi(a,l[0]),s=Mi(a,"]"),n=x(a,"SPAN",{class:!0,"data-svelte-h":!0}),Re(n)!=="svelte-ddarzq"&&(n.textContent=r),a.forEach(c),this.h()},h(){O(n,"class","error-msg svelte-1qvl5jp"),O(e,"class","placeholder svelte-1qvl5jp")},m(o,a){b(o,e,a),Ze(e,t),Ze(e,i),Ze(e,s),Ze(e,n)},p(o,a){a&1&&dl(i,o[0])},i:Le,o:Le,d(o){o&&c(e)}}}function Vl(l){let e,t;return e=new Fs({props:{description:l[1]}}),{c(){ce(e.$$.fragment)},l(i){me(e.$$.fragment,i)},m(i,s){ue(e,i,s),t=!0},p(i,s){const n={};s&2&&(n.description=i[1]),e.$set(n)},i(i){t||(F(e.$$.fragment,i),t=!0)},o(i){I(e.$$.fragment,i),t=!1},d(i){fe(e,i)}}}function Xn(l){let e,t,i,s;const n=[Yn,jn,Vn],r=[];function o(a,_){return a[0]?0:a[3]?2:1}return e=o(l),t=r[e]=n[e](l),{c(){t.c(),i=nt()},l(a){t.l(a),i=nt()},m(a,_){r[e].m(a,_),b(a,i,_),s=!0},p(a,[_]){let T=e;e=o(a),e===T?r[e].p(a,_):(ot(),I(r[T],1,1,()=>{r[T]=null}),ft(),t=r[e],t?t.p(a,_):(t=r[e]=n[e](a),t.c()),F(t,1),t.m(i.parentNode,i))},i(a){s||(F(t),s=!0)},o(a){I(t),s=!1},d(a){a&&c(i),r[e].d(a)}}}function xn(l,e,t){let i,s,n=Le,r=()=>(n(),n=Ct(i,U=>t(15,s=U)),i);l.$$.on_destroy.push(()=>n());const{resolveColor:o}=si();let{data:a=null}=e,{row:_=0}=e,{column:T=null}=e,{value:A=null}=e,{placeholder:M=null}=e,{description:k=void 0}=e,{fmt:S=void 0}=e,h,L,R,{color:N=void 0}=e,D="",{redNegatives:q=!1}=e,Z;return l.$$set=U=>{"data"in U&&t(7,a=U.data),"row"in U&&t(10,_=U.row),"column"in U&&t(8,T=U.column),"value"in U&&t(11,A=U.value),"placeholder"in U&&t(0,M=U.placeholder),"description"in U&&t(1,k=U.description),"fmt"in U&&t(12,S=U.fmt),"color"in U&&t(13,N=U.color),"redNegatives"in U&&t(9,q=U.redNegatives)},l.$$.update=()=>{var U;if(l.$$.dirty&2304&&t(8,T=T??A),l.$$.dirty&21897)try{if(t(3,R=void 0),!M)if(a){if(typeof a=="string")throw Error(`Received: data=${a}, expected: data={${a}}`);if(Array.isArray(a)||t(7,a=[a]),isNaN(_))throw Error("row must be a number (row="+_+")");try{Object.keys(a[_])[0]}catch{throw Error("Row "+_+" does not exist in the dataset")}t(8,T=T??Object.keys(a[_])[0]),ul(a,[T]),t(14,Z=vi(a,"array"));const p=Z.filter(v=>{var G;return v.type==="date"&&!(((G=a[0])==null?void 0:G[v.id])instanceof Date)}).map(v=>v.id);for(let v=0;v<p.length;v++)t(7,a=Ms(a,p[v]));t(2,L=a[_][T]),t(14,Z=Z.filter(v=>v.id===T)),S?t(4,h=Nt(S,(U=Z[0].format)==null?void 0:U.valueType)):t(4,h=Z[0].format)}else throw Error("No data provided. If you referenced a query result, check that the name is correct.")}catch(p){if(t(3,R=p.message),console.error("\x1B[31m%s\x1B[0m",`Error in Value: ${R}`),$l)throw R}l.$$.dirty&2304&&A&&T&&console.warn('Both "value" and "column" were supplied as props to Value. "value" will be ignored.'),l.$$.dirty&8192&&r(t(6,i=o(N))),l.$$.dirty&512&&t(9,q=q==="true"||q===!0),l.$$.dirty&33284&&(q||s)&&(q&&L<0?t(5,D="rgb(220 38 38)"):s&&t(5,D=s))},[M,k,L,R,h,D,i,a,T,q,_,A,S,N,Z,s]}class Qn extends wt{constructor(e){super(),Mt(this,e,xn,Xn,Ot,{data:7,row:10,column:8,value:11,placeholder:0,description:1,fmt:12,color:13,redNegatives:9})}}function Jn(l){let e;const t=l[7].default,i=zi(t,l,l[8],null);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,n){i&&i.m(s,n),e=!0},p(s,n){i&&i.p&&(!e||n&256)&&Vi(i,t,s,s[8],e?Yi(t,s[8],n,null):ji(s[8]),null)},i(s){e||(F(i,s),e=!0)},o(s){I(i,s),e=!1},d(s){i&&i.d(s)}}}function Kn(l){let e,t;const i=[l[4],{data:Lt.isQuery(l[11])?Array.from(l[11]):l[11]}];let s={$$slots:{default:[Jn]},$$scope:{ctx:l}};for(let n=0;n<i.length;n+=1)s=li(s,i[n]);return e=new Qn({props:s}),{c(){ce(e.$$.fragment)},l(n){me(e.$$.fragment,n)},m(n,r){ue(e,n,r),t=!0},p(n,r){const o=r&2064?is(i,[r&16&&ls(n[4]),r&2048&&{data:Lt.isQuery(n[11])?Array.from(n[11]):n[11]}]):{};r&256&&(o.$$scope={dirty:r,ctx:n}),e.$set(o)},i(n){t||(F(e.$$.fragment,n),t=!0)},o(n){I(e.$$.fragment,n),t=!1},d(n){fe(e,n)}}}function jl(l){let e,t;return e=new ss({props:{emptyMessage:l[2],emptySet:l[1],chartType:$n,isInitial:l[3]}}),{c(){ce(e.$$.fragment)},l(i){me(e.$$.fragment,i)},m(i,s){ue(e,i,s),t=!0},p(i,s){const n={};s&4&&(n.emptyMessage=i[2]),s&2&&(n.emptySet=i[1]),s&8&&(n.isInitial=i[3]),e.$set(n)},i(i){t||(F(e.$$.fragment,i),t=!0)},o(i){I(e.$$.fragment,i),t=!1},d(i){fe(e,i)}}}function Zn(l){let e,t,i=!l[4].placeholder&&jl(l);return{c(){e=Q("span"),i&&i.c(),this.h()},l(s){e=x(s,"SPAN",{slot:!0});var n=$e(e);i&&i.l(n),n.forEach(c),this.h()},h(){O(e,"slot","empty")},m(s,n){b(s,e,n),i&&i.m(e,null),t=!0},p(s,n){s[4].placeholder?i&&(ot(),I(i,1,1,()=>{i=null}),ft()):i?(i.p(s,n),n&16&&F(i,1)):(i=jl(s),i.c(),F(i,1),i.m(e,null))},i(s){t||(F(i),t=!0)},o(s){I(i),t=!1},d(s){s&&c(e),i&&i.d()}}}function vn(l){let e,t="Loading...";return{c(){e=Q("span"),e.textContent=t,this.h()},l(i){e=x(i,"SPAN",{slot:!0,class:!0,"data-svelte-h":!0}),Re(e)!=="svelte-89gxhc"&&(e.textContent=t),this.h()},h(){O(e,"slot","skeleton"),O(e,"class","text-base-content-muted")},m(i,s){b(i,e,s)},p:Le,d(i){i&&c(e)}}}function pn(l){let e,t;return e=new ts({props:{data:l[0],$$slots:{skeleton:[vn],empty:[Zn],default:[Kn,({loaded:i})=>({11:i}),({loaded:i})=>i?2048:0]},$$scope:{ctx:l}}}),{c(){ce(e.$$.fragment)},l(i){me(e.$$.fragment,i)},m(i,s){ue(e,i,s),t=!0},p(i,[s]){const n={};s&1&&(n.data=i[0]),s&2334&&(n.$$scope={dirty:s,ctx:i}),e.$set(n)},i(i){t||(F(e.$$.fragment,i),t=!0)},o(i){I(e.$$.fragment,i),t=!1},d(i){fe(e,i)}}}let $n="Value";function er(l,e,t){let i,{$$slots:s={},$$scope:n}=e,{data:r}=e,{column:o}=e,{agg:a}=e;const _=Lt.isQuery(r)?r.hash:void 0;let T=(r==null?void 0:r.hash)===_,{emptySet:A=void 0}=e,{emptyMessage:M=void 0}=e;return l.$$set=k=>{t(10,e=li(li({},e),Ui(k))),"data"in k&&t(0,r=k.data),"column"in k&&t(5,o=k.column),"agg"in k&&t(6,a=k.agg),"emptySet"in k&&t(1,A=k.emptySet),"emptyMessage"in k&&t(2,M=k.emptyMessage),"$$scope"in k&&t(8,n=k.$$scope)},l.$$.update=()=>{l.$$.dirty&97&&a&&t(0,r=r.groupBy(void 0).agg({[a]:{col:o,as:o}})),l.$$.dirty&1&&t(3,T=(r==null?void 0:r.hash)===_),t(4,i=Object.fromEntries(Object.entries(e).filter(([,k])=>k!==void 0)))},e=Ui(e),[r,A,M,T,i,o,a,s,n]}class Zi extends wt{constructor(e){super(),Mt(this,e,er,pn,Ot,{data:0,column:5,agg:6,emptySet:1,emptyMessage:2})}}function tr(l){let e,t=Fe.title+"",i;return{c(){e=Q("h1"),i=Ri(t),this.h()},l(s){e=x(s,"H1",{class:!0});var n=$e(e);i=Mi(n,t),n.forEach(c),this.h()},h(){O(e,"class","title")},m(s,n){b(s,e,n),Ze(e,i)},p:Le,d(s){s&&c(e)}}}function ir(l){return{c(){this.h()},l(e){this.h()},h(){document.title="Evidence"},m:Le,p:Le,d:Le}}function lr(l){let e,t,i,s,n;return document.title=e=Fe.title,{c(){t=z(),i=Q("meta"),s=z(),n=Q("meta"),this.h()},l(r){t=W(r),i=x(r,"META",{property:!0,content:!0}),s=W(r),n=x(r,"META",{name:!0,content:!0}),this.h()},h(){var r,o;O(i,"property","og:title"),O(i,"content",((r=Fe.og)==null?void 0:r.title)??Fe.title),O(n,"name","twitter:title"),O(n,"content",((o=Fe.og)==null?void 0:o.title)??Fe.title)},m(r,o){b(r,t,o),b(r,i,o),b(r,s,o),b(r,n,o)},p(r,o){o&0&&e!==(e=Fe.title)&&(document.title=e)},d(r){r&&(c(t),c(i),c(s),c(n))}}}function sr(l){var n;let e,t,i=nr(),s=((n=Fe.og)==null?void 0:n.image)&&rr();return{c(){i&&i.c(),e=z(),s&&s.c(),t=nt()},l(r){i&&i.l(r),e=W(r),s&&s.l(r),t=nt()},m(r,o){i&&i.m(r,o),b(r,e,o),s&&s.m(r,o),b(r,t,o)},p(r,o){var a;i.p(r,o),(a=Fe.og)!=null&&a.image&&s.p(r,o)},d(r){r&&(c(e),c(t)),i&&i.d(r),s&&s.d(r)}}}function nr(l){let e,t,i,s,n;return{c(){e=Q("meta"),t=z(),i=Q("meta"),s=z(),n=Q("meta"),this.h()},l(r){e=x(r,"META",{name:!0,content:!0}),t=W(r),i=x(r,"META",{property:!0,content:!0}),s=W(r),n=x(r,"META",{name:!0,content:!0}),this.h()},h(){var r,o;O(e,"name","description"),O(e,"content",Fe.description),O(i,"property","og:description"),O(i,"content",((r=Fe.og)==null?void 0:r.description)??Fe.description),O(n,"name","twitter:description"),O(n,"content",((o=Fe.og)==null?void 0:o.description)??Fe.description)},m(r,o){b(r,e,o),b(r,t,o),b(r,i,o),b(r,s,o),b(r,n,o)},p:Le,d(r){r&&(c(e),c(t),c(i),c(s),c(n))}}}function rr(l){let e,t,i;return{c(){e=Q("meta"),t=z(),i=Q("meta"),this.h()},l(s){e=x(s,"META",{property:!0,content:!0}),t=W(s),i=x(s,"META",{name:!0,content:!0}),this.h()},h(){var s,n;O(e,"property","og:image"),O(e,"content",wl((s=Fe.og)==null?void 0:s.image)),O(i,"name","twitter:image"),O(i,"content",wl((n=Fe.og)==null?void 0:n.image))},m(s,n){b(s,e,n),b(s,t,n),b(s,i,n)},p:Le,d(s){s&&(c(e),c(t),c(i))}}}function Yl(l){let e,t;return e=new Di({props:{queryID:"risk_summary",queryResult:l[0]}}),{c(){ce(e.$$.fragment)},l(i){me(e.$$.fragment,i)},m(i,s){ue(e,i,s),t=!0},p(i,s){const n={};s[0]&1&&(n.queryResult=i[0]),e.$set(n)},i(i){t||(F(e.$$.fragment,i),t=!0)},o(i){I(e.$$.fragment,i),t=!1},d(i){fe(e,i)}}}function Xl(l){let e,t;return e=new Di({props:{queryID:"wash_events",queryResult:l[1]}}),{c(){ce(e.$$.fragment)},l(i){me(e.$$.fragment,i)},m(i,s){ue(e,i,s),t=!0},p(i,s){const n={};s[0]&2&&(n.queryResult=i[1]),e.$set(n)},i(i){t||(F(e.$$.fragment,i),t=!0)},o(i){I(e.$$.fragment,i),t=!1},d(i){fe(e,i)}}}function xl(l){let e,t;return e=new Di({props:{queryID:"slippage_summary",queryResult:l[2]}}),{c(){ce(e.$$.fragment)},l(i){me(e.$$.fragment,i)},m(i,s){ue(e,i,s),t=!0},p(i,s){const n={};s[0]&4&&(n.queryResult=i[2]),e.$set(n)},i(i){t||(F(e.$$.fragment,i),t=!0)},o(i){I(e.$$.fragment,i),t=!1},d(i){fe(e,i)}}}function Ql(l){let e,t;return e=new Di({props:{queryID:"spikes",queryResult:l[3]}}),{c(){ce(e.$$.fragment)},l(i){me(e.$$.fragment,i)},m(i,s){ue(e,i,s),t=!0},p(i,s){const n={};s[0]&8&&(n.queryResult=i[3]),e.$set(n)},i(i){t||(F(e.$$.fragment,i),t=!0)},o(i){I(e.$$.fragment,i),t=!1},d(i){fe(e,i)}}}function Jl(l){let e,t;return e=new Di({props:{queryID:"risk_scores",queryResult:l[4]}}),{c(){ce(e.$$.fragment)},l(i){me(e.$$.fragment,i)},m(i,s){ue(e,i,s),t=!0},p(i,s){const n={};s[0]&16&&(n.queryResult=i[4]),e.$set(n)},i(i){t||(F(e.$$.fragment,i),t=!0)},o(i){I(e.$$.fragment,i),t=!1},d(i){fe(e,i)}}}function Kl(l){let e,t;return e=new Di({props:{queryID:"daily_volume",queryResult:l[5]}}),{c(){ce(e.$$.fragment)},l(i){me(e.$$.fragment,i)},m(i,s){ue(e,i,s),t=!0},p(i,s){const n={};s[0]&32&&(n.queryResult=i[5]),e.$set(n)},i(i){t||(F(e.$$.fragment,i),t=!0)},o(i){I(e.$$.fragment,i),t=!1},d(i){fe(e,i)}}}function ar(l){let e,t,i,s,n,r,o='<a href="#️-sentinelsql--analyse-de-fraude-financière">🛡️ SentinelSQL – Analyse de Fraude Financière</a>',a,_,T='<em class="markdown">Démonstration de maîtrise SQL avancée avec DuckDB et Evidence.dev – Projet MIAGE Université Paris Dauphine</em>',A,M,k,S,h='<a href="#-tableau-de-bord-de-risque-global">📊 Tableau de Bord de Risque Global</a>',L,R,N,D,q,Z,U,p,v,G,y,j='<strong class="markdown">Explication métier</strong> : Ces indicateurs clés (KPIs) donnent une vision d&#39;ensemble de l&#39;activité du marché. Ils servent de point de départ pour détecter des comportements anormaux. Par exemple, un volume total disproportionné par rapport au nombre d&#39;utilisateurs peut révéler une concentration de trading suspecte.',H,w,Y,P,le='<a href="#-détection-de-wash-trading">🔍 Détection de Wash Trading</a>',_e,se,te='<strong class="markdown">Problème métier</strong> : Le wash trading consiste à acheter et vendre rapidement le même actif par le même utilisateur, créant artificiellement du volume et de la liquidité. Cette pratique fausse les données de marché et peut masquer des manipulations.',ge,ne,K,ee,ae,Ce='<strong class="markdown">Comment interpréter ces données</strong> : Ce tableau liste les utilisateurs et actifs présentant le plus grand nombre de transactions suspectes de wash trading (achat-vente en moins de 10 secondes). Un nombre élevé (<code class="markdown">wash_count</code>) indique une activité potentiellement frauduleuse. L&#39;écart moyen permet d&#39;évaluer la rapidité des opérations.',B,ie,de='<strong class="markdown">Logique technique</strong> : Self-join sur <code class="markdown">user_id</code>, <code class="markdown">asset_id</code>, <code class="markdown">price</code> avec une fenêtre temporelle de 10 secondes. Utilisation de <code class="markdown">EXTRACT(EPOCH)</code> pour calculer la différence en secondes.',be,$,ye,J,Ae='<a href="#-volatilité-relative--slippage">📉 Volatilité Relative &amp; Slippage</a>',Se,he,Oe='<strong class="markdown">Problème métier</strong> : Le slippage mesure l&#39;écart entre le prix d&#39;exécution d&#39;une transaction et le prix de marché au même instant. Un slippage élevé peut indiquer des problèmes de liquidité, du front-running ou des manipulations de prix.',Ie,De,Ee,we,Me,Qe='<strong class="markdown">Comment interpréter ces données</strong> : Ce graphique montre le slippage moyen pour chaque actif. Un slippage supérieur à 1% est généralement considéré comme élevé et peut signaler des conditions de marché défavorables.',C,Te,Ne='<strong class="markdown">Logique technique</strong> : <code class="markdown">ASOF JOIN</code> aligne chaque transaction avec le dernier prix de marché connu. DuckDB optimise cette jointure pour les séries temporelles.',Ye,je,He,ke,Ve='<a href="#-anomalies-de-volume-pics">🚨 Anomalies de Volume (Pics)</a>',Xe,Je,ve='<strong class="markdown">Problème métier</strong> : Des pics de volume sur de courtes périodes peuvent révéler des manipulations de marché ou du trading d&#39;initié.',Ke,E,re,xe,d,Bt='<strong class="markdown">Comment interpréter ces données</strong> : Ce tableau liste les fenêtres d&#39;une minute où le volume dépasse la moyenne des 24h précédentes. Un <code class="markdown">volume_ratio</code> élevé signale une anomalie statistique.',dt,ut,Rt,lt,Ut='<a href="#-score-de-risque-par-utilisateur">🎯 Score de Risque par Utilisateur</a>',et,rt,Xt='<strong class="markdown">Problème métier</strong> : Attribuer un score de risque à chaque utilisateur permet de prioriser les revues de conformité.',Ft,_t,st,tt,mt,u='<strong class="markdown">Logique métier MIAGE</strong> : Un score composite permet d&#39;automatiser le tri des dossiers de compliance.',Gt,xt,Qt,ht,Jt='<a href="#-évolution-du-volume-quotidien">📅 Évolution du Volume Quotidien</a>',yi,oe,yt,qt,Tt,Kt,at,gt='<a href="#-conclusion-analytique">🧠 Conclusion Analytique</a>',Zt,pe,it='Ce dashboard illustre <strong class="markdown">l&#39;approche MIAGE</strong> :',ct,bt,gi='<li class="markdown"><strong class="markdown">Rigueur SQL</strong> : Utilisation de CTEs et Window Functions.</li> <li class="markdown"><strong class="markdown">Sens métier</strong> : Surveillance financière concrète.</li> <li class="markdown"><strong class="markdown">Performance</strong> : Optimisé pour DuckDB.</li>',Ht,Pt,vt,St,Wt='<em class="markdown">Projet SentinelSQL – Charles Baudoux, MIAGE Université Paris Dauphine</em>',pt,Et=typeof Fe<"u"&&Fe.title&&Fe.hide_title!==!0&&tr();function ni(f,g){return typeof Fe<"u"&&Fe.title?lr:ir}let zt=ni()(l),At=typeof Fe=="object"&&sr(),Pe=l[0]&&Yl(l);N=new Zi({props:{data:l[0],column:"total_trades",title:"Nombre Total de Transactions"}}),q=new Zi({props:{data:l[0],column:"unique_users",title:"Utilisateurs Distincts"}}),U=new Zi({props:{data:l[0],column:"total_volume",title:"Volume Total (€)",fmt:"eur"}}),v=new Zi({props:{data:l[0],column:"avg_trade_size",title:"Taille Moyenne par Transaction",fmt:"eur"}});let Be=l[1]&&Xl(l);K=new rl({props:{data:l[1],title:"Top des Événements de Wash Trading"}});let Ue=l[2]&&xl(l);Ee=new zn({props:{data:l[2],x:"asset_id",y:"avg_slippage_pct",yFmt:"pct",title:"Slippage Moyen par Actif"}});let Ge=l[3]&&Ql(l);re=new rl({props:{data:l[3],title:"Pics de Volume (au-delà de 3 écarts-type)"}});let qe=l[4]&&Jl(l);st=new rl({props:{data:l[4],title:"Classement des Utilisateurs par Score de Risque"}});let We=l[5]&&Kl(l);return yt=new Hn({props:{data:l[5],x:"day",y:"volume",title:"Volume Quotidien (€)"}}),{c(){Et&&Et.c(),e=z(),zt.c(),t=Q("meta"),i=Q("meta"),At&&At.c(),s=nt(),n=z(),r=Q("h1"),r.innerHTML=o,a=z(),_=Q("p"),_.innerHTML=T,A=z(),M=Q("hr"),k=z(),S=Q("h2"),S.innerHTML=h,L=z(),Pe&&Pe.c(),R=z(),ce(N.$$.fragment),D=z(),ce(q.$$.fragment),Z=z(),ce(U.$$.fragment),p=z(),ce(v.$$.fragment),G=z(),y=Q("p"),y.innerHTML=j,H=z(),w=Q("hr"),Y=z(),P=Q("h2"),P.innerHTML=le,_e=z(),se=Q("p"),se.innerHTML=te,ge=z(),Be&&Be.c(),ne=z(),ce(K.$$.fragment),ee=z(),ae=Q("p"),ae.innerHTML=Ce,B=z(),ie=Q("p"),ie.innerHTML=de,be=z(),$=Q("hr"),ye=z(),J=Q("h2"),J.innerHTML=Ae,Se=z(),he=Q("p"),he.innerHTML=Oe,Ie=z(),Ue&&Ue.c(),De=z(),ce(Ee.$$.fragment),we=z(),Me=Q("p"),Me.innerHTML=Qe,C=z(),Te=Q("p"),Te.innerHTML=Ne,Ye=z(),je=Q("hr"),He=z(),ke=Q("h2"),ke.innerHTML=Ve,Xe=z(),Je=Q("p"),Je.innerHTML=ve,Ke=z(),Ge&&Ge.c(),E=z(),ce(re.$$.fragment),xe=z(),d=Q("p"),d.innerHTML=Bt,dt=z(),ut=Q("hr"),Rt=z(),lt=Q("h2"),lt.innerHTML=Ut,et=z(),rt=Q("p"),rt.innerHTML=Xt,Ft=z(),qe&&qe.c(),_t=z(),ce(st.$$.fragment),tt=z(),mt=Q("p"),mt.innerHTML=u,Gt=z(),xt=Q("hr"),Qt=z(),ht=Q("h2"),ht.innerHTML=Jt,yi=z(),We&&We.c(),oe=z(),ce(yt.$$.fragment),qt=z(),Tt=Q("hr"),Kt=z(),at=Q("h2"),at.innerHTML=gt,Zt=z(),pe=Q("p"),pe.innerHTML=it,ct=z(),bt=Q("ol"),bt.innerHTML=gi,Ht=z(),Pt=Q("hr"),vt=z(),St=Q("p"),St.innerHTML=Wt,this.h()},l(f){Et&&Et.l(f),e=W(f);const g=ds("svelte-2igo1p",document.head);zt.l(g),t=x(g,"META",{name:!0,content:!0}),i=x(g,"META",{name:!0,content:!0}),At&&At.l(g),s=nt(),g.forEach(c),n=W(f),r=x(f,"H1",{class:!0,id:!0,"data-svelte-h":!0}),Re(r)!=="svelte-6kw80a"&&(r.innerHTML=o),a=W(f),_=x(f,"P",{class:!0,"data-svelte-h":!0}),Re(_)!=="svelte-ucjson"&&(_.innerHTML=T),A=W(f),M=x(f,"HR",{class:!0}),k=W(f),S=x(f,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Re(S)!=="svelte-3wqnck"&&(S.innerHTML=h),L=W(f),Pe&&Pe.l(f),R=W(f),me(N.$$.fragment,f),D=W(f),me(q.$$.fragment,f),Z=W(f),me(U.$$.fragment,f),p=W(f),me(v.$$.fragment,f),G=W(f),y=x(f,"P",{class:!0,"data-svelte-h":!0}),Re(y)!=="svelte-qtu7gy"&&(y.innerHTML=j),H=W(f),w=x(f,"HR",{class:!0}),Y=W(f),P=x(f,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Re(P)!=="svelte-1ectpwq"&&(P.innerHTML=le),_e=W(f),se=x(f,"P",{class:!0,"data-svelte-h":!0}),Re(se)!=="svelte-1x0y4st"&&(se.innerHTML=te),ge=W(f),Be&&Be.l(f),ne=W(f),me(K.$$.fragment,f),ee=W(f),ae=x(f,"P",{class:!0,"data-svelte-h":!0}),Re(ae)!=="svelte-1w990d8"&&(ae.innerHTML=Ce),B=W(f),ie=x(f,"P",{class:!0,"data-svelte-h":!0}),Re(ie)!=="svelte-o30lp3"&&(ie.innerHTML=de),be=W(f),$=x(f,"HR",{class:!0}),ye=W(f),J=x(f,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Re(J)!=="svelte-zty99a"&&(J.innerHTML=Ae),Se=W(f),he=x(f,"P",{class:!0,"data-svelte-h":!0}),Re(he)!=="svelte-ts5x5i"&&(he.innerHTML=Oe),Ie=W(f),Ue&&Ue.l(f),De=W(f),me(Ee.$$.fragment,f),we=W(f),Me=x(f,"P",{class:!0,"data-svelte-h":!0}),Re(Me)!=="svelte-1imkrsw"&&(Me.innerHTML=Qe),C=W(f),Te=x(f,"P",{class:!0,"data-svelte-h":!0}),Re(Te)!=="svelte-1jdq8db"&&(Te.innerHTML=Ne),Ye=W(f),je=x(f,"HR",{class:!0}),He=W(f),ke=x(f,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Re(ke)!=="svelte-1hgr9ez"&&(ke.innerHTML=Ve),Xe=W(f),Je=x(f,"P",{class:!0,"data-svelte-h":!0}),Re(Je)!=="svelte-b5g3fp"&&(Je.innerHTML=ve),Ke=W(f),Ge&&Ge.l(f),E=W(f),me(re.$$.fragment,f),xe=W(f),d=x(f,"P",{class:!0,"data-svelte-h":!0}),Re(d)!=="svelte-rqncqk"&&(d.innerHTML=Bt),dt=W(f),ut=x(f,"HR",{class:!0}),Rt=W(f),lt=x(f,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Re(lt)!=="svelte-1kq58f3"&&(lt.innerHTML=Ut),et=W(f),rt=x(f,"P",{class:!0,"data-svelte-h":!0}),Re(rt)!=="svelte-15dr3sd"&&(rt.innerHTML=Xt),Ft=W(f),qe&&qe.l(f),_t=W(f),me(st.$$.fragment,f),tt=W(f),mt=x(f,"P",{class:!0,"data-svelte-h":!0}),Re(mt)!=="svelte-15fqujo"&&(mt.innerHTML=u),Gt=W(f),xt=x(f,"HR",{class:!0}),Qt=W(f),ht=x(f,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Re(ht)!=="svelte-162phb0"&&(ht.innerHTML=Jt),yi=W(f),We&&We.l(f),oe=W(f),me(yt.$$.fragment,f),qt=W(f),Tt=x(f,"HR",{class:!0}),Kt=W(f),at=x(f,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Re(at)!=="svelte-1b2uehg"&&(at.innerHTML=gt),Zt=W(f),pe=x(f,"P",{class:!0,"data-svelte-h":!0}),Re(pe)!=="svelte-y3cu0v"&&(pe.innerHTML=it),ct=W(f),bt=x(f,"OL",{class:!0,"data-svelte-h":!0}),Re(bt)!=="svelte-gpnpq"&&(bt.innerHTML=gi),Ht=W(f),Pt=x(f,"HR",{class:!0}),vt=W(f),St=x(f,"P",{class:!0,"data-svelte-h":!0}),Re(St)!=="svelte-18sdmvw"&&(St.innerHTML=Wt),this.h()},h(){O(t,"name","twitter:card"),O(t,"content","summary_large_image"),O(i,"name","twitter:site"),O(i,"content","@evidence_dev"),O(r,"class","markdown"),O(r,"id","️-sentinelsql--analyse-de-fraude-financière"),O(_,"class","markdown"),O(M,"class","markdown"),O(S,"class","markdown"),O(S,"id","-tableau-de-bord-de-risque-global"),O(y,"class","markdown"),O(w,"class","markdown"),O(P,"class","markdown"),O(P,"id","-détection-de-wash-trading"),O(se,"class","markdown"),O(ae,"class","markdown"),O(ie,"class","markdown"),O($,"class","markdown"),O(J,"class","markdown"),O(J,"id","-volatilité-relative--slippage"),O(he,"class","markdown"),O(Me,"class","markdown"),O(Te,"class","markdown"),O(je,"class","markdown"),O(ke,"class","markdown"),O(ke,"id","-anomalies-de-volume-pics"),O(Je,"class","markdown"),O(d,"class","markdown"),O(ut,"class","markdown"),O(lt,"class","markdown"),O(lt,"id","-score-de-risque-par-utilisateur"),O(rt,"class","markdown"),O(mt,"class","markdown"),O(xt,"class","markdown"),O(ht,"class","markdown"),O(ht,"id","-évolution-du-volume-quotidien"),O(Tt,"class","markdown"),O(at,"class","markdown"),O(at,"id","-conclusion-analytique"),O(pe,"class","markdown"),O(bt,"class","markdown"),O(Pt,"class","markdown"),O(St,"class","markdown")},m(f,g){Et&&Et.m(f,g),b(f,e,g),zt.m(document.head,null),Ze(document.head,t),Ze(document.head,i),At&&At.m(document.head,null),Ze(document.head,s),b(f,n,g),b(f,r,g),b(f,a,g),b(f,_,g),b(f,A,g),b(f,M,g),b(f,k,g),b(f,S,g),b(f,L,g),Pe&&Pe.m(f,g),b(f,R,g),ue(N,f,g),b(f,D,g),ue(q,f,g),b(f,Z,g),ue(U,f,g),b(f,p,g),ue(v,f,g),b(f,G,g),b(f,y,g),b(f,H,g),b(f,w,g),b(f,Y,g),b(f,P,g),b(f,_e,g),b(f,se,g),b(f,ge,g),Be&&Be.m(f,g),b(f,ne,g),ue(K,f,g),b(f,ee,g),b(f,ae,g),b(f,B,g),b(f,ie,g),b(f,be,g),b(f,$,g),b(f,ye,g),b(f,J,g),b(f,Se,g),b(f,he,g),b(f,Ie,g),Ue&&Ue.m(f,g),b(f,De,g),ue(Ee,f,g),b(f,we,g),b(f,Me,g),b(f,C,g),b(f,Te,g),b(f,Ye,g),b(f,je,g),b(f,He,g),b(f,ke,g),b(f,Xe,g),b(f,Je,g),b(f,Ke,g),Ge&&Ge.m(f,g),b(f,E,g),ue(re,f,g),b(f,xe,g),b(f,d,g),b(f,dt,g),b(f,ut,g),b(f,Rt,g),b(f,lt,g),b(f,et,g),b(f,rt,g),b(f,Ft,g),qe&&qe.m(f,g),b(f,_t,g),ue(st,f,g),b(f,tt,g),b(f,mt,g),b(f,Gt,g),b(f,xt,g),b(f,Qt,g),b(f,ht,g),b(f,yi,g),We&&We.m(f,g),b(f,oe,g),ue(yt,f,g),b(f,qt,g),b(f,Tt,g),b(f,Kt,g),b(f,at,g),b(f,Zt,g),b(f,pe,g),b(f,ct,g),b(f,bt,g),b(f,Ht,g),b(f,Pt,g),b(f,vt,g),b(f,St,g),pt=!0},p(f,g){typeof Fe<"u"&&Fe.title&&Fe.hide_title!==!0&&Et.p(f,g),zt.p(f,g),typeof Fe=="object"&&At.p(f,g),f[0]?Pe?(Pe.p(f,g),g[0]&1&&F(Pe,1)):(Pe=Yl(f),Pe.c(),F(Pe,1),Pe.m(R.parentNode,R)):Pe&&(ot(),I(Pe,1,1,()=>{Pe=null}),ft());const bi={};g[0]&1&&(bi.data=f[0]),N.$set(bi);const Vt={};g[0]&1&&(Vt.data=f[0]),q.$set(Vt);const $t={};g[0]&1&&($t.data=f[0]),U.$set($t);const ei={};g[0]&1&&(ei.data=f[0]),v.$set(ei),f[1]?Be?(Be.p(f,g),g[0]&2&&F(Be,1)):(Be=Xl(f),Be.c(),F(Be,1),Be.m(ne.parentNode,ne)):Be&&(ot(),I(Be,1,1,()=>{Be=null}),ft());const ai={};g[0]&2&&(ai.data=f[1]),K.$set(ai),f[2]?Ue?(Ue.p(f,g),g[0]&4&&F(Ue,1)):(Ue=xl(f),Ue.c(),F(Ue,1),Ue.m(De.parentNode,De)):Ue&&(ot(),I(Ue,1,1,()=>{Ue=null}),ft());const oi={};g[0]&4&&(oi.data=f[2]),Ee.$set(oi),f[3]?Ge?(Ge.p(f,g),g[0]&8&&F(Ge,1)):(Ge=Ql(f),Ge.c(),F(Ge,1),Ge.m(E.parentNode,E)):Ge&&(ot(),I(Ge,1,1,()=>{Ge=null}),ft());const Si={};g[0]&8&&(Si.data=f[3]),re.$set(Si),f[4]?qe?(qe.p(f,g),g[0]&16&&F(qe,1)):(qe=Jl(f),qe.c(),F(qe,1),qe.m(_t.parentNode,_t)):qe&&(ot(),I(qe,1,1,()=>{qe=null}),ft());const Ei={};g[0]&16&&(Ei.data=f[4]),st.$set(Ei),f[5]?We?(We.p(f,g),g[0]&32&&F(We,1)):(We=Kl(f),We.c(),F(We,1),We.m(oe.parentNode,oe)):We&&(ot(),I(We,1,1,()=>{We=null}),ft());const jt={};g[0]&32&&(jt.data=f[5]),yt.$set(jt)},i(f){pt||(F(Pe),F(N.$$.fragment,f),F(q.$$.fragment,f),F(U.$$.fragment,f),F(v.$$.fragment,f),F(Be),F(K.$$.fragment,f),F(Ue),F(Ee.$$.fragment,f),F(Ge),F(re.$$.fragment,f),F(qe),F(st.$$.fragment,f),F(We),F(yt.$$.fragment,f),pt=!0)},o(f){I(Pe),I(N.$$.fragment,f),I(q.$$.fragment,f),I(U.$$.fragment,f),I(v.$$.fragment,f),I(Be),I(K.$$.fragment,f),I(Ue),I(Ee.$$.fragment,f),I(Ge),I(re.$$.fragment,f),I(qe),I(st.$$.fragment,f),I(We),I(yt.$$.fragment,f),pt=!1},d(f){f&&(c(e),c(n),c(r),c(a),c(_),c(A),c(M),c(k),c(S),c(L),c(R),c(D),c(Z),c(p),c(G),c(y),c(H),c(w),c(Y),c(P),c(_e),c(se),c(ge),c(ne),c(ee),c(ae),c(B),c(ie),c(be),c($),c(ye),c(J),c(Se),c(he),c(Ie),c(De),c(we),c(Me),c(C),c(Te),c(Ye),c(je),c(He),c(ke),c(Xe),c(Je),c(Ke),c(E),c(xe),c(d),c(dt),c(ut),c(Rt),c(lt),c(et),c(rt),c(Ft),c(_t),c(tt),c(mt),c(Gt),c(xt),c(Qt),c(ht),c(yi),c(oe),c(qt),c(Tt),c(Kt),c(at),c(Zt),c(pe),c(ct),c(bt),c(Ht),c(Pt),c(vt),c(St)),Et&&Et.d(f),zt.d(f),c(t),c(i),At&&At.d(f),c(s),Pe&&Pe.d(f),fe(N,f),fe(q,f),fe(U,f),fe(v,f),Be&&Be.d(f),fe(K,f),Ue&&Ue.d(f),fe(Ee,f),Ge&&Ge.d(f),fe(re,f),qe&&qe.d(f),fe(st,f),We&&We.d(f),fe(yt,f)}}}const Fe={title:"SentinelSQL | Détection de Fraude Analytique",description:"Analytique SQL avancée pour détecter le wash trading, les pics de volume et les manipulations de marché."};function or(l,e,t){let i,s;hi(l,Bs,J=>t(32,i=J)),hi(l,Ml,J=>t(38,s=J));let{data:n}=e,{data:r={},customFormattingSettings:o,__db:a,inputs:_}=n;_s(Ml,s="6666cd76f96956469e7be39d750cc7d9",s);let T=Ds(ml(_));hs(T.subscribe(J=>_=J)),al(Hs,{getCustomFormats:()=>o.customFormats||[]});const A=(J,Ae)=>Ps(a.query,J,{query_name:Ae});Ns(A),i.params,ys(()=>!0);let M={initialData:void 0,initialError:void 0},k=kt`WITH transactions AS (
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
SELECT * FROM risk_summary`,S=`WITH transactions AS (
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
SELECT * FROM risk_summary`;r.risk_summary_data&&(r.risk_summary_data instanceof Error?M.initialError=r.risk_summary_data:M.initialData=r.risk_summary_data,r.risk_summary_columns&&(M.knownColumns=r.risk_summary_columns));let h,L=!1;const R=Lt.createReactive({callback:J=>{t(0,h=J)},execFn:A},{id:"risk_summary",...M});R(S,{noResolve:k,...M}),globalThis[Symbol.for("risk_summary")]={get value(){return h}};let N={initialData:void 0,initialError:void 0},D=kt`WITH transactions AS (
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
LIMIT 20`,q=`WITH transactions AS (
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
LIMIT 20`;r.wash_events_data&&(r.wash_events_data instanceof Error?N.initialError=r.wash_events_data:N.initialData=r.wash_events_data,r.wash_events_columns&&(N.knownColumns=r.wash_events_columns));let Z,U=!1;const p=Lt.createReactive({callback:J=>{t(1,Z=J)},execFn:A},{id:"wash_events",...N});p(q,{noResolve:D,...N}),globalThis[Symbol.for("wash_events")]={get value(){return Z}};let v={initialData:void 0,initialError:void 0},G=kt`WITH transactions AS (
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
  WHERE slippage_pct < 0.5 -- Filtre de sécurité pour les données simulées
  GROUP BY ALL
  ORDER BY avg_slippage_pct DESC
)
SELECT * FROM slippage_summary`,y=`WITH transactions AS (
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
  WHERE slippage_pct < 0.5 -- Filtre de sécurité pour les données simulées
  GROUP BY ALL
  ORDER BY avg_slippage_pct DESC
)
SELECT * FROM slippage_summary`;r.slippage_summary_data&&(r.slippage_summary_data instanceof Error?v.initialError=r.slippage_summary_data:v.initialData=r.slippage_summary_data,r.slippage_summary_columns&&(v.knownColumns=r.slippage_summary_columns));let j,H=!1;const w=Lt.createReactive({callback:J=>{t(2,j=J)},execFn:A},{id:"slippage_summary",...v});w(y,{noResolve:G,...v}),globalThis[Symbol.for("slippage_summary")]={get value(){return j}};let Y={initialData:void 0,initialError:void 0},P=kt`WITH transactions AS (
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
SELECT * FROM spikes LIMIT 15`,le=`WITH transactions AS (
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
SELECT * FROM spikes LIMIT 15`;r.spikes_data&&(r.spikes_data instanceof Error?Y.initialError=r.spikes_data:Y.initialData=r.spikes_data,r.spikes_columns&&(Y.knownColumns=r.spikes_columns));let _e,se=!1;const te=Lt.createReactive({callback:J=>{t(3,_e=J)},execFn:A},{id:"spikes",...Y});te(le,{noResolve:P,...Y}),globalThis[Symbol.for("spikes")]={get value(){return _e}};let ge={initialData:void 0,initialError:void 0},ne=kt`WITH transactions AS (
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
LIMIT 25`,K=`WITH transactions AS (
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
LIMIT 25`;r.risk_scores_data&&(r.risk_scores_data instanceof Error?ge.initialError=r.risk_scores_data:ge.initialData=r.risk_scores_data,r.risk_scores_columns&&(ge.knownColumns=r.risk_scores_columns));let ee,ae=!1;const Ce=Lt.createReactive({callback:J=>{t(4,ee=J)},execFn:A},{id:"risk_scores",...ge});Ce(K,{noResolve:ne,...ge}),globalThis[Symbol.for("risk_scores")]={get value(){return ee}};let B={initialData:void 0,initialError:void 0},ie=kt`WITH transactions AS (
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
ORDER BY 1`;r.daily_volume_data&&(r.daily_volume_data instanceof Error?B.initialError=r.daily_volume_data:B.initialData=r.daily_volume_data,r.daily_volume_columns&&(B.knownColumns=r.daily_volume_columns));let be,$=!1;const ye=Lt.createReactive({callback:J=>{t(5,be=J)},execFn:A},{id:"daily_volume",...B});return ye(de,{noResolve:ie,...B}),globalThis[Symbol.for("daily_volume")]={get value(){return be}},l.$$set=J=>{"data"in J&&t(6,n=J.data)},l.$$.update=()=>{l.$$.dirty[0]&64&&t(7,{data:r={},customFormattingSettings:o,__db:a}=n,r),l.$$.dirty[0]&128&&Is.set(Object.keys(r).length>0),l.$$.dirty[1]&2&&i.params,l.$$.dirty[0]&3840&&(k||!L?k||(R(S,{noResolve:k,...M}),t(11,L=!0)):R(S,{noResolve:k})),l.$$.dirty[0]&61440&&(D||!U?D||(p(q,{noResolve:D,...N}),t(15,U=!0)):p(q,{noResolve:D})),l.$$.dirty[0]&983040&&(G||!H?G||(w(y,{noResolve:G,...v}),t(19,H=!0)):w(y,{noResolve:G})),l.$$.dirty[0]&15728640&&(P||!se?P||(te(le,{noResolve:P,...Y}),t(23,se=!0)):te(le,{noResolve:P})),l.$$.dirty[0]&251658240&&(ne||!ae?ne||(Ce(K,{noResolve:ne,...ge}),t(27,ae=!0)):Ce(K,{noResolve:ne})),l.$$.dirty[0]&1879048192|l.$$.dirty[1]&1&&(ie||!$?ie||(ye(de,{noResolve:ie,...B}),t(31,$=!0)):ye(de,{noResolve:ie}))},t(9,k=kt`WITH transactions AS (
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
SELECT * FROM risk_summary`),t(10,S=`WITH transactions AS (
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
SELECT * FROM risk_summary`),t(13,D=kt`WITH transactions AS (
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
LIMIT 20`),t(14,q=`WITH transactions AS (
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
LIMIT 20`),t(17,G=kt`WITH transactions AS (
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
  WHERE slippage_pct < 0.5 -- Filtre de sécurité pour les données simulées
  GROUP BY ALL
  ORDER BY avg_slippage_pct DESC
)
SELECT * FROM slippage_summary`),t(18,y=`WITH transactions AS (
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
  WHERE slippage_pct < 0.5 -- Filtre de sécurité pour les données simulées
  GROUP BY ALL
  ORDER BY avg_slippage_pct DESC
)
SELECT * FROM slippage_summary`),t(21,P=kt`WITH transactions AS (
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
SELECT * FROM spikes LIMIT 15`),t(22,le=`WITH transactions AS (
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
SELECT * FROM spikes LIMIT 15`),t(25,ne=kt`WITH transactions AS (
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
LIMIT 25`),t(26,K=`WITH transactions AS (
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
LIMIT 25`),t(29,ie=kt`WITH transactions AS (
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
ORDER BY 1`),[h,Z,j,_e,ee,be,n,r,M,k,S,L,N,D,q,U,v,G,y,H,Y,P,le,se,ge,ne,K,ae,B,ie,de,$,i]}class yr extends wt{constructor(e){super(),Mt(this,e,or,ar,Ot,{data:6},null,[-1,-1])}}export{yr as component};
