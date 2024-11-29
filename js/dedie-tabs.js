document.addEventListener('DOMContentLoaded', function() {
    const tabSidebar = document.querySelector('.dedie-tab-sidebar');
    const contentContainer = document.querySelector('.dedie-content-container');
    const prevButton = document.querySelector('.dedie-prev-button');
    const nextButton = document.querySelector('.dedie-next-button');

    let currentTabIndex = 0;

    // Actualiza la visibilidad del botón "Previous" según el índice de la pestaña actual
    function updatePrevButton() {
        if (currentTabIndex === 0) {
            prevButton.classList.add('hide');
        } else {
            prevButton.classList.remove('hide');
        }
    }

    // Función para mostrar la siguiente pestaña (ahora global)
    window.showNextTab = function showNextTab() {
        contentContainer.children[currentTabIndex].classList.remove('active');
        currentTabIndex++;

        if (currentTabIndex >= contentContainer.children.length) {
            currentTabIndex = 0;
        }

        contentContainer.children[currentTabIndex].classList.add('active');
        tabSidebar.querySelectorAll('li').forEach(tab => tab.classList.remove('active'));
        const lis = tabSidebar.querySelectorAll('li');
        lis[currentTabIndex].classList.add('active');

        nextButton.style.display = (currentTabIndex === contentContainer.children.length - 1) ? 'none' : 'block';
        updatePrevButton();
    };

    // Función para mostrar la pestaña anterior
    function showPrevTab() {
        contentContainer.children[currentTabIndex].classList.remove('active');
        currentTabIndex--;

        if (currentTabIndex < 0) {
            currentTabIndex = contentContainer.children.length - 1;
        }

        contentContainer.children[currentTabIndex].classList.add('active');
        tabSidebar.querySelectorAll('li').forEach(tab => tab.classList.remove('active'));
        const lis = tabSidebar.querySelectorAll('li');
        lis[currentTabIndex].classList.add('active');

        nextButton.style.display = 'block';
        updatePrevButton();
    }

    // Añadir evento click al botón "Next"
    nextButton.addEventListener('click', showNextTab);

    // Añadir evento click al botón "Previous"
    prevButton.addEventListener('click', showPrevTab);

    // Manejar los clics en las pestañas
    tabSidebar.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            event.preventDefault(); // Evita que se desplace la página al hacer clic en una pestaña

            const clickedTab = event.target;
            const tabIndex = Array.prototype.indexOf.call(tabSidebar.querySelectorAll('a'), clickedTab);
            const tabContent = contentContainer.children[tabIndex];

            // Cambia la pestaña activa
            tabSidebar.querySelectorAll('li').forEach(tab => tab.classList.remove('active'));
            clickedTab.parentNode.classList.add('active');

            // Muestra el contenido correspondiente a la pestaña activa
            contentContainer.querySelectorAll('.dedie-tab-content').forEach(content => {
                content.classList.remove('active');
            });
            tabContent.classList.add('active');

            currentTabIndex = tabIndex;

            // Mantiene el menú desplegable abierto si se hace clic en la pestaña activa
            const dropdown = clickedTab.parentNode.querySelector('.dedie-dropdown');
            if (dropdown) {
                if (clickedTab.parentNode.classList.contains('active')) {
                    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
                }
            }

            updatePrevButton();

            // Elimina la clase 'initial-active' cuando el usuario interactúa con las pestañas
            const initialActiveLink = tabSidebar.querySelector('a.initial-active');
            if (initialActiveLink) {
                initialActiveLink.classList.remove('initial-active');
            }
        }
    });

    // Añadir una nueva clase 'initial-active' al enlace activo de la pestaña cuando la página se carga
    const initialActiveLink = tabSidebar.querySelector('a.active');
    console.log('Se aplicó el cambio a la primera pestaña');

    updatePrevButton(); // Inicializar la visibilidad del botón "Previous"
});
