
<script>
  export let onToggleSidebar;
  import {PUBLIC_BASE_PATH} from '$env/static/public'
  
</script>

<nav class="navbar navbar-expand-md navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="{PUBLIC_BASE_PATH}/">PROYECT 
         <img src="{PUBLIC_BASE_PATH}/logo.jpg" class="img-fluid" alt="" width="100px"> 
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul class="navbar-nav me-auto my-2 my-lg-0 ">

          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="{PUBLIC_BASE_PATH}/home">Home</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="{PUBLIC_BASE_PATH}/about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="{PUBLIC_BASE_PATH}/account">account</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="{PUBLIC_BASE_PATH}/login">login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="{PUBLIC_BASE_PATH}/logout">logout</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              blog
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="{PUBLIC_BASE_PATH}/blog/ingenieria">Ingenieria</a></li>
              <li><a class="dropdown-item" href="{PUBLIC_BASE_PATH}/blog/medicina">Medicina</a></li>
              <li><a class="dropdown-item" href="{PUBLIC_BASE_PATH}/blog/electronica">Electronica</a></li>
            </ul>
          </li>

          <button on:click={onToggleSidebar}>
            Open
          </button>
          <button on:click={onToggleSidebar}>
            Close
          </button>

          <!-- <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle"  id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Documentos
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
              <li><a class="dropdown-item" data-sveltekit-reload href="/documentos/ordenes">Ordenes</a></li>
              <li><a class="dropdown-item" data-sveltekit-reload href="/documentos/boletas">Boletas</a></li>
              <li><a class="dropdown-item" data-sveltekit-reload href="/documentos/facturas">Facturas</a></li>
              <li><a class="dropdown-item" data-sveltekit-reload href="/documentos/guias">Guias</a></li>
              <li><a class="dropdown-item" data-sveltekit-reload href="/documentos/creditos">Nota Creditos </a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="/informes">Estadisticas</a></li>
              <li><a class="dropdown-item" href="/releases">releases</a></li>

            </ul>
          </li> -->

          <!-- <li class="nav-item">
            <a class="nav-link" href="/informes" >Estadisticas</a>
          </li> -->
        <!-- login/logout -->
       
        </ul>
      
      </div>
    </div>
  </nav>