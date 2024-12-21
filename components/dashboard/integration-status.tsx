import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function IntegrationStatus() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Integration Status</CardTitle>
        <CardDescription>View the status of your integrations</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span>GitHub</span>
            <span className="text-red-500">Not Connected</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Version Control</span>
            <span className="text-red-500">Not Configured</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}