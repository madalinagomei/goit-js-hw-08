var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},l=e.parcelRequire4c75;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in a){var l=a[e];delete a[e];var o={id:e,exports:{}};return t[e]=o,l.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},e.parcelRequire4c75=l);var o=l("kEUo3");const r=document.querySelector(".feedback-form");r.addEventListener("input",o.throttle((()=>{const e={email:r.elements.email.value,message:r.elements.message.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500));const s=JSON.parse(localStorage.getItem("feedback-form-state"));s?s&&(r.elements.email.value=s.email,r.elements.message.value=s.message):(r.elements.email.value="",r.elements.message.value=""),r.addEventListener("submit",(e=>{const t=JSON.parse(localStorage.getItem("feedback-form-state"));e.preventDefault(),localStorage.removeItem("feedback-form-state"),r.reset(),console.log(t)}));
//# sourceMappingURL=03-feedback.07e50316.js.map