const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
	e.preventDefault() // IMPEDE O COMPORTAMENTO PADRÃO DE ENVIO DO FORMULARIO


	const success = centroInputs();
	if (success) {
		window.location.href = "tela-time+jogadores.html";
	}
});
// CHAMA A FUNÇÃO CENTROINPUTS PARA REALIZAR A VALIDAÇÃO INDIVIDUAL DO FORMULARIO
function centroInputs() {
	let success = true // ESSA VARIAVEL É USADA PARA VER O SUCESSO DA VALIDAÇÃO DOS CAMPOS DO FORMULARIO
	                    // SE ALGUM CAMPO FALHAR NAS CONDIÇÕES DE VALIDAÇÃO,O VALOR DA VARIAVEL SERA ALTERADO PARA FALSE
	
	const emailValue = email.value.trim()
	const passwordValue = password.value.trim()


	if (emailValue === '') {
		setErrorFor(email, 'Preencha este campo')
		success = false
	} else if (!regexEmail(emailValue)) {
		setErrorFor(email, 'Email inválido, tente de novo')
		success = false
	} else {
		setSuccessFor(email)
	}

	if (passwordValue === '') {
		setErrorFor(password, 'Preencha este campo')
		success = false
	} else if (passwordValue.length < 8) {
		setErrorFor(password, 'Senha deve ter mais que 8 caracteres')
		success = false
	} else {
		setSuccessFor(password)
	}

	return success;
}

// SE UM CAMPO FALHAR NA VALIDAÇÃO, A FUNÇÃO SETERRORFOR É CHAMADA PARA EXEBIR UMA MENSEGEM DE ERRO
function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small')
	small.innerText = message
	formControl.className = 'form-control error'
}
// SE UM CAMPO PASSAR NA VALIDAÇÃO, A FUNÇÃO SETSUCCESFOR É CHAMADA PARA APLICAR UMA RESPOSTA DE ACERTO
function setSuccessFor(input) {
	const formControl = input.parentElement
	formControl.className = 'form-control success'
}

function regexEmail(email) {
	return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}