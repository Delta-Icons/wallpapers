fetch('./config.json')
    .then((response) => response.json())
    .then((json) => {
        for (entry of json) {
            document.getElementById('grid').innerHTML += `<li><a target="_blank" href="${entry.url}" style="background-image: url('${entry.thumbUrl}');"></a><div class="details"><h3><a title="${entry.name}">${entry.name}</a></h3><p title="${entry.author}" class="image-author">${entry.author}</p></div></li>`
        }
    })
