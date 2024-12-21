import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function ApiConfiguration() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>API Configuration</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">API Endpoint</label>
          <Input placeholder="https://api.example.com/v1" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">API Key</label>
          <Input type="password" placeholder="Enter API key" />
        </div>
        <Button className="w-full">Save Configuration</Button>
      </CardContent>
    </Card>
  );
}