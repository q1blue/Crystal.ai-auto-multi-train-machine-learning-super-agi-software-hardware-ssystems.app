import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export function Header() {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold">Technical Systems</h1>
      <Button variant="outline">
        <Github className="mr-2 h-4 w-4" />
        Connect GitHub
      </Button>
    </div>
  );
}