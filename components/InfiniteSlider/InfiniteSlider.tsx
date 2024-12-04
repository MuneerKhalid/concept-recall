"use client";

import React from "react";
import Image from "next/image";

interface Client {
  id: number;
  src: string;
  alt: string;
}

const clients: Client[] = [
  { id: 1, src: "/logo/client1.webp", alt: "Client 1" },
  { id: 2, src: "/logo/client2.webp", alt: "Client 2" },
  { id: 3, src: "/logo/client3.webp", alt: "Client 3" },
  { id: 4, src: "/logo/client4.webp", alt: "Client 4" },
  { id: 5, src: "/logo/client5.webp", alt: "Client 5" },
  { id: 6, src: "/logo/client6.webp", alt: "Client 6" },
];

const ClientSlider: React.FC = () => {
  return (
    <section className="bg-[rgb(29,29,29)] bg-opacity-100 py-8 overflow-hidden">
      <div className="relative w-full">
        <div className="flex items-center space-x-6 animate-scroll whitespace-nowrap">
          {[...clients, ...clients].map((client) => (
            <div
              key={`${client.id}-${Math.random()}`}
              className="flex-shrink-0 w-48 h-20"
            >
              <Image
                src={client.src}
                alt={client.alt}
                width={180}
                height={80}
                className="object-contain"
                priority={client.id === 1}
              />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .animate-scroll {
          display: flex;
          animation: scroll 15s linear infinite;
        }

        @keyframes scroll {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default ClientSlider;
