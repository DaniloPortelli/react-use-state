import languages from "../../data/languages"


const Button = ({title, selected}) => {
    return(

    <button onClick={ () => selected() }>
        {title}
    </button>
    )
}

export default Button