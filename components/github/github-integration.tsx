import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function GitHubIntegration() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>GitHub Integration</CardTitle>
        <CardDescription>Connect and manage your GitHub repositories</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Integration Steps</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Click the &apos;Connect GitHub&apos; button in the top right corner</li>
            <li>Sign in with your GitHub account if prompted</li>
            <li>Press Create Repository in the top right corner</li>
            <li>A new repository will be created in your GitHub account</li>
          </ol>

          <h3 className="text-lg font-medium mt-6">What&apos;s Possible</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Edit code in any code editor</li>
            <li>Version control integration</li>
            <li>Branching and merging</li>
            <li>Pull request workflows</li>
            <li>Issue tracking</li>
            <li>Team collaboration</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}