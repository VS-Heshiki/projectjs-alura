const tabela = document.querySelector('table');

tabela.addEventListener('dblclick', function(event){
    event.target.parentNode.classList.add("fade");

    setTimeout(function(){
      event.target.parentNode.remove();
    },400);
  });