import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import robotAi from "@/assets/robot-ai.png";

const prompts = [
  "Quais cursos combinam com minha personalidade?",
  "Como descobrir minha vocação profissional?",
  "Quais são as profissões do futuro?",
  "Como escolher entre diferentes carreiras?",
];

export default function Vocational() {
  return (
    <div className="container px-4 py-6 max-w-md mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-foreground mb-4">
          Descubra seu Caminho com a IA da Orienta
        </h1>
        <div className="relative w-48 h-48 mx-auto mb-6">
          <img 
            src={robotAi} 
            alt="AI Assistant Robot" 
            className="w-full h-full object-contain"
          />
          <div className="absolute -top-2 -right-2 w-16 h-16 rounded-full bg-secondary/30 blur-2xl" />
          <div className="absolute -bottom-2 -left-2 w-16 h-16 rounded-full bg-accent/30 blur-2xl" />
        </div>
        <p className="text-muted-foreground mb-6">
          Use a inteligência artificial para explorar carreiras, entender suas aptidões e planejar seu futuro profissional.
        </p>
        <Button 
          size="lg" 
          className="w-full max-w-xs bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg font-bold py-6"
        >
          Começar agora! 🚀
        </Button>
      </div>

      {/* Suggested Prompts */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-foreground mb-4">Perguntas sugeridas</h2>
        <div className="space-y-3">
          {prompts.map((prompt, index) => (
            <Card 
              key={index}
              className="hover:shadow-md transition-shadow cursor-pointer border-0 bg-card"
            >
              <CardContent className="p-4">
                <p className="text-sm text-foreground">{prompt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground mb-4">Como funciona</h2>
        
        <Card className="border-0 bg-gradient-to-br from-accent/10 to-accent/5">
          <CardContent className="p-4">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Converse com a IA</h3>
                <p className="text-sm text-muted-foreground">
                  Faça perguntas sobre carreiras, cursos e suas aptidões
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 bg-gradient-to-br from-secondary/10 to-secondary/5">
          <CardContent className="p-4">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Receba orientações personalizadas</h3>
                <p className="text-sm text-muted-foreground">
                  A IA analisa seu perfil e sugere caminhos profissionais
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 bg-gradient-to-br from-success/10 to-success/5">
          <CardContent className="p-4">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-success text-success-foreground flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Planeje seu futuro</h3>
                <p className="text-sm text-muted-foreground">
                  Crie um plano de ação para alcançar seus objetivos
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
