function loadDeals(){
    let i = 1;
    fetch("data/deals.json") 
            .then(response => response.json())
            .then(data =>
                    Object.values(data).forEach(datum => {
                        let parent = document.getElementById('dealList');
                        let contDiv = document.createElement('div');
                        contDiv.id = "dealCont";
                        contDiv.className = 'filter';
                        let img = document.createElement('img');
                        img.src = datum.dealImg;
                        let header = document.createElement('h2');
                        header.textContent = datum.dealItemName;
                        let description = document.createElement('p');
                        description.textContent = datum.dealInfo;
                        let button = document.createElement('button');
                        button.setAttribute('onclick', 'buyDeal('+i+')');
                        i = i+1;
                        button.textContent = "Buy";
                        let price = document.createElement('h3');
                        price.textContent = datum.dealPrice;
                        contDiv.appendChild(img);
                        contDiv.appendChild(header);
                        contDiv.appendChild(description);
                        contDiv.appendChild(price);
                        contDiv.appendChild(button);
                        parent.appendChild(contDiv);
}))}
function buyDeal(id) {
  fetch("data/deals.json")
  .then(response => response.json())
  .then(data => { 
     window.open(data[id].buyLink);
})
}