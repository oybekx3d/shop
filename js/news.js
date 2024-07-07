function loadNews(){
    fetch("data/news.json")
            .then(response => response.json())
            .then(data =>
                    Object.values(data).forEach(datum => {
                        let parent = document.getElementById('news');
                        let contDiv = document.createElement('div');
                        contDiv.id = "newsCont";
                        innerDivTop = document.createElement('div');
                        innerDivTop.className = "newsContClickCheck";
                        innerDivBottom = document.createElement('div');
                        innerDivBottom.className = "newsContFull";
                        let img = document.createElement('img');
                        img.setAttribute('src', datum.img);
                        let header = document.createElement('h3');
                        header.textContent = datum.header;
                        let description = document.createElement('p');
                        description.textContent = datum.description;
                        let author = document.createElement('h4');
                        author.textContent = ("Written By "+ datum.author);
                        let date = document.createElement('h4');
                        date.textContent = datum.dateWritten;
                        let fullNews = document.createElement('p');
                        fullNews.textContent = datum.fullNews;
                        innerDivTop.appendChild(header);
                        innerDivTop.appendChild(description);
                        innerDivBottom.appendChild(date);
                        innerDivBottom.appendChild(img);
                        innerDivBottom.appendChild(fullNews);
                        innerDivBottom.appendChild(author);
                        contDiv.appendChild(innerDivTop);
                        contDiv.appendChild(innerDivBottom);
                        parent.appendChild(contDiv);
}))}
