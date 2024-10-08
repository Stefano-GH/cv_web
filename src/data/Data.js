import { faPhone, faEnvelope, faLocationDot  } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const DatiAnagrafici = {
    nome: "Stefano",
    cognome: "Tumino",
    contatti: [
        {tipo: "telefono", valore: "338 548 3925", font: faPhone},
        {tipo: "email", valore: "s.tumino99@gmail.com", font: faEnvelope},
        {tipo: "citta", valore: "Milano (MI), 20146", font: faLocationDot},
        {tipo: "github", valore: "github.com/Stefano-GH/", font: faGithub}
    ]
}


export const EsperienzeProfessionali = [
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
]


export const educationData = [
    {
        dataInizio: "set 2024",
        dataFine: "",
        corso: "Laurea Magistrale in Artificial Intelligence for Science and Technology (LM-91)",
        universita: "Università degli Studi di Milano-Bicocca, UniMiB",
        tesi: ""
    },
    {
        dataInizio: "set 2021",
        dataFine: "dic 2023",
        corso: "Laurea Triennale in Astronomia (LM-30)",
        universita: "Università degli Studi di Bologna, UniBo",
        tesi: "Meccanismi di produzione dell'energia in astrofisica"
    },
    {
        dataInizio: "set 2018",
        dataFine: "lug 2021",
        corso: "Laurea Triennale in Scienze Ambientali (LM-32)",
        universita: "Università degli Studi di Bologna, UniBo",
        tesi: "Analisi dell'efficacia inibitoria della lignina pirolitica sull'enzima ureasi"
    }
]


export const certificationData = [
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
]


export const informaticsData = [
    "Analisi dei dati: Python, RStudio, Fortran90",
    "Database relazionali SQL, MyQSL, SQLite, PostgreSQL",
    "Tecnologie web: HTML, CSS, Javascript, React, Typescript, Bootstrap",
    "Altri linguaggi: java",
    "Conotrollo delle versioni: Git, GitHub, GitLab, GUnicorn",
    "Machine-learning: scikit-learn, TensorFlow",
    "Ambienti: PyCharm, Jupyter Lab, Google Colab"
]


export const lingueData = [
    {
        lingua: "Inglese",
        livello: 4,
        nomeLivello: "B2",
        dettaglioLivello: "Intermedio superiore"
    }
]