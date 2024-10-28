"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, X, Monitor, Gauge, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import GameImage from "../assets/game2.jpg";
import GolfImage from "../assets/golf.jpg";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-800 text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Datacenter Gaming</span>
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="#features" className="hover:text-blue-300">
              Features
            </Link>
            <Link href="#about" className="hover:text-blue-300">
              About
            </Link>
            <Link href="#contact" className="hover:text-blue-300">
              Contact
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
              Features
            </Link>
            <Link href="#about" className="block py-2 hover:text-blue-300">
              About
            </Link>
            <Link href="#contact" className="block py-2 hover:text-blue-300">
              Contact
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
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Experience Golf Like Never Before</h1>
            <p className="text-xl mb-8">Datacenter Gaming presents the most immersive golf simulation ever created</p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Pre-order Now</Button>
          </div>
        </section>

        <section id="features" className="py-28">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Game Features
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Monitor className="h-16 w-16 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-2">
                  Realistic Graphics
                </h3>
                <p>
                  Experience stunning, lifelike golf courses from around the
                  world
                </p>
              </div>
              <div className="text-center">
                <Gauge className="h-16 w-16 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-2">Advanced Physics</h3>
                <p>Feel every swing with our state-of-the-art physics engine</p>
              </div>
              <div className="text-center">
                <Users className="h-16 w-16 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-2">
                  Multiplayer Tournaments
                </h3>
                <p>
                  Compete with players worldwide in exciting online tournaments
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
                <h2 className="text-3xl font-bold mb-4">About Our Golf Game</h2>
                <p className="mb-4">
                  Datacenter Gaming&apos;s latest creation brings the thrill of golf
                  right to your living room. With cutting-edge graphics,
                  realistic physics, and an immersive multiplayer experience,
                  our golf game sets a new standard in sports simulation.
                </p>
                <p>
                  Whether you&apos;re a seasoned pro or new to the blue, our game
                  offers something for everyone. Practice your swing, compete in
                  tournaments, or just enjoy a relaxing round with friends.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-28">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Stay Updated</h2>
            <p className="mb-8">
              Sign up for our newsletter to receive the latest news and
              exclusive offers
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow"
                />
                <Button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Subscribe
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
                <span className="text-lg font-semibold">Datacenter Gaming</span>
              </Link>
            </div>
            <nav className="flex flex-wrap justify-center md:justify-end gap-4">
              <Link href="#" className="hover:text-blue-300">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-blue-300">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-blue-300">
                Contact Us
              </Link>
            </nav>
          </div>
          <div className="mt-8 text-center text-sm">
            © {new Date().getFullYear()} Datacenter Gaming. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
