import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.svg'
import phone from '../assets/images/phone.svg'
import mail from '../assets/images/mail.svg'

function Header() {
    const [mobileOpen, setMobileOpen] = useState(false)
    const toggleRef = useRef(null)
    const menuRef = useRef(null)

    useEffect(() => {
        const handleOutside = (e) => {
            if (!mobileOpen) return

            const toggleEl = toggleRef.current
            const menuEl = menuRef.current

            // If click is inside the menu or on the toggle button, ignore
            if ((menuEl && menuEl.contains(e.target)) || (toggleEl && toggleEl.contains(e.target))) {
                return
            }

            setMobileOpen(false)
        }

        document.addEventListener('mousedown', handleOutside)
        document.addEventListener('touchstart', handleOutside)

        return () => {
            document.removeEventListener('mousedown', handleOutside)
            document.removeEventListener('touchstart', handleOutside)
        }
    }, [mobileOpen])
    return (
        <>
            <div className='header max-w-[1440px] flex flex-row justify-between items-center mx-auto'>
                <div>
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </div>

                <div className='flex items-center gap-4 md:flex-col md:items-end md:gap-2'>
                    <div className="hidden md:flex gap-3 place-content-end">
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

                    <nav className="header__nav hidden md:flex gap-10" aria-label="Primary">
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

                        <Link className="nav__item" to="/about">
                            About Us
                        </Link>
                    </nav>
                    <button
                        type='button'
                        className='md:hidden inline-flex items-center justify-center rounded-md p-2 text-[#1946b6] ring-1 ring-[#1946b6]/20'
                        aria-label='Toggle menu'
                        aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            ref={toggleRef}
                    >
                        {mobileOpen ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
            {mobileOpen && (
        <div className='md:hidden max-w-7xl mx-auto px-4 pt-3' ref={menuRef}>
                    <div className='flex flex-col gap-3 border-t border-[#e5e7eb] pt-3'>
                        <a className="nav__item flex items-center justify-between" href='#' onClick={() => setMobileOpen(false)}>
                            <span>
                                <span className='text-[#26b5e9]'>5</span>
                                <span className='text-[#ef4444]'>0</span>
                                <span className='text-[#f59e0b]'>0</span>
                                <span className='text-[#84cc16]'>MG</span>
                            </span>
                            <span className="nav__caret">▾</span>
                        </a>
                        <a className="nav__item flex items-center justify-between" href='#' onClick={() => setMobileOpen(false)}>
                            <span>Services</span>
                            <span className="nav__caret">▾</span>
                        </a>
                        <a className="nav__item flex items-center justify-between" href='#' onClick={() => setMobileOpen(false)}>
                            <span>Solutions</span>
                            <span className="nav__caret">▾</span>
                        </a>
                        <a className="nav__item" href="#" onClick={() => setMobileOpen(false)}>FinTech</a>
                        <Link className="nav__item" to="/about" onClick={() => setMobileOpen(false)}>About Us</Link>
                        <div className='flex flex-col gap-2 mt-2'>
                            <a className="flex gap-2 items-center" href="tel:+919821799655" onClick={() => setMobileOpen(false)}>
                                <img src={phone} alt="" />
                                <span className='text-[#1946b6] font-normal'>+91-9821799655</span>
                            </a>
                            <a className="flex gap-2 items-center" href="mailto:business@idreambiz.com" onClick={() => setMobileOpen(false)}>
                                <img src={mail} alt="" />
                                <span className='text-[#1946b6] font-normal'>business@idreambiz.com</span>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Header