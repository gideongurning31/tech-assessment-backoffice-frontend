// Framework Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// App Modules
import { AppRoutingModule } from './app-routing.module';
import { EmployeeManagementModule } from './employee-management/employee-management.module';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './common/not-found-component';

// Services
import { HttpUtilService } from './common/http-util.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    EmployeeManagementModule,
  ],
  providers: [HttpUtilService],
  bootstrap: [AppComponent],
})
export class AppModule {}
