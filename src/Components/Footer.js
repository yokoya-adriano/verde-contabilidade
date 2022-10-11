import React from 'react'
import styles from './Footer.module.css'
import { ReactComponent as Logo } from '../Assets/svg/logo-bg.svg'
import { ReactComponent as WhatsApp } from '../Assets/svg/whatsapp.svg'
import { ReactComponent as Mail } from '../Assets/svg/envelope.svg'
import { ReactComponent as Instagram } from '../Assets/svg/instagram.svg'
import { ReactComponent as Facebook } from '../Assets/svg/facebook-square.svg'


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__top}>
                <div className="container gx-5 gx-sm-2">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-xl-4 col-md-6 col-12">
                            <Logo className={styles.footer__logo} />
                        </div>
                        <div className="col-xl-4 col-md-6 col-12">
                        </div>
                        <div className="col-xl-4 col-md-6 col-12">
                            <div className={styles.footer__contact}>
                                <h3 className={styles.footer__subtitle}>
                                    Contatos:
                                </h3>
                                <a className={styles.footer__whatsapp} href="https://wa.me/5511" target="_blank" rel="noopener noreferrer">
                                    <WhatsApp />
                                    <span>99999999999</span>
                                </a>
                                <a className={styles.footer__mail} href="mailto:contabilidade@verde.com.br">
                                    <Mail />
                                    <span>contabilidade@verde.com.br</span>
                                </a>
                            </div>
                            <div className={styles.footer__socials}>
                                <h3 className={styles.footer__subtitle}>
                                    Redes Sociais:
                                </h3>
                                <div className={styles.footer__socials_content}>
                                    <a className={styles.footer__social} href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                        <Instagram />
                                    </a>
                                    <a className={styles.footer__social} href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                        <Facebook />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footer__bottom}>
                <div className="container gx-5 gx-sm-2">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-8">
                            <span className="">Verde contabilidade | Itu - SP</span>
                        </div>
                        <div className="col-4">
                            <span className={styles.footer__dev}>Desenvolvido por Adriano Yokoya</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
