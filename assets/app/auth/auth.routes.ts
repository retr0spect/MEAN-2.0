import {Routes} from "@angular/router";
import {SignupCompoment} from "./signup.component";
import {SigninCompoment} from "./signin.component";
import {LogoutCompoment} from "./logout.component";

export const AUTH_ROUTES: Routes = [
    {path: '', redirectTo: 'signup', pathMatch: 'full'},
    {path: 'signup', component: SignupCompoment},
    {path: 'signin', component: SigninCompoment},
    {path: 'logout', component: LogoutCompoment}
];