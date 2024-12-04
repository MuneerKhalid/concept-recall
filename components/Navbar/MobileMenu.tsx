import React from "react";
import Link from "next/link";  // Import the Link component
import Links from "./Links";
import Image from "next/image";

interface MobileMenuProps {
  onClose: () => void;
}

const MobileMenu = ({ onClose }: MobileMenuProps) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-50 flex flex-col items-start justify-start max-w-screen-sm md:bg-transparent md:top-auto md:left-auto md:h-auto md:items-center">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white md:hidden"
        aria-label="Close Menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Mobile Menu Content */}
      <div className="flex flex-col space-y-6 text-center text-white w-full md:max-w-none  md:space-x-8 md:space-y-0 md:items-center">
        
        {/* Logo and Company Name */}
        <div className="flex  items-center md:items-start space-y-4">
          <Image
            src="/globe.png"
            alt="Company Logo"
            className="h-16 md:h-12"
            width={40}
            height={40}
          />
          <span className="text-2xl font-bold">Concept Recall</span>
        </div>

        <div className="flex flex-col w-full items-start md:space-x-4">
          <Links />
        </div>

        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md">
          Speak to an Expert
        </button>

        <div className="flex space-x-4 justify-center md:justify-start">
          <Link href="https://facebook.com" target="_blank" className="text-white hover:text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                d="M22.5 0h-21A1.5 1.5 0 0 0 0 1.5v21A1.5 1.5 0 0 0 1.5 24h21A1.5 1.5 0 0 0 24 22.5v-21A1.5 1.5 0 0 0 22.5 0zm-2.25 2.25v6h-1.5V4.5h-2.25v1.5h2.25v1.5h-2.25V9h2.25V2.25h-4.5V3h4.5zM12 4.5h-3V9h2.25c0 1.5-2.25 1.5-2.25 3.5 0 2.25 2.25 2.25 2.25 3.75V14h2.25V9h-2.25v-1.5h3V4.5z"
              />
            </svg>
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="text-white hover:text-blue-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                d="M20.449 20.451h-3.797v-5.493c0-1.312-.023-3.003-1.826-3.003-1.831 0-2.113 1.428-2.113 2.898v5.598h-3.795V9h3.639v1.695h.049c.507-.96 1.744-1.963 3.591-1.963 3.851 0 4.556 2.534 4.556 5.84v6.879zM5.337 7.142c-1.288 0-2.337 1.049-2.337 2.337s1.049 2.337 2.337 2.337 2.337-1.049 2.337-2.337-1.049-2.337-2.337-2.337zM7.573 20.451h-4.72V9h4.72v11.451zM24 0H0v24h24V0z"
              />
            </svg>
          </Link>
          <Link href="https://twitter.com" target="_blank" className="text-white hover:text-blue-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                d="M23.444 4.832c-.833.371-1.72.622-2.65.734 1.01-.604 1.782-1.56 2.146-2.688-.948.56-2.002.96-3.15 1.187-1.98-2.104-5.4-2.104-7.383-.023-1.924-.098-3.864-.634-5.533-1.51-1.779.99-2.817 2.76-2.39 4.567-2.086-.104-3.943-.978-5.278-2.308-1.455 2.385-.614 5.545 1.926 7.248-.945-.031-1.833-.294-2.607-.734-.205 3.75 2.583 6.37 5.903 7.235-1.033.264-2.183.314-3.33.12 1.292 4.027 4.97 5.652 8.963 4.828 1.614-.305 3.107-.94 4.417-1.779-1.125 1.726-2.847 3.002-4.856 3.462-1.736-2.133-.833-4.919.618-6.01-.24-.307-.48-.626-.759-.93.01 0 .016-.002.025-.002z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
