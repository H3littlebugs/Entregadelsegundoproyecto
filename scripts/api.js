// api.js

const baseURL = 'https://api.tvmaze.com';

// Función para obtener series por búsqueda
async function searchSeries(query) {
  try {
    const response = await fetch(`${baseURL}/search/shows?q=${query}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

// Función para obtener detalles de una serie por ID
async function getSeriesDetails(id) {
  try {
    const response = await fetch(`${baseURL}/shows/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}
