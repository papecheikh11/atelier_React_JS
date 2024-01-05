class MaSaisie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valeur: "",
    };
  }

  handleDownload = () => {
    const blob = new Blob([this.state.valeur], { type: "text/word" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "texte_telecharge.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  handleChange = (e) => {
    this.setState({ valeur: e.target.value });
  };

  render() {
    return (
      <div>
        <div>
          <h1 className="text-center text-light my-3">Markdown Editor </h1>
          <h6 className="text-center my_h6 my-4">
            You can type in html tags as well
          </h6>
        </div>
        <div className="ma_div d-flex flex-wrap container-fluid align-content-center">
          <Saisie valeur={this.state.valeur} onChange={this.handleChange} />
          <Affichage valeur={this.state.valeur} />
        </div>
        <div className="text-center my-3">
          <Button handleDownload={this.handleDownload} />
        </div>
      </div>
    );
  }
}

class Saisie extends React.Component {
  render() {
    return (
      <div className="col-lg-8">
        <textarea
          onChange={this.props.onChange}
          value={this.props.valeur}
        ></textarea>
      </div>
    );
  }
}

class Affichage extends React.Component {
  render() {
    return <div className="col-lg-4 afficher">{this.props.valeur}</div>;
  }
}

class Button extends React.Component {
  render() {
    return (
      <button className="btn" onClick={this.props.handleDownload}>
        Download text
      </button>
    );
  }
}

ReactDOM.render(<MaSaisie />, document.getElementById("root"));
