<?php
if (isset($_GET["search"])) {
    echo "Từ khóa " . htmlspecialchars($_GET["search"]);
}
?>
<?php
if (isset($_GET["username"])) {
    echo "Chào " . htmlspecialchars($_GET["username"]);
}
?>
