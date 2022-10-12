// APiden Axios ile veri çekilmesi 





const ozetbilgi = document.querySelector('#ozetbilgi')

let sagdakiFilm,soldakiFilm
const onMovieSelect = async (movie,insertElement,taraf) => {

   const response = await axios.get("http://www.omdbapi.com/",
      {

         params: {
            apikey: "7cde167a",
            i: movie.imdbID
         }
      }
   );
   insertElement.innerHTML = movieTemplate(response.data)
   if (taraf ==="sag") {
      sagdakiFilm =response.data
   }else {
      soldakiFilm = response.data
   }

   if (sagdakiFilm && soldakiFilm) {
      kıyaslamaYap()
   }
   
}

function kıyaslamaYap () {
   //console.log("kıyaslamaya geçebilrisin");
   const sagIstatistikler = document.querySelectorAll('#sag-detay .notification')
   const solIstatistikler = document.querySelectorAll('#sol-detay .notification')

   sagIstatistikler.forEach((sagIst,index)=>{
      const solIst = solIstatistikler[index]
     // console.log(sagIst,solIst);

     const sagIstDegeri = parseInt(sagIst.dataset.value)
     const solIstDegeri = parseInt(solIst.dataset.value)

      if (sagIstDegeri> solIstDegeri) {
         solIst.classList.remove('is-primary')
         solIst.classList.add('is-warning')
      } else {
         sagIst.classList.remove('is-primary')
         sagIst.classList.add('is-warning')
      }

   })
}

const movieTemplate = detailedMovie => {

   //$ 612,123,456
   const hasilat =parseInt(detailedMovie.BoxOffice.replace(/\$/g,"").replace(/,/g,""))
   const MetaScore = parseInt(detailedMovie.MetaScore)
   const imdbRating = parseFloat(detailedMovie.imdbRating)
   const imdbVotes = parseInt(detailedMovie.imdbVotes.replace(/,/g,""))
   const awards = detailedMovie.Awards.split(" ").reduce((sum, cur) => {
      const value = parseInt(cur)
      if (isNaN(value)) {
         return sum
      } else {
         return sum + value
      }

   }, 0)


   return `
   <article class="media">
            <figure class="media-left">
                <p class="image">
                    <img src= "${detailedMovie.Poster}"/>
                </p>
            </figure>
            <div class="media-content">
            <div class="content">
                <h1>${detailedMovie.Title} </h1>
                <h4> ${detailedMovie.Genre}</h4>
                <p>${detailedMovie.Plot}</p>
                </div>
                </div>
        </article>

        <div data-value=${awards} class="notification is-primary">
            <p classs="title">${detailedMovie.Awards} </p>
            <p classs="subtitle">Awards </p>
        </div>
        <div data-value=${hasilat} class="notification is-primary">
        <p classs="title">${detailedMovie.BoxOffice} </p>
        <p classs="subtitle">Box Office </p>
        </div>
        <div  data-value=${MetaScore} class="notification is-primary">
        <p classs="title">${detailedMovie.MetaScore} </p>
        <p classs="subtitle">Meta Score</p>
        </div>
        <div data-value=${imdbRating} class="notification is-primary">
        <p classs="title">${detailedMovie.imdbRating} </p>
        <p classs="subtitle">IMDB Rating </p>
        </div>
        <div  data-value=${imdbVotes} class="notification is-primary">
        <p classs="title">${detailedMovie.imddbVotes} </p>
        <p classs="subtitle">IMDB Votes  </p>
        </div>



   `

}

 const  renderOptinon  = (movie)=>{
return `
<img src="${movie.Poster}"/>
${movie.Title}-(${movie.Year})
`
}
const  onOptionSelect = (movie)=> {
   onMovieSelect(movie)
}
// Sol tarafı oluşturduğumöuz
 createAutoComplete({
   root:document.querySelector('#left-autocomplete'),
   onOptionSelect(movie){
      onMovieSelect(movie,document.querySelector('#sol-detay'),"sol")
   },
   renderOptinon(movie) {
      return `
      <img  src="${movie.Poster}"/>
      ${movie.Title} (${movie.Year})
      `
   },
   inputValue(movie){
      return movie.Title
   }
   }
 );
// Sağ tarafı oluşturduğumöuz
 createAutoComplete({
   root:document.querySelector('#right-autocomplete'),
   onOptionSelect(movie){
      onMovieSelect(movie,document.querySelector('#sag-detay'),"sag")
   },
   renderOptinon(movie) {
      return `
      <img  src="${movie.Poster}"/>
      ${movie.Title} (${movie.Year})
      `
   },
   inputValue(movie){
      return movie.Title
   }
   }
 );