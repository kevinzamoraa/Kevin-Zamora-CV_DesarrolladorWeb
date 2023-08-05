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
        loadChildren: () => import('../cv/cv.module').then(m => m.Tab1PageModule)
      },
          {
            path: 'cv/about-me',
            loadChildren: () => import('../cv/about-me/about-me.module').then( m => m.AboutMePageModule)
          },
          {
            path: 'cv/experience',
            loadChildren: () => import('../cv/experience/experience.module').then( m => m.ExperiencePageModule)
          },
          {
            path: 'cv/education',
            loadChildren: () => import('../cv/education/education.module').then( m => m.EducationPageModule)
          },
          {
            path: 'cv/skills',
            loadChildren: () => import('../cv/skills/skills.module').then( m => m.SkillsPageModule)
          },
          {
            path: 'cv/interests',
            loadChildren: () => import('../cv/interests/interests.module').then( m => m.InterestsPageModule)
          },
          {
            path: 'cv/awards',
            loadChildren: () => import('../cv/awards/awards.module').then( m => m.AwardsPageModule)
          },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
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
