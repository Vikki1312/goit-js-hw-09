function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequire7bc7;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequire7bc7=r);var i=r("7Y9D8");const u=document.querySelector(".form");document.querySelector("button");function l(e,t){return new Promise(((o,n)=>{Math.random()>.3?setTimeout((()=>{o({position:e,delay:t})}),t):setTimeout((()=>{n({position:e,delay:t})}),t)}))}u.addEventListener("submit",(function(t){const{elements:{delay:o,step:n,amount:r}}=t.currentTarget,u=Number(o.value),s=Number(r.value),a=Number(n.value);t.preventDefault();let d=1,f=u;for(let t=0;t<s;t++)l(d,f).then((({position:t,delay:o})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`)})).catch((({position:t,delay:o})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`)})),d+=1,f+=a}));
//# sourceMappingURL=03-promises.59271428.js.map
