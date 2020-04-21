import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {LoginRegisterComponent} from './login-register/login-register.component';
import {AuthGuard} from './guards/auth-guard';

const APP_ROUTES: Routes = [
  {path: '', component: WelcomeComponent, pathMatch: 'full'},
  {path: 'login', component: LoginRegisterComponent},
  {path: 'register', component: LoginRegisterComponent},
  {path: 'expenses', loadChildren: './diary-module/diary.module#DiaryModule', canActivate: [AuthGuard]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES,
    {
      enableTracing: false, // <-- debugging purposes only
    })],
  exports: [RouterModule]
})
export class AppRouting {

}
