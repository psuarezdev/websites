import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Separator } from './ui/separator';

const CERTIFICATES = [
  {
    id: "UC-f75910f3-d6ff-4c03-b4b5-0560abaef75f",
    title: "Master en React, Express, MongoDB y JWT",
    duration: "38 Horas"
  },
  {
    id: "UC-335f5741-d131-4137-9d48-4cb78b493651",
    title: "Angular de cero a experto",
    duration: "45 Horas"
  },
  {
    id: "ovhxC5AE",
    title: "Profundizando en Next.js",
    duration: "7 Horas",
  },
  {
    id: "tnW0HpPq",
    title: "Curso de Django",
    duration: "20 Horas"
  },
  {
    id: "cBB5nJDt",
    title: "Curso de .NET Framework",
    duration: "10 Horas",
  },
  // {
  //   id: "UC-b1a56767-4754-4d6e-9620-e627d94d5089",
  //   title: "Spring Framework 6 & Spring Boot 3 desde cero a experto",
  //   duration: 81
  // },
  {
    id: "yfkS73Y7",
    title: "SQL Server desde Cero",
    duration: "8 Horas"
  }
];

const Certificate = () => (
  <svg
    className="size-7"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M15 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
    <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5"></path>
    <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73"></path>
    <path d="M6 9l12 0"></path>
    <path d="M6 12l3 0"></path>
    <path d="M6 15l2 0"></path>
  </svg>
);

export default function Certificates() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={() => setOpen(!open)}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={() => setOpen(true)}>
          <h3 className="flex items-center gap-1.5 text-xl font-bold text-yellow-400">
            <Certificate /> Certificaciones
          </h3>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-screen overflow-y-scroll md:overflow-auto" >
        <DialogHeader>
          <DialogTitle className="mb-5">
            <span className="flex items-center gap-1.5 text-xl font-bold mb-2">
              <Certificate /> Certificados
            </span>
            <Separator />
          </DialogTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {CERTIFICATES.map(({ id, title, duration }) => (
              <article key={`certificate-${id}`} className="transition duration-500 transform hover:scale-105">
                <a href={`/certificates/${id}.webp`} target="_blank" rel="noopener noreferrer">
                  <img
                    className="rounded-lg w-full aspect-[4/3] opacity-90 border border-gray-500 dark:border-gray-400"
                    src={`/certificates/${id}.webp`}
                    alt={title}
                  />
                </a>
                <span className="inline-block p-0 mt-1.5 text-sm text-gray-600/80 dark:text-white/80">
                  Duración: {duration}
                </span>
              </article>
            ))}
          </div>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>Cerrar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

