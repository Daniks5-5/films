var Films_list = [{
   Poster: "https://m.media-amazon.com/images/M/MV5BMTQ3ODY4NzYzOF5BMl5BanBnXkFtZTgwNjI3OTE4MDE@._V1_SX300.jpg",
   Title: "Need For Speed",
   Year : "2005",
   Type: "Фильм",
   Rated:"PG-13",
   Released:"25 Dec 1997",
   Runtime:"139 min",
   Genre:"Comedy, Drama, Romance",
   Director:"James L. Brooks",
   Actors:"Jack Nicholson, Helen Hunt, Greg Kinnear",
   Plot:"A single mother and waitress, a misanthropic author, and a gay artist form an unlikely friendship after the artist is assaulted in a robbery.",

},
{
   Poster: "https://m.media-amazon.com/images/M/MV5BMTQ3ODY4NzYzOF5BMl5BanBnXkFtZTgwNjI3OTE4MDE@._V1_SX300.jpg",
   Title: "Need For Speed",
   Year : "2007",
   Type: "Сериал",
   Rated:"PG-13",
   Released:"25 Dec 1997",
   Runtime:"139 min",
   Genre:"Comedy, Drama, Romance",
   Director:"James L. Brooks",
   Actors:"Jack Nicholson, Helen Hunt, Greg Kinnear",
   Plot:"A single mother and waitress, a misanthropic author, and a gay artist form an unlikely friendship after the artist is assaulted in a robbery.",

},
{
   Title: "Batman",
   Year : "2009",
   Type: "Сериал",
   Rated:"PG-13",
   Released:"25 Dec 1997",
   Runtime:"139 min",
   Genre:"Comedy, Drama, Romance",
   Director:"James L. Brooks",
   Actors:"Jack Nicholson, Helen Hunt, Greg Kinnear",
   Plot:"A single mother and waitress, a misanthropic author, and a gay artist form an unlikely friendship after the artist is assaulted in a robbery.",

}
]


class API{

      constructor(){
       this.baseUrl = ' http://www.omdbapi.com';
   
      }
      getMems(){
       return fetch(`${this.baseUrl}/?t=Need+for+Speed&plot=full`)
          .then(data => {
           console.log(data.json());
          }); //возвращаю memes, который мне возвращает fetch
      }
   }