import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionSigninComponent } from './session-signin/session-signin.component';
import { SessionsRoutingModule } from './sessions-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from 'src/app/shared/components/login/login.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { ButtonGeneralComponent } from 'src/app/shared/components/button-general/button-general.component';




@NgModule({
  declarations: [
    SessionSigninComponent,
    LoginComponent,
    ButtonGeneralComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SessionsRoutingModule,

    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule,

    //SharedModule
  ]
})
export class SessionsModule { }
