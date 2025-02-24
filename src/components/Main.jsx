import { useState } from "react"
import languages from "../../data/languages"
import Button from "./Button"
import Card from "./Card"



const Main = () => {

    // Destrutturizzazione di useState dove "selectedLanguage" indica 
    // un oggetto dell'array "languages". (In questa fase non indica
    //alcun oggetto ("null"))
    //"setSelectedLanguage" è una funzione che mi permette di
    //cambiare il valore di selectedLanguage(una volta che questo
    //verrà definito))
    const [selectedLanguage, setSelectedLanguage] = useState(null);

    //creo tanti bottoni quanti presenti nell'array con il metodo map
    const renderLanguage = () => languages.map((language) => {

        return (

            //attribuisco al bottone diverse chiavi da richiamare
            // con i props dal componente button:
            // key, per dare univocità ad ogni singolo oggetto;
            //title, per attribuirgli un titolo;
            //selected, che richiama la funzione "setSelectedLanguage"
            //e attribuirà un oggetto definito a "selectedLanguage"

            //la funzione "setSelectedLanguage" si attiverà al click
            //del bottone, che verrà richiamata tramite props nel
            //componente "Button", solo una volta che verrà attivata 
            // "selectedLanguage" diventerà un oggetto definito.
            <Button key={language.id} title={language.title}
                selected={() => setSelectedLanguage(language)} />
        )
    })

    //creo una funzione che, una volta definito "selectedLanguage", detti
    //determinate condizioni
    const renderSelectedLanguage = () => {
        //SE "selectedLanguage" è diverso da qualsiasi oggetto dell'array
        //(se non viene cliccato alcun bottone, "selectedLanguage" sarà
        //ovviamente diverso da qualsiasi oggetto dell'array), restituisco
        //quell' h3
        if (!selectedLanguage) return <h3>Nessun linguaggio selezionato</h3>

        //ALTRIMENTI restituisco il componente card inerente all'oggetto 
        //del bottone cliccato
        const { title, description } = selectedLanguage
        return (
            <Card title={title} description={description} />
        )
    }

    return (
        <main>
            <div>
                {renderLanguage()}
            </div>

            <div>
                {renderSelectedLanguage()}
            </div>
        </main>
    )
}


export default Main