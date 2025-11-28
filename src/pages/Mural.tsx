import { Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Import das imagens locais
import interclassImg from "@/assets/interclass.jpeg";
import ufpeImg from "@/assets/UFPE.jpg";
import enemSimulationImg from "@/assets/ENEM-simulation.png";
import interclassAwardImg from "@/assets/interclass-award.png";
import libraryImg from "@/assets/library.jpg";
import valentinesImg from "@/assets/valentines-day.webp";
import juneCelebrationImg from "@/assets/june-celebration.jpg";
import graduationImg from "@/assets/graduation.webp";

const eventsThisWeek = [
  {
    id: 1,
    title: "Interclasse 2025",
    date: "15–20 Mar",
    description: "Saiba o tema de sua turma e os dias que o evento ocorrerá.",
    image: interclassImg,
  },
  {
    id: 2,
    title: "Inscrições para visita à UFPE",
    date: "16-22 Mar",
    description: "Saiba como se inscrever e o prazo final das inscrições.",
    image: ufpeImg,
  },
];

const sideEvents = [
  {
    id: 1,
    title: "Semana da Leitura",
    description: "Uma semana de atividades sobre literatura e escrita.",
    image: libraryImg,
  },
  {
    id: 2,
    title: "Dia dos Namorados",
    description: "Um dia para celebrar o amor e a conexão entre as pessoas.",
    image: valentinesImg,
  },
];

const futureEvents = [
  {
    id: 1,
    title: "Simulado ENEM",
    date: "5 Abr",
    description: "Questões modelo ENEM por área de conhecimento.",
    image: enemSimulationImg,
  },
  {
    id: 2,
    title: "Premiação do Interclasse 2025",
    date: "12 Abr",
    description: "Cerimônia de encerramento e celebração com a entrega das medalhas.",
    image: interclassAwardImg,
  },
  {
    id: 3,
    title: "Festa Junina",
    date: "20 Jun",
    description: "Comidas típicas, brincadeiras e quadrilha.",
    image: juneCelebrationImg,
  },
  {
    id: 4,
    title: "Formatura 3º Ano",
    date: "15 Dez",
    description: "Cerimônia oficial de encerramento.",
    image: graduationImg,
  },
];

export default function Mural() {
  return (
    <div className="container px-4 py-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-foreground mb-6">Mural Escolar</h1>

      {/* ---------------------- EVENTOS DA SEMANA ---------------------- */}
      <h2 className="text-lg font-semibold text-foreground mb-4">
        Eventos da semana
      </h2>

      <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
        {eventsThisWeek.map((event) => (
          <Card
            key={event.id}
            className="min-w-[280px] rounded-xl border shadow-md snap-start overflow-hidden"
          >
            <div className="h-40 w-full overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>

            <CardContent className="p-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                <Calendar className="h-4 w-4" />
                <span>{event.date}</span>
              </div>

              <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
              <p className="text-sm text-muted-foreground">{event.description}</p>

            </CardContent>
          </Card>
        ))}
      </div>

      {/* ---------------------- CARTÕES MENORES ---------------------- */}
      <div className="flex gap-4 mt-6 overflow-x-auto pb-2 snap-x snap-mandatory">
        {sideEvents.map((event) => (
          <Card
            key={event.id}
            className="min-w-[200px] rounded-xl border shadow-sm snap-start overflow-hidden"
          >
            <div className="h-28 w-full overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>

            <CardContent className="p-3">
              <h3 className="text-sm font-semibold leading-tight">
                {event.title}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                {event.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* ---------------------- EVENTOS FUTUROS ---------------------- */}
      <h2 className="text-lg font-semibold text-foreground mt-8 mb-4">
        Eventos futuros
      </h2>

      <div className="space-y-3">
        {futureEvents.map((event) => (
          <Card
            key={event.id}
            className="relative overflow-hidden rounded-xl hover:shadow-md transition-shadow"
          >
            {/* Imagem como background */}
            {event.image && (
              <img
                src={event.image}
                alt={event.title}
                className="absolute inset-0 w-full h-full object-cover opacity-90"
              />
            )}

            {/* Overlay escuro */}
            {event.image && (
              <div className="absolute inset-0 bg-black/20"></div>
            )}

            <CardContent className="relative p-4">
              <div className="flex gap-4">
                {/* bloco da data */}
                <div className="flex flex-col items-center justify-center bg-primary text-primary-foreground rounded-lg p-3 w-14">
                  <span className="text-xl font-bold">
                    {event.date.split(" ")[0]}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider">
                    {event.date.split(" ")[1]}
                  </span>
                </div>

                {/* texto */}
                <div className="flex-1">
                  <h3 className="font-bold text-white mb-1">
                    {event.title}
                  </h3>
                  <p className="text-sm text-white/90">
                    {event.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* ---------------------- CTA FINAL ---------------------- */}
      <Card className="mt-8 border-0 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl shadow-md">
        <CardContent className="p-6 text-center">
          <Calendar className="h-12 w-12 mx-auto mb-3" />
          <h3 className="text-lg font-bold mb-2">
            Sincronize com seu calendário
          </h3>
          <p className="text-sm opacity-90">
            Nunca perca um evento importante da escola.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
