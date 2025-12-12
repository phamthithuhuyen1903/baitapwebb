<html>

<body>
    <h1>Tài liệu học lập trình Web</h1>
    <hr>

    <p> Tài liệu học HTML</p>
    <p> Tài liệu học CSS</p>
    <p> Tài liệu học PHP</p>
    <?php
    echo "<h2>Tài liệu học JavaScript</h2>";
    echo "<h3>Tài liệu học MySQL</h3>";
    echo "<h4>Tài liệu học PHP</h4>";
    ?>

    <hr>
    <?php
    $text = "Từ cơ bản " . "" . "đến nâng cao";
    echo $text;
    ?>

    <hr>
    <!-- biến -->
    <?php
    $name = "Phạm Thu Huyền";
    $year = 2005;
    $city = "Hải Dương";
    echo "<p>Giá trị của biến name là chuỗi $name</p>";
    echo "<p>Giá trị của biến year là số $year</p>";
    echo "<p>Giá trị của biến city là chuỗi $city</p>";
    ?>
    <hr>
    <!-- hằng -->
    <?php
    define('PI', 3.14);
    echo PI;
    ?>
    <!-- câu lệnh if else -->
    <?php
    $a = 10;
    $b = 20;
    if ($a > $b) {
        echo "<p>Giá trị a lớn hơn b</p>";
    } else {
        echo "<p>Giá trị a nhỏ hơn b</p>";
    }
    ?>
    <!-- câu lệnh switch -->
    <?php
    $a = 10;
    switch ($a) {
        case 1:
            print("Giá trị a là 0");
            break;
        case 2:
            print("Giá trị a là 10");
            break;
        default:
            print("Giá trị không xác định");
            break;
    }
    ?>
    <!-- vòng lặp for -->
    <?php
    for ($i = 0; $i < 10; $i++) {
        echo $i;
    }
    ?>
    <!-- vòng lặp foreach -->
    <?php
    $arr = array(1, 2, 3, 4, 5);
    foreach ($arr as $x) {
        echo $x;
    }
    ?>

    <hr>

    <?php
    //hàm không tham số
    function indulieu()
    {
        echo "Xin chào";
    }
    indulieu();
    echo "<br>"; //xuống dòng
    //hàm có tham số
    function tinhtong($a, $b)
    {
        $c = $a + $b;
        echo "Tổng: $c";
    }
    tinhtong(2, 3);
    echo "<br>";
    function tinhhieu($a, $b)
    {
        $c = $a - $b;
        echo "Hiệu: $c";
    }
    tinhhieu(2, 3);

    ?>
    <hr>
    <!-- cơ chế truyền dữ liệu -->
    <form method="GET" action="process.php">
        <input type="text " name="search">
        <button type="submit">Tìm kiếm</button>
    </form>
    <form method="GET" action="process.php">
        <input type="text" name="username">
        <button type="submit">Gửi</button>
    </form>

    <?php
    //bước 1: tạo kết nối
    $conn = mysqli_connect('localhost', 'root', '', 'php_bai1');
    //bươc 2: kiểm tra kết nối
    if (!$conn) {
        die("Kết nối thất bại: " . mysqli_connect_error());
    }
    //bươc 3.viết câu lệnh truy vấn
    $sql = "select * from sinhvien";
    //bước 4:thực thi câu truy vấn và gán vào result
    $result = mysqli_query($conn, $sql);
    //bước 5: xử lý dữ liệu trả về
    //kiểm tra số ương record trả về có lớn hơn 0
    //nếu lớn hơn tức là có kết quả , ngược lại sẽ không có kết quả
    if (mysqli_num_rows($result) > 0) {
        //sử dụng vòng lặp while
        while ($row = mysqli_fetch_assoc($result)) {
            echo "MSV:" . $row["msv"] . "- Tên:" . $row["hoten"] . "- Địa chỉ:" . $row["diachi"] . "<br>";
        }
    } else {
        echo "Không có record nào";
    }
    //bươc 6: ngắt kết nối
    mysqli_close($conn);
    ?>

    <?php
    $conn = mysqli_connect('localhost', 'root', '', 'php_bai1');
    if (!$conn) {
        die("kết nối thất bại:" . mysqli_connect_error());
    }
    // $sql = "insert into khoa(tenkhoa,ghichu) values('CDT','Cơ điện tử')";
    // if (mysqli_query($conn, $sql)) {
    //     echo "Thêm thành công";
    // } else {
    //     echo "Lỗi: " . $sql . "<br>" . mysqli_error($conn);
    // }
    // $sql = "update khoa set  tenkhoa='HTTT',ghichu='Hệ thống thông tin' where makhoa=1";
    // if (mysqli_query($conn, $sql)) {
    //     if (mysqli_affected_rows($conn) > 0) {
    //         echo "Cập nhật dữ liệu thành công";
    //     } else {
    //         echo "Cập nhật dữ liệu không thành công";
    //     }
    // } else {
    //     echo "Lỗi: " . $sql . "<br>" . mysqli_error($conn);
    // }

    $sql = " delete from khoa where makhoa = 4";
    if (mysqli_query($conn, $sql)) {
        if (mysqli_affected_rows($conn) > 0) {
            echo "Xóa dữ liệu thành công";
        } else {
            echo "Xóa dữ liệu khòng thành công";
        }
    } else {
        echo "Lỗi: " . $sql . "<br>" . mysqli_error($conn);
    }
    mysqli_close($conn);
    ?>
</body>

</html>