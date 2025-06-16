document.addEventListener('DOMContentLoaded', () => {
    const tutorials = [
        {
            title: 'Como fazer pão caseiro',
            category: 'Padaria',
            description: 'Aprenda a fazer um delicioso pão caseiro crocante por fora e macio por dentro.',
            url: 'tutorials/seus-tutoriais.html'
        },
        {
            title: 'Bolo de Cenoura com Cobertura',
            category: 'Doces',
            description: 'Receita clássica com cobertura cremosa de chocolate.',
            url: 'tutorials/seus-tutoriais.html'
        },
        {
            title: 'Macarrão ao Alho e Óleo',
            category: 'Massas',
            description: 'Rápido, simples e cheio de sabor. Ideal para o dia a dia.',
            url: 'tutorials/seus-tutoriais.html'
        },
        {
            title: 'Panqueca Americana',
            category: 'Café da Manhã',
            description: 'Fofinha e perfeita com mel ou frutas.',
            url: 'tutorials/seus-tutoriais.html'
        }
    ];

    const renderCards = (list) => {
        const container = document.getElementById('cards');
        if (!container) return;

        container.innerHTML = ''; 

        if (list.length === 0) {
            container.innerHTML = '<p>Nenhum tutorial encontrado.</p>';
            return;
        }

        list.forEach(tut => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <h3>${tut.title}</h3>
                <p class="category">${tut.category}</p>
                <p>${tut.description}</p>
                <a href="${tut.url}" class="btn">Ler tutorial</a>
            `;
            container.appendChild(card);
        });
    };

    const searchInput = document.getElementById('search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const value = e.target.value.toLowerCase();
            const filtered = tutorials.filter(tut =>
                tut.title.toLowerCase().includes(value) ||
                tut.description.toLowerCase().includes(value)
            );
            renderCards(filtered);
        });
    }
  
    renderCards(tutorials);
});
