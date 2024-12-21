import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function PerformanceMetrics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>System Performance</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>CPU Usage</span>
            <span>45%</span>
          </div>
          <Progress value={45} />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Memory</span>
            <span>62%</span>
          </div>
          <Progress value={62} />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Network</span>
            <span>28%</span>
          </div>
          <Progress value={28} />
        </div>
      </CardContent>
    </Card>
  );
}