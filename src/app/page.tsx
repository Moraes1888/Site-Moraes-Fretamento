"use client";

import Image from "next/image";
import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";

export default function Home() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const today = new Date();
  return (
    <>
      <section id="inicio" className="w-full flex flex-col items-center justify-center min-h-[60vh] py-16 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-100 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 drop-shadow mb-4 text-center">
          <span className="bg-blue-600 text-white px-4 py-2 rounded-lg">Dicas</span> de Viagem
        </h1>
        <p className="text-lg md:text-2xl text-gray-700 mb-8 text-center max-w-2xl">
          Confira nossas recomendações em tempo real para sua próxima aventura!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
          <div className="bg-white/80 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
            <div className="text-4xl mb-3">🌴</div>
            <h3 className="text-lg font-semibold mb-2">Sugestão de Viagem</h3>
            <p className="text-gray-600 text-sm">Viagem para o litoral: aproveite o verão com conforto e segurança!</p>
          </div>
          <div className="bg-white/80 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
            <div className="text-4xl mb-3">🏞️</div>
            <h3 className="text-lg font-semibold mb-2">Sugestão de Passeio</h3>
            <p className="text-gray-600 text-sm">Passeio no parque ecológico: contato com a natureza e lazer para toda família.</p>
          </div>
          <div className="bg-white/80 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
            <div className="text-4xl mb-3">🚌</div>
            <h3 className="text-lg font-semibold mb-2">Sugestão de Excursão</h3>
            <p className="text-gray-600 text-sm">Excursão para Aparecida do Norte: fé, cultura e momentos inesquecíveis.</p>
          </div>
        </div>
      </section>

      {/* Seção de Serviços */}
      <section id="servicos" className="w-full max-w-5xl mx-auto py-16 px-4 flex flex-col items-center animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-10 text-center">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          <div className="bg-white/90 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <span className="text-5xl mb-4">🚌</span>
            <h3 className="text-xl font-semibold mb-2 text-primary">Fretamento Empresarial</h3>
            <p className="text-gray-600 text-center">Transporte seguro e confortável para empresas e colaboradores.</p>
          </div>
          <div className="bg-white/90 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <span className="text-5xl mb-4">🌄</span>
            <h3 className="text-xl font-semibold mb-2 text-primary">Turismo e Excursões</h3>
            <p className="text-gray-600 text-center">Viagens para lazer, passeios turísticos e excursões em grupo.</p>
          </div>
          <div className="bg-white/90 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <span className="text-5xl mb-4">🎒</span>
            <h3 className="text-xl font-semibold mb-2 text-primary">Viagens Escolares</h3>
            <p className="text-gray-600 text-center">Transporte especializado para escolas, alunos e eventos educacionais.</p>
          </div>
          <div className="bg-white/90 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <span className="text-5xl mb-4">🎉</span>
            <h3 className="text-xl font-semibold mb-2 text-primary">Eventos e Traslados</h3>
            <p className="text-gray-600 text-center">Traslados para eventos, festas, aeroportos e ocasiões especiais.</p>
          </div>
        </div>
      </section>

      {/* Seção de Frotas */}
      <section id="frotas" className="w-full max-w-5xl mx-auto py-16 px-4 flex flex-col items-center animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10 text-center">Nossa Frota</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          <div className="bg-white/90 rounded-2xl shadow-lg p-4 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <img src="/globe.svg" alt="Ônibus Executivo" className="w-full h-40 object-contain mb-4 rounded-xl bg-gray-100" />
            <h3 className="text-lg font-semibold mb-2 text-secondary">Ônibus Executivo</h3>
            <p className="text-gray-600 text-center">Conforto, ar-condicionado, poltronas reclináveis e Wi-Fi.</p>
          </div>
          <div className="bg-white/90 rounded-2xl shadow-lg p-4 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <img src="/window.svg" alt="Micro-ônibus" className="w-full h-40 object-contain mb-4 rounded-xl bg-gray-100" />
            <h3 className="text-lg font-semibold mb-2 text-secondary">Micro-ônibus</h3>
            <p className="text-gray-600 text-center">Ideal para grupos menores, com conforto e segurança.</p>
          </div>
          <div className="bg-white/90 rounded-2xl shadow-lg p-4 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <img src="/file.svg" alt="Van" className="w-full h-40 object-contain mb-4 rounded-xl bg-gray-100" />
            <h3 className="text-lg font-semibold mb-2 text-secondary">Van</h3>
            <p className="text-gray-600 text-center">Versatilidade para viagens rápidas e traslados urbanos.</p>
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

      {/* Seção Orçamento */}
      <section id="orcamento" className="w-full max-w-2xl mx-auto py-16 px-4 flex flex-col items-center animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">Solicite um Orçamento</h2>
        <form className="w-full bg-white/90 rounded-2xl shadow-lg p-8 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="nome" className="font-medium text-gray-700">Nome</label>
            <input id="nome" name="nome" type="text" required className="rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:ring-primary outline-none transition-all" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-medium text-gray-700">E-mail</label>
            <input id="email" name="email" type="email" required className="rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:ring-primary outline-none transition-all" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="telefone" className="font-medium text-gray-700">Telefone</label>
            <input id="telefone" name="telefone" type="tel" required className="rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:ring-primary outline-none transition-all" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="servico" className="font-medium text-gray-700">Tipo de Serviço</label>
            <select id="servico" name="servico" required className="rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:ring-primary outline-none transition-all">
              <option value="">Selecione...</option>
              <option value="fretamento">Fretamento Empresarial</option>
              <option value="turismo">Turismo e Excursões</option>
              <option value="escolar">Viagens Escolares</option>
              <option value="eventos">Eventos e Traslados</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="mensagem" className="font-medium text-gray-700">Mensagem</label>
            <textarea id="mensagem" name="mensagem" rows={4} className="rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:ring-primary outline-none transition-all" />
          </div>
          <button type="submit" className="mt-4 px-8 py-3 rounded-full bg-primary text-white font-semibold text-lg shadow-lg hover:bg-secondary transition-all self-center">Enviar Solicitação</button>
        </form>
      </section>
    </>
  );
}
