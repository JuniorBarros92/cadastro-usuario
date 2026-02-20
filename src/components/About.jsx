export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">Sobre Mim</h2>

        <div className="about-content">
          <div className="about-image">
            <img
              src="/perfil.jpeg" // depois coloque sua imagem em /public
              alt="Junior Barros"
              className="foto-perfil"
            />
          </div>

          <div className="about-text">
            <p>
              Estudante de Análise e Desenvolvimento de Sistemas focado em
              desenvolvimento Front-End e Mobile.
            </p>

            <p>
              Tenho experiência com HTML, CSS, JavaScript e atualmente estou
              evoluindo com React, buscando criar interfaces modernas,
              responsivas e funcionais.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}