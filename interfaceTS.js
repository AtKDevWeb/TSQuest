"use strict";
function sortGame(games) {
    return games.sort((g1, g2) => g2.star - g1.star);
}
const games = [
    {
        title: 'FF XIV',
        studio: 'Square Enix',
        star: 2
    },
    {
        title: 'WOW',
        studio: 'Blizzard',
        star: 5
    },
    {
        title: 'GTA V',
        studio: 'Rockstar Games',
        star: 4
    }
];
const result = sortGame(games);
for (let game of result) {
    console.log(game.title);
}
