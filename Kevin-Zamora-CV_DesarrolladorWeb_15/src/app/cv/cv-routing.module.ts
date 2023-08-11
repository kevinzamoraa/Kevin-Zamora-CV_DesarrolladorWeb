import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvPage } from './cv.page';

const routes: Routes = [
  {
    path: '',
    component: CvPage,
  },
  {
    path: 'cv/about-me',
    loadChildren: () => import('./about-me/about-me.module').then( m => m.AboutMePageModule)
  },
  {
    path: 'cv/experience',
    loadChildren: () => import('./experience/experience.module').then( m => m.ExperiencePageModule)
  },
  {
    path: 'cv/education',
    loadChildren: () => import('./education/education.module').then( m => m.EducationPageModule)
  },
  {
    path: 'cv/skills',
    loadChildren: () => import('./skills/skills.module').then( m => m.SkillsPageModule)
  },
  {
    path: 'cv/interests',
    loadChildren: () => import('./interests/interests.module').then( m => m.InterestsPageModule)
  },
  {
    path: 'cv/awards',
    loadChildren: () => import('./awards/awards.module').then( m => m.AwardsPageModule)
  },
  {
    path: '',
    redirectTo: 'cv/about-me',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CvPageRoutingModule {}
