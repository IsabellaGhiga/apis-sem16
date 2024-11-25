const apiUrl = 'https://rickandmortyapi.com/api/character';

const deleteSearch = () => {
  const contenedorImagen = document.getElementById('charactersList');
  contenedorImagen.innerHTML = '';
};

const renderImages = (characters) => {
  const contenedorImagen = document.getElementById('charactersList');
  characters.forEach((character) => {
    const { name, gender, species, image } = character;
    contenedorImagen.innerHTML += `
      <div class="card" style="max-width: 18rem;">
        <img src="${image}" class="card-img-top" alt="${name}">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">Género: ${gender}</p>
          <p class="card-text">Especie: ${species}</p>
        </div>
      </div>`;
  });
};

const fetchCharacters = (text) => {
  fetch(`${apiUrl}?name=${text}`)
    .then((res) => res.json())
    .then((res) => {
      console.log({ res });
      renderImages(res.results);
    })
    .catch((error) => console.error('Error al cargar personajes', error));
};

const clickSearch = () => {
  const text = document.getElementById('searchInput').value.toLowerCase();
  if (text) {
    fetchCharacters(text);
  }
};

document.getElementById('btnSearch').addEventListener('click', clickSearch);
document.getElementById('btnDelete').addEventListener('click', deleteSearch);
