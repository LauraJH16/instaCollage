$(document).ready(function(){
    var $img = $('#img-foot');
    var $time = $('#header-time');
  
    //  agregar imagenes de restaurantes
    function showImage(event) {
      for (i = 0; i < data.length; i++) {
        $img.append('<div class="img-galery col-6 col-md-4"><img class="img-fluid"  src=' + data[i].img + '></div>');
      }
    }
    showImage();
  
    // Función para agregar hora
    function getTime() {
      var currentDate = new Date();
      var hh = currentDate.getHours();
      var mm = currentDate.getMinutes();
      return hh + ':' + ((mm < 10 ? '0' : '') + mm) +' '+ 'AM';
    }
    $time.append(getTime());
  });