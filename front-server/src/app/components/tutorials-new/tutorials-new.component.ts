import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model'; //importa clase DTO
import { TutorialService } from 'src/app/services/tutorial.service'; //importa el servicio al que llama

@Component({  //inyecta el componente que hace las llamadas
  selector: 'app-tutorials-new',
  templateUrl: './tutorials-new.component.html',
  styleUrls: ['./tutorials-new.component.css']
})
//export class TutorialsRegisterComponent implements OnInit {
export class TutorialsNewComponent {

  id: string = '';
  password: string = '';
  username: string = '';
  name: string = '';
  age: string = '';
  

  tutorials?: Tutorial[];
  currentTutorial: Tutorial = {};


  constructor(private tutorialService: TutorialService) { }

  newUser() {
    const userData = {
      id: this.id,
      username: this.username,
      password: this.password,
      name: this.name,
      age: this.age
      //rememberMe: this.rememberMe
    };

    this.tutorialService.agregarUsuario(userData).subscribe(
      response => {
        // Aquí puedes manejar la respuesta del backend si es necesario
        console.log('Datos enviados correctamente');
      },
      //  error => {
      // Aquí puedes manejar cualquier error en la solicitud
      //  console.error('Error al enviar datos:', error);
      // }
    );
  }


}