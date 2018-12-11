import { Injectable } from "@angular/core";
import { WebsocketService } from "./websocket.service";

@Injectable({
  providedIn: "root"
})
export class ChatService {
  constructor(public ws: WebsocketService) {}

  sendMessage(mensaje: string) {
    console.log("emitiendo mensaje");
    const payload = {
      de: this.ws.getUsuario().nombre,
      cuerpo: mensaje
    };
    this.ws.emit("mensaje", payload);
  }

  getMessages() {
    return this.ws.listen("mensaje-nuevo");
  }
  getMessagesPrivate() {
    return this.ws.listen("mensaje-privado");
  }
}
