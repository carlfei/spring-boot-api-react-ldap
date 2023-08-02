import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model'; //importa clase DTO
import { TutorialService } from 'src/app/services/tutorial.service'; //importa el servicio al que llama

@Component({  //inyecta el componente que hace las llamadas
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.css']
})
export class TutorialsListComponent implements OnInit {


  tutorials?: Tutorial[];
  currentTutorial: Tutorial = {};

  tutorial: Tutorial = {

    id: '',
    username: '',
    password: '',
    name: '',
    age: ''


  };

  datos: any;

  constructor(private tutorialService: TutorialService) { }
  /*
  la clase TutorialsListComponent instancia objetos de la clase del servicio :
  TutorialService  ,,, con la que se comunica
  
  
    */

  ngOnInit() {
    this.obtenerDatos();
  }


  setActiveTutorial(tutorial: Tutorial): void {
    this.currentTutorial = tutorial;
  }


  obtenerDatos() {
    this.tutorialService.obtenerDatos().subscribe(
      (data) => {
        this.datos = data;
      },
      //error: (e) =>  console.error(e)

    );
  }


}