import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPageRoutingModule } from './admin-routing.module';

import { AdminPage } from './admin.page';
import { HoraMinutoPipe } from 'src/app/pipes/hora-minuto.pipe';
import { FirstUpperCasePipe } from 'src/app/pipes/first-upper-case.pipe';
import { RemoverExtensionEmailPipe } from 'src/app/pipes/remover-extension-email.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminPageRoutingModule
  ],
  declarations: [AdminPage,
    HoraMinutoPipe,
    FirstUpperCasePipe,
    RemoverExtensionEmailPipe]
})
export class AdminPageModule {}
