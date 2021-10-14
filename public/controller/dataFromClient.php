<?php

$res =  $_POST['account'] . ',' . $_POST['value'] . "\n";

$file = '../../data/hash.csv';
// The new person to add to the file
// Write the contents to the file, 
// using the FILE_APPEND flag to append the content to the end of the file
// and the LOCK_EX flag to prevent anyone else writing to the file at the same time
file_put_contents($file, $res, FILE_APPEND | LOCK_EX);
?>