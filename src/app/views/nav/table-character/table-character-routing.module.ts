import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { TableCharacterComponent } from "./table-character.component";



const routes: Routes = [
  {
    path: '',
    component: TableCharacterComponent
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class tableCharacterRoutingModule {
}
