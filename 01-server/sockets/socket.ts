import { Socket } from "socket.io";

export const desconectar = (cliente: Socket) => {
  cliente.on("disconnect", () => {
    console.log("Cliente desconectado");
  });
};

//Escuchar mensajes
export const mensaje = (cliente: Socket) => {
  cliente.on("mensaje", (payload: { de: string; cuerpo: string }, cb) => {
    console.log("Mensaje recibido", payload);
  });
};
