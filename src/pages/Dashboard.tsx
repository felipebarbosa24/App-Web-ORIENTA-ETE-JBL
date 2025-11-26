import { Plus, ChevronRight, Calendar, BookOpen, ArrowRight } from "lucide-react";
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
          <Link to="/schedule" className="block min-w-[280px] group">
            <Card className="min-w-[280px] bg-gradient-to-r from-primary to-accent border-0 text-primary-foreground h-full shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.02]">
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <h3 className="text-xl font-bold mb-2">Horário Escolar</h3>
                <p className="text-sm opacity-90 mb-4">Confira o horário de suas aulas e atividades</p>
                <Button variant="secondary" size="sm" className="self-start group/button">
                  Ver horários
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover/button:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          </Link>
          <Link to="/study-plan" className="block min-w-[280px] group flex">
            <Card className="flex-1 bg-gradient-to-r from-secondary to-gold border-0 shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.02]">
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <div>
                <h3 className="text-xl font-bold mb-2 text-foreground">ENEM 2025</h3>
                <p className="text-sm text-muted-foreground mb-4">Prepare-se com nossos planos de estudo</p>
                </div>
                <Button variant="outline" size="sm" className="self-start bg-background/20 border-foreground/30 text-foreground hover:bg-background/40 group-hover:bg-background/40">
                  Ver planos
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>

      {/* Quick Access Cards */}
      <div className="space-y-6">
        <Link to="/vocational" className="block">
          <Card className="group relative overflow-hidden rounded-lg border-0 bg-gradient-to-br from-accent to-blue-light text-accent-foreground shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
            <CardContent className="p-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2">Descubra seu Caminho com a IA da ORIENTA</h3>
                  <p className="text-sm opacity-90">Orientação vocacional personalizada</p>
                </div>
                <img src={robotAi} alt="AI Robot" className="w-20 h-20 object-contain flex-shrink-0" />
              </div>
              <div className="absolute bottom-4 right-4 rounded-full bg-background/20 p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <ChevronRight className="h-5 w-5 text-accent-foreground" />
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link to="/study-plan" className="block">
          <Card className="group relative overflow-hidden rounded-lg border-0 bg-secondary text-secondary-foreground shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Plano de Estudo</h3>
              <p className="text-sm opacity-90">Organize seus estudos e alcance seus objetivos</p>
              <div className="absolute bottom-4 right-4 rounded-full bg-background/20 p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <ChevronRight className="h-5 w-5 text-secondary-foreground" />
              </div>
            </CardContent>
          </Card>
        </Link>

        <div className="grid grid-cols-2 gap-4">
          <Link to="/mural" className="block">
            <Card className="group relative overflow-hidden rounded-lg border-0 bg-accent text-accent-foreground shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02] h-full">
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <div>
                  <Calendar className="h-8 w-8 mb-3 opacity-80" />
                  <h3 className="text-lg font-bold mb-1">Mural Escolar</h3>
                  <p className="text-sm opacity-90">Eventos e novidades</p>
                </div>
                <ChevronRight className="h-5 w-5 absolute bottom-4 right-4 transition-transform duration-300 group-hover:translate-x-1" />
              </CardContent>
            </Card>
          </Link>

          <Link to="/courses" className="block h-full">
            <Card className="group relative overflow-hidden rounded-lg border-0 bg-primary text-primary-foreground shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02] h-full">
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <div>
                  <BookOpen className="h-8 w-8 mb-3 opacity-80" />
                  <h3 className="text-lg font-bold mb-1">Cursos</h3>
                  <p className="text-sm opacity-90">SISU e universidades</p>
                </div>
                <ChevronRight className="h-5 w-5 absolute bottom-4 right-4 transition-transform duration-300 group-hover:translate-x-1" />
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
