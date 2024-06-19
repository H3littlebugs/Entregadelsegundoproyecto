// main.js

// Función para manejar la búsqueda de series y mostrar resultados
async function handleSearch(event) {
    event.preventDefault();
    
    const query = document.getElementById('searchInput').value.trim();
    
    if (query === '') {
      alert('Por favor ingresa un término de búsqueda válido.');
      return;
    }
  
    try {
      const series = await searchSeries(query);
      displaySeries(series);
    } catch (error) {
      console.error('Error searching for series:', error);
      alert('Hubo un error al buscar las series. Por favor intenta nuevamente.');
    }
  }
  
  // Función para mostrar las series encontradas en el DOM
  function displaySeries(series) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';
  
    series.forEach(show => {
      const showElement = document.createElement('div');
      showElement.classList.add('show');
  
      const title = document.createElement('h2');
      title.textContent = show.show.name;
      showElement.appendChild(title);
  
      const summary = document.createElement('p');
      summary.textContent = show.show.summary || 'No hay resumen disponible.';
      showElement.appendChild(summary);
  
      resultsContainer.appendChild(showElement);
    });
  }
  
  // Event listener para el formulario de búsqueda
  const searchForm = document.getElementById('searchForm');
  searchForm.addEventListener('submit', handleSearch);
  