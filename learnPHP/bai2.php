<html>

<head>
    <title>Dãy số 1 đến 100</title>
    <style>
        .chan {
            font-weight: bold;
            color: red;
            display: inline-block;
            width: 34px;
            text-align: center;
        }

        .le {
            font-weight: bold;
            font-style: italic;
            color: blue;
            display: inline-block;
            width: 34px;
            text-align: center;
        }
    </style>
</head>

<body>
    <?php
    for ($i = 1; $i <= 100; $i++) {
        if ($i % 2 == 0) {
            echo '<span class="chan">' . $i . '</span>';
        } else {
            echo '<span class="le">' . $i . '</span>';
        }
    }
    ?>
</body>

</html>