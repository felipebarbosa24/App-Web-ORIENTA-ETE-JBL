import { useRef, useState } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

// Gerar lista de turmas: 1° a 3° para cursos DS e TET, turmas A e B
const anos = [1, 2, 3];
const cursos = ["DS", "TET"];
const grupos = ["A", "B"];
const turmas: string[] = [];
for (const ano of anos) {
  for (const curso of cursos) {
    for (const grupo of grupos) {
      turmas.push(`${ano}°${curso}${grupo}`);
    }
  }
}

const horarioBase = {
  Segunda: ["Matemática", "Português", "História", "Geografia", "Ed. Física"],
  Terça: ["Física", "Química", "Biologia", "Inglês", "Arte"],
  Quarta: ["Matemática", "Português", "História", "Geografia", "Ed. Física"],
  Quinta: ["Física", "Química", "Biologia", "Inglês", "Filosofia"],
  Sexta: ["Matemática", "Sociologia", "Literatura", "Redação", "Projeto"],
};

const periodos = ["7:30 - 8:20", "8:20 - 9:10", "9:10 - 10:00", "10:20 - 11:10", "11:10 - 12:00"];

// Função de hash simples para criar seed a partir do nome da turma
function stringToSeed(str: string) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 16777619) >>> 0;
  }
  return h >>> 0;
}

// RNG determinístico (mulberry32)
function mulberry32(a: number) {
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function seededShuffle<T>(array: T[], seed: number) {
  const a = array.slice();
  const rand = mulberry32(seed);
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function generateHorarioForTurma(turma: string) {
  const seed = stringToSeed(turma);
  const dias = Object.keys(horarioBase);
  const horario: Record<string, string[]> = {};
  dias.forEach((dia, diaIndex) => {
    // shuffle the day's lessons deterministically using seed + diaIndex
    horario[dia] = seededShuffle(horarioBase[dia as keyof typeof horarioBase], seed + diaIndex);
  });
  return horario;
}

export default function Schedule() {
  const [turmaSelecionada, setTurmaSelecionada] = useState<string | null>(null);
  const [horario, setHorario] = useState<Record<string, string[]>>(horarioBase);
  const scheduleRef = useRef<HTMLDivElement | null>(null);

  function handleSelectTurma(turma: string) {
    setTurmaSelecionada(turma);
    setHorario(generateHorarioForTurma(turma));
  }

  async function handleDownloadPDF() {
    if (!scheduleRef.current || !turmaSelecionada) return;
    const element = scheduleRef.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({ orientation: "landscape", unit: "pt", format: "a4" });
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
    const imgPropsWidth = imgWidth * ratio;
    const imgPropsHeight = imgHeight * ratio;
    const marginX = (pdfWidth - imgPropsWidth) / 2;
    const marginY = (pdfHeight - imgPropsHeight) / 2;
    pdf.addImage(imgData, "PNG", marginX, marginY, imgPropsWidth, imgPropsHeight);
    pdf.save(`${turmaSelecionada}_horario.pdf`);
  }

  if (!turmaSelecionada) {
    return (
      <div className="container px-4 py-6 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-foreground mb-6">Selecione sua Turma</h1>

        <div className="grid grid-cols-3 gap-6">
          {anos.map((ano) => (
            <div key={ano} className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground text-center">{ano}º Ano</h3>
              <div className="grid gap-3">
                {turmas
                  .filter((t) => t.startsWith(`${ano}°`))
                  .map((turma) => (
                    <Button
                      key={turma}
                      onClick={() => handleSelectTurma(turma)}
                      variant="outline"
                      className="h-16 text-base font-semibold hover:bg-primary hover:text-primary-foreground"
                    >
                      {turma}
                    </Button>
                  ))}
              </div>
            </div>
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
          onClick={() => {
            setTurmaSelecionada(null);
            setHorario(horarioBase);
          }}
        >
          Trocar Turma
        </Button>
      </div>

      <div ref={scheduleRef}>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Grade de Horários - Manhã</CardTitle>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <div className="min-w-[600px]">
              <div className="grid grid-cols-6 gap-2 mb-2">
                <div className="font-bold text-sm text-center p-2">Horário</div>
                {Object.keys(horario).map((dia) => (
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
                  {Object.values(horario).map((aulas, diaIndex) => (
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
      </div>

      <Button onClick={handleDownloadPDF} className="w-full bg-success hover:bg-success/90 text-success-foreground">
        <Download className="h-4 w-4 mr-2" />
        Baixar PDF do Horário
      </Button>
    </div>
  );
}
