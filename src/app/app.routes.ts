import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ItemsComponent } from './pages/items/items.component';
import { HeaderComponent } from './pages/header/header.component';
import { RentalComponent } from './pages/rental/rental.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "header",
        component: HeaderComponent
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "items",
        component: ItemsComponent
    },
    {
        path: "rental",
        component: RentalComponent
    }
];
