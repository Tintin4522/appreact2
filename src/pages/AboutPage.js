import { useState } from "react";

function About() {
    return (
        <div className="backAbout">
            <div className="fond">
                <div className="contactPage">
                    <h2 className="PageTitle">Me contacter</h2>
                    <p className="PageDescription">Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
                    <div className="Separateur"></div>

                    <div className="containerContact">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="contactForm">
                                    <h3><strong>Formulaire de contact</strong></h3>
                                    <div className="Separateur2"></div>
                                    <ContactForm />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="coordonnees">
                                    <h3><strong>Mes coordonnées</strong></h3>
                                    <div className="Separateur2"></div>
                                    <p><i className="fa-solid fa-map-marker-alt"></i>40 Rue Laure Diebold, 69009 Lyon, France</p>
                                    <p><i className="fa-solid fa-mobile-screen"></i>06 20 30 40 50</p>
                                    <Localisation />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About;

const ContactForm = () => {
    // Je stock les données du formulaire
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (event) => {
        event.preventDefault(); 
      
        console.log({ name, email, subject, message });
        // etre sur que toutes les zones sont lues
    };
  
    return (
        <form onSubmit={handleSubmit}>
            <div className="champs">
                <label htmlFor="name"></label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Votre nom"
                    required
                />
            </div>
            <div className="champs">
                <label htmlFor="email"></label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Votre adresse e-mail"
                    required
                />
            </div>
            <div className="champs">
                <label htmlFor="subject"></label>
                <input
                    type="text"
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Sujet"
                    required
                />
            </div>
            <div className="champs">
                <label htmlFor="message"></label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Votre message"
                    rows="5"
                    required
                ></textarea>
            </div>
            <div className="btnForm">
            <button type="submit">
                Envoyer
            </button>
            </div>
        </form>
    );
};

const Localisation = ({ width = '100%', height = '450px', src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1169.949070057507!2d4.7983647899675645!3d45.77873482756797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1714746834940!5m2!1sfr!2sfr'}) => {
  return (
    <iframe
        title="carte"
        src={src}
        width={width}
        height={height}
        style={{ border: '0' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};