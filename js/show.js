const resultList = document.querySelector('#results')
const url = 'https://api.tvmaze.com/search/shows?q=show&api-key=';
const apiKey = 'nYDG8h49HWKdj4ZKiaHIdd-kFAhxityY';

fetch(url + apiKey)
    .then((response) => response.json())
    .then((data) => {
        // Assuming data is already an array of results
        if (Array.isArray(data)) {
            data.forEach(function (value) {
                console.log(value);
                // Assuming the show URL is nested within the 'show' object
                const showUrl = value.show && value.show.url ? value.show.url : '#';
                // Assuming the image URL is nested within the 'show' object
                const imageUrl = value.show && value.show.image && value.show.image.medium ? value.show.image.medium : 'https://via.placeholder.com/200x300'; // Placeholder image if no image available
                const type = value.show && value.show.type ? value.show.type : 'Unknown';
                const language = value.show && value.show.language ? value.show.language : 'Unknown';
                const summary = value.show && value.show.summary ? value.show.summary : 'No summary available.';

                const articleElement =  `<div class="col-md-4">
                    <div class="card mb-4" >
                        <img src="${imageUrl}" class="card-img-top" style="max-width: 200px; max-height: 200px;" alt="Show Image">
                        <div class="card-body" style="height: 200px; overflow: auto; color:grey"> 
                            <h5 class="card-title" style="color: grey;">${value.show.name}</h5>
                            <p class="card-text">Type: ${type}</p>
                            <p class="card-text">Language: ${language}</p>
                            <div class="card-text" style=text-color:black>${summary}</div>
                            <a target="_blank" href="${showUrl}" class="btn btn-primary">View Show</a>
                        </div>
                    </div>
                </div>`;
                resultList.insertAdjacentHTML('beforeend', articleElement);
            });
        } else {
            console.error("Data is not an array.");
        }
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });
