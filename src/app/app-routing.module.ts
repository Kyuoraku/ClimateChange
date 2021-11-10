import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AyudarComponent } from './ayudar/ayudar.component';
import { CausasComponent } from './causas/causas.component';
import { ConsecuenciasComponent } from './consecuencias/consecuencias.component';
import { InfoComponent } from './info/info.component';
import { WhatisComponent } from './whatis/whatis.component';

const routes: Routes = [
  {
    path: "",
    component: WhatisComponent
  },
  {
    path: "que-es",
    component: WhatisComponent
  },
  {
    path: "causas",
    component: CausasComponent
  },
  {
    path: "consecuencias",
    component: ConsecuenciasComponent
  },
  {
    path: "ayudar",
    component: AyudarComponent
  },
  {
    path: "info",
    component: InfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
