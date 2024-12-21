export interface SystemStatus {
  health: 'healthy' | 'warning' | 'error';
  lastCheck: string;
  performance: number;
  connections: number;
}

export interface Integration {
  id: string;
  name: string;
  status: 'connected' | 'not_connected' | 'error';
  lastSync?: string;
}

export interface SystemMetrics {
  cpu: number;
  memory: number;
  network: number;
  storage: number;
}