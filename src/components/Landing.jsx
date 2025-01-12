import React, { useState } from 'react';
import { MapPin, Languages, Phone, Instagram, Globe, MessageSquare, ChevronDown, Star, ArrowRight, Check } from 'lucide-react';
import { Disclosure, Transition } from '@headlessui/react';
import eddyImage from '../assets/eddy.jpg';

const Landing = () => {
  const locations = ['Punta Cana', 'Bávaro', 'Cap Cana'];
  const languages = ['Español', 'English', 'Français'];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/18099057209', '_blank');
  };

  const stats = [
    { label: 'Propiedades', value: '100+' },
    { label: 'Clientes Satisfechos', value: '500+' },
    { label: 'Años de Experiencia', value: '5+' }
  ];

  const faqs = [
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
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-2xl font-bold text-blue-600">GESTINM</span>
            <button
              onClick={handleWhatsAppClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-all duration-300"
            >
              <MessageSquare className="w-4 h-4" />
              Contactar
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-6xl font-bold text-gray-900 leading-tight mb-4">
                  Eddy Perdomo
                </h1>
                <p className="text-xl text-gray-600 mb-2">Real Estate Agent</p>
                <p className="text-lg text-blue-600 font-medium">"Cambiando Vidas"</p>
              </div>
              
              <div className="flex gap-4">
                <button
                  onClick={handleWhatsAppClick}
                  className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-medium inline-flex items-center gap-3 transition-all duration-300"
                >
                  Contactar por WhatsApp
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
                    <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-violet-600 rounded-3xl rotate-6 blur-xl opacity-20"></div>
              <img
                src={eddyImage}
                alt="Eddy Perdomo"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Ubicaciones', items: locations, icon: MapPin },
              { title: 'Idiomas', items: languages, icon: Languages },
              { title: 'Servicios', items: ['Compra', 'Venta', 'Asesoría'], icon: Star }
            ].map((feature, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-blue-600 mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <ul className="space-y-3">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-600">
                      <Check className="w-5 h-5 text-blue-600" />
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
      <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Síguenos en redes sociales</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                className="flex items-center justify-center gap-3 p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <link.icon className="w-6 h-6 text-blue-600" />
                <span className="text-gray-700 font-medium">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Disclosure key={index}>
                {({ open }) => (
                  <div className="border border-gray-200 rounded-xl overflow-hidden">
                    <Disclosure.Button className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-300">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-blue-600 transform transition-transform duration-300 ${
                            open ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-200 ease-out"
                      enterFrom="transform -translate-y-2 opacity-0"
                      enterTo="transform translate-y-0 opacity-100"
                      leave="transition duration-150 ease-out"
                      leaveFrom="transform translate-y-0 opacity-100"
                      leaveTo="transform -translate-y-2 opacity-0"
                    >
                      <Disclosure.Panel className="px-6 py-4 bg-gray-50 text-gray-600">
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
      <div className="relative bg-blue-600 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">¿Listo para encontrar tu próxima propiedad?</h2>
          <button
            onClick={handleWhatsAppClick}
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl text-lg font-medium inline-flex items-center gap-3 transition-all duration-300"
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