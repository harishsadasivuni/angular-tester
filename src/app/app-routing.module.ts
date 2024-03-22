import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaticformComponent } from './staticform/staticform.component';
import { MyDirectiveDirective } from './my-directive.directive';

const routes: Routes = [{
  component:StaticformComponent,
  path:'staticform'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
   declarations: [
    MyDirectiveDirective
  ]
})
export class AppRoutingModule { }
