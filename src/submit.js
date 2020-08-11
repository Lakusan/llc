function sendData() {
    var txt = prompt("Geben Sie ihrer Vorlage einen Namen: ");
    console.log(txt);
    if (txt != null){
        templateName = txt;
        template[15].name = templateName;
        console.log(template[15].name);
		  $.post('send.php', {
      data: template
    }, function(response) {
      console.log(response);
			  text=null;
    });
    } else {
        sendData();
    }
  
  }