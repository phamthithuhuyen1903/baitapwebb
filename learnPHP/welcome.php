<?php session_start();
if (!isset($_SESSION["username"])) {
    // header("Location: login.php");
    echo "chưa có session";
    exit();
} else {
    echo "có session" . $_SESSION["username"];
}
?>
<html>

<head>
    <title>Chào mừng</title>
</head>

<body>
    <h2>Xin chào, <?php echo $_SESSION["username"]; ?>!</h2>
    <p>Chào mừng bạn đã đăng nhập</p>
    <a href="logout.php">Đăng xuất</a>

</body>

</html>