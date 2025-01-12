import React, { useState } from 'react';
import { MapPin, Languages, Phone, Instagram, Globe, MessageSquare, ChevronDown, Star, ArrowRight, Menu } from 'lucide-react';
import { Disclosure, Transition } from '@headlessui/react';
import eddyImage from '../assets/eddy.jpg';

const Landing = () => {
  const locations = ['Punta Cana', 'Bávaro', 'Cap Cana'];
  const languages = ['Español', 'English', 'Français'];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/18099057209', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <span className="text-2xl font-bold" style={{ color: '#1E3A8A ' }}>GESTINM</span>
            <button
              onClick={handleWhatsAppClick}
              className="px-6 py-2 rounded-full text-sm font-medium flex items-center gap-2 text-white transition-all duration-300"
              style={{ backgroundColor: '#1E3A8A ' }}
            >
              <MessageSquare className="w-4 h-4" />
              Contactar
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-20">
        <div className="absolute inset-0 bg-[#1E3A8A ]/5 skew-y-[-5deg] transform origin-top-left"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-12">
                <h1 className="text-6xl font-bold text-gray-900 mb-6">
                  Eddy{" "}
                  <span style={{ color: '#1E3A8A ' }}>
                    Perdomo
                  </span>
                </h1>
                <p className="text-2xl text-gray-600 mb-3">Real Estate Agent</p>
                <p className="text-xl" style={{ color: '#1E3A8A ' }}>"Cambiando Vidas"</p>
              </div>
              
              <button
                onClick={handleWhatsAppClick}
                className="group px-8 py-4 rounded-xl text-lg font-medium inline-flex items-center gap-3 text-white transition-all duration-300"
                style={{ backgroundColor: '#1E3A8A ' }}
              >
                Contactar por WhatsApp
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl -rotate-6" style={{ backgroundColor: '#1E3A8A ', opacity: 0.1 }}></div>
              <img
                src={eddyImage}
                alt="Eddy Perdomo"
                className="relative rounded-3xl shadow-2xl w-full object-cover rotate-3 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Ubicaciones', items: locations, icon: MapPin },
              { title: 'Idiomas', items: languages, icon: Languages },
              { title: 'Especialidades', items: ['Ventas', 'Asesoría', 'Comunicación'], icon: Star }
            ].map((feature, idx) => (
              <div 
                key={idx} 
                className="group p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{ backgroundColor: idx % 2 === 0 ? '#1E3A8A ' : 'white', color: idx % 2 === 0 ? 'white' : '#1E3A8A ' }}
              >
                <feature.icon className="w-8 h-8 mb-6" />
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <ul className="space-y-3">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Instagram, label: '@eddy.gestinm', href: 'https://www.instagram.com/eddy.gestinm' },
              { icon: Instagram, label: '@gestinm.rd', href: 'https://www.instagram.com/gestinm.rd' },
              { icon: Globe, label: 'www.gestinm.com', href: 'https://www.gestinm.com' }
            ].map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 p-6 rounded-xl bg-white hover:shadow-xl transition-all duration-300 group"
              >
                <link.icon className="w-6 h-6 transition-colors duration-300 group-hover:text-[#1E3A8A ]" />
                <span className="text-gray-700 font-medium group-hover:text-[#1E3A8A ] transition-colors duration-300">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16" style={{ color: '#1E3A8A ' }}>
            Preguntas Frecuentes
          </h2>
          <div className="space-y-4">
            {[
              {
                question: '¿Qué documentos necesito para comprar una propiedad?',
                answer: 'La documentación requerida puede variar según el tipo de propiedad y la transacción. Contáctenos para obtener una lista personalizada de requisitos.'
              },
              {
                question: '¿Cuál es el proceso de compra?',
                answer: 'El proceso incluye selección de propiedad, negociación, documentación legal y cierre. Nuestro equipo le guiará en cada paso.'
              },
              {
                question: '¿Ofrecen financiamiento?',
                answer: 'Trabajamos con varias instituciones financieras que pueden ayudarle a obtener el mejor financiamiento para su inversión.'
              }
            ].map((faq, index) => (
              <Disclosure key={index}>
                {({ open }) => (
                  <div className="overflow-hidden rounded-xl border-2 border-gray-100">
                    <Disclosure.Button 
                      className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors duration-300 flex justify-between items-center"
                    >
                      <span className="text-lg font-medium text-gray-900">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 transform transition-transform duration-300 ${
                          open ? 'rotate-180' : ''
                        }`}
                        style={{ color: '#1E3A8A ' }}
                      />
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="px-6 py-4 text-gray-600 bg-gray-50">
                        {faq.answer}
                      </Disclosure.Panel>
                    </Transition>
                  </div>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="relative py-24" style={{ backgroundColor: '#1E3A8A ' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            ¿Listo para encontrar tu próxima propiedad?
          </h2>
          <button
            onClick={handleWhatsAppClick}
            className="bg-white hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-medium inline-flex items-center gap-3 transition-all duration-300"
            style={{ color: '#1E3A8A ' }}
          >
            <Phone className="w-6 h-6" />
            Contactar ahora
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;