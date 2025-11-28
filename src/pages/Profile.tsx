import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="container px-4 py-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-foreground mb-6">Meu Perfil</h1>

      <Card className="border-0 shadow-lg">
        <CardContent className="p-8 flex flex-col items-center">
          {/* Profile Photo */}
          <Avatar className="h-32 w-32 mb-4 border-4 border-primary">
              <AvatarImage src="src/assets/profile-photo.png"/>
              <AvatarFallback className="text-3xl font-bold bg-secondary text-secondary-foreground">
                FH
              </AvatarFallback>
            </Avatar>

          {/* Name and Class */}
          <h2 className="text-2xl font-bold text-foreground mb-1">Fernando Henrique Cardoso</h2>
          <p className="text-lg text-muted-foreground mb-6">3º DSA</p>

          {/* Action Buttons */}
          <div className="w-full space-y-3 mb-6">
            <Link to="/schedule" className="block">
              <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                Meus Horários
              </Button>
            </Link>
            <Link to="/menu" className="block">
              <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                Cardápio
              </Button>
            </Link>
          </div>

          {/* Logout Button */}
          <Link to="/" className="block w-full">
            <Button 
              variant="destructive" 
              className="w-full" 
              size="lg"
            >
              <LogOut className="h-5 w-5 mr-2" />
              Sair da Conta
            </Button>
          </Link>
        </CardContent>
      </Card>

      {/* Additional Info Cards */}
      <div className="mt-6 space-y-4">
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold text-foreground mb-2">Informações Acadêmicas</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex justify-between">
                <span>Matrícula:</span>
                <span className="font-medium text-foreground">2024001234</span>
              </div>
              <div className="flex justify-between">
                <span>Turno:</span>
                <span className="font-medium text-foreground">Manhã</span>
              </div>
              <div className="flex justify-between">
                <span>Ano Letivo:</span>
                <span className="font-medium text-foreground">2025</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
