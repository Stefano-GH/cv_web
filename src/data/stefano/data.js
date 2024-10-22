import { faPhone, faEnvelope, faLocationDot  } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ai_image from "./AI_image.png";
import astro_image from "./astrophysics_image.jpg";
import env_image from "./envirnment_image.jpeg";

const data = {
    anagrafica: {
        nome: "Stefano",
        cognome: "Tumino",
        titoli: "Analista & Tester | Studente di AI | Laureato in Astrofisica",
        chi_sono: "Sono un analista e tester, laureato in astrofisica e scienze ambientali. Studio le intelligenze artificali per la scienza e la tecnologia e lala prova ho una passione per la creazione di esperienze web intuitive.",
        contatti: [
            {tipo: "telefono", valore: "338 548 3925", font: faPhone},
            {tipo: "email", valore: "s.tumino99@gmail.com", font: faEnvelope},
            {tipo: "citta", valore: "Milano (MI), 20146", font: faLocationDot},
            {tipo: "github", valore: "github.com/Stefano-GH/", font: faGithub}
        ]
    },


    lavoro: [
        {
            dataInizio: "apr 2024",
            dataFine: "",
            stagione: "",
            manzione: "Analista & Tester",
            azienda: "Tas SpA",
            luogo: "via Lattuada 25, Milano (MI)",
            settore: "IT"
        },
        {
            dataInizio: "ott 2023",
            dataFine: "feb 2024",
            stagione: "",
            manzione: "Tutor di Matematica",
            azienda: "Da Vinci School",
            luogo: "viale della Repubblica 35, Bologna (BO)",
            settore: "Insegnamento"
        },
        {
            dataInizio: "giu 2016",
            dataFine: "set 2023",
            stagione: "Estati",
            manzione: "Chef de Rang",
            azienda: "Le Palme srl",
            luogo: "via Barone, Marina di Ragusa (RG)",
            settore: "Ristorazione"
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