"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { Bot, MessageCircle, Star, Shield, Users, Clock } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  const [isAIOpen, setIsAIOpen] = React.useState(false);
  const [aiMessage, setAiMessage] = React.useState("");
  const [isTyping, setIsTyping] = React.useState(false);

  // Simular IA gerando dicas em tempo real
  React.useEffect(() => {
    const tips = [
      "🌅 Dica: Praia de Itanhaém está com clima perfeito hoje! Temperatura: 28°C",
      "🏞️ Parque Ecológico de Sorocaba: Visita ideal para famílias neste fim de semana",
      "⛪ Aparecida do Norte: Basílica com missas especiais neste domingo",
      "🎒 UNESP Sorocaba: Transporte universitário com horários otimizados",
      "🌊 Santos: Praia com ondas perfeitas para surf hoje!",
      "🏔️ Serra do Mar: Trilhas abertas com vista incrível da região",
      "🎭 Teatro Municipal: Espetáculo especial neste sábado às 20h",
      "🍕 Centro de Sorocaba: Feira gastronômica com comidas típicas"
    ];

    const interval = setInterval(() => {
      if (isAIOpen) {
        setIsTyping(true);
        setTimeout(() => {
          const randomTip = tips[Math.floor(Math.random() * tips.length)];
          setAiMessage(randomTip);
          setIsTyping(false);
        }, 1500);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [isAIOpen]);

  return (
    <>
      <section id="inicio" className="w-full flex flex-col items-center justify-center min-h-screen py-20 px-4 bg-gradient-to-br from-black via-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        {/* Advanced AI Matrix Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.4),transparent_40%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(56,189,248,0.3),transparent_40%)] animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* AI Neural Network Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(90deg,transparent_98%,rgba(56,189,248,0.3)_100%)] bg-[length:20px_20px] animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(0deg,transparent_98%,rgba(147,51,234,0.3)_100%)] bg-[length:20px_20px] animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        {/* Advanced Floating AI Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping shadow-lg shadow-cyan-400/50"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping shadow-lg shadow-purple-400/50" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping shadow-lg shadow-pink-400/50" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping shadow-lg shadow-blue-400/50" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-3/4 left-1/2 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping shadow-lg shadow-green-400/50" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/6 right-1/6 w-1 h-1 bg-yellow-400 rounded-full animate-ping shadow-lg shadow-yellow-400/50" style={{animationDelay: '5s'}}></div>
        
        {/* AI Energy Orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-cyan-500/30 to-pink-500/30 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '3s'}}></div>
        
        {/* AI Scanning Lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse" style={{animationDelay: '2s'}}></div>
        
        <div className="relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-8 text-center bg-gradient-to-r from-cyan-400 via-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl animate-pulse relative">
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white px-8 py-4 rounded-3xl shadow-2xl border border-cyan-300/50 backdrop-blur-xl relative overflow-hidden group">
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 animate-pulse"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" style={{animationDelay: '1s'}}></span>
              <span className="relative z-10">Dicas</span>
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-ping"></span>
            </span> 
            <span className="ml-6 relative">
              de Viagem
              <span className="absolute -top-2 -right-2 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></span>
              <span className="absolute -bottom-2 -left-2 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '2s'}}></span>
            </span>
            {/* AI Scanning Effect */}
            <div className="absolute -top-4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse opacity-50"></div>
            <div className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse opacity-50" style={{animationDelay: '1s'}}></div>
          </h1>
          <p className="text-xl md:text-3xl text-cyan-100 mb-12 text-center max-w-3xl font-light leading-relaxed">
            ✨ Confira nossas recomendações em tempo real para sua próxima aventura! ✨
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
                        <div className="group relative bg-white/5 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl hover:shadow-cyan-500/40 border border-white/10 hover:border-cyan-300/50 transition-all duration-700 hover:scale-105 hover:-translate-y-3 cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-7xl mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 relative">
                  🌴
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-cyan-200 group-hover:text-cyan-100 transition-colors">Sugestão de Viagem</h3>
                <p className="text-cyan-100/80 text-base leading-relaxed">Viagem para o litoral: aproveite o verão com conforto e segurança!</p>
              </div>
              
              {/* Tooltip */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50">
                <div className="bg-gradient-to-r from-cyan-900 to-blue-900 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-cyan-300/50 min-w-[300px]">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">🚐</span>
                    <h4 className="text-lg font-bold text-cyan-200">Van Rápida - Litoral</h4>
                  </div>
                  <div className="space-y-2 text-cyan-100/90 text-sm">
                    <p>📍 <strong>Destino:</strong> Praias do Litoral Paulista</p>
                    <p>⏰ <strong>Duração:</strong> 1-3 dias</p>
                    <p>👥 <strong>Capacidade:</strong> Até 15 passageiros</p>
                    <p>🎯 <strong>Dica:</strong> Melhor época: Dezembro a Março</p>
                  </div>
                </div>
                {/* Arrow */}
                <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-cyan-900 mx-auto"></div>
              </div>
            </div>
            
            <div className="group relative bg-white/5 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/30 border border-white/10 hover:border-purple-300/50 transition-all duration-700 hover:scale-105 hover:-translate-y-3 cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              <div className="relative z-10">
                <div className="text-7xl mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">🏞️</div>
                <h3 className="text-xl font-bold mb-4 text-purple-200 group-hover:text-purple-100 transition-colors">Sugestão de Passeio</h3>
                                <p className="text-purple-100/80 text-base leading-relaxed">Passeio no parque ecológico: contato com a natureza e lazer para toda família.</p>
              </div>
              
              {/* Tooltip */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50">
                <div className="bg-gradient-to-r from-purple-900 to-indigo-900 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-purple-300/50 min-w-[300px]">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">🚐</span>
                    <h4 className="text-lg font-bold text-purple-200">Van Rápida - Parque</h4>
                  </div>
                  <div className="space-y-2 text-purple-100/90 text-sm">
                    <p>📍 <strong>Destino:</strong> Parque Ecológico Municipal</p>
                    <p>⏰ <strong>Duração:</strong> 4-6 horas</p>
                    <p>👥 <strong>Capacidade:</strong> Até 15 passageiros</p>
                    <p>🎯 <strong>Dica:</strong> Ideal para famílias e grupos</p>
                  </div>
                </div>
                {/* Arrow */}
                <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-purple-900 mx-auto"></div>
              </div>
            </div>
            
            <div className="group relative bg-white/5 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl hover:shadow-pink-500/30 border border-white/10 hover:border-pink-300/50 transition-all duration-700 hover:scale-105 hover:-translate-y-3 cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 to-rose-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              <div className="relative z-10">
                <div className="text-7xl mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">🚌</div>
                <h3 className="text-xl font-bold mb-4 text-pink-200 group-hover:text-pink-100 transition-colors">Sugestão de Excursão</h3>
                                <p className="text-pink-100/80 text-base leading-relaxed">Excursão para Aparecida do Norte: fé, cultura e momentos inesquecíveis.</p>
              </div>
              
              {/* Tooltip */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50">
                <div className="bg-gradient-to-r from-pink-900 to-rose-900 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-pink-300/50 min-w-[300px]">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">🚐</span>
                    <h4 className="text-lg font-bold text-pink-200">Van Rápida - Aparecida</h4>
                  </div>
                  <div className="space-y-2 text-pink-100/90 text-sm">
                    <p>📍 <strong>Destino:</strong> Aparecida do Norte - SP</p>
                    <p>⏰ <strong>Duração:</strong> 1 dia completo</p>
                    <p>👥 <strong>Capacidade:</strong> Até 15 passageiros</p>
                    <p>🎯 <strong>Dica:</strong> Inclui visita à Basílica</p>
                  </div>
                </div>
                {/* Arrow */}
                <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-pink-900 mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Serviços */}
      <section id="servicos" className="w-full py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-black mb-16 text-center bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
            Nossos Serviços
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            <div className="group bg-white/10 backdrop-blur-xl rounded-3xl p-8 flex flex-col items-center hover:scale-105 hover:shadow-cyan-500/25 border border-white/20 hover:border-cyan-300/50 transition-all duration-500 hover:-translate-y-2">
              <span className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🚌</span>
              <h3 className="text-xl font-bold mb-4 text-cyan-200 group-hover:text-cyan-100 transition-colors text-center">Fretamento Empresarial</h3>
              <p className="text-cyan-100/80 text-center leading-relaxed">Transporte seguro e confortável para empresas e colaboradores.</p>
            </div>
            <div className="group bg-white/10 backdrop-blur-xl rounded-3xl p-8 flex flex-col items-center hover:scale-105 hover:shadow-purple-500/25 border border-white/20 hover:border-purple-300/50 transition-all duration-500 hover:-translate-y-2">
              <span className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🌄</span>
              <h3 className="text-xl font-bold mb-4 text-purple-200 group-hover:text-purple-100 transition-colors text-center">Turismo e Excursões</h3>
              <p className="text-purple-100/80 text-center leading-relaxed">Viagens para lazer, passeios turísticos e excursões em grupo.</p>
            </div>
            <div className="group relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 flex flex-col items-center hover:scale-105 hover:shadow-pink-500/25 border border-white/20 hover:border-pink-300/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer">
              <span className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🎓</span>
              <h3 className="text-xl font-bold mb-4 text-pink-200 group-hover:text-pink-100 transition-colors text-center">Transporte de Faculdades</h3>
              <p className="text-pink-100/80 text-center leading-relaxed">Transporte especializado para universidades e faculdades da região.</p>
              
              {/* Tooltip */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50">
                <div className="bg-gradient-to-r from-pink-900 to-rose-900 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-pink-300/50 min-w-[350px]">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">🚐</span>
                    <h4 className="text-lg font-bold text-pink-200">Van Universitária</h4>
                  </div>
                  <div className="space-y-2 text-pink-100/90 text-sm">
                    <p>🎓 <strong>Faculdades da Região:</strong></p>
                    <p>📍 UNESP - Sorocaba</p>
                    <p>📍 FATEC - Sorocaba</p>
                    <p>📍 UNIP - Sorocaba</p>
                    <p>📍 UNISO - Sorocaba</p>
                    <p>📍 UNICAMP - Limeira</p>
                    <p>⏰ <strong>Horários:</strong> Segunda a Sexta</p>
                    <p>👥 <strong>Capacidade:</strong> Até 15 estudantes</p>
                    <p>🎯 <strong>Dica:</strong> Pacotes mensais com desconto</p>
                  </div>
                </div>
                {/* Arrow */}
                <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-pink-900 mx-auto"></div>
              </div>
            </div>
            <div className="group bg-white/10 backdrop-blur-xl rounded-3xl p-8 flex flex-col items-center hover:scale-105 hover:shadow-indigo-500/25 border border-white/20 hover:border-indigo-300/50 transition-all duration-500 hover:-translate-y-2">
              <span className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🎉</span>
              <h3 className="text-xl font-bold mb-4 text-indigo-200 group-hover:text-indigo-100 transition-colors text-center">Eventos e Traslados</h3>
              <p className="text-indigo-100/80 text-center leading-relaxed">Traslados para eventos, festas, aeroportos e ocasiões especiais.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Frotas */}
      <section id="frotas" className="w-full py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-black mb-16 text-center bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
            Nossa Frota
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            <div className="group bg-white/10 backdrop-blur-xl rounded-3xl p-8 flex flex-col items-center hover:scale-105 hover:shadow-cyan-500/25 border border-white/20 hover:border-cyan-300/50 transition-all duration-500 hover:-translate-y-2">
              <div className="text-8xl mb-6 group-hover:scale-110 transition-transform duration-300">🚐</div>
              <h3 className="text-xl font-bold mb-4 text-cyan-200 group-hover:text-cyan-100 transition-colors text-center">Micro-ônibus</h3>
              <p className="text-cyan-100/80 text-center leading-relaxed text-base">Ideal para grupos de 15-25 pessoas. Conforto, ar-condicionado e segurança para viagens regionais.</p>
              <div className="mt-4 space-y-1 text-cyan-100/70 text-xs">
                <p>👥 <strong>Capacidade:</strong> 15-25 passageiros</p>
                <p>🎯 <strong>Ideal para:</strong> Excursões, fretamento empresarial</p>
                <p>✨ <strong>Destaque:</strong> Ar-condicionado e poltronas confortáveis</p>
              </div>
            </div>
            
            <div className="group bg-white/10 backdrop-blur-xl rounded-3xl p-8 flex flex-col items-center hover:scale-105 hover:shadow-purple-500/25 border border-white/20 hover:border-purple-300/50 transition-all duration-500 hover:-translate-y-2">
              <div className="text-8xl mb-6 group-hover:scale-110 transition-transform duration-300">🚐</div>
              <h3 className="text-xl font-bold mb-4 text-purple-200 group-hover:text-purple-100 transition-colors text-center">Van</h3>
              <p className="text-purple-100/80 text-center leading-relaxed text-base">Versatilidade para grupos menores. Perfeita para traslados urbanos e viagens rápidas.</p>
              <div className="mt-4 space-y-1 text-purple-100/70 text-xs">
                <p>👥 <strong>Capacidade:</strong> 8-15 passageiros</p>
                <p>🎯 <strong>Ideal para:</strong> Traslados, transporte universitário</p>
                <p>✨ <strong>Destaque:</strong> Agilidade e economia</p>
              </div>
            </div>

            <div className="group bg-white/10 backdrop-blur-xl rounded-3xl p-8 flex flex-col items-center hover:scale-105 hover:shadow-yellow-500/25 border border-white/20 hover:border-yellow-300/50 transition-all duration-500 hover:-translate-y-2">
              <div className="text-8xl mb-6 group-hover:scale-110 transition-transform duration-300">🚌</div>
              <h3 className="text-xl font-bold mb-4 text-yellow-200 group-hover:text-yellow-100 transition-colors text-center">Ônibus Executivo</h3>
              <p className="text-yellow-100/80 text-center leading-relaxed text-base">Máximo conforto para grupos grandes. Poltronas reclináveis, Wi-Fi e ar-condicionado.</p>
              <div className="mt-4 space-y-1 text-yellow-100/70 text-xs">
                <p>👥 <strong>Capacidade:</strong> 30-45 passageiros</p>
                <p>🎯 <strong>Ideal para:</strong> Viagens longas, eventos corporativos</p>
                <p>✨ <strong>Destaque:</strong> Wi-Fi, poltronas reclináveis</p>
              </div>
            </div>

            <div className="group bg-white/10 backdrop-blur-xl rounded-3xl p-8 flex flex-col items-center hover:scale-105 hover:shadow-green-500/25 border border-white/20 hover:border-green-300/50 transition-all duration-500 hover:-translate-y-2">
              <div className="text-8xl mb-6 group-hover:scale-110 transition-transform duration-300">🚗</div>
              <h3 className="text-xl font-bold mb-4 text-green-200 group-hover:text-green-100 transition-colors text-center">Carros Executivos</h3>
              <p className="text-green-100/80 text-center leading-relaxed text-base">Transporte VIP para executivos. Conforto premium e discrição para ocasiões especiais.</p>
              <div className="mt-4 space-y-1 text-green-100/70 text-xs">
                <p>👥 <strong>Capacidade:</strong> 4-6 passageiros</p>
                <p>🎯 <strong>Ideal para:</strong> Executivos, eventos especiais</p>
                <p>✨ <strong>Destaque:</strong> Conforto premium, discrição</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Sobre Nós */}
      <section id="sobre" className="w-full max-w-4xl mx-auto py-16 px-4 flex flex-col items-center animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-10 text-center">Sobre Nós</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-12">
          <div className="bg-white/90 rounded-2xl shadow p-6 flex flex-col items-center">
            <h3 className="text-lg font-bold text-primary mb-2">Missão</h3>
            <p className="text-gray-600 text-center">Proporcionar transporte seguro, confortável e eficiente, superando as expectativas dos nossos clientes.</p>
          </div>
          <div className="bg-white/90 rounded-2xl shadow p-6 flex flex-col items-center">
            <h3 className="text-lg font-bold text-primary mb-2">Visão</h3>
            <p className="text-gray-600 text-center">Ser referência em fretamento e turismo, reconhecida pela excelência no atendimento e inovação.</p>
          </div>
          <div className="bg-white/90 rounded-2xl shadow p-6 flex flex-col items-center">
            <h3 className="text-lg font-bold text-primary mb-2">Valores</h3>
            <p className="text-gray-600 text-center">Compromisso, respeito, ética, segurança, inovação e valorização das pessoas.</p>
          </div>
        </div>
        <div className="w-full max-w-2xl mx-auto">
          <h4 className="text-xl font-semibold text-secondary mb-4 text-center">Depoimentos</h4>
          <div className="bg-white/90 rounded-2xl shadow p-6 mb-4">
            <p className="text-gray-700 italic mb-2">“Excelente serviço, pontualidade e conforto em todas as viagens!”</p>
            <span className="text-sm text-gray-500">— Cliente Satisfeito</span>
          </div>
          <div className="bg-white/90 rounded-2xl shadow p-6">
            <p className="text-gray-700 italic mb-2">“Equipe atenciosa e veículos sempre bem cuidados. Recomendo!”</p>
            <span className="text-sm text-gray-500">— Empresa Parceira</span>
          </div>
        </div>
      </section>

      {/* Seção Depoimentos */}
      <section id="depoimentos" className="w-full py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10 animate-pulse"></div>
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-black mb-16 text-center bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent drop-shadow-2xl">
            O Que Nossos Clientes Dizem
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {/* Depoimento 1 */}
            <div className="group bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-yellow-500/25 border border-white/20 hover:border-yellow-300/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                  M
                </div>
                <div>
                  <h4 className="text-lg font-bold text-yellow-200">Maria Silva</h4>
                  <p className="text-yellow-100/70 text-sm">Empresária - Sorocaba</p>
                </div>
                <div className="ml-auto">
                  <div className="flex text-yellow-400">
                    <span className="text-xl">⭐</span>
                    <span className="text-xl">⭐</span>
                    <span className="text-xl">⭐</span>
                    <span className="text-xl">⭐</span>
                    <span className="text-xl">⭐</span>
                  </div>
                </div>
              </div>
              <p className="text-yellow-100/90 text-base leading-relaxed italic">
                &ldquo;Excelente serviço! A equipe da Moraes é muito profissional. Fizemos uma viagem para Aparecida com 15 pessoas e tudo foi perfeito. Motorista atencioso, van confortável e pontualidade total.&rdquo;
              </p>
              <div className="mt-4 pt-4 border-t border-yellow-300/20">
                <span className="text-xs text-yellow-200/70">🚐 Viagem para Aparecida - 15 passageiros</span>
              </div>
            </div>

            {/* Depoimento 2 */}
            <div className="group bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-orange-500/25 border border-white/20 hover:border-orange-300/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                  J
                </div>
                <div>
                  <h4 className="text-lg font-bold text-orange-200">João Santos</h4>
                  <p className="text-orange-100/70 text-sm">Professor - UNESP</p>
                </div>
                <div className="ml-auto">
                  <div className="flex text-orange-400">
                    <span className="text-xl">⭐</span>
                    <span className="text-xl">⭐</span>
                    <span className="text-xl">⭐</span>
                    <span className="text-xl">⭐</span>
                    <span className="text-xl">⭐</span>
                  </div>
                </div>
              </div>
              <p className="text-orange-100/90 text-base leading-relaxed italic">
                &ldquo;Transporte universitário de qualidade! Uso diariamente para ir à UNESP e nunca tive problemas. Horários pontuais e preço justo. Recomendo para todos os estudantes da região.&rdquo;
              </p>
              <div className="mt-4 pt-4 border-t border-orange-300/20">
                <span className="text-xs text-orange-200/70">🎓 Transporte universitário - Uso diário</span>
              </div>
            </div>

            {/* Depoimento 3 */}
            <div className="group bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-red-500/25 border border-white/20 hover:border-red-300/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                  A
                </div>
                <div>
                  <h4 className="text-lg font-bold text-red-200">Ana Costa</h4>
                  <p className="text-red-100/70 text-sm">Empresa - Fretamento</p>
                </div>
                <div className="ml-auto">
                  <div className="flex text-red-400">
                    <span className="text-xl">⭐</span>
                    <span className="text-xl">⭐</span>
                    <span className="text-xl">⭐</span>
                    <span className="text-xl">⭐</span>
                    <span className="text-xl">⭐</span>
                  </div>
                </div>
              </div>
              <p className="text-red-100/90 text-base leading-relaxed italic">
                &ldquo;Contratamos a Moraes para fretamento empresarial há 2 anos. Segurança, pontualidade e conforto. Nossos colaboradores sempre elogiam o serviço. Parceiro confiável!&rdquo;
              </p>
              <div className="mt-4 pt-4 border-t border-red-300/20">
                <span className="text-xs text-red-200/70">🏢 Fretamento empresarial - 2 anos de parceria</span>
              </div>
            </div>

            {/* Depoimento 4 */}
            <div className="group bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-green-500/25 border border-white/20 hover:border-green-300/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                  P
                </div>
                <div>
                  <h4 className="text-lg font-bold text-green-200">Pedro Lima</h4>
                  <p className="text-green-100/70 text-sm">Família - Turismo</p>
                </div>
                <div className="ml-auto">
                  <div className="flex text-green-400">
                    <span className="text-xl">⭐</span>
                    <span className="text-xl">⭐</span>
                    <span className="text-xl">⭐</span>
                    <span className="text-xl">⭐</span>
                    <span className="text-xl">⭐</span>
                  </div>
                </div>
              </div>
              <p className="text-green-100/90 text-base leading-relaxed italic">
                &ldquo;Fizemos uma excursão para o litoral com a família toda. Van confortável, ar-condicionado funcionando perfeitamente e motorista muito educado. Viagem inesquecível!&rdquo;
              </p>
              <div className="mt-4 pt-4 border-t border-green-300/20">
                <span className="text-xs text-green-200/70">🌊 Excursão familiar - Litoral Paulista</span>
              </div>
            </div>

            {/* Depoimento 5 */}
            <div className="group bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-blue-500/25 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                  C
                </div>
                <div>
                  <h4 className="text-lg font-bold text-blue-200">Carlos Oliveira</h4>
                  <p className="text-blue-100/70 text-sm">Eventos - Traslado</p>
                </div>
                <div className="ml-auto">
                  <div className="flex text-blue-400">
                    <span className="text-xl">⭐</span>
                    <span className="text-xl">⭐</span>
                    <span className="text-xl">⭐</span>
                    <span className="text-xl">⭐</span>
                    <span className="text-xl">⭐</span>
                  </div>
                </div>
              </div>
              <p className="text-blue-100/90 text-base leading-relaxed italic">
                &ldquo;Contratamos para traslado de um evento corporativo. Pontualidade impecável, van limpa e motorista profissional. Todos os participantes ficaram satisfeitos!&rdquo;
              </p>
              <div className="mt-4 pt-4 border-t border-blue-300/20">
                <span className="text-xs text-blue-200/70">🎉 Traslado corporativo - Evento empresarial</span>
              </div>
            </div>

            {/* Depoimento 6 */}
            <div className="group bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/25 border border-white/20 hover:border-purple-300/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                  L
                </div>
                <div>
                  <h4 className="text-lg font-bold text-purple-200">Lucia Ferreira</h4>
                  <p className="text-purple-100/70 text-sm">Estudante - UNISO</p>
                </div>
                <div className="ml-auto">
                  <div className="flex text-purple-400">
                    <span className="text-xl">⭐</span>
                    <span className="text-xl">⭐</span>
                    <span className="text-xl">⭐</span>
                    <span className="text-xl">⭐</span>
                    <span className="text-xl">⭐</span>
                  </div>
                </div>
              </div>
              <p className="text-purple-100/90 text-base leading-relaxed italic">
                &ldquo;Uso o transporte para a UNISO há 6 meses. Preço acessível, horários que combinam com minhas aulas e motorista sempre muito atencioso. Recomendo para todos!&rdquo;
              </p>
              <div className="mt-4 pt-4 border-t border-purple-300/20">
                <span className="text-xs text-purple-200/70">🎓 Transporte universitário - UNISO</span>
              </div>
            </div>

            {/* Depoimento 7 - Ônibus Executivo */}
            <div className="group bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-yellow-500/25 border border-white/20 hover:border-yellow-300/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                  R
                </div>
                <div>
                  <h4 className="text-lg font-bold text-yellow-200">Roberto Almeida</h4>
                  <p className="text-yellow-100/70 text-sm">Diretor - Empresa</p>
                </div>
                <div className="ml-auto">
                  <div className="flex text-yellow-400">
                    <span className="text-xl">⭐</span>
                    <span className="text-xl">⭐</span>
                    <span className="text-xl">⭐</span>
                    <span className="text-xl">⭐</span>
                    <span className="text-xl">⭐</span>
                  </div>
                </div>
              </div>
              <p className="text-yellow-100/90 text-base leading-relaxed italic">
                &ldquo;Contratamos o ônibus executivo para um evento corporativo com 40 pessoas. Wi-Fi funcionando perfeitamente, poltronas confortáveis e motorista muito profissional!&rdquo;
              </p>
              <div className="mt-4 pt-4 border-t border-yellow-300/20">
                <span className="text-xs text-yellow-200/70">🚌 Ônibus Executivo - Evento corporativo</span>
              </div>
            </div>

            {/* Depoimento 8 - Carro Executivo */}
            <div className="group bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-green-500/25 border border-white/20 hover:border-green-300/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                  S
                </div>
                <div>
                  <h4 className="text-lg font-bold text-green-200">Silvia Costa</h4>
                  <p className="text-green-100/70 text-sm">Executiva - Consultoria</p>
                </div>
                <div className="ml-auto">
                  <div className="flex text-green-400">
                    <span className="text-xl">⭐</span>
                    <span className="text-xl">⭐</span>
                    <span className="text-xl">⭐</span>
                    <span className="text-xl">⭐</span>
                    <span className="text-xl">⭐</span>
                  </div>
                </div>
              </div>
              <p className="text-green-100/90 text-base leading-relaxed italic">
                &ldquo;Carro executivo impecável! Conforto premium, motorista discreto e pontual. Perfeito para reuniões importantes e eventos especiais. Recomendo!&rdquo;
              </p>
              <div className="mt-4 pt-4 border-t border-green-300/20">
                <span className="text-xs text-green-200/70">🚗 Carro Executivo - Eventos especiais</span>
              </div>
            </div>
          </div>

          {/* Estatísticas */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-yellow-100/80">Clientes Satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">1000+</div>
              <div className="text-orange-100/80">Viagens Realizadas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-400 mb-2">5.0</div>
              <div className="text-red-100/80">Avaliação Média</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-green-100/80">Suporte Disponível</div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Certificações e Segurança */}
      <section id="certificacoes" className="w-full py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 animate-pulse"></div>
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-black mb-16 text-center bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-2xl">
            Segurança e Certificações
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full mb-16">
            {/* Certificação 1 */}
            <div className="group bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-emerald-500/25 border border-white/20 hover:border-emerald-300/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 text-center">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🛡️</div>
              <h3 className="text-xl font-bold mb-4 text-emerald-200 group-hover:text-emerald-100 transition-colors">Seguro Completo</h3>
              <p className="text-emerald-100/80 text-sm leading-relaxed">Cobertura total para passageiros e veículos em todas as viagens</p>
              <div className="mt-4">
                <span className="inline-block px-3 py-1 bg-emerald-500/20 rounded-full text-emerald-200 text-xs font-semibold">Vigente</span>
              </div>
            </div>

            {/* Certificação 2 */}
            <div className="group bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-teal-500/25 border border-white/20 hover:border-teal-300/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 text-center">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">📋</div>
              <h3 className="text-xl font-bold mb-4 text-teal-200 group-hover:text-teal-100 transition-colors">Documentação</h3>
              <p className="text-teal-100/80 text-sm leading-relaxed">Todos os documentos em dia: licenças, autorizações e certificados</p>
              <div className="mt-4">
                <span className="inline-block px-3 py-1 bg-teal-500/20 rounded-full text-teal-200 text-xs font-semibold">Regularizada</span>
              </div>
            </div>

            {/* Certificação 3 */}
            <div className="group bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-cyan-500/25 border border-white/20 hover:border-cyan-300/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 text-center">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">👨‍💼</div>
              <h3 className="text-xl font-bold mb-4 text-cyan-200 group-hover:text-cyan-100 transition-colors">Motoristas</h3>
              <p className="text-cyan-100/80 text-sm leading-relaxed">Profissionais habilitados e experientes com treinamento contínuo</p>
              <div className="mt-4">
                <span className="inline-block px-3 py-1 bg-cyan-500/20 rounded-full text-cyan-200 text-xs font-semibold">Qualificados</span>
              </div>
            </div>

            {/* Certificação 4 */}
            <div className="group bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-blue-500/25 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 text-center">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🚐</div>
              <h3 className="text-xl font-bold mb-4 text-blue-200 group-hover:text-blue-100 transition-colors">Frota Moderna</h3>
              <p className="text-blue-100/80 text-sm leading-relaxed">Veículos novos e bem mantidos com inspeção regular</p>
              <div className="mt-4">
                <span className="inline-block px-3 py-1 bg-blue-500/20 rounded-full text-blue-200 text-xs font-semibold">Atualizada</span>
              </div>
            </div>
          </div>

          {/* Badges de Segurança */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-xl rounded-3xl p-8 border border-emerald-300/30 text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-emerald-200 mb-2">5 Anos de Experiência</h3>
              <p className="text-emerald-100/80 text-sm">Atuando na região com excelência e confiança</p>
            </div>
            
            <div className="bg-gradient-to-r from-teal-500/20 to-cyan-500/20 backdrop-blur-xl rounded-3xl p-8 border border-teal-300/30 text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-bold text-teal-200 mb-2">100% de Satisfação</h3>
              <p className="text-teal-100/80 text-sm">Clientes sempre satisfeitos com nossos serviços</p>
            </div>
            
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-xl rounded-3xl p-8 border border-cyan-300/30 text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-cyan-200 mb-2">Segurança Garantida</h3>
              <p className="text-cyan-100/80 text-sm">Compromisso total com a segurança dos passageiros</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Contato */}
      <section id="contato" className="w-full py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 animate-pulse"></div>
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-green-500/20 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-black mb-16 text-center bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
            Entre em Contato
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full mb-16">
            {/* WhatsApp */}
            <div className="group bg-white/10 backdrop-blur-xl rounded-3xl p-8 flex flex-col items-center hover:scale-105 hover:shadow-green-500/25 border border-white/20 hover:border-green-300/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer">
              <div className="text-8xl mb-6 group-hover:scale-110 transition-transform duration-300">💬</div>
              <h3 className="text-2xl font-bold mb-4 text-green-200 group-hover:text-green-100 transition-colors text-center">WhatsApp</h3>
              <p className="text-green-100/80 text-center leading-relaxed text-lg mb-6">Atendimento rápido e direto</p>
              <a href="https://wa.me/5515974013939" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-green-500/50 hover:scale-105 transition-all duration-300 border-2 border-green-400">
                📱 (15) 97401-3939
              </a>
            </div>
            
            {/* Instagram */}
            <div className="group bg-white/10 backdrop-blur-xl rounded-3xl p-8 flex flex-col items-center hover:scale-105 hover:shadow-purple-500/25 border border-white/20 hover:border-purple-300/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer">
              <div className="text-8xl mb-6 group-hover:scale-110 transition-transform duration-300">📸</div>
              <h3 className="text-2xl font-bold mb-4 text-purple-200 group-hover:text-purple-100 transition-colors text-center">Instagram</h3>
              <p className="text-purple-100/80 text-center leading-relaxed text-lg mb-6">Siga nossas viagens e novidades</p>
              <a href="https://www.instagram.com/moraesfretamentoeturismo/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 border-2 border-purple-400">
                📸 @moraesfretamentoeturismo
              </a>
            </div>
          </div>
          
          {/* Informações Adicionais */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 max-w-2xl">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-cyan-200 mb-6">Outras Formas de Contato</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-2">📞</div>
                  <p className="text-cyan-100 font-semibold">Telefone</p>
                  <p className="text-cyan-100/80">(15) 97401-3939</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">📧</div>
                  <p className="text-cyan-100 font-semibold">E-mail</p>
                  <p className="text-cyan-100/80">contato@moraesfretamento.com.br</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Orçamento */}
      <section id="orcamento" className="w-full py-20 px-4 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl">
              Solicite um Orçamento
            </h2>
            <p className="text-xl text-blue-200/80 max-w-2xl mx-auto">
              Preencha o formulário abaixo e receba um orçamento personalizado para sua viagem
            </p>
          </div>

          <Card className="bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl">
            <CardContent className="p-8">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="nome" className="text-blue-200 font-bold">
                    Nome Completo
                  </Label>
                  <Input
                    id="nome"
                    name="nome"
                    type="text"
                    required
                    placeholder="Seu nome completo"
                    className="bg-white/10 border-white/30 text-white placeholder-white/50 focus:ring-blue-300"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-blue-200 font-bold">
                    E-mail
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="seu@email.com"
                    className="bg-white/10 border-white/30 text-white placeholder-white/50 focus:ring-blue-300"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefone" className="text-blue-200 font-bold">
                    Telefone
                  </Label>
                  <Input
                    id="telefone"
                    name="telefone"
                    type="tel"
                    required
                    placeholder="(15) 99999-9999"
                    className="bg-white/10 border-white/30 text-white placeholder-white/50 focus:ring-blue-300"
                  />
                </div>

                                  <div className="space-y-2">
                    <Label htmlFor="servico" className="text-blue-200 font-bold">
                      Tipo de Serviço
                    </Label>
                    <select 
                      id="servico" 
                      name="servico" 
                      required 
                      className="flex h-10 w-full rounded-md border border-white/30 bg-white/10 px-3 py-2 text-sm text-white ring-offset-background placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Selecione o serviço</option>
                      <option value="fretamento">Fretamento Empresarial</option>
                      <option value="turismo">Turismo e Excursões</option>
                      <option value="faculdades">Transporte de Faculdades</option>
                      <option value="eventos">Eventos e Translados</option>
                    </select>
                  </div>

                <div className="space-y-2">
                  <Label htmlFor="data" className="text-blue-200 font-bold">
                    Data da Viagem
                  </Label>
                  <Input
                    id="data"
                    name="data"
                    type="date"
                    required
                    className="bg-white/10 border-white/30 text-white focus:ring-blue-300"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="horario" className="text-blue-200 font-bold">
                    Horário
                  </Label>
                  <Input
                    id="horario"
                    name="horario"
                    type="time"
                    required
                    className="bg-white/10 border-white/30 text-white focus:ring-blue-300"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="origem" className="text-blue-200 font-bold">
                    Origem
                  </Label>
                  <Input
                    id="origem"
                    name="origem"
                    type="text"
                    placeholder="Cidade de origem"
                    className="bg-white/10 border-white/30 text-white placeholder-white/50 focus:ring-blue-300"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="destino" className="text-blue-200 font-bold">
                    Destino
                  </Label>
                  <Input
                    id="destino"
                    name="destino"
                    type="text"
                    placeholder="Cidade de destino"
                    className="bg-white/10 border-white/30 text-white placeholder-white/50 focus:ring-blue-300"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="passageiros" className="text-blue-200 font-bold">
                    Número de Passageiros
                  </Label>
                  <Input
                    id="passageiros"
                    name="passageiros"
                    type="number"
                    placeholder="Quantidade de pessoas"
                    min="1"
                    className="bg-white/10 border-white/30 text-white placeholder-white/50 focus:ring-blue-300"
                  />
                </div>

                                  <div className="space-y-2">
                    <Label htmlFor="veiculo" className="text-blue-200 font-bold">
                      Tipo de Veículo
                    </Label>
                    <select 
                      id="veiculo" 
                      name="veiculo" 
                      required 
                      className="flex h-10 w-full rounded-md border border-white/30 bg-white/10 px-3 py-2 text-sm text-white ring-offset-background placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Selecione o veículo</option>
                      <option value="micro-onibus">🚐 Micro-ônibus (15-25 pessoas)</option>
                      <option value="van">🚐 Van (8-15 pessoas)</option>
                      <option value="onibus-executivo">🚌 Ônibus Executivo (30-45 pessoas)</option>
                      <option value="carro-executivo">🚗 Carro Executivo (4-6 pessoas)</option>
                    </select>
                  </div>

                <div className="md:col-span-2 space-y-2">
                  <Label htmlFor="mensagem" className="text-blue-200 font-bold">
                    Mensagem
                  </Label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    rows={4}
                    placeholder="Conte-nos sobre sua viagem..."
                    className="bg-white/10 border-white/30 text-white placeholder-white/50 focus:ring-blue-300 resize-none"
                  />
                </div>

                <div className="md:col-span-2 text-center">
                  <Button
                    type="submit"
                    className="mt-6 px-12 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-xl shadow-2xl hover:shadow-3xl hover:scale-105 hover:bg-gradient-to-r hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 border-2 border-blue-400"
                  >
                    📧 Enviar Solicitação
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* WhatsApp Flutuante - Design Moderno com shadcn/ui */}
      <div className="fixed bottom-6 left-6 z-50">
        <Button
          asChild
          size="lg"
          className="bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 hover:from-green-600 hover:via-emerald-600 hover:to-green-700 border-2 border-green-400 shadow-2xl hover:shadow-green-500/50 transition-all duration-500 hover:scale-110 transform hover:-translate-y-2 rounded-2xl p-3 h-auto"
        >
          <a
            href="https://wa.me/5515974013939?text=Olá! Gostaria de solicitar um orçamento para fretamento."
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
          {/* Efeitos de Fundo */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/30 via-emerald-400/30 to-green-400/30 animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(34,197,94,0.4),transparent_50%)] animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(16,185,129,0.3),transparent_50%)] animate-pulse" style={{animationDelay: '1s'}}></div>
          
          {/* Linhas de Energia */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-pulse" style={{animationDelay: '2s'}}></div>
          
          {/* Conteúdo Principal */}
          <div className="relative z-10 flex items-center justify-center">
            <svg className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
          </div>
          
          {/* Indicadores de Status */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping shadow-lg shadow-green-400/50"></div>
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-emerald-400 rounded-full animate-ping shadow-lg shadow-emerald-400/50" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 -right-2 w-1.5 h-1.5 bg-green-300 rounded-full animate-ping shadow-lg shadow-green-300/50" style={{animationDelay: '2s'}}></div>
          
          {/* Efeito de Brilho */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          
                      {/* Tooltip Moderno */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
              <div className="bg-gradient-to-r from-green-900/95 to-emerald-900/95 backdrop-blur-xl rounded-2xl px-4 py-3 shadow-2xl border border-green-300/30">
                <div className="flex items-center gap-2">
                  <span className="text-green-400">💬</span>
                  <span className="text-white font-medium text-sm">Fale conosco no WhatsApp</span>
                </div>
                <div className="text-xs text-green-200/70 mt-1">Resposta em até 5 minutos</div>
              </div>
              <div className="w-0 h-0 border-l-6 border-r-6 border-t-6 border-transparent border-t-green-900/95 mx-auto"></div>
            </div>
          </a>
        </Button>
        </div>

      {/* IA Flutuante - Dicas em Tempo Real */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Botão da IA - Design Moderno */}
        <button
          onClick={() => setIsAIOpen(!isAIOpen)}
          className="group relative bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 p-3 rounded-2xl shadow-2xl hover:shadow-emerald-500/50 transition-all duration-500 hover:scale-110 border-2 border-emerald-300/50 backdrop-blur-xl overflow-hidden transform hover:-translate-y-2"
        >
          {/* Efeitos de Fundo */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/30 via-cyan-400/30 to-blue-400/30 animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.4),transparent_50%)] animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(6,182,212,0.3),transparent_50%)] animate-pulse" style={{animationDelay: '1s'}}></div>
          
          {/* Linhas de Energia */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" style={{animationDelay: '2s'}}></div>
          
          {/* Conteúdo Principal */}
          <div className="relative z-10 flex items-center justify-center">
            <div className="text-3xl group-hover:scale-110 transition-transform duration-300">🤖</div>
          </div>
          
          {/* Indicadores de Status */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-ping shadow-lg shadow-emerald-400/50"></div>
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-cyan-400 rounded-full animate-ping shadow-lg shadow-cyan-400/50" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 -right-2 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping shadow-lg shadow-blue-400/50" style={{animationDelay: '2s'}}></div>
          
          {/* Efeito de Brilho */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
        </button>

        {/* Chat da IA - Design Moderno */}
        {isAIOpen && (
          <div className="absolute bottom-16 right-0 w-96 bg-gradient-to-br from-slate-900/95 via-emerald-900/95 to-cyan-900/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-emerald-300/30 p-8 animate-in slide-in-from-bottom-5 duration-300">
            {/* Header do Chat */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <div className="text-3xl">🤖</div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-ping shadow-lg shadow-emerald-400/50"></div>
              </div>
              <div className="flex-1">
                <h3 className="text-emerald-200 font-bold text-lg">IA de Viagens</h3>
                <p className="text-emerald-100/70 text-sm">Dicas inteligentes em tempo real</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-emerald-300/70">Online</span>
              </div>
            </div>
            
            {/* Área de Mensagens */}
            <div className="space-y-4 mb-6">
              {isTyping ? (
                <div className="flex items-center gap-3 text-emerald-200">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                  <span className="text-sm font-medium">IA analisando...</span>
                </div>
              ) : aiMessage ? (
                <div className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 backdrop-blur-xl rounded-2xl p-4 border border-emerald-300/30">
                  <div className="flex items-start gap-3">
                    <div className="text-lg">💡</div>
                    <div className="flex-1">
                      <p className="text-emerald-100 text-sm leading-relaxed font-medium">{aiMessage}</p>
                      <div className="flex items-center gap-3 mt-3">
                        <span className="text-xs text-emerald-200/70 bg-emerald-500/20 px-2 py-1 rounded-full">📍 Próximo</span>
                        <span className="text-xs text-cyan-200/70 bg-cyan-500/20 px-2 py-1 rounded-full">🕐 Tempo real</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center text-emerald-200/70 text-sm bg-emerald-500/10 rounded-xl p-4">
                  <div className="text-2xl mb-2">🤖</div>
                  <p className="font-medium">Olá! Sou sua IA de viagens.</p>
                  <p className="text-xs mt-1">Aguarde dicas inteligentes em tempo real...</p>
                </div>
              )}
            </div>

            {/* Botões de Categoria */}
            <div className="pt-4 border-t border-emerald-300/20">
              <h4 className="text-xs font-bold text-emerald-200 mb-3 uppercase tracking-wider">Categorias</h4>
              <div className="grid grid-cols-2 gap-2">
                <button className="px-3 py-2 bg-emerald-500/20 hover:bg-emerald-500/30 rounded-lg text-emerald-200 text-xs font-medium transition-all duration-200 hover:scale-105">
                  🌊 Praias
                </button>
                <button className="px-3 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 rounded-lg text-cyan-200 text-xs font-medium transition-all duration-200 hover:scale-105">
                  🏔️ Montanhas
                </button>
                <button className="px-3 py-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg text-blue-200 text-xs font-medium transition-all duration-200 hover:scale-105">
                  🎒 Faculdades
                </button>
                <button className="px-3 py-2 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg text-purple-200 text-xs font-medium transition-all duration-200 hover:scale-105">
                  ⛪ Religioso
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
