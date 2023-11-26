import React from 'react';
import './App.css';

function App() {
  return (
    <>
      {/* Cabeçalho */}
      <header>
        <div className="conteiner-header">
          <div className="logo">
            <h2 id="logo-cult">Cult</h2>
            <h2 id="logo-maps">Maps</h2>
          </div>
          <nav className="conteiner-navBar">
            <a href="/">Página inicial</a>
            <a href="/">Eventos</a>
            <a href="./cad-evt.html">Divulgar evento</a>
            <a className="btn" id="btn">
              Editar Perfil
            </a>
          </nav>
        </div>
      </header>

      {/* Seção de pesquisa */}
      <section className="section-search">
        <div className="search-container">
          <input
            type="text"
            name="pesquisa"
            id="search-box"
            placeholder="Pesquisar eventos"
          />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </section>

      {/* Perfil do usuário */}
      <div className="profile-header">
        <img
          className="cover-photo"
          src="download (2).jpg"
          alt="Foto de Capa"
        />
        <img
          className="profile-photo"
          src="download (2).jpg"
          alt="Foto de Perfil"
        />
        <div className="profile-info">
          <h1>Kaue Lima</h1>

          <section className="following">
            <p>seguindo</p>
          </section>
          <section className="followers">
            <p>seguidores</p>
          </section>
        </div>

        <div>
          <nav className="painel">
            <a href="/">Publicações</a>
            <a href="/">Eventos curtidos</a>
            <a href="/">Postagens de seguidores</a>
            <a href="/">salvos</a>
          </nav>
          <nav className="but">
            <a href="/">Publicar</a>
          </nav>
        </div>
      </div>

      {/* Post customizado */}
      <section>
        <div className="post custom-post">
          <div className="artist-info">
            <img className="perfil" src="download (2).jpg" alt="foto" />
            <p className="user">Kaue saintss</p>
            <p className="date">12/12/23</p>
            <p className="poste">Exposição de Arte</p>
            <img
              className="eventos"
              src="download.jpg"
              alt="foto do evento"
            />
            <p className="city">teresinha</p>
            <p className="data">de 10/11/23 a 15/11/23</p>
            <h1 className="descricao">Melhor Do mundo</h1>
            <p className="des">o melhor do mundo está de volta</p>
            <p className="info">Mais Informações...</p>
          </div>
        </div>
      </section>

      {/* Seções de postes */}
      <section>
        <div className="container">
          <section>
            <div className="postes">
            <p className="exp">Exposição de Arte</p>
        <div className="artist-info">
          <img className="perfils" src="download (2).jpg" alt="foto" />
          <p className="usu">Kaue saintss</p>
          <img className="image" src="download.jpg" alt="foto do evento" />
        </div>
        <p className="dia">Data da Exposição 1</p>
        <p className="cit">teresina</p>
        <h1 className="descricoes">Melhor Do mundo</h1>
        <p className="desc">o melhor do mundo estar de volta</p>
        <p className="inf">Mais Informações..</p>
            </div>
          </section>

          <section>
            <div className="postes">
            <p className="exp">Exposição de Arte</p>
        <div className="artist-info">
          <img className="perfils" src="download (2).jpg" alt="foto" />
          <p className="usu">Kaue saintss</p>
          <img className="image" src="download.jpg" alt="foto do evento" />
        </div>
        <p className="dia">Data da Exposição 1</p>
        <p className="cit">teresina</p>
        <h1 className="descricoes">Melhor Do mundo</h1>
        <p className="desc">o melhor do mundo estar de volta</p>
        <p className="inf">Mais Informações..</p>
            </div>
          </section>

          <section>
            <div className="postes">
            <p className="exp">Exposição de Arte</p>
        <div className="artist-info">
          <img className="perfils" src="download (2).jpg" alt="foto" />
          <p className="usu">Kaue saintss</p>
          <img className="image" src="download.jpg" alt="foto do evento" />
        </div>
        <p className="dia">Data da Exposição 1</p>
        <p className="cit">teresina</p>
        <h1 className="descricoes">Melhor Do mundo</h1>
        <p className="desc">o melhor do mundo estar de volta</p>
        <p className="inf">Mais Informações..</p>
            </div>
          </section>

          <section>
            <div className="postes">
            <p className="exp">Exposição de Arte</p>
        <div className="artist-info">
          <img className="perfils" src="download (2).jpg" alt="foto" />
          <p className="usu">Kaue saintss</p>
          <img className="image" src="download.jpg" alt="foto do evento" />
        </div>
        <p className="dia">Data da Exposição 1</p>
        <p className="cit">teresina</p>
        <h1 className="descricoes">Melhor Do mundo</h1>
        <p className="desc">o melhor do mundo estar de volta</p>
        <p className="inf">Mais Informações..</p>
            </div>
          </section>

          <section>
            <div className="postes">
            <p className="exp">Exposição de Arte</p>
        <div className="artist-info">
          <img className="perfils" src="download (2).jpg" alt="foto" />
          <p className="usu">Kaue saintss</p>
          <img className="image" src="download.jpg" alt="foto do evento" />
        </div>
        <p className="dia">Data da Exposição 1</p>
        <p className="cit">teresina</p>
        <h1 className="descricoes">Melhor Do mundo</h1>
        <p className="desc">o melhor do mundo estar de volta</p>
        <p className="inf">Mais Informações..</p>
            </div>
          </section>

          {/* Seções adicionais de postes */}
          <section>
            <div className="postes">
            <p className="exp">Exposição de Arte</p>
        <div className="artist-info">
          <img className="perfils" src="download (2).jpg" alt="foto" />
          <p className="usu">Kaue saintss</p>
          <img className="image" src="download.jpg" alt="foto do evento" />
        </div>
        <p className="dia">Data da Exposição 1</p>
        <p className="cit">teresina</p>
        <h1 className="descricoes">Melhor Do mundo</h1>
        <p className="desc">o melhor do mundo estar de volta</p>
        <p className="inf">Mais Informações..</p>
            </div>
          </section>

          <section>
            <div className="postes">
            <p className="exp">Exposição de Arte</p>
        <div className="artist-info">
          <img className="perfils" src="download (2).jpg" alt="foto" />
          <p className="usu">Kaue saintss</p>
          <img className="image" src="download.jpg" alt="foto do evento" />
        </div>
        <p className="dia">Data da Exposição 1</p>
        <p className="cit">teresina</p>
        <h1 className="descricoes">Melhor Do mundo</h1>
        <p className="desc">o melhor do mundo estar de volta</p>
        <p className="inf">Mais Informações..</p>
            </div>
          </section>

          <section>
            <div className="postes">
            <p className="exp">Exposição de Arte</p>
        <div className="artist-info">
          <img className="perfils" src="download (2).jpg" alt="foto" />
          <p className="usu">Kaue saintss</p>
          <img className="image" src="download.jpg" alt="foto do evento" />
        </div>
        <p className="dia">Data da Exposição 1</p>
        <p className="cit">teresina</p>
        <h1 className="descricoes">Melhor Do mundo</h1>
        <p className="desc">o melhor do mundo estar de volta</p>
        <p className="inf">Mais Informações..</p>
            </div>
          </section>

          <section>
            <div className="postes">
            <p className="exp">Exposição de Arte</p>
        <div className="artist-info">
          <img className="perfils" src="download (2).jpg" alt="foto" />
          <p className="usu">Kaue saintss</p>
          <img className="image" src="download.jpg" alt="foto do evento" />
        </div>
        <p className="dia">Data da Exposição 1</p>
        <p className="cit">teresina</p>
        <h1 className="descricoes">Melhor Do mundo</h1>
        <p className="desc">o melhor do mundo estar de volta</p>
        <p className="inf">Mais Informações..</p>
            </div>
          </section>

          <section>
            <div className="postes">
            <p className="exp">Exposição de Arte</p>
        <div className="artist-info">
          <img className="perfils" src="download (2).jpg" alt="foto" />
          <p className="usu">Kaue saintss</p>
          <img className="image" src="download.jpg" alt="foto do evento" />
        </div>
        <p className="dia">Data da Exposição 1</p>
        <p className="cit">teresina</p>
        <h1 className="descricoes">Melhor Do mundo</h1>
        <p className="desc">o melhor do mundo estar de volta</p>
        <p className="inf">Mais Informações..</p>
            </div>
          </section>
          <section>
            <div className="postes">
            <p className="exp">Exposição de Arte</p>
        <div className="artist-info">
          <img className="perfils" src="download (2).jpg" alt="foto" />
          <p className="usu">Kaue saintss</p>
          <img className="image" src="download.jpg" alt="foto do evento" />
        </div>
        <p className="dia">Data da Exposição 1</p>
        <p className="cit">teresina</p>
        <h1 className="descricoes">Melhor Do mundo</h1>
        <p className="desc">o melhor do mundo estar de volta</p>
        <p className="inf">Mais Informações..</p>
            </div>
          </section>
          <section>
            <div className="postes">
            <p className="exp">Exposição de Arte</p>
        <div className="artist-info">
          <img className="perfils" src="download (2).jpg" alt="foto" />
          <p className="usu">Kaue saintss</p>
          <img className="image" src="download.jpg" alt="foto do evento" />
        </div>
        <p className="dia">Data da Exposição 1</p>
        <p className="cit">teresina</p>
        <h1 className="descricoes">Melhor Do mundo</h1>
        <p className="desc">o melhor do mundo estar de volta</p>
        <p className="inf">Mais Informações..</p>
            </div>
          </section>
         
        </div>
      </section>

      {/* Rodapé */}
      <footer>
        <div className="conteiner-row-one">
          <div className="row-one">
            <div className="logo">
              <h2 id="logo-cult">Cult</h2>
              <h2 id="logo-maps">Maps</h2>
            </div>
            <div className="rede-sociais">
              <i className="fa-brands fa-square-instagram"></i>
              <i className="fa-brands fa-facebook"></i>
            </div>
          </div>
          <div className="conteiner-menu-footer">
            <div className="menu-footer">
              <a href="/" className="destac">
                Regiao
              </a>
              <a href="/">Piauí</a>
              <a href="/">São Luis</a>
              <a href="/">Maranhão</a>
              <a href="/">Porto Alegre</a>
            </div>
            <div className="menu-footer">
              <a href="/" className="destac">
                Categorias
              </a>
              <a href="/">Anime</a>
              <a href="/">Música</a>
              <a href="/">Artes</a>
              <a href="/">Tecnologia</a>
              <a href="/">Cinema</a>
            </div>
            <div className="menu-footer">
              <a href="/" className="destac">
                Planeje seu evento
              </a>
              <a href="/">Divulgar evento</a>
            </div>
          </div>
          <p>cultMaps © Copyright 2023</p>
        </div>
      </footer>
    </>
  );
}

export default App;
