(window.webpackJsonp=window.webpackJsonp||[]).push([[5,8],{397:function(t,e,r){var content=r(411);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(53).default)("15fa2827",content,!0,{sourceMap:!1})},404:function(t,e,r){"use strict";r.r(e);var o=r(7).default.extend({props:{title:{type:String,default:""},subtitle:{type:String,default:""},px:{type:String,default:"3.5rem"},py:{type:String,default:"2.5rem"}}}),n=(r(410),r(51)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"demo-card shadow-purple rounded-lg",style:{"padding-left":t.px,"padding-right":t.px,"padding-top":t.py,"padding-bottom":t.py}},[t.title||t.subtitle?r("div",{staticClass:"mb-5 mt-3 mt-md-0"},[t.title?r("h1",{class:{"mb-3":!!t.subtitle}},[t._v("\n      "+t._s(t.title)+"\n    ")]):t._e(),t._v(" "),t.subtitle?r("p",[t._v("\n      "+t._s(t.subtitle)+"\n    ")]):t._e()]):t._e(),t._v(" "),t._t("default")],2)}),[],!1,null,"baf1c10e",null);e.default=component.exports},410:function(t,e,r){"use strict";r(397)},411:function(t,e,r){var o=r(52)(!1);o.push([t.i,".demo-card[data-v-baf1c10e]{background-color:#242629}@media (max-width:575px){.demo-card[data-v-baf1c10e]{padding:.75rem .75rem 1.5rem!important}}",""]),t.exports=o},416:function(t,e,r){var content=r(455);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(53).default)("b579a2fe",content,!0,{sourceMap:!1})},454:function(t,e,r){"use strict";r(416)},455:function(t,e,r){var o=r(52)(!1);o.push([t.i,".integrity-overview .integrity-overview-card[data-v-54e633a0]{max-width:620px;margin:0 auto 2rem}.integrity-overview .label[data-v-54e633a0]{color:#adb5bd;display:block;font-size:.875rem;line-height:1}.integrity-overview p[data-v-54e633a0]{display:flex;align-items:center;margin-bottom:1.5rem;word-break:break-word;word-wrap:break-word}",""]),t.exports=o},474:function(t,e,r){"use strict";r.r(e);var o=r(7),n=r(404),d=o.default.extend({components:{CustomCard:n.default},props:{data:{type:Object,default:function(){return{id:"",tag:"",hash:"",txid:"",verified:!0,createdAt:""}},required:!0},verify:{type:Boolean,default:!1},title:{type:String,default:""}},data:function(){return{clipboardText:"Copy to clipboard"}},methods:{copyToClipboard:function(text){var t=this;this.clipboardText="Copied!",setTimeout((function(){t.clipboardText="Copy to clipboard"}),5e3),navigator.clipboard.writeText(text)}}}),l=(r(454),r(51)),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"integrity-overview"},[r("custom-card",{staticClass:"integrity-overview-card",attrs:{px:"2rem",py:"1rem"}},[r("div",{staticClass:"text-center my-3"},[t.data.verified?[r("b-img",{staticClass:"mb-3",attrs:{src:"/img/at-checkmark.svg",width:"36",height:"31",fluid:""}}),t._v(" "),r("h4",{staticClass:"mb-4"},[t._v(t._s(t.title||"Integrity confirmed"))])]:[r("b-img",{staticClass:"mb-3",attrs:{src:"/img/at-close.svg",width:"36",height:"31",fluid:""}}),t._v(" "),r("h4",{staticClass:"mb-4"},[t._v(t._s(t.title||"Integrity compromised"))])]],2),t._v(" "),!t.verify&&t.data.id?r("p",[r("span",[r("span",{staticClass:"label"},[t._v("ID")]),t._v(" "),r("span",[t._v(t._s(t.data.id))])])]):t._e(),t._v(" "),t.data.tag?r("p",[r("span",[r("span",{staticClass:"label"},[t._v("Tag")]),t._v(" "),r("span",[t._v(t._s(t.data.tag))])]),t._v(" "),r("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.ds500",modifiers:{ds500:!0}}],staticClass:"btn-clipboard ml-1",attrs:{variant:"outline-primary",title:t.clipboardText},on:{click:function(e){return t.copyToClipboard(t.data.tag)}}},[r("b-icon",{attrs:{icon:"files"}})],1)],1):t._e(),t._v(" "),!t.verify&&t.data.hash?r("p",[r("span",[r("span",{staticClass:"label"},[t._v("Hash")]),t._v(" "),r("span",[t._v(t._s(t.data.hash))])])]):t._e(),t._v(" "),t.verify?r("p",[r("span",[r("span",{staticClass:"label"},[t._v("Transaction ID")]),t._v(" "),t.data.txid?r("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.ds500",modifiers:{ds500:!0}}],attrs:{href:"https://moonbase.moonscan.io/tx/"+t.data.txid,target:"_blank",title:"Open transaction"}},[t._v("\n          "+t._s(t.data.txid)+"\n        ")]):r("span",[t._v("\n          Not yet anchored\n          "),r("b-spinner",{staticClass:"ml-1",staticStyle:{"margin-bottom":"2px"},attrs:{variant:"primary",small:""}}),t._v(" "),r("br"),t._v("\n          Anchored period once per hour\n        ")],1)])]):t._e(),t._v(" "),t.data.createdAt?r("p",[r("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.bottom.ds500",modifiers:{bottom:!0,ds500:!0}}],staticClass:"label d-inline-block",attrs:{title:t.data.createdAt}},[t._v("\n        @ "+t._s(t._f("formatDate")(t.data.createdAt))+"\n      ")])]):t._e()])],1)}),[],!1,null,"54e633a0",null);e.default=component.exports}}]);