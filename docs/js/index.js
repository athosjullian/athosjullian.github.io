let body = document.querySelector('body');
// modal
let keep = document.getElementById("keep");
let seta = document.getElementById("seta");
let cfo = document.getElementById("cfo");
let ex = document.getElementById("ex");
// botão que abre o modal
let btnKeep = document.querySelectorAll(".projeto1");
let btnSeta = document.querySelector(".projeto2");
let btnCfo = document.querySelector(".projeto3");
let btnEx = document.querySelector(".projeto4");


// Abre o modal quando o usuário clica no botão
btnKeep.forEach((btn) => {
    btn.addEventListener('click', () => {
        keep.classList.add('show');
        body.style.overflow = "hidden";
    });
});

btnSeta.onclick = function() {
  seta.classList.add('show');
  body.style.overflow = "hidden";
}

btnCfo.onclick = function() {
  cfo.classList.add('show');
  body.style.overflow = "hidden";
}

btnEx.onclick = function() {
  ex.classList.add('show');
  body.style.overflow = "hidden";
}

// Quando o usuário clica em qualquer lugar fora do modal, fecha.
window.onclick = function(event) {
    if (event.target == keep || event.target == seta || event.target == cfo || event.target == ex) {
        keep.classList.remove('show');
        seta.classList.remove('show');
        cfo.classList.remove('show');
        ex.classList.remove('show');
        
        body.style.overflowY = "scroll";
    }
}

// <span> que fecha o modal
let span = document.querySelectorAll(".close");

// <span> qundo o usuário clica, fecha.
span.forEach((s) => {
    s.addEventListener('click', () => {
        keep.classList.remove('show');
        seta.classList.remove('show');
        cfo.classList.remove('show');
        ex.classList.remove('show');

        body.style.overflowY = "scroll";
    });
  });