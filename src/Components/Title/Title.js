import "./Title.css";
import Logo from "../Logo/Logo";


function Title(props) {
    const {} = props;

    return (

        <div className ="text-center">

            <div>
                   <h1 className="alert alert-info mt-2 bg-black title">{props.greeting}</h1>
                    
            </div>
            
            <div>
                  <Logo to="/home" />
            </div>
        </div>
            
        
    )
    
}
export default Title
