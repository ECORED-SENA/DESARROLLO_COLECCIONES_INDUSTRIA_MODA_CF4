(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["comple","chunk-515a8379"],{"0095":function(t,n,a){"use strict";a("95c5")},"13aa":function(t,n,a){"use strict";a.r(n);var o=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"container-fluid banner-interno"},[a("div",{staticClass:"banner-interno__fondo",style:{"background-image":"url("+t.globalData.fondoBannerPrincipal+")"}}),a("div",{staticClass:"container"},[a("div",{staticClass:"banner-interno__titulo py-5"},[t.icono.length?a("div",{staticClass:"banner-interno__titulo__icono me-3"},[a("i",{class:t.icono})]):t._e(),a("h2",{staticClass:"mb-0",domProps:{innerHTML:t._s(t.titulo)}})])])])},r=[],e={name:"BannerInterno",props:{icono:{type:String,default:""},titulo:{type:String,default:""}},data:function(){return{}},computed:{globalData:function(){return this.$config.global}}},i=e,c=(a("0095"),a("2877")),s=Object(c["a"])(i,o,r,!1,null,null,null);n["default"]=s.exports},"159b":function(t,n,a){var o=a("da84"),r=a("fdbc"),e=a("17c2"),i=a("9112");for(var c in r){var s=o[c],l=s&&s.prototype;if(l&&l.forEach!==e)try{i(l,"forEach",e)}catch(u){l.forEach=e}}},"17c2":function(t,n,a){"use strict";var o=a("b727").forEach,r=a("a640"),e=r("forEach");t.exports=e?[].forEach:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}},"3ac0":function(t,n,a){},"857a":function(t,n,a){var o=a("1d80"),r=/"/g;t.exports=function(t,n,a,e){var i=String(o(t)),c="<"+n;return""!==a&&(c+=" "+a+'="'+String(e).replace(r,"&quot;")+'"'),c+">"+i+"</"+n+">"}},"95c5":function(t,n,a){},9911:function(t,n,a){"use strict";var o=a("23e7"),r=a("857a"),e=a("af03");o({target:"String",proto:!0,forced:e("link")},{link:function(t){return r(this,"a","href",t)}})},a640:function(t,n,a){"use strict";var o=a("d039");t.exports=function(t,n){var a=[][t];return!!a&&o((function(){a.call(null,n||function(){throw 1},1)}))}},af03:function(t,n,a){var o=a("d039");t.exports=function(t){return o((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}))}},d81d:function(t,n,a){"use strict";var o=a("23e7"),r=a("b727").map,e=a("1dde"),i=e("map");o({target:"Array",proto:!0,forced:!i},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},dbb5:function(t,n,a){"use strict";a.r(n);var o=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"curso-main-container complementario"},[a("BannerInterno",{attrs:{icono:"far fa-folder-open",titulo:"Material complementario"}}),a("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},[a("div",{staticClass:"table-responsive"},[a("table",[t._m(0),a("tbody",t._l(t.computedData,(function(n,o){return a("tr",{key:"complementario-"+o},[a("td",{attrs:{colspan:"8",scope:"row"},domProps:{innerHTML:t._s(n.texto)}}),a("td",{attrs:{colspan:"2"},domProps:{innerHTML:t._s(n.tipo)}}),a("td",{attrs:{colspan:"2"}},[a("div",{staticClass:"complementario__enlaces"},t._l(n.link,(function(t){return a("a",{staticClass:"complementario__btn",attrs:{href:t,target:"_blank"}},[a("i",{staticClass:"fas fa-external-link-alt"})])})),0)])])})),0)])])])],1)},r=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("thead",[a("tr",[a("th",{attrs:{colspan:"8",scope:"col"}},[t._v("Autor, (año del documento o material), Nombre del documento o material")]),a("th",{attrs:{colspan:"2",scope:"col"}},[t._v("Tipo de material")]),a("th",{attrs:{colspan:"2",scope:"col"}},[t._v("Enlace")])])])}],e=(a("d81d"),a("9911"),a("159b"),a("13aa")),i={name:"MaterialComplementario",components:{BannerInterno:e["default"]},computed:{complementarioData:function(){return this.$config.complementario},computedData:function(){var t=this,n=this.$config.complementario;return n.map((function(n){var a=[];return n.link?"string"===typeof n.link?a.push(n.link):a=n.link:n.descarga&&("string"===typeof n.descarga?a.push(n.descarga):n.descarga.forEach((function(n){a.push(t.obtenerLink(n))}))),{texto:n.texto,tipo:n.tipo,link:a}}))}}},c=i,s=(a("f52b"),a("2877")),l=Object(s["a"])(c,o,r,!1,null,null,null);n["default"]=l.exports},f52b:function(t,n,a){"use strict";a("3ac0")}}]);
//# sourceMappingURL=comple.336ea506.js.map