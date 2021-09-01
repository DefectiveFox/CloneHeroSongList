
const entries = document.getElementById("entries");


var sortByName = document.getElementById('button1');
sortByName.onclick = function () {
	const songs =
	json.entries.sort(function (a, b) {
		return a.Name.localeCompare(b.Name);
	});
	list.innerHTML = '';
	for (var i = 0; i < json.entries.length; i++) {
		var entry = json.entries[i];
		var listItem = document.createElement('li');
		listItem.innerHTML = entry.Name;
		list.appendChild(listItem);
	}
};

/*var sortByArtist = document.getElementById('button2');
sortByArtist.onclick = function() {
  json.entries.sort(function(a, b) {
	return a.Artist.localeCompare(b.Artist);
  });
  list.innerHTML = '';
  for (var i = 0; i < json.entries.length; i++) {
	var entry = json.entries[i];
	var listItem = document.createElement('li');
	listItem.innerHTML = entry.Name;
	list.appendChild(listItem);
  }
};*/
