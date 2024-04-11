const filmSection = documento.getElementById('films')

const renderFilms = tempData. map((movie)=>{
    const movieElement = document.creadteElement('article')
    const containerMovie = document.createElement('div')

    movieElement.classList.add('movie')
    containerMovie.classList.add('divMovie')
    
    movieElement.innerHTML = `<img src="${movie.poster}"
    alt=${movie.tittle}>`

    containerMovie.innerHTML =`
    <h3>${movie.tittle} - (${movie.year}) </h3>
    <p><strong>Director: </strong> ${movie.director}</p>
    <p><strong>Duración: </strong> ${movie.duration}</p>
    <p><strong>Género: </strong> ${movie.genre.join(', ')}</p>
    <p><strong>Rate: </strong> ${movie.rate}</p>`


movieElement.appendChild(containerMovie)
filmSection.appendChild(movieElement)

})

$.get('https://students-api.up.railway.app/movies', (data)=> data.map(renderFilms)).fail(()=>alert('Error al traer las peliculas'))


