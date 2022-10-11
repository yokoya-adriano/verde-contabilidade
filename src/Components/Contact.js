import React from 'react'
import styles from './Contact.module.css'
import Input from '../Components/Forms/Input'
import Button from './Forms/Button'
import TextArea from './Forms/TextArea'
import { ReactComponent as Whatsapp } from '../Assets/svg/whatsapp-black.svg'
import { ReactComponent as Phone } from '../Assets/svg/phone.svg'
import { ReactComponent as Mail } from '../Assets/svg/envelope-black.svg'

const Contact = () => {
    return (
        <section className={styles.contact}>
            <div className="container gx-5 gx-sm-2">
                <div className="row">
                    <div className="col-12">
                        <h1 className="default__title">Contato</h1>
                    </div>
                </div>
                <div className="row align-content-center">
                    <div className="col-md-6 col-12">
                        <form className={styles.contact__form}>
                            <Input label="Nome" type="text" name="nome" />
                            <Input label="E-mail" type="email" name="email" />
                            <TextArea label="Mensagem" type="text" name="mensagem" />
                            <Button>Enviar</Button>
                        </form>
                    </div>
                    <div className="col-md-6 col-12">
                        <h2 className={styles.contact__subtitle}>Horário de funcionamento</h2>
                        <span className={styles.contact__links}>Segunda a sexta das 8h às 11h50 e das 13h às 18h</span>
                        <a className={styles.contact__links} href="https://wa.me/5511" target="_blank" rel="noopener noreferrer">
                            <Whatsapp />
                            <span>99999999999</span>
                        </a>
                        <a className={styles.contact__links} href="tel:99999999">
                            <Phone />
                            <span>99999999999</span>
                        </a>
                        <a className={styles.contact__links} href="mailto:drilao@drilao.com.br">
                            <Mail />
                            <span>drilao@drilao.com.br</span>
                        </a>
                        <h2 className={styles.contact__subtitle}>Endereço</h2>
                        <span className={styles.contact__links}>Rua Lorem Ipsum lorem bla blalalablal</span>
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.504853651703!2d-46.63638958447595!3d-23.550304967070442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59abaaae4233%3A0xd9186faf714bc5b1!2sPra%C3%A7a%20da%20S%C3%A9%20-%20Se%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001001-000!5e0!3m2!1spt-BR!2sbr!4v1665249816414!5m2!1spt-BR!2sbr"
                            style={{ border: 0, width: '100%', height: '350px', marginTop: '15px' }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
