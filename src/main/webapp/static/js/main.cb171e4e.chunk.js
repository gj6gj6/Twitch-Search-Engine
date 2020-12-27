(this.webpackJsonpfrontend_jupiter=this.webpackJsonpfrontend_jupiter||[]).push([[0],{177:function(e,t,n){},311:function(e,t,n){"use strict";n.r(t);var r=n(5),a=n(0),c=n.n(a),s=n(26),i=n.n(s),o=(n(177),n(50)),l=n(53),u=n(52),d=n(313),h=n(171),j=n(82),f=n(48),m=n(66),b=n(318),p=n(316),O=n(315),g=n(317),x=n(321),y=n(322),v=n(72),S=n.n(v),C=n(120),w="",I="".concat(w,"/login"),F=function(){var e=Object(C.a)(S.a.mark((function e(t){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(I,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(t)});case 2:if(200===(n=e.sent).status){e.next=5;break}throw Error("Fail to log in");case 5:return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k="".concat(w,"/register"),P=function(){var e=Object(C.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(k,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:if(200===e.sent.status){e.next=5;break}throw Error("Fail to register");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E="".concat(w,"/logout"),M=function(){var e=Object(C.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(E,{method:"POST",credentials:"include"});case 2:if(200===e.sent.status){e.next=5;break}throw Error("Fail to log out");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_="".concat(w,"/game"),T=function(){return fetch(_).then((function(e){if(200!==e.status)throw Error("Fail to get top games");return e.json()}))},R="".concat(w,"/game?game_name="),D="".concat(w,"/search?game_id="),L=function(e){return fetch("".concat(D).concat(e)).then((function(e){if(200!==e.status)throw Error("Fail to find the game");return e.json()}))},A=function(e){return function(e){return fetch("".concat(R).concat(e)).then((function(e){if(200!==e.status)throw Error("Fail to find the game");return e.json()}))}(e).then((function(e){if(e&&e.id)return L(e.id);throw Error("Fail to find the game")}))},G="".concat(w,"/favorite"),V=function(){return fetch(G,{credentials:"include"}).then((function(e){if(200!==e.status)throw Error("Fail to get favorite item");return e.json()}))},q="".concat(w,"/recommendation"),N=function(){return fetch(q,{credentials:"include"}).then((function(e){if(200!==e.status)throw Error("Fail to get recommended item");return e.json()}))},J=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={displayModal:!1},e.handleCancel=function(){e.setState({displayModal:!1})},e.signinOnClick=function(){e.setState({displayModal:!0})},e.onFinish=function(t){F(t).then((function(t){e.setState({displayModal:!1}),h.b.success("Welcome back, ".concat(t.name)),e.props.onSuccess()})).catch((function(e){h.b.error(e.message)}))},e.render=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(m.a,{shape:"round",onClick:e.signinOnClick,style:{marginRight:"20px"},children:"Login"}),Object(r.jsx)(p.a,{title:"Log in",visible:e.state.displayModal,onCancel:e.handleCancel,footer:null,destroyOnClose:!0,children:Object(r.jsxs)(O.a,{name:"normal_login",onFinish:e.onFinish,preserve:!1,children:[Object(r.jsx)(O.a.Item,{name:"user_id",rules:[{required:!0,message:"Please input your Username!"}],children:Object(r.jsx)(g.a,{prefix:Object(r.jsx)(x.a,{}),placeholder:"Username"})}),Object(r.jsx)(O.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:Object(r.jsx)(g.a,{prefix:Object(r.jsx)(y.a,{}),placeholder:"Password"})}),Object(r.jsx)(O.a.Item,{children:Object(r.jsx)(m.a,{type:"primary",htmlType:"submit",children:"Login"})})]})})]})},e}return n}(c.a.Component),U=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={displayModal:!1},e.handleCancel=function(){e.setState({displayModal:!1})},e.signupOnClick=function(){e.setState({displayModal:!0})},e.onFinish=function(t){P(t).then((function(){e.setState({displayModal:!1}),h.b.success("Successfully signed up")})).catch((function(e){h.b.error(e.message)}))},e.render=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(m.a,{shape:"round",type:"primary",onClick:e.signupOnClick,children:"Register"}),Object(r.jsx)(p.a,{title:"Register",visible:e.state.displayModal,onCancel:e.handleCancel,footer:null,destroyOnClose:!0,children:Object(r.jsxs)(O.a,{name:"normal_register",initialValues:{remember:!0},onFinish:e.onFinish,preserve:!1,children:[Object(r.jsx)(O.a.Item,{name:"user_id",rules:[{required:!0,message:"Please input your Username!"}],children:Object(r.jsx)(g.a,{prefix:Object(r.jsx)(x.a,{}),placeholder:"Username"})}),Object(r.jsx)(O.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:Object(r.jsx)(g.a,{prefix:Object(r.jsx)(y.a,{}),placeholder:"Password"})}),Object(r.jsx)(O.a.Item,{name:"first_name",rules:[{required:!0,message:"Please input your Firstname!"}],children:Object(r.jsx)(g.a,{placeholder:"firstname"})}),Object(r.jsx)(O.a.Item,{name:"last_name",rules:[{required:!0,message:"Please input your Lastname!"}],children:Object(r.jsx)(g.a,{placeholder:"lastname"})}),Object(r.jsx)(O.a.Item,{children:Object(r.jsx)(m.a,{type:"primary",htmlType:"submit",children:"Register"})})]})})]})},e}return n}(c.a.Component),B=n(319),K=n(323),H=n(324),W=n(325),z=n(326),Q=b.a.SubMenu,X="streams",Y="videos",Z="clips",$=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={displayDrawer:!1},e.onDrawerClose=function(){e.setState({displayDrawer:!1})},e.onFavoriteClick=function(){e.setState({displayDrawer:!0})},e.render=function(){var t=e.props.data,n=t.VIDEO,a=t.STREAM,c=t.CLIP;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(m.a,{type:"primary",shape:"round",onClick:e.onFavoriteClick,icon:Object(r.jsx)(K.a,{}),children:"My Favorites"}),Object(r.jsx)(B.a,{title:"My Favorites",placement:"right",width:720,visible:e.state.displayDrawer,onClose:e.onDrawerClose,children:Object(r.jsxs)(b.a,{mode:"inline",defaultOpenKeys:[X],style:{height:"100%",borderRight:0},selectable:!1,children:[Object(r.jsx)(Q,{icon:Object(r.jsx)(H.a,{}),title:"Streams",children:a.map((function(e){return Object(r.jsx)(b.a.Item,{children:Object(r.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:"".concat(e.broadcaster_name," - ").concat(e.title)})},e.id)}))},X),Object(r.jsx)(Q,{icon:Object(r.jsx)(W.a,{}),title:"Videos",children:n.map((function(e){return Object(r.jsx)(b.a.Item,{children:Object(r.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:"".concat(e.broadcaster_name," - ").concat(e.title)})},e.id)}))},Y),Object(r.jsx)(Q,{icon:Object(r.jsx)(z.a,{}),title:"Clips",children:c.map((function(e){return Object(r.jsx)(b.a.Item,{children:Object(r.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:"".concat(e.broadcaster_name," - ").concat(e.title)})},e.id)}))},Z)]})})]})},e}return n}(c.a.Component),ee=n(329),te=n(330),ne=n(327),re=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={displayModal:!1},e.handleCancel=function(){e.setState({displayModal:!1})},e.searchOnClick=function(){e.setState({displayModal:!0})},e.onSubmit=function(t){A(t.game_name).then((function(t){e.setState({displayModal:!1}),e.props.onSuccess(t)})).catch((function(e){h.b.error(e.message)}))},e.render=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(m.a,{shape:"round",onClick:e.searchOnClick,icon:Object(r.jsx)(ne.a,{}),style:{marginLeft:"20px",marginTop:"20px"},children:"Custom Search "}),Object(r.jsx)(p.a,{title:"Search",visible:e.state.displayModal,onCancel:e.handleCancel,footer:null,children:Object(r.jsxs)(O.a,{name:"custom_search",onFinish:e.onSubmit,children:[Object(r.jsx)(O.a.Item,{name:"game_name",rules:[{required:!0,message:"Please enter a game name"}],children:Object(r.jsx)(g.a,{placeholder:"Game name"})}),Object(r.jsx)(O.a.Item,{children:Object(r.jsx)(m.a,{type:"primary",htmlType:"submit",children:"Search"})})]})})]})},e}return n}(c.a.Component),ae=n(165),ce=n.n(ae),se=n(131),ie=n(117),oe=n(314),le=n(320),ue=n(328),de=se.a.TabPane,he="stream",je="videos",fe="clips",me=function(e,t,n,a){var c="".concat(e.broadcaster_name," - ").concat(e.title),s=n.find((function(t){return t.id===e.id}));return Object(r.jsxs)(r.Fragment,{children:[t&&Object(r.jsx)(ie.a,{title:s?"Remove from favorite list":"Add to favorite list",children:Object(r.jsx)(m.a,{shape:"circle",icon:s?Object(r.jsx)(K.a,{}):Object(r.jsx)(ue.a,{}),onClick:function(){var t;s?(t=e,fetch(G,{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({favorite:t})}).then((function(e){if(200!==e.status)throw Error("Fail to delete favorite item")}))).then((function(){a()})).catch((function(e){h.b.error(e.message)})):function(e){return fetch(G,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({favorite:e})}).then((function(e){if(200!==e.status)throw Error("Fail to add favorite item")}))}(e).then((function(){a()})).catch((function(e){h.b.error(e.message)}))}})}),Object(r.jsx)("div",{style:{overflow:"hidden",textOverflow:"ellipsis",width:450},children:Object(r.jsx)(ie.a,{title:c,children:Object(r.jsx)("span",{children:c})})})]})},be=function(e,t,n,a){return Object(r.jsx)(oe.b,{grid:{xs:1,sm:2,md:4,lg:4,xl:6},dataSource:e,renderItem:function(e){return Object(r.jsx)(oe.b.Item,{style:{marginRight:"20px"},children:Object(r.jsx)(le.a,{title:me(e,t,n,a),children:Object(r.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)("img",{alt:"Placeholder",src:(c=e.thumbnail_url,c.replace("%{height}","252").replace("%{width}","480").replace("{height}","252").replace("{width}","480"))})})})});var c}})},pe=function(e){var t=e.resources,n=e.loggedIn,a=e.favoriteItems,c=e.favoriteOnChange,s=t.VIDEO,i=t.STREAM,o=t.CLIP,l=a.VIDEO,u=a.STREAM,d=a.CLIP;return Object(r.jsxs)(se.a,{defaultActiveKey:he,children:[Object(r.jsx)(de,{tab:"Streams",style:{height:"680px",overflow:"auto"},forceRender:!0,children:be(i,n,u,c)},he),Object(r.jsx)(de,{tab:"Videos",style:{height:"680px",overflow:"auto"},forceRender:!0,children:be(s,n,l,c)},je),Object(r.jsx)(de,{tab:"Clips",style:{height:"680px",overflow:"auto"},forceRender:!0,children:be(o,n,d,c)},fe)]})},Oe=d.a.Header,ge=d.a.Content,xe=d.a.Sider,ye=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={loggedIn:!1,topGames:[],resources:{VIDEO:[],STREAM:[],CLIP:[]},favoriteItems:{VIDEO:[],STREAM:[],CLIP:[]}},e.favoriteOnChange=function(){V().then((function(t){e.setState({favoriteItems:t,loggedIn:!0})})).catch((function(e){h.b.error(e.message)}))},e.onGameSelect=function(t){var n=t.key;"Recommendation"!==n?L(n).then((function(t){e.setState({resources:t})})):N().then((function(t){e.setState({resources:t})}))},e.customSearchOnSuccess=function(t){e.setState({resources:t})},e.signinOnSuccess=function(){V().then((function(t){e.setState({favoriteItems:t,loggedIn:!0})})).catch((function(e){h.b.error(e.message)}))},e.signoutOnClick=function(){M().then((function(){e.setState({loggedIn:!1}),h.b.success("Successfull signed out")})).catch((function(e){h.b.error(e.message)}))},e.componentDidMount=function(){T().then((function(t){e.setState({topGames:t})})).catch((function(e){h.b.error(e.message)}))},e.render=function(){return Object(r.jsxs)(d.a,{children:[Object(r.jsx)(Oe,{children:Object(r.jsxs)(j.a,{justify:"space-between",children:[Object(r.jsx)(f.a,{children:e.state.loggedIn&&Object(r.jsx)($,{data:e.state.favoriteItems})}),Object(r.jsx)(f.a,{children:e.state.loggedIn?Object(r.jsx)(m.a,{shape:"round",onClick:e.signoutOnClick,children:"Logout"}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(J,{onSuccess:e.signinOnSuccess}),Object(r.jsx)(U,{})]})})]})}),Object(r.jsxs)(d.a,{children:[Object(r.jsxs)(xe,{width:300,className:"site-layout-background",children:[Object(r.jsx)(re,{onSuccess:e.customSearchOnSuccess}),Object(r.jsxs)(b.a,{mode:"inline",onSelect:e.onGameSelect,style:{marginTop:"10px"},children:[Object(r.jsx)(b.a.Item,{icon:Object(r.jsx)(ee.a,{}),children:"Recommend for you!"},"Recommendation"),Object(r.jsx)(ce.a,{icon:Object(r.jsx)(te.a,{}),title:"Popular Games",className:"site-top-game-list",children:e.state.topGames.map((function(e){return Object(r.jsxs)(b.a.Item,{style:{height:"50px"},children:[Object(r.jsx)("img",{alt:"Placeholder",src:e.box_art_url.replace("{height}","40").replace("{width}","40"),style:{borderRadius:"50%",marginRight:"20px"}}),Object(r.jsx)("span",{children:e.name})]},e.id)}))},"Popular Games")]})]}),Object(r.jsx)(d.a,{style:{padding:"24px"},children:Object(r.jsx)(ge,{className:"site-layout-background",style:{padding:24,margin:0,height:800,overflow:"auto"},children:Object(r.jsx)(pe,{resources:e.state.resources,loggedIn:e.state.loggedIn,favoriteItems:e.state.favoriteItems,favoriteOnChange:e.favoriteOnChange})})})]})]})},e}return n}(c.a.Component),ve=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,331)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(ye,{})}),document.getElementById("root")),ve()}},[[311,1,2]]]);
//# sourceMappingURL=main.cb171e4e.chunk.js.map