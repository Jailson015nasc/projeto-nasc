function concluir() {
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let time = document.getElementById("time").value;
    let mensagem = document.getElementById("mensagem");
    let imagem = document.getElementById("imagem")
  
    if (nome === "" || idade === "" || time === "") {
        alert("Por favor, preencha todos os campos que restam.")
    } else if (time.toLowerCase() !== "palmeiras") {
        alert("Desculpe, somente aceitamos fã do Palmeiras.")
    } else {
      mensagem.innerHTML = "Parabéns, você agora é um fã oficial do Palmeiras 😉✔!";
      imagem.src = '../img/felipe.jpeg'
    }
}
  

