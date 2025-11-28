import { Link } from 'react-router-dom';

export function Trigonometry() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          {/* Cabeçalho com botão voltar */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
            <Link 
              to="/notifications"
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Voltar para Notificações</span>
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">Trigonometria Avançada</h1>
            <div className="w-24"></div> {/* Espaço para alinhamento */}
          </div>

          {/* Conteúdo da aula */}
          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-blue-700 mb-4">
                Introdução à Trigonometria Avançada
              </h2>
              <p className="text-gray-700 mb-4">
                A trigonometria avançada estuda as relações entre os lados e ângulos de triângulos, 
                com aplicações em diversas áreas da matemática, física e engenharia.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-blue-700 mb-4">
                Identidades Trigonométricas
              </h2>
              <p className="text-gray-700 mb-4">
                As identidades trigonométricas são igualdades que envolvem funções trigonométricas 
                e são verdadeiras para todos os valores das variáveis envolvidas.
              </p>
              
              <div className="bg-gray-100 p-4 rounded-lg mb-3 font-mono text-center">
                sen²(x) + cos²(x) = 1
              </div>
              
              <div className="bg-gray-100 p-4 rounded-lg mb-3 font-mono text-center">
                tan(x) = sen(x) / cos(x)
              </div>
              
              <div className="bg-gray-100 p-4 rounded-lg mb-3 font-mono text-center">
                sen(2x) = 2 sen(x) cos(x)
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-blue-700 mb-4">
                Lei dos Senos e Lei dos Cossenos
              </h2>
              <p className="text-gray-700 mb-4">
                Estas leis relacionam os lados e ângulos de triângulos não retângulos.
              </p>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-3">
                <h3 className="font-semibold text-blue-800 mb-2">Lei dos Senos</h3>
                <p className="font-mono text-center">a/sen(A) = b/sen(B) = c/sen(C)</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-3">
                <h3 className="font-semibold text-blue-800 mb-2">Lei dos Cossenos</h3>
                <p className="font-mono text-center">a² = b² + c² - 2bc cos(A)</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-700 mb-4">
                Aplicações Práticas
              </h2>
              <p className="text-gray-700">
                A trigonometria avançada é utilizada em problemas de navegação, engenharia civil, 
                astronomia e muito mais. Estas ferramentas matemáticas são essenciais para resolver 
                problemas do mundo real envolvendo distâncias e ângulos.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}