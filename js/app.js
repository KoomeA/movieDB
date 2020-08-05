//initial values latest movies//
const API_KEY = 'f455489faa2f6746ec8dcd92d5d8837a';
const image_url = 'https://image.tmdb.org/t/p/w500';

const url = 'https://api.themoviedb.org/3/movie/latest?api_key=f455489faa2f6746ec8dcd92d5d8837a';


//selecting elements from DOM//
const buttonElement = document.querySelector('#latest');
const inputElement = document.querySelector('#inputValue');
const movieLatest = document.querySelector('#movies-latest');

function movieSection(movies){
    return movies.map(movie)=>{
        if(movie.poster_path){
        return `
        <img src=${image_url + movie.poster_path} data-movie-id=${movie.id}/>
        `;
        }
    }
}

/*
<div class="movie">
            <section class="section">
            </section>
            <div class="content">
                <p id="content-close">Close</p>
            </div>
</div>
*/

function createMovieContainer(movie){
    const movieElement= document.createElement('div');
    movieElement.setAttribute('class', 'movie');

    const movieTemplate=`
    <section class="section">
       ${movieSection(movies)}
            </section>
            <div class="content">
                <p id="content-close">Close</p>
            </div>
    `;

    movieElement.innerHTML = movieTemplate;
    return movieElement;
}

buttonElement.onclick = function(event){
    event.preventDefault();
    const value = inputElement.value;

    const newUrl = url + '' + value;

    fetch(newUrl)
     .then((res) =>res.json())
     .then((data) =>{
         const movies = data.results;
         const movieBlock=createMovieContainer(movies);
         movieLatest.appendChild(movieBlock)
         console.log('Data: ', data);
     })
     .catch((error)=>{
         console.log('Error: ', error);
     });
    console.log('Value: ', value);
}