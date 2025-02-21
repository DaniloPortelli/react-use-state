import languages from "../../data/languages"


const Buttons = () => {

    return (

        languages.map((language) => (
            <button className="btn" >
                {language.title}
            </button>
        ))






    )
}


export default Buttons