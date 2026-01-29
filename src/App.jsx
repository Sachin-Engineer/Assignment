import Header from "./components/Header"
const CURRENT_YEAR = new Date(Date.now()).getFullYear()
import footerBg from "./assets/images/Footer.png"
import vectorLogo from "./assets/images/Vector.png"
import { Outlet } from "react-router-dom"

function App() {

  return (
    <>
      <header
        className="pl-5 pr-5 pt-3 pb-3"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          background: '#fff',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)'
        }}
      >
        <Header />
      </header>

      <Outlet />

      <footer className="mt-8 w-full">
        <div className="footer-wrapper w-full" style={{
          background: '#f6f7f9',
          borderTop: '1px solid #e5e7eb',
          backgroundImage: `url(${footerBg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        >
          <div className="pl-5 pr-5 pt-8 pb-8" style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
            {/* Logo + Tagline */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <img src={vectorLogo} alt="iDreamBiz" />
            </div>

            {/* Social icons */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginTop: 18 }}>
              <a href="#" aria-label="LinkedIn" style={{ width: 34, height: 34, borderRadius: '50%', background: '#111827', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>in</a>
              <a href="#" aria-label="YouTube" style={{ width: 34, height: 34, borderRadius: '50%', background: '#111827', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>▶</a>
              <a href="#" aria-label="Instagram" style={{ width: 34, height: 34, borderRadius: '50%', background: '#111827', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>◎</a>
              <a href="#" aria-label="Facebook" style={{ width: 34, height: 34, borderRadius: '50%', background: '#111827', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>f</a>
            </div>

            {/* Websites row */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 30, marginTop: 16, color: '#6b7280', fontSize: 13 }}>
              <a href="#" style={{ color: '#6b7280', textDecoration: 'none' }}>www.fintech500mg.com</a>
              <a href="#" style={{ color: '#6b7280', textDecoration: 'none' }}>www.chat500mg.com</a>
              <a href="#" style={{ color: '#6b7280', textDecoration: 'none' }}>www.matrix500mg.com</a>
            </div>

            {/* Contact + Address + Email */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 14, marginTop: 18, color: '#6b7280', fontSize: 13 }}>
              <span style={{ whiteSpace: 'nowrap' }}>+91 9821799655</span>
              <span style={{ color: '#d1d5db' }}>|</span>
              <span style={{ textAlign: 'center' }}>
                Ansal Corporate Park 903, 9th Floor, Tower-A2, Sector 142, Noida (UP) 201301
              </span>
              <span style={{ color: '#d1d5db' }}>|</span>
              <span style={{ whiteSpace: 'nowrap' }}>business@idreambiz.co</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ background: '#0b1a27', color: '#cbd5e1' }}>
          <div className="pl-5 pr-5" style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: 10, padding: '14px 0' }}>
              <div style={{ fontSize: 12 }}>
                Copyright <span style={{ fontWeight: 700 }}>©</span> {CURRENT_YEAR} iDreamBiz
              </div>
              <span>|</span>
              <a href="#" style={{ fontSize: 12, color: '#cbd5e1', textDecoration: 'none' }}>Privacy policy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
} export default App