import { Component, OnInit, Input, ɵConsole } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { FirestoreService } from 'src/app/services/firestore.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  @Input() currentUserMail: string = "yonykikok";
  message: string;
  messages = [];
  fecha: Date;
  listaDeColores = ["green", "greenyellow", "honeydew", "indianred", "khaki", "lightblue", "lightslategray", "mediumaquamarine", "midnightblue",
    "blue", "green", "indigo", "magenta", "orange", "teal", "yellowgreen", "violet", "yellow", "orangered", "orchid", "fuchsia", "black", "aqua"];
  constructor(
    private firestoreService: FirestoreService,
    private authService: AuthService
  ) {
    this.currentUserMail = this.authService.currentUser.email;
  }


  ngOnInit() {
    this.firestoreService.obtenerMensajes('messages4a').subscribe((MessageSnapShot) => {
      this.messages = [];
      MessageSnapShot.forEach((ressponse: any) => {
        let messageData = ressponse.payload.doc.data();
          this.messages.push(messageData);
      });
      this.sortData().reverse();//ordeno y pongo de manera ascendente
      this.asignarColorAleatorio();
    });

  }
  filtrarRepetidos(lista) {
    return lista.filter(function (valor, usuarioActual, arreglo) {
      let usuario = arreglo.indexOf(valor);
      if (usuarioActual === usuario) {
        return true;
      }
    });
  }

  asignarColorAleatorio() {

    let listaCards = document.getElementsByClassName("cardHeader");
    let listaDeUsuarios = [];
    let listaDeUsuariosFiltrada = [];
    setTimeout(() => {
      for (let i = 0; i < listaCards.length; i++) {
        listaDeUsuarios.push(listaCards[i]['title']);//hago una lista con todos los cardHeaders
      }
      listaDeUsuariosFiltrada = this.filtrarRepetidos(listaDeUsuarios);//filtro la lista y dejo sin repetir

      listaDeUsuariosFiltrada.forEach(usuario => {
        let posicionAleatoria = Math.floor(Math.random() * (this.listaDeColores.length - 0)) + 0;// selecciona un color al azar
        for (let j = 0; j < listaCards.length; j++) {
          if (usuario == listaCards[j]["title"]) {//para el mismo usuario el mismo color.
            listaCards[j].setAttribute('style', "color: " + this.listaDeColores[posicionAleatoria] + ";");
          }
        }
      });

    }, 50);
  }
  sortData() {
    return this.messages.sort((a, b) => {
      return <any>new Date(b.date) - <any>new Date(a.date);
    });
  }

  enviarMensaje() {
    this.fecha = new Date();
    this.firestoreService.crearMensaje('messages4a', { "name": this.currentUserMail, "message": this.message, "date": this.fecha.toString() });
    this.message = "";

    var nodes = document.querySelectorAll('.cardContent');
    // var last = nodes[nodes.length - 1];
    console.log(nodes.length);
    window.scrollTo(0, document.querySelector(".cardContent:last-child").scrollHeight);
  }

}
