import { Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const courses = [
  {
    id: 1,
    name: "Ciência da Computação",
    university: "UFPE",
    cutoffScore: "782.5",
  },
  {
    id: 2,
    name: "Medicina",
    university: "UFPE",
    cutoffScore: "845.2",
  },
  {
    id: 3,
    name: "Engenharia Civil",
    university: "UFPE",
    cutoffScore: "756.8",
  },
  {
    id: 4,
    name: "Direito",
    university: "UFPE",
    cutoffScore: "798.4",
  },
  {
    id: 5,
    name: "Administração",
    university: "UFPE",
    cutoffScore: "724.6",
  },
  {
    id: 6,
    name: "Psicologia",
    university: "UFPE",
    cutoffScore: "765.3",
  },
];

export default function Courses() {
  return (
    <div className="container px-4 py-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-foreground mb-6">Cursos SISU</h1>

      {/* Search Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Pesquisar por Cursos"
          className="pl-10"
        />
      </div>

      {/* Info Card */}
      <Card className="mb-6 border-0 bg-accent text-accent-foreground">
        <CardContent className="p-4">
          <p className="text-sm">
            <strong>SISU 2025:</strong> Confira as notas de corte e escolha o melhor curso para você!
          </p>
        </CardContent>
      </Card>

      {/* Courses List */}
      <div className="space-y-3">
        {courses.map((course) => (
          <Link key={course.id} to={`/courses/${course.id}`}>
            <Card className="hover:shadow-lg transition-shadow border-0">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground mb-1">
                      {course.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {course.university}
                    </p>
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                      Nota de Corte Média: {course.cutoffScore}
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-2xl flex-shrink-0 ml-4">
                    📚
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Stats Card */}
      <Card className="mt-6 border-0 bg-muted">
        <CardContent className="p-4">
          <h3 className="font-semibold text-foreground mb-3 text-center">Estatísticas SISU</h3>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-primary">250+</p>
              <p className="text-xs text-muted-foreground">Cursos disponíveis</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-success">95%</p>
              <p className="text-xs text-muted-foreground">Taxa de atualização</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
