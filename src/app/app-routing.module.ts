import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {ServicesComponent} from './pages/services/services.component';
import {MoreComponent} from './components/services/more/more.component';
import {MessagesComponent} from './pages/messages/messages.component';


const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'services', component: ServicesComponent},
    {path: 'services/more', component: MoreComponent},
    {path: 'messages', component: MessagesComponent},
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
