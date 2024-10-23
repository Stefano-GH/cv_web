import { faPhone, faEnvelope, faLocationDot  } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import tas_image from "./tas_image.jpg";
import tutor_image from "./tutor_image.jpg";
import palme_image from "./palme_image.jpg";

import ai_image from "./AI_image.png";
import astro_image from "./astrophysics_image.jpg";
import env_image from "./envirnment_image.jpeg";

const data = {
    anagrafica: {
        nome: "Stefano",
        cognome: "Tumino",
        titoli: "Analista & Tester | Studente di AI | Laureato in Astrofisica",
        chi_sono: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non purus sed quam vehicula sodales." +
            "Pellentesque porta congue arcu pellentesque elementum. Duis elementum id ipsum id maximus. In hac habitasse platea dictumst." +
            "In ac ullamcorper quam. Phasellus posuere aliquam elit non scelerisque. Nullam varius dictum odio," +
            "eu efficitur turpis bibendum condimentum. Aliquam luctus, lectus in tempus convallis, nunc sapien tincidunt diam, " +
            "in finibus metus ipsum ac nulla. Vestibulum et interdum nulla. Sed lacinia laoreet dolor, non maximus lacus facilisis vitae. Aliquam erat volutpat.",
        contatti: [
            {tipo: "telefono", valore: "338 548 3925", font: faPhone},
            {tipo: "email", valore: "s.tumino99@gmail.com", font: faEnvelope},
            {tipo: "citta", valore: "Milano (MI), 20146", font: faLocationDot},
            {tipo: "github", valore: "github.com/Stefano-GH/", font: faGithub}
        ]
    },


    lavoro: [
        {
            data_inizio: "Apr 2024",
            data_fine: "",
            stagione: "",
            manzione: "Analista & Tester",
            azienda: "Tas SpA",
            sede: "via Lattuada 25, Milano (MI)",
            settore: "IT",
            immagine: tas_image
        },
        {
            data_inizio: "Ott 2023",
            data_fine: "Feb 2024",
            stagione: "",
            manzione: "Tutor di Matematica",
            azienda: "Da Vinci School",
            sede: "viale della Repubblica 35, Bologna (BO)",
            settore: "Insegnamento",
            immagine: tutor_image
        },
        {
            data_inizio: "Giu 2016",
            data_fine: "Set 2023",
            stagione: "Estati",
            manzione: "Chef de Rang",
            azienda: "Le Palme srl",
            sede: "via Barone, Marina di Ragusa (RG)",
            settore: "Ristorazione",
            immagine: palme_image
        }
    ],


    istruzione: [
        {
            data_inizio: "Set 2024",
            data_fine: "",
            corso: "AI for Science and Technology",
            tipo_corso: "Laurea Magistrale",
            classe_corso: "LM-91",
            sede: "Università degli Studi di Milano-Bicocca, UniMiB",
            tesi: "",
            immagine: ai_image
        },
        {
            data_inizio: "Set 2021",
            data_fine: "Dic 2023",
            corso: "Astronomia",
            tipo_corso: "Laurea Triennale",
            classe_corso: "L-30",
            sede: "Università degli Studi di Bologna, UniBo",
            tesi: "Meccanismi di produzione dell'energia in astrofisica",
            immagine: astro_image
        },
        {
            data_inizio: "Set 2018",
            data_fine: "Lug 2021",
            corso: "Scienze Ambientali",
            tipo_corso: "Laurea Triennale",
            classe_corso: "L-32",
            sede: "Università degli Studi di Bologna, UniBo",
            tesi: "Analisi dell'efficacia inibitoria della lignina pirolitica sull'enzima ureasi",
            immagine: env_image
        }
    ],


    certificazioni: [
        {
            dataConseguimento: "06/05/2024",
            corso: "Full Stack Web Development",
            luogo: "Certificato Udemy",
            ente: "Oak Academy"
        },
        {
            dataConseguimento: "22/01/2024",
            corso: "Teoria e Pratica sui Database Relazionali",
            luogo: "Certificato Udemy",
            ente: "Alessandro Bemporad"
        },
        {
            dataConseguimento: "14/01/2024",
            corso: "100 Days of Code: the Complete Python Bootcamp",
            luogo: "Certificato Udemy",
            ente: "Dr Angela Yu"
        }
    ],


    competenze: [
        { nome: "JavaScript", livello: "Avanzato" },
        { nome: "React", livello: "Intermedio" },
        { nome: "CSS", livello: "Avanzato" },
        { nome: "Node.js", livello: "Intermedio" }
    ],
    
    competenze_post: [
        "Analisi dei dati: Python, RStudio, Fortran90",
        "Database relazionali SQL, MyQSL, SQLite, PostgreSQL",
        "Tecnologie web: HTML, CSS, Javascript, React, Typescript, Bootstrap",
        "Altri linguaggi: java",
        "Conotrollo delle versioni: Git, GitHub, GitLab, GUnicorn",
        "Machine-learning: scikit-learn, TensorFlow",
        "Ambienti: PyCharm, Jupyter Lab, Google Colab"
    ],


    lingue: [
        {
            lingua: "Inglese",
            livello: 4,
            nomeLivello: "B2",
            dettaglioLivello: "Intermedio superiore"
        }
    ]
}

export default data;