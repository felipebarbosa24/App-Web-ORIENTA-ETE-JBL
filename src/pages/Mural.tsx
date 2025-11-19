import { Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const eventsThisWeek = [
  {
    id: 1,
    title: "Interclasse 2025",
    date: "15-20 Mar",
    description: "Semana esportiva com competições entre turmas",
    image: "🏆",
    color: "from-accent to-blue-light",
  },
  {
    id: 2,
    title: "Feira de Ciências",
    date: "22 Mar",
    description: "Apresentação de projetos científicos",
    image: "🔬",
    color: "from-secondary to-gold",
  },
];

const futureEvents = [
  {
    id: 1,
    title: "Palestra de Carreiras",
    date: "5 Abr",
    description: "Profissionais de diversas áreas compartilham experiências",
  },
  {
    id: 2,
    title: "Simulado ENEM",
    date: "12 Abr",
    description: "Teste seus conhecimentos com questões estilo ENEM",
  },
  {
    id: 3,
    title: "Festa Junina",
    date: "20 Jun",
    description: "Celebração tradicional com comidas típicas e quadrilha",
  },
  {
    id: 4,
    title: "Formatura 3º Ano",
    date: "15 Dez",
    description: "Cerimônia de formatura dos concluintes",
  },
];

export default function Mural() {
  return (
    <div className="container px-4 py-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-foreground mb-6">Mural Escolar</h1>

      {/* Events This Week */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-foreground mb-4">Eventos da semana</h2>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {eventsThisWeek.map((event) => (
            <Card 
              key={event.id}
              className={`min-w-[280px] border-0 bg-gradient-to-br ${event.color} text-white`}
            >
              <CardContent className="p-6">
                <div className="text-4xl mb-3">{event.image}</div>
                <div className="flex items-center gap-2 mb-2 text-sm opacity-90">
                  <Calendar className="h-4 w-4" />
                  <span>{event.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-sm opacity-90">{event.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Future Events */}
      <div>
        <h2 className="text-lg font-semibold text-foreground mb-4">Eventos Futuros</h2>
        <div className="space-y-3">
          {futureEvents.map((event) => (
            <Card key={event.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center justify-center bg-primary text-primary-foreground rounded-lg p-3 flex-shrink-0">
                    <span className="text-2xl font-bold">
                      {event.date.split(' ')[0]}
                    </span>
                    <span className="text-xs">
                      {event.date.split(' ')[1]}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground mb-1">{event.title}</h3>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Calendar CTA */}
      <Card className="mt-6 border-0 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <CardContent className="p-6 text-center">
          <Calendar className="h-12 w-12 mx-auto mb-3" />
          <h3 className="text-lg font-bold mb-2">Sincronize com seu calendário</h3>
          <p className="text-sm opacity-90 mb-4">
            Nunca perca um evento importante da escola
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
