

function Services() {
    return (
        <div>
            <div style={{maxWidth: '100%', height: 'auto'}}>
            <img src="img/banner.jpg" alt="jeux de lumière bleue" 
            style={{ width: '100%', height: 'auto'}} />
            </div>
            <h2 className="PageTitle">Mon offre de services</h2>
            <p className="PageDescription">Voici les prestations sur lesquelles je peux intervenir</p>
            <div>    
                <div className="Separateur"></div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 text-center row-in">
                    <i className="fa-solid fa-display text-primary fa-3x"></i>
                    <h3 className="TitleCase">UX DESIGN</h3>
                    <p className="TextRow">L&apos;<strong>UX Design</strong> est une méthode de conception centrée sur l&apos;utilisateur. Son but est d&apos;offrir une expérience de navigation optimale à l&apos;internaute</p>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 text-center row-in">
                    <i className="fa-solid fa-file-code text-primary fa-3x"></i>
                    <h3 className="TitleCase">Développement WEB</h3>
                    <p className="TextRow">Le <strong>développement de site web</strong> repose sur l&apos;utilisation des languages HTML, CSS, JavaScript et PHP.</p>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 text-center row-in">
                    <i className="fa-solid fa-magnifying-glass-dollar text-primary fa-3x"></i>
                    <h3 className="TitleCase">Référencement</h3>
                    <p className="TextRow">Le <strong>Référencement naturel d&apos;un site,</strong>aussi appelé SEO, consiste à mette des techniques en oeuvre pour <i>améliorer sa position</i> dans les résultats des moteurs de recherche. </p>
                </div>
            </div>
        </div>
    )
}

export default Services;