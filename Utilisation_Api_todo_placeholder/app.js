class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };

    this.deleteUser = this.deleteUser.bind(this);
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((res) => this.setState({ users: res }))
      .catch((error) => console.error("Error fetching todos:", error));
  }

  deleteUser(utilisateur) {
    const newListeUser = this.state.users.filter(
        (user) => user.id !== utilisateur
      );
      this.setState({ users: newListeUser });
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center mb-5 bg-warning">
          Affichage de ma todolist
        </h1>
        <Afficher users={this.state.users} deleteUser={this.deleteUser} />
      </div>
    );
  }
}

class Afficher extends React.Component {
  render() {
    return (
      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Liste Utilisateurs</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>
                  <button className="btn-dark mx-1 text-warning">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button
                    className="btn-dark mx-1 text-danger"
                    onClick={() => this.props.deleteUser(todo.id)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
