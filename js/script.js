const hideShowText__foodSection = (sectionFood__buttonElement) => {
    if (sectionFood__buttonElement.innerText === "Hide") {
        sectionFood__buttonElement.innerText = "Show";
    } else {
        sectionFood__buttonElement.innerText = "Hide";
    }


};

const hideShowText__cultureSection = (sectionCulture__buttonElement) => {
    if (sectionCulture__buttonElement.innerText === "Hide") {
        sectionCulture__buttonElement.innerText = "Show";
    } else {
        sectionCulture__buttonElement.innerText = "Hide";
    }
};


const init = () => {

    const sectionFood__buttonElement = document.querySelector(".js-show-hideSectionFoodButton");
    const foldableContainerFoodElement = document.querySelector(".js-foldableFoodContainer");


    sectionFood__buttonElement.addEventListener("click", () => {
        foldableContainerFoodElement.classList.toggle("section__foldableContainer--hide");

        sectionFood__buttonElement.addEventListener("click", hideShowText__foodSection);

        hideShowText__foodSection(sectionFood__buttonElement);

    });

    const sectionCulture__buttonElement = document.querySelector(".js-show-hideSectionCultureButton");
    const foldableContainerCultureElement = document.querySelector(".js-foldableCultureContainer");

    sectionCulture__buttonElement.addEventListener("click", () => {
        foldableContainerCultureElement.classList.toggle("section__foldableContainer--hide");


        sectionCulture__buttonElement.addEventListener("click", hideShowText__cultureSection);


        hideShowText__cultureSection(sectionCulture__buttonElement);

    });
}

init();







let sectionTravel__buttonElement = document.querySelector(".js-show-hideSectionTravelButton");
let foldableContainerTravelElement = document.querySelector(".js-foldableTravelContainer");

sectionTravel__buttonElement.addEventListener("click", () => {
    foldableContainerTravelElement.classList.toggle("section__foldableContainer--hide");
});

sectionTravel__buttonElement.addEventListener("click", () => {
    if (sectionTravel__buttonElement.innerText === "Hide") {
        sectionTravel__buttonElement.innerText = "Show";
    } else {
        sectionTravel__buttonElement.innerText = "Hide";
    }
});
