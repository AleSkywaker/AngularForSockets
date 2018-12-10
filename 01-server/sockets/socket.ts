import { Socket } from "socket.io";
import socketIO from "socket.io";
import { UsuariosLista } from "../classes/usuarios-lista";
import { Usuario } from "../classes/usuario";

export const usuariosConectados = new UsuariosLista();

export const conectarCliente = (cliente: Socket) => {
  const usuario = new Usuario(cliente.id);
  usuariosConectados.agregar(usuario);
};

export const desconectar = (cliente: Socket) => {
  cliente.on("disconnect", () => {
    console.log("Cliente desconectado");
    usuariosConectados.boorarUsuario(cliente.id);
  });
};

//Escuchar mensajes
export const mensaje = (cliente: Socket, io: socketIO.Server) => {
  cliente.on("mensaje", (payload: { de: string; cuerpo: string }, cb) => {
    console.log("Mensaje recibido", payload);
    io.emit("mensaje-nuevo", payload);
  });
};

export const setUser = (cliente: Socket, io: socketIO.Server) => {
  cliente.on(
    "configurar-usuario",
    (payload: { nombre: string }, cb: Function) => {
      console.log("usuario logeado ", payload.nombre);
      usuariosConectados.actualizarNombre(cliente.id, payload.nombre);
      cb({
        ok: true,
        mensaje: `Usuario ${payload.nombre}, configurado`
      });
    }
  );
};
