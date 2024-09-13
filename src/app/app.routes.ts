
import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductListingPageComponent } from './product-listing-page/product-listing-page.component';
import { ProductDetailsPageComponent } from './product-details-page/product-details-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

export const routes: Routes = [
     {path:'',redirectTo:'login',pathMatch:'full'},
     {path:'login',component:LoginComponent},
     {path:'home',component:ProductListingPageComponent},
     {path:'product/:id',component:ProductDetailsPageComponent},
     {path:'profile',component:UserProfileComponent}
];
