const resultList = document.querySelector('#results')
const url = 'https://api.tvmaze.com/search/people?q=people&api-key=';
const apiKey = 'nYDG8h49HWKdj4ZKiaHIdd-kFAhxityY';

fetch(url + apiKey)
    .then((response) => response.json())
    .then((data) => {
        // Assuming data is already an array of results
        if (Array.isArray(data)) {
            data.forEach(function (value) {
                console.log(value);
                // Assuming the people URL is nested within the 'people' object
                const peopleUrl = value.people && value.people.url ? value.people.url : '#';
                // Assuming the image URL is nested within the 'people' object
                const imageUrl = value.people && value.people.image && value.people.image.medium ? value.people.image.medium : 'https://via.placeholder.com/200x300'; // Placeholder image if no image available
                const type = value.people && value.people.gender ? value.people.gender : 'Unknown';
                const language = value.people && value.people.language ? value.people.language : 'Unknown';
                const summary = value.people && value.people.summary ? value.people.summary : 'No summary available.';

                const peopleElement =  `<div class="col-md-4">
                    <div class="card mb-4" >
                        <img src="${imageUrl}" class="card-img-top" style="max-width: 200px; max-height: 200px;" alt="People Image">
                        <div class="card-body" style="height: 200px; overflow: auto; color:grey;"> 
                            <h5 class="card-title" style="color: grey;">${value.person.name}</h5>
                            <p class="card-text">Type: ${type}</p>
                            <p class="card-text">Language: ${language}</p>
                            <div class="card-text" style="color: black;">${summary}</div>
                            <a target="_blank" href="${peopleUrl}" class="btn btn-primary">View People</a>
                        </div>
                    </div>
                </div>`;
                resultList.insertAdjacentHTML('beforeend', peopleElement);
            });
        } else {
            console.error("Data is not an array.");
        }
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });
