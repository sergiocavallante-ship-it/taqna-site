import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Download, Share2, ShieldCheck, Sparkles } from 'lucide-react';

export const BrandAssets = () => {
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const generateLogo = async () => {
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            {
              text: 'A professional, minimalist vector logo for a healthcare technology company named "TAQNA". The logo features a clean geometric icon combining a shield (governance) and a stylized neural network or circuit pattern (intelligence). Colors: Deep Navy Blue (#001F3F) and Warm Taupe (#A39382). The design is flat, modern, and centered on a white background. High contrast, high resolution, suitable for social media profile pictures (LinkedIn, Instagram). No text in the logo icon itself.',
            },
          ],
        },
      });
      
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          setLogoUrl(`data:image/png;base64,${part.inlineData.data}`);
          break;
        }
      }
    } catch (error) {
      console.error("Error generating logo:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    generateLogo();
  }, []);

  return (
    <div className="bg-navy/5 rounded-3xl p-8 border border-navy/10 mt-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
        <div>
          <h3 className="text-xl font-bold text-navy mb-2 flex items-center gap-2">
            <Sparkles className="text-fend" size={20} />
            Identidade Visual & Social Media
          </h3>
          <p className="text-sm text-navy/60 font-light max-w-md">
            Utilize o logo oficial da TAQNA em suas redes sociais e materiais institucionais. 
            O ícone representa a união entre Governança (Escudo) e Inteligência (Rede).
          </p>
        </div>
        <button 
          onClick={generateLogo}
          disabled={loading}
          className="text-xs uppercase tracking-widest font-bold text-fend hover:text-navy transition-colors flex items-center gap-2"
        >
          {loading ? 'Gerando...' : 'Gerar Nova Versão'}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Profile Picture Version */}
        <div className="bg-white p-6 rounded-2xl border border-navy/5 shadow-sm">
          <p className="text-[10px] uppercase tracking-widest font-bold text-navy/40 mb-4">Foto de Perfil (LinkedIn/Instagram)</p>
          <div className="aspect-square w-32 mx-auto bg-navy/5 rounded-full overflow-hidden flex items-center justify-center border border-navy/10 mb-4">
            {loading ? (
              <div className="animate-pulse w-full h-full bg-navy/10" />
            ) : logoUrl ? (
              <img src={logoUrl} alt="TAQNA Logo Profile" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            ) : (
              <ShieldCheck className="text-navy/20" size={48} />
            )}
          </div>
          <div className="flex justify-center gap-3">
            <a 
              href={logoUrl || '#'} 
              download="TAQNA_Logo_Profile.png"
              className="p-2 rounded-lg bg-navy/5 text-navy hover:bg-fend hover:text-white transition-all"
              title="Download"
            >
              <Download size={16} />
            </a>
          </div>
        </div>

        {/* Square Version */}
        <div className="bg-white p-6 rounded-2xl border border-navy/5 shadow-sm">
          <p className="text-[10px] uppercase tracking-widest font-bold text-navy/40 mb-4">Logo Quadrado (Alta Resolução)</p>
          <div className="aspect-square w-32 mx-auto bg-white rounded-xl overflow-hidden flex items-center justify-center border border-navy/10 mb-4">
            {loading ? (
              <div className="animate-pulse w-full h-full bg-navy/10" />
            ) : logoUrl ? (
              <img src={logoUrl} alt="TAQNA Logo Square" className="w-full h-full object-contain p-4" referrerPolicy="no-referrer" />
            ) : (
              <ShieldCheck className="text-navy/20" size={48} />
            )}
          </div>
          <div className="flex justify-center gap-3">
            <a 
              href={logoUrl || '#'} 
              download="TAQNA_Logo_Square.png"
              className="p-2 rounded-lg bg-navy/5 text-navy hover:bg-fend hover:text-white transition-all"
              title="Download"
            >
              <Download size={16} />
            </a>
          </div>
        </div>

        {/* Brand Colors */}
        <div className="bg-white p-6 rounded-2xl border border-navy/5 shadow-sm">
          <p className="text-[10px] uppercase tracking-widest font-bold text-navy/40 mb-4">Paleta de Cores</p>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-navy border border-white/10" />
              <div>
                <p className="text-[10px] font-bold text-navy">Navy Blue</p>
                <p className="text-[10px] text-navy/40">#001F3F</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-fend border border-navy/10" />
              <div>
                <p className="text-[10px] font-bold text-navy">Warm Taupe (Fend)</p>
                <p className="text-[10px] text-navy/40">#A39382</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
