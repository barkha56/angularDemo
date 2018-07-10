import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { Appproduct } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { AppInventory } from './inventory/Inventory.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { EmployeeFormComponent } from './employee-form/employee-form.component'


//const appRoutes: Routes = [
   //{ path: 'Product', component: Appproduct },
   //{ path: 'Inventory', component: AppInventory },
//];

@NgModule ({
   imports: [ BrowserModule,FormsModule,HttpModule],
   //RouterModule.forRoot(appRoutes),
   declarations: [ AppComponent,Appproduct,AppInventory, EmployeeFormComponent],
   bootstrap: [ AppComponent ]
})
export class AppModule { }