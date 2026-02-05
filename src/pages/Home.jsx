import React, { useEffect } from 'react';
import { Element } from 'react-scroll';
import { Typewriter } from 'react-simple-typewriter';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/Navbar';
import { Github, Linkedin, Mail, Codepen, Briefcase, Calendar, ExternalLink, Facebook, Instagram, Phone, MessageCircle } from 'lucide-react';

const Home = () => {
    const [selectedProject, setSelectedProject] = React.useState(null);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div>
            <Navbar />

            {/* Hero Section */}
            <Element name="home">
                <div className="section" style={{ alignItems: 'center', position: 'relative' }}>
                    {/* Background Glow */}
                    <div style={{ position: 'absolute', top: '20%', left: '20%', width: '300px', height: '300px', background: 'var(--accent-cyan)', filter: 'blur(150px)', opacity: 0.2, borderRadius: '50%' }}></div>
                    <div style={{ position: 'absolute', bottom: '20%', right: '20%', width: '300px', height: '300px', background: 'var(--accent-blue)', filter: 'blur(150px)', opacity: 0.2, borderRadius: '50%' }}></div>

                    <div className="container" style={{ zIndex: 1, textAlign: 'center', width: '100%' }}>
                        <h2 className="hero-subtitle" data-aos="fade-up">Hi, I'm Thaleban Thaokloy</h2>
                        <h1 className="hero-title" data-aos="fade-up" data-aos-delay="100">
                            I Build <span className="gradient-text">
                                <Typewriter
                                    words={['Hobby Operating System.', 'System Tools.', 'Web Application.']}
                                    loop={0}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </h1>
                        <p className="hero-desc" data-aos="fade-up" data-aos-delay="200">
                            แฟ้มสะสมผลงานสำหรับการสมัครเข้าศึกษาต่อ KMUTT.<br />มีความชอบใน Low-level programming และ Operating System
                        </p>
                        <div data-aos="fade-up" data-aos-delay="300" style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                            <img src="/assets/kmutt_cpe_logo.png" alt="KMUTT & CPE Logo" style={{ maxWidth: '300px', height: 'auto', filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.2))' }} />
                        </div>
                    </div>
                </div>
            </Element>

            {/* About Section */}
            <Element name="about">
                <div className="section container">
                    <h2 data-aos="fade-up"><span style={{ color: 'var(--accent-cyan)' }}>01.</span> About Me</h2>
                    <div className="glass-card about-container" data-aos="fade-up">
                        <div className="about-text">
                            <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                                ผมเติบโตมาในสภาพแวดล้อมของร้านเกมซึ่งทำให้ผมคุ้นเคยกับคอมพิวเตอร์มาตั้งแต่เด็ก จากจุดเริ่มต้นที่เล่นเกมเพื่อความสนุก ผมเริ่มขยับมาลง Mod เกม Minecraft ซึ่งเป็นก้าวแรกที่ทำให้ผมเข้าใจพื้นฐานการทำงานของระบบไฟล์ในคอมพิวเตอร์ จนเมื่อขึ้นชั้น ม.1 ผมได้เข้าค่ายเขียนโปรแกรม เริ่มเรียนรู้การออกแบบ Flowchart และฝึกเขียนภาษา Python เป็นภาษาแรก ความหลงใหลในโลกของการเขียนโปรแกรมทำให้ผมต่อยอดความรู้มาสร้าง Discord Bot ของตัวเองได้สำเร็จ
                            </p>
                            <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                                แต่จุดเปลี่ยนสำคัญที่เปลี่ยนชีวิตผมไปอย่างมากคือตอนชั้น ม.4 เมื่อผมรู้จักกับภาษา C ซึ่งช่วยเปิดโลกการทำงานเชิงลึกของคอมพิวเตอร์ให้ชัดเจนขึ้น ตั้งแต่การจัดการหน่วยความจำไปจนถึงการแสดงผล ผมจึงเริ่มศึกษาการทำงานของ OS จนได้พบกับเรื่องราวของ Linus Torvalds ซึ่งกลายเป็นแรงบันดาลใจให้ผมอยากสร้าง OS เป็นของตัวเองบ้างเพื่อที่จะเข้าใจคอมพิวเตอร์ให้ลึกซึ้งยิ่งขึ้น
                            </p>
                            <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                                ผมไม่ได้อยากรู้แค่ว่า printf() คือคำสั่งแสดงผล แต่อยากรู้ลึกไปถึงว่ามันสั่งการไปที่ Memory หรือ VGA ให้ทำงานอย่างไร นั่นจึงเป็นจุดเริ่มต้นของการสร้าง Hobby OS ที่ทำให้ผมต้องทุ่มเทศึกษาทั้งภาษา Assembly, C, Makefile, Linker และสถาปัตยกรรมคอมพิวเตอร์พื้นฐานอย่างจริงจัง
                            </p>
                            <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                                นี่คือเหตุผลสำคัญที่ผมปรารถนาจะเข้าศึกษาต่อในภาควิชาวิศวกรรมคอมพิวเตอร์ <a>KMUTT</a> เพื่อที่จะทำความเข้าใจการทำงานของคอมพิวเตอร์อย่างถ่องแท้ และก้าวไปสู่การเป็นวิศวกรที่สามารถออกแบบระบบคอมพิวเตอร์สมรรถนะสูง (High Performance Computing) ที่มีประสิทธิภาพได้ด้วยตนเองครับ
                            </p>
                            <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>Coding Skill:</p>
                            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem', listStyle: 'none' }}>
                                {['C', 'Assembly (x86)', 'Python', 'React', 'Linux / Shell', 'Git'].map(skill => (
                                    <li key={skill} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)' }}>
                                        <span style={{ color: 'var(--accent-cyan)' }}>▹</span> {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="about-image-wrapper">
                            <div className="about-image-box">
                                <div style={{ position: 'absolute', inset: 0, border: '2px solid var(--accent-cyan)', borderRadius: '16px', transform: 'translate(20px, 20px)', transition: 'transform 0.3s ease' }}></div>
                                <div style={{ position: 'absolute', inset: 0, background: '#333', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#555', overflow: 'hidden' }}>
                                    <img src="/assets/profile.jpg" alt="Thaleban Thaokloy" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
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
                            { year: '2024 - Present', title: 'OS Development', company: 'Thaleban OS', desc: 'ทุ่มเทศึกษา Assembly, C, Makefile และ Linker อย่างจริงจัง เพื่อสร้าง Hobby OS ของตัวเอง โดยมีเป้าหมายเพื่อเข้าใจการทำงานของคอมพิวเตอร์อย่างลึกซึ้ง' },
                            { year: '2023 (Grade 10)', title: 'The Turning Point', company: 'C & Low-level', desc: 'จุดเปลี่ยนสำคัญเมื่อได้รู้จักภาษา C และเรื่องราวของ Linus Torvalds ทำให้สนใจการทำงานระดับต่ำ (Low-level) และอยากสร้าง OS เป็นของตัวเอง' },
                            { year: '2020 (Grade 7)', title: 'First Step into Coding', company: 'Python & Discord Bot', desc: 'เริ่มต้นเขียนโปรแกรมครั้งแรกจากการเข้าค่าย เรียนรู้ Flowchart และ Python จนสามารถสร้าง Discord Bot ใช้งานจริงได้' },
                            { year: 'Childhood', title: 'Origins', company: 'Minecraft Modding', desc: 'เติบโตมาในร้านเกม เริ่มเรียนรู้ระบบไฟล์จากการลง Mod เกม Minecraft ซึ่งเป็นจุดเริ่มต้นความคุ้นเคยกับคอมพิวเตอร์' },
                        ].map((item, index) => (
                            <div key={index} data-aos="fade-up" data-aos-delay={index * 100} style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <div style={{ width: '12px', height: '12px', background: 'var(--accent-cyan)', borderRadius: '50%', boxShadow: '0 0 10px var(--accent-cyan)' }}></div>
                                    {index !== 3 && <div style={{ width: '2px', flex: 1, background: 'rgba(255,255,255,0.1)', margin: '0.5rem 0' }}></div>}
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
                    <div className="projects-grid">
                        {[
                            {
                                name: 'Thaleban-Operating-System',
                                desc: 'ระบบปฏิบัติการ 64-bit ที่เขียน VGA Driver, IDT, ISR และ Shell ขึ้นมาเองทั้งหมด เพื่อศึกษาการทำงานของ Kernel อย่างลึกซึ้ง',
                                tech: ['C', 'Assembly', '64-bit Kernel'],
                                link: 'https://github.com/neosoloister/Thaleban-Operating-System',
                                image: '/assets/thaleban_os.png',
                                gallery: [
                                    '/assets/thaleban_os_1.png',
                                    '/assets/thaleban_os_2.png'
                                ]
                            },
                            {
                                name: 'NeoOS',
                                desc: 'ระบบปฏิบัติการ 16-bit (Real Mode) ที่ใช้ BIOS Interrupts สำหรับ Input/Output โดยไม่มี VGA Driver เน้นศึกษาพื้นฐาน Bootloader',
                                tech: ['Assembly', 'BIOS I/O', '16-bit'],
                                link: 'https://github.com/neosoloister/NeoOS',
                                image: '/assets/neoos.png'
                            },
                            {
                                name: 'Simple_Crop_Translator',
                                desc: 'เครื่องมือสำหรับตัดและประมวลผลรูปภาพ/ข้อความเพื่อการแปลภาษา',
                                tech: ['Python', 'OpenCV', 'Tesseract'],
                                link: 'https://github.com/neosoloister/Simple_Crop_Translator',
                                image: '/assets/sct_preview.png',
                                gallery: ['/assets/sct_preview.png']
                            },
                            {
                                name: 'AI Robotic Arm',
                                desc: 'ระบบคัดแยกสินค้าที่มีตำหนิอัตโนมัติ โดยใช้ Arduino ควบคุมแขนกลซึ่งรับคำสั่งผ่าน Serial จากโปรแกรม CiRA CORE (Deep Learning Platform ของ KMITL)',
                                tech: ['CiRA CORE', 'Arduino (C++)', 'Serial Communication'],
                                link: null,
                                image: '/assets/ai_robotic_arm.png',
                                gallery: [
                                    '/assets/ai_robotic_arm_demo.mp4',
                                    '/assets/ai_robotic_arm_demo_2.mkv',
                                    '/assets/ai_robotic_arm_demo_3.mov',
                                    '/assets/ai_robotic_arm.png'
                                ]
                            }
                        ].map((project, index) => (
                            <div
                                key={index}
                                className="glass-card"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                style={{ display: 'flex', flexDirection: 'column', height: '100%', cursor: 'pointer' }}
                                onClick={() => setSelectedProject(project)}
                            >
                                <div style={{ height: '200px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
                                    {project.image ? (
                                        <img src={project.image} alt={project.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    ) : (
                                        <span style={{ fontSize: '2rem', color: '#333', textAlign: 'center', padding: '1rem' }}>{project.name}</span>
                                    )}
                                </div>
                                <h3 style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    {project.name.replace(/-/g, ' ')}
                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        {project.link && (
                                            <>
                                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                                    <Github size={20} className="icon-hover" style={{ cursor: 'pointer', color: 'var(--text-secondary)' }} />
                                                </a>
                                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                                    <ExternalLink size={20} className="icon-hover" style={{ cursor: 'pointer', color: 'var(--text-secondary)' }} />
                                                </a>
                                            </>
                                        )}
                                    </div>
                                </h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1 }}>
                                    {project.desc}
                                </p>
                                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', fontSize: '0.85rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                                    {project.tech.map(t => <span key={t}>{t}</span>)}
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
                        กล่องข้อความของผมเปิดรับเสมอ ไม่ว่าคุณจะมีคำถามหรือแค่อยากทักทาย ผมจะพยายามตอบกลับให้เร็วที่สุดครับ!
                    </p>
                    <a data-aos="fade-up" href="mailto:thalebanthaokloy.sea@gmail.com" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>ทักทายเลย</a>

                    <div className="contact-icons">
                        <a href="https://facebook.com/thalebanthaokloy" target="_blank" rel="noopener noreferrer">
                            <Facebook color="var(--text-secondary)" className="icon-hover" style={{ cursor: 'pointer' }} />
                        </a>
                        <a href="https://instagram.com/_banx4byte_" target="_blank" rel="noopener noreferrer">
                            <Instagram color="var(--text-secondary)" className="icon-hover" style={{ cursor: 'pointer' }} />
                        </a>
                        <a href="https://line.me/ti/p/thaleban" target="_blank" rel="noopener noreferrer">
                            <MessageCircle color="var(--text-secondary)" className="icon-hover" style={{ cursor: 'pointer' }} />
                        </a>
                        <a href="tel:+66 0818300746">
                            <Phone color="var(--text-secondary)" className="icon-hover" style={{ cursor: 'pointer' }} />
                        </a>
                        <a href="mailto:thalebanthaokloy.sea@gmail.com">
                            <Mail color="var(--text-secondary)" className="icon-hover" style={{ cursor: 'pointer' }} />
                        </a>
                    </div>
                    <p style={{ marginTop: '2rem', color: '#555', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>ออกแบบและพัฒนาโดย Thaleban Thaokloy</p>
                </div>
            </Element>
            {/* Project Gallery Modal */}
            {selectedProject && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0, 0, 0, 0.9)',
                        zIndex: 2000,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '2rem'
                    }}
                    onClick={() => setSelectedProject(null)}
                >
                    <div
                        style={{
                            position: 'relative',
                            maxWidth: '90%',
                            maxHeight: '90%',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            border: '1px solid var(--accent-cyan)',
                            boxShadow: '0 0 30px rgba(0, 242, 234, 0.2)'
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedProject(null)}
                            style={{
                                position: 'absolute',
                                top: '1rem',
                                right: '1rem',
                                background: 'rgba(0, 0, 0, 0.5)',
                                border: 'none',
                                color: '#fff',
                                cursor: 'pointer',
                                padding: '0.5rem',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'background 0.3s'
                            }}
                            onMouseOver={(e) => e.target.style.background = 'rgba(255, 0, 0, 0.8)'}
                            onMouseOut={(e) => e.target.style.background = 'rgba(0, 0, 0, 0.5)'}
                        >
                            <ExternalLink size={24} style={{ transform: 'rotate(45deg)' }} />
                        </button>

                        <div style={{ maxHeight: '80vh', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', width: '100%' }}>
                            {selectedProject.gallery ? (
                                selectedProject.gallery.map((media, idx) => (
                                    media.match(/\.(mp4|webm|ogg|mov|mkv)$/i) ? (
                                        <video
                                            key={idx}
                                            controls
                                            src={media}
                                            style={{
                                                maxWidth: '90%',
                                                maxHeight: '60vh',
                                                display: 'block',
                                                borderRadius: '8px',
                                                boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
                                                margin: '0 auto'
                                            }}
                                        >
                                            Your browser does not support the video tag.
                                        </video>
                                    ) : (
                                        <img
                                            key={idx}
                                            src={media}
                                            alt={`${selectedProject.name} ${idx + 1}`}
                                            style={{
                                                maxWidth: '90%',
                                                maxHeight: '60vh',
                                                objectFit: 'contain',
                                                display: 'block',
                                                borderRadius: '8px',
                                                boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
                                                margin: '0 auto'
                                            }}
                                        />
                                    )
                                ))
                            ) : selectedProject.image ? (
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.name}
                                    style={{
                                        maxWidth: '90%',
                                        maxHeight: '80vh',
                                        objectFit: 'contain',
                                        display: 'block',
                                        margin: '0 auto'
                                    }}
                                />
                            ) : (
                                <div style={{ padding: '4rem', background: '#1a1a1a', color: '#fff', textAlign: 'center' }}>
                                    <h2>{selectedProject.name}</h2>
                                    <p>No Image Available</p>
                                </div>
                            )}
                        </div>

                        <div style={{ padding: '1.5rem', background: 'rgba(10, 10, 10, 0.95)', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                            <h3 style={{ color: 'var(--accent-cyan)', marginBottom: '0.5rem' }}>{selectedProject.name.replace(/-/g, ' ')}</h3>
                            <p style={{ color: '#ccc' }}>{selectedProject.desc}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
