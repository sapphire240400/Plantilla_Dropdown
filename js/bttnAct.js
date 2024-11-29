// ;;;;;;;;;;;;;;;;;;;;;;;;;
// ;;  BOTONES ACTIVIDAD  ;;
//;;;;;;;;;;;;;;;;;;;;;;;;;;


document.addEventListener("DOMContentLoaded", function () {
  const buttonsB = document.querySelectorAll(".dem-toggle-button-subtabs-baul");
  const contentsBaul = document.querySelectorAll(".dem-content-subtabs-baul");
  const nextTabs = document.querySelectorAll(".dem-next-tab-baul");  // Selecciona todos los elementos "next"

  buttonsB.forEach((buttonB, indexB) => {
    buttonB.addEventListener("click", () => {
      buttonsB.forEach((btnB) => btnB.classList.remove("dem-active-button-subtabs-baul"));
      buttonB.classList.add("dem-active-button-subtabs-baul");

      contentsBaul.forEach((contentB) => contentB.classList.remove("dem-active-content-subtabs-baul"));
      contentsBaul[indexB].classList.add("dem-active-content-subtabs-baul");
    });
  });

  nextTabs.forEach((nextTab, index) => {
    nextTab.addEventListener("click", () => {
      const nextIndex = (index + 1) % contentsBaul.length; // Calcula el índice de la siguiente pestaña
      
      buttonsB.forEach((btnB) => btnB.classList.remove("dem-active-button-subtabs-baul"));
      buttonsB[nextIndex].classList.add("dem-active-button-subtabs-baul");
      
      contentsBaul.forEach((contentB) => contentB.classList.remove("dem-active-content-subtabs-baul"));
      contentsBaul[nextIndex].classList.add("dem-active-content-subtabs-baul");
    });
  });
});
