
function Header(props){
    return(
        <div >
            <h1 className="text-3xl font-medium ">Hello {props.name}</h1>
            <p>I Can Help you Manage your Activities</p>
        </div>
    )
}
export default Header