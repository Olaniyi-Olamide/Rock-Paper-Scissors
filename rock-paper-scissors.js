let score = JSON.parse(localStorage.getItem('score'));

if (score === null){
  score = {
    Wins: 0,
    Losses: 0,
    Ties: 0

  }
}

updatedScores();

function playGame(playerMove) {



    const computerPick = pickComputerMove();

      let result = '';

          if (playerMove === 'Rock'){
            if (computerPick === 'Rock') {
               result = 'Tie';
               } else if (computerPick === 'Paper') {
               result = 'You Lose';
               } else if ( computerPick === 'Scissors') {
               result = 'You Win';
               }

         } else if (playerMove === 'Paper'){
           if (computerPick === 'Rock') {
              result = 'You Win';
              }  else if (computerPick === 'Paper') {
              result = 'Tie';
              }    else if ( computerPick === 'Scissors') {
              result = 'You Lose';
              }

         } else if (playerMove === 'Scissors'){
            if (computerPick === 'Rock') {
            result = 'You Lose';
          } else if (computerPick === 'Paper') {
            result = 'You Win';
          } else if ( computerPick === 'Scissors') {
            result = 'Tie';
          }
         }
         if (result === 'You Win'){
          score.Wins++ ;
         } else if (result === 'You Lose'){
          score.Losses++ ;
         } else if (result === 'Tie'){
          score.Ties++ ;
         }

         localStorage.setItem('score', JSON.stringify(score));

         updatedScores();

         document.querySelector('.js-result').innerHTML = result;
         document.querySelector('.js-moves').innerHTML = 
          `You <img src="icons/${playerMove}-emoji.png" alt="paper-emoji" class="move-icon">  <img src="icons/${computerPick}-emoji.png" alt="scissors-emoji" class="move-icon"> Computer`;
              }

              function updatedScores() {
                  document.querySelector('.js-score').innerHTML = 
                   `Wins: ${score.Wins} Loses: ${score.Losses} Ties: ${score.Ties}` ;
              }

    
    function pickComputerMove() {
      const randomNumber = Math.random();
     
     let computerPick = '';

     if (randomNumber >= 0 && randomNumber < 1/3) {
       computerPick = 'Rock';
     }  else if (randomNumber >= 1/3 && randomNumber < 2/3){
       computerPick = 'Paper';
     } else if (randomNumber >= 2/3 && randomNumber < 1){
       computerPick = 'Scissors';
     }
         
    return computerPick;            
    }