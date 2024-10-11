let l = localStorage.getItem('res');
      let result;

      if (l != undefined) {
        result = JSON.parse(l);
      } else {
        result = {
          win: 0,
          loss: 0,
          tie: 0,
        };
      }

      // Re-assign the displayres function after loading the result object
      result.displayres = function () {
        return `win: ${this.win}, loss: ${this.loss}, tie: ${this.tie}`;
      };

      function resetScore() {
        result = {
          win: 0,
          loss: 0,
          tie: 0,
        };
        result.displayres = function () {
          return `win: ${this.win}, loss: ${this.loss}, tie: ${this.tie}`;
        };
        localStorage.setItem('res', JSON.stringify(result)); // Update localStorage

        showResult();
      }

      function generateComputerChoice() {
        let randomVal3 = Math.random() * 3;

        if (randomVal3 > 0 && randomVal3 <= 1) {
          return 'Bat';
        } else if (randomVal3 > 1 && randomVal3 <= 2) {
          return 'Ball';
        } else {
          return 'Stump';
        }
      }

      function getResult(userMove, computerMove) {
        if (userMove === 'Ball') {
          if (computerMove === 'Ball') {
            result.tie++;
            return 'Tie';
          } else if (computerMove == 'Bat') {
            result.loss++;
            return 'Computer won';
          } else {
            result.win++;
            return 'You won';
          }
        } else if (userMove == 'Bat') {
          if (computerMove === 'Ball') {
            result.win++;
            return 'You won';
          } else if (computerMove == 'Bat') {
            result.tie++;
            return 'Tie';
          } else {
            result.loss++;
            return 'Computer won';
          }
        } else {
          if (computerMove === 'Ball') {
            result.loss++;
            return 'Computer won';
          } else if (computerMove == 'Bat') {
            result.win++;
            return 'You won';
          } else {
            result.tie++;
            return 'Tie ';
          }
        }
      }

      function showResult(computerChoice, display, res) {
        localStorage.setItem('res', JSON.stringify(result));
        document.querySelector('#user-move').innerHTML= display?`You have chosen ${display}`:'';
        document.querySelector('#computer-move').innerHTML=computerChoice?`Computer have chosen ${computerChoice}`:'';
        document.querySelector('#result').innerHTML=res?`Result is : ${res}`:'';
        document.querySelector('#score').innerHTML=`Score : ${result.displayres()}`;
        // alert(`computer choice: ${computerChoice} and your choice is: ${display} 
        // result: ${res}
        // ${result.displayres()}
        // `);
      }