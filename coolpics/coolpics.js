const menuState = document.querySelector(".button");
function openMenue(){
    var element = document.querySelector("ul");

    if (element.classList.contains("hide")){
        element.classList.remove("hide");
    }
    else{
        element.classList.add("hide");
    }
}
menuState.addEventListener('click', openMenue);

function handleResize(){
    var element = document.querySelector("ul");
    if(window.innerWidth > 1000){
        element.classList.remove("hide");
    }
    else{
        element.classList.add("hide");
    }
}
window.addEventListener('resize', handleResize);

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
    <button class="closeViewer">X</button>
    <img src="${pic}" alt="{alt}">
    </div>`;
    
}

function closeViewer(){
    const viewer = document.querySelector(".viewer");
    if (viewer) viewer.remove();
}

function viewHandler(event) {
    const element = event.target;
    if (element.tagName !== 'IMG') return;

    const srcParts = element.getAttribute("src").split("-");
    const fullImageSrc = `${srcParts[0]}-full.jpeg`;
    const altText = element.alt;
    const viewerHTML = viewerTemplate(fullImageSrc, altText);

    document.body.insertAdjacentHTML("afterbegin", viewerHTML);
    const closeButton = document.querySelector(".closeViewer");
    closeButton.addEventListener("click", closeViewer);
}

const showImg = document.querySelector('.gallery');
showImg.addEventListener('click', viewHandler);
