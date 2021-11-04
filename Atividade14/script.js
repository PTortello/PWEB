function validar(event) {
  event.preventDefault();
  var nome = document.forms[0].elements["nome"].value
  var email = document.getElementById("email").value;
  var comentario = document.getElementById("comentario").value;
  var sim = document.getElementById("sim").checked;
  if (nome.length < 10) {
    alert('O nome não pode ter menos que 10 caracteres!');
  } else if (!(email.includes("@") && email.includes("."))) {
    alert('E-mail inválido!');
  } else if (comentario.length < 20) {
    alert('O comentário deve ter no mínimo 20 caracteres!');
  } else if (sim) {
    alert('Volte sempre à esta página!');
  } else {
    alert('Que bom que você voltou a visitar esta página!');
  }
}
