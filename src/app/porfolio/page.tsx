'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  Code,
  Briefcase,
  GraduationCap,
  User,
  Folder,
  MessageCircle,
  ExternalLink,
  Calendar,
  MapPin,
  Heart,
  Rocket,
  Download,
  Award
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  SiNextdotjs,
  SiReact,
  SiAstro,
  SiNestjs,
  SiMysql,
  SiExpress,
  SiPostgresql,
  SiDocker,
  SiOracle,
  SiPython,
  SiGit,
  SiMongodb
} from 'react-icons/si';
import Image from 'next/image';
import { getAgeFromBirthdate } from '@/lib/utils';
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { AlertDialogHeader } from '@/components/ui/alert-dialog';

const technologies = [
  { name: 'Next.js', level: 100, icon: SiNextdotjs, category: 'Frontend' },
  { name: 'React', level: 100, icon: SiReact, category: 'Frontend' },
  { name: 'Astro', level: 80, icon: SiAstro, category: 'Frontend' },
  { name: 'Express.js', level: 100, icon: SiExpress, category: 'Backend' },
  { name: 'Nest.js', level: 100, icon: SiNestjs, category: 'Backend' },
  { name: 'Django', level: 90, icon: SiPython, category: 'Backend' },
  { name: 'PostgreSQL', level: 100, icon: SiPostgresql, category: 'Database' },
  { name: 'MySQL', level: 100, icon: SiMysql, category: 'Database' },
  { name: 'MongoDB', level: 100, icon: SiMongodb, category: 'Database' },
  { name: 'Oracle', level: 70, icon: SiOracle, category: 'Database' },
  { name: 'Git', level: 100, icon: SiGit, category: 'Tools' },
  { name: 'Docker', level: 80, icon: SiDocker, category: 'Tools' }
];

const projects = [
  {
    title: 'PSuarezDev Academy',
    description: 'Plataforma de E-Learning que facilita el acceso a cursos y la gestión de contenidos con un sistema de roles. Con su interfaz moderna y funciones avanzadas, ofrece una solución práctica y escalable para la educación digital.',
    image: 'psuarezdev-academy.webp',
    tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'Prisma', 'PostgreSQL', 'Stripe', 'Python'],
    github: 'https://github.com/psuarezdev/psuarezdev-academy'
  },
  {
    title: 'LoMobility',
    description: 'Innovadora iniciativa que busca empoderar a los ciudadanos para mejorar la accesibilidad en entornos urbanos',
    image: 'lomobility.webp',
    tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'Prisma', 'PostgreSQL'],
    link: 'https://herraduramasproquo.com/lomobility'
  },
  {
    title: 'Clon de Discord',
    description: 'Clon Fullstack que replica las funcionalidades esenciales de Discord, incluyendo chats en tiempo real, servidores personalizados, canales de voz, canales de video y mensajería instantánea',
    image: 'discord-clone.webp',
    tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'Prisma', 'PostgreSQL', 'Socket.IO'],
    github: 'https://github.com/psuarezdev/discord-clone'
  },
  {
    title: 'Clon de Airbnb',
    description: 'Clon Fullstack de Airbnb que permite la publicación, búsqueda y reserva de alojamientos. Incluye autenticación segura, gestión de propiedades y sistema de pagos, proporcionando una experiencia inmersiva y funcional',
    image: 'airbnb-clone.webp',
    tech: ['React.js', 'Nest.js', 'TypeScript', 'TailwindCSS', 'Prisma', 'MongoDB', 'Redis'],
    github: 'https://github.com/psuarezdev/airbnb-clone'
  },
  {
    title: 'Clon de Reddit',
    description: 'Clon de Reddit con soporte para la creación y moderación de comunidades, votaciones en publicaciones, comentarios anidados y un diseño moderno',
    image: 'reddit-clone.webp',
    tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'Prisma', 'PostgreSQL'],
    github: 'https://github.com/psuarezdev/reddit-clone'
  }
];

const experience = [
  {
    title: 'Desarrollador Full Stack',
    company: 'Contactel - Grupo Inetel',
    period: 'Febrero 2025 - Actualidad',
    location: 'Telde, Gran Canaria',
    description: [
      'Desarrollo de APIs REST con Express.js y Node.js',
      'Desarrollo de APIs REST con Rust y Axum',
      'Desarrollo de aplicaciones web utilizando React y TypeScript',
      'Gestión de bases de datos relacionales con PostgreSQL',
      'Contenerización de aplicaciones con Docker y orquestación con Docker Compose',
      'Uso de Gitea como plataforma de control de versiones y colaboración en el desarrollo'
    ],
    current: true
  },
  {
    title: 'Desarrollador Web y Administrador de Sistemas',
    company: 'Suisca Group',
    period: 'Mayo 2023 - Septiembre 2023',
    location: 'Las Palmas de Gran Canaria',
    description: [
      'Desarrollo web con tecnologías como HTML5, CSS3, Bootstrap 5, TailwindCSS, JavaScript, PHP y Laravel, asegurando interfaces intuitivas y responsivas',
      'Gestión de bases de datos Oracle 11g, incluyendo la creación, optimización, mantenimiento de datos y consultas SQL - PL/SQL',
      'Administración de equipos, servidores y redes, garantizando su correcto funcionamiento y seguridad',
      'Mantenimiento de software ERP, asegurando su rendimiento y funcionalidad constante para la operación empresarial'
    ]
  }
];

const education = [
  {
    title: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma',
    institution: 'IES Lomo de La Herradura',
    period: 'Septiembre 2023 - Junio 2025',
    grade: 'Matrícula de Honor',
    link: 'https://www.todofp.es/que-estudiar/familias-profesionales/informatica-comunicaciones/des-aplicaciones-multiplataforma.html'
  },
  {
    title: 'Técnico en Sistemas Microinformáticos y Redes',
    institution: 'IES Lomo de La Herradura',
    period: 'Septiembre 2021 - Junio 2023',
    grade: '8.6',
    link: 'https://www.todofp.es/que-estudiar/familias-profesionales/informatica-comunicaciones/sistemas-microniformaticos-redes.html'
  }
];

const certificates = [
  {
    title: "Master en React, Express, MongoDB y JWT",
    issuer: "Udemy",
    date: "2024",
    credentialId: "UC-f75910f3-d6ff-4c03-b4b5-0560abaef75f",
    image: "UC-f75910f3-d6ff-4c03-b4b5-0560abaef75f.webp",
    description: "Curso completo sobre desarrollo web fullstack con el stack MERN.",
    skills: ["React", "Express", "MongoDB", "JWT", "Node.js"],
  },
  {
    title: "Profundizando en Next.js",
    issuer: "Udemy",
    date: "2024",
    credentialId: "ovhxC5AE",
    image: "ovhxC5AE.webp",
    description: "Curso avanzado sobre el framework Next.js para aplicaciones React.",
    skills: ["Next.js", "SSR", "React", "API Routes", "Optimización"],
  },
  {
    title: "Creación de Páginas Web con Astro",
    issuer: "Udemy",
    date: "2024",
    credentialId: "U5PZ",
    image: "U5PZ.webp",
    description: "Curso introductorio a Astro para la creación de sitios web rápidos y modernos.",
    skills: ["Astro", "Static Site Generation", "Frontend", "Integraciones"],
  },
  {
    title: "Curso de Django",
    issuer: "Udemy",
    date: "2024",
    credentialId: "tnW0HpPq",
    image: "tnW0HpPq.webp",
    description: "Curso completo para desarrollar aplicaciones web con Django.",
    skills: ["Python", "Django", "ORM", "Backend", "MVC"],
  },
  {
    title: "Programación en C++",
    issuer: "Udemy",
    date: "2024",
    credentialId: "1oDIan5q",
    image: "1oDIan5q.webp",
    description: "Curso básico de programación con C++.",
    skills: ["C++", "POO", "Estructuras de datos", "Algoritmos"],
  },
  {
    title: "Docker para desarrolladores",
    issuer: "Udemy",
    date: "2024",
    credentialId: "R0nx",
    image: "R0nx.webp",
    description: "Curso práctico sobre contenerización de aplicaciones con Docker.",
    skills: ["Docker", "Containers", "DevOps", "Docker Compose"],
  },
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
   const [certificatesModalOpen, setCertificatesModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Cursor personalizado */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 bg-purple-500 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />

      {/* Navegación */}
      <motion.nav
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled ? "bg-slate-900/95 backdrop-blur-md shadow-lg" : "bg-transparent"
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              PS
            </motion.div>

            <div className="hidden md:flex space-x-8">
              {[
                { id: 'inicio', label: 'Inicio', icon: User },
                { id: 'sobre-mi', label: 'Sobre mí', icon: User },
                { id: 'experiencia', label: 'Experiencia', icon: Briefcase },
                { id: 'proyectos', label: 'Proyectos', icon: Folder },
                { id: 'educacion', label: 'Educación', icon: GraduationCap },
                { id: 'tecnologias', label: 'Tecnologías', icon: Code },
                { id: 'contacto', label: 'Contacto', icon: MessageCircle },
              ].map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${activeSection === item.id
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-slate-800'
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Partículas de fondo */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full"
              initial={{
                x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 0),
                y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 0),
              }}
              animate={{
                y: [null, Math.random() * (typeof window !== "undefined" ? window.innerHeight : 0)],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              className="relative inline-block"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Avatar className="w-48 h-48 mx-auto border-4 border-purple-500 shadow-2xl">
                <AvatarImage src="/psuarezdev.webp?height=128&width=128" alt="Pablo Suárez" />
                <AvatarFallback>PS</AvatarFallback>
              </Avatar>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Hey, soy Pablo Suárez
              </motion.h1>

              <motion.p
                className="text-start text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Desarrollador de Software de Gran Canaria, España 🇪🇸. <br />
                Apasionado por la ingeniería del software, el backend y el análisis de datos.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0"
                onClick={() => scrollToSection("experiencia")}
              >
                <Briefcase className="w-5 h-5 mr-2" />
                Ver Experiencia
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white bg-transparent"
                onClick={() => scrollToSection("contacto")}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contactar
              </Button>
            </motion.div>

            <motion.div
              className="flex justify-center ml-8 space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {[
                { icon: Linkedin, href: 'https://es.linkedin.com/in/pablosuarezbm/', label: 'LinkedIn' },
                { icon: Github, href: 'https://github.com/psuarezdev', label: 'GitHub' },
                { icon: Mail, href: 'mailto:pablosuarezbm@gmail.com', label: 'Email' },
                // { icon: Download, href: "#", label: "CV" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="p-3 rounded-full bg-slate-800 hover:bg-purple-600 transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-6 h-6 text-gray-300 group-hover:text-white" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute -bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <ChevronDown className="w-8 h-8 text-purple-400" />
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="sobre-mi" className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Sobre mí
            </h2>
            <p className="text-xl text-gray-400">Conoce más sobre mi pasión por el desarrollo</p>
          </motion.div>

          <div className="max-w-6xl mx-auto">

            {/* Contenido sobre mí */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="proxe space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Rocket className="w-6 h-6 mr-3 text-purple-400" />
                    Mi Historia
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Apasionado por la ingeniería del software, el desarrollo backend y el análisis de datos. Con {getAgeFromBirthdate('2003-11-15')} años y 1 año de experiencia laboral, aunque llevo desarrollando software, participando en proyectos y en competiciones desde los 15 años. En este tiempo, he aprendido tanto de la teoría como del trabajo práctico, enfrentándome a desafíos reales que me han permitido crecer como desarrollador
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Heart className="w-6 h-6 mr-3 text-purple-400" />
                    Lo que me motiva
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Me atraen los aspectos técnicos profundos del desarrollo, como la arquitectura de software,
                    la optimización de algoritmos, el diseño de sistemas escalables y robustos,
                    así como la gestión eficiente de recursos, el manejo de concurrencia y la comunicación entre sistemas.
                    Además, tengo un interés creciente en la seguridad informática, comprendiendo la importancia de
                    implementar prácticas y arquitecturas que protejan datos y sistemas frente a amenazas, garantizando la integridad,
                    confidencialidad y disponibilidad en entornos cada vez más complejos.
                  </p>
                  <p className="mt-3 text-gray-300 leading-relaxed">
                    El backend es mi zona de confort, donde me concentro en la lógica de negocio, el tratamiento eficiente de datos y las decisiones arquitectónicas que impactan directamente en el rendimiento y la escalabilidad de las aplicaciones. Me interesa entender cómo funcionan los sistemas a bajo nivel y cómo evolucionarlos de manera sostenible.
                  </p>
                  <p className="mt-3 text-gray-300 leading-relaxed">
                    El análisis de datos y la inteligencia artificial son grandes motores de mi motivación profesional. Me entusiasma descubrir patrones, automatizar decisiones y mejorar procesos combinando habilidades técnicas con pensamiento analítico. Disfruto extrayendo valor real a partir de datos complejos mediante técnicas de machine learning, modelos predictivos y algoritmos de IA, buscando siempre soluciones que aporten eficiencia y precisión en la toma de decisiones.
                  </p>
                </div>

                {/* <div>
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Zap className="w-6 h-6 mr-3 text-purple-400" />
                    Habilidades Clave
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      
                    ].map((skill, index) => (
                      <motion.div
                        key={skill}
                        className="flex items-center space-x-2 text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span>{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div> */}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Experiencia */}
      <section id="experiencia" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Experiencia Laboral
            </h2>
            <p className="text-xl text-gray-400">Mi trayectoria profesional</p>
          </motion.div>

          <div className="max-w-4xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500"></div>

            {experience.map((exp, index) => (
              <motion.div
                key={index}
                className="relative flex items-start mb-12 last:mb-0"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg border-4 border-slate-900"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Briefcase className="w-8 h-8 text-white" />
                  </motion.div>
                  {exp.current && (
                    <motion.div
                      className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-slate-900 flex items-center justify-center"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </motion.div>
                  )}
                </div>

                {/* Content */}
                <div className="ml-8 flex-1">
                  <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500 transition-all duration-300 group relative">
                    {/* Arrow pointing to timeline */}
                    <div className="absolute left-0 top-8 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-slate-800 -translate-x-2"></div>

                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-2xl text-white mb-2 flex items-center">
                            {exp.title}
                            {exp.current && (
                              <Badge className="ml-3 bg-green-500 text-white animate-pulse">
                                <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                                Actual
                              </Badge>
                            )}
                          </CardTitle>
                          <CardDescription className="text-lg text-purple-400 mb-2 font-semibold">
                            {exp.company}
                          </CardDescription>
                          <div className="flex flex-col sm:flex-row sm:items-center text-gray-400 space-y-1 sm:space-y-0 sm:space-x-4">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-2 text-purple-400" />
                              {exp.period}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-2 text-purple-400" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {exp.description.map((item, i) => (
                          <motion.li
                            key={i}
                            className="flex items-start text-gray-300 leading-relaxed"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                          >
                            <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Proyectos Destacados
            </h2>
            <p className="text-xl text-gray-400">Algunos de mis trabajos más recientes</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500 transition-all duration-300 group overflow-hidden">
                  <div className="relative overflow-hidden">
                    <Image
                      src={`/projects/${project.image}`}
                      alt={project.title}
                      width={400}
                      height={200}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                    <CardDescription className="text-gray-400 min-h-20">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4 min-h-8">
                      {project.tech.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="bg-slate-700 text-gray-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      {project.github && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white bg-transparent"
                          onClick={() => window.open(project.github, "_blank")}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Código
                        </Button>
                      )}
                      {project.link && (
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-purple-600 to-pink-600"
                          onClick={() => window.open(project.link, "_blank")}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Visitar
                        </Button>
                      )}
                      {/* {project?.demo && (
                        <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                      )} */}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Educación */}
      <section id="educacion" className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Educación
            </h2>
            <p className="text-xl text-gray-400">Mi formación académica y certificaciones</p>

            {/* Botón para ver certificados */}
            <div className="mt-8">
              <Dialog open={certificatesModalOpen} onOpenChange={setCertificatesModalOpen}>
                <DialogTrigger asChild>
                  <Button
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                    size="lg"
                  >
                    <Award className="w-5 h-5 mr-2" />
                    Ver Certificados
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-slate-900 border-slate-700">
                  <AlertDialogHeader>
                    <DialogTitle className="text-2xl font-bold text-white mb-2">
                      Certificaciones Profesionales
                    </DialogTitle>
                    <DialogDescription className="text-gray-400">
                      Mis certificaciones y credenciales verificadas
                    </DialogDescription>
                  </AlertDialogHeader>

                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    {certificates.map((cert, index) => (
                      <motion.div
                        key={index}
                        className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden hover:border-purple-500 transition-all duration-300 group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                      >
                        <div className="relative overflow-hidden">
                          <Image
                            src={`/certificates/${cert.image}`}
                            alt={cert.title}
                            width={400}
                            height={300}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-4 right-4">
                            <Badge className="bg-green-600 text-white">
                              <Award className="w-3 h-3 mr-1" />
                              Verificado
                            </Badge>
                          </div>
                        </div>

                        <div className="p-6">
                          <div className="mb-4">
                            <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                            <p className="text-purple-400 font-semibold mb-1">{cert.issuer}</p>
                            <p className="text-gray-400 text-sm mb-2">Obtenido en {cert.date}</p>
                            <p className="text-gray-500 text-xs">ID: {cert.credentialId}</p>
                          </div>

                          <p className="text-gray-300 text-sm mb-4 leading-relaxed">{cert.description}</p>

                          <div className="space-y-3">
                            <div>
                              <p className="text-sm font-semibold text-gray-400 mb-2">Habilidades:</p>
                              <div className="flex flex-wrap gap-2">
                                {cert.skills.map((skill, i) => (
                                  <Badge key={i} variant="secondary" className="bg-slate-700 text-gray-300 text-xs">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            <div className="flex justify-center pt-2">
                              <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600 flex-1">
                                <Download className="w-3 h-3 mr-1" />
                                Descargar
                              </Button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 text-center">
                    <p className="text-gray-400 text-sm">
                      ¿Necesitas verificar alguna certificación? Contacta conmigo para más detalles.
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </motion.div>

          <div className="max-w-4xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500"></div>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="relative flex items-start mb-12 last:mb-0"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg border-4 border-slate-900"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <GraduationCap className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Floating particles around the dot */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-purple-400 rounded-full"
                        style={{
                          top: "50%",
                          left: "50%",
                          transform: `rotate(${i * 120}deg) translateY(-30px)`,
                        }}
                      />
                    ))}
                  </motion.div>
                </div>
                <div className="ml-8 flex-1">
                  <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500 transition-all duration-300 group relative">
                    {/* Arrow pointing to timeline */}
                    <div className="absolute left-0 top-8 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-slate-800 -translate-x-2"></div>

                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-2xl text-white mb-2 flex items-center">
                            {edu.title}
                          </CardTitle>
                          <CardDescription className="text-lg text-purple-400 mb-2">{edu.institution}</CardDescription>
                          <div className="flex items-center text-gray-400">
                            <Calendar className="w-4 h-4 mr-2" />
                            {edu.period}
                          </div>
                        </div>
                        {/* <div className="p-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600">
                          <Award className="w-6 h-6 text-white" />
                        </div> */}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <p className="text-gray-300">Calificación: <span className="text-purple-400">{edu.grade}</span></p>
                        <a
                          href={edu.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-400 hover:underline flex items-center space-x-1"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Ver más</span>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tecnologías */}
      <section id="tecnologias" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Tecnologías
            </h2>
            <p className="text-xl text-gray-400">Herramientas y lenguajes que domino</p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-5 bg-slate-800 mb-8">
                <TabsTrigger value="all" className="data-[state=active]:bg-purple-600">
                  Todas
                </TabsTrigger>
                <TabsTrigger value="Frontend" className="data-[state=active]:bg-purple-600">
                  Frontend
                </TabsTrigger>
                <TabsTrigger value="Backend" className="data-[state=active]:bg-purple-600">
                  Backend
                </TabsTrigger>
                <TabsTrigger value="Database" className="data-[state=active]:bg-purple-600">
                  Bases de Datos
                </TabsTrigger>
                <TabsTrigger value="Tools" className="data-[state=active]:bg-purple-600">
                  Herramientas
                </TabsTrigger>
              </TabsList>

              {["all", "Frontend", "Backend", "Database", "Tools"].map((category) => (
                <TabsContent key={category} value={category}>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {technologies
                      .filter((tech) => category === "all" || tech.category === category)
                      .map((tech, index) => (
                        <motion.div
                          key={tech.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                          viewport={{ once: true }}
                        >
                          <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500 transition-all duration-300 group">
                            <CardContent className="p-6">
                              <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center space-x-3">
                                  <span className="text-2xl">
                                    <tech.icon />
                                  </span>
                                  <div>
                                    <h3 className="text-lg font-semibold text-white">{tech.name}</h3>
                                    <p className="text-sm text-gray-400">{tech.category}</p>
                                  </div>
                                </div>
                                <Badge variant="secondary" className="bg-slate-700 text-gray-300">
                                  {tech.level}%
                                </Badge>
                              </div>
                              <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                  <span className="text-gray-400">Nivel de dominio</span>
                                  <span className="text-purple-400">{tech.level}%</span>
                                </div>
                                <Progress value={tech.level} className="h-2 bg-slate-700" />
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              ¡Hablemos!
            </h2>
            {/* <p className="text-xl text-gray-400">¿Tienes un proyecto en mente? Contactemos</p> */}
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-full bg-purple-600">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-400">Email</p>
                        <p className="text-white">pablosuarezbm@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-full bg-purple-600">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-400">Ubicación</p>
                        <p className="text-white">Gran Canaria, España</p>
                      </div>
                    </div>
                    {/* <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-full bg-purple-600">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-400">Disponibilidad</p>
                        <p className="text-white">Disponible para proyectos</p>
                      </div>
                    </div> */}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Sígueme en</h4>
                  <div className="flex space-x-4">
                    {[
                      {
                        icon: Linkedin,
                        href: "https://es.linkedin.com/in/pablosuarezbm/",
                        label: "LinkedIn",
                        color: "bg-blue-600",
                      },
                      { icon: Github, href: "https://github.com/psuarezdev", label: "GitHub", color: "bg-gray-800" },
                      { icon: Mail, href: "mailto:pablosuarezbm@gmail.com", label: "Email", color: "bg-red-600" },
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        className={`p-4 rounded-full ${social.color} hover:scale-110 transition-all duration-300 group`}
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <social.icon className="w-6 h-6 text-white" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white">Envíame un mensaje</CardTitle>
                    <CardDescription className="text-gray-400">Te responderé lo antes posible</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Nombre</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-purple-500 focus:outline-none transition-colors"
                          placeholder="Tu nombre"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-purple-500 focus:outline-none transition-colors"
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Asunto</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-purple-500 focus:outline-none transition-colors"
                        placeholder="Asunto del mensaje"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Mensaje</label>
                      <textarea
                        rows={5}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-purple-500 focus:outline-none transition-colors resize-none"
                        placeholder="Cuéntame sobre tu proyecto..."
                      />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3">
                      <Rocket className="w-5 h-5 mr-2" />
                      Enviar Mensaje
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="flex justify-center">
            <div className="text-gray-400">© {new Date().getFullYear()} Pablo Suárez. Todos los derechos reservados.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
