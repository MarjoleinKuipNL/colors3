import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroPage } from './intro.page';
import {Storage} from '@ionic/storage';
const routes: Routes = [
  {
    path: '',
    component: IntroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [Storage]
})
export class IntroPageRoutingModule {}
