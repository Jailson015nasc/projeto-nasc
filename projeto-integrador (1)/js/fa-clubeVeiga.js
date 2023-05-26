const botao = document.getElementById('botao')
    const opcao1 = document.getElementById('opcao1')
    const opcao2 = document.getElementById('opcao2')
  
    botao.addEventListener('click', function() {
      if (opcao1.checked) {
        window.location.href = 'veiga-carterinha.html'
      } else if (opcao2.checked) {
        window.location.href = 'veiga-carterinha.html'
      }
});
