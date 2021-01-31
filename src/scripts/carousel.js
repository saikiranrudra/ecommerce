let carousel__items = document.getElementsByClassName("carousel__item");
let carousel__left = document.querySelector(".carousel__navigation--left");
let carousel__right = document.querySelector(".carousel__navigation--right");

if(carousel__items && carousel__left && carousel__right) {
    const total = carousel__items.length;
    let currentItem = 0;
    carousel__left.addEventListener("click", () => {
        currentItem = updateItem("LEFT", total, currentItem, carousel__items);
    })
    carousel__right.addEventListener("click", () => {
        currentItem = updateItem("RIGHT", total, currentItem, carousel__items);
    })
}

const hideAll = (items) => {
    for (item of items) {
        item.classList.remove("carousel__item--visible");
    }
}

const updateItem = (direction, totalCount, currentCount, items) => {
    switch(direction){
        case "LEFT": {
            hideAll(items);
            currentCount = currentCount == totalCount - 1 ? 0 : currentCount + 1;
            items[currentCount].classList.add("carousel__item--visible");
            return currentCount;
        }
        case "RIGHT": {
            hideAll(items);
            currentCount = currentCount == 0 ? totalCount - 1 : currentCount - 1;
            items[currentCount].classList.add("carousel__item--visible");
            return currentCount;
        }
        default:
            return currentCount;
    }

}