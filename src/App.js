import React,{ Component } from 'react';
import firebase from 'firebase';
import './App.css';
import FileUpload from './fileUpload'

class App extends Component{

  constructor(){
    super();
    this.state = {
        user: null
    }
    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this)
  }
//componente de ciclo de vida que se dispara cuando se renderiza
  UNSAFE_componentWillMount(){
    firebase.auth().onAuthStateChanged(user=>{
      this.setState({ user});
    });
  }

handleAuth(){
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
  .then(result => console.log(`${result.user.email} ha iniciado sesion`))
  .catch(error=> console.log(`Error ${error.code}: ${error.message}`)); 
}

handleLogout(){
  firebase.auth().signOut()
  .then(result => console.log(`${result.user.email} ha Salido de la  sesion`))  
  .catch(error=> console.log(`Error ${error.code}: ${error.message}`)); 

}

renderLoginButton(){
// si el usuario esta logueado
if (this.state.user){
  return(
  <div>
      <img width='150' src={this.state.user.photoURL} alt={this.state.user.displayName}/>
       <p> hola{this.state.user.displayName}!</p>
       <button onClick={this.handleLogout}>Salir</button>
       <FileUpload/>
  </div>
  );
} else {
  return(
//si no lo esta
   <button onClick={this.handleAuth}>Login con Google</button>
    );
  }
}

  render(){
  return(
       <div className='App'>
        <div className='App-header'>
           <h2> Pseudogram </h2>
        </div>
        <p className='App-intro'>
         {this.renderLoginButton()}
        </p>
       </div>
    
   )
 }
}

export default App;
