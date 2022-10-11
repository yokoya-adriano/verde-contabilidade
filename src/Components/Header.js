import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import styles from './Header.module.css'
import { ReactComponent as Logo } from '../Assets/svg/logo.svg'
import { ReactComponent as HomeSvg } from '../Assets/svg/home.svg'
import { ReactComponent as ServicesSvg } from '../Assets/svg/services.svg'
import { ReactComponent as AboutSvg } from '../Assets/svg/about.svg'
import { ReactComponent as ContactSvg } from '../Assets/svg/contact.svg'
import useMedia from '../Hooks/useMedia'

const Header = () => {

    const mobile = useMedia('(max-width: 768px)')
    const [mobileMenu, setMobileMenu] = React.useState(false)

    const { pathname } = useLocation()
    React.useEffect(() => {
        setMobileMenu(false)
    }, [pathname])


    return (
        <header className={styles.header}>
            <div className="container gx-5 gx-sm-2">
                <div className="row align-items-center justify-content-between">
                    <div className="col-md-4 col-7">
                        <Link className={styles.header__link_logo} to="/">
                            <Logo className={styles.header__logo} />
                        </Link>
                    </div>
                    <div className="col-md-8 col-5">
                        {mobile &&
                            <button 
                                aria-label="Menu"
                                className={`${styles.header__nav_mobile_btn} ${mobileMenu && styles.header__nav_mobile_btn_active}`}
                                onClick={() => setMobileMenu(!mobileMenu)}>
                            </button>
                        }
                        <nav className={`${mobile ? styles.nav__mobile : styles.nav} ${mobileMenu && styles.nav__mobile_active}`}>
                            <div className={styles.header__nav}>
                                <NavLink to="/" end>
                                    {mobile && <HomeSvg />}
                                    Home
                                </NavLink>
                                <NavLink to="servicos">
                                    {mobile && <ServicesSvg />}
                                    Serviços
                                </NavLink>
                                <NavLink to="sobre">
                                    {mobile && <AboutSvg />}
                                    Sobre
                                </NavLink>
                                <NavLink to="contato">
                                    {mobile && <ContactSvg />}
                                    Contato
                                </NavLink>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
