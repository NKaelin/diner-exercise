// dinner items with price
// side options, 2 incl
// comment vault

const menuItems = {
    'Hamburger': 8.00,
    'Roasted Chicken': 10.00,
    'Steak': 15.00,
    'Lasagna': 10.00
};

const sides = {
    'Fries': 0.00,
    'Sweet Potato Fries': 0.00,
    'Mashed Potatoes': 0.00,
    'Broccoli': 0.00
};

const comment = [
    "That's on of my favorites",
    "Very good choice",
    "You will love it",
    "That been very popular today"
]


const diner = () => {
    let foodArray = Object.keys(menuItems)
    let chosenEntree = prompt(`What would you like to eat?\n\n${foodArray}`)
    alert(`The ${chosenEntree} is $${menuItems[chosenEntree]}. Thanks for stopping in!`)
}


const entree = (chosenEntree) => {
    let mainEntree = chosenEntree.toLowerCase()
    if (mainEntree == menuItems[chosenEntree].toLowerCase()) {
        let sidesArray = Object.keys(sides)
        let chosenSideOne = prompt(` Oh ${chosenEntree}, ${randomComment}. That comes with two
    sides, what would you like for your first choice?\n\n${sidesArray}`)
    }
}

const randomFood = userMenuChoices[Math.floor(Math.random()*userMenuChoices.length)];
