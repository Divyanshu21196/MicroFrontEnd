import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>import('./Home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'step-guide',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'https://micro-frontend-angular-guide-git-main-divyanshu21196s-projects.vercel.app/remoteEntry.js',
        exposedModule: './Module'
      }).then(m => m.FeatureModule)
  }
];
