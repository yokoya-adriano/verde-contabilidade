import React from 'react'
import Head from './Head'
import styles from './Home.module.css'
import Background from '../Assets/img/home-background.jpg'
import Services from './Services/Services'
import { ReactComponent as Plane } from '../Assets/svg/paper-plane.svg'
import { ReactComponent as Arrow } from '../Assets/svg/arrow-trend-up.svg'
import { ReactComponent as Sitemap } from '../Assets/svg/sitemap.svg'

const Home = () => {
    return (
        <section className={styles.home}>
            <Head title="Home" description="Home" />
            <div className={styles.home__top}>
                <img className={styles.home__background_img} src={Background} alt="Background escritório home" title="Background escritório home" />
                <div className={`${styles.home__top_content} container gx-5 gx-sm-2`}>
                    <div className="row align-items-center justify-content-between">
                        <div className="col-12 col-lg-6">
                            <div className={styles.home__top_box_text}>
                                <h1 className={styles.home__title}>Verde Contabilidade</h1>
                                <span className={styles.home__subtitle}>Contabilidade consultiva e digital para facilitar o seu dia a dia</span>
                            </div>
                        </div>
                        <div className="col-6"></div>
                    </div>
                </div>
            </div>
            <div className={styles.home__advantages}>
                <div className="container gx-5 gx-sm-2">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-12">
                            <div className="row align-items-center justify-content-between">
                                <h2 className={styles.home__advantages_title}>
                                    Quem deve contratar a Verde Contabilidade?
                                </h2>
                                <span className={styles.home__advantages_text}>
                                    Nossa empresa contábil presta assessoria completa para empresas em todo o Brasil. Nosso maior foco, é atender empresas que já entenderam que para ter um negócio de sucesso, precisam de uma contabilidade especializada.
                                </span>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-12">
                            <div className={styles.home__advantages_charts}>
                                <Sitemap />
                                <h3 className={styles.home__advantages_charts_title}>
                                    EMPRESAS QUE PRECISAM DE ORGANIZAÇÃO
                                </h3>
                                <span className={styles.home__advantages_charts_text}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                </span>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-12">
                            <div className={styles.home__advantages_charts}>
                                <Plane />
                                <h3 className={styles.home__advantages_charts_title}>
                                    VIVER LIVRE DA BUROCRACIA
                                </h3>
                                <span className={styles.home__advantages_charts_text}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                </span>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-12">
                        <div className={styles.home__advantages_charts}>
                            <Arrow />
                            <h3 className={styles.home__advantages_charts_title}>
                                PRECISAM DE CONTADOR
                            </h3>
                            <span className={styles.home__advantages_charts_text}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            </span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <Services />
        </section>
    )
}

export default Home
