class Todo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            userInput: '',
            tache: []
        }
        // this.onChange = this.onChange.bind(this)
        this.addTodo = this.addTodo.bind(this)
        this.deleteTodo = this.deleteTodo.bind(this)
        this.editTodo = this.editTodo.bind(this)
    }
   
// fonction pour ajouter une tache dans le DOM
    addTodo(e) {
        e.preventDefault();
        const id = Math.floor(Math.random() * 24500000);
        const nomTache = this.state.userInput;

        // Copiez le tableau existant dans le state
        const nouveauTableau = [...this.state.tache];

        // Ajoutez le nouvel objet avec id et nomTache au tableau copié
        nouveauTableau.push({ id: id, valeur: nomTache });

        // Mettez à jour le state avec le nouveau tableau
        this.setState({
            userInput: '',
            tache: nouveauTableau
        });
    }

    //fonction qui permet de supprimer une tache ajouté
    deleteTodo(tacheAModifierOuSupprimer) {
        const tableau = this.state.tache;
        const index = tableau.indexOf(tacheAModifierOuSupprimer);
        
        if (index !== -1) {
            tableau.splice(index, 1);
            this.setState({
                tache: tableau
            });
        } else {
            console.error("L'élément n'a pas été trouvé dans le tableau.");
        }
    }

    //fonction qui permet d'editer une tache ajouté
    editTodo(tacheAModifierOuSupprimer) {
        const tableau = this.state.tache;
        const index = tableau.indexOf(tacheAModifierOuSupprimer);
        console.log(tableau);
    }

    //affichage au niveau du render de la liste de tableau ajouté
    renderTodo() {
        return this.state.tache.map((tacheAModifierOuSupprimer) => {
            return(
                <div 
                key={tacheAModifierOuSupprimer.id} 
                className="container list-group-item ">
                    <div className="d-flex">
                        <div className='col-10'>
                        {tacheAModifierOuSupprimer.valeur}
                        </div>
                     <button onClick={() => this.editTodo(tacheAModifierOuSupprimer)} className='btn btn-warning mx-1'><i className="fa-regular fa-pen-to-square"></i></button> 
                     <button onClick={() => this.deleteTodo(tacheAModifierOuSupprimer)} className='btn btn-danger mx-1'><i className="fa-solid fa-trash"></i></button>
                    </div>
                </div>
            )
        })
    }
   

    render() {
        return <div>
                    <h1 className="text-center my-5">Ma TodoList</h1>
                    <form className="container w-50">
                        <input type='text' value ={this.state.userInput} onChange={(e) => this.setState({userInput: e.target.value})} className= 'form-control' placeholder="Ajouter une tache"/>
                        <div className= 'd-flex justify-content-center'>
                            <button onClick ={this.addTodo} className="btn btn-primary  my-2 ">Ajouter</button>
                        </div>
                    </form>
                    <div>
                        {this.renderTodo()}
                    </div>
                </div> 
     
    }
}


    ReactDOM.render(<Todo />, document.getElementById('root'))



