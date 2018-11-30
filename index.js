function mathFunction(a, b) {
    return a * b
}
mathFunction(3, 4)

const person = {
    "name": "Lil Mo Diddy",
    "city": "Columbia City",
    "hungry": true,
    "numberOfPizzaSlicesCanBeEatenBy": 1200,
}
console.log(person)

const album = {
    title: {
        albumTitle: "Fight Night"
    },
    songs: {
        track1: "songstuff"
        track2: "moreSongStuff"
    },
    getSongs() {
        return `${this.title.albumTitle} ${this.songs.track1}`
    }
}

console.log(album.songs)
album.getSongs()



const top6 = [
        { artist: "Maroon 5 ft Cardi B", music: "Girls like You" },
        { artist: "Travis Scott", music: "Sicko Mode" },
        { artist: "Juice WRLD", music: "Lucid Dreams" },
        {
            artist: "Marshmello & Bastille",
            music: "Happier",
            { artist: "Post Malone", music: "Better Now" },
            { artist: "Kodak Black ft Travis Scott & Offset", music: "ZEZE" }
        ]

        for (let i = 0; i < top6.length; i++) {
            console.log(top6)
        }