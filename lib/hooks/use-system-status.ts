import { useState, useEffect } from 'react';
import type { SystemStatus } from '../types/system';

export function useSystemStatus() {
  const [status, setStatus] = useState<SystemStatus>({
    health: 'healthy',
    lastCheck: new Date().toISOString(),
    performance: 95,
    connections: 3
  });

  useEffect(() => {
    // In a real app, this would fetch from your API
    const interval = setInterval(() => {
      setStatus(prev => ({
        ...prev,
        lastCheck: new Date().toISOString()
      }));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return status;
}