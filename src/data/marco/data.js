import { faPhone, faEnvelope, faLocationDot  } from '@fortawesome/free-solid-svg-icons';

const data = {
    anagrafica: {
        nome: "Marco",
        cognome: "Tumino",
        contatti: [
            {tipo: "telefono", valore: "379 119 6898", font: faPhone},
            {tipo: "email", valore: "marcotumino05@gmail.com", font: faEnvelope},
            {tipo: "citta", valore: "Ragusa (RG), 97100", font: faLocationDot}
        ]
    },


    lavoro: [
        {
            dataInizio: "giu 2021",
            dataFine: "set 2022",
            stagione: "Estati",
            manzione: "Chef De Rang",
            azienda: "Le Palme srl",
            luogo: "via Barone, Marina di Ragusa",
            settore: "Ristorazione"
        },
        {
            dataInizio: "giu 2023",
            dataFine: "set 2023",
            stagione: "Estate",
            manzione: "Chef De Rang",
            azienda: "Arancino",
            luogo: "Porto Turistico, Marina di Ragusa",
            settore: "Ristorazione"
        },
        {
            dataInizio: "giu 2023",
            dataFine: "set 2023",
            stagione: "Estate",
            manzione: "Chef De Rang & Azionista",
            azienda: "Per Te Eventi",
            luogo: "Il Baglio, Ragusa",
            settore: "Ristorazione"
        }
    ],


    istruzione: [
        {
            dataInizio: "set 2019",
            dataFine: "giu 2024",
            corso: "Diploma superiore | Indirizzo tecnico-informatico",
            universita: "Istituto tecnico Ettore Majorana",
            tesi:"Programmazione con file JSON presso Visual Software"
        }
    ],


    certificazioni: [],


    competenze: [
        "Gestione del tempo e delle risorse",
        "Problem solving e pensiero critico",
        "Team working e adattabilità",
        "Capacità relazionali e di interazione positiva",
        "Creatività e capacità di apprendimento rapido"
    ],


    lingue: [
        {
            lingua: "Inglese",
            livello: 3,
            nomeLivello: "B1",
            dettaglioLivello: "Intermedio inferiore"
        }
    ]
}


export default data;