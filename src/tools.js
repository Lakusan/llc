var orientation = "portrait";

function toggleLandscapePortrait() {

    if (orientation === "portrait") {
        $("#sheet").width(1240);
        $("#sheet").height(1754);
    }
    else if (orientation === "landscape") {
        $("#sheet").width(1754);
        $("#sheet").height(1240);
    }
};
function setLandscape() {
    orientation = "landscape";
    toggleLandscapePortrait();
    template[0].sheetLayout = orientation;
    console.log(template[0].sheetLayout);
}

function setPortrait() {
    orientation = "portrait";
    toggleLandscapePortrait();
    template[0].sheetLayout = orientation;

    console.log(template[0].sheetLayout);

    
}

function changePicToLandscape(){
    setLandscape();
    $("#bgImage").attr('src', 'pix/landscape.jpg');


}

function changePicToPortrait(){
    setPortrait();
    $("#bgImage").attr('src', 'pix/portrait.png');
}

function resetPage(){
   window.location.reload();
}

function showUpload(){
    var dropZone = document.getElementById("dropZone");
    console.log("fileUpload: " + dropZone);
    console.log("Style.Display: " + dropZone.style.display);

    if(dropZone.style.display === ""){
        dropZone.style.display = "block";
        console.log("block");
    } else if (dropZone.style.display === "block") {
        dropZone.style.display = "";
        console.log("none");
    }
}

