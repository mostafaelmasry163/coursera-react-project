(this.webpackJsonpconfusion=this.webpackJsonpconfusion||[]).push([[0],{152:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s(2),r=s.n(n),a=s(14),i=s.n(a),o=(s(95),s(96),s(97),s(98),s(15)),l=s(16),d=s(18),j=s(17),h=(s(99),s(3)),m=function(){return Object(c.jsxs)("div",{className:"col-12",children:[Object(c.jsx)("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),Object(c.jsx)("p",{children:"Loading ..."})]})},b="http://localhost:3001/",u=s(20);var O=function(e){var t=e.item,s=e.isLoading,n=e.errMess;return s?Object(c.jsx)(m,{}):n?Object(c.jsx)("h4",{children:n}):Object(c.jsx)(u.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"},children:Object(c.jsxs)(h.d,{children:[Object(c.jsx)(h.g,{src:b+t.image,alt:t.name}),Object(c.jsxs)(h.e,{children:[Object(c.jsx)(h.k,{children:t.name}),t.designation?Object(c.jsx)(h.i,{children:t.designation}):null,Object(c.jsx)(h.j,{children:t.description})]})]})})};var x=function(e){return Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"row align-items-start",children:[Object(c.jsx)("div",{className:"col-12 col-md m-1",children:Object(c.jsx)(O,{item:e.dish,isLoading:e.dishesLoading,errMes:e.dishesErrMess})}),Object(c.jsx)("div",{className:"col-12 col-md m-1",children:Object(c.jsx)(O,{item:e.promotion,isLoading:e.promosLoading,errMes:e.promosErrMess})}),Object(c.jsx)("div",{className:"col-12 col-md m-1",children:Object(c.jsx)(O,{item:e.leader,isLoading:e.leadersLoading,errMes:e.leadersErrMess})})]})})},f=s(5);function p(e){var t=e.dish;e.onClick;return Object(c.jsx)(h.d,{children:Object(c.jsxs)(f.b,{to:"/menu/".concat(t.id),children:[Object(c.jsx)(h.g,{width:"100%",src:b+t.image,alt:t.name}),Object(c.jsx)(h.h,{children:Object(c.jsx)(h.k,{children:t.name})})]})})}var g=function(e){var t=e.dishes.dishes.map((function(e){return Object(c.jsx)("div",{className:"col-12 col-md-5 m-1",children:Object(c.jsx)(p,{dish:e})},e.id)}));return e.dishes.isLoading?Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"row",children:Object(c.jsx)(m,{})})}):e.dishes.errMess?Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("h4",{children:e.dishes.errMess})})}):Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)(h.a,{children:[Object(c.jsx)(h.b,{children:Object(c.jsx)(f.b,{to:"/home",children:"Home"})}),Object(c.jsx)(h.b,{active:!0,children:"Menu"})]}),Object(c.jsxs)("div",{className:"col-12",children:[Object(c.jsx)("h3",{className:"offset-5",children:"Menu"}),Object(c.jsx)("hr",{})]})]}),Object(c.jsx)("div",{className:"row",children:t})]})},N=s(19),v=s(8),y=function(e){return e&&e.length},w=function(e){return function(t){return!t||t.length<=e}},M=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var c;return Object(o.a)(this,s),(c=t.call(this,e)).state={isModalOpen:!1},c.handleSubmit=c.handleSubmit.bind(Object(N.a)(c)),c.toggleModal=c.toggleModal.bind(Object(N.a)(c)),c}return Object(l.a)(s,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleSubmit",value:function(e){this.toggleModal(),this.props.postComment(this.props.dishId,e.rating,e.author,e.comment)}},{key:"render",value:function(){var e,t=this;return Object(c.jsxs)("div",{children:[Object(c.jsxs)(h.c,{onClick:this.toggleModal,children:[Object(c.jsx)("span",{className:"fa fa-pencil"})," Submit Comment"]}),Object(c.jsxs)(h.t,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:[Object(c.jsxs)("div",{className:"modal-header",children:[Object(c.jsx)("h5",{className:"modal-title",children:"Submit Comment"}),Object(c.jsx)("button",{type:"button",className:"ml-auto close",onClick:this.toggleModal,children:"\xd7"})]}),Object(c.jsx)(h.u,{children:Object(c.jsxs)(v.LocalForm,{onSubmit:function(e){return t.handleSubmit(e)},children:[Object(c.jsxs)(h.B,{className:"form-group",children:[Object(c.jsx)(h.r,{htmlFor:"rating",className:"ml-3",children:"Rating"}),Object(c.jsx)(h.l,{md:12,children:Object(c.jsxs)(v.Control.select,{model:".rating",id:"rating",name:"rating",className:"form-control",children:[Object(c.jsx)("option",{children:"1"}),Object(c.jsx)("option",{children:"2"}),Object(c.jsx)("option",{children:"3"}),Object(c.jsx)("option",{children:"4"}),Object(c.jsx)("option",{children:"5"})]})})]}),Object(c.jsxs)(h.B,{className:"form-group",children:[Object(c.jsx)(h.r,{htmlFor:"author",className:"ml-3",children:"Your Name"}),Object(c.jsxs)(h.l,{md:12,children:[Object(c.jsx)(v.Control.text,{model:".author",id:"author",name:"author",placeholder:"Your Name",className:"form-control",validators:{required:y,minLength:(e=3,function(t){return t&&t.length>=e}),maxLength:w(15)}}),Object(c.jsx)(v.Errors,{className:"text-danger",model:".author",show:"touched",messages:{required:"Required ",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(c.jsxs)(h.B,{className:"form-group",children:[Object(c.jsx)(h.r,{htmlFor:"comment",className:"ml-3",children:"Comment"}),Object(c.jsx)(h.l,{md:12,children:Object(c.jsx)(v.Control.textarea,{model:".comment",id:"comment",name:"comment",placeholder:"Comment",rows:"6",className:"form-control"})})]}),Object(c.jsx)(h.B,{className:"form-group",children:Object(c.jsx)(h.l,{children:Object(c.jsx)(h.c,{type:"submit",color:"primary",children:"Submit"})})})]})})]})]})}}]),s}(n.Component),k=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"renderDish",value:function(e){return Object(c.jsx)(u.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"},children:Object(c.jsxs)(h.d,{children:[Object(c.jsx)(h.g,{width:"100%",src:b+e.image,alt:e.name}),Object(c.jsxs)(h.e,{children:[Object(c.jsx)(h.k,{children:e.name}),Object(c.jsx)(h.j,{children:e.description})]})]})})}},{key:"renderComments",value:function(e,t,s){return null===e?Object(c.jsx)("div",{}):(e=e.map((function(e){return Object(c.jsx)(u.Fade,{in:!0,children:Object(c.jsxs)("li",{children:[Object(c.jsx)("p",{children:e.comment}),Object(c.jsxs)("p",{children:[" -- ",e.author,", \xa0",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"2-digit"}).format(new Date(e.date))," "]})]},e.id)})})),Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:"Comments"}),Object(c.jsx)("ul",{className:"list-unstyled",children:Object(c.jsx)(u.Stagger,{in:!0,children:e})}),Object(c.jsx)(M,{dishId:s,postComment:t})]}))}},{key:"render",value:function(){return this.props.isLoading?Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"row",children:Object(c.jsx)(m,{})})}):this.props.errMess?Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("h4",{children:this.props.errMess})})}):null!=this.props.dish?Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)(h.a,{children:[Object(c.jsx)(h.b,{children:Object(c.jsx)(f.b,{to:"/home",children:"Home"})}),Object(c.jsx)(h.b,{children:Object(c.jsx)(f.b,{to:"/menu",children:"Menu"})}),Object(c.jsx)(h.b,{active:!0,children:this.props.dish.name})]}),Object(c.jsxs)("div",{className:"col-12",children:[Object(c.jsx)("h2",{className:"offset-5",children:this.props.dish.name}),Object(c.jsx)("hr",{})]})]}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-12 col-md-5 m-1",children:this.renderDish(this.props.dish)}),Object(c.jsx)("div",{className:"col-12 col-md-5 m-1",children:this.renderComments(this.props.comments,this.props.postComment,this.props.dish.id)})]})]}):Object(c.jsx)("div",{})}}]),s}(n.Component),L=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var c;return Object(o.a)(this,s),(c=t.call(this,e)).state={isNavOpen:!1,isModalOpen:!1},c.toggleNav=c.toggleNav.bind(Object(N.a)(c)),c.toggleModal=c.toggleModal.bind(Object(N.a)(c)),c.handleLogin=c.handleLogin.bind(Object(N.a)(c)),c}return Object(l.a)(s,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("Username: "+this.username.value+" password: "+this.password.value+" Remember me: "+this.remember.checked),e.preventDefault()}},{key:"render",value:function(){var e=this;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(h.y,{dark:!0,expand:"md",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(h.A,{onClick:this.toggleNav}),Object(c.jsx)(h.z,{className:"mr-auto",href:"/",children:Object(c.jsx)("img",{src:"assets/images/logo.png",height:"30",width:"41",alt:"logo"})}),Object(c.jsxs)(h.m,{isOpen:this.state.isNavOpen,navbar:!0,children:[Object(c.jsxs)(h.w,{navbar:!0,children:[Object(c.jsx)(h.x,{children:Object(c.jsxs)(f.c,{className:"nav-link",to:"/home",children:[Object(c.jsx)("span",{className:"fa fa-home fa-lg"})," Home"]})}),Object(c.jsx)(h.x,{children:Object(c.jsxs)(f.c,{className:"nav-link",to:"/aboutus",children:[Object(c.jsx)("span",{className:"fa fa-info fa-lg"})," About US"]})}),Object(c.jsx)(h.x,{children:Object(c.jsxs)(f.c,{className:"nav-link",to:"/menu",children:[Object(c.jsx)("span",{className:"fa fa-list fa-lg"})," Menu"]})}),Object(c.jsx)(h.x,{children:Object(c.jsxs)(f.c,{className:"nav-link",to:"/contactus",children:[Object(c.jsx)("span",{className:"fa fa-address-card fa-lg"})," Contact Us"]})})]}),Object(c.jsx)(h.w,{className:"ml-auto",navbar:!0,children:Object(c.jsx)(h.x,{children:Object(c.jsx)(h.c,{outline:!0,onClick:this.toggleModal,children:Object(c.jsx)("span",{className:"fa fa-sign-in fa-lg",children:" LogIn"})})})})]})]})}),Object(c.jsx)(h.q,{children:Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"row row-header",children:Object(c.jsxs)("div",{className:"col-12 col-sm-6",children:[Object(c.jsx)("h1",{children:"Ristorante Con Fusion"}),Object(c.jsx)("p",{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias deserunt eaque rem. Necessitatibus, veniam debitis."})]})})})}),Object(c.jsxs)(h.t,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:[Object(c.jsx)(h.v,{toggle:this.toggleModal,children:"Login"}),Object(c.jsx)(h.u,{children:Object(c.jsxs)(h.n,{onSubmit:this.handleLogin,children:[Object(c.jsxs)(h.o,{children:[Object(c.jsx)(h.r,{htmlFor:"username",children:"UserName"}),Object(c.jsx)(h.p,{type:"text",id:"username",name:"username",innerRef:function(t){return e.username=t}})]}),Object(c.jsxs)(h.o,{children:[Object(c.jsx)(h.r,{htmlFor:"password",children:"Password"}),Object(c.jsx)(h.p,{type:"password",id:"password",name:"password",innerRef:function(t){return e.password=t}})]}),Object(c.jsx)(h.o,{check:!0,children:Object(c.jsxs)(h.r,{check:!0,children:[Object(c.jsx)(h.p,{type:"checkbox",name:"remember",innerRef:function(t){return e.remember=t}}),Object(c.jsx)("i",{children:"Remember Me"})]})}),Object(c.jsx)(h.c,{type:"submit",value:"submit",className:"bg-success",children:"Login"})]})})]})]})}}]),s}(n.Component),C=s(13),E=function(e){return e&&e.length},F=function(e){return function(t){return!t||t.length<=e}},S=function(e){return function(t){return t&&t.length>=e}},T=function(e){return!isNaN(Number(e))},D=function(e){return/^[A-Z0-9.%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},A=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var c;return Object(o.a)(this,s),(c=t.call(this,e)).handleSubmit=c.handleSubmit.bind(Object(N.a)(c)),c}return Object(l.a)(s,[{key:"handleSubmit",value:function(e,t){alert("Current State is: "+JSON.stringify(this.props.feedback)),this.props.postFeedback(e),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this;return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)(h.a,{children:[Object(c.jsx)(h.b,{children:Object(c.jsx)(f.b,{to:"/home",children:"Home"})}),Object(c.jsx)(h.b,{active:!0,children:"Contact Us"})]}),Object(c.jsxs)("div",{className:"col-12",children:[Object(c.jsx)("h2",{className:"offset-5",children:"Contact Us"}),Object(c.jsx)("hr",{})]})]}),Object(c.jsxs)("div",{className:"row row-content",children:[Object(c.jsx)("div",{className:"col-12",children:Object(c.jsx)("h3",{children:"Location Information"})}),Object(c.jsxs)("div",{className:"col-12 col-sm-4 offset-sm-1",children:[Object(c.jsx)("h5",{children:"Our Address"}),Object(c.jsxs)("address",{children:["121, Clear Water Bay Road",Object(c.jsx)("br",{}),"Clear Water Bay, Kowloon",Object(c.jsx)("br",{}),"HONG KONG",Object(c.jsx)("br",{}),Object(c.jsx)("i",{className:"fa fa-phone"}),": +852 1234 5678",Object(c.jsx)("br",{}),Object(c.jsx)("i",{className:"fa fa-fax"}),": +852 8765 4321",Object(c.jsx)("br",{}),Object(c.jsx)("i",{className:"fa fa-envelope"}),":",Object(c.jsx)("a",{href:"mailto:confusion@food.net",children:"confusion@food.net"})]})]}),Object(c.jsx)("div",{className:"col-12 col-sm-6 offset-sm-1",children:Object(c.jsx)("h5",{children:"Map of our Location"})}),Object(c.jsx)("div",{className:"col-12 col-sm-11 offset-sm-1",children:Object(c.jsxs)("div",{className:"btn-group",role:"group",children:[Object(c.jsxs)("a",{role:"button",href:"tel:+85212345678",className:"btn btn-primary",children:[Object(c.jsx)("i",{className:"fa fa-phone"})," Call"]}),Object(c.jsxs)("a",{role:"button",href:"",className:"btn btn-info",children:[Object(c.jsx)("i",{className:"fa fa-skype"})," Skype"]}),Object(c.jsxs)("a",{role:"button",href:"mailto:confusion@food.net",className:"btn btn-success",children:[Object(c.jsx)("i",{className:"fa fa-envelope-o"})," Email"]})]})})]}),Object(c.jsxs)("div",{className:"row row-content",children:[Object(c.jsx)("div",{className:"col-12",children:Object(c.jsx)("h3",{children:"Send us your Feedback"})}),Object(c.jsx)("div",{className:"col-12 col-md-9",children:Object(c.jsxs)(v.Form,{model:"feedback",onSubmit:function(t){return e.handleSubmit(t,e.props.postFeedback)},children:[Object(c.jsxs)(h.B,{className:"form-group",children:[Object(c.jsx)(h.r,{htmlFor:"firstname",md:2,children:"First Name"}),Object(c.jsxs)(h.l,{md:10,children:[Object(c.jsx)(v.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:E,minLength:S(3),maxLength:F(15)}}),Object(c.jsx)(v.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required ",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(c.jsxs)(h.B,{className:"form-group",children:[Object(c.jsx)(h.r,{htmlFor:"lastname",md:2,children:"Last Name"}),Object(c.jsxs)(h.l,{md:10,children:[Object(c.jsx)(v.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:E,minLength:S(3),maxLength:F(15)}}),Object(c.jsx)(v.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required ",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(c.jsxs)(h.B,{className:"form-group",children:[Object(c.jsx)(h.r,{htmlFor:"telnum",md:2,children:"Contact Tel."}),Object(c.jsxs)(h.l,{md:10,children:[Object(c.jsx)(v.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Tel. Number",className:"form-control",validators:{required:E,minLength:S(9),maxLength:F(11),isNumber:T}}),Object(c.jsx)(v.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required ",minLength:"Must be greater than 9 Numbers ",maxLength:"Must be 11 numbers or 9 Numbers",isNumber:"Invalid Tel. Number"}})]})]}),Object(c.jsxs)(h.B,{className:"form-group",children:[Object(c.jsx)(h.r,{htmlFor:"email",md:2,children:"Email"}),Object(c.jsxs)(h.l,{md:10,children:[Object(c.jsx)(v.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:E,validEmail:D}}),Object(c.jsx)(v.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required ",validEmail:"Invalid Email, Must be like example@example.ex"}})]})]}),Object(c.jsxs)(h.B,{className:"form-group",children:[Object(c.jsx)(h.l,{md:{size:6,offset:2},children:Object(c.jsx)("div",{className:"form-check",children:Object(c.jsxs)(h.r,{check:!0,children:[Object(c.jsx)(v.Control.checkbox,{model:".agree",className:"form-check-input",name:"agree"})," "," "," ",Object(c.jsx)("i",{children:"May we contact you?"})]})})}),Object(c.jsx)(h.l,{md:{size:3,offset:1},children:Object(c.jsxs)(v.Control.select,{model:".contactType",name:"contactType",className:"form-control",children:[Object(c.jsx)("option",{children:"Tel."}),Object(c.jsx)("option",{children:"Email"})]})})]}),Object(c.jsxs)(h.B,{className:"form-group",children:[Object(c.jsx)(h.r,{htmlFor:"message",md:2,children:"Your Feedback"}),Object(c.jsx)(h.l,{md:10,children:Object(c.jsx)(v.Control.textarea,{model:".message",id:"message",name:"message",placeholder:"Type Your Feedback",rows:"12",className:"form-control"})})]}),Object(c.jsx)(h.B,{className:"form-group",children:Object(c.jsx)(h.l,{md:{size:10,offset:2},children:Object(c.jsx)(h.c,{type:"submit",color:"primary",children:"Send FeedBack"})})})]})})]})]})}}]),s}(n.Component),I=Object(C.connect)((function(e){return{feedback:e.feedback}}))(A);function R(e){return Object(c.jsx)("div",{className:"col-12",children:Object(c.jsx)(u.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"},children:Object(c.jsx)(u.Fade,{in:!0,children:Object(c.jsxs)(h.s,{tag:"li",children:[Object(c.jsx)(h.s,{left:!0,middle:!0,children:Object(c.jsx)(h.s,{object:!0,src:b+e.leader.image,alt:e.leader.name})}),Object(c.jsxs)(h.s,{body:!0,className:"ml-5",children:[Object(c.jsx)(h.s,{heading:!0,children:e.leader.name}),Object(c.jsx)("p",{children:e.leader.designation}),Object(c.jsx)("br",{}),Object(c.jsx)("p",{children:e.leader.description}),Object(c.jsx)("br",{})]})]})})})},e.leader.id)}var q=function(e){var t=e.leaders.leaders.map((function(e){return Object(c.jsx)(R,{leader:e},e.id)}));return e.leaders.isLoading?Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"row",children:Object(c.jsx)(m,{})})}):e.leaders.errMess?Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("h4",{children:e.leaders.errMess})})}):Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)(h.a,{children:[Object(c.jsx)(h.b,{children:Object(c.jsx)(f.b,{to:"/home",children:"Home"})}),Object(c.jsx)(h.b,{active:!0,children:"About Us"})]}),Object(c.jsxs)("div",{className:"col-12",children:[Object(c.jsx)("h3",{children:"About Us"}),Object(c.jsx)("hr",{})]})]}),Object(c.jsxs)("div",{className:"row row-content",children:[Object(c.jsxs)("div",{className:"col-12 col-md-6",children:[Object(c.jsx)("h2",{children:"Our History"}),Object(c.jsx)("p",{children:"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."}),Object(c.jsxs)("p",{children:["The restaurant traces its humble beginnings to ",Object(c.jsx)("em",{children:"The Frying Pan"}),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan."]})]}),Object(c.jsx)("div",{className:"col-12 col-md-5",children:Object(c.jsxs)(h.d,{children:[Object(c.jsx)(h.f,{className:"bg-primary text-white",children:"Facts At a Glance"}),Object(c.jsx)(h.e,{children:Object(c.jsxs)("dl",{className:"row p-1",children:[Object(c.jsx)("dt",{className:"col-6",children:"Started"}),Object(c.jsx)("dd",{className:"col-6",children:"3 Feb. 2013"}),Object(c.jsx)("dt",{className:"col-6",children:"Major Stake Holder"}),Object(c.jsx)("dd",{className:"col-6",children:"HK Fine Foods Inc."}),Object(c.jsx)("dt",{className:"col-6",children:"Last Year's Turnover"}),Object(c.jsx)("dd",{className:"col-6",children:"$1,250,375"}),Object(c.jsx)("dt",{className:"col-6",children:"Employees"}),Object(c.jsx)("dd",{className:"col-6",children:"40"})]})})]})}),Object(c.jsx)("div",{className:"col-12",children:Object(c.jsx)(h.d,{children:Object(c.jsx)(h.e,{className:"bg-faded",children:Object(c.jsxs)("blockquote",{className:"blockquote",children:[Object(c.jsx)("p",{className:"mb-0",children:"You better cut the pizza in four pieces because I'm not hungry enough to eat six."}),Object(c.jsxs)("footer",{className:"blockquote-footer",children:["Yogi Berra,",Object(c.jsx)("cite",{title:"Source Title",children:"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"})]})]})})})})]}),Object(c.jsxs)("div",{className:"row row-content",children:[Object(c.jsx)("div",{className:"col-12",children:Object(c.jsx)("h2",{children:"Corporate Leadership"})}),Object(c.jsx)("div",{className:"col-12",children:Object(c.jsx)(h.s,{list:!0,children:Object(c.jsx)(u.Stagger,{in:!0,children:t})})})]})]})};var B=function(e){return Object(c.jsx)("div",{className:"footer",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"col-4 offset-1 col-sm-2",children:[Object(c.jsx)("h5",{children:"Links"}),Object(c.jsxs)("ul",{className:"list-unstyled",children:[Object(c.jsx)("li",{children:Object(c.jsx)(f.b,{to:"/aboutus",children:"About"})}),Object(c.jsx)("li",{children:Object(c.jsx)(f.b,{to:"/home",children:"Home"})}),Object(c.jsx)("li",{children:Object(c.jsx)(f.b,{to:"/menu",children:"Menu"})}),Object(c.jsx)("li",{children:Object(c.jsx)(f.b,{to:"/contactus",children:"Contact"})})]})]}),Object(c.jsxs)("div",{className:"col-7 col-sm-5",children:[Object(c.jsx)("h5",{children:"Our Address"}),Object(c.jsxs)("address",{children:["121, Clear Water Bay Road",Object(c.jsx)("br",{}),"Clear Water Bay, Kowloon",Object(c.jsx)("br",{}),"HONG KONG",Object(c.jsx)("br",{}),Object(c.jsx)("i",{className:"fa fa-phone fa-lg"})," Tel.: +852 1234 5678",Object(c.jsx)("br",{}),Object(c.jsx)("i",{className:"fa fa-fax fa-lg"})," Fax: +852 8765 4321",Object(c.jsx)("br",{}),Object(c.jsx)("i",{className:"fa fa-envelope fa-lg"})," Email:",Object(c.jsx)("a",{href:"mailto:confusion@food.net",children:"confusion@food.net"})]})]}),Object(c.jsx)("div",{className:"col-12 col-sm-4 align-self-center",children:Object(c.jsxs)("div",{className:"text-center",children:[Object(c.jsx)("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+",children:Object(c.jsx)("i",{className:"fa fa-google-plus fa-lg"})}),Object(c.jsx)("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id=",children:Object(c.jsx)("i",{className:"fa fa-lg fa-facebook"})}),Object(c.jsx)("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/",children:Object(c.jsx)("i",{className:"fa fa-lg fa-linkedin"})}),Object(c.jsx)("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/",children:Object(c.jsx)("i",{className:"fa fa-lg fa-twitter"})}),Object(c.jsx)("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/",children:Object(c.jsx)("i",{className:"fa fa-lg fa-youtube"})}),Object(c.jsx)("a",{className:"btn btn-social-icon",href:"mailto:",children:Object(c.jsx)("i",{className:"fa fa-lg fa-envelope-o"})})]})})]}),Object(c.jsx)("div",{className:"row justify-content-center",children:Object(c.jsx)("div",{className:"col-auto",children:Object(c.jsx)("p",{children:"\xa9 Copyright 2018 Ristorante Con Fusion"})})})]})})},P="ADD_COMMENT",H="DISHES_LOADING",_="DISHES_FAILED",Y="ADD_DISHES",G="ADD_COMMENTS",U="COMMENTS_FAILED",K="PROMOS_LOADING",W="ADD_PROMOS",z="PROMOS_FAILED",J="LEADERS_LOADING",Z="LEADERS_FAILED",$="ADD_LEADERS",Q=function(e,t,s,c){return function(n){var r={dishId:e,rating:t,author:s,comment:c};return r.date=(new Date).toISOString(),fetch(b+"comments",{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var t=new Error("Error"+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){return n(function(e){return{type:P,payload:e}}(e))})).catch((function(e){alert("your comment could not be posted\n Error: "+e.message)}))}},V=function(){return{type:H}},X=function(e){return{type:_,payload:e}},ee=function(e){return{type:Y,payload:e}},te=function(e){return{type:U,payload:e}},se=function(e){return{type:G,payload:e}},ce=function(){return{type:K}},ne=function(e){return{type:z,payload:e}},re=function(e){return{type:W,payload:e}},ae=function(){return{type:J}},ie=function(e){return{type:$,payload:e}},oe=s(44),le=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchComments(),this.props.fetchPromos(),this.props.fetchLeaders()}},{key:"render",value:function(){var e=this;return Object(c.jsxs)("div",{children:[Object(c.jsx)(L,{}),Object(c.jsx)(oe.TransitionGroup,{children:Object(c.jsx)(oe.CSSTransition,{classNames:"page",timeout:"300",children:Object(c.jsxs)(f.f,{location:this.props.location,children:[Object(c.jsx)(f.e,{path:"/home",component:function(){return Object(c.jsx)(x,{dish:e.props.dishes.dishes.filter((function(e){return e.featured}))[0],dishesLoading:e.props.dishes.isLoading,dishesErrMess:e.props.dishes.errMess,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],promosLoading:e.props.promotions.isLoading,promosErrMess:e.props.promotions.errMess,leader:e.props.leaders.leaders.filter((function(e){return e.featured}))[0],leadersLoading:e.props.leaders.isLoading,leadersErrMess:e.props.leaders.errMess})}}),Object(c.jsx)(f.e,{exact:!0,path:"/menu",component:function(){return Object(c.jsx)(g,{dishes:e.props.dishes})}}),Object(c.jsx)(f.e,{path:"/menu/:dishId",component:function(t){var s=t.match;return Object(c.jsx)(k,{dish:e.props.dishes.dishes.filter((function(e){return e.id===parseInt(s.params.dishId,10)}))[0],isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.errMess,comments:e.props.comments.comments.filter((function(e){return e.dishId===parseInt(s.params.dishId,10)})),commentsErrMess:e.props.comments.errMess,postComment:e.props.postComment})}}),Object(c.jsx)(f.e,{exact:!0,path:"/contactus",component:function(){return Object(c.jsx)(I,{resetFeedbackForm:e.props.resetFeedbackForm,postFeedback:e.props.postFeedback})}}),Object(c.jsx)(f.e,{exact:!0,path:"/aboutus",component:function(){return Object(c.jsx)(q,{leaders:e.props.leaders})}}),Object(c.jsx)(f.d,{to:"/home"})]})},this.props.location.key)}),Object(c.jsx)(B,{})]})}}]),s}(n.Component),de=Object(f.g)(Object(C.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}}),(function(e){return{postComment:function(t,s,c,n){return e(Q(t,s,c,n))},fetchDishes:function(){e((function(e){return e(V(!0)),fetch(b+"dishes").then((function(e){if(e.ok)return e;var t=new Error("Error"+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(ee(t))})).catch((function(t){return e(X(t.message))}))}))},resetFeedbackForm:function(){e(v.actions.reset("feedback"))},fetchComments:function(){e((function(e){return fetch(b+"comments").then((function(e){if(e.ok)return e;var t=new Error("Error"+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(se(t))})).catch((function(t){return e(te(t.message))}))}))},fetchPromos:function(){e((function(e){return e(ce(!0)),fetch(b+"promotions").then((function(e){if(e.ok)return e;var t=new Error("Error"+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(re(t))})).catch((function(t){return e(ne(t.message))}))}))},fetchLeaders:function(){e((function(e){return e(ae(!0)),fetch(b+"leaders").then((function(e){if(e.ok)return e;var t=new Error("Error"+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(ie(t))})).catch((function(t){return e(X(t.message))}))}))},postFeedback:function(t){e(function(e){return function(t){var s={feedback:e};return s.date=(new Date).toISOString(),fetch(b+"feedback",{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var t=new Error("Error"+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){return t(function(e){return{type:"ADD_FEEDBACK",payload:e}}(e))})).catch((function(e){alert("your feedback could not be posted\n Error: "+e.message)}))}}(t))}}}))(le)),je=s(6),he=s(22),me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,dishes:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y:return Object(je.a)(Object(je.a)({},e),{},{isLoading:!1,errMess:null,dishes:t.payload});case H:return Object(je.a)(Object(je.a)({},e),{},{isLoading:!0,errMess:null,dishes:[]});case _:return Object(je.a)(Object(je.a)({},e),{},{isLoading:!1,errMess:t.payload,dishes:[]});default:return e}},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return Object(je.a)(Object(je.a)({},e),{},{isLoading:!1,errMess:null,comments:t.payload});case U:return Object(je.a)(Object(je.a)({},e),{},{isLoading:!1,errMess:t.payload,comments:[]});case P:var s=t.payload;return Object(je.a)(Object(je.a)({},e),{},{comments:e.comments.concat(s)});default:return e}},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,promotions:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W:return Object(je.a)(Object(je.a)({},e),{},{isLoading:!1,errMess:null,promotions:t.payload});case K:return Object(je.a)(Object(je.a)({},e),{},{isLoading:!0,errMess:null,promotions:[]});case z:return Object(je.a)(Object(je.a)({},e),{},{isLoading:!1,errMess:t.payload,promotions:[]});default:return e}},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,leaders:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $:return Object(je.a)(Object(je.a)({},e),{},{isLoading:!1,errMess:null,leaders:t.payload});case J:return Object(je.a)(Object(je.a)({},e),{},{isLoading:!0,errMess:null,leaders:[]});case Z:return Object(je.a)(Object(je.a)({},e),{},{isLoading:!1,errMess:t.payload,leaders:[]});default:return e}},xe=s(88),fe=s.n(xe),pe=s(89),ge=s.n(pe),Ne={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:""},ve=Object(he.createStore)(Object(he.combineReducers)(Object(je.a)({dishes:me,comments:be,promotions:ue,leaders:Oe},Object(v.createForms)({feedback:Ne}))),Object(he.applyMiddleware)(fe.a,ge.a)),ye=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(c.jsx)(C.Provider,{store:ve,children:Object(c.jsx)(f.a,{children:Object(c.jsx)("div",{children:Object(c.jsx)(de,{})})})})}}]),s}(n.Component),we=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,153)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,a=t.getTTFB;s(e),c(e),n(e),r(e),a(e)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(ye,{})}),document.getElementById("root")),we()},98:function(e,t,s){},99:function(e,t,s){}},[[152,1,2]]]);
//# sourceMappingURL=main.b14a0da3.chunk.js.map