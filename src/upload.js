
$(function () {
   var files = $("#files");

   $("#fileupload").fileupload({
       url: 'index.php',
       dropZone: '#dropZone',
       dataType: 'json',
       autoUpload: false
   }).on('fileuploadadd', function (e, data) {
       var fileTypeAllowed = /.\.(jpg|png|jpeg)$/i;
       var fileName = data.originalFiles[0]['name'];
       var fileSize = data.originalFiles[0]['size'];

       if (!fileTypeAllowed.test(fileName))
            $("#error").html('Nur Bilder erlaubt!');
       else if (fileSize > 10000000)
           $("#error").html('Datei ist zu groß! Max sind 10 MB erlaubt');
       else {
           $("#error").html("");
           data.submit();
       }
   }).on('fileuploaddone', function(e, data) {
        var status = data.jqXHR.responseJSON.status;
        var msg = data.jqXHR.responseJSON.msg;

        if (status == 1) {
            var path = data.jqXHR.responseJSON.path;
            $("#files").fadeIn().append('<p><img style="width: 100px; height: 100px;" src="'+path+'" /></p>');
        } else
            $("#error").html(msg);
   }).on('fileuploadprogressall', function(e,data) {
        var progress = parseInt(data.loaded / data.total * 100, 10);
        $("#progress").html("Completed: " + progress + "%");
   });
});

