import"./assets/header-5b42f59a.js";import"./assets/read_more-6eecbd95.js";const d=document.querySelectorAll(".tutor-avatar");d.forEach(o=>{const e=o.getAttribute("data-index");o.style.backgroundImage=`url('../assets/img/pictures/${e}.jpg')`});document.addEventListener("DOMContentLoaded",function(){const o=document.querySelector(".modal"),e=document.querySelector(".backdrop"),n=document.querySelectorAll("[data-modal-open]"),s=document.querySelectorAll("[data-modal-close]");console.log("modal:",o),console.log("backdrop:",e),console.log("openModalButtons:",n),console.log("closeModalButtons:",s);function c(){console.log("Opening modal"),o.classList.remove("is-hidden"),e.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function l(){console.log("Closing modal"),o.classList.add("is-hidden"),e.classList.add("is-hidden"),document.body.style.overflow=""}n.forEach(function(t){t.addEventListener("click",c)}),s.forEach(function(t){t.addEventListener("click",l)}),e.addEventListener("click",function(t){t.target===e&&l()}),document.addEventListener("keydown",function(t){t.key==="Escape"&&!o.classList.contains("is-hidden")&&l()})});const a=document.querySelector(".form-btn"),i=document.getElementById("js-bookForm");a.addEventListener("click",function(o){r(o,i)});function r(o,e){o.preventDefault();const n={name:e.elements.fullname.value,email:e.elements.email.value,phone:e.elements.phone.value};if(!n.email.trim()||!n.phone.trim())return alert("Please fill in all the fields!");console.log(n),e.reset()}
//# sourceMappingURL=commonHelpers3.js.map
