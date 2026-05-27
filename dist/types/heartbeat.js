import { z } from 'zod';
/**
 * Zod schema for Heartbeat object structure from Uptime Kuma
 */
export const HeartbeatSchema = z.object({
    // Required fields
    status: z.number().describe('0=DOWN 1=UP 2=PENDING 3=MAINT'),
    time: z.string().describe('Timestamp'),
    msg: z.string().describe('Status message'),
    important: z.union([z.boolean(), z.number()]).transform(val => Boolean(val)).describe('Status change flag'),
    // Optional fields
    id: z.number().optional().describe('Heartbeat ID'),
    monitor_id: z.number().optional().describe('Monitor ID'),
    ping: z.number().nullable().optional().describe('Response time (ms)'),
    duration: z.number().optional().describe('Seconds since last check'),
    down_count: z.number().optional().describe('Consecutive down count'),
    retries: z.number().optional().describe('Retry attempts'),
    response: z.unknown().optional().describe('Raw response payload returned by Uptime Kuma when available'),
    end_time: z.string().optional().describe('Check end time'),
    monitorID: z.number().optional().describe('Monitor ID (camelCase)'),
    localDateTime: z.string().optional().describe('Local formatted time'),
    timezone: z.string().optional().describe('Server timezone'),
});
//# sourceMappingURL=heartbeat.js.map