import { useState } from "react";

const TitlePage = () => {
    return (
        <div>
            <h2 className="PageTitle">Mentions légales</h2>
            <div>    
                <div className="Separateur"></div>
            </div>
        </div>
    )
}

const Accordion = () => {
    const [activeItem, setActiveItem] = useState(null);
  
    const toggleItem = (index) => {
      setActiveItem(activeItem === index ? null : index);
    };
  
    return (   
        <div className="accordion" id="myAccordion">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button
                    className={`accordion-button ${activeItem === 0 ? '' : 'collapsed'}`}
                    type="button"
                    onClick={() => toggleItem(0)}
                    aria-expanded={activeItem === 0}
                    aria-controls="collapseOne"
                    >
                    Editeur du site
                    </button>
                </h2>
                <div
                    id="collapseOne"
                    className={`accordion-collapse collapse ${activeItem === 0 ? 'show' : ''}`}
                    aria-labelledby="headingOne"
                    data-bs-parent="#myAccordion"
                    >
                    <div className="accordion-body">
                        <p><strong>John Doe</strong></p>
                        <p><i className="fa-solid fa-map-marker-alt"></i>  40 Rue Laure Diebold</p>
                        <p>69009 Lyon, France</p>
                        <p><a href="tel:0620304050" className="liens"><i className="fa-solid fa-mobile-screen"></i>  06 20 30 40 50</a></p>
                        <p><a href="mailto:john.doe@gmail.com" className="liens"><i className="fa-solid fa-envelope"></i>  john.doe@gmail.com</a></p>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button
                        className={`accordion-button ${activeItem === 1 ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => toggleItem(1)}
                        aria-expanded={activeItem === 1}
                        aria-controls="collapseTwo"
                    >
                    Hébergeur
                    </button>
                </h2>
                <div
                    id="collapseTwo"
                    className={`accordion-collapse collapse ${activeItem === 1 ? 'show' : ''}`}
                    aria-labelledby="headingTwo"
                    data-bs-parent="#myAccordion"
                    >
                    <div className="accordion-body">
                        <p><strong>Always Data</strong></p>
                        <p>91 rue du Faubourg Saint Honoré</p>
                        <p>75008 Paris</p>
                        <a href="https://www.alwaysdata.com" target="_blank" rel="noopener noreferrer" className="liens">
                            <i className="fa-solid fa-globe"></i>  
                            www.alwaysdata.com
                        </a>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                    <button
                        className={`accordion-button ${activeItem === 2 ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => toggleItem(2)}
                        aria-expanded={activeItem === 2}
                        aria-controls="collapseTwo"
                    >
                    Crédits
                    </button>
                </h2>
                <div
                    id="collapseThree"
                    className={`accordion-collapse collapse ${activeItem === 2 ? 'show' : ''}`}
                    aria-labelledby="headingThree"
                    data-bs-parent="#myAccordion"
                    >
                    <div className="accordion-body">
                        <p><strong>Crédits</strong></p>
                        <p>Site développé par John Doe, étudiant du CEF</p>
                        <p>Les images libres de droit sont issues du site <a className="liens" href="https://pixabay.com" target="_blank" rel="noopener noreferrer">Pixabay</a> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function Mentions() {
    return (
      <main> 
        <TitlePage />
        <Accordion /> 
      </main>
    );
}