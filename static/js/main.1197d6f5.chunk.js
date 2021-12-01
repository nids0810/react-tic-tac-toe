(this["webpackJsonpreact-tic-tac-toe"]=this["webpackJsonpreact-tic-tac-toe"]||[]).push([[0],{15:function(e,a,t){},16:function(e,a,t){},18:function(e,a,t){"use strict";t.r(a);var c=t(1),n=t.n(c),s=t(10),r=t.n(s),o=(t(15),t(4)),i=t(3),l=(t(16),t(2)),p=t(0),j=function(e){var a=e.item;return"x"===a?Object(p.jsx)(l.c,{className:"gameXIcon"}):"o"===a?Object(p.jsx)(l.b,{className:"gameOIcon"}):null},b=function(e){var a=e.botStatus,t=e.setBotStatus;return Object(p.jsxs)("div",{className:"appBotSwitch",children:[Object(p.jsxs)("div",{className:a?"appSwitchBtn selected":"appSwitchBtn",onClick:function(){return t(!a)},children:[Object(p.jsx)(l.e,{className:"appBotSwitchIcon"}),Object(p.jsx)("span",{children:"BOT"})]}),Object(p.jsxs)("div",{className:a?"appSwitchBtn":"appSwitchBtn selected",onClick:function(){return t(!a)},children:[Object(p.jsx)(l.d,{className:"appBotSwitchIcon"}),Object(p.jsx)("span",{children:"2PLAYERS"})]})]})},u=t.p+"static/media/logo.1ef0b2dd.png",m=t(9),d=t(7),O=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],h=function(e,a){var t={player:[],opponent:[],empty:[]};return e.forEach((function(e,c){e===a?t.player.push(c):""===e?t.empty.push(c):t.opponent.push(c)})),t},x=function(e){var a={status:!1,combination:[]},t=0;if(e.length>=3){var c,n=Object(d.a)(O);try{for(n.s();!(c=n.n()).done;){var s,r=c.value,o=Object(d.a)(r);try{for(o.s();!(s=o.n()).done;){var i=s.value;if(-1===e.indexOf(i))break;t+=1}}catch(l){o.e(l)}finally{o.f()}if(3===t){a.status=!0,a.combination=r;break}t=0}}catch(l){n.e(l)}finally{n.f()}}return a},f=function(e){return e.empty[Math.floor(Math.random()*e.empty.length)]},S=function(e){var a,t=-1,c=Object(d.a)(e.empty);try{for(c.s();!(a=c.n()).done;){var n=a.value,s=[].concat(Object(m.a)(e.opponent),[n]);if(x(s).status){t=n;break}}}catch(r){c.e(r)}finally{c.f()}return t},v=function(e){var a,t=-1,c=Object(d.a)(e.empty);try{for(c.s();!(a=c.n()).done;){var n=a.value,s=[].concat(Object(m.a)(e.player),[n]);if(x(s).status){t=n;break}}}catch(r){c.e(r)}finally{c.f()}return t},N=["","","","","","","","",""];var g=function(){var e=Object(c.useState)(["","","","","","","","",""]),a=Object(i.a)(e,2),t=a[0],n=a[1],s=Object(c.useState)("x"),r=Object(i.a)(s,2),m=r[0],d=r[1],O=Object(c.useState)(!1),g=Object(i.a)(O,2),y=g[0],C=g[1],w=Object(c.useState)("Start the Game"),G=Object(i.a)(w,2),B=G[0],T=G[1],k=Object(c.useState)({gameCount:0,xScore:0,oScore:0,drawScore:0}),P=Object(i.a)(k,2),I=P[0],D=P[1],F=Object(c.useState)([]),H=Object(i.a)(F,2),E=H[0],L=H[1],M=Object(c.useState)(!0),X=Object(i.a)(M,2),J=X[0],W=X[1],A=Object(c.useCallback)((function(e){if(""===t[e]){var a=t;a[e]=m,n(a);var c=function(e,a){var t={status:!0,winner:null,combination:[]},c=h(e,a),n=x(c.player);return n.status?t={status:!1,winner:a,combination:n.combination}:0===c.empty.length&&(t={status:!1,winner:null,combination:[]}),t}(t,m);c.status?d("x"===m?"o":"x"):(C(c.status),3===c.combination.length&&L(c.combination),"x"===c.winner?(T("Winner: Player X"),D(Object(o.a)(Object(o.a)({},I),{},{xScore:I.xScore+1,gameCount:I.gameCount+1}))):"o"===c.winner?(T("Winner: Player O"),D(Object(o.a)(Object(o.a)({},I),{},{oScore:I.oScore+1,gameCount:I.gameCount+1}))):(T("It's a draw"),D(Object(o.a)(Object(o.a)({},I),{},{drawScore:I.drawScore+1,gameCount:I.gameCount+1}))))}else console.log(e+" is already occupied")}),[t,I,m]);Object(c.useEffect)((function(){J&&"o"===m&&y&&A(function(e,a){var t=h(e,a),c=v(t);return-1===c&&(c=S(t)),-1===c&&(c=f(t)),c}(t,m))}),[t,y,J,m,A]);var R=function(e){var a=!1;return 3===E.length&&-1!==E.indexOf(e)&&(a=!0),a};return Object(p.jsxs)("div",{className:"app",children:[Object(p.jsxs)("div",{className:"appHeader",children:[Object(p.jsxs)("div",{className:"appTitle",children:[Object(p.jsx)("img",{className:"appLogo",src:u,alt:"logo"}),Object(p.jsx)("span",{children:"Tic Tac Toe"})]}),Object(p.jsx)(b,{botStatus:J,setBotStatus:W}),y&&Object(p.jsxs)("h4",{className:"appSubTitle",children:["Turn: Player ",m.toUpperCase()]}),!y&&Object(p.jsx)("h4",{className:"appSubTitle",children:B})]}),Object(p.jsxs)("div",{className:"appBody",children:[Object(p.jsxs)("div",{className:"appGame",children:[!y&&Object(p.jsx)("div",{className:"appBtnContainer",children:Object(p.jsx)(l.a,{className:"appPlayBtn",onClick:function(){n([].concat(N)),d("x"),C(!0),T("Start the Game"),L([])}})}),t.map((function(e,a){return Object(p.jsx)("div",{className:R(a)?"appGameCell selected":"appGameCell",onClick:function(){return A(a)},children:Object(p.jsx)(j,{item:e})},a)}))]}),Object(p.jsxs)("div",{className:"appGameStats",children:[Object(p.jsxs)("div",{className:"appGameScore",children:[Object(p.jsx)("span",{className:"appGameScoreHeader",children:"Game #"}),Object(p.jsx)("span",{className:"appGameScoreData",children:I.gameCount})]}),Object(p.jsxs)("div",{className:"appGameScore",children:[Object(p.jsx)("span",{className:"appGameScoreHeader",children:"Player X"}),Object(p.jsx)("span",{className:"appGameScoreData",children:I.xScore})]}),Object(p.jsxs)("div",{className:"appGameScore",children:[Object(p.jsx)("span",{className:"appGameScoreHeader",children:"Player O"}),Object(p.jsx)("span",{className:"appGameScoreData",children:I.oScore})]}),Object(p.jsxs)("div",{className:"appGameScore",children:[Object(p.jsx)("span",{className:"appGameScoreHeader",children:"Draw"}),Object(p.jsx)("span",{className:"appGameScoreData",children:I.drawScore})]})]})]}),Object(p.jsx)("footer",{className:"appFooter",children:Object(p.jsx)("span",{children:"Copyright \xa9 2021 Tic Tac Toe | Nidhi Singh"})})]})},y=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,19)).then((function(a){var t=a.getCLS,c=a.getFID,n=a.getFCP,s=a.getLCP,r=a.getTTFB;t(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(g,{})}),document.getElementById("root")),y()}},[[18,1,2]]]);
//# sourceMappingURL=main.1197d6f5.chunk.js.map