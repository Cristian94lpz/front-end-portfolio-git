import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioSesionComponent } from '../componentes/inicio-sesion/inicio-sesion.component';
import { PortfolioComponent } from '../componentes/portfolio/portfolio.component';


const routes: Routes = [
  {path:'portfolio',component:PortfolioComponent},
  {path:'portfolio/Cristian',component:PortfolioComponent},
  {path:'iniciar-sesion',component:InicioSesionComponent},
  {path:'',redirectTo:'portfolio',pathMatch:'full'}

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
