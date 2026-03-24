"use strict";var o=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var u=o(function(g,s){
var v=require('@stdlib/ndarray-base-assert-is-scalar-mostly-safe-compatible/dist'),c=require('@stdlib/ndarray-base-empty/dist'),f=require('@stdlib/ndarray-base-from-scalar/dist'),l=require('@stdlib/ndarray-base-assign-scalar/dist'),m=require('@stdlib/error-tools-fmtprodmsg/dist');function q(a,r,n,t){var e,i;if(!v(a,r))throw new TypeError(m("invalid argument. The first argument cannot be safely cast to the output array data type. Data type: %s. Value: `%s`.",r,a));return e=c(r,n,t),i=f(a,r,t),l([i,e]),e}s.exports=q
});var p=u();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
