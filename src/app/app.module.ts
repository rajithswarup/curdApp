import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ToastrModule } from 'ngx-toastr';
import { BusinessComponent } from './business/business.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { ServicedeskComponent } from './servicedesk/servicedesk.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { 
	IgxDoughnutChartModule,
	IgxRingSeriesModule,
	IgxLegendModule,
	IgxItemLegendModule
 } from "igniteui-angular-charts";
import { EdwdashboardComponent } from './edwdashboard/edwdashboard.component';
import {MatTableModule} from '@angular/material/table'





//import { MdToastModule } from 'md-toast/toast';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    BusinessComponent,
    ServicedeskComponent,
    EdwdashboardComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    ToastrModule.forRoot(),
    HttpClientModule, 
    NgxChartsModule,
    IgxDoughnutChartModule,
	IgxRingSeriesModule,
	IgxLegendModule,
	IgxItemLegendModule,
  MatTableModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],

})
export class AppModule { }