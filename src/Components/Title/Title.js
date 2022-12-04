import "./Title.css"
function Title(props) {
    const {} = props;

    return (
        <h1 className="alert alert-info mt-2 bg-black title">{props.greeting}</h1>
        
    )
}
export default Title
