const campoBusca = document.querySelector(".input-busca");

campoBusca.addEventListener("input", function(){
  console.log(this.value);
  const pacientes = document.querySelectorAll(".paciente");
  
  if (this.value.length > 0) {
    for (var i = 0; i < pacientes.length; i++) {
      const paciente = pacientes[i];
      const tdNome = paciente.querySelector(".info-nome");
      const nome = tdNome.textContent;
      const expressao = new RegExp(this.value, "i");

      if(!expressao.test(nome)){
        paciente.classList.add("d-none");
      } else {
        paciente.classList.remove("d-none");
      }
    }
  } else {
    for (let i = 0; i < pacientes.length; i++) {
      const paciente = pacientes[i];

      paciente.classList.remove("d-none");
      
    }
  }
})