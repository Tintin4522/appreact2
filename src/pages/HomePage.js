import { ProgressBars } from "../components/ProgressBars";


function scrollHomePage() {
    const homePageElement = document.getElementById("homePage");
    if (homePageElement) {
        window.scrollTo({
            top: homePageElement.offsetTop,
            behavior: "smooth"
        })
    }
}

function Home() {
    return (
        <div>
            <div className="containerHome">
                <div className="imageHome">
                    <div style={{maxWidth: '100%', height: 'auto'}}>
                    <img src="img/hero-bg.jpg" alt="un homme devant un ordinateur réalisant du code" 
                    style={{ width: '100%', height: 'auto'}} />
                    </div>
                </div>
                <div className="textOverlay"> 
                    <h1><strong>Bonjour, je suis John Doe</strong></h1> 
                    <h2><strong>Développeur web full stack</strong></h2>
                        <button className="btnHome" onClick={scrollHomePage}>En savoir plus</button>
                </div>
            </div>
            <div id="homePage" className="homePage">
                <div className="row">
                    <div className="col-md-6">
                        <div className="containerApropos">
                            <div className="apropos">
                                <h3><strong>A propos</strong></h3>
                                <div className="Separateur2"></div>
                                <p>Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation 
                                    d'<strong>intégrateur-développeur web</strong> au CEF. Au cours de cette formation, j'ai 
                                    pu acquérir des bases solides pour travailler dans le domaine du <strong>développement web</strong>.
                                </p>
                                <p>Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour
                                    consolider ma formation de <strong>développeur web full stack</strong>.
                                </p>
                                <p>J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes 
                                    pratiques du web.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="containerProfil">
                            <div className="containerProfilImage">
                                <img src="img/john-doe-about.jpg" alt="un homme devant un ordinateur réalisant du code" 
                                style={{ width: '100%', height: 'auto'}} />
                            </div>
                            <h3><strong>Mes compétences</strong></h3>
                            <ProgressBars />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;