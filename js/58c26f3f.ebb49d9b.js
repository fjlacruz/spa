(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["58c26f3f"],{"51be":function(t,e,s){"use strict";e["a"]={endpoint:"http://localhost"}},7772:function(t,e,s){},9305:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"q-pa-lg"}),s("div",{staticClass:"row justify-center"},[s("div",{staticClass:"col-12 col-md-8 q-pa-xs"},[s("q-card",{staticClass:"my-card"},[s("q-card-section",[t._v("Registrar Tipo de Servidor")]),s("q-separator",{attrs:{inset:""}}),s("q-form",{attrs:{id:"registrarTipoServidor"},on:{submit:function(e){return e.preventDefault(),t.registrar(e)}}},[s("q-card-section",[s("div",{staticClass:"col-12 col-xs-12 q-pa-xs"},[s("q-input",{staticClass:"uppercase",attrs:{name:"tipo_servidor",id:"tipo_servidor",filled:"",hint:"Tipo Servidor",dense:"dense","lazy-rules":"",rules:[function(t){return t&&t.length>0||"Campo Obligatorio"}]},model:{value:t.tipo_servidor,callback:function(e){t.tipo_servidor=e},expression:"tipo_servidor"}})],1),s("div",{staticClass:"col-6 col-xs-6 q-pa-md"},[t._v("Estatus del Tipo de Servidor")]),s("div",{staticClass:"col-12 col-xs-12 q-pa-xs"},[s("div",{staticClass:"q-gutter-lg"},[s("q-radio",{class:t.estatus,attrs:{dense:"",name:"estatus",id:"estatus",val:"1",label:"Activo"},model:{value:t.estatus,callback:function(e){t.estatus=e},expression:"estatus"}}),s("q-radio",{class:t.estatus,attrs:{dense:"",name:"estatus",id:"estatus",val:"2",label:"Inactivo"},model:{value:t.estatus,callback:function(e){t.estatus=e},expression:"estatus"}})],1),s("input",{attrs:{type:"hidden",name:"estatus"},domProps:{value:t.estatus}}),t._v("\n                 \n              "),s("q-separator",{attrs:{inset:""}}),t._v("   \n              "),s("div",{staticClass:"col-6 col-xs-6 q-pa-xs"},[s("q-btn",{attrs:{"icon-right":"send",label:"Registrar",type:"submit",color:"primary"}}),t._v(" \n                "),s("q-btn",{attrs:{"icon-right":"cancel",label:"Cancelar",type:"submit",color:"orange",to:"/mantenedores/tipoServidores"}})],1)],1)])],1)],1)],1)])])},r=[],o=s("f312"),i=s("bc3a"),n=s.n(i),c=s("51be"),l={name:"registrarTipoServidor",data:function(){return{tipo_servidor:"",estatus:"1"}},computed:{token:function(){return JSON.parse(this.$q.localStorage.getItem("token"))}},methods:{registrar:function(){var t=this,e=document.getElementById("registrarTipoServidor");n.a.post("".concat(c["a"].endpoint,"/api_inventarioit/mantenedores/registrar_TiposServidor"),new FormData(e)).then((function(e){t.respuesta=e.data.response,"success"==t.respuesta?(t.$q.notify({message:"Tipo de Servidor Registrado",color:"teal-6",icon:"warning",position:"bottom-right"}),t.$router.push("/mantenedores")):t.$q.notify({message:"Error en le registro",color:"red-5",icon:"warning",position:"bottom-right"})}))}},created:function(){},mixins:[o["a"]]},d=l,u=(s("bdc8"),s("2877")),p=s("eebe"),v=s.n(p),m=s("f09f"),f=s("a370"),g=s("eb85"),b=s("0378"),q=s("27f9"),h=s("3786"),C=s("9c40"),S=Object(u["a"])(d,a,r,!1,null,null,null);e["default"]=S.exports;v()(S,"components",{QCard:m["a"],QCardSection:f["a"],QSeparator:g["a"],QForm:b["a"],QInput:q["a"],QRadio:h["a"],QBtn:C["a"]})},bdc8:function(t,e,s){"use strict";var a=s("7772"),r=s.n(a);r.a},f312:function(t,e,s){"use strict";e["a"]={created:function(){var t=JSON.parse(this.$q.localStorage.getItem("token"));t||(this.$router.push("/"),this.$q.notify({message:"Estimado Usuario NO se encuentra logueado....!!!",color:"red-5",textColor:"white",icon:"warning",position:"bottom-right"}))}}}}]);