import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { LoginComponent } from './componentes/login/login.component';
import { LapizComponent } from './componentes/productos/lapiz/lapiz.component';
import { FlashcardComponent } from './componentes/flashcard/flashcard.component';
import { CrearUsuarioComponent } from './componentes/usuario/crear-usuario/crear-usuario.component';
import { PerfilComponent } from './componentes/Perfil/perfil/perfil.component';
import { CrearLapizComponent } from './componentes/productos/lapiz/crear-lapiz/crear-lapiz.component';

import { CrearProductoComponent } from './componentes/productos/crear-producto/crear-producto.component';
import { CrearFlashCardComponent } from './componentes/productos/FlashCard/crear-flash-card/crear-flash-card.component';
import { DisenarComponent } from './componentes/flashcard/disenar/disenar.component';
import { DetalleLapizComponent } from './componentes/productos/lapiz/detalle-lapiz/detalle-lapiz.component';
import { ConfiguracionComponent } from './componentes/usuario/configuracion/configuracion.component';
import { PedidoComponent } from './componentes/pedido/pedido.component';
import { PlanificadorComponent } from './componentes/productos/planificador/planificador.component';
import { ListarPlanificadorComponent } from './componentes/productos/planificador/listar-planificador/listar-planificador.component';
import { DisenarPlanificadorComponent } from './componentes/productos/planificador/disenar/disenar-planificador/disenar-planificador.component';
import { AgendaComponent } from './componentes/productos/agenda/agenda.component';
import { DisenarAgendaComponent } from './componentes/productos/agenda/disenar-agenda/disenar-agenda.component';
import { CuadernoComponent } from './componentes/productos/cuaderno/cuaderno.component';
import { DisenarCuadernoComponent } from './componentes/productos/cuaderno/disenar-cuaderno/disenar-cuaderno.component';
import { ListarComponent } from './componentes/productos/agenda/listar/listar.component';
import { ListarCuadernoComponent } from './componentes/productos/cuaderno/listar-cuaderno/listar-cuaderno.component';
import { ListarFlashcardComponent } from './componentes/productos/FlashCard/listar-flashcard/listar-flashcard.component';
import { ListarLapizComponent } from './componentes/productos/lapiz/listar-lapiz/listar-lapiz.component';
import { ListplanificadorComponent } from './componentes/productos/planificador/listplanificador/listplanificador.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    LapizComponent,
    FlashcardComponent,
    CrearUsuarioComponent,
    PerfilComponent,
    CrearProductoComponent,
    CrearFlashCardComponent,
    DisenarComponent,
    CrearLapizComponent,
    CrearProductoComponent,
    DetalleLapizComponent,
    ConfiguracionComponent,
    PedidoComponent,
    PlanificadorComponent,
    ListarPlanificadorComponent,
    DisenarPlanificadorComponent,
    AgendaComponent,
    DisenarAgendaComponent,
    CuadernoComponent,
    DisenarCuadernoComponent,
    ListarComponent,
    ListarCuadernoComponent,
    ListarFlashcardComponent,
    ListarLapizComponent,
    ListplanificadorComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
