import './header.css';

function Header() {
    let headerTitle = "Martin Scorsese Movies"
    return (
        <div className="header" id="myHeader">
            <img className="header-img" src="https://i.pinimg.com/originals/d3/57/72/d35772eec72fce0de6314940db44c069.jpg" alt="martin scorsese" />
            <h1 className="header-title">{headerTitle}</h1>
        </div>
    )
}

export default Header;