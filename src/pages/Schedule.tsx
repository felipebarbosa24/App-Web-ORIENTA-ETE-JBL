import { useState } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const turmas = [
  "1º DS-A", "1º DS-B", "1º DS-C",
  "2º DS-A", "2º DS-B", "2º DS-C",
  "3º DS-A", "3º DS-B", "3º DS-C",
];

const horarioExemplo = {
  "Segunda": ["Matemática", "Português", "História", "Geografia", "Ed. Física"],
  "Terça": ["Física", "Química", "Biologia", "Inglês", "Arte"],
  "Quarta": ["Matemática", "Português", "História", "Geografia", "Ed. Física"],
  "Quinta": ["Física", "Química", "Biologia", "Inglês", "Filosofia"],
  "Sexta": ["Matemática", "Sociologia", "Literatura", "Redação", "Projeto"],
};

const periodos = ["7:30 - 8:20", "8:20 - 9:10", "9:10 - 10:00", "10:20 - 11:10", "11:10 - 12:00"];

export default function Schedule() {
  const [turmaSelecionada, setTurmaSelecionada] = useState<string | null>(null);

  if (!turmaSelecionada) {
    return (
      <div className="container px-4 py-6 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-foreground mb-6">Selecione sua Turma</h1>
        
        <div className="grid grid-cols-3 gap-3">
          {turmas.map((turma) => (
            <Button
              key={turma}
              onClick={() => setTurmaSelecionada(turma)}
              variant="outline"
              className="h-20 text-base font-semibold hover:bg-primary hover:text-primary-foreground"
            >
              {turma}
            </Button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container px-4 py-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Horário de Aulas</h1>
          <p className="text-muted-foreground">{turmaSelecionada}</p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setTurmaSelecionada(null)}
        >
          Trocar Turma
        </Button>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Grade de Horários - Manhã</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <div className="min-w-[600px]">
            <div className="grid grid-cols-6 gap-2 mb-2">
              <div className="font-bold text-sm text-center p-2">Horário</div>
              {Object.keys(horarioExemplo).map((dia) => (
                <div key={dia} className="font-bold text-sm text-center p-2 bg-primary text-primary-foreground rounded">
                  {dia}
                </div>
              ))}
            </div>
            
            {periodos.map((periodo, index) => (
              <div key={periodo} className="grid grid-cols-6 gap-2 mb-2">
                <div className="text-xs font-medium text-center p-2 bg-muted rounded flex items-center justify-center">
                  {periodo}
                </div>
                {Object.values(horarioExemplo).map((aulas, diaIndex) => (
                  <div
                    key={diaIndex}
                    className="text-sm text-center p-2 bg-card border border-border rounded flex items-center justify-center"
                  >
                    {aulas[index]}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Button className="w-full bg-success hover:bg-success/90 text-success-foreground">
        <Download className="h-4 w-4 mr-2" />
        Baixar PDF Completo
      </Button>
    </div>
  );
}
