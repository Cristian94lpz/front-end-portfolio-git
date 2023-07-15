import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AcercaMiComponent } from './componentes/acerca-mi/acerca-mi.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';
import {HttpClientModule} from '@angular/common/http';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { AppRoutingModule } from './servicios/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PunteroDirective } from './componentes/acerca-mi/puntero.directive';
import { EditDirective } from './componentes/acerca-mi/edit.directive';
import { EditnegroDirective } from './componentes/acerca-mi/editnegro.directive';
import { FormsModule } from '@angular/forms';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';




@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    BannerComponent,
    AcercaMiComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    PiePaginaComponent,
    PortfolioComponent,
    PunteroDirective,
    EditDirective,
    EditnegroDirective,
    InicioSesionComponent,

    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
