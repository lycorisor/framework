(()=>{var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var s in r)e.o(r,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:r[s]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};(()=>{"use strict";e.r(t),e.d(t,{extend:()=>m});const r=flarum.reg.get("core","admin/app");var s=e.n(r);const a=flarum.reg.get("core","common/extenders");var i=e.n(a);const n=flarum.reg.get("core","common/query/IGambit"),o=flarum.reg.get("core","common/app");var c=e.n(o);class l extends n.BooleanGambit{key(){return c().translator.trans("flarum-sticky.lib.gambits.discussions.sticky.key",{},!0)}filterKey(){return"sticky"}}flarum.reg.add("flarum-sticky","common/query/discussions/StickyGambit",l);const m=[(new(i().Search)).gambit("discussions",l)];s().initializers.add("flarum-sticky",(()=>{s().extensionData.for("flarum-sticky").registerPermission({icon:"fas fa-thumbtack",label:s().translator.trans("flarum-sticky.admin.permissions.sticky_discussions_label"),permission:"discussion.sticky"},"moderate",95).registerSetting({type:"switch",setting:"flarum-sticky.config.enable_display_excerpt",label:s().translator.trans("flarum-sticky.admin.settings.enable_display_excerpt")},100)}))})(),module.exports=t})();
//# sourceMappingURL=admin.js.map