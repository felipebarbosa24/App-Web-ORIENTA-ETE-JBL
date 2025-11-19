import { Card, CardContent } from "@/components/ui/card";
import { Bell, Calendar, BookOpen, AlertCircle } from "lucide-react";

const notifications = [
  {
    id: 1,
    icon: Calendar,
    title: "Evento Interclasse 2025",
    description: "Inscrições abertas até sexta-feira",
    time: "2 horas atrás",
    color: "text-accent",
  },
  {
    id: 2,
    icon: BookOpen,
    title: "Nova aula adicionada",
    description: "Matemática - Trigonometria avançada",
    time: "5 horas atrás",
    color: "text-primary",
  },
  {
    id: 3,
    icon: AlertCircle,
    title: "Lembrete de estudo",
    description: "Revisar conteúdo de Física para prova",
    time: "1 dia atrás",
    color: "text-secondary",
  },
  {
    id: 4,
    icon: Bell,
    title: "Atualização de horário",
    description: "Mudança no horário de quinta-feira",
    time: "2 dias atrás",
    color: "text-success",
  },
];

export default function Notifications() {
  return (
    <div className="container px-4 py-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-foreground mb-6">Notificações</h1>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <Card key={notification.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex gap-4">
                <div className={`flex-shrink-0 ${notification.color}`}>
                  <notification.icon className="h-6 w-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground mb-1">{notification.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{notification.description}</p>
                  <p className="text-xs text-muted-foreground">{notification.time}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty state for when there are no notifications */}
      {notifications.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <Bell className="h-16 w-16 text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">Nenhuma notificação</h3>
          <p className="text-sm text-muted-foreground">Você está em dia com tudo!</p>
        </div>
      )}
    </div>
  );
}
