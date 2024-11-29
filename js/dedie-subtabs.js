document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".dedie-toggle-button-subtabs");
    const contents = document.querySelectorAll(".dedie-content-subtabs");
    const nextTabs = document.querySelectorAll(".dedie-next-content-subtabs");

    // Función para mostrar un contenido según el índice
    function showContent(index) {
        buttons.forEach(btn => btn.classList.remove("dedie-active-button-subtabs"));
        contents.forEach(content => content.classList.remove("dedie-active-content-subtabs"));
        
        if (buttons[index]) buttons[index].classList.add("dedie-active-button-subtabs");
        if (contents[index]) contents[index].classList.add("dedie-active-content-subtabs");
    }

    // Evento para los botones de pestañas
    buttons.forEach((button, index) => {
        button.addEventListener("click", function() {
            showContent(index);
        });
    });

    // Evento para "Clic para ir al siguiente tema"
    nextTabs.forEach((nextTab, currentIndex) => {
        nextTab.addEventListener("click", function() {
            const nextIndex = (currentIndex + 1) % contents.length;
            showContent(nextIndex);
        });
    });
});