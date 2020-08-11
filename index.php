<?php
    if (isset($_FILES['attachments'])) {
        $msg = "";
        $targetFile = "uploads/" . basename($_FILES['attachments']['name'][0]);
        if (file_exists($targetFile))
            $msg = array("status" => 0, "msg" => "Datei existiert bereits");
        else if (move_uploaded_file($_FILES['attachments']['tmp_name'][0], $targetFile))
            $msg = array("status" => 1, "msg" => "Datei wurde hochgeladen", "path" => $targetFile);

        exit(json_encode($msg));
    }
?>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>CertEditor</title>

    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">

    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  

    <script src="js/vendor/jquery.ui.widget.js"></script>
    <script src="js/jquery.fileupload.js"></script>
    <script src="js/jquery.iframe-transport.js"></script>

    <script src="src/templateData.js"></script>
    <script src="src/tools.js"></script>
    <script src="src/dragNdrop.js"></script>
   


</head>

<body>

    <div class="grid-container">

        <div id="navbar">

            <button id="btnPortrait" class="dropbtn" onclick="setPortrait()">
                <p>Hochformat</p>
            </button>

            <button id="btnLandscape" class="dropbtn" onclick="setLandscape()">
                <p>Querformat</p>
            </button>

            <div class="dropdown">
                <button class="dropbtn">Hintergrundbild</button>
                <div class="dropdown-content">
                    <a onclick="changePicToPortrait()" href="#"> Hochformat</a>
                    <a onclick="changePicToLandscape()" href="#">Querformat</a>
                </div>
            </div>

            <button id="btnUpload" class="dropbtn" onclick="showUpload()">
                <p>Bild hochladen</p>
            </button>
			
			<button id="btnSave" class="dropbtn" onclick="sendData()">
                <p>Speichern</p>
            </button>

            <button id="btnReset" class="dropbtn" onclick="resetPage()">
                <p>Reset</p>
            </button>

            <center>
                <div id="dropZone">
                <h1>Bilder hochladen</h1>
                <input type="file" id="fileupload" name="atachments[]" multiple>
                <h1 id="error"></h1><br><br>
                <h1 id="progress"></h1><br><br>
                <div id="files"></div>
			    <button id="btnUpload" class="dropbtn" onclick="showUpload()">
                <p>Beenden</p>
            </button>
            </center>
        </div>

        <div id="menu">
            <div id="category" class="ui-widget-content draggable label1" data-name="category">
                <p>Kurskategorie</p>
            </div>
            <div id="courseName" class="ui-widget-content draggable label2" style="z-index:100;" data-name="courseName">
                <p>Kursname</p>
            </div>
            <div id="verification" class="ui-widget-content draggable label3" data-name="verification">
                <p>Verifikationsnummer</p>
            </div>
            <div id="courseDesc" class="ui-widget-content draggable label4" data-name="courseDesc">
                <p>Kursbeschreibung</p>
            </div>
            <div id="date" class="ui-widget-content draggable label5" data-name="date">
                <p>Ausstellungsdatum</p>
            </div>
            <div id="dateRange" class="ui-widget-content draggable label6" data-name="dateRange">
                <p>G&uumlltigkeit</p>
            </div>
            <div id="digitalSignature" class="ui-widget-content draggable label7" data-name="digitalSignature">
                <p>Digitale Signatur</p>
            </div>
            <div id="grade" class="ui-widget-content draggable label8" data-name="grade">
                <p>Punktzahl</p>
            </div>
            <div id="qrCode" class="ui-widget-content draggable label9" data-name="qrCode">
                <p>QR-Code</p>
            </div>
            <div id="studentName" class="ui-widget-content draggable label10" data-name="studentName">
                <p>Kursteilnehmer</p>
            </div>
            <div id="companyName" class="ui-widget-content draggable label11" data-name="companyName">
                <p>Firmenname</p>
            </div>
            <div id="trainerName" class="ui-widget-content draggable label12" data-name="trainerName">
                <p> Trainername</p>
            </div>
            <div id="text1" class="ui-widget-content draggable label13" data-name="text1">
                <p>Flie&szligtext 1</p>
            </div>
            <div id="text2" class="ui-widget-content draggable label14" data-name="text2">
                <p>Flie&szligtext 2</p>
            </div>
        </div>

        <div id="sheet" class="ui-widget-header droppable" data-layout="Portrait">
            <img id="bgImage" src="pix/portrait.png"></img>
        </div>
    </div>
    <script src="src/upload.js"></script>
    <script src="src/init.js"></script>
	<script src="src/submit.js"></script>



</body>

</html>