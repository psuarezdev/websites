import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pablo Suárez - Desarrollador Full Stack',
  description:
    'Portfolio profesional de Pablo Suárez, desarrollador de software especializado en soluciones escalables y eficientes.',
  keywords: 'Pablo Suárez, desarrollador, full stack, React, TypeScript, Node.js, Gran Canaria',
  authors: [{ name: 'Pablo Suárez' }],
  openGraph: {
    title: 'Pablo Suárez - Desarrollador Full Stack',
    description:
      'Portfolio profesional de Pablo Suárez, desarrollador de software especializado en soluciones escalables y eficientes.',
    type: 'website',
    locale: 'es_ES'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div lang="es" className="scroll-smooth">
      {children}
    </div>
  );
}
