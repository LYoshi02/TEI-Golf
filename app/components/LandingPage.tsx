"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, X, Sparkles, Scale3D, UsersRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import LogoDataCenterGaming from "../assets/logo_datacenter_gaming2.png";
import GameImage from "../assets/game2.jpg";
import GolfImage from "../assets/golf2.png";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-800 text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div>
              <Image
                src={LogoDataCenterGaming}
                height={40}
                alt="Logo Datacenter Gaming"
              />
            </div>
            <span className="text-xl font-bold">Datacenter Gaming</span>
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="#features" className="hover:text-blue-300">
              Características
            </Link>
            <Link href="#about" className="hover:text-blue-300">
              Sobre el Juego
            </Link>
            <Link href="#contact" className="hover:text-blue-300">
              Novedades
            </Link>
          </nav>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden bg-blue-700 p-4">
            <Link href="#features" className="block py-2 hover:text-blue-300">
              Características
            </Link>
            <Link href="#about" className="block py-2 hover:text-blue-300">
              Sobre el Juego
            </Link>
            <Link href="#contact" className="block py-2 hover:text-blue-300">
              Novedades
            </Link>
          </nav>
        )}
      </header>

      <main className="flex-grow">
        <section className="relative bg-blue-100 py-52 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={GameImage}
              className="blur-sm grayscale-[80%]"
              alt="Gaming setup"
              layout="fill"
              objectFit="cover"
              priority
            />
            <div className="absolute inset-0 bg-slate-950 opacity-70"></div>
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Experimentá el Golf Como Nunca Antes
            </h1>
            <p className="text-xl mb-8">
              Datacenter Gaming presenta <b>Golfito Elemental</b>, un nuevo
              videojuego, una nueva experiencia
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Pre-ordená Ahora
            </Button>
          </div>
        </section>

        <section id="features" className="py-28">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Características
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Sparkles className="h-16 w-16 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-2">
                  Estilo Visual Atractivo
                </h3>
                <p>
                  Disfruta de un mundo vibrante y estilizado en low-poly que
                  combina simplicidad y belleza
                </p>
              </div>
              <div className="text-center">
                <Scale3D className="h-16 w-16 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-2">
                  Físicas Realistas
                </h3>
                <p>
                  Experimentá una mecánica de golf con físicas equilibradas que
                  hacen que cada golpe sea emocionante y desafiante
                </p>
              </div>
              <div className="text-center">
                <UsersRound className="h-16 w-16 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-2">
                  Modo Casual y Competitivo
                </h3>
                <p>
                  Alterná entre un modo casual, ideal para disfrutar con amigos,
                  y un modo competitivo que desafía a los jugadores
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-blue-50 py-28">
          <div className="container mx-auto px-4">
            <div className="md:flex items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image
                  src={GolfImage}
                  alt="Golf Game Screenshot"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h2 className="text-3xl font-bold mb-4">Sobre el Juego</h2>
                <p className="mb-4">
                  Golfito Elemental es un videojuego de minigolf acerca de la
                  autosuperación e ingenio, donde el jugador deberá sortear
                  obstáculos haciendo uso de los elementos de fuego y agua para
                  poder superar niveles cada vez más desafiantes, cuyas
                  victorias son cada vez más gratificantes.
                </p>
                <p>
                  El desafío se presenta en forma de rompecabezas, donde la
                  experimentación de las físicas de la pelota y los distintos
                  elementos entre sí será lo que lleve al jugador a la victoria.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-28">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Mantente Actualizado</h2>
            <p className="mb-8">
              Suscribite a nuestro boletín para recibir las últimas noticias y
              ofertas exclusivas.
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex gap-4">
                <Input
                  type="email"
                  placeholder="Ingresá tu email"
                  className="flex-grow"
                />
                <Button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Suscribirse
                </Button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-blue-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="md:flex justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link href="/" className="flex items-center space-x-2">
                <div>
                  <Image
                    src={LogoDataCenterGaming}
                    height={40}
                    alt="Logo Datacenter Gaming"
                  />
                </div>
                <span className="text-lg font-semibold">Datacenter Gaming</span>
              </Link>
            </div>
            <nav className="flex flex-wrap justify-center md:justify-end gap-4">
              <Link href="#" className="hover:text-blue-300">
                Política de privacidad
              </Link>
              <Link href="#" className="hover:text-blue-300">
                Terminos del Servicio
              </Link>
              <Link href="#" className="hover:text-blue-300">
                Contacto
              </Link>
            </nav>
          </div>
          <div className="mt-8 text-center text-sm">
            © {new Date().getFullYear()} Datacenter Gaming. Todos los derechos
            reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
