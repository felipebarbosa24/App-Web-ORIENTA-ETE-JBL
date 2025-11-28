import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Bell,
  User,
  Menu,
  LayoutDashboard,
  CalendarDays,
  BookText,
  Briefcase,
  GraduationCap,
  LogOut,
  HelpCircle,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-orienta.png";

interface LayoutProps {
  children: ReactNode;
}

const navItems = [
  { path: "/", icon: Home, label: "Início" },
  { path: "/notifications", icon: Bell, label: "Notificações" },
  { path: "/profile", icon: User, label: "Perfil" },
];

const menuItems = [
  { path: "/mural", icon: LayoutDashboard, label: "Mural escolar" },
  { path: "/schedule", icon: CalendarDays, label: "Horário" },
  { path: "/study-plan", icon: BookText, label: "Plano de Estudos" },
  { path: "/vocational", icon: Briefcase, label: "Teste Vocacional" },
  { path: "/courses", icon: GraduationCap, label: "Notas de Corte" },
];

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-primary shadow-md">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Orienta Logo" className="h-12 w-12 rounded-full" />
            <span className="text-2xl font-bold text-primary-foreground">ORIENTA</span>
          </Link>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary/90">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 bg-sidebar">
              <nav className="flex flex-col gap-4 mt-8">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="flex items-center gap-3 text-sidebar-foreground hover:text-sidebar-primary transition-colors px-4 py-2 rounded-lg hover:bg-sidebar-accent"
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                ))}
                <div className="border-t border-sidebar-border my-2" />
                <a href="https://projeto-orienta.vercel.app/duvidas" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sidebar-foreground hover:text-sidebar-primary transition-colors px-4 py-2 rounded-lg">
                  <HelpCircle className="h-5 w-5"/>
                  <span className="font-medium">Ajuda</span>
                </a>
                <button className="flex items-center gap-3 text-destructive hover:text-destructive/80 transition-colors px-4 py-2 rounded-lg">
                  <LogOut className="h-5 w-5" />
                  <span className="font-medium">Sair</span>
                </button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pb-20">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-lg">
        <div className="container flex justify-around items-center h-16 px-4">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center justify-center gap-1 transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <item.icon className="h-6 w-6" />
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
