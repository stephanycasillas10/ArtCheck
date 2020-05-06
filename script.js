$("button").click(function(){
  let userInput= $("input").val();
  let movieAPI = `https://www.omdbapi.com/?t=${userInput}&apikey=e043d03d`;
  
  
  fetch(movieAPI)
    .then(function(response) {  
      return response.json();
  
    })
    .then(function(data) { 
     if (data.Response === "False"){
        alert("Sorry Search not Found :/")
     }
     else {
      fetch(movieAPI)
      .then(function(response) {  
        return response.json();

      })
      .then(function(data){ 
       var poster = data.Poster
       var genre = data.Genre
       var awards = data.Awards
       var actors = data.Actors
        $(".imghere").html(`<img src=${poster}>`)
        $(".genre").html(`<p>${genre}</p>`)
        $(".awards").html(`<p>${awards}</p>`)
        $(".actors").html(`<p>${actors}</p>`)
      });
     }
  })
});