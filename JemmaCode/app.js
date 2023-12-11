class JemmaCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prenom: "",
      nom: "",
      email: "",
      tel: "",
      userList: [],
    };
    this.ajoutPersonne = this.ajoutPersonne.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.editUser = this.editUser.bind(this);
  }
  deleteUser(utilsateur) {
    const newListeUser = this.state.userList.filter(
      (user) => user.id !== utilsateur
    );
    this.setState({ userList: newListeUser });
  }

editUser(utilisateur){
    const tabUser = this.state.userList
    console.log(tabUser);
}

  ajoutPersonne(e) {
    e.preventDefault();

    if (
      this.state.prenom.trim() !== "" &&
      this.state.nom.trim() !== "" &&
      this.state.email.trim() !== "" &&
      this.state.tel.trim() !== ""
    ) {
      const newPerson = {
        id: Math.floor(Math.random() * 10000),
        prenom: this.state.prenom,
        nom: this.state.nom,
        email: this.state.email,
        telephone: this.state.tel,
        modification:false
      };
      this.setState((prev) => ({ userList: [...prev.userList, newPerson] }));
      this.setState({ prenom: "" });
      this.setState({ nom: "" });
      this.setState({ email: "" });
      this.setState({ tel: "" });
    } else {
      alert("Veillez remplir les champs");
    }
  }
  handleChangePrenom = (e) => {
    this.setState({ prenom: e.target.value });
  };
  handleChangeNom = (e) => {
    this.setState({ nom: e.target.value });
  };
  handleChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  handleChangeTelephone = (e) => {
    this.setState({ tel: e.target.value });
  };
  render() {
    return (
      <div>
        <h4 className="text-center mt-5">Jeemacoder gestion utilisateurs</h4>

        <Form
          ajoutPersonne={this.ajoutPersonne}
          deleteUser={this.deleteUser}
          editUser={this.editUser}
          handleChangePrenom={this.handleChangePrenom}
          handleChangeNom={this.handleChangeNom}
          handleChangeEmail={this.handleChangeEmail}
          handleChangeTelephone={this.handleChangeTelephone}
          prenom={this.state.prenom}
          nom={this.state.nom}
          email={this.state.email}
          tel={this.state.tel}
        />
        <Table
          userList={this.state.userList}
          deleteUser={this.deleteUser}
          editUser={this.editUser}
        />
      </div>
    );
  }
}

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.ajoutPersonne}>
        <div className="container ">
          <div className="row w-75  mx-auto my-5">
            <div className="col-lg-6 my-3">
              <label htmlFor="prenom">Prenom</label>
              <input
                type="text"
                id="prenom"
                className="form-control"
                onChange={this.props.handleChangePrenom}
                value={this.props.prenom}
              />
            </div>
            <div className="col-lg-6 my-3">
              <label htmlFor="nom">Nom</label>
              <input
                type="text"
                id="nom"
                className="form-control"
                onChange={this.props.handleChangeNom}
                value={this.props.nom}
              />
            </div>
            <div className="col-lg-6 my-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="form-control"
                onChange={this.props.handleChangeEmail}
                value={this.props.email}
              />
            </div>
            <div className="col-lg-6 my-3">
              <label htmlFor="telephone">Telephone</label>
              <input
                type="text"
                id="telephone"
                className="form-control"
                onChange={this.props.handleChangeTelephone}
                value={this.props.tel}
              />
            </div>
            <div className="">
              <button type="submit" className="btn btn-success col-12 my-3">
                Ajouter
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

class Table extends React.Component {
  render() {
    return (
      <div className="container">
        <h6 className="text-center mt-4">Utilisateurs</h6>
        <table className="table table-striped">
          <thead>
            <tr className="border">
              <th scope="col">Prenom</th>
              <th scope="col">Nom</th>
              <th scope="col">Email</th>
              <th scope="col">Telephone</th>
              <th className="text-center" scope="col">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <Tbody
              userList={this.props.userList}
              deleteUser={this.props.deleteUser}
              editUser = {this.props.editUser}
            />
          </tbody>
        </table>
      </div>
    );
  }
}

class Tbody extends React.Component {
  render() {
    return this.props.userList.map((user) => (
      <tr key={user.id}>
        <td>{user.prenom}</td>
        <td>{user.nom}</td>
        <td>{user.email}</td>
        <td>{user.telephone}</td>
        <td>
          <button
            onClick={() => this.props.editUser(user.id)}
            className="btn btn-warning mx-1"
          >
            <i className="fa-regular fa-pen-to-square"></i>
          </button>
          <button
            onClick={() => this.props.deleteUser(user.id)}
            className="btn btn-danger mx-1"
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </td>
      </tr>
    ));
  }
}

ReactDOM.render(<JemmaCode />, document.getElementById("root"));
