let anoSpan = document.getElementById('rodape-ano');

if (anoSpan) {
  anoSpan.textContent = String(new Date().getFullYear());
}

let btnTopo = document.getElementById('btn-voltar-topo');
let alvoTopo = document.getElementById('topo');

if (btnTopo && alvoTopo) {
        function atualizaBotaoTopo() {
           let scrollou = window.scrollY > 100;
           if (scrollou){
            btnTopo.classList.remover('escondendo');
           } else{
            btnTopo.classList.add('escondendo');
           }
    } 
    atualizaBotaoTopo();
    window.addEventListener('scroll', atualizaBotaoTopo, { passive: true });
    
    btnTopo.addEventListener('click', function () {
        alvoTopo.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
}

let msgVisita = document.getElementById('msg-visita');

if (msgVisita) {
  try {
    if (!sessionStorage.getItem('perfilVisitou')) {
      sessionStorage.setItem('perfilVisitou', '1');
      msgVisita.textContent = 'Obrigada por visitar…';
    } else {
      msgVisita.textContent = 'Nesta aba você já abriu…';
    }
    } catch (err) {
        msgVisita.textContent = '';
        msgVisita.style.display = 'none';
    }
}
