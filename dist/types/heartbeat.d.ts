import { z } from 'zod';
/**
 * Zod schema for Heartbeat object structure from Uptime Kuma
 */
export declare const HeartbeatSchema: z.ZodObject<{
    status: z.ZodNumber;
    time: z.ZodString;
    msg: z.ZodString;
    important: z.ZodEffects<z.ZodUnion<[z.ZodBoolean, z.ZodNumber]>, boolean, number | boolean>;
    id: z.ZodOptional<z.ZodNumber>;
    monitor_id: z.ZodOptional<z.ZodNumber>;
    ping: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    duration: z.ZodOptional<z.ZodNumber>;
    down_count: z.ZodOptional<z.ZodNumber>;
    retries: z.ZodOptional<z.ZodNumber>;
    response: z.ZodOptional<z.ZodUnknown>;
    end_time: z.ZodOptional<z.ZodString>;
    monitorID: z.ZodOptional<z.ZodNumber>;
    localDateTime: z.ZodOptional<z.ZodString>;
    timezone: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    status: number;
    msg: string;
    time: string;
    important: boolean;
    monitor_id?: number | undefined;
    id?: number | undefined;
    ping?: number | null | undefined;
    monitorID?: number | undefined;
    duration?: number | undefined;
    down_count?: number | undefined;
    retries?: number | undefined;
    response?: unknown;
    end_time?: string | undefined;
    localDateTime?: string | undefined;
    timezone?: string | undefined;
}, {
    status: number;
    msg: string;
    time: string;
    important: number | boolean;
    monitor_id?: number | undefined;
    id?: number | undefined;
    ping?: number | null | undefined;
    monitorID?: number | undefined;
    duration?: number | undefined;
    down_count?: number | undefined;
    retries?: number | undefined;
    response?: unknown;
    end_time?: string | undefined;
    localDateTime?: string | undefined;
    timezone?: string | undefined;
}>;
/**
 * Heartbeat type inferred from the Zod schema
 */
export type Heartbeat = z.infer<typeof HeartbeatSchema>;
/**
 * Heartbeat list structure - maps monitor IDs to heartbeats
 * When includeAll is true, returns arrays of heartbeats
 * When includeAll is false, returns only the most recent heartbeat
 */
export type HeartbeatList<T extends boolean = true> = T extends true ? {
    [monitorID: string]: Heartbeat[];
} : {
    [monitorID: string]: Heartbeat | undefined;
};
//# sourceMappingURL=heartbeat.d.ts.map