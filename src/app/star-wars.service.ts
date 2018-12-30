import { Subject } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class StarWarsService {
  private characters = [];
  charactersUpdated = new Subject<void>();
  httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  fetchCharacters() {
    interface CharactersResponse {
      results: [];
    }

    this.httpClient.get('http://localhost:8000/starwars_people.json')
      .map((response: CharactersResponse) => {
        const data = response;
        const extractedChars = data.results;
        const chars = extractedChars.map((char) => {
            return { name: char.name, side: '' };
        });

        return chars;
      })
      .subscribe(
        (data) => {
          this.characters = data;
          this.charactersUpdated.next();
        }
      );
  }

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
