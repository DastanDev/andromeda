<?php
  $file = '../../data/balance.txt';
if (isset($_POST['sum'])) {
  $value =  $_POST['sum'];
  $currentBalance = file_get_contents($file);
  $newBalance = $currentBalance + $value;
  file_put_contents($file, $newBalance);
}
if (isset($_GET['getBalance'])) {
  $currentBalance = file_get_contents($file);
  // $url = 'https://api.bscscan.com/api?module=stats&action=bnbprice&apikey=9YR6MZ83I7UV632AIDUYGDE293RXZUSP2C';
  echo $currentBalance;
}
?>