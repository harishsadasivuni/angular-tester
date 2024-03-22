import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentTwoComponent } from './my-component-two/my-component-two.component';
import { MyCustomPipePipe } from './my-component-two/my-custom-pipe.pipe';
import { StaticformComponent } from './staticform/staticform.component';
import { HttpClientModule } from  '@angular/common/http';
import { FormPostComponent } from './formPost/formPost.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [			
    AppComponent,
      MyComponentTwoComponent,
      MyCustomPipePipe,
      StaticformComponent,
      FormPostComponent,
      FormPostComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
