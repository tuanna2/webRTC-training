!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){const r=n(1),o=n(2);document.getElementById("btn-start").addEventListener("click",e=>{r(),e.preventDefault}),document.getElementById("btn-hu").addEventListener("click",e=>{stopStreamedVideo(document.getElementById("localStream")),e.preventDefault}),o()},function(e,t){e.exports=(async()=>{try{const e=await navigator.mediaDevices.getUserMedia({audio:!0,video:!0});handleSuccess(e)}catch(e){handleError(e)}}),stopStreamedVideo=(e=>{e.srcObject.getTracks().forEach(e=>{e.stop()}),e.srcObject=null}),handleSuccess=(e=>{const t=document.getElementById("localStream");t.srcObject=e,t.onloadedmetadata=(()=>{t.play()})}),handleError=(e=>{"NotAllowedError"==e.name?alert("Permissions have not been granted to use your camera and microphone"):alert(e.name)})},function(e,t){e.exports=(()=>{const e=document.getElementById("localStream"),t=document.getElementById("filter"),n=window.canvas=document.getElementById("canvas");t.onchange=(()=>{e.className=t.value}),document.getElementById("btn-canvas").addEventListener("click",()=>{n.width=e.videoWidth,n.height=e.videoHeight,n.className=t.value,n.getContext("2d").drawImage(e,0,0,n.width,n.height)})})}]);