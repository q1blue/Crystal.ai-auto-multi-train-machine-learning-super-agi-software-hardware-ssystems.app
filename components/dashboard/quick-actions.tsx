import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Common system operations</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <Button className="w-full" variant="outline">Create Repository</Button>
        <Button className="w-full" variant="outline">Configure Settings</Button>
      </CardContent>
    </Card>
  );
}