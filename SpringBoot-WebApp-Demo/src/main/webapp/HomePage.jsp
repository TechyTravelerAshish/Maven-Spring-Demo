<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Spring Boot WebApp</title>
  <link href="css/bootstrap.min.css" rel="stylesheet">
  <link href="css/simple-sidebar.css" rel="stylesheet">
</head>
<body>

<div class="d-flex" id="wrapper">

    <!-- Sidebar -->
    <div class="bg-light border-right" id="sidebar-wrapper">
      <div class="sidebar-heading"><b>Menu</b></div>
      <div class="list-group list-group-flush">
        <a href="/home" class="list-group-item list-group-item-action bg-light-selected">Home Page</a>
      </div>
    </div>
    <!--########################## /#sidebar-wrapper #############################-->

<!-- Page Content -->
<div id="page-content-wrapper">
	 <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                
      <ul class="navbar-nav ml-auto mt-2 mt-lg-0"> 
              <h2>Spring Boot WebApp</h2>
      </ul>			
     
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                       
            <li class="nav-item active">
              <a class="nav-link" href="#">Welcome<span class="sr-only">(current)</span></a>
            </li>                         
    
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Settings</a>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="Profile">Profile</a>
                <a class="dropdown-item" href="#" id="menu-toggle">Toggle Menu</a>
                <div class="dropdown-divider"></div>
                
                <form action="Logout">   
                <input class="dropdown-item" type="submit" value=Logout>        
                </form>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <div class="container-fluid">
        <h3 class="mt-4">Home Page</h3>
      </div>      
      
<div class="container-fluid">         
  
    <div class="my-3 p-3 bg-white rounded shadow-sm">

  </div>        
</div>  


</div>
</div>

  <!-- Bootstrap core JavaScript -->
  <script src="javascript/jquery.min.js"></script>
  <script src="javascript/bootstrap.bundle.min.js"></script>

  <!-- Menu Toggle Script -->
  <script>
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  </script>

</body>
</html>
