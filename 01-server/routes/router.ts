import { Router, Request, Response } from "express";
import Server from "../classes/server";

const router = Router();

router.get("/mensajes", (req: Request, res: Response) => {
  res.json({
    ok: true,
    mensaje: "Todo esta bien!!!"
  });
});
router.post("/mensajes/:id", (req: Request, res: Response) => {
  var cuerpo = req.body.cuerpo;
  var de = req.body.surname;
  var id = req.params.id;

  const payload = {
    de,
    cuerpo
  };

  const server = Server.instance;

  server.io.in(id).emit("mensaje-privado", payload);

  res.json({
    ok: true,
    mensaje: `POST - LISTO ${cuerpo} ${de} ${id} NUEVO`
  });
});
export default router;
