

const pet = {
    hunger: 50,
    health: 100,
    happiness: 70
};

const menuOptions = [
    "Feed",
    "Medicine",
    "Play",
    "Status"
];

let currentMenuIndex = 0;

const menuText = document.getElementById("menu");

const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");
const selectBtn = document.getElementById("selectBtn");



function updateMenu(){
    menuText.textContent = menuOptions[currentMenuIndex];
}


leftBtn.onclick = () => {

    currentMenuIndex--;

    if(currentMenuIndex < 0){
        currentMenuIndex = menuOptions.length - 1;
    }

    updateMenu();
};


rightBtn.onclick = () => {

    currentMenuIndex++;

    if(currentMenuIndex >= menuOptions.length){
        currentMenuIndex = 0;
    }

    updateMenu();
};

selectBtn.onclick = () => {

    const choice = menuOptions[currentMenuIndex];

    switch(choice){

        case "Feed":
            pet.hunger -= 20;
            pet.happiness += 5;
            break;

        case "Medicine":
            pet.health += 20;
            break;

        case "Play":
            pet.happiness += 20;
            pet.hunger += 10;
            break;

        case "Status":
            alert(
                "Hunger: " + pet.hunger +
                "\nHealth: " + pet.health +
                "\nHappiness: " + pet.happiness
            );
            break;
    }

    clampStats();
};

function clampStats(){

    pet.hunger = Math.max(0, Math.min(100, pet.hunger));
    pet.health = Math.max(0, Math.min(100, pet.health));
    pet.happiness = Math.max(0, Math.min(100, pet.happiness));

}


function gameTick(){

    pet.hunger += 2;
    pet.happiness -= 1;

    if(pet.hunger > 80){
        pet.health -= 2;
    }

    clampStats();

}

setInterval(gameTick, 5000);

updateMenu();