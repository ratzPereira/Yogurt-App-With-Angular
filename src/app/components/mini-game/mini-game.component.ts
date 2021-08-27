import { Component, OnInit } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'ygr-mini-game',
  templateUrl: './mini-game.component.html',
  styleUrls: ['./mini-game.component.scss']
})
export class MiniGameComponent{

  //randomText = lorem.sentence();

  enteredText = '';
  randomText = lorem.sentence()

  onInput(value: any) {
    this.enteredText = value.target.value;
  }

  compare(randomLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending';
    }

    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }
}
