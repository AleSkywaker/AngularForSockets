import { Injectable } from "@angular/core";
import { Socket } from "ngx-socket-io";
import { Usuario } from "../classes/usuario";

@Injectable({
  providedIn: "root"
})
export class WebsocketService {
  public socketStatus = false;
  public usuario: Usuario;

  constructor(private socket: Socket) {
    this.cargarStorage();
    this.checkStatus();
  }
  getUsuario() {
    return this.usuario;
  }

  checkStatus() {
    this.socket.on("connect", () => {
      console.log("cliente de angular conectado al servidor");
      this.socketStatus = true;
    });
    this.socket.on("disconnect", () => {
      console.log("cliente de angular desconectado del servidor");
      this.socketStatus = false;
    });
  }
  //evento que quiero emitir o escuchar
  emit(evento: string, payload?: any, callback?: Function) {
    //emit('evento', payload, callback)
    this.socket.emit(evento, payload, callback);
  }

  listen(evento: string) {
    return this.socket.fromEvent(evento);
  }

  loginWs(nombre: string) {
    return new Promise((res, rej) => {
      this.emit("configurar-usuario", { nombre }, resp => {
        this.usuario = new Usuario(nombre);
        this.guardaStoreage();
        res();
      });
    });
  }
  guardaStoreage() {
    localStorage.setItem("usuario", JSON.stringify(this.usuario));
  }

  cargarStorage() {
    if (localStorage.getItem("usuario")) {
      this.usuario = JSON.parse(localStorage.getItem("usuario"));
    }
  }
}
