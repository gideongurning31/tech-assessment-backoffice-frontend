// Framework Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// App Modules
import { AppRoutingModule } from './app-routing.module';
import { EmployeeManagementModule } from './employee-management/employee-management.module';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

// Services
import { HttpUtilService } from './common/http-util.service';

@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, EmployeeManagementModule],
  providers: [HttpUtilService],
  bootstrap: [AppComponent],
})
export class AppModule {}
