<?php include 'head.php' ?>
</head>

<body class="bg-dark">
  <?php include 'navbar.php' ?>
  <div id="main">
    <div class="container">
      <div id="map">
      </div>
    </div>
  </div>
  <div class="container fixed-bottom bg-dark">
    <footer class="text-center text-lg-start">
      <div class="container d-flex justify-content-center py-5">
        <?php include 'dropdown.php' ?>
        <button class="btn btn-primary" onclick="getSelectedOption()">CONFIRM LOCATION</button>
      </div>
    </footer>
  </div>
  <?php include 'js_scripts.php' ?>
</body>

</html>