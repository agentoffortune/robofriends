(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{19:function(e,t,n){e.exports=n(34)},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(4),c=n.n(o),s=n(8),i=n(3),l=n(17),u=n(18),h=(n(28),n(5)),d=n(6),E=n(9),m=n(7),b=n(10),f=(n(29),function(e){var t=e.id,n=e.name,r=e.email;return a.a.createElement("div",{className:"card"},a.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(t,"?set=set3&size=200x200")}),a.a.createElement("div",null,a.a.createElement("h2",null,n),a.a.createElement("p",null,r)))}),p=(n(30),function(e){var t=e.robots,n=t.map((function(e,n){return a.a.createElement(f,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})}));return a.a.createElement("div",{className:"container tc"},n)}),g=(n(31),function(e){e.searchField;var t=e.searchChange;return a.a.createElement("input",{type:"search",className:"textbox",name:"searchBox",defaultValue:"Search Robots",onChange:t})}),O=function(e){return a.a.createElement("div",{style:{overflowY:"scroll",textAlign:"center",height:"500px",display:"flex",alignContent:"center"}},e.children)},v=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(E.a)(this,Object(m.a)(t).call(this,e))).state={hasError:!1},n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Ooops! Something went wrong!"):this.props.children}}]),t}(a.a.Component),R=(n(32),function(e){function t(){return Object(h.a)(this,t),Object(E.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,o=e.isPending,c=r.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return o?a.a.createElement("h1",null,"Loading, please wait..."):a.a.createElement("div",{className:"container tc"},a.a.createElement("h1",{className:"f1"},"RoboFriends"),a.a.createElement(g,{searchChange:n}),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(O,null,a.a.createElement(v,null,a.a.createElement(p,{robots:c}))))}}]),t}(a.a.Component)),S=Object(s.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))(R);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(33);var y={searchField:""},j={isPending:!1,robots:[],error:""},C=Object(l.createLogger)(),w=Object(i.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),_=Object(i.d)(w,Object(i.a)(u.a,C));c.a.render(a.a.createElement(s.a,{store:_},a.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.dcaa09dd.chunk.js.map