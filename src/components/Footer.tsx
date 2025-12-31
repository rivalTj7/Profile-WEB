'use client';

import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Rivaldo Tojín</span>
            <span className="text-gray-600">•</span>
            <span>Todos los derechos reservados</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span>Hecho con</span>
            <Heart className="text-red-500 fill-red-500" size={16} />
            <span>usando Next.js & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
