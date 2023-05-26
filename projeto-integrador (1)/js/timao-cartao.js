function concluir() {
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let time = document.getElementById("time").value;
    let mensagem = document.getElementById("mensagem");
    let imagem = document.getElementById("imagem")
  
    if (nome === "" || idade === "" || time === "") {
        alert("Por favor, preencha todos os campos que restam.")
    } else if (time.toLowerCase() !== "corinthians") {
        alert("Desculpe, somente aceitamos fã do Corinthians.")
    } else {
      mensagem.innerHTML = "Parabéns, você agora é um fã oficial do Corinthians 😉✔!";
      imagem.src = '../img/jaco.jpeg'
    }
   
}
