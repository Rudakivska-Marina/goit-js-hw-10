import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as m}from"./assets/vendor-77e16229.js";const t=document.querySelector("form");function n(o){o.preventDefault();const s=Number(t.elements.delay.value),i=t.elements.state.value;new Promise((e,r)=>{setTimeout(()=>{i==="fulfilled"?e(s):r(s)},s)}).then(e=>{m.success({message:`✅ Fulfilled promise in ${e} ms`})}).catch(e=>{m.error({message:`❌Rejected promise in ${e} ms`})})}t.addEventListener("submit",n);
//# sourceMappingURL=commonHelpers2.js.map
