document.addEventListener("DOMContentLoaded", () => {
    const entries = document.getElementById("entries");
    const sortByName = document.getElementById('button1');
	const sortByArtist = document.getElementById('button2');

    sortByName.onclick = function () {
        const songs = [];
        const listElements = entries.querySelectorAll('.listElement');

        for (const listElement of listElements) {
            songs.push(listElement);
            entries.removeChild(listElement);
        }

        songs.sort((a, b) => {
            const aName = a.querySelector('div.names span.name').textContent;
            const bName = b.querySelector('div.names span.name').textContent;

            return aName.localeCompare(bName);
        });

        for (const song of songs)
            entries.appendChild(song);
	};



    sortByArtist.onclick = function () {
        const songs = [];
        const listElements = entries.querySelectorAll('.listElement');

        for (const listElement of listElements) {
            songs.push(listElement);
            entries.removeChild(listElement);
        }

        songs.sort((a, b) => {
            const aName = a.querySelector('div.names span.artist').textContent;
            const bName = b.querySelector('div.names span.artist').textContent;

            return aName.localeCompare(bName);
        });

        for (const song of songs)
            entries.appendChild(song);
    };
});
