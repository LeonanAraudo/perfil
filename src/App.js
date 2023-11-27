import './App.css';

function App() {
  return (
    <div className="App">

      <header className="teu"></header>
      <div className="banner">
       <img src="mika.jpg"/>
       <button>Editar perfil</button>
      </div>

      <div className="imgPerfil">
        <img src="tanj.jpg" />
      </div>

      <div className="nome">
        <h1>Nome de usuário</h1>
        <a>Seguindo</a> <a className="seguidores">Seguidores</a>
      </div>
      
      <div className="publicar">
        <button>Publicar evento</button>
      </div>

      <div className="caminhos">
       <p>Publicações</p>
       <p>Eventos curtidos</p>
       <p>Postagens de seguidores</p>
       <p>Eventos salvos</p>
      </div>

      <div className="boxPost">
      <div className="toda">
        <h3>Todas as Publicações</h3>
      </div>

      <div className="postagem">
        <div className="miniImg">
          <img src="tanj.jpg"/>
          <p>Nome<br/>22/22/22</p>
        </div>

      </div>
      </div>

   </div>
  );
}

export default App;
