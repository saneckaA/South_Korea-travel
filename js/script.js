const hideShowTextFoodSection = (sectionFoodButtonElement) => {
    if (sectionFoodButtonElement.innerText === "Hide") {
        sectionFoodButtonElement.innerText = "Show";
    } else {
        sectionFoodButtonElement.innerText = "Hide";
    }
};

const hideShowTextCultureSectionElement = (sectionCultureButtonElement) => {
    if (sectionCultureButtonElement.innerText === "Hide") {
        sectionCultureButtonElement.innerText = "Show";
    } else {
        sectionCultureButtonElement.innerText = "Hide";
    }
};

const hideShowTextTravelSectionElement = (sectionTravelButtonElement) => {
    if (sectionTravelButtonElement.innerText === "Hide") {
        sectionTravelButtonElement.innerText = "Show";
    } else {
        sectionTravelButtonElement.innerText = "Hide";
    }
};


const init = () => {

    const sectionFoodButtonElement = document.querySelector(".js-show-hideSectionFoodButton");
    const foldableContainerFoodElement = document.querySelector(".js-foldableFoodContainer");


    sectionFoodButtonElement.addEventListener("click", () => {
        foldableContainerFoodElement.classList.toggle("section__foldableContainer--hide");

        sectionFoodButtonElement.addEventListener("click", hideShowTextFoodSection);

        hideShowTextFoodSection(sectionFoodButtonElement);

    });

    const sectionCultureButtonElement = document.querySelector(".js-show-hideSectionCultureButton");
    const foldableContainerCultureElement = document.querySelector(".js-foldableCultureContainer");

    sectionCultureButtonElement.addEventListener("click", () => {
        foldableContainerCultureElement.classList.toggle("section__foldableContainer--hide");


        sectionCultureButtonElement.addEventListener("click", hideShowTextCultureSectionElement);


        hideShowTextCultureSectionElement(sectionCultureButtonElement);

    });


    const sectionTravelButtonElement = document.querySelector(".js-show-hideSectionTravelButton");
    const foldableContainerTravelElement = document.querySelector(".js-foldableTravelContainer");

    sectionTravelButtonElement.addEventListener("click", () => {
        foldableContainerTravelElement.classList.toggle("section__foldableContainer--hide");


        sectionTravelButtonElement.addEventListener("click", hideShowTextTravelSectionElement);

        hideShowTextTravelSectionElement(sectionTravelButtonElement);

    });
};

init();