import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavLayoutComponent } from './components/nav-layout/nav-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';


const components = [
  NavLayoutComponent
]

const modules:any = [

]


@NgModule({
  declarations: [...components, NavLayoutComponent, HeaderComponent],
  exports: [...components, ...modules],
  imports: [
      CommonModule,
      RouterOutlet,
      RouterModule,
      ReactiveFormsModule,
      FormsModule,
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
      BrowserAnimationsModule,
      HttpClientModule,
      ...modules
  ],
  providers: [

  ],
})
export class SharedModule { }
