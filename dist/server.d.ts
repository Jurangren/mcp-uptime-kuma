import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { UptimeKumaClient } from './uptime-kuma-client.js';
import type { UptimeKumaConfig } from './types/index.js';
/**
 * Creates and configures the MCP server with tools, resources, and prompts
 * Note: Authentication must be done separately after connecting the transport
 */
export declare function createServer(config: UptimeKumaConfig): Promise<{
    server: McpServer;
    client: UptimeKumaClient;
    authenticateClient: () => Promise<void>;
}>;
//# sourceMappingURL=server.d.ts.map