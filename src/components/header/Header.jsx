import logo from './../../images/icons/logo.svg';
import './header.css';

function Header () {
    return (
        <header className = 'header'>
            <div className = 'header-logo'>
                <div className='logo'>
                    <img src = {logo} alt = 'logo'/>
                </div>
                <p className='logo-text'>Телескоп «Синтез»</p>
            </div>
            <nav className='header-nav'>
                <a href="#" className='nav-link'>Состояние обсерватории</a>
                <a href="#" className='nav-link'>План наблюдений</a>
                <a href="#" className='nav-link'>История наблюдений</a>
                <a href="#" className='nav-link'>История «Синтеза»</a>
                <a href="#" className='nav-link'>О нас</a>
                <a href="#" className='nav-link'>Мои задачи</a>
                <a href="#" className='nav-link'>Дополнительные инструменты</a>
                <a href="#" className='nav-link'>Мой профиль</a>

                <button className='theme-btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="4" stroke="#201A29" stroke-width="2"/>
                        <path d="M10 2.5V1M10 19V17.5M2.5 10H1M19 10H17.5M16.5 3.5L15.5 4.5M4.5 15.5L3.5 16.5M15.5 15.5L16.5 16.5M4.5 4.5L3.5 3.5" 
                            stroke="#201A29" 
                            stroke-width="2" 
                            stroke-linecap="round"
                        />
                    </svg>
                </button>
            </nav>
        </header>

    )
}

export default Header;