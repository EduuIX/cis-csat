import './header.css';

const handleLogoClick = () => {
    window.location.href = "/";
};

const Header = () => {
    return(
        <header>
        <div onClick={handleLogoClick} className="logo">
            <div className="icone">
                <i className="fa-regular fa-building"></i>
            </div>
            <p>|</p>
            <h1>CIS CSAT</h1>
        </div>
        <div className="user">
            <div className="icone">
                <i className="fa-regular fa-user"></i>
            </div>
            <h2>Allan Costa</h2>
        </div>
    </header>
    );
}

export {Header};