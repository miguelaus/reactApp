import "./Title.css";
import Logo from "../Logo/Logo";


function Title(props) {
    const {} = props;

    return (

        <div classNamme ="d-flex">

            <div>
                   <h1 className="alert alert-info mt-2 bg-black title">{props.greeting}</h1>
            </div>
            
            <div>
                  <Logo />
            </div>
        </div>
            
        
    )
    
}
export default Title
