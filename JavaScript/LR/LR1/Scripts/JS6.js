var film = "Калина красная"
function ShowGoodFilm()
{
    alert(film + ' - хороший фильм!')
}
function ShowBadFilm()
{
    film = '11 сентебря'
    alert(film + ' - плохой фильм!')
}

ShowGoodFilm()//Калина красная - хороший фильм!
ShowBadFilm()//11 сентебря - плохой фильм!
ShowGoodFilm()//11 сентебря - хороший фильм!