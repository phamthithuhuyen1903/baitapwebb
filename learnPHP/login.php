<?php
session_start();
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $_SESSION["username"] = $_POST["username"];
    // header("Location: welcome.php");
    var_dump($_SERVER["REQUEST_METHOD"]);
    var_dump($_POST["username"]);
    var_dump($_SESSION["username"]);


    exit();
}
?>
<html>

<head>
    <title>Đăng nhập</title>
</head>

<body>
    <h2>Đăng Nhập</h2>
    <form method="POST" action="">
        <label>Nhập tên của bạn</label>
        <input type="text" name="username" required>
        <button type="submit">Đăng nhập</button>
    </form>
</body>

</html>