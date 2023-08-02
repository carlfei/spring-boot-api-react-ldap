import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model'; //importa clase DTO
import { TutorialService } from 'src/app/services/tutorial.service'; //importa el servicio al que llama

@Component({  //inyecta el componente que hace las llamadas
  selector: 'app-tutorials-register',
  templateUrl: './tutorials-register.component.html',
  styleUrls: ['./tutorials-register.component.css']
})
//export class TutorialsRegisterComponent implements OnInit {
export class TutorialsRegisterComponent {

  username: string = '';
  password: string = '';

  tutorials?: Tutorial[];
  currentTutorial: Tutorial = {};


  constructor(private tutorialService: TutorialService) { }

  /*
  ngOnInit() {
   // this.obtenerDatos();
  }
*/

  onSubmit() {
    const userData = {
      username: this.username,
      password: this.password
      //rememberMe: this.rememberMe
    };

    this.tutorialService.enviarDatosUsuario(userData).subscribe(
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

  onRegister() {
    const userData = {
      username: this.username,
      password: this.password
      //rememberMe: this.rememberMe
    };

    this.tutorialService.enviarLoginUsuario(userData).subscribe(
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