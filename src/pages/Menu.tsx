import { Card, CardContent } from "@/components/ui/card";

export default function Menu() {
const dias = ["SEG", "TER", "QUA", "QUI", "SEX"];
const refeicoes = [
["Canja de Galinha", "Canja de Galinha", "Canja de Galinha"],
["Canja de Galinha", "Canja de Galinha", "Canja de Galinha"],
["Canja de Galinha", "Canja de Galinha", "Canja de Galinha"],
["Canja de Galinha", "Canja de Galinha", "Canja de Galinha"],
["Canja de Galinha", "Canja de Galinha", "Canja de Galinha"],
];

return (

<div className="container px-4 py-6 max-w-3xl mx-auto"> <h1 className="text-2xl font-bold text-foreground mb-6">Cardápio da Semana</h1>


  <Card className="shadow-lg border-0">
    <CardContent className="p-4">
      <div className="grid grid-cols-4 md:grid-cols-4 border border-border rounded-lg overflow-hidden text-center">

        {/* Cabeçalho */}
        <div className="bg-primary text-primary-foreground font-bold py-3">Dia</div>
        <div className="bg-primary text-primary-foreground font-bold py-3 col-span-3">Refeições</div>

        {/* Linhas */}
        {dias.map((dia, index) => (
          <>
            <div className="font-semibold py-4 border border-border">{dia}</div>

            {refeicoes[index].map((ref, i) => (
              <div key={i} className="py-4 border border-border text-sm">
                {ref}
              </div>
            ))}
          </>
        ))}
      </div>
    </CardContent>
  </Card>
</div>

);
}
