(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["e96530aa"],{"92b5":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._v("Pagina para el inicio")])},o=[],a=i("f312"),r=(i("bc3a"),{name:"inicio",mixins:[a["a"]]}),s=r,c=i("2877"),u=Object(c["a"])(s,n,o,!1,null,null,null);e["default"]=u.exports},f312:function(t,e,i){"use strict";e["a"]={created:function(){var t=JSON.parse(this.$q.localStorage.getItem("token"));t||(this.$router.push("/"),this.$q.notify({message:"Estimado Usuario NO se encuentra logueado....!!!",color:"red-5",textColor:"white",icon:"warning",position:"bottom-right"}))}}}}]);