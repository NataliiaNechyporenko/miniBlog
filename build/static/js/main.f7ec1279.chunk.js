(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){e.exports={note:"styles_note__GEFkz",note_body:"styles_note_body__2V8V4",title:"styles_title__3Es7B"}},15:function(e,t,n){e.exports={comment_wrapper:"styles_comment_wrapper__1Dd0D",comments_title:"styles_comments_title__N_7Ty",list:"styles_list__28prg",comment_author:"styles_comment_author__31JIo",comment_text:"styles_comment_text__2cXwT"}},16:function(e,t,n){e.exports={app:"styles_app__1gW3Y",contant_container:"styles_contant_container__3td3D"}},17:function(e,t,n){e.exports={appBar:"styles_appBar__39hXp",contant_conteiner:"styles_contant_conteiner__3R5Tq",appTitle:"styles_appTitle__3xdva",searchInput:"styles_searchInput__XYwBF"}},18:function(e,t,n){e.exports={user_info_block:"styles_user_info_block__2XSUo",user_name:"styles_user_name__1gR-d",user_info:"styles_user_info__FIQ1E"}},21:function(e,t,n){e.exports={note_container:"styles_note_container__8n028",note_title:"styles_note_title__1GVXi",note_body:"styles_note_body__3rMd4"}},25:function(e,t,n){e.exports={panel:"styles_panel__1X35s",title:"styles_title__UCC3g"}},38:function(e,t,n){e.exports={message:"styles_message__wxZNH"}},39:function(e,t,n){e.exports={list:"styles_list__3dkGW"}},41:function(e,t,n){e.exports=n(80)},78:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(33),c=n.n(o),s=n(5),u=n(82),l=n(84),i=n(83),_=n(81),p=function(e){var t=e.type,n=e.name,a=e.value,o=e.placeholder,c=e.onChange,s=e.cls;return r.a.createElement("input",{type:t,name:n,value:a,placeholder:o,onChange:c,className:s})};p.defaultProps={name:"",value:"",type:"text",placeholder:"",cls:"",onChange:function(){return null}};var d=p,m="CHANGE_SEARCH",E=n(17),f=n.n(E),h=function(e){var t=e.currentSearchValue,n=e.onChange,a=e.titleText;return r.a.createElement("div",{className:f.a.appBar},r.a.createElement("div",{className:f.a.contant_conteiner},r.a.createElement(_.a,{to:"/"},r.a.createElement("h1",{className:f.a.appTitle}," ",a," ")),r.a.createElement(l.a,{exact:!0,path:"/",render:function(){return r.a.createElement(d,{cls:f.a.searchInput,placeholder:"Search",onChange:function(e){n(e.target.value)},value:t,name:"search",type:"text"})}})))};h.defaultProps={titleText:"Title here"};var y=Object(s.b)(function(e){return{currentSearchValue:e.searchValue}},function(e){return{onChange:function(t){return e(function(e){return{type:m,payload:e}}(t))}}})(h),v=n(8),T=n(9),S=n(11),b=n(10),N=n(12),O=n(25),g=n.n(O),C=function(e){var t=e.title,n=e.children;return r.a.createElement("div",{className:g.a.panel},""!==t&&r.a.createElement("h2",{className:g.a.title},t),n)};C.defaultProps={title:"",children:{}};var G=C,I=n(14),j=n.n(I),w=function(e){var t=e.id,n=e.body,a=e.title,o=e.userId,c=e.match;return r.a.createElement("div",{className:j.a.note},r.a.createElement(_.a,{to:{pathname:"".concat(c.url,"/").concat(t),state:{userId:"".concat(o)}},className:j.a.title_link},r.a.createElement("h2",{className:j.a.title},a)),r.a.createElement("p",{className:j.a.note_body},n),r.a.createElement(_.a,{to:{pathname:"".concat(c.url,"/").concat(t),state:{userId:"".concat(o)}},className:j.a.link},"Learn more..."))};w.defaultProps={title:"Title",body:"It's must be an article",match:{url:""}};var U=w,B=n(38),D=n.n(B),R=function(e){var t=e.msg;return r.a.createElement("p",{className:D.a.message},t)};R.defaultProps={msg:""};var x=R,M=n(39),A=n.n(M),L=function(e){var t=e.notes,n=e.users;return r.a.createElement("div",{className:A.a.list},0===t.length?r.a.createElement(x,{msg:"There is no notes!"}):t.map(function(e){return r.a.createElement(G,{key:e.id},r.a.createElement(U,Object.assign({},e,{author:n.find(function(t){return t.id===e.userId})})))}))};L.defaultProps={notes:[],users:[]};var k=Object(s.b)(function(e){return{notes:(t=e.notes.data,n=e.searchValue,t.filter(function(e){return e.body.toLowerCase().includes(n.toLowerCase())||e.title.toLowerCase().includes(n.toLowerCase())})),users:e.users};var t,n})(L),Y=n(13),F=n.n(Y),P=function(e){function t(){return Object(v.a)(this,t),Object(S.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(T.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.OnGetNotes)()}},{key:"render",value:function(){return this.props.isLoading?"Loading":r.a.createElement(k,null)}}]),t}(a.Component);P.defaultProps={OnGetNotes:function(){},isLoading:!0};var V=Object(s.b)(function(e){return{isLoading:e.notes.loading}},function(e){return{OnGetNotes:function(){return e(function(e){e({type:"GET_NOTES_START"}),F.a.get("https://jsonplaceholder.typicode.com/posts").then(function(t){var n=t.data;return e({type:"GET_NOTES_SUCCESS",payload:n})}).catch(function(t){return e({type:"GET_NOTES_FAIL",payload:t.response})})})}}})(P),X=n(15),H=n.n(X),J=function(e){function t(){return Object(v.a)(this,t),Object(S.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(T.a)(t,[{key:"componentDidUpdate",value:function(){var e=this.props,t=e.id;(0,e.onGetComments)(t)}},{key:"render",value:function(){var e=this.props.comments;return r.a.createElement("div",{className:H.a.list},r.a.createElement("h3",{className:H.a.comments_title},"Comments:"),0===e.length?r.a.createElement("p",null,"There is no comments!"):e.map(function(e){return r.a.createElement("div",{key:e.id,className:H.a.comment_wrapper},r.a.createElement("p",{className:H.a.comment_author},e.name),r.a.createElement("p",{className:H.a.comment_text},e.body))}))}}]),t}(a.Component);J.defaultProps={id:0,onGetComments:function(){},comments:{id:0,postId:0,title:"Post title",body:"No text"}};var W=Object(s.b)(function(e){return{comments:e.comments.data}},function(e){return{onGetComments:function(t){return e(function(e){return function(t){t({type:"GET_COMMENTS_START"}),F.a.get("https://jsonplaceholder.typicode.com/posts/".concat(e,"/comments")).then(function(e){var n=e.data;return t({type:"GET_COMMENTS_SUCCESS",payload:n})}).catch(function(e){return t({type:"GET_COMMENTS_FAIL",payload:e.response})})}}(t))}}})(J),q=n(1),z=n.n(q),Q=n(18),Z=n.n(Q),K=function(e){function t(){return Object(v.a)(this,t),Object(S.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(T.a)(t,[{key:"componentDidUpdate",value:function(){var e=this.props,t=e.userId;(0,e.onGetUserById)(t)}},{key:"render",value:function(){var e=this.props.user;return r.a.createElement("div",{className:Z.a.user_info_block},r.a.createElement("p",{className:Z.a.user_name},e.username),r.a.createElement("p",{className:Z.a.user_info},e.email),r.a.createElement("p",{className:Z.a.user_info},e.website))}}]),t}(a.Component);K.defaultProps={onGetUserById:function(){},userId:0,user:{id:0,name:"Guest",username:"Guest",website:"",phone:"",email:"",address:z.a.shape({}),company:z.a.shape({})}};var $=Object(s.b)(function(e){return{user:e.user.data}},function(e){return{onGetUserById:function(t){return e(function(e){return function(t){t({type:"GET_USER_BY_ID_START"}),F.a.get("https://jsonplaceholder.typicode.com/users/".concat(e)).then(function(e){var n=e.data;return t({type:"GET_USER_BY_ID_SUCCESS",payload:n})}).catch(function(e){return t({type:"GET_USER_BY_ID_FAIL",payload:e.response})})}}(t))}}})(K),ee=n(21),te=n.n(ee),ne=function(e){function t(){return Object(v.a)(this,t),Object(S.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(T.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;(0,this.props.onGetNoteById)(e)}},{key:"render",value:function(){var e=this.props.oneNote;return r.a.createElement("div",{className:te.a.note_container},r.a.createElement("h1",{className:te.a.note_title},e.title),r.a.createElement($,{userId:e.userId}),r.a.createElement("p",{className:te.a.note_body},e.body),r.a.createElement(W,{id:e.id}))}}]),t}(a.Component);ne.defaultProps={onGetNoteById:function(){},oneNote:{id:0,userId:0,title:"Post title",body:"No text"}};var ae=Object(s.b)(function(e){return{oneNote:e.oneNote.data}},function(e){return{onGetNoteById:function(t){return e(function(e){return function(t){t({type:"GET_NOTE_BY_ID_START"}),F.a.get("https://jsonplaceholder.typicode.com/posts/".concat(e)).then(function(e){var n=e.data;return t({type:"GET_NOTE_BY_ID_SUCCESS",payload:n})}).catch(function(e){return t({type:"GET_NOTE_BY_ID_FAIL",payload:e.response})})}}(t))}}})(ne),re=n(16),oe=n.n(re),ce=function(){return r.a.createElement("div",{className:re.styles.not_found_block},"Sorry page not found")},se=function(){return r.a.createElement("div",{className:oe.a.app},r.a.createElement(y,{titleText:"My mini blog"}),r.a.createElement("main",{className:oe.a.contant_container},r.a.createElement(i.a,null,r.a.createElement(l.a,{exact:!0,path:"/",component:V}),r.a.createElement(l.a,{path:"/:id",component:ae}),r.a.createElement(l.a,{component:ce}))))},ue=n(4),le=n(40);var ie=Object(ue.combineReducers)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"GET_NOTES_SUCCESS":return a;default:return e}},loading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"GET_NOTES_START":return!0;case"GET_NOTES_SUCCESS":return!1;case"GET_NOTES_FAIL":return!0;default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"GET_NOTES_SUCCESS":return null;case"GET_NOTES_FAIL":return a;default:return e}}}),_e="";var pe=Object(ue.combineReducers)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"GET_USER_BY_ID_SUCCESS":return a;default:return e}},loading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"GET_USER_BY_ID_START":return!0;case"GET_USER_BY_ID_SUCCESS":return!1;case"GET_USER_BY_ID_FAIL":return!0;default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"GET_USER_BY_ID_SUCCESS":return null;case"GET_USER_BY_ID_FAIL":return a;default:return e}}});var de=Object(ue.combineReducers)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"GET_NOTE_BY_ID_SUCCESS":return a;default:return e}},loading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"GET_NOTE_BY_ID_START":return!0;case"GET_NOTE_BY_ID_SUCCESS":return!1;case"GET_NOTE_BY_ID_FAIL":return!0;default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"GET_NOTE_BY_ID_SUCCESS":return null;case"GET_NOTE_BY_ID_FAIL":return a;default:return e}}});var me=Object(ue.combineReducers)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"GET_COMMENTS_SUCCESS":return a;default:return e}},loading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"GET_COMMENTS_START":return!0;case"GET_COMMENTS_SUCCESS":return!1;case"GET_COMMENTS_FAIL":return!0;default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"GET_COMMENTS_SUCCESS":return null;case"GET_COMMENTS_FAIL":return a;default:return e}}}),Ee=Object(ue.combineReducers)({notes:ie,user:pe,searchValue:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case m:return a;default:return e}},oneNote:de,comments:me}),fe=function(e){var t=e.dispatch,n=e.getState;return function(e){return function(a){return"function"===typeof a?a(t,n):e(a)}}},he=Object(le.composeWithDevTools)(Object(ue.applyMiddleware)(fe)),ye=Object(ue.createStore)(Ee,he);n(78);c.a.render(r.a.createElement(s.a,{store:ye},r.a.createElement(u.a,{basename:"/miniBlog/build"},r.a.createElement(l.a,{path:"/",component:se}))),document.getElementById("root"))}},[[41,2,1]]]);
//# sourceMappingURL=main.f7ec1279.chunk.js.map