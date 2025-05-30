import Image from "next/image";
import heroBannerBackground from "../assets/heroBannerBackground.png";
import camionetaFoto from "../assets/camionetaFoto.jpeg"

import foto1 from "../assets/foto1.jpeg"
import foto2 from "../assets/foto2.jpeg"
import foto3 from "../assets/foto3.jpeg"
import foto4 from "../assets/foto4.jpeg"
import foto5 from "../assets/foto5.jpeg"
import foto6 from "../assets/foto6.jpeg"
import foto7 from "../assets/foto7.jpeg"

import marca1 from "../assets/marca1.png";
import marca2 from "../assets/marca2.png";
import marca3 from "../assets/marca3.png";
import marca4 from "../assets/marca4.png";
import marca5 from "../assets/marca5.png";
import marca6 from "../assets/marca6.png";
import marca7 from "../assets/marca7.png";
import marca8 from "../assets/marca8.png";
import marca9 from "../assets/marca9.png";
import marca10 from "../assets/marca10.png";
import marca11 from "../assets/marca11.png";
import marca12 from "../assets/marca12.png";
const marcas = [marca1, marca2, marca3, marca4, marca5, marca6, marca7, marca8, marca9, marca10, marca11, marca12];

import bannerContactanos from "../assets/bannerContactos.png";
import ContactForm from "@/components/ContactForm/ContactForm";

export default function Home() {
  const generateWhatsAppLink = () => {
    const encodedMessage = encodeURIComponent('Hola! Vengo desde la pagina web de Refractory y quisiera hacerles una consulta!');
    return `https://wa.me/5493364666017?text=${encodedMessage}`;
  };
  return (
    <div className="min-h-screen bg-[#F2F2F2]">

      {/* Hero banner */}
      <div className="relative w-full h-[450px] md:h-[650px]">
        {/* Imagen de fondo */}
        <Image
          src={heroBannerBackground}
          alt="Fondo"
          className="w-full h-full object-cover mask-image"
          fill
          priority
        />

        {/* Capa de opacidad gris */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#111827_100%)] opacity-70"></div>

        {/* Texto centrado */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-10"> 
          <h1 className="text-white max-w-[1500px]  text-[27px] md:text-[64px] font-black text-left p-3">Reparacion y mantenimiento de hornos refractarios industriales</h1>
          <a
            href={generateWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-[20px] md:text-[36px] font-bold bg-[#E67E22] border-b-[6px] border-l-[6px] border-r-[6px] border-[#B03A2E] text-center flex justify-center items-center w-[350px] h-[70px] md:w-[450px] md:h-[100px] rounded-xl transition-transform duration-150 hover:translate-y-[2px] active:translate-y-[4px] hover:shadow-inner" 
          >
            Solicitar asesoramiento
          </a>
        </div>
      </div>

      {/* Servicios */}
      <div className="max-w-[800px] md:max-w-[1500px] mx-auto mt-10 flex flex-col gap-5" id="servicios">
        <h2 className="text-[#2C3E50] text-[34px] md:text-[64px] font-black text-left p-3">Servicios</h2>
        <p className="text-[#7F8C8D] text-[20px] md:text-[32px] font-medium text-justify p-3">En Molina Proyectados brindamos soluciones refractarias de alta precision. Contamos con servicios de linea con rapida disponibilidad y tambien servicios complementarios adaptados a tus necesidades.</p>
        <div className="flex flex-col md:flex-row justify-evenly items-center gap-5 md:gap-0">
          <div className="w-[350px] md:w-[700px] h-[620px] shadow-2xl bg-[#FFFF] p-3 md:p-7 flex flex-col gap-5 md:gap-8 rounded-md md:rounded-none">
            <h2 className="text-[#2c3e50] text-[32px] text-left font-black">Servicio de linea</h2>
            {/* Logo uno */}
            <div className="flex items-center gap-2 md:gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-[50px] h-[50px] text-orange-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m14.622 17.897-10.68-2.913" />
                <path d="M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z" />
                <path d="M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15" />
              </svg>
              <p className="text-[#7F8C8D] text-[20px] md:text-[24px] font-medium ">
                Demolición de revestimiento refractario
              </p>
            </div>

            {/* Logo dos */}
            <div className="flex items-center gap-2 md:gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-wrench-icon text-orange-500"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>

              <p className="text-[#7F8C8D] text-[20px] md:text-[24px] font-medium">
                Soldaduras de anclas
              </p>
            </div>

            {/* Logo tres */}
            <div className="flex items-center gap-2 md:gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-drill-icon text-orange-500"
              >
                <path d="M10 18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3 1 1 0 0 1 1-1z" />
                <path d="M13 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1l-.81 3.242a1 1 0 0 1-.97.758H8" />
                <path d="M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3" />
                <path d="M18 6h4" />
                <path d="m5 10-2 8" />
                <path d="m7 18 2-8" />
              </svg>


              <p className="text-[#7F8C8D] text-[20px] md:text-[24px] font-medium">
                Gunitado de homringon refractario
              </p>
            </div>

            {/* Logo cuatro */}
            <div className="flex items-center gap-2 md:gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-cuboid-icon text-orange-500"
              >
                <path d="m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z" />
                <path d="M10 22v-8L2.25 9.15" />
                <path d="m10 14 11.77-6.87" />
              </svg>


              <p className="text-[#7F8C8D] text-[20px] md:text-[24px] font-medium">
                Colocado de hormigon refractario
              </p>
            </div>

            {/* Logo cinco */}
            <div className="flex items-center gap-2 md:gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-brick-wall-fire-icon text-orange-500"
              >
                <path d="M16 3v2.107" />
                <path d="M17 9c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 22 17a5 5 0 0 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C13 11.5 16 9 17 9" />
                <path d="M21 8.274V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.938" />
                <path d="M3 15h5.253" />
                <path d="M3 9h8.228" />
                <path d="M8 15v6" />
                <path d="M8 3v6" />
              </svg>


              <p className="text-[#7F8C8D] text-[20px] md:text-[24px] font-medium">
                Instalacion de plasticos refractarios y apisonables
              </p>
            </div>

            <p className="text-[20px] md:text-[24px] font-medium text-[#7F8C8D]"><strong>Rapida</strong> capacidad de respuesta ante la solicitación del servicio de linea</p>
          </div>

          <div className="w-[350px] md:w-[700px] h-[620px]  shadow-2xl bg-[#FFFF] p-3 md:p-7 flex flex-col gap-7 md:gap-10 rounded-md md:rounded-none">
            <h2 className="text-[#2c3e50] text-[32px] text-left font-black">Servicios complementarios</h2>
            {/* Logo uno */}
            <div className="flex items-center gap-2 md:gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-brick-wall-icon text-orange-500"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M12 9v6" />
                <path d="M16 15v6" />
                <path d="M16 3v6" />
                <path d="M3 15h18" />
                <path d="M3 9h18" />
                <path d="M8 15v6" />
                <path d="M8 3v6" />
              </svg>

              <p className="text-[#7F8C8D] text-[20px] md:text-[24px] font-medium">
                Armado y desarmado de andamios
              </p>
            </div>

            {/* Logo dos */}
            <div className="flex items-center gap-2 md:gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-hammer-icon text-orange-500"
              >
                <path d="m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9" />
                <path d="m18 15 4-4" />
                <path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5" />
              </svg>


              <p className="text-[#7F8C8D] text-[20px] md:text-[24px] font-medium">
                Instalacion de ladrillos refractarios
              </p>
            </div>

            {/* Logo tres */}
            <div className="flex items-center gap-2 md:gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-hard-hat-icon text-orange-500"
              >
                <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" />
                <path d="M14 6a6 6 0 0 1 6 6v3" />
                <path d="M4 15v-3a6 6 0 0 1 6-6" />
                <rect x="2" y="15" width="20" height="4" rx="1" />
              </svg>

              <p className="text-[#7F8C8D] text-[20px] md:text-[24px] font-medium">
                Fabricacion de anclajes metalicos
              </p>
            </div>

            {/* Logo cuatro */}
            <div className="flex items-center gap-2 md:gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="65"
                height="65"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-factory-icon text-orange-500"
              >
                <path d="M12 16h.01" />
                <path d="M16 16h.01" />
                <path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" />
                <path d="M8 16h.01" />
              </svg>

              <p className="text-[#7F8C8D] text-[20px] md:text-[24px] font-medium">
                Fabricacion de maquinaria para la instalacion de productos refractarios
              </p>
            </div>

            <p className="text-[20px] md:text-[24px] font-medium text-[#7F8C8D]">Estos servicios se programan con <strong>antelacion</strong> segun las necesidades del cliente.</p>
          </div>
        </div>
      </div>

      {/* Nosotros */}
      <div className="w-full min-h-[1000px] mt-8" id="nosotros">
        <div className="w-full h-[60px] md:h-[100px] bg-[#2C3E50]">
          <div className="max-w-[1500px] mx-auto flex items-center h-full px-4">
            <h2 className="text-[30px] md:text-[64px] text-[#F2F2F2] font-black">Nosotros</h2>
          </div>
        </div>
        <div className="max-w-[1500px] min-h-[950px] mx-auto flex flex-col justify-evenly">
          <p className="text-[#7F8C8D] text-[20px] p-3 md:p-0 md:text-[32px] font-medium text-justify">Refractory S.R.L. es una empresa especializada en la instalación, reparación y mantenimiento de productos refractarios para la industria. Contamos con una sólida trayectoria en el sector, ofreciendo soluciones técnicas de alta calidad para distintos rubros industriales que requieren resistencia a altas temperaturas y condiciones extremas de operación.</p>
          <div className="flex flex-col-reverse md:flex-row justify-evenly items-center gap-3 md:gap-0">
            <div className="w-[350px] h-[280px] md:w-[700px] md:h-[500px] bg-gray-700 rounded-xl">
              <Image src={camionetaFoto} alt="" className="w-full h-full object-cover rounded-md"/>
            </div>
            <div className="bg-[#FF9D46] w-[350px] h-[280px] md:w-[700px] md:h-[500px] rounded-xl p-3 md:p-6">
              <h2 className="text-[20px] md:text-[64px] text-[#FFFF] font-black text-center">Nuestra mision</h2>
              <p className="text-[15px] md:text-[28px] font-semibold text-[#F2F2F2] text-justify">Nuestra misión es brindar un servicio integral que optimice el rendim iento de las instalaciones industriales, minimizando tiempos de parada y garantizando una ejecución eficiente y segura. Nos comprometemos con cada proyecto, acompañando a nuestros clientes desde la planificación hasta la finalización del trabajo, con un enfoque profesional, responsable y orientado a resultados.</p>
            </div>
          </div>
        </div>

      </div>

      {/* Galeria de trabajo */}
      <div className="w-full min-h-[1700px] bg-[#2c3e50] mt-6" id="trabajos">
        <div className="max-w-[1500px] mx-auto flex flex-col gap-5">
          <div className="w-full flex flex-col ml-3 md:ml-0 gap-2">
            <h2 className="text-[30px] md:text-[64px] font-black text-[#FFFFFF]">Galeria de trabajo</h2>
            <div className="w-[300px] md:w-[500px] h-[10px] md:h-[20px] bg-[#E67E22] rounded-xs md:ounded-md"></div>
          </div>
          <div className="w-full flex flex-col justify-center items-center mb-4 md:mb-0 gap-4 md:gap-7">
            <div className="w-full flex flex-wrap justify-evenly items-center gap-5">
              <div className="relative w-[250px] h-[250px] md:w-[450px] md:h-[450px] group rounded-xl overflow-hidden">
                <Image src={foto1} alt="" className="w-full h-full object-cover rounded-xl" />
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                  <p className="text-white text-2xl font-bold">Trabajo realizado en para</p>
                </div>
              </div>
              <div className="relative w-[250px] h-[250px] md:w-[450px] md:h-[450px]  group rounded-xl overflow-hidden">
                <Image src={foto2} alt="" className="w-full h-full object-cover rounded-xl" />
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                  <p className="text-white text-2xl font-bold">Trabajo realizado en para</p>
                </div>
              </div>
              <div className="relative w-[250px] h-[250px] md:w-[450px] md:h-[450px]  group rounded-xl overflow-hidden">
                <Image src={foto3} alt="" className="w-full h-full object-cover rounded-xl" />
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                  <p className="text-white text-2xl font-bold">Trabajo realizado en para</p>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center items-center">
              <div className="relative w-[250px] md:w-[1450px] h-[250px] md:h-[450px] group rounded-xl overflow-hidden">
                <Image src={foto5} alt="" className="w-full h-full object-cover rounded-xl" />
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                  <p className="text-white text-2xl font-bold">Trabajo realizado en para</p>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-wrap justify-evenly items-center gap-5">
              <div className="relative w-[250px] h-[250px] md:w-[450px] md:h-[450px]  group rounded-xl overflow-hidden">
                <Image src={foto4} alt="" className="w-full h-full object-cover rounded-xl" />
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                  <p className="text-white text-2xl font-bold">Trabajo realizado en para</p>
                </div>
              </div>
              <div className="relative w-[250px] h-[250px] md:w-[450px] md:h-[450px]  group rounded-xl overflow-hidden">
                <Image src={foto6} alt="" className="w-full h-full object-cover rounded-xl" />
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                  <p className="text-white text-2xl font-bold">Trabajo realizado en para</p>
                </div>
              </div>
              <div className="relative w-[250px] h-[250px] md:w-[450px] md:h-[450px]  group rounded-xl overflow-hidden">
                <Image src={foto7} alt="" className="w-full h-full object-cover rounded-xl" />
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                  <p className="text-white text-2xl font-bold">Trabajo realizado en para</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Confia en nosotros */}
      <div className="w-full bg-[#ffffff] flex flex-col gap-4" id="confian">
        <h2 className="text-[30px] md:text-[64px] font-black text-center text-[#2C3E50]">Confian en nosotros</h2>
        <div className="border-b-4 border-b-[#2C3E50] w-[300px] md:w-[1500px] mx-auto rounded-2xl"></div>
        <div className="overflow-hidden w-full bg-white py-8">
          <div className="flex w-max animate-scroll gap-16">
            {[...Array(2)].map((_, repeatIndex) => (
              <div key={repeatIndex} className="flex gap-16">
                {marcas.map((logo, i) => (
                  <div key={`${repeatIndex}-${i}`} className="flex-shrink-0 w-[200px] h-[100px] flex items-center justify-center">
                    <Image src={logo} alt={`Marca ${i + 1}`} width={160} height={80} className="object-contain grayscale hover:grayscale-0 hover:opacity-100 transition" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Contactanos */}
      <div className="relative w-full min-h-[950px] flex items-center justify-center py-10 px-4">
        {/* Imagen de fondo */}
        <Image
          src={bannerContactanos}
          alt="Fondo"
          className="w-full h-full object-cover mask-image"
          fill
          priority
        />

        {/* Capa de opacidad gris */}
        <div className="absolute inset-0 bg-black opacity-60"></div>



        {/* Texto centrado */}
        <div className="relative z-10 w-full flex flex-col items-center" id="contacto">
          <div className="w-[90%] max-w-[1500px] flex flex-col md:flex-row justify-center md:justify-between items-center md:gap-8 gap-4">

            {/* Sección izquierda: mapa */}
            <div className="bg-opacity-90 md:p-4 rounded-lg shadow-lg flex flex-col gap-4">
              <h2 className="text-[30px] md:text-[64px] font-black text-[#F2F2F2]">Contactanos</h2>
              <div className="bg-[#FFFF] w-full h-[5px]"></div>
              <p className="text-[20px] text-[#F2F2F2] font-extrabold">Sumate al equipo, envianos tu CV a molinaproyectados@gmail.com</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d700.749097337662!2d-60.22999229578675!3d-33.335981248270585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b76796c1ac1633%3A0x4176e8a83f91090!2sLe%C3%B3n%20Guruciaga%20596%2C%20B2900%20San%20Nicol%C3%A1s%20de%20Los%20Arroyos%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1748543316829!5m2!1ses!2sar" // reemplazá por tu embed real
                className="rounded-md w-[350px] h-[250px] md:w-[700px] md:h-[350px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>


            {/* Sección derecha: formulario */}
            <ContactForm/>

          </div>
        </div>
      </div>

    </div>
  );
}
