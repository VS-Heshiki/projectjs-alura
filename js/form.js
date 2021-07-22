const botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener('click', function(event){
  event.preventDefault();
  
  const form = document.querySelector('#form-add');

  const paciente = buscaPaciente(form);

  if(!nomeValido(paciente)) {
    alert("Nome Inválido")
    return;
  }

  if(!pesoValido(paciente)) {
    alert("Peso Inválido")
    return;
  }

  if(!alturaValida(paciente)) {
    alert("Altura Inválida")
    return;
  }

  if(!gorduraValida(paciente)) {
    alert("Percentual de Gordura Inválida")
    return;
  }

  addPacienteTabela(paciente);

  form.reset();

});

function addPacienteTabela(paciente) {
  const pacienteTr = montaTr(paciente);
  const tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
}

function buscaPaciente(form){
  const paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaIMC(form.peso.value, form.altura.value)
  }

  return paciente;
}

function montaTr(paciente){
  const pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente")

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function montaTd(dado, classe){
  const td = document.createElement("td");

  td.textContent = dado;
  td.classList.add(classe);

  return td;
}

function calculaIMC(peso,altura) {
  var IMC = 0;

  IMC = peso / (altura * altura);

  return IMC.toFixed(2);
}

function nomeValido(paciente){
  if(paciente.nome.length > 3){
    return true;
  }
}

function gorduraValida(paciente){
  if(paciente.gordura.length > 0){
    return true;
  }
}

function pesoValido(paciente){
  if(paciente.peso > 0 && paciente.peso <= 1000){
    return true;
  }
}

function alturaValida(paciente){
  if(paciente.altura > 0 && paciente.altura <= 3){
    return true;
  }
}
