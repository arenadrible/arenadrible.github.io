// Adicionar interatividade básica
document.addEventListener('DOMContentLoaded', function() {
  // Adicionar efeito de clique nos cards
  const newsCards = document.querySelectorAll('.news-card');
  newsCards.forEach(card => {
    card.addEventListener('click', function() {
      const button = this.querySelector('button');
      if (button && button.textContent.includes('Ler')) {
        alert('Redirecionando para a notícia completa...');
      }
    });
  });

  // Botão de busca
  const searchBtn = document.querySelector('.fa-search').closest('button');
  if (searchBtn) {
    searchBtn.addEventListener('click', function() {
      const searchTerm = prompt('Digite o termo de busca:');
      if (searchTerm) {
        alert(`Buscando por: "${searchTerm}"`);
      }
    });
  }
});

