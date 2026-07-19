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

import sentrixImg from './Assets/Images/Sentrix.png';

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
          <span className="text-xs sm:text-sm uppercase tracking-[0.05em] text-fend-dark font-semibold">
  Operational Intelligence - Healthcare
</span>
        </div>

        <div className="flex items-center gap-8 text-sm font-medium">
          <button 
            onClick={onOpenContact}
            className="bg-navy text-white px-3 py-1.5 sm:px-5 sm:py-2 rounded-full hover:bg-fend transition-all text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest font-semibold"
          >
            Saiba mais
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = ({ onOpenContact }: { onOpenContact: () => void }) => {
  const pillars: Pillar[] = [
    { 
  id: 1, 
  title: "Sem jamais substituir o julgamento do profissional de Saúde",
  description: "",
  icon: <ShieldCheck className="text-fend" size={36} />,
  details: ["Mapeamento de Riscos", "Diagnóstico Situacional", "Adequação Regulatória"]
},
    { 
      id: 2, 
      title: "Software Operacional Técnico, impulsionado por Inteligência Artificial", 
      description: "",
      icon: <Cpu className="text-fend" size={36} />,
      details: ["Provas Técnicas", "Onboarding Digital", "Mapas de Risco"]
    },
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-36 md:pt-20 overflow-hidden">
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
            <h1 className="text-2xl md:text-4xl font-light text-navy/90 leading-relaxed tracking-tight mb-8">
              <span className="font-bold">SaaS</span> potencializado com <span className="font-bold">IA</span> que transforma a comunicação crítica na linha de frente hospitalar, hoje existente em planilhas e grupos de WhatsApp, em <span className="font-bold">informações e decisões registradas, priorizadas e visíveis.</span>
            </h1>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={onOpenContact}
                className="bg-navy text-white px-5 py-2.5 sm:px-6 sm:py-3 text-sm font-medium rounded-full flex items-center gap-2 hover:bg-fend transition-all group shadow-lg shadow-navy/10"
              >
                Nosso método
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:-translate-y-12"
          >
            {pillars.map((pillar, idx) => (
              <div key={pillar.id} className="p-6 rounded-2xl bg-white border border-navy/5 shadow-sm hover:shadow-md transition-all group">
                <div className="mb-4 p-3 rounded-xl bg-navy/5 w-fit group-hover:bg-fend/10 transition-colors">
                  {pillar.icon}
                </div>
                <h3 className={`text-2xl tracking-tight mb-3 leading-tight font-medium ${pillar.id === 1 ? 'text-fend-dark' : 'text-navy/90'}`}>{pillar.title}</h3>
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
          </div>
          
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <Users className="text-fend mb-4" size={32} />
                <p className="text-4xl font-bold mb-2">80%</p>
                <p className="text-xs uppercase tracking-widest text-white/50 leading-relaxed">dos erros médicos graves vêm da falha de comunicação no plantão</p>
              </div>
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm sm:mt-12">
                <Activity className="text-fend mb-4" size={32} />
                <p className="text-4xl font-bold mb-2">65%</p>
                <p className="text-xs uppercase tracking-widest text-white/50 leading-relaxed">dos eventos adversos têm a falha de comunicação como causa raiz.</p>
              </div>
            </div>
            <div className="text-left sm:text-right px-2">
              <span className="text-[10px] opacity-50 uppercase tracking-widest font-semibold block">
                (Fonte: IHI - Institute for Healthcare Improvement)
              </span>
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
                  <h3 className="text-2xl md:text-3xl font-medium mb-6 leading-tight">
                    Um <span className="text-fend font-semibold">Sistema completo e inovador</span> para a camada de <span className="text-fend font-semibold">Operação Assistencial</span> que captura, organiza, prioriza e dá visibilidade gerencial às informações na linha de frente do Hospital.
                  </h3>
                  
                 </div>
                
                <div className="w-full md:flex-1 flex flex-col gap-4">
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transform hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 rounded-xl bg-fend/10 text-fend mt-0.5">
                        <Users size={20} />
                      </div>
                      <div>
                        <h4 className="text-sm font-extrabold tracking-widest text-fend uppercase mb-1.5">SENTRIX</h4>
                        <p className="text-base md:text-lg text-white/90 font-light leading-relaxed">
                          Safety Huddle estruturado, passagem de plantão e áreas de apoio.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transform hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 rounded-xl bg-fend/10 text-fend mt-0.5">
                        <Activity size={20} />
                      </div>
                      <div>
                        <h4 className="text-sm font-extrabold tracking-widest text-fend uppercase mb-1.5">VISUS</h4>
                        <p className="text-base md:text-lg text-white/90 font-light leading-relaxed">
                          Cenários de turno, gargalos, desvios de protocolo e picos de demanda.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transform hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 rounded-xl bg-fend/10 text-fend mt-0.5">
                        <Brain size={20} />
                      </div>
                      <div>
                        <h4 className="text-sm font-extrabold tracking-widest text-fend uppercase mb-1.5">ARIS</h4>
                        <p className="text-base md:text-lg text-white/90 font-light leading-relaxed">
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

        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          {/* Pillar 1 */}
          <div className="lg:col-span-2 group">
            <div className="relative h-full overflow-hidden rounded-3xl bg-navy p-12 text-white min-h-[400px] flex items-center">
              <div className="relative z-10 max-w-2xl">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">Inteligência Operacional</h3>
                <p className="text-white/80 mb-8 leading-relaxed text-lg md:text-xl">
                  Até agora, a camada mais crítica da Operação Hospitalar Assistencial como <strong className="font-semibold text-white">Safety Huddle, passagem de plantão e decisões coletivas</strong> não dispunham de um sistema inteligente para auxiliá-la. A TAQNA chegou para suprir essa demanda com excelência, <strong className="font-semibold text-white">através do celular dos usuários</strong>. Uma ferramenta simples, segura e eficiente, disponível a todo momento na palma da mão dos profissionais e no <strong className="font-semibold text-white">dashboard gerencial</strong>.
                </p>

              </div>
            </div>
          </div>

          {/* Pillar 4 */}
          <div id="instituto" className="group">
            <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden shadow-xl shadow-navy/5">
              <img 
                src={sentrixImg} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                alt="Médicos em plantão"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent group-hover:from-navy/20 transition-colors duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQSection = ({ onOpenContact }: { onOpenContact: () => void }) => {
  const questions = [
    "Nossa equipe de Operação Assistencial utiliza anotações manuais, planilhas e whatsapp no controle das atividades",
    "Gostaríamos de tornar as prioridades, pendências e resoluções da camada assistencial, visível para a equipe gerencial.",
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
              Através da tecnologia e governança, a TAQNA entrega a seus clientes aumento de eficiência e receita.
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

const DocumentModal = ({ 
  isOpen, 
  onClose, 
  title, 
  content 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  title: string; 
  content: React.ReactNode; 
}) => {
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
            className="relative bg-white rounded-3xl p-8 md:p-10 max-w-2xl w-full max-h-[85vh] overflow-hidden flex flex-col shadow-2xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-navy/40 hover:text-navy transition-colors z-10"
            >
              <X size={24} />
            </button>
            <h3 className="text-2xl font-bold text-navy mb-6 pr-8">{title}</h3>
            <div className="text-navy/70 space-y-4 font-light text-sm leading-relaxed overflow-y-auto pr-2">
              {content}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Footer = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  const privacyContent = (
    <>
      <p>
        A TAQNA valoriza a privacidade de seus usuários e clientes. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais ao utilizar nosso site e serviços.
      </p>
      <div>
        <h4 className="font-bold text-navy mb-1">1. Coleta de Informações</h4>
        <p>Coletamos informações fornecidas voluntariamente por você ao preencher nosso formulário de contato, tais como nome, e-mail corporativo e instituição de saúde.</p>
      </div>
      <div>
        <h4 className="font-bold text-navy mb-1">2. Uso dos Dados</h4>
        <p>Os dados coletados são utilizados exclusivamente para responder às suas solicitações de contato, apresentar nossas soluções de tecnologia e governança, e enviar comunicações relevantes sobre nossos serviços.</p>
      </div>
      <div>
        <h4 className="font-bold text-navy mb-1">3. Compartilhamento</h4>
        <p>Não compartilhamos, vendemos ou alugamos suas informações pessoais para terceiros sob nenhuma circunstância, exceto quando exigido por lei ou autoridade competente.</p>
      </div>
      <div>
        <h4 className="font-bold text-navy mb-1">4. Segurança</h4>
        <p>Adotamos medidas de segurança administrativas e técnicas compatíveis com as melhores práticas de mercado e com a LGPD (Lei Geral de Proteção de Dados) para proteger suas informações contra acessos não autorizados.</p>
      </div>
      <div>
        <h4 className="font-bold text-navy mb-1">5. Seus Direitos</h4>
        <p>Você possui o direito de solicitar a confirmação do tratamento de seus dados, o acesso aos mesmos, a correção de dados incompletos ou inexatos, ou a exclusão de suas informações de nossa base de dados a qualquer momento.</p>
      </div>
      <div>
        <h4 className="font-bold text-navy mb-1">6. Alterações e Contato</h4>
        <p>Esta política pode ser atualizada periodicamente. Recomendamos a consulta regular a esta página. Para esclarecer qualquer dúvida, entre em contato conosco em contato@taqna.com.br.</p>
      </div>
    </>
  );

  const termsContent = (
    <>
      <p>
        Estes Termos de Uso regem o acesso e a utilização do site e das soluções de tecnologia e governança da TAQNA. Ao navegar por este site ou preencher nosso formulário de contato, você concorda integralmente com as condições estabelecidas abaixo.
      </p>
      <div>
        <h4 className="font-bold text-navy mb-1">1. Uso do Conteúdo</h4>
        <p>Todo o conteúdo disponível neste site — incluindo textos, imagens, logotipos, gráficos e códigos-fonte — é de propriedade exclusiva da TAQNA ou de seus licenciantes, sendo protegido pelas leis de propriedade intelectual. É proibida qualquer reprodução ou distribuição sem autorização prévia por escrito.</p>
      </div>
      <div>
        <h4 className="font-bold text-navy mb-1">2. Cadastro e Formulários</h4>
        <p>Ao preencher o formulário de contato, você se compromete a fornecer informações verdadeiras, precisas, completas e atualizadas. A TAQNA reserva-se o direito de recusar contatos ou solicitações que pareçam inadequadas ou falsas.</p>
      </div>
      <div>
        <h4 className="font-bold text-navy mb-1">3. Responsabilidade</h4>
        <p>O site é disponibilizado "como está". Embora busquemos garantir informações corretas e atualizadas, a TAQNA não se responsabiliza por eventuais erros temporários, imprecisões ou descontinuidades no funcionamento do site.</p>
      </div>
      <div>
        <h4 className="font-bold text-navy mb-1">4. Links para Terceiros</h4>
        <p>Nosso site pode conter links para serviços externos (como o LinkedIn). Não possuímos controle ou responsabilidade sobre as práticas, termos ou políticas de privacidade de sites de terceiros.</p>
      </div>
      <div>
        <h4 className="font-bold text-navy mb-1">5. Modificações dos Termos</h4>
        <p>A TAQNA poderá alterar estes Termos de Uso a qualquer momento, visando seu aprimoramento e adequação legal. As novas condições entrarão em vigor imediatamente após sua publicação no site.</p>
      </div>
      <div>
        <h4 className="font-bold text-navy mb-1">6. Legislação e Foro</h4>
        <p>Estes termos são regidos pelas leis da República Federativa do Brasil, e qualquer controvérsia decorrente deles será dirimida no foro da Comarca de Florianópolis, SC.</p>
      </div>
    </>
  );

  return (
    <footer className="bg-white pt-24 pb-12 border-t border-navy/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-3xl font-bold tracking-tighter text-navy">TAQNA</span>
              <div className="h-4 w-[1px] bg-fend mx-2"></div>
              <span className="text-sm uppercase tracking-[0.05em] text-fend-dark font-semibold">Operational Intelligence - Healthcare</span>
            </div>
            <p className="text-navy/60 font-light max-w-sm mb-8 leading-relaxed">
              Resgatar a essência do cuidado, garantindo que cada paciente receba o tratamento digno e seguro que merece.
            </p>
            <div className="flex gap-4">
              {/* Social icons placeholders */}
              <a 
                href="https://www.linkedin.com/company/taqna/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-navy/5 border border-navy/10 flex items-center justify-center hover:bg-fend hover:text-white transition-all cursor-pointer"
              >
                <Linkedin size={18} className="text-fend hover:text-white" />
              </a>
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
            <button 
              onClick={() => setIsPrivacyOpen(true)} 
              className="hover:text-navy transition-colors uppercase tracking-[0.1em] font-bold"
            >
              Privacidade
            </button>
            <button 
              onClick={() => setIsTermsOpen(true)} 
              className="hover:text-navy transition-colors uppercase tracking-[0.1em] font-bold"
            >
              Termos de Uso
            </button>
          </div>
        </div>
      </div>

      <DocumentModal 
        isOpen={isPrivacyOpen} 
        onClose={() => setIsPrivacyOpen(false)} 
        title="Política de Privacidade" 
        content={privacyContent} 
      />

      <DocumentModal 
        isOpen={isTermsOpen} 
        onClose={() => setIsTermsOpen(false)} 
        title="Termos de Uso" 
        content={termsContent} 
      />
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
              "Levamos ordem para onde as decisões definem vidas."
            </motion.h2>
          </div>
        </section>

        <PillarsDetail />


        <StatsSection />

        {/* Slogans Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-12 rounded-3xl bg-fend/10 border border-fend/20 flex flex-col justify-center items-center text-center max-w-2xl w-full"
            >
              <h3 className="text-3xl md:text-4xl text-navy leading-tight tracking-tight">
                <span className="font-light italic opacity-50">Eficiência assistencial.</span> <br />
                <span className="font-semibold">Começa com Organização.</span>
              </h3>
            </motion.div>
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
              Pronto para transformar sua equipe com <span className="font-bold">tecnologia e governança?</span>
            </h2>
            <p className="text-xl text-navy/60 mb-12 font-light">
              Hospitais, a TAQNA é o parceiro estratégico que viabiliza a excelência técnica e o melhor cuidado humano.
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
