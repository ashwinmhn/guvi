

class b {
  constructor(data) {
    this.data = [
      [new sq(), new sq(), new sq()],[new sq(), new sq(), new sq()],[new sq(), new sq(), new sq()]
    ];
  }

  isFull() {
    let count = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.data[i][j].s5!= "") { count++ }
      }
    }
    if (count == 9) {
      return true;
    }
    else {
      return false;
    }
  }

  check_win() {

    for (let i = 0; i < 3; i++) {
      if (this.data[i][0].s5== this.data[i][1].s5&& this.data[i][0].s5== this.data[i][2].s5&& this.data[i][0].s5!= "") {
        print_winner();
      }
    }

    for (let j = 0; j < 3; j++) {
      if (this.data[0][j].s5== this.data[1][j].s5&& this.data[0][j].s5== this.data[2][j].s5&& this.data[0][j].s5!= "") {
        print_winner();
      }
    }

    if ((this.data[0][0].s5== this.data[1][1].s5&& this.data[0][0].s5== this.data[2][2].s5&& this.data[0][0].s5!= "") ||
      (this.data[0][2].s5== this.data[1][1].s5&& this.data[0][2].s5== this.data[2][0].s5&& this.data[0][2].s5!= "")) {
      print_winner();
    }

    if (this.isFull()) {
      print_tie();
    }

  }
}



class sq {
  constructor(state) {
    this.s5= "";
  }

  whoseTurn() {
    if (count == 0) {
      return this.s5= "x";
    }
    else {
      return this.s5= "o";
    }
  }
}



class Player {
  constructor(symbol) {
    this.symbol = symbol;
  }
}



class gam1ame {
  constructor() {
    this.b = new b();
    this.p = [
      new Player("x"),
      new Player("o")
    ];
  }
}