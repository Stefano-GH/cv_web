import { faPhone, faEnvelope, faLocationDot  } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import tas_image from "./images/tas_image.jpg";
import tutor_image from "./images/tutor_image.jpg";
import palme_image from "./images/palme_image.jpg";

import ai_image from "./images/AI_image.png";
import astro_image from "./images/astrophysics_image.jpg";
import env_image from "./images/envirnment_image.jpeg";

export const dataIta = {
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
            sede: "Milano (MI)",
            settore: "IT",
            immagine: tas_image
        },
        {
            data_inizio: "Ott 2023",
            data_fine: "Feb 2024",
            stagione: "",
            manzione: "Tutor di Matematica",
            azienda: "Istituto Da Vinci",
            sede: "Bologna (BO)",
            settore: "Insegnamento",
            immagine: tutor_image
        },
        {
            data_inizio: "Giu 2016",
            data_fine: "Set 2023",
            stagione: "Estati",
            manzione: "Chef de Rang",
            azienda: "Le Palme srl",
            sede: "Ragusa (RG)",
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
        {
            nome:"Analisi dei dati",
            tipo_competenza:"tecnica",
            competenze:["Python", "RStudio", "Fortran90"],
            dettagli:["Google Colab", "Jupiter Lab", "PyCharm", "Tensor Flow", "Scikit-learn"]
        },
        {
            nome:"Tecnologie Web",
            tipo_competenza:"tecnica",
            competenze:["HTML, CSS", "JavaScript", "TypeScript"],
            dettagli:["React", "Angular"]
        },
        {
            nome:"Database Relazionali",
            tipo_competenza:"tecnica",
            competenze:["SQLite", "MySQL", "PostgreSQL"],
            dettagli:["DBeaver", "MySQL Workbench"]
        },
        {
            nome:"Controllo delle versioni",
            tipo_competenza:"tecnica",
            competenze:["Git", "GitHub", "GitLab", "Gunicorn"],
            dettagli:[]
        },
        {
            nome:"Altre competenze informatiche",
            tipo_competenza:"tecnica",
            competenze:["Java", "Fogli di calcolo"],
            dettagli:["Eclipse", "IntelliJ", "Excel", "Fogli Google"]
        },
        {
            nome:"Competenze linguistiche",
            tipo_competenza:"linguistica",
            competenze:["Italiano", "Inglese", "Spagnolo", "Francese"],
            dettagli:["B2", "B1", "A1"],
            nomeLivello: ["Intermedio avanzato", "Intermedio scarso", "Base"],
            livello: [4, 3, 1]
        }
    ],


    testi: {
        home_handleSubmit_success: "Messaggio iniviato con successo!",
        home_handleSubmit_failure: "Si è verificato un errore nell'invio del messaggio.",

        home_hero_benvenuti: "Benvenuti nel mio sito!",
        home_hero_bottone: "Contattami",

        home_about_titolo: "Chi sono",

        home_education_titolo: "Istruzione",
        home_education_sede: "Sede",
        home_education_periodo: "Periodo",
        home_education_noDataFine: "In corso",
        home_education_tesi: "Tesi",

        home_experience_titolo: "Esperienza",
        home_experience_settore: "Settore",

        home_skills_titolo: "Competenze",
        home_skills_linguaggi: "Linguaggi",
        home_skills_strumenti: "Strumenti",
        home_skills_linguaMadre: "Lingua Madre",
        home_skills_altreLingue: "Altre Lingue",

        home_contact_titolo: "Contatti",
        home_contact_nome: "Nome",
        home_contact_nomePlaceholder: "Il tuo nome",
        home_contact_email: "Email",
        home_contact_emailPlaceholder: "La tua email",
        home_contact_messaggio: "Messaggio",
        home_contact_messaggioPlaceholder: "Scrivi il tuo messaggio qui",
        home_contact_bottone: "Invia",

        home_footer_scaricaPdf: "Scarica PDF",
        home_footer_dirittiRiservati: "Tutti i diritti riservati.",


        pdfGenerator_skills_titolo: "COMPETENZE",
        pdfGenerator_experience_titolo: "ESPERIENZE PROFESSIONALI",
        pdfGenerator_experience_noDataFine: "Attuale",
        pdfGenerator_education_titolo: "ISTRUZIONE E FORMAZIONE",
        pdfGenerator_lingue_titolo: "COMPETENZE LINGUISTICHE",
        pdfGenerator_lingue_madreLingua: "LINGUA MADRE",
    }
}


//////////////////////////////
// ENGLISH VERSION
//////////////////////////////

export const dataEng = {
    anagrafica: {
        nome: "Stefano",
        cognome: "Tumino",
        titoli: "Analyst & Tester | AI Student | Astrophysics Graduated",
        chi_sono: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non purus sed quam vehicula sodales." +
            "Pellentesque porta congue arcu pellentesque elementum. Duis elementum id ipsum id maximus. In hac habitasse platea dictumst." +
            "In ac ullamcorper quam. Phasellus posuere aliquam elit non scelerisque. Nullam varius dictum odio," +
            "eu efficitur turpis bibendum condimentum. Aliquam luctus, lectus in tempus convallis, nunc sapien tincidunt diam, " +
            "in finibus metus ipsum ac nulla. Vestibulum et interdum nulla. Sed lacinia laoreet dolor, non maximus lacus facilisis vitae. Aliquam erat volutpat.",
        contatti: [
            {tipo: "Telephone", valore: "338 548 3925", font: faPhone},
            {tipo: "email", valore: "s.tumino99@gmail.com", font: faEnvelope},
            {tipo: "city", valore: "Milan (MI), 20146", font: faLocationDot},
            {tipo: "github", valore: "github.com/Stefano-GH/", font: faGithub}
        ]
    },


    lavoro: [
        {
            data_inizio: "Apr 2024",
            data_fine: "",
            stagione: "",
            manzione: "Analyst & Tester",
            azienda: "Tas SpA",
            sede: "Milan (MI)",
            settore: "IT",
            immagine: tas_image
        },
        {
            data_inizio: "Oct 2023",
            data_fine: "Feb 2024",
            stagione: "",
            manzione: "Math Tutor",
            azienda: "Da Vinci Institute",
            sede: "Bologna (BO)",
            settore: "Teaching",
            immagine: tutor_image
        },
        {
            data_inizio: "Jun 2016",
            data_fine: "Sep 2023",
            stagione: "Summers",
            manzione: "Chef de Rang",
            azienda: "Le Palme srl",
            sede: "Ragusa (RG)",
            settore: "Catering",
            immagine: palme_image
        }
    ],


    istruzione: [
        {
            data_inizio: "Sep 2024",
            data_fine: "",
            corso: "AI for Science and Technology",
            tipo_corso: "Degree",
            classe_corso: "LM-91",
            sede: "University of Milano-Bicocca, UniMiB",
            tesi: "",
            immagine: ai_image
        },
        {
            data_inizio: "Sep 2021",
            data_fine: "Dec 2023",
            corso: "Astronomy",
            tipo_corso: "Bachelor's degree",
            classe_corso: "L-30",
            sede: "University of Bologna, UniBo",
            tesi: "Energy production mechanisms in astrophysics",
            immagine: astro_image
        },
        {
            data_inizio: "Sep 2018",
            data_fine: "Jul 2021",
            corso: "Envirnmental Science",
            tipo_corso: "Bachelor's degree",
            classe_corso: "L-32",
            sede: "University of Bologna, UniBo",
            tesi: "Analysis of the inhibitory efficacy of pyrolytic lignin on the urease enzyme",
            immagine: env_image
        }
    ],


    certificazioni: [
        {
            dataConseguimento: "06/05/2024",
            corso: "Full Stack Web Development",
            luogo: "Udemy Certificate",
            ente: "Oak Academy"
        },
        {
            dataConseguimento: "22/01/2024",
            corso: "Theory and Practise on Relational Databases",
            luogo: "Udemy Certificate",
            ente: "Alessandro Bemporad"
        },
        {
            dataConseguimento: "14/01/2024",
            corso: "100 Days of Code: the Complete Python Bootcamp",
            luogo: "Udemy Certificate",
            ente: "Dr Angela Yu"
        }
    ],

    
    competenze: [
        {
            nome:"Data Analysis",
            tipo_competenza:"tecnica",
            competenze:["Python", "RStudio", "Fortran90"],
            dettagli:["Google Colab", "Jupiter Lab", "PyCharm", "Tensor Flow", "Scikit-learn"]
        },
        {
            nome:"Web Technologies",
            tipo_competenza:"tecnica",
            competenze:["HTML, CSS", "JavaScript", "TypeScript"],
            dettagli:["React", "Angular"]
        },
        {
            nome:"Relational Databses",
            tipo_competenza:"tecnica",
            competenze:["SQLite", "MySQL", "PostgreSQL"],
            dettagli:["DBeaver", "MySQL Workbench"]
        },
        {
            nome:"Version Control",
            tipo_competenza:"tecnica",
            competenze:["Git", "GitHub", "GitLab", "Gunicorn"],
            dettagli:[]
        },
        {
            nome:"Other informatic skills",
            tipo_competenza:"tecnica",
            competenze:["Java", "SpreadSheets"],
            dettagli:["Eclipse", "IntelliJ", "Excel", "Google Sheets"]
        },
        {
            nome:"Linguistic Skills",
            tipo_competenza:"linguistica",
            competenze:["Italian", "English", "Spanish"],
            dettagli:["B2", "B1"],
            nomeLivello: ["Intermediate advanced", "Intermediate"],
            livello: [4, 3]
        }
    ],


    testi: {
        home_handleSubmit_success: "Message sent successfully!",
        home_handleSubmit_failure: "An error occurred while sending your message.",

        home_hero_benvenuti: "Welcome to my website!",
        home_hero_bottone: "Contact me",

        home_about_titolo: "Who I am",

        home_education_titolo: "Education",
        home_education_sede: "Site",
        home_education_periodo: "Period",
        home_education_noDataFine: "In progress",
        home_education_tesi: "Thesis",

        home_experience_titolo: "Experience",
        home_experience_settore: "Sector",

        home_skills_titolo: "Skills",
        home_skills_linguaggi: "Languages",
        home_skills_strumenti: "Tools",
        home_skills_linguaMadre: "Mothertongue",
        home_skills_altreLingue: "Other languages",

        home_contact_titolo: "Contacts",
        home_contact_nome: "Name",
        home_contact_nomePlaceholder: "Your name",
        home_contact_email: "Email",
        home_contact_emailPlaceholder: "Your email",
        home_contact_messaggio: "Message",
        home_contact_messaggioPlaceholder: "Write your message here",
        home_contact_bottone: "Send",

        home_footer_scaricaPdf: "Download PDF",
        home_footer_dirittiRiservati: "All rights reserved.",


        pdfGenerator_skills_titolo: "SKILLS",
        pdfGenerator_experience_titolo: "PROFESSIOAL EXPERIENCES",
        pdfGenerator_experience_noDataFine: "Actual",
        pdfGenerator_education_titolo: "EDUCATION",
        pdfGenerator_lingue_titolo: "LINGUISTIC SKILLS",
        pdfGenerator_lingue_madreLingua: "MOTHERTONGUE",
    }
}