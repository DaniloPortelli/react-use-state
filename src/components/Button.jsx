import { useState } from "react";
import languages from "../../data/languages";

const Button = ({title, id, click}) => {


return(

    <button onClick={ () => click(id)} key={id}>{title}</button>
)

}

export default Button