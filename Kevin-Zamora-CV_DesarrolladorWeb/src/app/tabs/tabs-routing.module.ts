import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'cv',
        loadChildren: () => import('../cv-resume/cv/cv.module').then(m => m.Tab1PageModule)
      },
          {
            path: 'cv/about-me',
            loadChildren: () => import('../cv-resume/cv/about-me/about-me.module').then( m => m.AboutMePageModule)
          },
          {
            path: 'cv/experience',
            loadChildren: () => import('../cv-resume/cv/experience/experience.module').then( m => m.ExperiencePageModule)
          },
          {
            path: 'cv/education',
            loadChildren: () => import('../cv-resume/cv/education/education.module').then( m => m.EducationPageModule)
          },
          {
            path: 'cv/skills',
            loadChildren: () => import('../cv-resume/cv/skills/skills.module').then( m => m.SkillsPageModule)
          },
          {
            path: 'cv/interests',
            loadChildren: () => import('../cv-resume/cv/interests/interests.module').then( m => m.InterestsPageModule)
          },
          {
            path: 'cv/awards',
            loadChildren: () => import('../cv-resume/cv/awards/awards.module').then( m => m.AwardsPageModule)
          },
          {
            path: 'cv/es',
            loadChildren: () => import('../cv-resume/cv/es-cv-viewer/es-cv-viewer.module').then( m => m.EsCvViewerPageModule)
          },
          {
            path: 'cv/en',
            loadChildren: () => import('../cv-resume/cv/en-cv-viewer/en-cv-viewer.module').then( m => m.EnCvViewerPageModule)
          },
      {
        path: 'biography',
        loadChildren: () => import('../cv-resume/biography/biography.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'bookstore',
        loadChildren: () => import('../store/store.module').then(m => m.StorePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/cv/about-me',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/cv',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
