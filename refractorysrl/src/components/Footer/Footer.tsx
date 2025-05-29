import Link from 'next/link';

const Footer = () => (
    <footer style={{ background: '#222', color: '#fff', padding: '2rem 0', textAlign: 'center' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
                <Link href="/">
                    <a style={{ color: '#fff', fontWeight: 'bold', fontSize: '1.2rem', textDecoration: 'none' }}>
                        Refractory SRL
                    </a>
                </Link>
            </div>
            <nav>
                <Link href="/about">
                    <a style={{ color: '#fff', margin: '0 1rem' }}>Sobre Nosotros</a>
                </Link>
                <Link href="/services">
                    <a style={{ color: '#fff', margin: '0 1rem' }}>Servicios</a>
                </Link>
                <Link href="/contact">
                    <a style={{ color: '#fff', margin: '0 1rem' }}>Contacto</a>
                </Link>
            </nav>
            <div style={{ fontSize: '0.9rem', color: '#aaa' }}>
                &copy; {new Date().getFullYear()} Refractory SRL. Todos los derechos reservados.
            </div>
        </div>
    </footer>
);

export default Footer;