import { Component, OnInit, OnDestroy } from "@angular/core";
import { ChatService } from "src/app/services/chat.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.css"]
})
export class ChatComponent implements OnInit, OnDestroy {
  public texto: string;
  public mensajeSubs: Subscription;

  constructor(public chatService: ChatService) {}

  ngOnInit() {
    this.mensajeSubs = this.chatService.getMessages().subscribe(msg => {
      console.log(msg);
    });
  }
  ngOnDestroy(): void {
    this.mensajeSubs.unsubscribe();
  }

  enviar() {
    this.chatService.sendMessage(this.texto);
    this.texto = "";
  }
}
