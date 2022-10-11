import React from 'react'
import styles from './About.module.css'
import Logo from '../Assets/img/logo-simples.png'
import { ReactComponent as Binoculars } from '../Assets/svg/binoculars.svg'
import { ReactComponent as Bullseyes } from '../Assets/svg/bullseye.svg'
import { ReactComponent as Balance } from '../Assets/svg/balance-scale.svg'

const About = () => {
    return (
        <section className={styles.about}>
            <div className="container gx-5 gx-sm-2">
                <div className="row">
                    <div className="col-12">
                        <h1 className="default__title">Sobre a Verde Contabilidade</h1>
                    </div>
                </div>
                <div className="row align-items-center justify-content-between">
                    <div className="col-12 col-lg-7">
                        <p className={styles.about__text}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <div className={styles.about__frame}>
                            <h2 className={styles.about__subtitle}>
                                <Bullseyes />
                                Nossa Missão
                            </h2>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                            <h2 className={styles.about__subtitle}>
                                <Binoculars />
                                Nossa Visão
                            </h2>
                            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            <h2 className={styles.about__subtitle}>
                                <Balance />
                                Nossos Valores
                            </h2>
                            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        </div>
                    </div>
                    <div className="col-4 d-none d-lg-block">
                        <img className={styles.about__start_img} src={Logo} alt="Logotipo Verde Contabilidade" title="Logotipo Verde Contabilidade" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
