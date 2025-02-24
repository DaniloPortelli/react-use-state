import { useState } from "react"

import languages from "../../data/languages"
import Button from "./Button"




const Main = () => {
    return (
        <main>
            

            {
                languages.map((language) =>{
                    return (

                        <Button key={language.id} title={language.title}/>

                    )


                }

                )
            }
        </main>
    )
}


export default Main