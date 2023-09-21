<?php
if (isset($_POST['click'])) {

    $uname = $_POST['uname'];

    $pass = $_POST['password'];

    $us = 'star';
    $pa = '1234';

    if ($us == $uname) {
        if ($pa == $pass) {
            print("ta nevterlee");
        } else {
            print("pass buruu");
        }
        print("username buruu");
    }
}
