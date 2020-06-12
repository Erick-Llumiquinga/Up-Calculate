import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MediaComponent } from './media/media.component';
import { MedianaComponent } from './mediana/mediana.component';
import { ModaComponent } from './moda/moda.component';
import { BodyComponent } from './body/body.component';

const routes: Routes = [
  {path: "", redirectTo: "/login", pathMatch: "full"},
  {path: "login", component: LoginComponent},
  {path: "media", component: MediaComponent},
  {path: "mediana", component: MedianaComponent},
  {path: "moda", component: ModaComponent},
  {path: "home", component: BodyComponent},
  {
    path: 'modal',
    loadChildren: () => import('./pages/modal/modal.module').then( m => m.ModalPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
