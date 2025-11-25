import { Plus, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import robotAi from "@/assets/robot-ai.png";

export default function Dashboard() {
  return (
    <div className="container px-4 py-6 max-w-md mx-auto">
      {/* Greeting Section */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground mb-2">Olá, Felipe 👋</h1>
        <p className="text-muted-foreground mb-4">Você tem 6 atividades hoje</p>
        <Button className="w-full bg-success hover:bg-success/90 text-success-foreground">
          <Plus className="h-4 w-4 mr-2" />
          Adicionar Lembrete
        </Button>
      </div>

      {/* Banner Carousel */}
      <div className="mb-6 overflow-x-auto">
        <div className="flex gap-4 pb-2">
          <Link to="/schedule" className="block min-w-[280px]">
            <Card className="min-w-[280px] bg-gradient-to-r from-primary to-accent border-0 text-primary-foreground h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Horário Escolar</h3>
                <p className="text-sm opacity-90 mb-4">Confira o horário de suas aulas e atividades</p>
                <Button variant="secondary" size="sm">
                  Ver horários
                </Button>
              </CardContent>
            </Card>
          </Link>
          <Link to="/study-plan" className="block min-w-[280px]">
            <Card className="min-w-[280px] bg-gradient-to-r from-secondary to-gold border-0 h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">ENEM 2025</h3>
                <p className="text-sm text-muted-foreground mb-4">Prepare-se com nossos planos de estudo</p>
                <Button variant="outline" size="sm">
                  Ver planos
                </Button>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>

      {/* Quick Access Cards */}
      <div className="space-y-6">
        <Link to="/vocational" className="block">
          <Card className="border-0 bg-gradient-to-br from-accent to-blue-light text-accent-foreground hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2">Descubra seu Caminho com a IA da Orienta</h3>
                  <p className="text-sm opacity-90">Orientação vocacional personalizada</p>
                </div>
                <img src={robotAi} alt="AI Robot" className="w-20 h-20 object-contain flex-shrink-0" />
              </div>
              <ChevronRight className="h-5 w-5 mt-2" />
            </CardContent>
          </Card>
        </Link>

        <Link to="/study-plan" className="block">
          <Card className="border-0 bg-secondary text-secondary-foreground hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Plano de Estudo</h3>
              <p className="text-sm opacity-90">Organize seus estudos e alcance seus objetivos</p>
              <ChevronRight className="h-5 w-5 mt-2" />
            </CardContent>
          </Card>
        </Link>

        <div className="grid grid-cols-2 gap-4">
          <Link to="/mural" className="block">
            <Card className="border-0 bg-accent text-accent-foreground hover:shadow-lg transition-shadow h-full">
              <CardContent className="p-4">
                <h3 className="text-base font-bold mb-1">Mural Escolar</h3>
                <p className="text-xs opacity-90">Eventos e novidades</p>
                <ChevronRight className="h-4 w-4 mt-2" />
              </CardContent>
            </Card>
          </Link>

          <Link to="/courses" className="block">
            <Card className="border-0 bg-primary text-primary-foreground hover:shadow-lg transition-shadow h-full">
              <CardContent className="p-4">
                <h3 className="text-base font-bold mb-1">Cursos</h3>
                <p className="text-xs opacity-90">SISU e universidades</p>
                <ChevronRight className="h-4 w-4 mt-2" />
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="fixed top-20 right-0 w-32 h-32 rounded-full bg-gold/20 blur-3xl -z-10" />
      <div className="fixed bottom-32 left-0 w-32 h-32 rounded-full bg-accent/20 blur-3xl -z-10" />
    </div>
  );
}
