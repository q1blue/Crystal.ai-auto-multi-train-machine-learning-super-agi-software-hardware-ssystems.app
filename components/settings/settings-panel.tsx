import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function SettingsPanel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>System Settings</CardTitle>
        <CardDescription>Configure system preferences and options</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">Settings configuration coming soon...</p>
      </CardContent>
    </Card>
  );
}