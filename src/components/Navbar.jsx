import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Code } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'หน้าแรก', to: 'home' },
        { name: 'เกี่ยวกับฉัน', to: 'about' },
        { name: 'ประสบการณ์', to: 'journey' },
        { name: 'ผลงาน', to: 'projects' },
        { name: 'ติดต่อ', to: 'contact' },
    ];

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 1000,
                transition: 'all 0.3s ease',
                background: scrolled ? 'rgba(10, 10, 10, 0.8)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
                padding: scrolled ? '1rem 0' : '1.5rem 0',
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent-cyan)' }}>
                    <Code /> <span>Thaleban <span style={{ color: '#fff' }}>Thaokloy</span></span>
                </div>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: window.innerWidth > 768 ? 'flex' : 'none', gap: '2rem' }}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            spy={true}
                            activeClass="active"
                            offset={-70}
                            style={{
                                cursor: 'pointer',
                                color: 'var(--text-secondary)',
                                fontWeight: 500,
                                transition: 'color 0.3s ease',
                            }}
                            onMouseEnter={(e) => (e.target.style.color = '#fff')}
                            onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <div className="mobile-toggle" style={{ display: window.innerWidth > 768 ? 'none' : 'block', cursor: 'pointer' }} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X color="#fff" /> : <Menu color="#fff" />}
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div
                    style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        width: '100%',
                        background: 'rgba(10, 10, 10, 0.95)',
                        backdropFilter: 'blur(10px)',
                        padding: '2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5rem',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            onClick={() => setIsOpen(false)}
                            style={{
                                color: '#fff',
                                fontSize: '1.2rem',
                                textAlign: 'center',
                                cursor: 'pointer',
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
