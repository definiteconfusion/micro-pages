/* eslint-disable jsx-a11y/alt-text */
import './App.css';

function App() {

  const project = (image, title, desc, gitLink, lang, langLink) => {
    return (
      <div className="project-main">
        <img src={image} className="project-banner-image" />
        <div className="project-innerlay">
          <div className="project-infolay">
            <h2 className="project-info-title">
              {title}
            </h2>
            <p className="project-info-subtitle">
              {desc}
            </p>
            <div className="project-info-links">
              {link(gitLink, "Github", "./Images/Github.png")}
              {link(langLink, lang, `./Images/${lang}.png`)}
            </div>
          </div>
        </div>
      </div>
    )
  }

  const link = (url, text, imgaddr) => {
    return (
      <>
        <a href={url} className="page-link-main" >
          <img src={imgaddr} className="page-link-img" />
        </a>
      </>
    )
  }

  return (
    <>
      <div className="page-main">
        <img src="./Images/Logo.png" className="page-logo-image" />
        <h1 className="page-name">
          Jake Rase
        </h1>
        <p className="page-subtitle">
          Somewhat responsible software developer.....
        </p>
        <div className="page-link-containers">
          {link("https://github.com", "Github", "./Images/Github.png")}
          {link("https://www.linkedin.com/in/jake-rase-9a28a926a/", "Linkedin", "./Images/Linkedin.png")}
          {link("https://x.com/djakerase", "Twitter", "./Images/Twitter.png")}
          {link("mailto:jake@jakerase.dev", "Email", "./Images/Mail.png")}
          </div>
          <h3 className="page-area-label">About Me</h3>
          <div className="page-description">
            <p className="page-description-text">
            Hey... I’m Jake. I’m a full stack web developer, even though I prefer backends, I use React, Supabase, and Django for my stuff. Prototyping and initial design is done with Figma, and the final products usually include my WIP component library, Cupertino Components.
            </p>
          </div>
        <h3 className="page-area-label">Stuff I Did</h3>
        {project("./Images/DiceSim.png", "Dice Game Simulation", "A Rust app built to simulate a class pre-calculus dice rolling project", "https://github.com/definiteconfusion/dice-sim-rust", "Rust", "https://www.rust-lang.org/")}
        {project("./Images/PythonTutorial.png", "Python Tutorial", "A Python tutorial written in Markdown, learning the way I wished I did", "https://github.com/definiteconfusion/markdown-python-tutorial", "Python", "https://www.python.org/")}
      </div>
    </>
  );
}

export default App;
