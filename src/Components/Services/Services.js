/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
import Service1 from './Service1'
import styles from './Services.module.css'
import { ReactComponent as Clock } from '../../Assets/svg/clock-rotate-left.svg'
import { ReactComponent as Calculator } from '../../Assets/svg/calculator.svg'
import { ReactComponent as Dollar } from '../../Assets/svg/hand-holding-dollar.svg'
import { ReactComponent as Coins } from '../../Assets/svg/coins.svg'
import { ReactComponent as Board } from '../../Assets/svg/chalkboard-teacher.svg'
import { ReactComponent as Pencil } from '../../Assets/svg/pencil-ruler.svg'
import { ReactComponent as Up } from '../../Assets/svg/sort-amount-up.svg'
import { ReactComponent as Avatar } from '../../Assets/svg/user-tie.svg'

const Services = () => {
    return (
        <section className={styles.services}>
            <div className="container gx-5 gx-sm-2">
                <div className="row">
                    <div className="col-12">
                        <h1 className="default__title">Serviços</h1>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-xl-3 col-md-6 col-12">
                        <Link className={styles.services__links} to="servico1" element={<Service1 />}>
                            <Coins />
                            <h2 className={styles.services__subtitle}>Assessoria contábil</h2>
                        </Link>
                    </div>
                    <div className="col-xl-3 col-md-6 col-12">
                        <Link className={styles.services__links} to="servico1" element={<Service1 />}>
                            <Calculator />
                            <h2 className={styles.services__subtitle}>Gestão financeira</h2>
                        </Link>
                    </div>
                    <div className="col-xl-3 col-md-6 col-12">
                        <Link className={styles.services__links} to="servico1" element={<Service1 />}>
                            <Pencil />
                            <h2 className={styles.services__subtitle}>Abertura de empresa</h2>
                        </Link>
                    </div>
                    <div className="col-xl-3 col-md-6 col-12">
                        <Link className={styles.services__links} to="servico1" element={<Service1 />}>
                            <Clock />
                            <h2 className={styles.services__subtitle}>Abertura de filial</h2>
                        </Link>
                    </div>
                    <div className="col-xl-3 col-md-6 col-12">
                        <Link className={styles.services__links} to="servico1" element={<Service1 />}>
                            <Dollar />
                            <h2 className={styles.services__subtitle}>Consultoria contábil</h2>
                        </Link>
                    </div>
                    <div className="col-xl-3 col-md-6 col-12">
                        <Link className={styles.services__links} to="servico1" element={<Service1 />}>
                            <Board />
                            <h2 className={styles.services__subtitle}>Revisão tributária</h2>
                        </Link>
                    </div>
                    <div className="col-xl-3 col-md-6 col-12">
                        <Link className={styles.services__links} to="servico1" element={<Service1 />}>
                            <Up />
                            <h2 className={styles.services__subtitle}>Planejamento tributário</h2>
                        </Link>
                    </div>
                    <div className="col-xl-3 col-md-6 col-12">
                        <Link className={styles.services__links} to="servico1" element={<Service1 />}>
                            <Avatar />
                            <h2 className={styles.services__subtitle}>Recursos humanos</h2>
                        </Link>
                    </div>
                </div>
                <div className="col-12">
                    <a className="default__btn" href="">
                        Entren em contato conosco
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Services
