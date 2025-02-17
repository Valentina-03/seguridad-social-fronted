import { DepartamentoService } from './../services/departamento.service';
import { TipoClienteService } from './../services/tipo-cliente.service';
import { ClientesApi } from './../container/clientes-api';
import { ClienteService } from './../services/cliente.service';
import { SolicitudesAfiliacionService } from './../services/solicitudes-afiliacion.service';
import { UsuarioService } from './../services/usuario.service';
import { PlanService } from './../services/plan.service';
import { EmpresaService } from './../services/empresa.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NotificacionService } from './notificacion.service';
import { UtilsService } from './utils.service';
import { MunicipioService } from '../services/municipio.service';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  empresaService: EmpresaService;
  planService: PlanService;
  usuarioService: UsuarioService;
  solicitudService: SolicitudesAfiliacionService;
  clienteService: ClienteService;
  tipoClienteService: TipoClienteService;
  municipioService: MunicipioService;
  departamentoService: DepartamentoService;

  constructor(private http: HttpClient, public notifService: NotificacionService, public utilService: UtilsService) {
    this.empresaService = new EmpresaService(http)
    this.planService = new PlanService(http)
    this.usuarioService = new UsuarioService(http)
    this.solicitudService= new SolicitudesAfiliacionService(http)
    this.clienteService = new ClienteService(http)
    this.tipoClienteService = new TipoClienteService(http)
    this.municipioService = new MunicipioService(http)
    this.departamentoService = new DepartamentoService(http)
  }

}
