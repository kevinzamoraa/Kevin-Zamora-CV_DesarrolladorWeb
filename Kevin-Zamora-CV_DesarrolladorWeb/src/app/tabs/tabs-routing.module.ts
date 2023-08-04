import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
          {
            path: 'tab1/about-me',
            loadChildren: () => import('../tab1/about-me/about-me.module').then( m => m.AboutMePageModule)
          },
          {
            path: 'tab1/experience',
            loadChildren: () => import('../tab1/experience/experience.module').then( m => m.ExperiencePageModule)
          },
          {
            path: 'tab1/education',
            loadChildren: () => import('../tab1/education/education.module').then( m => m.EducationPageModule)
          },
          {
            path: 'tab1/skills',
            loadChildren: () => import('../tab1/skills/skills.module').then( m => m.SkillsPageModule)
          },
          {
            path: 'tab1/interests',
            loadChildren: () => import('../tab1/interests/interests.module').then( m => m.InterestsPageModule)
          },
          {
            path: 'tab1/awards',
            loadChildren: () => import('../tab1/awards/awards.module').then( m => m.AwardsPageModule)
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
        redirectTo: '/tabs/tab1/about-me',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
