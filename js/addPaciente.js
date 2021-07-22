const botaoAdd = document.querySelector('#addPacientes');
  botaoAdd.addEventListener('click', function(){
    
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://api-pacientes.herokuapp.com/pacientes');

    if(xhr.status === 200){
      xhr.addEventListener('load', function(){
        const request = xhr.responseText;
        const pacientes = JSON.parse(request)
  
        pacientes.forEach(function(paciente){
          addPacienteTabela(paciente);
        })
      });
    } else {
      alert("Invalid Request!");
    }

    xhr.send();
  })