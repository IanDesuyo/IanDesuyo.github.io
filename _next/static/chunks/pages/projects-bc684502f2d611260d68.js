(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{3014:function(e,t,n){"use strict";var r=n(9008),a=n(5893);t.Z=function(e){var t=e.title,n=e.description,i=e.image;return(0,a.jsxs)(r.default,{children:[(0,a.jsx)("title",{children:t}),(0,a.jsx)("link",{rel:"icon",href:"favicon.ico",type:"image/x-icon"}),(0,a.jsx)("meta",{property:"og:title",content:t}),(0,a.jsx)("meta",{property:"og:type",content:"website"}),n&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("meta",{name:"description",content:n}),(0,a.jsx)("meta",{property:"og:description",content:n})]}),i&&(0,a.jsx)("meta",{property:"og:image",content:i})]})}},582:function(e,t,n){"use strict";var r=n(1770),a=n(5893),i={hidden:{opacity:0,y:20},enter:{opacity:1,y:0},exit:{opacity:0,y:20}};t.Z=function(e){var t=e.children;return(0,a.jsx)(r.E.main,{initial:"hidden",animate:"enter",exit:"exit",variants:i,transition:{duration:.4,type:"easeInOut"},children:t})}},1854:function(e,t,n){"use strict";function r(e,t,n,r,a,i,s){try{var o=e[i](s),c=o.value}catch(u){return void n(u)}o.done?t(c):Promise.resolve(c).then(r,a)}n.r(t),n.d(t,{default:function(){return _}});var a=n(809),i=n.n(a),s=n(980),o=n(3850),c=n(8017),u=n(4115),l=n(8675),p=n(9444),h=n(8448),d=n(829),m=n(9867),f=(0,m.I)({d:"M23.555,8.729a1.505,1.505,0,0,0-1.406-.98H16.062a.5.5,0,0,1-.472-.334L13.405,1.222a1.5,1.5,0,0,0-2.81,0l-.005.016L8.41,7.415a.5.5,0,0,1-.471.334H1.85A1.5,1.5,0,0,0,.887,10.4l5.184,4.3a.5.5,0,0,1,.155.543L4.048,21.774a1.5,1.5,0,0,0,2.31,1.684l5.346-3.92a.5.5,0,0,1,.591,0l5.344,3.919a1.5,1.5,0,0,0,2.312-1.683l-2.178-6.535a.5.5,0,0,1,.155-.543l5.194-4.306A1.5,1.5,0,0,0,23.555,8.729Z",displayName:"StarIcon"}),x=n(7294),j=(0,m.I)({displayName:"LinkIcon",path:x.createElement("g",{fill:"currentColor"},x.createElement("path",{d:"M10.458,18.374,7.721,21.11a2.853,2.853,0,0,1-3.942,0l-.892-.891a2.787,2.787,0,0,1,0-3.941l5.8-5.8a2.789,2.789,0,0,1,3.942,0l.893.892A1,1,0,0,0,14.94,9.952l-.893-.892a4.791,4.791,0,0,0-6.771,0l-5.8,5.8a4.787,4.787,0,0,0,0,6.77l.892.891a4.785,4.785,0,0,0,6.771,0l2.736-2.735a1,1,0,1,0-1.414-1.415Z"}),x.createElement("path",{d:"M22.526,2.363l-.892-.892a4.8,4.8,0,0,0-6.77,0l-2.905,2.9a1,1,0,0,0,1.414,1.414l2.9-2.9a2.79,2.79,0,0,1,3.941,0l.893.893a2.786,2.786,0,0,1,0,3.942l-5.8,5.8a2.769,2.769,0,0,1-1.971.817h0a2.766,2.766,0,0,1-1.969-.816,1,1,0,1,0-1.415,1.412,4.751,4.751,0,0,0,3.384,1.4h0a4.752,4.752,0,0,0,3.385-1.4l5.8-5.8a4.786,4.786,0,0,0,0-6.771Z"}))}),y=(0,m.I)({displayName:"ExternalLinkIcon",path:x.createElement("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"2"},x.createElement("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),x.createElement("path",{d:"M15 3h6v6"}),x.createElement("path",{d:"M10 14L21 3"}))}),v=n(582),g=n(3014),E=n(5893),_=function(){var e=(0,x.useState)([]),t=e[0],n=e[1],a=["AIKyaru","YoutubeMusicLyrics"];return(0,x.useEffect)((function(){fetch("https://api.github.com/users/IanDesuyo/repos").then(function(){var e,t=(e=i().mark((function e(t){var r,s,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:r=e.sent,s=[],o=[],r.forEach((function(e){var t=a.includes(e.name),n={name:e.name,description:e.description,url:e.html_url,stars:e.stargazers_count,homepage:e.homepage,pinned:t};t?o.push(n):s.push(n)})),s.sort((function(e,t){return t.stars-e.stars})),setTimeout((function(){return n([].concat(o,s))}),1e3);case 8:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(a,i){var s=e.apply(t,n);function o(e){r(s,a,i,o,c,"next",e)}function c(e){r(s,a,i,o,c,"throw",e)}o(void 0)}))});return function(e){return t.apply(this,arguments)}}())}),[]),t.length>0?(0,E.jsxs)(v.Z,{children:[(0,E.jsx)(g.Z,{title:"My Projects"}),(0,E.jsx)(o.W,{children:t.map((function(e,t){return(0,E.jsxs)(c.xu,{bg:(0,s.useColorModeValue)("gray.100","gray.700"),m:5,p:2,borderRadius:"md",children:[(0,E.jsxs)(u.x,{fontSize:"2xl",children:[e.pinned&&(0,E.jsx)(f,{mr:2,w:5}),e.name]}),(0,E.jsx)(u.x,{children:e.description}),(0,E.jsxs)(l.Kq,{direction:"row",spacing:4,mt:2,children:[e.url&&(0,E.jsx)(p.r,{href:e.url,children:(0,E.jsxs)(u.x,{children:[(0,E.jsx)(j,{mr:2}),"Github"]})}),e.homepage&&(0,E.jsx)(p.r,{href:e.homepage,children:(0,E.jsxs)(u.x,{children:[(0,E.jsx)(y,{mr:2}),"Website"]})})]})]},t)}))})]}):(0,E.jsx)(h.M,{h:40,children:(0,E.jsx)(d.$,{size:"xl",speed:"1s"})})}},9548:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return n(1854)}])},9008:function(e,t,n){e.exports=n(639)}},function(e){e.O(0,[774,888,179],(function(){return t=9548,e(e.s=t);var t}));var t=e.O();_N_E=t}]);