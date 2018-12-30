import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {
  assignmentList = [
    {
      name: 'None',
      value: ''
    },
    {
      name: 'Light',
      value: 'light'
    },
    {
      name: 'Dark',
      value: 'dark'
    }
  ];
  swService: StarWarsService;

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  ngOnInit() {
  }

  onSubmit(submittedForm) {
    console.log(submittedForm);
    this.swService.addCharacter(submittedForm.value.name, submittedForm.value.side);
  }
}
