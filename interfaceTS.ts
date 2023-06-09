interface Game {
    title: string;
    studio: string;
    star: number;
}

function sortGame(games: Game[]): Game[] {
    return games.sort((g1: Game, g2: Game) => g2.star - g1.star)
}

const games: Game[] = [
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
]

const result:Game[] = sortGame(games)
for (let game of result) {
    console.log(game.title)
}