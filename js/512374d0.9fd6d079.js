(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["512374d0"],{"4ab6":function(t,e,a){"use strict";var s=a("ea6c"),o=a.n(s);o.a},"51be":function(t,e,a){"use strict";e["a"]={endpoint:"http://localhost"}},b051:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"q-pa-lg"}),a("div",{staticClass:"row justify-center"},[a("div",{staticClass:"col-12 col-md-8 q-pa-xs"},[a("q-card",{staticClass:"my-card"},[a("q-card-section",[t._v("Editar Tipo de Software")]),a("q-form",{attrs:{id:"editarTipoSoftware"},on:{submit:function(e){return e.preventDefault(),t.editar(e)}}},[a("input",{attrs:{type:"hidden",name:"id_tipo_software"},domProps:{value:t.$route.params.id_tipo_software}}),a("q-separator",{attrs:{inset:""}}),a("q-card-section",[a("div",{staticClass:"col-12 col-xs-12 q-pa-xs"},[a("q-input",{staticClass:"uppercase",attrs:{name:"descripcion_software",id:"descripcion_software",filled:"",hint:"Tipo de Software",dense:"dense",value:t.formEditar.descripcion_software,"lazy-rules":"",rules:[function(t){return t&&t.length>0||"Campo Obligatorio"}]},model:{value:t.formEditar.descripcion_software,callback:function(e){t.$set(t.formEditar,"descripcion_software",e)},expression:"formEditar.descripcion_software"}})],1),a("div",{staticClass:"col-6 col-xs-6 q-pa-md"},[t._v("Estatus del Tipo de Software")]),a("div",{staticClass:"col-12 col-xs-12 q-pa-xs"},[a("div",{staticClass:"q-gutter-lg"},[a("q-radio",{class:t.estatus,attrs:{dense:"",name:"estatus",id:"estatus",val:"1",label:"Activo"},model:{value:t.estatus,callback:function(e){t.estatus=e},expression:"estatus"}}),a("q-radio",{class:t.estatus,attrs:{dense:"",name:"estatus",id:"estatus",val:"2",label:"Inactivo"},model:{value:t.estatus,callback:function(e){t.estatus=e},expression:"estatus"}})],1),a("input",{attrs:{type:"hidden",name:"estatus"},domProps:{value:t.estatus}})]),t._v(" \n            "),a("q-separator",{attrs:{inset:""}}),t._v(" \n            "),a("div",{staticClass:"col-6 col-xs-6 q-pa-xs"},[a("q-btn",{attrs:{"icon-right":"send",label:"Editar",type:"submit",color:"primary"}}),t._v(" \n              "),a("q-btn",{attrs:{"icon-right":"cancel",label:"Cancelar",type:"submit",color:"orange",to:"/mantenedores/tipoSoftware"}})],1)],1)],1)],1)],1)])])},o=[],i=a("f312"),r=a("bc3a"),n=a.n(r),c=a("51be"),d={name:"editar",data:function(){return{tab:"tipoSoftware",formEditar:{},id_tipo_software:"",estatus:"",descripcion_software:""}},computed:{token:function(){return JSON.parse(this.$q.localStorage.getItem("token"))}},methods:{getId:function(){var t=this,e=this.$route.params.id_tipo_software;n.a.get("".concat(c["a"].endpoint,"/api_inventarioit/mantenedores/getTipoSoftware?id_tipo_software=")+e).then((function(e){t.formEditar=e.data.response[0],t.id_tipo_software=e.data.response[0].id_servicio,t.descripcion_software=e.data.response[0].descripcion_software,t.estatus=e.data.response[0].estatus}))},editar:function(){var t=this;null==this.formEditar.descripcion_software&&this.$q.notify({message:"Debe completar todos los campos del formulario",color:"red-5",icon:"warning",position:"bottom-right"});var e=document.getElementById("editarTipoSoftware");n.a.post("".concat(c["a"].endpoint,"/api_inventarioit/mantenedores/editarTipoSoftware"),new FormData(e)).then((function(e){t.respuesta=e.data,"success"==e.data.response?(t.$q.notify({message:"Tipo de software editado",color:"teal-6",icon:"warning",position:"bottom-right"}),t.$router.push("/mantenedores/"+t.tab)):t.$q.notify({message:"No se han detectado cambios",color:"red-5",icon:"warning",position:"bottom-right"})}))}},created:function(){this.getId()},mixins:[i["a"]]},l=d,p=(a("4ab6"),a("2877")),u=a("eebe"),f=a.n(u),m=a("f09f"),w=a("a370"),v=a("0378"),b=a("eb85"),_=a("27f9"),h=a("3786"),g=a("9c40"),q=Object(p["a"])(l,s,o,!1,null,null,null);e["default"]=q.exports;f()(q,"components",{QCard:m["a"],QCardSection:w["a"],QForm:v["a"],QSeparator:b["a"],QInput:_["a"],QRadio:h["a"],QBtn:g["a"]})},ea6c:function(t,e,a){},f312:function(t,e,a){"use strict";e["a"]={created:function(){var t=JSON.parse(this.$q.localStorage.getItem("token"));t||(this.$router.push("/"),this.$q.notify({message:"Estimado Usuario NO se encuentra logueado....!!!",color:"red-5",textColor:"white",icon:"warning",position:"bottom-right"}))}}}}]);