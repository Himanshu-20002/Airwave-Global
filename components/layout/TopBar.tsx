import React from 'react';
import { Phone, Mail, Instagram } from 'lucide-react';
import WhatsAppIcon from '../icons/WhatsAppIcon';

export default function TopBar() {
  return (
    <div className="bg-[#071126] text-slate-300 text-xs py-2 px-4 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <span className="inline-flex items-center gap-2 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot" />
            <strong className="text-white font-semibold">24/7 Global Ops Control Tower Active</strong>
          </span>
          <span className="hidden sm:inline-block text-slate-600">|</span>
          <a
            href="tel:+919818370497"
            className="hover:text-[#fe7f25] transition-colors flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 text-[#fe7f25]" /> +91 98183 70497
          </a>
          <a
            href="mailto:ajha@airsurgegroup.com"
            className="hover:text-[#fe7f25] transition-colors hidden md:flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5 text-[#fe7f25]" /> ajha@airsurgegroup.com
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-400 hidden lg:inline">HQ: Bagdola, Dwarka, New Delhi</span>
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/airsurgelogisticspvtltd/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-pink-400 transition-colors flex items-center"
              aria-label="Instagram"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://wa.me/919818370497"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1.5 font-medium"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-[#25D366]" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
