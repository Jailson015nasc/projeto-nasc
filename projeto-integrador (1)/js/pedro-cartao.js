function concluir() {
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let idolo = document.getElementById("idolo").value;
    let mensagem = document.getElementById("mensagem");
    let imagem = document.getElementById("imagem")
  
    if (nome === "" || idade === "" || idolo === "") {
        alert("Por favor, preencha todos os campos que restam.")
    } else if (idolo.toLowerCase() !== "pedro") {
        alert("Desculpe, somente aceitamos fã do Pedro.")
    } else {
      mensagem.innerHTML = "Parabéns, você agora é um fã oficial do Pedro 😉✔!"
      imagem.src = "../img/vitor.jpeg"
    }
}
  

