(this["webpackJsonptictactoe-react"]=this["webpackJsonptictactoe-react"]||[]).push([[0],{17:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(8),c=n.n(i),s=(n(17),n(18),n(9)),u=n(10),l=n(12),o=n(11),h=(n(7),n(23)),d=n(24),j=n(27),b=n(25),f=n(26),v=n(1);function O(e){return Object(v.jsxs)("button",{class:"box",onClick:e.onClick,children:[" ",e.val," "]})}var x=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).state={value:Array(9).fill(null),isXsTurn:!0},r}return Object(u.a)(n,[{key:"handleClick",value:function(e){var t=this.state.value.slice();this.state.isXsTurn?t[e]="X":t[e]="O",this.setState({value:t,isXsTurn:!this.state.isXsTurn})}},{key:"renderSquare",value:function(e){var t=this;return Object(v.jsx)(O,{val:this.state.value[e],onClick:function(){return t.handleClick(e)}})}},{key:"render",value:function(){return Object(v.jsxs)(h.a,{fluid:"true",children:[Object(v.jsxs)(d.a,{children:[Object(v.jsx)("h1",{children:"Hello, world!"}),Object(v.jsx)("p",{children:"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."}),Object(v.jsx)("p",{children:Object(v.jsx)(j.a,{variant:"primary",children:"Learn more"})})]}),Object(v.jsx)(b.a,{className:"justify-content-md-center",children:Object(v.jsx)(f.a,{md:"auto",children:Object(v.jsxs)("div",{class:"game-board",children:[this.renderSquare(1),this.renderSquare(2),this.renderSquare(3),this.renderSquare(4),this.renderSquare(5),this.renderSquare(6),this.renderSquare(7),this.renderSquare(8),this.renderSquare(9)]})})})]})}}]),n}(a.a.Component),m=(n(20),[1,2,3,4,5,6,7,8,9]);var S=function(){return Object(v.jsx)(x,{gameArray:m})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)}))};c.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(S,{})}),document.getElementById("root")),p()},7:function(e,t,n){}},[[21,1,2]]]);
//# sourceMappingURL=main.39754ac9.chunk.js.map