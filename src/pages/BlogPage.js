

function Blog() {
    return (
        <div>
            <div style={{maxWidth: '100%', height: 'auto'}}>
            <img src="img/banner.jpg" alt="jeux de lumière bleue" 
            style={{ width: '100%', height: 'auto'}} />
            </div> 
            <h2 className="PageTitle">Blog</h2>
            <p className="PageDescription">Retrouvez ici quelques articles sur le développement web</p>
            <div>    
                <div className="Separateur"></div>
            </div>
            <div className="container custom-container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4 custom-column">
                        <div className="text-blog">
                        <div style={{maxWidth: '100%', height: 'auto'}}>
                            <img src="img/blog/coder.jpg" alt="écran avec des lignes de codes" className="img-fluid" />
                        </div>
                        <h3 className="TitleCase mt-3">Coder son site en HTML/CSS</h3>
                        <p className="TextRow">Some quick example text build on the card title and make up the bulk of the card&apos;s content.</p>
                        <button className="buttonLire">Lire la suite</button>
                        <div className="site">
                            <p className="custom-text2">Publié le 22 août 2022</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4 custom-column">
                        <div className="text-blog">
                        <div style={{maxWidth: '100%', height: 'auto'}}>
                            <img src="img/blog/croissance.jpg" alt="pièce de monais servant de pot de fleures" className="img-fluid" />
                        </div>
                        <h3 className="TitleCase mt-3">Vendre ses produits sur le web</h3>
                        <p className="TextRow">Some quick example text build on the card title and make up the bulk of the card&apos;s content.</p>
                        <button className="buttonLire">Lire la suite</button>
                        <div className="site">
                            <p className="custom-text2">Publié le 20 août 2022</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4 custom-column">
                        <div className="text-blog">
                        <div style={{maxWidth: '100%', height: 'auto'}}>
                            <img src="img/blog/google.jpg" alt="tête de bouda, cailloux empillé" className="img-fluid" />
                        </div>
                        <h3 className="TitleCase mt-3">Se positionner sur Google</h3>
                        <p className="TextRow">Some quick example text build on the card title and make up the bulk of the card&apos;s content.</p>
                        <button className="buttonLire">Lire la suite</button>
                        <div className="site">
                            <p className="custom-text2">Publié le 1 août 2022</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4 custom-column">
                        <div className="text-blog">
                        <div style={{maxWidth: '100%', height: 'auto'}}>
                            <img src="img/blog/screens.jpg" alt="tête de bouda, cailloux empillé" className="img-fluid" />
                        </div>
                        <h3 className="TitleCase mt-3">Coder en responsive design</h3>
                        <p className="TextRow">Some quick example text build on the card title and make up the bulk of the card&apos;s content.</p>
                        <button className="buttonLire">Lire la suite</button>
                        <div className="site">
                            <p className="custom-text2">Publié le 31 juillet 2022</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4 custom-column">
                        <div className="text-blog">
                        <div style={{maxWidth: '100%', height: 'auto'}}>
                            <img src="img/blog/seo.jpg" alt="tête de bouda, cailloux empillé" className="img-fluid" />
                        </div>
                        <h3 className="TitleCase mt-3">Technique de référencement</h3>
                        <p className="TextRow">Some quick example text build on the card title and make up the bulk of the card&apos;s content.</p>
                        <button className="buttonLire">Lire la suite</button>
                        <div className="site">
                            <p className="custom-text2">Publié le 30 juillet 2022</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4 custom-column">
                        <div className="text-blog">
                        <div style={{maxWidth: '100%', height: 'auto'}}>
                            <img src="img/blog/technos.png" alt="tête de bouda, cailloux empillé" className="img-fluid" />
                        </div>
                        <h3 className="TitleCase mt-3">Apprendre à coder</h3>
                        <p className="TextRow">Some quick example text build on the card title and make up the bulk of the card&apos;s content.</p>
                        <button className="buttonLire">Lire la suite</button>
                        <div className="site">
                            <p className="custom-text2">Publié le 12 juillet 2022</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog;