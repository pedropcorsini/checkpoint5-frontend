const ficha = document.getElementById('ficha');
const campos = {
  img: document.getElementById('ficha-img'),
  nome: document.getElementById('ficha-nome'),
  detalhe: document.getElementById('ficha-detalhe'),
  ref: document.getElementById('ficha-ref'),
  serie: document.getElementById('ficha-serie'),
  nota: document.getElementById('ficha-nota'),
};

document.querySelectorAll('.carro').forEach((botao) => {
  botao.addEventListener('click', () => {
    const d = botao.dataset;
    campos.img.src = d.img;
    campos.img.alt = botao.querySelector('img').alt;
    campos.nome.textContent = d.nome;
    campos.detalhe.textContent = d.detalhe;
    campos.ref.textContent = d.ref;
    campos.serie.textContent = d.serie;
    campos.nota.textContent = d.nota;
    ficha.showModal();
  });
});

// clicar fora do cartão também fecha
ficha.addEventListener('click', (e) => {
  if (e.target === ficha) ficha.close();
});

// ---------- entrada animada ao rolar ----------
const animados = document.querySelectorAll('.rv, .pv');

// atraso em cascata: cada irmão espera um pouco mais que o anterior
animados.forEach((el) => {
  const irmaos = [...el.parentElement.children].filter((c) => c.matches('.rv, .pv'));
  el.style.setProperty('--i', irmaos.indexOf(el));
});

const semMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (semMovimento || !('IntersectionObserver' in window)) {
  animados.forEach((el) => el.classList.add('in'));
} else {
  const observador = new IntersectionObserver((itens) => {
    itens.forEach((item) => {
      if (!item.isIntersecting) return;
      item.target.classList.add('in');
      observador.unobserve(item.target);
    });
  // sem margem negativa no fundo: no fim da página o rodapé fica colado na
  // borda da tela e nunca chegaria a "entrar"
  }, { threshold: 0.1 });
  animados.forEach((el) => observador.observe(el));
}
