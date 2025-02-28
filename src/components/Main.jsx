import { useState } from "react"
import languages from "../../data/languages"
import Button from "./Button"
import Card from "./Card"


const Main = () => {
    const [selectedLanguage, setSelectedLanguage] = useState("Nessun")

    const handleClick = (id) => {
        languages.map((l) => {
            if (id === l.id) {
                setSelectedLanguage(l.description)
            }
        })
    }

    return (
        <>
            {
                languages.map((l) => {
                    return (
                        <Button click={handleClick} title={l.title} key={l.id} id={l.id} />
                    )
                })
            }
            <Card language={selectedLanguage} />
        </>
    )
}

export default Main