document.addEventListener("DOMContentLoaded", () => {
    const elementBookContent = document.querySelector("#bookDescription > .bookContent > .bookContentParagraphs")
    const elementHeader = document.querySelector("header > h1");
    const elementDescriptionSubtitle = document.querySelector("#bookDescription > h2");
    const elementDescriptionText = document.querySelector("#bookDescription > p");
    const elementImage = document.querySelector("#bookData > #image");

    function changeColumnOrder() {
        elementBookContent.style.columns = 1;
    }

    function changePageTitle() {
        elementHeader.textContent="Haga clic para editar el texto."
        elementHeader.contentEditable=true;
    }

    function changeSubtitleFormat() {
        elementDescriptionSubtitle.style.color="#9A3F3F";
        elementDescriptionText.style.fontFamily="verdana";
    }

    function addImage() {
        elementImage.src = "https://desarrolloweb.dlsi.ua.es/libros/html-css/img/html-css-curso-practico-avanzado-portada-completa.png";
    }

    document.querySelector(".wrapButtons button:nth-child(1)").onclick = changeColumnOrder;
    document.querySelector(".wrapButtons button:nth-child(2)").onclick = changePageTitle;
    document.querySelector(".wrapButtons button:nth-child(3)").onclick = changeSubtitleFormat;
    document.querySelector(".wrapButtons button:nth-child(4)").onclick = addImage;
});