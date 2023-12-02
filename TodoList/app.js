class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tacheInput: "", tache: [] };

    this.ajoutTache = this.ajoutTache.bind(this);
    this.deleteTache = this.deleteTache.bind(this);
    // this.handleChange = this.ajoutTache.bind(this);
  }
  ajoutTache = (e) => {
    e.preventDefault();
    if (this.state.tacheInput.trim() !== "") {
      const id = Math.floor(Math.random() * 24500000);
      const nomTache = this.state.tacheInput;
      // Copiez le tableau existant dans le state
      const nouveauTableau = [...this.state.tache];

      // Ajoutez le nouvel objet avec id et nomTache au tableau copié
      nouveauTableau.push({ id: id, valeur: nomTache });

      // Mettez à jour le state avec le nouveau tableau
      this.setState({
        tacheInput: "",
        tache: nouveauTableau,
      });
    } else {
      alert("Remplissez la tache");
    }
  };

  deleteTache(tacheModSup) {
    const tableau = this.state.tache;
    const index = tableau.indexOf(tacheModSup);

    if (index !== -1) {
      tableau.splice(index, 1);
      this.setState({
        tache: tableau,
      });
    } else {
      console.error("L'élément n'a pas été trouvé dans le tableau.");
    }
  }

  handleChange = (e) => {
    this.setState({
      tacheInput: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <Form
          ajoutTache={this.ajoutTache}
          handleChange={this.handleChange}
          tacheInput={this.state.tacheInput}
        />
        <ul>
          <Li
            ajoutTache={this.ajoutTache}
            handleChange={this.handleChange}
            tacheInput={this.state.tacheInput}
            deleteTache={this.deleteTache}
            tache={this.state.tache}
          />
        </ul>
      </div>
    );
  }
}

class Form extends React.Component {
  render() {
    return (
      <div>
        <h1 className="text-center my-5">Ma TodoList</h1>
        <form className="container w-50" onSubmit={this.props.ajoutTache}>
          <input
            type="text"
            value={this.props.tacheInput}
            onChange={this.props.handleChange}
            className="form-control"
            placeholder="Ajouter une tache"
          />
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary  my-2 ">
              Ajouter
            </button>
          </div>
        </form>
      </div>
    );
  }
}

class Li extends React.Component {
  render() {
    return this.props.tache.map((tacheModSup) => {
      return (
        <div
          key={tacheModSup.id}
          className="container list-group-item border-0 mx-auto w-50 my-3 "
        >
          <div className="container d-flex">
            <div className="col-10">{tacheModSup.valeur}</div>
            <button
              onClick={() => this.editTodo(tacheAModifierOuSupprimer)}
              className="btn btn-warning mx-1"
            >
              <i className="fa-regular fa-pen-to-square"></i>
            </button>
            <button
              onClick={() => this.props.deleteTache(tacheModSup)}
              className="btn btn-danger mx-1"
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      );
    });
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
