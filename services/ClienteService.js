import api from "../utils/api";

class ClienteService {
  listar() {
    return api.get("/cliente");
  }
  criar(dados) {
    return api.post("/cliente", dados);
  }
  remover(id) {
    return api.delete("/cliente/" + id);
  }
  buscar(id) {
    return api.get("/cliente/" + id);
  }
  atualizar(id, dados) {
    return api.patch("/cliente/" + id, dados);
  }
}
export default new ClienteService();
