function loadBenchmarks(){
    fetch("data/benchmarks.json") 
            .then(response => response.json())
            .then(data =>
                    Object.values(data).forEach(datum => {
                        let parent = document.getElementById('benchmarksVidCont');
                        let contDiv = document.createElement('div');
                        contDiv.className = "filter";
                        let vid = document.createElement('iframe');
                        vid.src = (datum.videoLink+'&rel=0');
                        vid.setAttribute('allowfullscreen', 'allowfullscreen');
                        let text = document.createElement('h3');
                        text.textContent = datum.BenchmarkedParts;
                        contDiv.appendChild(vid);
                        contDiv.appendChild(text);
                        parent.appendChild(contDiv);
}))}