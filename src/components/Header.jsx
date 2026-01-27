import React from 'react'
import logo from '../assets/images/logo.svg'
import phone from '../assets/images/phone.svg'
import mail from '../assets/images/mail.svg'

function Header() {
    return (
        <div className='header max-w-7xl flex flex-row justify-between mx-auto'>
            <div>
                <img src={logo} alt="" />
            </div>

            <div>
                <div className="flex gap-3 place-content-end">
                    <a className="flex gap-2" href="tel:+919821799655">
                        <img src={phone} alt="" />
                        <span className='text-[#1946b6] font-normal'>+91-9821799655</span>
                    </a>
                    <span>
                        |
                    </span>
                    <a className="flex gap-2" href="mailto:business@idreambiz.com">
                        <img src={mail} alt="" />
                        <span className='text-[#1946b6] font-normal'>business@idreambiz.com</span>
                    </a>
                </div>

                <nav className="header__nav flex gap-10" aria-label="Primary">
                    <a className="nav__item" href='#'>
                        <span className='text-[#26b5e9]'>5</span>
                        <span className='text-[#ef4444]'>0</span>
                        <span className='text-[#f59e0b]'>0</span>
                        <span className='text-[#84cc16]'>MG</span>
                        <span className="nav__caret">▾</span>
                    </a>

                    <a className="nav__item" href='#'>
                        Services <span className="nav__caret">▾</span>
                    </a>

                    <a className="nav__item" href='#'>
                        Solutions <span className="nav__caret">▾</span>
                    </a>

                    <a className="nav__item" href="#">
                        FinTech
                    </a>

                    <a className="nav__item" href='#'>
                        About Us
                    </a>
                </nav>
            </div>
        </div>
    )
}

export default Header