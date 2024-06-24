const fetchAllButton = document.getElementById('fetchAll');
const fetchFilteredButton = document.getElementById('fetchFiltered');
const outputTableBody = document.querySelector('#output tbody');

fetchAllButton.addEventListener('click', fetchAllCharacters);
fetchFilteredButton.addEventListener('click', fetchFilteredCharacters);

function fetchAllCharacters() {
    fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => renderCharacters(data.results))
        .catch(error => showError(error));
}

function fetchFilteredCharacters() {
    const name = document.getElementById('name').value;
    const status = document.getElementById('status').value;
    const species = document.getElementById('species').value;
    const type = document.getElementById('type').value;
    const gender = document.getElementById('gender').value;

    let url = 'https://rickandmortyapi.com/api/character/?';
    if (name) url += `name=${name}&`;
    if (status) url += `status=${status}&`;
    if (species) url += `species=${species}&`;
    if (type) url += `type=${type}&`;
    if (gender) url += `gender=${gender}`;

    fetch(url)
        .then(response => response.json())
        .then(data => renderCharacters(data.results))
        .catch(error => showError(error));
}

function renderCharacters(characters) {
    outputTableBody.innerHTML = '';
    characters.forEach(character => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${character.name}</td>
            <td>${character.status}</td>
            <td>${character.species}</td>
            <td>${character.type}</td>
            <td>${character.gender}</td>
            <td><img src="${character.image}" alt="${character.name}"></td>
        `;
        outputTableBody.appendChild(row);
    });
}

function showError(error) {
    outputTableBody.innerHTML = `<tr><td colspan="6">Error fetching data: ${error.message}</td></tr>`;
}
