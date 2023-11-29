class AffichageNom extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            userInput: '',
        }
    }

submit(e){
    e.preventDefault()
}

    render() {
        return <div>
                        <header>
                        <h1 className="text-center">Bonjour mon nom est:   &nbsp;&nbsp;&nbsp;<span className="text-light text-center">{this.state.userInput}</span> </h1>
                        </header>
                    <h1 className="text-center my-5">Tapez votre nom complet</h1>
                    <form className="container w-50" onSubmit={this.submit}>
                        <input type='text' value ={this.state.userInput} onChange={(e) => this.setState({userInput: e.target.value})} className= 'form-control' placeholder="Ajouter votre nom"/>
                        <div className= 'd-flex justify-content-center'>
                            
                        </div>
                    </form>
                    
                </div> 
     
    }

}


ReactDOM.render(<AffichageNom />, document.getElementById('root'))