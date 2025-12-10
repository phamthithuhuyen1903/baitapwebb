<?php
if (isset($_GET["search"])) {
    echo "Từ khóa " . htmlspecialchars($_GET["search"]);
}
