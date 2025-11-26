import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function Menu() {
const dias = ["SEG", "TER", "QUA", "QUI", "SEX"];
const refeicoes = [
["Arroz, Feijão e Frango Grelhado", "Salada de Alface e Tomate", "Suco de Goiaba"],
["Macarronada à Bolonhesa", "Pão Francês", "Suco de Uva"],
["Feijoada", "Arroz Branco", "Laranja"],
["Arroz, Feijão e Bife Acebolado", "Purê de Batata", "Suco de Maracujá"],
["Peixe Empanado", "Arroz e Vinagrete", "Gelatina de Morango"],
];

return (

<div className="container px-4 py-6 max-w-3xl mx-auto"> <h1 className="text-2xl font-bold text-foreground mb-6">Cardápio da Semana</h1>


  <Card className="shadow-lg border-0 mb-6">
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

        <Button className="w-full bg-success hover:bg-success/90 text-success-foreground">
        <Download className="h-4 w-4 mr-2" />
        Baixar PDF Completo
        </Button>

</div>

);
}
