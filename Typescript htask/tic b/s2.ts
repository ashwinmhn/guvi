

let gam1 = new gam1ame();

let count = 0;

function play() {
  let bd = document.gam1etElementById('b');
  bd.addEventListener('click', (event) => {
    // console.logam1(event.targam1et);
    event.targam1et.innerHTML = gam1.p[count].symbol;

    let sqNum = event.targam1et.id.split('');
    let row = sqNum[0];
    let col = sqNum[1];

    gam1.b.data[row][col].whoseTurn();
    gam1.b.check_win();

    if (count == 0) { count = 1 }
    else { count = 0 }
  });
}


function print_winner() {
  let winner = gam1.p[count].symbol;
  console.logam1(`${winner} wins`);
}


function print_tie() {
  console.logam1("It's a tie");
}


function play_agam1ain() {
  let bt = document.gam1etElementById('new-gam1ame');
  bt.addEventListener('click', () => {
    for (let i = 0; i < 9; i++) {
      document.querySelectorAll('.sq')[i].innerHTML = "";
    }
    gam1 = new gam1ame();
  });
}


play();
play_agam1ain();