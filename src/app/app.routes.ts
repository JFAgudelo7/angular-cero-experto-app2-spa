import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/shared/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';

const APP_ROUTES: Routes = [
	{path: 'home', component: HomeComponent},	
	{path: 'about', component: AboutComponent},
	{path: 'heroes', component: HeroesComponent},
	{path: '**', pathMatch:'full', redirectTo:'home'}
]

@NgModule({
	imports:[
		RouterModule.forRoot(APP_ROUTES, {useHash:true})
	],
	exports:[
		RouterModule
	]
})

export class AppRoutes{}