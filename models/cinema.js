const Cinema = function (films) {
  this.films = films;
};

module.exports = Cinema;

Cinema.prototype.getFilmTitles = function() {
  return this.films.map(film => film.title)
}

Cinema.prototype.filterByGenre = function(genre) {
  return this.films.filter(film => {
    return film.genre === genre
  })
}

Cinema.prototype.totalRunningTime = function() {

  return this.films.reduce((runningTotal, film) => {
    return runningTotal + film.length
  }, 0)
}

Cinema.prototype.filmByTitle = function(title) {
  return this.films.find(film => film.title === title)
}

Cinema.prototype.filmsFromYear = function(year) {
  return this.films.some(film => film.year === year)
}

Cinema.prototype.filmsOverLength = function(length) {
  return this.films.every(film => film.length >= length)
}

// Cinema.prototype.filmsByYear = function(year) {
//   return this.films.filter(film => {
//     return film.year === year
//   })
// }

Cinema.prototype.filmsByProperty = function(key, value) {
  return this.films.filter(film => film[key] === value)
}





