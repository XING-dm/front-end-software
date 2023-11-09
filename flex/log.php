<?php
if (isset($_POST['submit'])) {
    $username = $_POST['name'];
    $pass = $_POST['password'];
    $mypass = 1123;
    $myname = 'code';
    if ($username == $myname) {
        if ($pass == $mypass) {
            echo 'ta nevterlee';
        }
    }
    echo "dwjecfwe";
}
