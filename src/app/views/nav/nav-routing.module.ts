import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    title: 'Personajes',
    loadChildren: () => import('./../../views/nav/dashboard/dashboard.module').then((m) => m.DashboardModule)
  },
  {
    path: 'table',
    title: 'Tabla personajes',
    loadChildren: () => import('./../../views/nav/table-character/table-character.module').then((m) => m.TableCharacterModule)
  },

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavRoutingModule {
}
