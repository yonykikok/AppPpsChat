import { Component, Input } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  splash = true;
  audio = new Audio('../../assets/audios/envio.mp3');

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
  ) {
    this.initializeApp();

  }

  hacerSonar(ruta) {
    this.audio.src = ruta;
    this.audio.play();
  }
  paraSonido() {
    this.audio.pause();
    this.audio.currentTime = 0;

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      if (this.splash) {

        setTimeout(() => {
          this.hacerSonar('../../assets/audios/recibir.mp3');//primera notificacion
          setTimeout(() => {
            this.hacerSonar('../../assets/audios/envio.mp3');//segunda notificacion
            setTimeout(() => {
              this.hacerSonar('../../assets/audios/envio.mp3');//tercera notificacion
              setTimeout(() => {
                this.hacerSonar('../../assets/audios/envio.mp3');//cuarta notificacion
                setTimeout(() => {
                  this.hacerSonar('../../assets/audios/envio.mp3');//ultima notificacion
                  setTimeout(() => {
                    this.splash = false;
                  }, 2000);
                }, 3000);
              }, 1000);
            }, 2000);
          }, 2000);
        }, 1200);
      }


    });
  }
}
