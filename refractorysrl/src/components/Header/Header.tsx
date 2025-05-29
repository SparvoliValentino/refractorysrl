import Image from "next/image"
import logo from "../../assets/logoRefractory.png"
const Header =()=>{
    
    
    return(
        <header className="w-full h-[160px] bg-[#2C3E50]">
            <div className="max-w-[1500px] mx-auto flex justify-between items-center ">
                <div className="w-1/2 flex items-center ">
                    <Image src={logo} alt=""/>
                </div>
                <div className="w-1/2 h-[160px]">
                    <ul className="h-full flex justify-evenly items-end">
                        <li className="text-[24px] font-bold text-white">Servicio</li>
                        <li className="text-[24px] font-bold text-white">Nosotros</li>
                        <li className="text-[24px] font-bold text-white">Trabajos</li>
                        <li className="text-[24px] font-bold text-white">Contacto</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header