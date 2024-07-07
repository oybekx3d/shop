function loadCheatsheet(){
    let i = 1;
    fetch("data/blog.json")
            .then(response => response.json())
            .then(data =>
                    Object.values(data).forEach(datum => {
                        let parent = document.getElementById('blog');
                        let contDiv = document.createElement('a');
                        contDiv.className = "filter";
                        contDiv.setAttribute('href', ("blogpost.html?id="+datum.id));
                        let innerDiv = document.createElement('div');
                        let writtenDate = document.createElement('h4');
                        writtenDate.textContent = datum.dateWritten;
                        let header = document.createElement('h2');
                        header.textContent = datum.headline;
                        let desc = document.createElement('p');
                        desc.textContent = datum.description;
                        let authorInfo = document.createElement('h5');
                        authorInfo.textContent = ('Written By '+datum.author);
                        let img = document.createElement('img');
                        img.src = datum.imageLink;
                        innerDiv.appendChild(writtenDate);
                        innerDiv.appendChild(header);
                        innerDiv.appendChild(desc);
                        innerDiv.appendChild(authorInfo);
                        contDiv.appendChild(innerDiv);
                        contDiv.appendChild(img);
                        parent.appendChild(contDiv);
}))}
function loadBlogPost() {
    fetch("data/blog.json")
            .then(response => response.json())
            .then(data => {
                let id = new URLSearchParams(window.location.search).get('id');
                let pCont = document.getElementById("blogPostParagraphs");
                let pCount = data[id].paraCount;
                for (let i = 0; i < pCount+1; i++) {
                    let p = document.createElement('p');
                    let currentP = data[id]['para' + i];
                    console.log(currentP)
                    p.textContent = currentP;
                    pCont.appendChild(p);
                }
                document.getElementById('blogPostPopUp').style.display = "flex";
                document.getElementById('blogPostAuthor').textContent = ("Written by: "+data[id].author);
                document.getElementById('blodPostDate').textContent = ("Written date: "+data[id].dateWritten);
                document.getElementById('blogPostHeader').textContent = data[id].headline;
                document.getElementById('blogPostDesc').textContent = data[id].description;
                document.getElementById('blogPostMainImg').src = data[id].imageLink;
            })
}