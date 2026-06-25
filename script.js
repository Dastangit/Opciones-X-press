// Cerrar al hacer click fuera
// window.addEventListener('click', function(e) {
//     if (!e.target.matches('.dropbtn')) {
//         document.querySelector('.dropdown-content')
//         .classList.remove('show');
//     }
// });

/* IA help fix the code here !
So the main issues are:
1. script.js:10 - dropBtnEl.!matches is invalid JavaScript syntax. This will cause a syntax error and the entire script won't run.
2. index.html:14 - hidden is an HTML attribute, not a CSS class. classList.remove("hidden") removes a CSS class named "hidden", 
not the hidden attribute. You need to use dropContEl.removeAttribute('hidden') or dropContEl.hidden = false instead.
3. The menu starts with the hidden attribute, so it's initially hidden. The JS tries to remove a CSS class called "hidden" 
which doesn't affect the HTML hidden attribute.
4. The toggle logic is incomplete - it should check if the menu is currently visible and toggle accordingly.

Here are the issues I found in your code that are preventing the button from working:
Issue 1 - Invalid JavaScript syntax (script.js:10) if (dropBtnEl.!matches)
!matches is not valid syntax. The ! cannot be placed before .matches. This causes a 
syntax error which prevents the entire script from running.

Issue 2 - hidden is an HTML attribute, not a CSS class (index.html:14 vs script.js:9)
Your menu div starts with the hidden HTML attribute:
<div hidden class="menu"> // But your JavaScript tries to remove it as a CSS class:
dropContEl.classList.remove("hidden"); //classList.remove() only removes CSS classes, not HTML attributes. 
// The hidden attribute stays regardless. You need to use {dropContEl.hidden = false instead.}

Issue 3 - No toggle logic
The showContent function always removes "hidden" first, then has the broken !matches check. 
There's no way to close the menu once opened. You need a proper toggle:
- If menu is hidden → show it
- If menu is visible → hide it

Plan to fix
script.js - Replace the entire file with:
1. Query .dropbtn and .menu (same as now)
2. On click, toggle the .menu element's hidden property: {dropContEl.hidden = !dropContEl.hidden} */
const dropBtnEl = document.querySelector('.dropbtn')
const dropContEl = document.querySelector('.dropdown-content')

dropBtnEl.addEventListener("click", ()=> {
    showContent()
});

function showContent() {
    dropContEl.classList.toggle("hidden")  
}

/*3. Optionally add a "click outside to close" listener
No changes needed to index.html or style.css for the button to work. */

/* ¿Qué hace?
2. if (dropContEl.hidden = !dropContEl.hidden) — Aquí hay un detalle importante:
- Esto es una asignación, no una comparación (= vs == o ===)
- Invierte el valor de la propiedad hidden del elemento
- Si hidden era false, ahora será true (y viceversa)

3. dropContEl.classList.add("hidden") — Si después de la inversión el elemento quedó oculto, agrega la clase "hidden".
Problema potencial:
La función se llama showContent (mostrar contenido), pero en realidad está alternando (toggling) la visibilidad. Además, la lógica es redundante porque:
- Primero remueve "hidden"
- Luego puede volver a agregarlo

Una versión más clara sería:
function showContent() {
    dropContEl.classList.toggle("hidden");
}
Esto hace lo mismo pero de forma más simple y legible */

/*Esta función intenta mostrar/ocultar un elemento (probablemente un menú desplegable o contenido dropdown).
Paso a paso:
1. dropContEl.classList.remove("hidden") — Elimina la clase CSS "hidden" para mostrar el elemento*/
