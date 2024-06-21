class View{
    
    constructor(){
       
        this.findFilmsInput = document.getElementById('js-input'); //input поиска фильмов
        this.findBtn = document.getElementById('js-btn'); //кнопка поиска фильмов
        this.inputNode = document.getElementById('js-list'); //где будет отображаться список фильмов

        this.renderImg =document.getElementById('js-films-img'); //где отображается картинка
        this.renderText = document.getElementById('js-films-text'); //где описывается информация фильма
        this.renderDes = document.getElementById('js-description'); //где отображается описание
        this.renderInfoFilms = document.getElementById('js-list-info'); //отображение всей инфорамции о фильме

       
    }


    
//отображение списка фильмов
render() {
  
    this.findBtn.addEventListener('click', () =>{
        this.renderFilms();
    });
     


 
}

renderFilms() {
    let apiKey = '9d4cdf10'; //  API ключ OMDB
    let movieTitle = this.findFilmsInput.value; // Название фильма, введенное пользователем

    // Делаем  запрос к OMDB API
    fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${movieTitle}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.Response === "False") {
                this.inputNode.innerHTML = `
                    <div>
                        <p>Фильм не найден</p>
                    </div>`;
            } else {
                this.inputNode.innerHTML = `
                    <div class="films-list">
                         <div class="films__img">
                             <img src="${data.Poster}" alt="${data.Title}" class="photo-films">
                         </div>
                         <div class="films__text">
                             <p href="" class="films__link"> ${data.Title}</p>
                             <p class="films__years">Выпуск:  ${data.Year}</p>
                             <p class="films__years">Актеры:  ${data.Actors}</p>
                             <p class="films__years">Режиссер:  ${data.Director}</p>
                             <p class="films__years">Жанр:  ${data.Genre}</p>
                             <p class="films__years">Тип:  ${data.Type}</p>
                            
                         </div>
                    </div>`;
                    this.renderInfoFilms.innerHTML = `
                     <p class="films__plot">Описание: ${data.Plot}</p>
                    `;
            }
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
        });
}







}





    

