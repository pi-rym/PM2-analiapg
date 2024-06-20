
function limpiarFormulario() {
    document.getElementById("formulario-pelicula").reset();
  }
  
  
  document.getElementById("formulario-pelicula").addEventListener("submit", function(event) {
    event.preventDefault(); 
   
    const titulo = document.getElementById("titulo").value;
    const director = document.getElementById("director").value;
    const genero = document.getElementById("genero").value;
    const anio = document.getElementById("anio").value;
    const sinopsis = document.getElementById("sinopsis").value;
  
  
    if (titulo && director && genero && anio && sinopsis) {
     
      console.log("Enviando formulario...");
    
    } else {
      alert("Por favor, completa todos los campos del formulario.");
    }
  });