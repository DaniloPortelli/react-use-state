import Buttons from "./Buttons"
import Description from "./Description"

const Main = () => {
    return (
        <main>
            <div className="mainContainer">
                <div className="buttonsContainer">
                    <Buttons />
                </div>
                <div className="descriptionContainer">
                    {/* <div className="description" >
                        <h3>prova</h3>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde saepe, laudantium dolor optio dolores error nisi minima dolore ipsum commodi eos eum, aut provident similique ea reiciendis praesentium alias assumenda.</span>
                    </div> */}
                    <Description/>
                </div>

            </div>
        </main>
    )
}


export default Main