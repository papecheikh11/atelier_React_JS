class Todo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            userInput: '',
            tache: []
        }
        this.onChange = this.onChange.bind(this)
        this.addTodo = this.addTodo.bind(this)
        this.deleteTodo = this.deleteTodo.bind(this)
        this.editTodo = this.editTodo.bind(this)
    }

    onChange(e) {  
        this.setState({
            userInput: e.target.value
        })
    }

    addTodo(e) {
        e.preventDefault()
        this.setState({
            userInput:'',
            tache: [...this.state.tache, this.state.userInput]
        })
    }

    deleteTodo(e) {
        e.preventDefault()
        const tableau = this.state.tache
        const index = tableau.indexOf(e.target.value)
        tableau.splice(index, 1)
        this.setState({
            tache:tableau
        })
    }

    editTodo(e) {
        e.preventDefault()

    }

    renderTodo() {
        return this.state.tache.map((maTache) => {
            return(
                <div 
                key={maTache} 
                className="container list-group-item ">
                    <div className="d-flex">
                        <div className='col-7'>
                            {maTache} 
                        </div>
                     <button onClick ={this.deleteTodo} className='btn btn-danger mx-1'>Supprimer</button>
                     <button onClick ={this.editTodo} className='btn btn-warning mx-1'>Modifier</button>
                    </div>
                </div>
            )
        })
    }
   

    render() {
        return <div>
            <h1 className="text-center my-5">Ma TodoList</h1>
                <form className="container w-50">
                <input type='text' value ={this.state.userInput} onChange={this.onChange} className= 'form-control' placeholder="Ajouter une tache"/>
                <div className= 'd-flex justify-content-center'>
                    <button onClick ={this.addTodo} className="btn btn-primary  my-2 ">Ajouter</button>
                </div>
                {/* {JSON.stringify(this.state)} */}
            </form>
            <div>
                {this.renderTodo()}
            </div>
        </div> 
     
    }
}


    ReactDOM.render(<Todo />, document.getElementById('root'))



