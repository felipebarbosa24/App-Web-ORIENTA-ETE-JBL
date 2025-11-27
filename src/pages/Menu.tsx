import { useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default function Menu() {
  const dias = ["SEG", "TER", "QUA", "QUI", "SEX"];
  const refeicoes = [
    ["Arroz, Feijão e Frango Grelhado", "Salada de Alface e Tomate", "Suco de Goiaba"],
    ["Macarronada à Bolonhesa", "Pão Francês", "Suco de Uva"],
    ["Feijoada", "Arroz Branco", "Laranja"],
    ["Arroz, Feijão e Bife Acebolado", "Purê de Batata", "Suco de Maracujá"],
    ["Peixe Empanado", "Arroz e Vinagrete", "Gelatina de Morango"],
  ];

  const tableRef = useRef<HTMLDivElement>(null);

  const downloadPDF = async () => {
    if (tableRef.current) {
      // Settings for better quality
      const canvas = await html2canvas(tableRef.current, {
        scale: 2, // Better quality
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });
      
      const imgData = canvas.toDataURL('image/png', 1.0);
      
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      // Calculates dimensions while maintaining proportion
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = imgHeight / imgWidth;
      let imgPDFHeight = pdfWidth * ratio;
      
      // If the image is too tall, adjust it to fit the page.
      if (imgPDFHeight > pdfHeight) {
        imgPDFHeight = pdfHeight - 10; // Margem de 10mm
      }
      
      // Centers vertically
      const yPosition = (pdfHeight - imgPDFHeight) / 2;
      
      pdf.addImage(imgData, 'PNG', 0, yPosition, pdfWidth, imgPDFHeight);
      pdf.save('cardapio-semanal.pdf');
    }
  };

  return (
    <div className="container px-4 py-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-foreground mb-6">Cardápio da Semana</h1>

      <Card className="shadow-lg border-0 mb-6">
        <CardContent className="p-4">
          {/* Specific div to capture only the table. */}
          <div 
            ref={tableRef}
            className="bg-white" // Force white background for PDF
          >
            <div className="grid grid-cols-4 md:grid-cols-4 border border-border rounded-lg overflow-hidden text-center">
              {/* Header */}
              <div className="bg-primary text-primary-foreground font-bold py-3">Dia</div>
              <div className="bg-primary text-primary-foreground font-bold py-3 col-span-3">Refeições</div>

              {/* Lines */}
              {dias.map((dia, index) => (
                <div key={dia} className="contents">
                  <div className="font-semibold py-4 border border-border bg-white">{dia}</div>
                  {refeicoes[index].map((ref, i) => (
                    <div key={i} className="py-4 border border-border text-sm bg-white">
                      {ref}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Button 
        className="w-full bg-success hover:bg-success/90 text-success-foreground"
        onClick={downloadPDF}
      >
        <Download className="h-4 w-4 mr-2" />
        Baixar PDF Completo
      </Button>
    </div>
  );
}