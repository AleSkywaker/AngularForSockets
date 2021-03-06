import { Component, OnInit } from "@angular/core";
import { WebsocketService } from "src/app/services/websocket.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public nombre: string = "";

  constructor(public ws: WebsocketService, private router: Router) {}

  ngOnInit() {}

  ingresar() {
    this.ws.loginWs(this.nombre).then(() => {
      this.router.navigateByUrl("/mensajes");
    });
  }
}
