webpackJsonp([4],{"+Vrx":function(e,t){},SaQH:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={data:function(){return{name:"",surname:"",phone:"",username:"",email:"",password:"",password_confirmation:""}},methods:{signup:function(){var e=this,t=this.name,a=this.surname,s=this.phone,n=this.username,i=this.email,r=this.password,o=this.password_confirmation;this.axios.post("",{name:t,surname:a,phone:s,username:n,email:i,password:r,password_confirmation:o}).then(function(t){console.log(t),e.$router.push("/analyse")},function(e){console.log(e)})}},components:{Navbar:a("ntvM").default}},n={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"uk-position-relative"},[s("Navbar"),e._v(" "),s("center",[s("vk-card",{staticClass:"uk-width-1-3@m uk-inline"},[s("form",{staticClass:"signup uk-form",on:{submit:function(t){return t.preventDefault(),e.signup(t)}}},[s("a",{attrs:{slot:"center"},slot:"center"},[s("img",{staticClass:"uk-width-1-1@s",attrs:{src:a("u7fc")}})]),e._v(" "),s("h3",[e._v("Sign up")]),e._v(" "),s("div",{staticClass:"uk-margin uk-width-1-1"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"uk-input",attrs:{required:"",type:"text",placeholder:"Name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.surname,expression:"surname"}],staticClass:"uk-input",attrs:{required:"",type:"text",placeholder:"Surname"},domProps:{value:e.surname},on:{input:function(t){t.target.composing||(e.surname=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"uk-margin uk-width-1-1"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],staticClass:"uk-input",attrs:{required:"",type:"number",placeholder:"Phone number"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"uk-margin uk-width-1-1"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"uk-input",attrs:{required:"",type:"text",placeholder:"Username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"uk-margin uk-width-1-1"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"uk-input",attrs:{required:"",type:"email",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"uk-margin uk-width-1-1"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"uk-input",attrs:{required:"",type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"uk-margin uk-width-1-1"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.password_confirmation,expression:"password_confirmation"}],staticClass:"uk-input",attrs:{required:"",type:"password",placeholder:"Password confirmation"},domProps:{value:e.password_confirmation},on:{input:function(t){t.target.composing||(e.password_confirmation=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"uk-margin uk-width-1-1"},[s("a",{staticClass:"uk-width-1-1 uk-button uk-button-primary uk-button-large"},[e._v("Sign up")])])])]),e._v(" "),s("vk-card",{staticClass:"uk-width-1-3@m"},[s("p",[e._v("Have an account? "),s("a",{attrs:{href:"/#/login"}},[e._v("log in")])])])],1)],1)},staticRenderFns:[]};var i=a("VU/8")(s,n,!1,function(e){a("+Vrx")},null,null);t.default=i.exports},u7fc:function(e,t,a){e.exports=a.p+"static/img/main2.3a75d2c.jpg"}});
//# sourceMappingURL=4.bee40b9662765cdf0d88.js.map