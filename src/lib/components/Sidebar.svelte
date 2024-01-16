<script>
    export let isSidebarOpen;
  </script>


<div class="sidebar" style="{isSidebarOpen ? 'margin-left: 0;' : 'margin-left: -250px;'}">
    <!-- Contenido del sidebar -->
    <div class="contenido_sidebar">
    </div>
    <p>hola</p>
  </div>


  <style>
    .sidebar {
      width: 250px;
      height: 100vh;
      position: fixed;
      border: 2px solid rebeccapurple;
      background-color: white;
      z-index: 9999; /* POR ENCIMA DE TODO */
      transition: margin-left 0.3s ease; /* Cambiado a margin-left para la animación */
      overflow-y: scroll ;
    }
    .contenido_sidebar{
      background-color: aqua;
      height: 1500px;
      width: 100%;
    }
    /* Estilo para el scrollbar del contenedor */
::-webkit-scrollbar {
  width: 8px; /* Ancho del scrollbar */
}

/* Estilo para la barra del scrollbar */
::-webkit-scrollbar-thumb {
  background-color: red; /* Color de la barra del scrollbar */
  border-radius: 4px; /* Radio de borde para hacerlo redondeado */
}

/* Estilo para la pista del scrollbar (el fondo del scrollbar) */
::-webkit-scrollbar-track {
  background-color: transparent; /* Color de fondo de la pista del scrollbar */
}
  </style>