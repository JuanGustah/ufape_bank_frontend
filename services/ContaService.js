import api from "../utils/api";

class ClienteService {
  listar() {
    return api.get("/conta");
  }
  criar(tipoConta, dados) {
    return api.post("/conta/" + tipoConta, dados);
  }
  remover(id) {
    return api.delete("/conta/" + id);
  }
  buscar(id) {
    return api.get("/conta/" + id);
  }
  atualizar(id, dados) {
    return api.patch("/conta/" + id, dados);
  }
  acao(tipoAcao, dados) {
    return api.post("/conta/" + tipoAcao, dados);
  }
  transferir(dados) {
    return api.post("/conta/transferir", dados);
  }
}
export default new ClienteService();
