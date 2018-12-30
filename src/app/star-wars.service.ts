import { Subject } from 'rxjs';

export class StarWarsService {
  private characters = [
    {
      name: 'Luke Skywalker',
      side: ''
    },
    {
      name: 'Darth Vader',
      side: ''
    }
  ];
  charactersUpdated = new Subject<void>();

  getCharacters(chosenList) {
    if (chosenList === 'all') {
       return this.characters.slice();
    }

    return this.characters.filter((char) => {
      return char.side === chosenList;
    });
  }

  onSideChosen(charInfo) {
    const pos = this.characters.findIndex((char) => {
      return char.name === charInfo.name;
    });

    this.characters[pos].side = charInfo.side;
    this.charactersUpdated.next();
  }

  addCharacter(name, side) {
    const pos = this.characters.findIndex((char) => {
      return char.name === name;
    });

    if (pos !== -1) {
      return;
    }

    this.characters.push({ name, side });
  }
}
