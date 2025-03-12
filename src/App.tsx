
import { useState, useEffect } from 'react';
import { Book, Lightbulb, UserPlus, Clock, CheckCircle, Users, Mail } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ConstructionBanner from '@/components/ConstructionBanner';
import FeatureCard from '@/components/FeatureCard';
import TestimonialCard from '@/components/TestimonialCard';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <ConstructionBanner />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <span className={`inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4 transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              Plataforma en Desarrollo
            </span>
            <h1 className={`text-4xl md:text-6xl font-bold tracking-tight transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              La nueva forma de <span className="text-primary">aprender</span> y <span className="text-primary">enseñar</span>
            </h1>
            <p className={`text-xl text-muted-foreground transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Una plataforma educativa diseñada para transformar la experiencia de aprendizaje, conectando estudiantes y profesores en un entorno digital innovador.
            </p>
            <div className={`flex flex-wrap justify-center gap-4 pt-6 transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <a 
                href="#registro" 
                className="rounded-full bg-primary text-white px-8 py-3 font-medium hover-scale"
              >
                Registrarse
              </a>
              <a 
                href="#caracteristicas" 
                className="rounded-full bg-secondary text-foreground px-8 py-3 font-medium hover-scale"
              >
                Descubrir más
              </a>
            </div>
          </div>
          
          <div className={`mt-16 relative rounded-xl overflow-hidden w-full max-w-5xl mx-auto shadow-xl transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-md'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent pointer-events-none"></div>
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80" 
              alt="Plataforma educativa" 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="caracteristicas" className="py-20 px-6 md:px-12 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
              Características
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Una experiencia educativa sin precedentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Nuestra plataforma está diseñada para potenciar el aprendizaje con herramientas intuitivas y funcionalidades avanzadas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={Book}
              title="Contenido Interactivo"
              description="Materiales educativos dinámicos que mejoran la comprensión y retención del conocimiento."
              delay={1}
            />
            <FeatureCard 
              icon={UserPlus}
              title="Perfiles Personalizados"
              description="Adaptados a las necesidades específicas de estudiantes y profesores."
              delay={2}
            />
            <FeatureCard 
              icon={Lightbulb}
              title="Aprendizaje Adaptativo"
              description="Algoritmos inteligentes que se ajustan al ritmo y estilo de aprendizaje de cada estudiante."
              delay={3}
            />
            <FeatureCard 
              icon={Clock}
              title="Acceso 24/7"
              description="Disponibilidad continua a todos los recursos educativos desde cualquier dispositivo."
              delay={4}
            />
            <FeatureCard 
              icon={CheckCircle}
              title="Evaluación Efectiva"
              description="Sistemas de evaluación que proporcionan retroalimentación inmediata y detallada."
              delay={5}
            />
            <FeatureCard 
              icon={Users}
              title="Colaboración"
              description="Herramientas para facilitar el trabajo en equipo y el intercambio de conocimientos."
              delay={5}
            />
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section id="beneficios" className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-scale-in">
              <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
                Beneficios
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Transformando la forma de aprender
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 bg-primary/10 rounded-full p-1 mr-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Flexibilidad Total</h3>
                    <p className="text-muted-foreground">Aprende a tu propio ritmo, sin restricciones horarias ni geográficas.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 bg-primary/10 rounded-full p-1 mr-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Personalización</h3>
                    <p className="text-muted-foreground">Experiencias de aprendizaje adaptadas a tus necesidades e intereses específicos.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 bg-primary/10 rounded-full p-1 mr-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Seguimiento Continuo</h3>
                    <p className="text-muted-foreground">Analíticas detalladas de tu progreso académico en tiempo real.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 bg-primary/10 rounded-full p-1 mr-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Comunidad Activa</h3>
                    <p className="text-muted-foreground">Forma parte de una red global de estudiantes y educadores.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="relative rounded-xl overflow-hidden h-[500px] animate-blur-in">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80" 
                  alt="Estudiante usando la plataforma" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="backdrop-blur-card rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                      <span className="text-sm font-medium">En línea: 2,543 estudiantes</span>
                    </div>
                    <div className="flex gap-2">
                      <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white text-xs">JS</div>
                      <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white text-xs">MR</div>
                      <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white text-xs">AT</div>
                      <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white text-xs">LP</div>
                      <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white text-xs">+</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonios" className="py-20 px-6 md:px-12 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
              Testimonios
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Lo que dicen nuestros usuarios
            </h2>
            <p className="text-lg text-muted-foreground">
              Experiencias reales de estudiantes y profesores que ya están transformando su forma de aprender y enseñar.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard 
              quote="Esta plataforma ha revolucionado mi forma de enseñar. Ahora puedo conectar mejor con mis estudiantes y hacer un seguimiento detallado de su progreso."
              author="María Rodríguez"
              role="Profesora de Matemáticas"
              imageSrc="https://randomuser.me/api/portraits/women/44.jpg"
              delay={1}
            />
            <TestimonialCard 
              quote="La flexibilidad de esta plataforma me ha permitido compaginar mis estudios con mi trabajo. Los recursos interactivos hacen que aprender sea mucho más entretenido."
              author="Carlos Méndez"
              role="Estudiante de Ingeniería"
              imageSrc="https://randomuser.me/api/portraits/men/32.jpg"
              delay={2}
            />
            <TestimonialCard 
              quote="Como administrador educativo, he visto cómo esta plataforma ha mejorado significativamente los resultados académicos de nuestros estudiantes."
              author="Laura Sánchez"
              role="Directora Académica"
              imageSrc="https://randomuser.me/api/portraits/women/68.jpg"
              delay={3}
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section id="registro" className="py-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <div className="backdrop-blur-card rounded-xl p-10 relative overflow-hidden">
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl"></div>
            
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Únete a la revolución educativa
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Sé de los primeros en experimentar el futuro de la educación. Regístrate ahora para recibir novedades y acceso anticipado.
            </p>
            
            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                    <input 
                      type="email"
                      placeholder="Tu correo electrónico"
                      className="w-full pl-10 pr-4 py-3 rounded-full border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                </div>
                <button 
                  type="submit" 
                  className="rounded-full bg-primary text-white px-6 py-3 font-medium hover-scale"
                >
                  Registrarse
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 border-t">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Book className="h-6 w-6 text-primary" />
                <span className="text-xl font-semibold">PlataformaEducativaUma</span>
              </div>
              <p className="text-muted-foreground max-w-md">
                Transformando la educación a través de tecnología innovadora y experiencias de aprendizaje personalizadas.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Enlaces</h3>
              <ul className="space-y-3">
                <li><a href="#caracteristicas" className="text-muted-foreground hover:text-foreground transition-colors">Características</a></li>
                <li><a href="#beneficios" className="text-muted-foreground hover:text-foreground transition-colors">Beneficios</a></li>
                <li><a href="#testimonios" className="text-muted-foreground hover:text-foreground transition-colors">Testimonios</a></li>
                <li><a href="#contacto" className="text-muted-foreground hover:text-foreground transition-colors">Contacto</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Términos y Condiciones</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Política de Privacidad</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} PlataformaEducativaUma. Todos los derechos reservados.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
