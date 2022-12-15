let sectionFood__buttonElement = document.querySelector (".js-show-hideSectionFoodButton");
let foldableContainerFoodElement= document.querySelector (".js-foldableFoodContainer");
 
sectionFood__buttonElement.addEventListener ("click", () => {
    foldableContainerFoodElement.classList.toggle ("section__foldableContainer--hide");
}); 

sectionFood__buttonElement.addEventListener ("click", () => {
    if (sectionFood__buttonElement.innerText === "Hide") {
        sectionFood__buttonElement.innerText = "Show";
    } else {
        sectionFood__buttonElement.innerText = "Hide";
    }
});

let sectionCulture__buttonElement = document.querySelector (".js-show-hideSectionCultureButton");
let foldableContainerCultureElement= document.querySelector (".js-foldableCultureContainer");
 
sectionCulture__buttonElement.addEventListener ("click", () => {
    foldableContainerCultureElement.classList.toggle ("section__foldableContainer--hide");
}); 

sectionCulture__buttonElement.addEventListener ("click", () => {
    if (sectionCulture__buttonElement.innerText === "Hide") {
        sectionCulture__buttonElement.innerText = "Show";
    } else {
        sectionCulture__buttonElement.innerText = "Hide";
    }
});

let sectionTravel__buttonElement = document.querySelector (".js-show-hideSectionTravelButton");
let foldableContainerTravelElement= document.querySelector (".js-foldableTravelContainer");
 
sectionTravel__buttonElement.addEventListener ("click", () => {
    foldableContainerTravelElement.classList.toggle ("section__foldableContainer--hide");
}); 

sectionTravel__buttonElement.addEventListener ("click", () => {
    if (sectionTravel__buttonElement.innerText === "Hide") {
        sectionTravel__buttonElement.innerText = "Show";
    } else {
        sectionTravel__buttonElement.innerText = "Hide";
    }
});
