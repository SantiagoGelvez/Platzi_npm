names = [
    "David",
    "Luisa",
    "Cristian",
    "Angelo",
    "Martha",
    "Cristina",
    "Lucía",
    "Sebastian",
    "Mario",
    "Ana",
    "Duvan",
    "Santiago"
];

const randomMsg = () => {
    const message = names[Math.floor(Math.random() * names.length)];
    console.log(message);
}

module.exports = {randomMsg};