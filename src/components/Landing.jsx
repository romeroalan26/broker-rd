import React, { useState } from 'react';
import { MapPin, Languages, Phone, Instagram, Globe, MessageSquare, ChevronDown, Star, ArrowRight, Menu, Building2, FileCheck, Target } from 'lucide-react';
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
      {/* Navbar - Mantenido del diseño anterior */}
      <nav className="fixed w-full z-50 bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <span className="text-2xl font-bold" style={{ color: '#CF5307' }}>GESTINM</span>
            <button
              onClick={handleWhatsAppClick}
              className="px-6 py-2 rounded-full text-sm font-medium flex items-center gap-2 text-white transition-all duration-300"
              style={{ backgroundColor: '#CF5307' }}
            >
              <MessageSquare className="w-4 h-4" />
              Contactar
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Mantenido del diseño anterior */}
      <div className="relative pt-20">
        <div className="absolute inset-0 bg-[#CF5307]/5 skew-y-[-5deg] transform origin-top-left"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-12">
                <h1 className="text-6xl font-bold text-gray-900 mb-6">
                  Eddy{" "}
                  <span style={{ color: '#CF5307' }}>
                    Perdomo
                  </span>
                </h1>
                <p className="text-2xl text-gray-600 mb-3">Real Estate Agent</p>
                <p className="text-xl" style={{ color: '#CF5307' }}>"Cambiando Vidas"</p>
              </div>
              
              <button
                onClick={handleWhatsAppClick}
                className="group px-8 py-4 rounded-xl text-lg font-medium inline-flex items-center gap-3 text-white transition-all duration-300"
                style={{ backgroundColor: '#CF5307' }}
              >
                Contactar por WhatsApp
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl -rotate-6" style={{ backgroundColor: '#CF5307', opacity: 0.1 }}></div>
              <img
                src={eddyImage}
                alt="Eddy Perdomo"
                className="relative rounded-3xl shadow-2xl w-full object-cover rotate-3 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Servicios Section - Nuevo diseño */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16" style={{ color: '#CF5307' }}>
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Building2,
                title: 'Propiedades Premium',
                description: 'Acceso exclusivo a las mejores propiedades en las zonas más demandadas.',
              },
              {
                icon: FileCheck,
                title: 'Asesoría Completa',
                description: 'Guía profesional en cada paso del proceso de compra o venta.',
              },
              {
                icon: Target,
                title: 'Inversiones Estratégicas',
                description: 'Identificamos las mejores oportunidades según tus objetivos.',
              }
            ].map((service, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 bg-white rounded-2xl transform transition-transform duration-300 group-hover:-translate-y-2"></div>
                <div className="relative p-8 bg-white rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-xl">
                  <service.icon 
                    className="w-12 h-12 mb-6 transform transition-transform duration-300 group-hover:scale-110"
                    style={{ color: '#CF5307' }}
                  />
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ubicaciones y Lenguajes */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="p-8 rounded-2xl" style={{ backgroundColor: '#CF5307' }}>
              <MapPin className="w-12 h-12 text-white mb-6" />
              <h3 className="text-2xl font-bold text-white mb-8">Ubicaciones</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {locations.map((location, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-lg rounded-lg p-4 text-white text-center">
                    {location}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-gray-50 border-2 border-gray-100">
              <Languages className="w-12 h-12 mb-6" style={{ color: '#CF5307' }} />
              <h3 className="text-2xl font-bold mb-8 text-gray-900">Idiomas</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {languages.map((language, idx) => (
                  <div 
                    key={idx} 
                    className="rounded-lg p-4 text-center transition-colors duration-300 hover:text-white"
                    style={{ backgroundColor: '#FFF', color: '#CF5307', border: '2px solid #CF5307' }}
                  >
                    {language}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links - Nuevo diseño */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16" style={{ color: '#CF5307' }}>
            Síguenos en Redes Sociales
          </h2>
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
                className="group relative overflow-hidden rounded-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#CF5307] to-[#CF5307]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-8 bg-white border-2 border-gray-100 rounded-xl flex items-center justify-center gap-4 group-hover:border-transparent transition-all duration-300">
                  <link.icon className="w-6 h-6 transition-colors duration-300" style={{ color: '#CF5307' }} />
                  <span className="text-gray-900 font-medium">{link.label}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section - Nuevo diseño */}
      <div className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16" style={{ color: '#CF5307' }}>
            Preguntas Frecuentes
          </h2>
          <div className="grid gap-6">
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
              <Disclosure key={index} as="div" className="border-b-2 border-gray-100 last:border-b-0">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="w-full py-6 flex justify-between items-center text-left">
                      <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 transform transition-transform duration-300 ${
                          open ? 'rotate-180' : ''
                        }`}
                        style={{ color: '#CF5307' }}
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
                      <Disclosure.Panel className="pb-6 text-gray-600">
                        {faq.answer}
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA - Nuevo diseño */}
      <div className="relative py-24 overflow-hidden" style={{ backgroundColor: '#CF5307' }}>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjk4IDE1MWMxODQuNiAwIDMzNC42IDE1MCAzMzQuNiAzMzQuNiAwIDE4NC42LTE1MCAzMzQuNi0zMzQuNiAzMzQuNlMtMzYuNiA2NzAuMi0zNi42IDQ4NS42YzAtMTg0LjYgMTUwLTMzNC42IDMzNC42LTMzNC42eiIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNSIvPjwvc3ZnPg==')] bg-repeat opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              ¿Listo para encontrar tu próxima propiedad?
            </h2>
            <button
              onClick={handleWhatsAppClick}
              className="bg-white hover:bg-gray-50 px-8 py-4 rounded-xl text-lg font-medium inline-flex items-center gap-3 transition-all duration-300 transform hover:scale-105"
              style={{ color: '#CF5307' }}
            >
              <Phone className="w-6 h-6" />
              Contactar ahora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;