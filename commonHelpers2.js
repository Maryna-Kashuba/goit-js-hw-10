import"./assets/styles-8de5b0db.js";import{i as s}from"./assets/vendor-77e16229.js";console.log("Snackbar");function c(t,e){return new Promise((r,a)=>{setTimeout(()=>{e=="fulfilled"?r(`✅ Fulfilled promise in ${t}ms`):a(`❌ Rejected promise in ${t}ms`)},t)})}function m(t){t.preventDefault(),c(n.value,i.value).then(e=>{s.success({pauseOnHover:!1,position:"topRight",message:e,icon:""})}).catch(e=>{s.error({pauseOnHover:!1,position:"topRight",message:e,icon:""})}),n.value="",i.forEach(e=>{e.checked=!1})}const o=document.querySelector(".form"),n=o.elements.delay,i=o.elements.state;o.addEventListener("submit",m);
//# sourceMappingURL=commonHelpers2.js.map
