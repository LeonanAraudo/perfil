import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.css';

function App() {
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (event, setImageFunction) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImageFunction(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const bannerStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div className="App">
      <header className="teu"></header>

      <label htmlFor="inputr" className="banner" style={bannerStyle}>
        <input
          id="inputr"
          type="file"
          onChange={(e) => handleImageChange(e, setBackgroundImage)}
          accept="image/*"
        />
        <div className="banner-content">
          <p>
            <i className="fas fa-pen"></i>Selecione uma imagem
          </p>
        </div>
      </label>

      <label htmlFor="inputrPerfil" className="imgPerfil">
        <input
          id="inputrPerfil"
          type="file"
          onChange={(e) => handleImageChange(e, setProfileImage)}
          accept="image/*"
          style={{ display: 'none' }}
        />
        <div className='camera'>
        <i className="fa-solid fa-camera"></i>
        </div>
        {profileImage && <img src={profileImage} alt="Imagem do Perfil" />}
      </label>

      <div className="nome">
        <h1>Nome de usuário</h1>
        <div className='otos'>
        <a>Seguindo</a> <a className="seguidores">Seguidores</a>
         </div>
      </div>

      <div className="publicar">
        <button>Publicar evento</button>
      </div>

      <div className="caminhos">
        <p>Publicações</p>
        <p>Eventos curtidos</p>
        <p>Publicações de Seguidores</p>
        <p>Eventos salvos</p>
      </div>

      <div className="boxPost">
        <div className="toda">
          <h3>Todas as Publicações</h3>
        </div>

        <div className="postagem">
          <div className="miniImg">
            <img src="tanj.jpg" alt="Miniatura da Postagem" />
            <p>
              Nome
              <br />
              22/22/22
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
