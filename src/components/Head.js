const Header=()=>{
    return( <div id="header">
    <div id="banner">
        <div id="icon">
            <img src={require("../assets/logo.png")} id="logo"></img>
        </div>
        <div id="title">
            <h1>BAKERY</h1>
        </div>
    </div>
    <div id="navbar">
        <ul id="list">
            <li>HOME</li>
            <li>RESTAURANTS</li>
            <li>CAREERS</li>
            <li>CONTACT US</li>
            <li>SIGN IN</li>
            <li>CART</li>
        </ul>
    </div>

</div>)
}
export default Header;