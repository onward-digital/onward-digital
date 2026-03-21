'use client';

import { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    // Nav
    nav_services: 'Services',
    nav_portfolio: 'Portfolio',
    nav_about: 'About',
    nav_contact: 'Contact',
    nav_cta: "Let's Talk",

    // Hero
    hero_tag: 'WEB DEVELOPMENT STUDIO',
    hero_title_1: 'We build websites',
    hero_title_2: 'that sell.',
    hero_subtitle: "We don't just code beautiful sites — we craft digital experiences that turn visitors into paying customers. Design, copy, and strategy included.",
    hero_cta: 'Start Your Project',
    hero_cta2: 'View Our Work',
    hero_stat_1_num: '50+',
    hero_stat_1_label: 'Projects Delivered',
    hero_stat_2_num: '98%',
    hero_stat_2_label: 'Client Satisfaction',
    hero_stat_3_num: '3x',
    hero_stat_3_label: 'Avg. Conversion Boost',

    // Services
    services_tag: 'WHAT WE DO',
    services_title: 'Services & Packages',
    services_subtitle: 'Every website we build comes with sales-focused copy, conversion-optimized design, and marketing strategy — not just code.',
    
    service_1_name: 'Starter',
    service_1_price: '$500',
    service_1_desc: 'Perfect for professionals who need a strong online presence fast.',
    service_1_f1: 'Single-page landing site',
    service_1_f2: 'Responsive design (mobile-first)',
    service_1_f3: 'Contact form & CTA optimization',
    service_1_f4: 'Basic SEO setup',
    service_1_f5: 'Sales-focused copywriting',
    service_1_f6: '5-7 day delivery',

    service_2_name: 'Business',
    service_2_price: '$1,200',
    service_2_desc: 'For businesses ready to dominate their market online.',
    service_2_f1: 'Multi-page website (up to 5)',
    service_2_f2: 'Custom UI/UX design',
    service_2_f3: 'Blog & content section',
    service_2_f4: 'Analytics & tracking setup',
    service_2_f5: 'Full SEO optimization',
    service_2_f6: 'Social media integration',
    service_2_f7: '10-15 day delivery',
    service_2_badge: 'MOST POPULAR',

    service_3_name: 'Premium',
    service_3_price: '$2,500+',
    service_3_desc: 'Full-stack solutions for businesses that need advanced functionality.',
    service_3_f1: 'Everything in Business',
    service_3_f2: 'E-commerce / online store',
    service_3_f3: 'Booking & scheduling system',
    service_3_f4: 'Custom dashboards & admin',
    service_3_f5: 'API integrations',
    service_3_f6: 'Performance optimization',
    service_3_f7: '15-25 day delivery',

    service_cta: 'Get Started',

    // Portfolio
    portfolio_tag: 'OUR WORK',
    portfolio_title: 'Recent Projects',
    portfolio_subtitle: 'A selection of our latest work. Each project combines strategy, design, and technology.',

    project_1_name: 'Martínez & Associates',
    project_1_type: 'LAW FIRM WEBSITE',
    project_1_desc: 'Professional multi-page site for a law firm. Designed to build trust and convert consultations.',
    
    project_2_name: 'Alma Store',
    project_2_type: 'E-COMMERCE',
    project_2_desc: 'Full online store for artisanal products with cart, checkout, and inventory management.',
    
    project_3_name: 'NutriVida',
    project_3_type: 'LANDING PAGE',
    project_3_desc: 'High-converting landing page for a nutritionist with online booking integration.',

    project_result: 'Result',
    project_1_result: '+180% lead generation in first month',
    project_2_result: '$12K revenue in first 30 days',
    project_3_result: '+250% appointment bookings',
    project_cta: 'View Case Study',

    // About
    about_tag: 'WHO WE ARE',
    about_title: 'More than developers.',
    about_p1: "We're a digital studio that combines development, design, and marketing into one seamless service. When you work with us, you don't just get a website — you get a growth engine.",
    about_p2: 'Every pixel, every word, every line of code is crafted with one goal in mind: helping your business grow.',
    about_f1_title: 'Strategy First',
    about_f1_desc: 'We start with your business goals, not a template.',
    about_f2_title: 'Full-Stack Delivery',
    about_f2_desc: 'Design, copy, development, and deployment — all included.',
    about_f3_title: 'Results Driven',
    about_f3_desc: 'We measure success by your growth, not just deliverables.',

    // Contact
    contact_tag: 'START YOUR PROJECT',
    contact_title: "Let's build something great.",
    contact_subtitle: "Tell us about your project and we'll get back to you within 24 hours.",
    contact_name: 'Your Name',
    contact_email: 'Your Email',
    contact_project: 'Project Type',
    contact_project_option1: 'Select a service...',
    contact_project_option2: 'Starter Package',
    contact_project_option3: 'Business Package',
    contact_project_option4: 'Premium Package',
    contact_project_option5: 'Custom Project',
    contact_message: 'Tell us about your project',
    contact_send: 'Send Message',
    contact_info_title: 'Get in Touch',
    contact_email_label: 'Email',
    contact_response: 'Response Time',
    contact_response_value: 'Within 24 hours',
    contact_location: 'Location',
    contact_location_value: 'Remote — Worldwide',

    // Footer
    footer_desc: 'Web development studio crafting websites that convert visitors into customers.',
    footer_nav: 'Navigation',
    footer_connect: 'Connect',
    footer_rights: 'All rights reserved.',
  },
  es: {
    // Nav
    nav_services: 'Servicios',
    nav_portfolio: 'Portfolio',
    nav_about: 'Nosotros',
    nav_contact: 'Contacto',
    nav_cta: 'Hablemos',

    // Hero
    hero_tag: 'ESTUDIO DE DESARROLLO WEB',
    hero_title_1: 'Creamos sitios web',
    hero_title_2: 'que venden.',
    hero_subtitle: 'No solo programamos sitios hermosos — creamos experiencias digitales que convierten visitantes en clientes. Diseño, textos y estrategia incluidos.',
    hero_cta: 'Iniciá tu Proyecto',
    hero_cta2: 'Ver Nuestro Trabajo',
    hero_stat_1_num: '50+',
    hero_stat_1_label: 'Proyectos Entregados',
    hero_stat_2_num: '98%',
    hero_stat_2_label: 'Satisfacción del Cliente',
    hero_stat_3_num: '3x',
    hero_stat_3_label: 'Aumento Promedio en Conversión',

    // Services
    services_tag: 'QUÉ HACEMOS',
    services_title: 'Servicios y Paquetes',
    services_subtitle: 'Cada sitio que construimos incluye textos de venta, diseño optimizado para conversión y estrategia de marketing — no solo código.',

    service_1_name: 'Starter',
    service_1_price: '$500',
    service_1_desc: 'Perfecto para profesionales que necesitan presencia online rápido.',
    service_1_f1: 'Sitio landing de una página',
    service_1_f2: 'Diseño responsive (mobile-first)',
    service_1_f3: 'Formulario de contacto y CTA',
    service_1_f4: 'SEO básico configurado',
    service_1_f5: 'Copywriting enfocado en ventas',
    service_1_f6: 'Entrega en 5-7 días',

    service_2_name: 'Business',
    service_2_price: '$1.200',
    service_2_desc: 'Para negocios listos para dominar su mercado online.',
    service_2_f1: 'Sitio web multi-página (hasta 5)',
    service_2_f2: 'Diseño UI/UX personalizado',
    service_2_f3: 'Blog y sección de contenido',
    service_2_f4: 'Analytics y tracking configurado',
    service_2_f5: 'Optimización SEO completa',
    service_2_f6: 'Integración con redes sociales',
    service_2_f7: 'Entrega en 10-15 días',
    service_2_badge: 'MÁS POPULAR',

    service_3_name: 'Premium',
    service_3_price: '$2.500+',
    service_3_desc: 'Soluciones full-stack para negocios que necesitan funcionalidad avanzada.',
    service_3_f1: 'Todo lo del Business',
    service_3_f2: 'E-commerce / tienda online',
    service_3_f3: 'Sistema de reservas y turnos',
    service_3_f4: 'Dashboards y panel admin',
    service_3_f5: 'Integraciones con APIs',
    service_3_f6: 'Optimización de rendimiento',
    service_3_f7: 'Entrega en 15-25 días',

    service_cta: 'Empezar',

    // Portfolio
    portfolio_tag: 'NUESTRO TRABAJO',
    portfolio_title: 'Proyectos Recientes',
    portfolio_subtitle: 'Una selección de nuestros últimos trabajos. Cada proyecto combina estrategia, diseño y tecnología.',

    project_1_name: 'Martínez & Asociados',
    project_1_type: 'SITIO WEB ESTUDIO JURÍDICO',
    project_1_desc: 'Sitio multi-página profesional para un estudio jurídico. Diseñado para generar confianza y convertir consultas.',
    
    project_2_name: 'Alma Store',
    project_2_type: 'E-COMMERCE',
    project_2_desc: 'Tienda online completa para productos artesanales con carrito, checkout y gestión de inventario.',
    
    project_3_name: 'NutriVida',
    project_3_type: 'LANDING PAGE',
    project_3_desc: 'Landing page de alta conversión para nutricionista con integración de reservas online.',

    project_result: 'Resultado',
    project_1_result: '+180% generación de leads en el primer mes',
    project_2_result: '$12K en ventas en los primeros 30 días',
    project_3_result: '+250% en reservas de turnos',
    project_cta: 'Ver Caso de Estudio',

    // About
    about_tag: 'QUIÉNES SOMOS',
    about_title: 'Más que desarrolladores.',
    about_p1: 'Somos un estudio digital que combina desarrollo, diseño y marketing en un solo servicio. Cuando trabajás con nosotros, no solo recibís un sitio web — recibís un motor de crecimiento.',
    about_p2: 'Cada pixel, cada palabra, cada línea de código está creada con un objetivo: hacer crecer tu negocio.',
    about_f1_title: 'Estrategia Primero',
    about_f1_desc: 'Empezamos con tus objetivos de negocio, no con un template.',
    about_f2_title: 'Entrega Completa',
    about_f2_desc: 'Diseño, textos, desarrollo y deploy — todo incluido.',
    about_f3_title: 'Orientados a Resultados',
    about_f3_desc: 'Medimos el éxito por tu crecimiento, no solo por entregables.',

    // Contact
    contact_tag: 'INICIÁ TU PROYECTO',
    contact_title: 'Construyamos algo grande.',
    contact_subtitle: 'Contanos sobre tu proyecto y te respondemos en menos de 24 horas.',
    contact_name: 'Tu Nombre',
    contact_email: 'Tu Email',
    contact_project: 'Tipo de Proyecto',
    contact_project_option1: 'Seleccioná un servicio...',
    contact_project_option2: 'Paquete Starter',
    contact_project_option3: 'Paquete Business',
    contact_project_option4: 'Paquete Premium',
    contact_project_option5: 'Proyecto Personalizado',
    contact_message: 'Contanos sobre tu proyecto',
    contact_send: 'Enviar Mensaje',
    contact_info_title: 'Contacto',
    contact_email_label: 'Email',
    contact_response: 'Tiempo de Respuesta',
    contact_response_value: 'Menos de 24 horas',
    contact_location: 'Ubicación',
    contact_location_value: 'Remoto — Todo el mundo',

    // Footer
    footer_desc: 'Estudio de desarrollo web que crea sitios que convierten visitantes en clientes.',
    footer_nav: 'Navegación',
    footer_connect: 'Conectar',
    footer_rights: 'Todos los derechos reservados.',
  },
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');

  const t = (key) => translations[lang]?.[key] || key;

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'es' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
