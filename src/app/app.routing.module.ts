import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { LoginComponent } from './login/login.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { RegisterComponent } from './register/register.component';
import { SelectInfluencerComponent } from './select-influencer/select-influencer.component';
import { LogOutGuard } from './shared/guards/log-out.guard';

const routes: Routes = [
  { path: 'register', component: RegisterComponent, canActivate: [LogOutGuard] },
  { path: 'login', component: LoginComponent, canActivate: [LogOutGuard] },
  { path: 'select-influencers', component: SelectInfluencerComponent },
  { path: 'news-feed', component: NewsFeedComponent },
  { path: 'logout', redirectTo: 'login', pathMatch: 'full' },
  { path: '', redirectTo: '/register', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
