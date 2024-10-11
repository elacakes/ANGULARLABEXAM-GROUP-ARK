import { Routes } from '@angular/router';
import { SignUpComponentComponent } from './sign-up-component/sign-up-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';

export const routes: Routes = [
    {
        path:'sign-up-component',
        component:SignUpComponentComponent
    },
    {
        path:'login-component',
        component:LoginComponentComponent
    }

];
