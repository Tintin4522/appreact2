

function Realisations() {
    return (
        <div>
            <div style={{maxWidth: '100%', height: 'auto'}}>
            <img src="img/banner.jpg" alt="jeux de lumière bleue" 
            style={{ width: '100%', height: 'auto'}} />
            </div> 
            <h2 className="PageTitle">Portfolio</h2>
            <p className="PageDescription">Voici quelques-unes de mes réalisations.</p>
            <div>    
                <div className="Separateur"></div>
            </div>
            <div className="container custom-container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4 custom-column">
                        <div className="text-center">
                        <div style={{maxWidth: '100%', height: 'auto'}}>
                            <img src="img/portfolio/fresh-food.jpg" alt="panier de légumes" className="img-fluid" />
                        </div>
                        <h3 className="TitleCase mt-3">Fresh food</h3>
                        <p className="TextRow">Réalisation d'un site avec commande en ligne</p>
                        <button className="buttonVoir">Voir</button>
                        <div className="site">
                            <p className="custom-text">site réalisé avec php et MySQL</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4 custom-column">
                        <div className="text-center">
                        <div style={{maxWidth: '100%', height: 'auto'}}>
                            <img src="img/portfolio/restaurant-japonais.jpg" alt="plateau de sushis" className="img-fluid" />
                        </div>
                        <h3 className="TitleCase mt-3">Restaurant Akira</h3>
                        <p className="TextRow">Réalisation d'un site vitrine</p>
                        <button className="buttonVoir">Voir</button>
                        <div className="site">
                            <p className="custom-text">site réalisé avec WordPress</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4 custom-column">
                        <div className="text-center">
                        <div style={{maxWidth: '100%', height: 'auto'}}>
                            <img src="img/portfolio/espace-bien-etre.jpg" alt="tête de bouda, cailloux empillé" className="img-fluid" />
                        </div>
                        <h3 className="TitleCase mt-3">Espace bien-être</h3>
                        <p className="TextRow">Réalisation d'un site vitrine pour un praticien de bien-être</p>
                        <button className="buttonVoir">Voir</button>
                        <div className="site">
                            <p className="custom-text">site réalisé en HTML/CSS</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    )
}

export default Realisations;