import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/header";
import { IntegrationStatus } from "@/components/dashboard/integration-status";
import { QuickActions } from "@/components/dashboard/quick-actions";
import { SystemHealth } from "@/components/dashboard/system-health";
import { PerformanceMetrics } from "@/components/dashboard/performance-metrics";
import { GitHubIntegration } from "@/components/github/github-integration";
import { SettingsPanel } from "@/components/settings/settings-panel";
import { ApiConfiguration } from "@/components/settings/api-configuration";

export default function Home() {
  return (
    <div className="container mx-auto py-8">
      <Header />
      
      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="github">GitHub</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <IntegrationStatus />
            <QuickActions />
            <SystemHealth />
            <PerformanceMetrics />
          </div>
        </TabsContent>

        <TabsContent value="github">
          <GitHubIntegration />
        </TabsContent>

        <TabsContent value="settings">
          <div className="space-y-4">
            <SettingsPanel />
          </div>
        </TabsContent>

        <TabsContent value="api">
          <div className="max-w-2xl mx-auto">
            <ApiConfiguration />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}