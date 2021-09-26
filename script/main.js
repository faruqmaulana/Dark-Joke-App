for(let i=1; i<=15; i++){
fetch('https://viko-api.herokuapp.com/api/darkjokes?apikey=vinko')
  .then(response => response.json())
  .then(data => {
        let img = data.result;
        let cardImg = '';

        cardImg += 
        `<div class="mb-4">
            <img src="${img}" style="width:100%; border-radius:10px; margin">
            <p style="color: #e9eaeb; margin-top:10px;" class="text-center font-weight-bold">Gambar ${i}</p>
        </div>
        <hr style="    
        margin-top: 1rem;
        margin-bottom: 1rem;
        border: 0;
        border-top: 1px solid #e9eaeb">`;

        const imgContent = document.querySelector('.images');
        imgContent.innerHTML += cardImg;
        
  });
}
