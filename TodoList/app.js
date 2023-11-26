function Welcome(props){
    const valeur = 2
    return  <h1>Bonjour {props.name} {valeur}</h1>
}

ReactDOM.render(<Welcome name ="Pape Cheikh" />, document.getElementById('root'))