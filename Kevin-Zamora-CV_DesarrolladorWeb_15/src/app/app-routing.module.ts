import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'en-cv-viewer',
    loadChildren: () => import('./cv/en-cv-viewer/en-cv-viewer.module').then( m => m.EnCvViewerPageModule)
  },
  {
    path: 'es-cv-viewer',
    loadChildren: () => import('./cv/es-cv-viewer/es-cv-viewer.module').then( m => m.EsCvViewerPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
