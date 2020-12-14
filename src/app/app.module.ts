import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatPaginatorModule } from '@angular/material'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DemoComponent } from './pages/demo/demo.component';
import { MobileContainerComponent } from './components/mobile-container/mobile-container.component';
import { ExpandedContainerComponent } from './components/expanded-container/expanded-container.component';
import { UserListComponent } from './posts/user-list/user-list.component';
import { UserCreateComponent } from './posts/user-create/user-create.component';
import { CommonModule } from "@angular/common";

import { PhoneMaskDirective } from './directives/phone-mask.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    DemoComponent,
    MobileContainerComponent,
    ExpandedContainerComponent,
    UserListComponent,
    UserCreateComponent,
    PhoneMaskDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    CommonModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    PhoneMaskDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
