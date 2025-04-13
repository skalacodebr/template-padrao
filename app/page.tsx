import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <span className="font-bold text-xl">MeuApp</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Início
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Recursos
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Sobre
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contato
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Bem-vindo ao Template Padrão
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Este é um template inicial que você pode personalizar conforme suas necessidades.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Começar</Button>
                <Button variant="outline">Saiba mais</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Recursos</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Explore os recursos disponíveis neste template.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle>Recurso {i}</CardTitle>
                    <CardDescription>Descrição do recurso {i}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Este é um exemplo de conteúdo para o recurso {i}. Você pode personalizar este texto conforme
                      necessário.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Saiba mais
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full border-t px-4 md:px-6">
        <p className="text-xs text-gray-500">© 2024 MeuApp. Todos os direitos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Termos de Serviço
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Política de Privacidade
          </Link>
        </nav>
      </footer>
    </div>
  )
}
