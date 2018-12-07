import { Injectable } from "@angular/core";
import { WebsocketService } from "./websocket.service";

@Injectable({
  providedIn: "root"
})
export class ChatService {
  constructor(public ws: WebsocketService) {}

  sendMessage(mensaje: string) {
    const payload = {
      de: "Alex",
      cuerpo: mensaje
    };
  }
}