$(document).ready(() => {
    $('#searchForm').on('submit', (e)=> {
        let searchText=$('#searchText').val();
        getmovies(searchText);
        e.preventDefault();
    })
});