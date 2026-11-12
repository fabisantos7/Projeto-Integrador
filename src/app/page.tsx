import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { ProblemaSolucao } from "@/components/landing/problema-solucao";
import { DemoCheckin } from "@/components/landing/demo-checkin";
import { Recursos } from "@/components/landing/recursos";
import { Painel } from "@/components/landing/painel";
import { Encerramento } from "@/components/landing/encerramento";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProblemaSolucao />
        <DemoCheckin />
        <Recursos />
        <Painel />
        <Encerramento />
      </main>
      <Footer />
    </div>
  );
}
