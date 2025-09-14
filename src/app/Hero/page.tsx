'use client';
import { useState } from 'react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('27001');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleQuoteRequest = async () => {
    setIsLoading(true);
    setMessage('');
    
    try {
      const response = await fetch('/api/hero', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service: activeTab,
          action: 'quote_request',
          timestamp: new Date().toISOString(),
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setMessage('✅ Solicitud enviada correctamente. Te contactaremos pronto.');
      } else {
        setMessage('❌ Error al enviar la solicitud. Intenta nuevamente.');
      }
    } catch (error) {
      setMessage('❌ Error de conexión. Intenta nuevamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-gradient-to-br from-blue-900 to-indigo-800 text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Soluciones de Auditoría en 
              <span className="text-cyan-300"> Normas ICONTEC</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Especialistas en certificación de sistemas de información bajo las normas NTC-ISO-IEC 27001 y 20000-1
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleQuoteRequest}
                disabled={isLoading}
                className="bg-cyan-500 hover:bg-cyan-400 disabled:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </>
                ) : (
                  'Solicitar Cotización'
                )}
              </button>
              <button className="bg-transparent hover:bg-blue-800 text-white font-semibold py-3 px-6 border-2 border-white rounded-lg transition duration-300">
                Conocer Más
              </button>
            </div>

            {message && (
              <div className="mt-4 p-3 bg-blue-800 rounded-lg">
                <p className="text-sm">{message}</p>
              </div>
            )}
            
            <div className="mt-10 flex items-center">
              <div className="flex -space-x-4 mr-4">
                <div className="w-10 h-10 rounded-full bg-blue-700 border-2 border-blue-900"></div>
                <div className="w-10 h-10 rounded-full bg-blue-600 border-2 border-blue-900"></div>
                <div className="w-10 h-10 rounded-full bg-blue-500 border-2 border-blue-900"></div>
              </div>
              <p className="text-blue-200 text-sm">
                <span className="font-semibold">+200 empresas</span> certificadas con nosotros
              </p>
            </div>
          </div>
          
      
          <div className="md:w-1/2 bg-white/10 backdrop-blur-md rounded-xl p-6">
            <div className="flex border-b border-blue-400 mb-6">
              <button 
                className={`py-2 px-4 font-semibold ${activeTab === '27001' ? 'text-cyan-300 border-b-2 border-cyan-300' : 'text-blue-200'}`}
                onClick={() => setActiveTab('27001')}
              >
                NTC-ISO-IEC 27001
              </button>
              <button 
                className={`py-2 px-4 font-semibold ${activeTab === '20000' ? 'text-cyan-300 border-b-2 border-cyan-300' : 'text-blue-200'}`}
                onClick={() => setActiveTab('20000')}
              >
                NTC-ISO-IEC 20000-1
              </button>
            </div>
            
            {activeTab === '27001' ? (
              <div>
                <h3 className="text-xl font-bold mb-3">Sistema de Gestión de Seguridad de la Información</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-2">✓</span>
                    <span>Protección de datos confidenciales</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-2">✓</span>
                    <span>Gestión de riesgos de seguridad</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-2">✓</span>
                    <span>Cumplimiento legal y regulatorio</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-2">✓</span>
                    <span>Mejora continua de los procesos</span>
                  </li>
                </ul>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-bold mb-3">Sistema de Gestión de Servicios de TI</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-2">✓</span>
                    <span>Gestión eficiente de servicios TI</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-2">✓</span>
                    <span>Alineación con objetivos de negocio</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-2">✓</span>
                    <span>Mejora en la satisfacción del cliente</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-2">✓</span>
                    <span>Reducción de costos operativos</span>
                  </li>
                </ul>
              </div>
            )}
            
            <div className="mt-6 pt-4 border-t border-blue-400">
              <p className="text-blue-200 text-sm">
                Ambos servicios incluyen: diagnóstico inicial, implementación, auditoría y certificación
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}