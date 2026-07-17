import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Cpu, 
  HeartHandshake, 
  ChevronRight, 
  Menu, 
  X, 
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Users,
  BookOpen,
  Stethoscope,
  Activity,
  Linkedin,
  Sparkles,
  Brain
} from 'lucide-react';

// --- Types ---
interface Pillar {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
}

// --- Components ---

const Navbar = ({ onOpenContact }: { onOpenContact: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tighter text-navy">TAQNA</span>
          <div className="h-4 w-[1px] bg-fend mx-2"></div>
          <span className="text-xs sm:text-sm uppercase tracking-[0.05em] text-fend font-semibold">
  Inteligência e Governança em Saúde
</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#ferramentas" className="hover:text-fend transition-colors">Gestão com IA</a>
          <a href="#instituto" className="hover:text-fend transition-colors">Instituto</a>
          <button 
            onClick={onOpenContact}
            className="bg-navy text-white px-5 py-2 rounded-full hover:bg-fend transition-all text-xs uppercase tracking-widest"
          >
            Quero saber mais
          </button>
        </div>

        <button className="md:hidden text-navy" onClick={() => setIsMobileMenuOpen(true)}>
          <Menu size={24} />
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-white z-[60] p-8 flex flex-col"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsMobileMenuOpen(false)}><X size={32} /></button>
            </div>
            <div className="flex flex-col gap-8 mt-12 text-2xl font-light">
              <a href="#ferramentas" onClick={() => setIsMobileMenuOpen(false)}>Gestão com IA</a>
              <a href="#instituto" onClick={() => setIsMobileMenuOpen(false)}>Instituto</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onOpenContact }: { onOpenContact: () => void }) => {
  const pillars: Pillar[] = [
    { 
  id: 1, 
  title: "Qualificação & Autonomia para equipes de saúde",
  description: "",
  icon: <ShieldCheck className="text-fend" size={36} />,
  details: ["Mapeamento de Riscos", "Diagnóstico Situacional", "Adequação Regulatória"]
},
    { 
      id: 2, 
      title: "Ferramentas técnicas de gestão, impulsionadas por Inteligência Artificial", 
      description: "",
      icon: <Cpu className="text-fend" size={36} />,
      details: ["Provas Técnicas", "Onboarding Digital", "Mapas de Risco"]
    },
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/healthcare-modern/1920/1080?blur=2" 
          className="w-full h-full object-cover opacity-10"
          alt="Hospital background"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-light text-navy leading-[1.1] mb-8 text-balance">
              Onde a ordem técnica encontra o <span className="font-bold">propósito humano.</span>
            </h1>
            <p className="text-xl md:text-2xl text-navy/90 font-normal max-w-xl mb-10 leading-relaxed">
  Atuamos como parceiro estratégico que viabiliza autonomia para sua instituição, na busca pela segurança e melhoria contínua dos processos.
</p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={onOpenContact}
                className="bg-navy text-white px-8 py-4 rounded-full flex items-center gap-2 hover:bg-fend transition-all group shadow-xl shadow-navy/10"
              >
                Nosso método
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {pillars.map((pillar, idx) => (
              <div key={pillar.id} className="p-6 rounded-2xl bg-white border border-navy/5 shadow-sm hover:shadow-md transition-all group">
                <div className="mb-4 p-3 rounded-xl bg-navy/5 w-fit group-hover:bg-fend/10 transition-colors">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-light tracking-tight mb-3 text-navy/90 leading-tight">{pillar.title}</h3>
                <p className="text-sm text-navy/60 font-light leading-snug">
                  {pillar.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:block">
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-navy/20 rounded-full flex justify-center p-1"
        >
          <div className="w-1 h-2 bg-fend rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  return (
    <section className="py-24 bg-navy text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-fend rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-fend rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-light mb-12 leading-tight">
              Excelência em saúde não é apenas um valor ético, é um <span className="font-bold italic">diferencial competitivo.</span>
            </h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="mt-1 p-1 bg-fend rounded-full"><CheckCircle2 size={16} /></div>
                <div>
                  <p className="font-bold text-xl">Redução de 30% em desperdícios</p>
                  <p className="text-sm text-white/60">Através da otimização de processos e redução de erros evitáveis.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 p-1 bg-fend rounded-full"><CheckCircle2 size={16} /></div>
                <div>
                  <p className="font-bold text-xl">ROI de até 4:1 em programas de qualidade</p>
                  <p className="text-sm text-white/60">
                    Dados baseados em estudos de eficiência hospitalar
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10 pt-4 border-t border-white/5">
              <span className="text-[10px] opacity-50 uppercase tracking-widest font-semibold block">
                (Fonte: IHI - Institute for Healthcare Improvement)
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Users className="text-fend mb-4" size={32} />
              <p className="text-4xl font-bold mb-2">92%</p>
              <p className="text-xs uppercase tracking-widest text-white/50">Retenção de Talentos</p>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm sm:mt-12">
              <Activity className="text-fend mb-4" size={32} />
              <p className="text-4xl font-bold mb-2">24/7</p>
              <p className="text-xs uppercase tracking-widest text-white/50">Monitoramento de Riscos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PillarsDetail = () => {
  return (
    <section id="pilares" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
               <div className="grid lg:grid-cols-1 gap-8">
          {/* Pillar 2 */}
          <div id="ferramentas" className="group">
            <div className="relative overflow-hidden rounded-3xl bg-navy p-12 text-white min-h-[400px] flex items-center border border-white/10 shadow-2xl">
              {/* Animated Background Element */}
              <div className="absolute -right-20 -top-20 w-80 h-80 bg-fend/20 rounded-full blur-[100px] group-hover:bg-fend/30 transition-colors duration-700"></div>
              <div className="absolute -left-20 -bottom-20 w-60 h-60 bg-navy-light/20 rounded-full blur-[80px]"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 h-full w-full">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-sm">
                    <Sparkles size={14} className="text-fend" />
                    <span className="text-[10px] uppercase tracking-widest font-bold">Inovação Tecnológica</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    Ferramentas de <span className="text-fend">Gestão com IA</span>
                  </h3>
                  <p className="text-white/70 mb-8 leading-relaxed text-xl font-light">
                    Tornamos o conhecimento e a inteligência artificial acessíveis para impulsionar qualidade e segurança na saúde.
                  </p>
                  
                 </div>
                
                <div className="flex-1 relative hidden md:block">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transform hover:-translate-y-1 transition-transform">
                      <Cpu className="text-fend mb-3" size={24} />
                      <p className="text-[10px] font-bold uppercase tracking-[0.15em] opacity-70">Agilidade Analítica</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transform hover:-translate-y-1 transition-transform">
                      <ShieldCheck className="text-fend mb-3" size={24} />
                      <p className="text-[10px] font-bold uppercase tracking-[0.15em] opacity-70">Segurança & Integridade</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          {/* Pillar 1 */}
          <div className="lg:col-span-2 group">
            <div className="relative h-full overflow-hidden rounded-3xl bg-navy p-12 text-white min-h-[400px] flex items-center">
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 group-hover:scale-110 transition-transform duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800&h=800" 
                  className="w-full h-full object-cover"
                  alt="Modern Operating Room"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="relative z-10 max-w-2xl">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">Inteligência Operacional & Conformidade</h3>
                <p className="text-white/80 mb-8 leading-relaxed text-xl">
                  Ciclos estratégicos de 3 a 6 meses, com foco em resultados concretos. Mapeamos riscos e estruturamos diagnósticos para ações imediatas.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <ul className="space-y-4">
                    <li className="flex items-center gap-4 text-xl font-light">
                      <div className="w-1.5 h-1.5 rounded-full bg-fend"></div>
                      Gestão inteligente de riscos
                    </li>
                  </ul>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-4 text-xl font-light">
                      <div className="w-1.5 h-1.5 rounded-full bg-fend"></div>
                      Conformidade Regulatória
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 4 */}
          <div id="instituto" className="group">
            <div className="h-full rounded-3xl bg-fend p-10 flex flex-col justify-between text-navy">
              <div>
                <h3 className="text-2xl font-bold mb-4">Instituto Taqna</h3>
                <p className="text-navy/80 text-sm leading-relaxed mb-6">
                  Nossa essência é trazer valor para a sociedade. Parte do nosso faturamento é destinado a doações para instituições e projetos sociais.
                </p>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden mt-4">
                <img 
                  src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=600&h=600" 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                  alt="People Walking - Instituto Taqna"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-start justify-center p-6 pt-12 text-center">
                  <p className="text-xs font-bold uppercase tracking-[0.1em] text-navy">Transformando técnica em cuidado humano</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQSection = ({ onOpenContact }: { onOpenContact: () => void }) => {
  const questions = [
    "Ainda não temos uma área de qualidade formalizada, mas queremos evoluir nosso time.",
    "Nossa equipe é assistencial, porém queremos ampliar a competência em gestão e governança.",
    "Sua instituição recebeu uma notificação regulatória e precisa organizar seus processos assistenciais?",
    "Desejo que minha equipe seja protagonista na condução da melhoria contínua."
  ];

  return (
    <section className="py-24 bg-fend-light/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-fend/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-navy/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-fend/10 text-fend text-xs font-bold uppercase tracking-widest mb-6">
              Desafios & Soluções
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-navy mb-8 leading-tight">
              Sua instituição se identifica com algum desses <span className="font-bold">desafios?</span>
            </h2>
            <p className="text-lg text-navy/60 mb-10 font-light max-w-md">
              A TAQNA transforma dores em oportunidades de crescimento através de governança e autonomia técnica.
            </p>
            <button 
              onClick={onOpenContact}
              className="group bg-navy text-white px-8 py-4 rounded-full hover:bg-fend transition-all flex items-center gap-3 shadow-lg shadow-navy/10"
            >
              Falar com um Especialista
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="grid gap-4">
            {questions.map((q, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 bg-white rounded-3xl border border-navy/5 flex items-start gap-5 hover:shadow-xl hover:shadow-navy/5 hover:border-fend/20 transition-all duration-300"
              >
                <div className="mt-1 w-10 h-10 rounded-full bg-fend/5 flex items-center justify-center shrink-0 group-hover:bg-fend group-hover:text-white transition-colors duration-300">
                  <CheckCircle2 size={20} className="text-fend group-hover:text-white transition-colors duration-300" />
                </div>
                <p className="text-base font-light text-navy/80 leading-relaxed group-hover:text-navy transition-colors duration-300">
                  {q}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-navy/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-3xl font-bold tracking-tighter text-navy">TAQNA</span>
              <div className="h-4 w-[1px] bg-fend mx-2"></div>
              <span className="text-sm uppercase tracking-[0.05em] text-fend font-semibold">Inteligência e Governança em Saúde</span>
            </div>
            <p className="text-navy/60 font-light max-w-sm mb-8 leading-relaxed">
              Resgatar a essência do cuidado, garantindo que cada paciente receba o tratamento digno e seguro que merece.
            </p>
            <div className="flex gap-4">
              {/* Social icons placeholders */}
              <div className="w-10 h-10 rounded-full bg-navy/5 border border-navy/10 flex items-center justify-center hover:bg-fend hover:text-white transition-all cursor-pointer">
                <Linkedin size={18} className="text-fend hover:text-white" />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Contato</h4>
            <ul className="space-y-4 text-sm text-navy/60 font-light">
              <li>contato@taqna.com.br</li>
              <li>Florianópolis, Santa Catarina, Brasil</li>
              <li className="text-navy font-bold">taqna.com.br</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-navy/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.1em] text-navy/40 font-bold">
          <p>© 2024 TAQNA. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-navy transition-colors">Privacidade</a>
            <a href="#" className="hover:text-navy transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const ContactModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white rounded-3xl p-8 md:p-12 max-w-xl w-full shadow-2xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-navy/40 hover:text-navy transition-colors"
            >
              <X size={24} />
            </button>
            <p className="text-navy/60 mb-8 font-light">
              Deixe seus dados abaixo e um de nossos especialistas entrará em contato para entender como a TAQNA pode apoiar sua instituição.
            </p>
            <form 
  action="https://formsubmit.co/contato@taqna.com.br" 
  method="POST"
  className="space-y-4"
>

  <input type="hidden" name="_subject" value="Novo contato via site TAQNA" />
  <input type="hidden" name="_captcha" value="false" />

  <div>
    <label className="text-[10px] uppercase tracking-widest font-bold text-navy/40 mb-2 block">
      Nome Completo
    </label>
    <input 
      name="Nome"
      type="text"
      required
      className="w-full bg-navy/5 border-none rounded-xl p-4 focus:ring-2 focus:ring-fend transition-all"
      placeholder="Seu nome"
    />
  </div>

  <div>
    <label className="text-[10px] uppercase tracking-widest font-bold text-navy/40 mb-2 block">
      E-mail Corporativo
    </label>
    <input 
      name="Email"
      type="email"
      required
      className="w-full bg-navy/5 border-none rounded-xl p-4 focus:ring-2 focus:ring-fend transition-all"
      placeholder="email@empresa.com.br"
    />
  </div>

  <div>
    <label className="text-[10px] uppercase tracking-widest font-bold text-navy/40 mb-2 block">
      Instituição
    </label>
    <input 
      name="Instituicao"
      type="text"
      required
      className="w-full bg-navy/5 border-none rounded-xl p-4 focus:ring-2 focus:ring-fend transition-all"
      placeholder="Nome do hospital ou clínica"
    />
  </div>

  <button 
    type="submit"
    className="w-full bg-navy text-white py-4 rounded-xl font-bold hover:bg-fend transition-all mt-4"
  >
    Enviar Solicitação
  </button>

</form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="selection:bg-fend/30 selection:text-navy">
      <Navbar onOpenContact={() => setIsContactModalOpen(true)} />
      <main>
        <Hero onOpenContact={() => setIsContactModalOpen(true)} />
        
        {/* Impact Quote Section */}
        <section className="py-20 bg-white border-y border-navy/5">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-2xl md:text-3xl font-light text-navy italic leading-relaxed"
            >
              "Colocamos a segurança do paciente em primeiro lugar e fortalecemos a autonomia das equipes."
            </motion.h2>
          </div>
        </section>

        <PillarsDetail />


        <StatsSection />

        {/* Slogans Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="p-12 rounded-3xl bg-navy/5 border border-navy/10 flex flex-col justify-center items-center text-center"
              >
                <h3 className="text-3xl md:text-4xl text-navy leading-tight tracking-tight">
                  <span className="font-light italic opacity-50">Menos discurso.</span> <br />
                  <span className="font-semibold">Mais ação assistencial.</span>
                </h3>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="p-12 rounded-3xl bg-fend/10 border border-fend/20 flex flex-col justify-center items-center text-center"
              >
                <h3 className="text-3xl md:text-4xl text-navy leading-tight tracking-tight">
                  <span className="font-light italic opacity-50">Eficiência assistencial.</span> <br />
                  <span className="font-semibold">Começa com ação.</span>
                </h3>
              </motion.div>
            </div>
          </div>
        </section>

        <FAQSection onOpenContact={() => setIsContactModalOpen(true)} />

        {/* Final CTA */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://picsum.photos/seed/healthcare-team/1920/1080" 
              className="w-full h-full object-cover grayscale opacity-5"
              alt="Healthcare team"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-light text-navy mb-8">
              Pronto para transformar sua equipe com <span className="font-bold">autonomia e governança?</span>
            </h2>
            <p className="text-xl text-navy/60 mb-12 font-light">
              Hospitais, clínicas e operadoras de saúde: a TAQNA é o parceiro estratégico que viabiliza a excelência técnica e o cuidado humano.
            </p>
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="bg-navy text-white px-12 py-5 rounded-full text-lg font-bold hover:bg-fend transition-all shadow-2xl shadow-navy/20"
            >
              Falar com um Especialista
            </button>
          </div>
        </section>
      </main>
      <Footer />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  );
}
