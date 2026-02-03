import React, { useEffect } from 'react';
import { Element } from 'react-scroll';
import { Typewriter } from 'react-simple-typewriter';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/Navbar';
import { Github, Linkedin, Mail, Codepen, Briefcase, Calendar, ExternalLink } from 'lucide-react';

const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div>
            <Navbar />

            {/* Hero Section */}
            <Element name="home">
                <div className="section" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                    {/* Background Glow */}
                    <div style={{ position: 'absolute', top: '20%', left: '20%', width: '300px', height: '300px', background: 'var(--accent-cyan)', filter: 'blur(150px)', opacity: 0.2, borderRadius: '50%' }}></div>
                    <div style={{ position: 'absolute', bottom: '20%', right: '20%', width: '300px', height: '300px', background: 'var(--accent-blue)', filter: 'blur(150px)', opacity: 0.2, borderRadius: '50%' }}></div>

                    <div className="container" style={{ zIndex: 1, textAlign: 'center', width: '100%' }}>
                        <h2 data-aos="fade-up" style={{ fontSize: '1.5rem', color: 'var(--accent-cyan)', marginBottom: '1rem', textAlign: 'center' }}>Hi, I'm Neo</h2>
                        <h1 data-aos="fade-up" data-aos-delay="100" style={{ fontSize: '4rem', marginBottom: '1rem' }}>
                            I Build <span className="gradient-text">
                                <Typewriter
                                    words={['Web Applications', 'Secure Systems', 'User Experiences']}
                                    loop={0}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </h1>
                        <p data-aos="fade-up" data-aos-delay="200" style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2rem' }}>
                            Aspiring Software Developer aimed to build robust and scalable applications with a focus on modern UI/UX and security.
                        </p>
                        <div data-aos="fade-up" data-aos-delay="300" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                            <button className="btn btn-primary">Download Resume</button>
                            <button className="btn btn-secondary">Contact Me</button>
                        </div>
                    </div>
                </div>
            </Element>

            {/* About Section */}
            <Element name="about">
                <div className="section container">
                    <h2 data-aos="fade-up"><span style={{ color: 'var(--accent-cyan)' }}>01.</span> About Me</h2>
                    <div className="glass-card" data-aos="fade-up" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
                        <div style={{ flex: 1, minWidth: '300px' }}>
                            <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                                I enjoy creating things that live on the internet. My interest in web development started back in 2022 when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS is pretty fun!
                            </p>
                            <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                                Fast-forward to today, and I've had the privilege of building software for a <a>start-up</a>, a <a>student organization</a>, and a <a>huge corporation</a>.
                            </p>
                            <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>Here are a few technologies I've been working with recently:</p>
                            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem', listStyle: 'none' }}>
                                {['JavaScript (ES6+)', 'React', 'Node.js', 'TypeScript', 'Python', 'PostgreSQL'].map(skill => (
                                    <li key={skill} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)' }}>
                                        <span style={{ color: 'var(--accent-cyan)' }}>▹</span> {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div style={{ flex: 1, minWidth: '300px', display: 'flex', justifyContent: 'center' }}>
                            <div style={{ position: 'relative', width: '300px', height: '300px' }}>
                                <div style={{ position: 'absolute', inset: 0, border: '2px solid var(--accent-cyan)', borderRadius: '16px', transform: 'translate(20px, 20px)', transition: 'transform 0.3s ease' }}></div>
                                <div style={{ position: 'absolute', inset: 0, background: '#333', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#555', overflow: 'hidden' }}>
                                    {/* Placeholder for Profile Image */}
                                    <div style={{ fontSize: '5rem' }}>Img</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Element>

            {/* Journey Section */}
            <Element name="journey">
                <div className="section container">
                    <h2 data-aos="fade-up"><span style={{ color: 'var(--accent-cyan)' }}>02.</span> My Journey</h2>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        {[
                            { year: '2025', title: 'Tech Lead', company: 'Future Corp', desc: 'Leading a team of developers to build the next generation of AI tools.' },
                            { year: '2024', title: 'Senior Developer', company: 'Innovate Ltd', desc: 'Architected and implemented scalable cloud solutions.' },
                            { year: '2023', title: 'Full Stack Dev', company: 'StartUp Inc', desc: 'Developed and maintained core features using React and Node.js.' },
                        ].map((item, index) => (
                            <div key={index} data-aos="fade-up" data-aos-delay={index * 100} style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <div style={{ width: '12px', height: '12px', background: 'var(--accent-cyan)', borderRadius: '50%', boxShadow: '0 0 10px var(--accent-cyan)' }}></div>
                                    {index !== 2 && <div style={{ width: '2px', flex: 1, background: 'rgba(255,255,255,0.1)', margin: '0.5rem 0' }}></div>}
                                </div>
                                <div className="glass-card" style={{ flex: 1, padding: '1.5rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                                        <h3 style={{ fontSize: '1.2rem', color: '#fff' }}>{item.title} <span style={{ color: 'var(--accent-cyan)' }}>@ {item.company}</span></h3>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}><Calendar size={14} /> {item.year}</span>
                                    </div>
                                    <p style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Element>

            {/* Projects Section */}
            <Element name="projects">
                <div className="section container">
                    <h2 data-aos="fade-up"><span style={{ color: 'var(--accent-cyan)' }}>03.</span> Projects</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[1, 2, 3].map((project) => (
                            <div key={project} className="glass-card" data-aos="fade-up" data-aos-delay={project * 100} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <div style={{ height: '200px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <span style={{ fontSize: '3rem', color: '#333' }}>Project {project}</span>
                                </div>
                                <h3 style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    Project Name
                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        <Github size={20} className="icon-hover" style={{ cursor: 'pointer', color: 'var(--text-secondary)' }} />
                                        <ExternalLink size={20} className="icon-hover" style={{ cursor: 'pointer', color: 'var(--text-secondary)' }} />
                                    </div>
                                </h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1 }}>
                                    A brief description of the project, highlighting key features and technologies used. This card uses glassmorphism and hover effects.
                                </p>
                                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                                    <span>React</span>
                                    <span>Node</span>
                                    <span>MongoDB</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Element>

            {/* Contact Section */}
            <Element name="contact">
                <div className="section container" style={{ textAlign: 'center', minHeight: '60vh' }}>
                    <h2 data-aos="fade-up"><span style={{ color: 'var(--accent-cyan)' }}>04.</span> Get In Touch</h2>
                    <p data-aos="fade-up" style={{ maxWidth: '600px', margin: '0 auto 2rem', color: 'var(--text-secondary)' }}>
                        My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                    <a data-aos="fade-up" href="mailto:email@example.com" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>Say Hello</a>

                    <div style={{ marginTop: '5rem', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                        <Github color="var(--text-secondary)" style={{ cursor: 'pointer' }} />
                        <Linkedin color="var(--text-secondary)" style={{ cursor: 'pointer' }} />
                        <Codepen color="var(--text-secondary)" style={{ cursor: 'pointer' }} />
                        <Mail color="var(--text-secondary)" style={{ cursor: 'pointer' }} />
                    </div>
                    <p style={{ marginTop: '2rem', color: '#555', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>Designed & Built by NeoSoloister</p>
                </div>
            </Element>
        </div>
    );
};

export default Home;
