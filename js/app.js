$(document).ready(() => {
    $('#searchForm').on('submit', (e)=> {
        let searchText=$('#searchText').val();
        getMovies(searchText);
        e.preventDefault();
    })
});

function getMovies(searchText){
    axios.get('http://www.omdbapi.com?s=' = searchText)
    .then((response)=> {
        let movies =response.data.search;
        let output ='';
        $.each(movies, (index, movie)=>{
            output +=`
            <div class="col-md-3">
                <div class="well text-center">
                    <img src="${movie.Poster}">
                    <h5>${movie.Title}</h5>
                    <a onclick="movieSelected('${movie.Imdb}')" class="btn btn-primary" href="#">Movie Details</a>
                </div>
            </div>
            `;
        });
        $('#movies').html(output);
    })
    .catch((err) => {
        alert(":( sorry, didin't find anything matching that")
    });
}