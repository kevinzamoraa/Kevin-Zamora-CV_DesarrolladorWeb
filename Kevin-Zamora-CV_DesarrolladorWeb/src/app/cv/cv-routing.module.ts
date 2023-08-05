import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './cv.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'tab1/about-me',
    loadChildren: () => import('./about-me/about-me.module').then( m => m.AboutMePageModule)
  },
  {
    path: 'tab1/experience',
    loadChildren: () => import('./experience/experience.module').then( m => m.ExperiencePageModule)
  },
  {
    path: 'tab1/education',
    loadChildren: () => import('./education/education.module').then( m => m.EducationPageModule)
  },
  {
    path: 'tab1/skills',
    loadChildren: () => import('./skills/skills.module').then( m => m.SkillsPageModule)
  },
  {
    path: 'tab1/interests',
    loadChildren: () => import('./interests/interests.module').then( m => m.InterestsPageModule)
  },
  {
    path: 'tab1/awards',
    loadChildren: () => import('./awards/awards.module').then( m => m.AwardsPageModule)
  },
  {
    path: '',
    redirectTo: 'tab1/about-me',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
