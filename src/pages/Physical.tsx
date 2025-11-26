// src/pages/Physical.tsx
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Atom, Clock } from "lucide-react";

export default function Physical() {
  return (
    <div className="container px-4 py-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-foreground mb-6">Estudos de Física</h1>

      <Card className="mb-6 shadow-sm">
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <Atom className="h-10 w-10 text-primary" />
            <div>
              <h2 className="font-semibold text-lg">Revisão para a Prova</h2>
              <p className="text-muted-foreground text-sm">
                Conteúdos essenciais que você deve revisar.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {/* Item 1 */}
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold mb-2">Cinemática</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Movimento uniforme, MRUV, gráficos e equações.
            </p>
            <div className="flex items-center text-xs text-primary gap-1">
              <Clock className="h-4 w-4" />
              30 minutos de estudo
            </div>
          </CardContent>
        </Card>

        {/* Item 2 */}
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold mb-2">Forças e Leis de Newton</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Conceitos de força, peso, normal, atrito e as 3 leis.
            </p>
            <div className="flex items-center text-xs text-primary gap-1">
              <Clock className="h-4 w-4" />
              25 minutos de estudo
            </div>
          </CardContent>
        </Card>

        {/* Item 3 */}
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold mb-2">Energia e Trabalho</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Energia cinética, potencial e o teorema da energia.
            </p>
            <div className="flex items-center text-xs text-primary gap-1">
              <Clock className="h-4 w-4" />
              20 minutos de estudo
            </div>
          </CardContent>
        </Card>

        {/* Item 4 */}
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold mb-2">Ondulatória</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Tipos de ondas, frequência, amplitude e equações.
            </p>
            <div className="flex items-center text-xs text-primary gap-1">
              <Clock className="h-4 w-4" />
              15 minutos de estudo
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
