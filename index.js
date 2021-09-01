const fs = require("fs");
const Handlebars = require("handlebars");

const css = fs.readFileSync(__dirname + "/style.css", "utf-8");
const template = fs.readFileSync(__dirname + "/index.template", "utf-8");
let data = JSON.parse(fs.readFileSync(__dirname + "/songs.json", "utf-8"));

data = data.map((song) => {
	function msToTime(duration) {
		var seconds = Math.floor((duration / 1000) % 60),
		  minutes = Math.floor((duration / (1000 * 60)) % 60),
		  hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

		hours = (hours == 0) ? "" : hours + ":";
		minutes = (minutes < 10) ? "0" + minutes : minutes;
		seconds = (seconds < 10) ? "0" + seconds : seconds;

		return hours + minutes + ":" + seconds;
	}
	song.displayLength = msToTime(song.songlength);

	function shitToColor(match, p, color, text) {
		return `<span style="color: ${color}">${text}</span>`;
	}

	song.Name = song.Name.replace(/<\s*color\s*=(")?([^"]+)\1>(.+?)<\s*\/color\s*>/g, shitToColor);
	song.Artist = song.Artist.replace(/<\s*color\s*=(")?([^"]+)\1>(.+?)<\s*\/color\s*>/g, shitToColor);
	song.Album = song.Album.replace(/<\s*color\s*=(")?([^"]+)\1>(.+?)<\s*\/color\s*>/g, shitToColor);
	song.Genre= song.Genre.replace(/<\s*color\s*=(")?([^"]+)\1>(.+?)<\s*\/color\s*>/g, shitToColor);
	song.Charter = song.Charter.replace(/<\s*color\s*=(")?([^"]+)\1>(.+?)<\s*\/color\s*>/g, shitToColor);
	song.Year = song.Year.replace(/<\s*color\s*=(")?([^"]+)\1>(.+?)<\s*\/color\s*>/g, shitToColor);
	song.Playlist = song.Playlist.replace(/<\s*color\s*=(")?([^"]+)\1>(.+?)<\s*\/color\s*>/g, shitToColor);

/*
"Name": "Yu-Gi-Oh! Theme Song",
"Artist": "TwitchPresents",
"Album": "Twitch",
"Genre": "Memes",
"Charter": "Helvian",
"Year": "1776",
"Playlist": "helvianalects",
*/



	return song;
})

const options = {
	css,
	data,
}

const result = Handlebars.compile(template)(options);

fs.writeFile("index.html", result, (err) => {
	if (err)
		console.err(err);
	else
		console.log('done');
});
