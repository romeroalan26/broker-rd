import React, { useEffect, useRef, useState } from "react";
import {
  MapPin,
  Languages,
  Phone,
  Instagram,
  Globe,
  MessageSquare,
  ArrowRight,
  Building2,
  FileCheck,
  Target,
  ChevronDown,
} from "lucide-react";
import eddyImage from "../assets/eddy.webp";
import puntaCanaImage from "../assets/punta-cana.webp";
import santoDomingoImage from "../assets/santo-domingo.webp";
import capCanaImage from "../assets/cap-cana.webp";

// Componente de imagen con carga suave
const SmoothImage = ({ src, alt, className }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <div
        className={`absolute inset-0 rounded-3xl -rotate-6 transition-all duration-700 ${
          isVisible ? "opacity-10" : "opacity-0"
        }`}
        style={{ backgroundColor: "#CF5307" }}
      />
      <div
        className={`absolute inset-0 rounded-3xl bg-gray-200 animate-pulse transition-opacity duration-700 ${
          !isLoading ? "opacity-0" : "opacity-100"
        }`}
      />
      <img
        src={src}
        alt={alt}
        className={`${className} transition-all duration-700 ${
          isVisible && !isLoading
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95"
        }`}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

// Componente FAQ
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className="group relative bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#CF5307]/20">
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <button
            className="w-full text-left flex items-center justify-between gap-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            <h3 className="text-lg font-medium text-gray-900 group-hover:text-[#CF5307] transition-colors duration-300">
              {question}
            </h3>
            <div
              className={`flex-shrink-0 p-2 rounded-full border-2 border-gray-200 group-hover:border-[#CF5307] ${
                isOpen ? "bg-[#CF5307]/10" : ""
              } transition-all duration-300`}
            >
              <ChevronDown
                className={`w-5 h-5 text-gray-500 group-hover:text-[#CF5307] transform transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </div>
          </button>

          <div
            ref={contentRef}
            className="mt-4 text-gray-600 overflow-hidden transition-all duration-300"
            style={{
              maxHeight: isOpen ? contentRef.current?.scrollHeight + "px" : "0",
            }}
          >
            <div className="prose prose-lg">{answer}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Landing = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const locationsContainerRef = useRef(null);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/18099057209", "_blank");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        locationsContainerRef.current &&
        !locationsContainerRef.current.contains(event.target)
      ) {
        setSelectedLocation(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const locations = [
    {
      name: "Punta Cana",
      image: puntaCanaImage,
      description:
        "Descubre el paraíso en Punta Cana, donde las playas de arena blanca se encuentran con aguas cristalinas turquesas. Un destino exclusivo que combina lujo, naturaleza y entretenimiento.",
    },
    {
      name: "Santo Domingo",
      image: santoDomingoImage,
      description:
        "La capital histórica de República Dominicana, donde la arquitectura colonial se mezcla con el desarrollo moderno. Una ciudad vibrante que ofrece oportunidades únicas en el mercado inmobiliario.",
    },
    {
      name: "Cap Cana",
      image: capCanaImage,
      description:
        "Cap Cana representa la excelencia en desarrollo inmobiliario de lujo, con una marina de clase mundial, campos de golf y exclusivas comunidades residenciales.",
    },
  ];

  const languages = [
    {
      language: "Español",
      message: "Empezar una conversación",
      whatsappMessage:
        "¡Hola! Me gustaría obtener más información sobre las propiedades disponibles.",
    },
    {
      language: "English",
      message: "Start a conversation",
      whatsappMessage:
        "Hello! I would like to get more information about available properties.",
    },
    {
      language: "Français",
      message: "Commencer une conversation",
      whatsappMessage:
        "Bonjour! Je souhaite obtenir plus d'informations sur les propriétés disponibles.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <span className="text-2xl font-bold" style={{ color: "#CF5307" }}>
              GESTINM
            </span>
            <button
              onClick={handleWhatsAppClick}
              className="px-6 py-2 rounded-full text-sm font-medium flex items-center gap-2 text-white transition-all duration-300"
              style={{ backgroundColor: "#CF5307" }}
            >
              <MessageSquare className="w-4 h-4" />
              Contactar
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-20">
        <div className="absolute inset-0 bg-[#CF5307]/5 skew-y-[-5deg] transform origin-top-left" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-12">
                <h1 className="text-6xl font-bold text-gray-900 mb-6">
                  Eddy <span style={{ color: "#CF5307" }}>Perdomo</span>
                </h1>
                <p className="text-2xl text-gray-600 mb-3">
                  Real Estate Advisor
                </p>
                <p className="text-xl" style={{ color: "#CF5307" }}>
                  "Cambiando Vidas"
                </p>
              </div>

              <button
                onClick={handleWhatsAppClick}
                className="group px-8 py-4 rounded-xl text-lg font-medium inline-flex items-center gap-3 text-white transition-all duration-300"
                style={{ backgroundColor: "#CF5307" }}
              >
                Contactar por WhatsApp
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <SmoothImage
              src={eddyImage}
              alt="Eddy Perdomo"
              className="rounded-3xl shadow-2xl w-full object-cover rotate-3 hover:rotate-0"
            />
          </div>
        </div>
      </div>

      {/* Servicios Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-bold text-center mb-16"
            style={{ color: "#CF5307" }}
          >
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Building2,
                title: "Propiedades Premium",
                description:
                  "Acceso exclusivo a las mejores propiedades en las zonas más demandadas.",
              },
              {
                icon: FileCheck,
                title: "Asesoría Completa",
                description:
                  "Guía profesional en cada paso del proceso de compra o venta.",
              },
              {
                icon: Target,
                title: "Inversiones Estratégicas",
                description:
                  "Identificamos las mejores oportunidades según tus objetivos.",
              },
            ].map((service, idx) => (
              <div key={idx} className="group relative h-full">
                <div className="absolute inset-0 bg-white rounded-2xl transform transition-transform duration-300 group-hover:-translate-y-2" />
                <div className="relative p-8 bg-white rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-xl h-full flex flex-col">
                  <service.icon
                    className="w-12 h-12 mb-6 transform transition-transform duration-300 group-hover:scale-110 flex-shrink-0"
                    style={{ color: "#CF5307" }}
                  />
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 flex-shrink-0">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 flex-grow">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ubicaciones y Lenguajes */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Ubicaciones */}
            <div ref={locationsContainerRef} className="h-full">
              <div
                className="p-8 rounded-2xl h-full"
                style={{ backgroundColor: "#CF5307" }}
              >
                <MapPin className="w-12 h-12 text-white mb-6" />
                <h3 className="text-2xl font-bold text-white mb-8">
                  Ubicaciones
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {locations.map((location) => (
                    <button
                      key={location.name}
                      onClick={() =>
                        setSelectedLocation((prev) =>
                          prev?.name === location.name ? null : location
                        )
                      }
                      className={`bg-white/10 backdrop-blur-lg rounded-lg p-4 text-white text-center 
                        transition-all duration-300 hover:bg-white/20 
                        ${
                          selectedLocation?.name === location.name
                            ? "ring-2 ring-white shadow-lg"
                            : ""
                        }`}
                    >
                      {location.name}
                    </button>
                  ))}
                </div>

                <div
                  className={`overflow-hidden transition-all duration-700 ease-in-out
                  ${
                    selectedLocation
                      ? "max-h-[500px] opacity-100 translate-y-0"
                      : "max-h-0 opacity-0 -translate-y-4"
                  }`}
                >
                  {selectedLocation && (
                    <div className="transform transition-all duration-700 ease-out">
                      <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                        <div className="relative">
                          <SmoothImage
                            src={selectedLocation.image}
                            alt={selectedLocation.name}
                            className="w-full h-48 object-cover hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
                        </div>
                        <div className="p-6">
                          <h4
                            className="text-xl font-semibold mb-3"
                            style={{ color: "#CF5307" }}
                          >
                            {selectedLocation.name}
                          </h4>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {selectedLocation.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Idiomas */}
            <div className="relative">
              <div className="sticky top-24">
                <div className="p-8 rounded-2xl bg-gray-50 border-2 border-gray-100">
                  <Languages
                    className="w-12 h-12 mb-6"
                    style={{ color: "#CF5307" }}
                  />
                  <h3 className="text-2xl font-bold mb-8 text-gray-900">
                    Idiomas
                  </h3>
                  <div className="space-y-3">
                    {languages.map((lang, idx) => (
                      <button
                        key={idx}
                        className="w-full p-4 rounded-xl bg-white border-2 border-[#CF5307]/20 hover:border-[#CF5307] flex items-center justify-between group transition-all duration-300 hover:shadow-lg"
                        onClick={() => {
                          const message = encodeURIComponent(
                            lang.whatsappMessage
                          );
                          window.open(
                            `https://wa.me/18099057209?text=${message}`,
                            "_blank"
                          );
                        }}
                      >
                        <span
                          className="font-medium"
                          style={{ color: "#CF5307" }}
                        >
                          {lang.language}
                        </span>
                        <span className="text-sm text-gray-500 flex items-center gap-2 group-hover:text-[#CF5307] transition-colors duration-300">
                          {lang.message}
                          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100" />
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-bold text-center mb-16"
            style={{ color: "#CF5307" }}
          >
            Preguntas Frecuentes
          </h2>

          <div className="grid gap-6">
            {[
              {
                question:
                  "1-¿Pueden los extranjeros comprar propiedades en la República Dominicana?",
                answer:
                  "Sí, en la República Dominicana los extranjeros pueden comprar propiedades sin restricciones. El proceso es prácticamente igual para residentes y no residentes, lo que convierte al país en un destino atractivo para inversionistas internacionales.",
              },
              {
                question:
                  "2-¿Cuáles son los costos asociados con la compra de una propiedad?",
                answer:
                  "Además del precio de la propiedad, existen costos adicionales, como el impuesto de transferencia (3% del valor), y el Impuesto sobre la Propiedad Inmobiliaria (IPI) para propiedades de alto valor. Las propiedades con ley de confotur están exentas de este impuesto durante los primeros 15 años una vez lista la propiedad.",
              },
              {
                question:
                  "3-¿Qué opciones de financiamiento están disponibles?",
                answer:
                  "Los compradores pueden optar por financiamiento local a través de bancos dominicanos, con préstamos hipotecarios que cubren hasta el 80% del valor de la propiedad. En proyectos específicos, especialmente en zonas turísticas, también se ofrece financiamiento directo de promotores.",
              },
              {
                question:
                  "4-¿Qué garantías ofrece la ley dominicana para los propietarios?",
                answer:
                  "La Ley 108-05 de Registro Inmobiliario protege los derechos de propiedad mediante un sistema de títulos de propiedad. Este sistema asegura a los dueños y minimiza el riesgo de disputas, brindando seguridad legal a los compradores.",
              },
              {
                question:
                  "5-¿Cómo se calcula el Impuesto sobre la Propiedad Inmobiliaria (IPI)?",
                answer:
                  "El IPI es un impuesto anual para propiedades que superan RD$9,860,649 para personas físicas y fiduciarias. Se aplica un 1% sobre el valor excedente. Este impuesto puede pagarse anualmente o de forma semestral.",
              },
              {
                question:
                  "6-¿Es rentable invertir en propiedades en zonas turísticas?",
                answer:
                  "Sí, las zonas turísticas como Punta Cana, Bávaro y Puerto Plata tienen un alto potencial de retorno de inversión debido a la gran demanda de alquileres vacacionales y su constante desarrollo, lo que también incrementa el valor de las propiedades con el tiempo.",
              },
              {
                question:
                  "7-¿Cuáles son las ventajas fiscales de invertir en el sector turístico?",
                answer:
                  "La Ley de Confotur (Ley 158-01) ofrece incentivos como exenciones de impuestos de transferencia y de impuestos sobre la renta en áreas turísticas, lo cual reduce significativamente los costos para los inversores en desarrollos turísticos aprobados.",
              },
              {
                question:
                  "8-¿Qué tipo de propiedad es la mejor inversión (apartamento, villa, terreno)?",
                answer:
                  "Esto depende del objetivo de inversión. Los apartamentos en zonas turísticas suelen ser ideales para alquileres a corto plazo, mientras que las villas pueden atraer a familias y grupos. Los terrenos, por su parte, ofrecen oportunidades de inversión a largo plazo en áreas de desarrollo.",
              },
              {
                question:
                  "9-¿Es seguro invertir en propiedades en la República Dominicana?",
                answer:
                  "La República Dominicana es un entorno seguro para la inversión inmobiliaria, respaldado por sus leyes de propiedad y su enfoque en atraer inversión extranjera. Contar con asesoría profesional, tanto legal como inmobiliaria, ayuda a garantizar una transacción segura.",
              },
              {
                question:
                  "10-¿Cuáles son los principales riesgos al invertir en bienes raíces en el país?",
                answer:
                  "Entre los riesgos potenciales están las demoras en el proceso de construcción para proyectos en pre-venta, fluctuaciones en el mercado turístico, y costos imprevistos en la gestión de propiedades. Sin embargo, estos riesgos pueden minimizarse mediante un análisis exhaustivo, la selección de desarrollos consolidados y la asesoría de expertos.",
              },
            ].map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div
        className="relative py-24 overflow-hidden"
        style={{ backgroundColor: "#CF5307" }}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjk4IDE1MWMxODQuNiAwIDMzNC42IDE1MCAzMzQuNiAzMzQuNiAwIDE4NC42LTE1MCAzMzQuNi0zMzQuNiAzMzQuNlMtMzYuNiA2NzAuMi0zNi42IDQ4NS42YzAtMTg0LjYgMTUwLTMzNC42IDMzNC42LTMzNC42eiIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNSIvPjwvc3ZnPg==')] bg-repeat opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              ¿Listo para encontrar tu próxima propiedad?
            </h2>
            <button
              onClick={handleWhatsAppClick}
              className="bg-white hover:bg-gray-50 px-8 py-4 rounded-xl text-lg font-medium inline-flex items-center gap-3 transition-all duration-300 transform hover:scale-105"
              style={{ color: "#CF5307" }}
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
