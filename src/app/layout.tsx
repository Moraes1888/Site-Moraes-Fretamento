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
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="w-full px-6 py-2 fixed top-0 left-0 z-10 bg-white/80 backdrop-blur-md flex items-center justify-between shadow-md">
          <span className="text-xl font-bold text-gray-800">Moraes Fretamento e Turismo</span>
          <nav>
            <ul className="flex gap-6 text-base font-medium items-center">
              <li><a href="#inicio" className="transition-colors hover:text-primary">Início</a></li>
              <li><a href="#servicos" className="transition-colors hover:text-primary">Serviços</a></li>
              <li><a href="#frotas" className="transition-colors hover:text-primary">Frotas</a></li>
              <li><a href="#sobre" className="transition-colors hover:text-primary">Sobre nós</a></li>
              <li><a href="#orcamento" className="transition-colors hover:text-primary">Orçamento</a></li>
              <li><a href="#contato" className="transition-colors hover:text-primary">Contato</a></li>
            </ul>
          </nav>
        </header>
        <main className="pt-20">{children}</main>
        <footer className="w-full bg-white/80 backdrop-blur-md border-t border-primary/20 mt-16 py-8 px-4 flex flex-col items-center gap-4 text-center text-gray-700">
          <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-center justify-center">
            <div>
              <span className="font-semibold text-primary">Contato:</span><br />
              (15) 97401-3939<br />
              contato@moraesfretamento.com.br
            </div>
            <div>
              <span className="font-semibold text-primary">Redes Sociais:</span><br />
              <a href="#" className="hover:text-secondary transition-colors mx-1">Whatsapp</a>|
              <a href="https://www.instagram.com/moraesfretamentoeturismo/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors mx-1">Instagram</a>
            </div>
          </div>
          <div className="text-xs text-gray-500 mt-2">Deus seja louvado</div>
        </footer>
      </body>
    </html>
  );
}
