class MaSaisie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valeur: "",
    };
  }

handleDownload = () => {
    const blob = new Blob([this.state.valeur], { type: "text/word" })
    const url = URL.createObjectURL(blob)

    const a = document.createElement("a");
    a.href = url;
    a.download = "texte_telecharge.txt";
    a.click();
    URL.revokeObjectURL(url);
}

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
          <div className="col-lg-8">
            <textarea onChange={(e) => this.setState({ valeur: e.target.value })} rows='40' ></textarea>
          </div>
          <div className="col-lg-4 afficher">{this.state.valeur}</div>
        </div>
        <div className="text-center my-3">
          <button className="btn" onClick={this.handleDownload}>
            Download text
          </button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<MaSaisie />, document.getElementById("root"));
