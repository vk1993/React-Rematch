(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){e.exports=n(25)},,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),c=n.n(o),s=(n(18),n(2)),i=n.n(s),l=n(5),u=n(1),m=n(6),h=n(7),d=n(8),f=n(10),p=n(9),v=n(11),w=(n(20),n(21),n(22),function(e){return console.log(e),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{alt:"monstores",src:"https://robohash.org/".concat(e.monstres.id,"?set=set2&size=180x180")}),r.a.createElement("h2",null,e.monstres.name),r.a.createElement("p",null,e.monstres.email)))}),g=function(e){return r.a.createElement("div",{className:"card-list"},e.monsters.map(function(e){return r.a.createElement(w,{key:e.id,monstres:e})}))},E=(n(23),function(e){var t=e.placeholder,n=e.getSearch,a=e.searchField;return r.a.createElement("input",{className:"search",type:"search",name:"searchField",placeholder:t,onChange:n,value:a})}),b=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(f.a)(this,Object(p.a)(t).call(this))).getSearch=function(t){e.setState(Object(m.a)({},e.state,Object(u.a)({},t.target.name,t.target.value)))},e.state={monsters:[],searchField:""},e}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark(function e(){var t=this;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(e){return t.setState({monsters:e})});case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,a=t.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())});return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,'"Monstore" House'),r.a.createElement(E,{getSearch:this.getSearch,placeholder:"Search a Monster",searchField:this.state.searchField}),r.a.createElement(g,{monsters:a}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(24);c.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[12,1,2]]]);
//# sourceMappingURL=main.81c270a2.chunk.js.map