import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { SocketIoModule, SocketIoConfig } from "ngx-socket-io";

const config: SocketIoConfig = { url: environment.wsUrl, options: {} };

import { environment } from "src/environments/environment";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SocketIoModule.forRoot(config)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
