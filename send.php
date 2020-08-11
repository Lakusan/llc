<?php
if(isset($_POST)){
    if(isset($_POST['data'])){
    $template = $_POST['data'];
    print_r($template);
}}
?>