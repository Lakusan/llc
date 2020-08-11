$(function () {
    $("#category").draggable({revert: "invalid", cursor:"crosshair"}).resizable({
        stop: function () {
            var name = document.getElementById("category");
            console.log(name);
            getData(name);
        }
    });
    $("#verification").draggable({revert: "invalid", cursor:"crosshair"}).resizable({
        stop: function () {
            var name = document.getElementById("verification");
            console.log(name);
            getData(name);
        }
    });
    $("#courseName").draggable({revert: "invalid", cursor:"crosshair"}).resizable({
        stop: function () {
            var name = document.getElementById("courseName");
            console.log(name);
            getData(name);
        }
    });
    $("#courseDesc").draggable({revert: "invalid", cursor:"crosshair"}).resizable({
        stop: function () {
            var name = document.getElementById("courseDesc");
            console.log(name);
            getData(name);
        }
    });
    $("#date").draggable({revert: "invalid", cursor:"crosshair"}).resizable({
        stop: function () {
            var name = document.getElementById("date");
            console.log(name);
            getData(name);
        }
    });
    $("#dateRange").draggable({revert: "invalid", cursor:"crosshair"}).resizable({
        stop: function () {
            var name = document.getElementById("dateRange");
            console.log(name);
            getData(name);
        }
    });
    $("#digitalSignature").draggable({revert: "invalid", cursor:"crosshair"}).resizable({
        stop: function () {
            var name = document.getElementById("digitalSignature");
            console.log(name);
            getData(name);
        }
    });
    $("#grade").draggable({revert: "invalid", cursor:"crosshair"}).resizable({
        stop: function () {
            var name = document.getElementById("grade");
            console.log(name);
            getData(name);
        }
    });
    $("#qrCode").draggable({revert: "invalid", cursor:"crosshair"}).resizable({
        stop: function () {
            var name = document.getElementById("qrCode");
            console.log(name);
            getData(name);
        }
    });
    $("#studentName").draggable({revert: "invalid", cursor:"crosshair"}).resizable({
        stop: function () {
            var name = document.getElementById("studentName");
            console.log(name);
            getData(name);
        }
    });
    $("#companyName").draggable({revert: "invalid", cursor:"crosshair"}).resizable({
        stop: function () {
            var name = document.getElementById("companyName");
            console.log(name);
            getData(name);
        }
    });
    $("#trainerName").draggable({revert: "invalid", cursor:"crosshair"}).resizable({
        stop: function () {
            var name = document.getElementById("trainerName");
            console.log(name);
            getData(name);
        }
    });
    $("#text1").draggable({revert: "invalid", cursor:"crosshair"}).resizable({
        stop: function () {
            var name = document.getElementById("text1");
            console.log(name);
            getData(name);
        }
    });
    $("#text2").draggable({revert: "invalid", cursor:"crosshair"}).resizable({
        stop: function () {
            var name = document.getElementById("text2");
            console.log(name);
            getData(name);
        }
    });

    $("#sheet").droppable({
        drop: function (event, ui) {
            var name = $(ui.draggable).attr("data-name");
            var top = $(ui.draggable).position().top;
            var left = $(ui.draggable).position().left;
            var width = $(ui.draggable).width();
            console.log(width);
            var height = $(ui.draggable).height();

                for (var i = 0; i < template.length; i++)
                {
                    if (template[i].name === name)
                    {
                        template[i].top = top;
                        template[i].left = left;
                        template[i].rtop = top - sheetTop;
                        template[i].rleft = left - sheetLeft;
                        template[i].width = width;
                        template[i].height = height;
                        template[i].active = true;
                    };
                }
            console.log(template);   
        }
    });

    $("#menu").droppable({
        drop: function(event, ui){
            var name = $(ui.draggable).attr("data-name");
        
            for (var i = 0; i < template.length; i++)
                {
                    if (template[i].name === name)
                    {
                        template[i].top = 0;
                        template[i].left = 0;
                        template[i].rtop = 0;
                        template[i].rleft = 0;
                        template[i].height = 0;
                        template[i].width = 0;
                        template[i].active = false;
                    };
                }
                console.log(template);
        }      
    });

    function getData(name){
        for (var i = 0; i < template.length; i++)
            {
                if (template[i].name === name.getAttribute("data-name"))
                { 
                    template[i].width = parseInt(name.style.width.replace('px',''));
                    template[i].height = parseInt(name.style.height.replace('px',''));
                };
            }
            console.log(template);
    }         
});