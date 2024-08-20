// Função para carregar o conteúdo de um arquivo HTML
function loadHTML(file, elementId) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o HTML:', error));
}

// Carregar o header quando o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', () => {
    loadHTML('header.html', 'header');
});
