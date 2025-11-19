import { Search, Filter, Plus, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const studyPlans = [
  {
    id: 1,
    name: "ENEM",
    description: "Plano completo para o ENEM 2025",
    logo: "🎯",
    color: "bg-secondary",
  },
  {
    id: 2,
    name: "UPE",
    description: "Preparação para vestibular UPE",
    logo: "📚",
    color: "bg-accent",
  },
  {
    id: 3,
    name: "ESA",
    description: "Escola de Sargentos das Armas",
    logo: "🎖️",
    color: "bg-primary",
  },
  {
    id: 4,
    name: "ITA/IME",
    description: "Institutos Tecnológicos Militares",
    logo: "🚀",
    color: "bg-success",
  },
];

export default function StudyPlan() {
  return (
    <div className="container px-4 py-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-foreground mb-6">Plano de Estudos</h1>

      {/* Search Bar */}
      <div className="flex gap-2 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Pesquisar planos..."
            className="pl-10"
          />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      {/* Add New Button */}
      <Button className="w-full mb-6 bg-success hover:bg-success/90 text-success-foreground">
        <Plus className="h-4 w-4 mr-2" />
        Criar Novo Plano
      </Button>

      {/* Study Plans List */}
      <div className="space-y-4">
        {studyPlans.map((plan) => (
          <Card key={plan.id} className="hover:shadow-lg transition-shadow border-0">
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 rounded-xl ${plan.color} flex items-center justify-center text-3xl flex-shrink-0`}>
                  {plan.logo}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-lg text-foreground mb-1">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>
                <Button size="sm" className="bg-success hover:bg-success/90 flex-shrink-0">
                  Verificar
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Stats Section */}
      <Card className="mt-6 border-0 bg-muted">
        <CardContent className="p-4">
          <h3 className="font-semibold text-foreground mb-3">Seu Progresso</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-primary">4</p>
              <p className="text-xs text-muted-foreground">Planos Ativos</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-success">78%</p>
              <p className="text-xs text-muted-foreground">Completo</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-secondary">24</p>
              <p className="text-xs text-muted-foreground">Dias Restantes</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
