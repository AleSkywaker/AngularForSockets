import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { WebsocketService } from "../services/websocket.service";

@Injectable({
  providedIn: "root"
})
export class UsuarioGuard implements CanActivate {
  constructor(public ws: WebsocketService, private router: Router) {}
  canActivate() {
    console.log(this.ws.getUsuario());
    if (this.ws.getUsuario()) {
      return true;
    } else {
      this.router.navigateByUrl("/");
      return false;
    }
  }
}
