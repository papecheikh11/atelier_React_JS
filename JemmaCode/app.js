class JemmaCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prenom: "",
      nom: "",
      email: "",
      tel: "",
      userList: [],
      modification: false,
    };
    this.ajoutPersonne = this.ajoutPersonne.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.editUser = this.editUser.bind(this);
    this.enEdition = this.enEdition.bind(this);
  }

  componentDidMount() {
    const savedUserList = JSON.parse(localStorage.getItem("userList"));
    if (savedUserList) {
      this.setState({ userList: savedUserList });
    }
  }
  componentDidUpdate(prevState) {
    if (prevState.userList !== this.state.userList) {
      localStorage.setItem("userList", JSON.stringify(this.state.userList));
    }
  }

  deleteUser(utilsateur) {
    const newListeUser = this.state.userList.filter(
      (user) => user.id !== utilsateur
    );
    this.setState({ userList: newListeUser });
  }

  editUser(userId) {
    const newUser = this.state.userList.find((user) => user.id === userId);

    this.setState({
      prenom: newUser.prenom,
      nom: newUser.nom,
      email: newUser.email,
      tel: newUser.tel,
      modification: newUser.id,
    });

    console.log(newUser);
  }

  enEdition(e){
    e.preventDefault()
    const enEdition = this.state.userList.map((user)=> user.id === this.state.modification ? {id:user.id, nom:this.state.nom, prenom:this.state.prenom, tel:this.state.tel, email:this.state.email} : user)
    this.setState({
      userList:enEdition,
      prenom:'',
      nom:'',
      email:'',
      tel:'',
      modification:false
    })
      
      
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
        tel: this.state.tel,
      };
      this.setState((prev) => ({ userList: [...prev.userList, newPerson] }));
      this.setState({ prenom: "" });
      this.setState({ nom: "" });
      this.setState({ email: "" });
      this.setState({ tel: "" });
    } else {
      alert("Veillez remplir les champs");
    }

    let updateArr = this.state.userList;
    localStorage.setItem("userList", JSON.stringify(updateArr));
    console.log(updateArr);
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
          enEdition={this.enEdition}
          handleChangePrenom={this.handleChangePrenom}
          handleChangeNom={this.handleChangeNom}
          handleChangeEmail={this.handleChangeEmail}
          handleChangeTelephone={this.handleChangeTelephone}
          prenom={this.state.prenom}
          nom={this.state.nom}
          email={this.state.email}
          tel={this.state.tel}
          modification={this.state.modification}
        
        />
        <Table
          modification={this.state.modification}
          userList={this.state.userList}
          deleteUser={this.deleteUser}
          editUser={this.editUser}
          enEdition={this.enEdition}
          handleChangePrenom={this.handleChangePrenom}
          handleChangeNom={this.handleChangeNom}
          handleChangeEmail={this.handleChangeEmail}
          handleChangeTelephone={this.handleChangeTelephone}
        />
      </div>
    );
  }
}

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.modification ===false ? this.props.ajoutPersonne : this.props.enEdition}>
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
              {this.props.modification === false ? (
                <button type="submit" className="btn btn-success col-12 my-3">
                  Ajouter
                </button>
              ) : (
                <button type="submit" className="btn btn-warning col-12 my-3">
                  Modifier
                </button>
              )}
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
              editUser={this.props.editUser}
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
        <td>
          {this.props.modification === false ? (
            <input
              type="text"
              defaultValue={user.prenom}
              onChange={this.props.handleChangePrenom}
            />
          ) : (
            user.prenom
          )}
        </td>
        <td>
          {user.modification ? (
            <input
              type="text"
              defaultValue={user.nom}
              onChange={this.props.handleChangeNom}
            />
          ) : (
            user.nom
          )}
        </td>
        <td>
          {user.modification ? (
            <input
              type="email"
              defaultValue={user.email}
              onChange={this.props.handleChangeEmail}
            />
          ) : (
            user.email
          )}
        </td>
        <td>
          {user.modification ? (
            <input
              type="text"
              defaultValue={user.telephone}
              onChange={this.props.handleChangeTelephone}
            />
          ) : (
            user.tel
          )}
        </td>
        <td>
          <button
            onClick={() => this.props.editUser(user.id)}
            className="btn btn-warning mx-1"
          >
            <i className="fa-solid fa-pen-to-square"></i>
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

class Input extends React.Component {
  render() {
    return <input type="text" className="form-control" />;
  }
}

ReactDOM.render(<JemmaCode />, document.getElementById("root"));
