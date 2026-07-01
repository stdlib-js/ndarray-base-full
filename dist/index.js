"use strict";var o=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var n=o(function(g,u){
var v=require('@stdlib/ndarray-base-assert-is-scalar-mostly-safe-compatible/dist'),c=require('@stdlib/ndarray-base-empty/dist'),f=require('@stdlib/ndarray-base-from-scalar/dist'),l=require('@stdlib/ndarray-base-assign-scalar/dist'),m=require('@stdlib/error-tools-fmtprodmsg/dist');function q(a,r,e,i){var t,s;if(!v(a,r))throw new TypeError(m('2ljKO',r,a));return t=c(r,e,i),s=f(a,r,i),l([s,t]),t}u.exports=q
});var p=n();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
