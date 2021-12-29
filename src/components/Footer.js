import React from 'react'

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__bg'>
                <div className='footer__container container grid'>
                    <div>
                        <h2 className='footer__title'>&lt; Marco Cortes /&gt;</h2>
                        <span className='footer__subtitle'>Programador web</span>
                    </div>

                    <ul className='footer__links'>
                        <li>
                            <a className='footer__link' href="#services">Servicios</a>
                        </li>
                        <li>
                            <a className='footer__link' href="#portfolio">Portafolio</a>
                        </li>
                        <li>
                            <a className='footer__link' href="#contact">Contacto</a>
                        </li>
                    </ul>
                    <div className="footer__socials">
                        <a className="footer__social" href="https://facebook.com/marco.cortesxd" target="_blank" rel="noreferrer">
                            <i className="uil uil-facebook-f"></i>
                        </a>
                        <a className="footer__social" href="https://www.instagram.com/marco.cortes.xd/" target="_blank" rel="noreferrer">
                            <i className="uil uil-instagram"></i>
                        </a>
                        <a className="footer__social" href="https://twitter.com/MARCOAN51182869" target="_blank" rel="noreferrer">
                            <i className="uil uil-twitter-alt"></i>
                        </a>
                    </div>
                </div>
                <p className='footer__copy'>&#169; Marco Cortes. All rights reserved</p>
            </div>
        </footer>
    )
}