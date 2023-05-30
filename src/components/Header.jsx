const Header = ()=>{
    return (
        <div className="Header">
            <div className="header">
                <div className="logo">LOGO</div>
                <a href="/main"><i className="fa-solid fa-layer-group"></i> Главная панель</a>
                <a href="/patients"><i className="fa-solid fa-layer-group"></i> Пациенты</a>
            </div>
        </div>
    )
}

export default Header