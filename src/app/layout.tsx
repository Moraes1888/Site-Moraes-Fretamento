"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Função para scroll suave
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Fecha o menu mobile após clicar
    setIsMobileMenuOpen(false);
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="w-full px-8 py-4 fixed top-0 left-0 z-50 bg-black/30 backdrop-blur-2xl flex items-center justify-between border-b border-white/10 shadow-2xl relative overflow-hidden">
          {/* AI Header Effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse" style={{animationDelay: '2s'}}></div>
          
          <span className="text-2xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent relative">
            Moraes Fretamento e Turismo
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-ping"></span>
          </span>
          
          {/* Menu Desktop */}
          <nav className="hidden md:block">
            <ul className="flex gap-8 text-base font-semibold items-center">
              <li><a href="#inicio" className="text-cyan-100 hover:text-cyan-300 transition-all duration-300 hover:scale-110 cursor-pointer group relative" onClick={(e) => { e.preventDefault(); scrollToSection('inicio'); }}>
                Início
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </a></li>
              <li><a href="#servicos" className="text-purple-100 hover:text-purple-300 transition-all duration-300 hover:scale-110 cursor-pointer group relative" onClick={(e) => { e.preventDefault(); scrollToSection('servicos'); }}>
                Serviços
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
              </a></li>
              <li><a href="#frotas" className="text-pink-100 hover:text-pink-300 transition-all duration-300 hover:scale-110 cursor-pointer group relative" onClick={(e) => { e.preventDefault(); scrollToSection('frotas'); }}>
                Frotas
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-400 group-hover:w-full transition-all duration-300"></span>
              </a></li>
              <li><a href="#sobre" className="text-indigo-100 hover:text-indigo-300 transition-all duration-300 hover:scale-110 cursor-pointer group relative" onClick={(e) => { e.preventDefault(); scrollToSection('sobre'); }}>
                Sobre nós
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
              </a></li>
              <li><a href="#depoimentos" className="text-yellow-100 hover:text-yellow-300 transition-all duration-300 hover:scale-110 cursor-pointer group relative" onClick={(e) => { e.preventDefault(); scrollToSection('depoimentos'); }}>
                Depoimentos
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
              </a></li>
              <li><a href="#certificacoes" className="text-emerald-100 hover:text-emerald-300 transition-all duration-300 hover:scale-110 cursor-pointer group relative" onClick={(e) => { e.preventDefault(); scrollToSection('certificacoes'); }}>
                Segurança
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
              </a></li>
              <li><a href="#orcamento" className="text-blue-100 hover:text-blue-300 transition-all duration-300 hover:scale-110 cursor-pointer group relative" onClick={(e) => { e.preventDefault(); scrollToSection('orcamento'); }}>
                Orçamento
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
              </a></li>
              <li><a href="#contato" className="text-green-100 hover:text-green-300 transition-all duration-300 hover:scale-110 cursor-pointer group relative" onClick={(e) => { e.preventDefault(); scrollToSection('contato'); }}>
                Contato
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
              </a></li>
            </ul>
          </nav>

          {/* Botão Menu Mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-50 p-2 rounded-lg bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-white rounded-full transition-all duration-300 mt-1 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-white rounded-full transition-all duration-300 mt-1 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
        </header>

        {/* Menu Mobile Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            ></div>
            
            {/* Menu Mobile */}
            <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-br from-slate-900/95 via-purple-900/95 to-indigo-900/95 backdrop-blur-2xl border-l border-white/20 shadow-2xl">
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Menu
                  </span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300"
                  >
                    <span className="text-white text-xl">×</span>
                  </button>
                </div>
                
                <nav className="space-y-4">
                  <a 
                    href="#inicio" 
                    className="block p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 text-cyan-100 hover:text-cyan-300"
                    onClick={(e) => { e.preventDefault(); scrollToSection('inicio'); }}
                  >
                    🏠 Início
                  </a>
                  <a 
                    href="#servicos" 
                    className="block p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 text-purple-100 hover:text-purple-300"
                    onClick={(e) => { e.preventDefault(); scrollToSection('servicos'); }}
                  >
                    🚌 Serviços
                  </a>
                  <a 
                    href="#frotas" 
                    className="block p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 text-pink-100 hover:text-pink-300"
                    onClick={(e) => { e.preventDefault(); scrollToSection('frotas'); }}
                  >
                    🚐 Frota
                  </a>
                  <a 
                    href="#sobre" 
                    className="block p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 text-indigo-100 hover:text-indigo-300"
                    onClick={(e) => { e.preventDefault(); scrollToSection('sobre'); }}
                  >
                    ℹ️ Sobre Nós
                  </a>
                  <a 
                    href="#depoimentos" 
                    className="block p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 text-yellow-100 hover:text-yellow-300"
                    onClick={(e) => { e.preventDefault(); scrollToSection('depoimentos'); }}
                  >
                    ⭐ Depoimentos
                  </a>
                  <a 
                    href="#certificacoes" 
                    className="block p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 text-emerald-100 hover:text-emerald-300"
                    onClick={(e) => { e.preventDefault(); scrollToSection('certificacoes'); }}
                  >
                    🛡️ Segurança
                  </a>
                  <a 
                    href="#orcamento" 
                    className="block p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 text-blue-100 hover:text-blue-300"
                    onClick={(e) => { e.preventDefault(); scrollToSection('orcamento'); }}
                  >
                    💰 Orçamento
                  </a>
                  <a 
                    href="#contato" 
                    className="block p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 text-green-100 hover:text-green-300"
                    onClick={(e) => { e.preventDefault(); scrollToSection('contato'); }}
                  >
                    📞 Contato
                  </a>
                </nav>

                {/* Contato Rápido */}
                <div className="mt-8 pt-6 border-t border-white/20">
                  <h3 className="text-sm font-semibold text-white/70 mb-3">Contato Rápido</h3>
                  <div className="space-y-2">
                    <a 
                      href="https://wa.me/5515974013939" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-2 rounded-lg bg-green-500/20 hover:bg-green-500/30 transition-all duration-300 text-green-100"
                    >
                      💬 WhatsApp
                    </a>
                    <a 
                      href="tel:+5515974013939"
                      className="flex items-center gap-2 p-2 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 transition-all duration-300 text-blue-100"
                    >
                      📞 Telefone
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <main className="pt-20">{children}</main>
        <footer className="w-full bg-gradient-to-r from-slate-900 via-purple-900 to-indigo-900 backdrop-blur-xl border-t border-white/10 mt-16 py-12 px-4 flex flex-col items-center gap-6 text-center">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <span className="font-bold text-cyan-300 text-lg">Contato:</span><br />
              <span className="text-cyan-100 text-lg font-semibold">(15) 97401-3939</span><br />
              <span className="text-cyan-100/80">contato@moraesfretamento.com.br</span>
            </div>
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <span className="font-bold text-purple-300 text-lg">Redes Sociais:</span><br />
              <a href="#" className="text-purple-100 hover:text-purple-300 transition-all duration-300 hover:scale-110 mx-2 font-semibold">Whatsapp</a>|
              <a href="https://www.instagram.com/moraesfretamentoeturismo/" target="_blank" rel="noopener noreferrer" className="text-purple-100 hover:text-purple-300 transition-all duration-300 hover:scale-110 mx-2 font-semibold">Instagram</a>
            </div>
          </div>
          <div className="text-sm text-cyan-100/60 mt-4 font-light">✨ Deus seja louvado ✨</div>
        </footer>
      </body>
    </html>
  );
}
