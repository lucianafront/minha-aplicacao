import { useState } from "react";
import Modal from "react-modal";

const Usuarios = () => {
  const [adicionando, setAdicionando] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const [usuario, setUsuario] = useState({}); //[nome, email, senha
  const [usuarios, setusuarios] = useState([
    // { nome: "João", email: "teste@uol.com", senha: "123456" },
    // { nome: "Maria", email: "maria@cont.com", senha: "123456" },
    // { nome: "José", email: "jdjd@uol.com", senha: "123456" },
  ]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (evento) => {
    evento.preventDefault();
    if (ValidForm()) {
      console.log("Formulário enviado!");
      const novoUsuario = { nome: name, email: email, senha: password };
      setusuarios([...usuarios, novoUsuario]);
      LimparForm();
      setAdicionando(false);
    }
  };

  const LimparForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const ValidForm = () => {
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      alert("Preencha todos os campos!");
      return false;
    }

    if (password !== confirmPassword) {
      alert("Senhas não conferem!");
      return false;
    }
    return true;
  };

  const handleDelete = (index) => {
    const novosUsuarios = usuarios.filter((usuario, i) => i !== index);
    setusuarios(novosUsuarios);
  };

  const handleAdd = () => {
    setAdicionando(true);
  };
  function closeModal() {
    setIsOpen(false);
    setAdicionando(false);
  }
  const handleDetalhe = (visualizando, usuario) => {
    setUsuario(usuario);
    setIsOpen(visualizando);
  };

  return (
    <div>
      <button onClick={handleAdd}>Adicionar</button>
        <h1>Lista de Usuários</h1>
      <table>
      {usuarios.length > 0 &&
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Senha</th>
            <th>Ações</th>
          </tr>
        </thead>}
        <tbody>
          {usuarios.length > 0 &&
            usuarios.map((usuario, index) => {
              return (
                <tr key={index}>
                  <td>{usuario.nome}</td>
                  <td>{usuario.email}</td>
                  <td>{usuario.senha}</td>
                  <td>
                    <button onClick={() => handleDelete(index)}>Excluir</button>
                    <button onClick={() => handleDetalhe(true, usuario)}>
                      Detalhe
                    </button>
                  </td>
                </tr>
              );
            })
            }

        </tbody>
        <tfoot>
          {usuarios.length === 0 && (
            <tr>
              <td colSpan="4">Nenhum usuário cadastrado!</td>
            </tr>
          )}
        </tfoot>
      </table>

      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Example Modal"
      >
        <h2>Detalhe Usuário</h2>
        <p>Nome: {usuario.nome}</p>
        <p>Email: {usuario.email}</p>
        <p>Senha: {usuario.senha}</p>
        <button onClick={closeModal}>close</button>
      </Modal>

      <Modal
        isOpen={adicionando}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Add Usuario Modal"
      >
        <h2>Detalhe Usuário</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="senha">Senha:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="confirmacaoSenha">Confirmação de Senha:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <input type="submit" />
        </form>
        <button onClick={closeModal}>Cancelar</button>
      </Modal>
    </div>
  );
};

export default Usuarios;
