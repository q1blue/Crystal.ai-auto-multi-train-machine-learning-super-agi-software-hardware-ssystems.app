import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function SystemHealth() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>System Health</CardTitle>
        <CardDescription>Monitor system performance</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span>Status</span>
            <span className="text-green-500">Healthy</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Last Check</span>
            <span>Just now</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}