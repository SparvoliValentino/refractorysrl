import Image from 'next/image';
import Link from 'next/link';
import logoRefractory from "../../assets/logoRefractory.png"

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

const Footer = () => {

    const generateWhatsAppLink = () => {
        const encodedMessage = encodeURIComponent('Hola! Quisieras hacerles una consulta!');
        return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    };

    return (
        <footer className='bg-[#2C3E50] w-full'>
            <div className="mx-auto max-w-[1500px] p-4 py-6 lg:py-8 ">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link href={'/'} className="flex items-center">
                            <Image src={logoRefractory} alt='' />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-200 uppercase dark:text-white">Sobre nosotros</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#nosotros" className="hover:underline">¿Quienes somos?</a>
                                </li>
                                <li>
                                    <a href="#contacto" className="hover:underline">¿Donde estamos?</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-200 uppercase dark:text-white">Nuestro trabajo</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#trabajos" className="hover:underline ">Galeria de trabajo</a>
                                </li>
                                <li>
                                    <a href="#confian" className="hover:underline">Confian en nosotros</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-200 uppercase dark:text-white">Contactanos</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#contacto" className="hover:underline ">Enviano tu CV</a>
                                </li>
                                <li>
                                    <a href="#contacto" className="hover:underline">Hace tu consulta</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 created by <a href="https://www.linkedin.com/in/valentino-sparvoli-088846219/" className="hover:underline">Sparvoli Valentino™</a>
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <a
                            href={generateWhatsAppLink()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-center py-3 px-6 rounded-lg border-2 border-white hover:bg-green-600"
                        >
                            Contactanos por whatsapp
                        </a>
                    </div>
                </div>
            </div>
        </footer>

    )
}


export default Footer;