import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
// @ts-ignore
import hospitalTeamImage from './assets/images/passagemdeplantao.jpg';
// @ts-ignore
import logosImage from './assets/images/logos.png';
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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-start md:items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tighter text-navy">TAQNA</span>
          <div className="h-4 w-[1px] bg-fend mx-2"></div>
          <span className="text-xs sm:text-sm uppercase tracking-[0.05em] text-fend-dark font-semibold">
  Operational Intelligence - Healthcare
</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <button 
            onClick={onOpenContact}
            className="bg-navy text-white px-4 py-1.5 rounded-full hover:bg-fend transition-all text-[10px] uppercase tracking-widest font-medium"
          >
            Saiba mais
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = ({ onOpenContact }: { onOpenContact: () => void }) => {
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
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-xl md:text-2xl lg:text-3xl font-light text-navy leading-[1.5] mb-10 text-balance">
              Somos o <span className="font-bold">SaaS</span> potencializado com <span className="font-bold">IA</span> que transforma a comunicação crítica da linha de frente hospitalar, hoje perdida em WhatsApp e planilhas, em <span className="font-bold text-fend-dark">informações registradas, priorizadas e rastreadas</span>, sem jamais substituir o julgamento do profissional de saúde.
            </h1>

          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full rounded-3xl overflow-hidden border border-navy/10 shadow-2xl bg-white"
          >
            <img 
              src={hospitalTeamImage} 
              className="w-full h-full object-cover aspect-[16/9] md:aspect-[4/3] lg:aspect-auto"
              alt="Equipe de saúde realizando passagem de plantão de forma colaborativa"
              referrerPolicy="no-referrer"
            />
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
                    Sistema de Gestão e Inteligência para a camada de <span className="text-fend">Operação Assistencial em Hospitais</span>
                  </h3>

                  
                 </div>
                
                <div className="w-full md:flex-1 relative">
                  <div className="flex flex-col gap-4">
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transform hover:-translate-y-1 transition-transform duration-300">
                      <div className="flex items-start gap-4">
                        <div className="p-2.5 rounded-xl bg-fend/10 text-fend shrink-0">
                          <Activity size={22} />
                        </div>
                        <div>
                          <p className="text-base font-bold tracking-wider text-fend uppercase mb-1">SENTRIX</p>
                          <p className="text-xl text-white/80 font-light leading-relaxed">
                            Safety huddle estruturado, passagem de plantão e áreas de apoio.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transform hover:-translate-y-1 transition-transform duration-300">
                      <div className="flex items-start gap-4">
                        <div className="p-2.5 rounded-xl bg-fend/10 text-fend shrink-0">
                          <Cpu size={22} />
                        </div>
                        <div>
                          <p className="text-base font-bold tracking-wider text-fend uppercase mb-1">VISUS</p>
                          <p className="text-xl text-white/80 font-light leading-relaxed">
                            Cenários de turno, gargalos, desvios de protocolo e picos de demanda.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transform hover:-translate-y-1 transition-transform duration-300">
                      <div className="flex items-start gap-4">
                        <div className="p-2.5 rounded-xl bg-fend/10 text-fend shrink-0">
                          <Brain size={22} />
                        </div>
                        <div>
                          <p className="text-base font-bold tracking-wider text-fend uppercase mb-1">ARIS</p>
                          <p className="text-xl text-white/80 font-light leading-relaxed">
                            Padrões, score de performance, prova técnica e protocolos personalizados.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ onOpenPrivacy, onOpenTerms }: { onOpenPrivacy: () => void; onOpenTerms: () => void }) => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-navy/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-3xl font-bold tracking-tighter text-navy">TAQNA</span>
              <div className="h-4 w-[1px] bg-fend mx-2"></div>
              <span className="text-sm uppercase tracking-[0.05em] text-fend font-semibold">Operational Intelligence - Healthcare</span>
            </div>

            <div className="flex gap-4">
              {/* Social icons */}
              <a 
                href="https://www.linkedin.com/company/taqna/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-navy/5 border border-navy/10 flex items-center justify-center hover:bg-fend hover:text-white hover:border-fend transition-all cursor-pointer"
                title="Siga-nos no LinkedIn"
              >
                <Linkedin size={18} className="text-fend hover:text-white" />
              </a>
            </div>

            <div className="mt-8">
              <p className="text-base md:text-lg text-navy/70 font-light mb-1">
                Reunimos experiência nas seguintes entidades:
              </p>
              <img 
                src={logosImage} 
                alt="Entidades" 
                className="max-h-14 md:max-h-18 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg uppercase tracking-widest mb-6">Contato</h4>
            <ul className="space-y-4 text-base md:text-lg text-navy/70 font-light">
              <li>contato@taqna.com.br</li>
              <li>Florianópolis, Santa Catarina, Brasil</li>
              <li className="text-navy font-bold">taqna.com.br</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-navy/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.1em] text-navy/40 font-bold">
          <p>© 2024 TAQNA. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <button 
              onClick={onOpenPrivacy}
              className="hover:text-navy transition-colors focus:outline-none cursor-pointer"
            >
              Privacidade
            </button>
            <button 
              onClick={onOpenTerms}
              className="hover:text-navy transition-colors focus:outline-none cursor-pointer"
            >
              Termos de Uso
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

const PrivacyModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
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
            className="relative bg-white rounded-3xl p-8 md:p-12 max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-navy/40 hover:text-navy transition-colors"
            >
              <X size={24} />
            </button>
            <h3 className="text-2xl font-bold text-navy mb-6">Política de Privacidade</h3>
            <div className="space-y-6 text-sm text-navy/70 font-light leading-relaxed">
              <p>
                A <strong>TAQNA</strong> valoriza a sua privacidade e se compromete com a transparência e a segurança no tratamento dos seus dados pessoais. Esta Política de Privacidade descreve como coletamos e utilizamos as suas informações de acordo com a <strong>Lei Geral de Proteção de Dados (LGPD)</strong>.
              </p>
              
              <div>
                <h4 className="font-bold text-navy mb-2">1. Coleta de Dados</h4>
                <p>
                  Coletamos apenas as informações que você fornece ativamente ao preencher nossos formulários de contato no site, tais como: nome completo, e-mail corporativo e nome de sua instituição.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-navy mb-2">2. Finalidade do Uso de Dados</h4>
                <p>
                  As informações coletadas são utilizadas exclusivamente para fins de comunicação comercial, apresentação de nossos produtos de inteligência operacional de saúde (Sentrix, Visus e Aris) e agendamento de apresentações com nossos especialistas.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-navy mb-2">3. Segurança das Informações</h4>
                <p>
                  Empregamos medidas de segurança técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, alteração, divulgação ou destruição acidental. Seus dados nunca serão compartilhados, vendidos ou alugados para terceiros.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-navy mb-2">4. Seus Direitos</h4>
                <p>
                  Em conformidade com a LGPD, você possui o direito de confirmar a existência de tratamento, acessar, corrigir ou solicitar a exclusão definitiva de suas informações de nossa base de dados a qualquer momento. Para exercer esses direitos, basta enviar um e-mail para <strong>katia.weber@taqna.com.br</strong>.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const TermsModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
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
            className="relative bg-white rounded-3xl p-8 md:p-12 max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-navy/40 hover:text-navy transition-colors"
            >
              <X size={24} />
            </button>
            <h3 className="text-2xl font-bold text-navy mb-6">Termos de Uso</h3>
            <div className="space-y-6 text-sm text-navy/70 font-light leading-relaxed">
              <p>
                Bem-vindo ao site da <strong>TAQNA</strong>. Ao acessar este portal institucional, você concorda em cumprir e estar vinculado aos seguintes Termos de Uso.
              </p>
              
              <div>
                <h4 className="font-bold text-navy mb-2">1. Uso de Conteúdo</h4>
                <p>
                  Todo o conteúdo deste site, incluindo textos, designs, marcas, logotipos, ícones e conceitos de soluções operacionais são de propriedade intelectual exclusiva da TAQNA. É proibida a reprodução ou distribuição do conteúdo sem autorização prévia por escrito.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-navy mb-2">2. Natureza Informativa</h4>
                <p>
                  O conteúdo presente neste portal tem caráter estritamente institucional e informativo de nossos serviços para hospitais e clínicas de saúde. A contratação definitiva de nossos softwares, suporte ou consultoria técnica é regulada por instrumento contratual comercial específico estabelecido individualmente.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-navy mb-2">3. Limitação de Responsabilidade</h4>
                <p>
                  A TAQNA busca manter todas as informações atualizadas e precisas no site, mas não se responsabiliza por prejuízos decorrentes de interpretações ou decisões baseadas unicamente no conteúdo geral apresentado neste portal. Para decisões estratégicas e personalizadas em saúde, conte sempre com a orientação presencial ou direta de nossa equipe consultiva especializada.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-navy mb-2">4. Atualizações dos Termos</h4>
                <p>
                  A TAQNA reserva-se o direito de atualizar e modificar estes termos de uso periodicamente, visando manter a clareza e adequar-se às novas diretrizes legais ou de negócios.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
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
  action="https://formsubmit.co/katia.weber@taqna.com.br" 
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
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  return (
    <div className="selection:bg-fend/30 selection:text-navy">
      <Navbar onOpenContact={() => setIsContactModalOpen(true)} />
      <main>
        <Hero onOpenContact={() => setIsContactModalOpen(true)} />
        
        {/* Impact Quote Section */}
        <section className="py-12 bg-white border-y border-navy/5">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-2xl md:text-3xl font-light text-navy italic leading-relaxed"
            >
              "Levamos ordem para onde as decisões definem vidas"
            </motion.h2>
          </div>
        </section>

        <PillarsDetail />




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
              Pronto para aumentar sua receita e <span className="font-bold">reduzir os eventos adversos?</span>
            </h2>

            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="bg-navy text-white px-8 py-3.5 rounded-full text-sm font-semibold uppercase tracking-wider hover:bg-fend hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-md shadow-navy/10"
            >
              Falar com um Especialista
            </button>
          </div>
        </section>
      </main>
      <Footer 
        onOpenPrivacy={() => setIsPrivacyModalOpen(true)} 
        onOpenTerms={() => setIsTermsModalOpen(true)} 
      />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      <PrivacyModal isOpen={isPrivacyModalOpen} onClose={() => setIsPrivacyModalOpen(false)} />
      <TermsModal isOpen={isTermsModalOpen} onClose={() => setIsTermsModalOpen(false)} />
    </div>
  );
}
