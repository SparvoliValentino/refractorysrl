"use client"
import Image from "next/image"
import logo from "../../assets/logoRefractory.png"
import { useState } from "react";
const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <header className="w-full  md:h-[160px] bg-[#2C3E50]">
            <div className="max-w-[1500px] mx-auto flex justify-between items-center ">
                <div className="w-1/2 flex items-center ">
                    <Image src={logo} alt="" />
                </div>
                <div className="w-1/2  md:w-2/3 md:h-[140px]">

                    {/* Botón menú hamburguesa (visible solo en móvil) */}
                    <div className="flex justify-end w-3/4 mr-6">
                        <button
                            className="md:hidden text-white text-4xl"
                            onClick={toggleMenu}
                            aria-label="Abrir menú"
                        >
                            &#9776;
                        </button>
                    </div>

                    <ul className="h-full justify-evenly items-end hidden md:flex">
                        <li className="text-[15px] md:text-[24px] font-bold text-white border-2 border-white rounded-md p-2 transition-all duration-300 hover:bg-white hover:text-gray-900 hover:shadow-lg hover:scale-105">
                            <a href="#servicios" className="flex md:gap-2 items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-pencil-ruler-icon w-[15px] h-[15px] md:w-[30px] md:h-[30px]"
                                >
                                    <path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13" />
                                    <path d="m8 6 2-2" />
                                    <path d="m18 16 2-2" />
                                    <path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17" />
                                    <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                                    <path d="m15 5 4 4" />
                                </svg>
                                Servicio
                            </a>
                        </li>
                        <li className="text-[24px] font-bold text-white border-2 border-white rounded-md p-2 transition-all duration-300 hover:bg-white hover:text-gray-900 hover:shadow-lg hover:scale-105">
                            <a href="#nosotros" className="flex gap-2 items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30"
                                    height="30"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-factory-icon"
                                >
                                    <path d="M12 16h.01" />
                                    <path d="M16 16h.01" />
                                    <path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" />
                                    <path d="M8 16h.01" />
                                </svg>

                                Nosotros
                            </a>
                        </li>
                        <li className="text-[24px] font-bold text-white border-2 border-white rounded-md p-2 transition-all duration-300 hover:bg-white hover:text-gray-900 hover:shadow-lg hover:scale-105">
                            <a href="#trabajos" className="flex gap-2 items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30"
                                    height="30"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-camera-icon"
                                >
                                    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                                    <circle cx="12" cy="13" r="3" />
                                </svg>
                                Trabajos
                            </a>
                        </li>
                        <li className="text-[24px] font-bold text-white border-2 border-white rounded-md p-2 transition-all duration-300 hover:bg-white hover:text-gray-900 hover:shadow-lg hover:scale-105">
                            <a href="#contacto" className="flex gap-2 items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30"
                                    height="30"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-phone-icon"
                                >
                                    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                                </svg>
                                Contacto
                            </a>
                        </li>

                    </ul>

                    {menuOpen && (
                        <div className="fixed top-0 right-0 w-[250px] h-full bg-[#2C3E50] shadow-lg p-6 flex flex-col gap-6 z-50 transition-transform duration-300">
                            <button
                                className="text-white text-3xl self-end"
                                onClick={toggleMenu}
                                aria-label="Cerrar menú"
                            >
                                &times;
                            </button>
                            <a href="#servicios" className="flex gap-2 items-center text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={30}
                                    height={30}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-pencil-ruler-icon"
                                >
                                    <path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13" />
                                    <path d="m8 6 2-2" />
                                    <path d="m18 16 2-2" />
                                    <path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17" />
                                    <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                                    <path d="m15 5 4 4" />
                                </svg>
                                Servicio
                            </a>
                            <a href="#nosotros" className="flex gap-2 items-center text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30"
                                    height="30"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-factory-icon"
                                >
                                    <path d="M12 16h.01" />
                                    <path d="M16 16h.01" />
                                    <path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" />
                                    <path d="M8 16h.01" />
                                </svg>

                                Nosotros
                            </a>                            
                            <a href="#trabajos" className="flex gap-2 items-center text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30"
                                    height="30"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-camera-icon"
                                >
                                    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                                    <circle cx="12" cy="13" r="3" />
                                </svg>
                                Trabajos
                            </a>
                            <a href="#contacto" className="flex gap-2 items-center text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30"
                                    height="30"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-phone-icon"
                                >
                                    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                                </svg>
                                Contacto
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header