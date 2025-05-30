'use client';

import { useState } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        mensaje: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const templateParams = {
            from_name: `${formData.nombre} ${formData.apellido}`,
            from_email: formData.email,
            to_email: 'molinaproyectados@gmail.com',
            message: `Hola soy ${formData.nombre} ${formData.apellido}, mi mail es ${formData.email} y el motivo de mi consulta es: ${formData.mensaje}`,
        };

        emailjs
            .send('service_txyabpa', 'template_tm0ogxe', templateParams, 'srj6eRCXG-mtKsktE')
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Consulta enviada',
                    text: 'Gracias por contactarnos, te responderemos a la brevedad.',
                });
                setFormData({ nombre: '', apellido: '', email: '', mensaje: '' });
            })
            .catch((_err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Hubo un problema al enviar la consulta. Intentá nuevamente.',
                });
            });
    };

    const generateWhatsAppLink = () => {
        const encodedMessage = encodeURIComponent('Hola! Vengo desde la pagina web de Refractory y quisiera hacerles una consulta!');
        return `https://wa.me/5493364666017?text=${encodedMessage}`;
    };

    return (
        <form onSubmit={handleSubmit} className="w-[400px] md:w-[600px] flex flex-col gap-4 mt-3 md:mt-40">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="flex flex-col w-[300px]">
                    <label className="text-[20px] font-bold text-white">Nombre</label>
                    <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Nombre"
                        className="w-[300px] md:w-full p-2 border rounded bg-[#F8F8F8]"
                    />
                </div>
                <div className="flex flex-col w-[300px]">
                    <label className="text-[20px] font-bold text-white">Apellido</label>
                    <input
                        type="text"
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                        placeholder="Apellido"
                        className="w-full p-2 border rounded bg-[#F8F8F8]"
                    />
                </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center">
                <label className="text-[20px] font-bold text-white">Correo electrónico</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Correo electrónico"
                    className="w-[300px] p-2 border rounded md:w-full bg-[#F8F8F8]"
                />
            </div>
            <div className="w-full flex flex-col justify-center items-center">
                <label className="text-[20px] font-bold text-white">Mensaje</label>
                <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Mensaje"
                    rows={4}
                    className="w-[300px] p-2 border rounded md:w-full resize-none bg-[#F8F8F8]"
                />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <button type="submit" className="bg-[#E67E22] text-white font-bold py-3 px-6 rounded hover:brightness-110 w-[300px] ">
                    Enviá tu consulta
                </button>
                <p className="text-white text-[24px] font-bold mt-2 text-center md:text-left">
                    También podés enviarnos a nuestro 
                    <a
                        href={generateWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-500 text-[24px] font-bold ml-1"
                    >
                        Whatsapp
                    </a>
                </p>
            </div>
        </form>
    );
};

export default ContactForm;
