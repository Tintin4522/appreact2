import { Link } from "react-router-dom";


function Footer () {
    return (
        <div className="footerDiv">
          <footer className="footer">
            <div className="container2">
              <div className="row" id="row2">
                <div className="col-md-3 col-sm-6">
                  <div className="footerColumn">
                    <h4><strong>John Doe</strong></h4>
                    <p>40 Rue laure Diebold</p>
                    <p>69009 Lyon, France</p>
                    <p>Télephone: 06 20 30 40 50</p>
                    <div className="socialLinks">
                      <a href="https://github.com/github-john-doe" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-github"></i>
                      </a>
                      <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-square-x-twitter"></i>
                      </a>
                      <a href="https://www.linkedin.com/in/username/" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="footerColumn">
                    <h4><strong>Liens utiles</strong></h4>
                    <div className="supportLinks">
                      <Link className="supportLink" to="/">
                        <i className="fa fa-angle-right text-primary"></i> Accueil
                      </Link>
                      <Link className="supportLink" to="/GithubProfile">
                        <i className="fa fa-angle-right text-primary"></i> A propos
                      </Link>
                      <Link className="supportLink" to="/ServicesPage">
                        <i className="fa fa-angle-right text-primary"></i> Services
                      </Link>
                      <Link className="supportLink" to="/AboutPage">
                        <i className="fa fa-angle-right text-primary"></i> Me contacter
                      </Link>
                      <Link className="supportLink" to="/MentionsLegales">
                        <i className="fa fa-angle-right text-primary"></i> Mentions légales
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="footerColumn">
                    <h4><strong>Mes dernières réalisations</strong></h4>
                    <div className="supportLinks">
                      <Link className="supportLink" to="">
                        <i className="fa fa-angle-right text-primary"></i> Fresh food
                      </Link>
                      <Link className="supportLink" to="">
                        <i className="fa fa-angle-right text-primary"></i> Restaurant Akira
                      </Link>
                      <Link className="supportLink" to="">
                        <i className="fa fa-angle-right text-primary"></i> Espace bien-être
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="footerColumn">
                    <h4><strong>Mes derniers articles</strong></h4>
                    <div className="supportLinks">
                      <Link className="supportLink" to="">
                        <i className="fa fa-angle-right text-primary"></i> Coder son site en HTML/CSS
                      </Link>
                      <Link className="supportLink" to="">
                        <i className="fa fa-angle-right text-primary"></i> Vendre ses produits sur le web
                      </Link>
                      <Link className="supportLink" to="">
                        <i className="fa fa-angle-right text-primary"></i> Se positionner sur Google
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        <div className="footerCopyright">
            <strong>© Designed by John Doe</strong>
        </div>
        </div>
    )
}

export default Footer;


  