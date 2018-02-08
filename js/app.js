$(document).ready(function() {
  var $img = $('#img-foot');
  var $time = $('#header-time');
  
  //  agregar imagenes de restaurantes
  function showImage(event) {
    for (i = 0; i < data.length; i++) {
      $img.append('<div class="img-galery col-6 col-md-4"><img class="img-fluid" id=' + data[i].id + ' src=' + data[i].img + ' draggable="true"></div>'); 
    } 
  } showImage(); 
  // Función para agregar hora 
  function getTime() { 
    var currentDate = new Date(); 
    var hh = currentDate.getHours(); 
    var mm = currentDate.getMinutes(); 
    return hh + ':' + ((mm < 10 ? '0' : '') + mm) + ' ' + 'AM'; 
  } 
  $time.append(getTime()); 


  // Funcionalidad drag and drop 
  $(document).on('dragstart', drag); 
  $(document).on('dragover', permitirDrop); 
  $(document).on('drop', drop); 
  function drag(event) { 
    event.originalEvent.dataTransfer.setData('text', event.target.id); 
  }
  function permitirDrop(event) { 
    event.preventDefault(); 
  } 
  function drop(event) { 
    event.preventDefault(); 
    if (event.target.className === 'div-collage') { 
      let idFoto = event.originalEvent.dataTransfer.getData('text'); 
      event.target.appendChild(document.getElementById(idFoto)); 
    } 
  }
  // fin de funcionalidad ddrag and drop
});