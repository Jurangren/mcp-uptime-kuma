import { z } from 'zod';
/**
 * Monitor Summary schema (for list views)
 */
export declare const MonitorSummarySchema: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    type: z.ZodString;
    active: z.ZodBoolean;
    pathName: z.ZodString;
    maintenance: z.ZodBoolean;
    tags: z.ZodOptional<z.ZodArray<z.ZodObject<{
        tag_id: z.ZodOptional<z.ZodNumber>;
        monitor_id: z.ZodOptional<z.ZodNumber>;
        name: z.ZodString;
        color: z.ZodString;
        value: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        color: string;
        tag_id?: number | undefined;
        monitor_id?: number | undefined;
        value?: string | undefined;
    }, {
        name: string;
        color: string;
        tag_id?: number | undefined;
        monitor_id?: number | undefined;
        value?: string | undefined;
    }>, "many">>;
    uptime: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
    avgPing: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    status: z.ZodOptional<z.ZodNumber>;
    msg: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name: string;
    type: string;
    id: number;
    active: boolean;
    pathName: string;
    maintenance: boolean;
    status?: number | undefined;
    tags?: {
        name: string;
        color: string;
        tag_id?: number | undefined;
        monitor_id?: number | undefined;
        value?: string | undefined;
    }[] | undefined;
    uptime?: Record<string, number> | undefined;
    avgPing?: number | null | undefined;
    msg?: string | undefined;
}, {
    name: string;
    type: string;
    id: number;
    active: boolean;
    pathName: string;
    maintenance: boolean;
    status?: number | undefined;
    tags?: {
        name: string;
        color: string;
        tag_id?: number | undefined;
        monitor_id?: number | undefined;
        value?: string | undefined;
    }[] | undefined;
    uptime?: Record<string, number> | undefined;
    avgPing?: number | null | undefined;
    msg?: string | undefined;
}>;
/**
 * Monitor Summary type
 */
export type MonitorSummary = z.infer<typeof MonitorSummarySchema>;
/**
 * Filter options for querying monitors
 */
export interface MonitorFilterOptions {
    /** Space-separated keywords to filter by pathName (case-insensitive, fuzzy match) */
    keywords?: string;
    /** Filter by monitor type(s). Comma-separated for multiple types - e.g., 'http' or 'http,ping,dns' */
    type?: string;
    /** Filter by active/inactive status */
    active?: boolean;
    /** Filter by maintenance status */
    maintenance?: boolean;
    /** Filter by tag name and optional value. Comma-separated for multiple tags. Format: 'tagName' or 'tagName=value'. Case-insensitive. */
    tags?: string;
    /** Filter by current status. Comma-separated for multiple statuses - 0=DOWN, 1=UP, 2=PENDING, 3=MAINTENANCE */
    status?: string;
}
/**
 * Full monitor schema with all fields (for creation, updates, and detailed responses)
 */
export declare const MonitorBaseSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    type: z.ZodEnum<["http", "keyword", "json-query", "ping", "port", "dns", "docker", "mqtt", "mongodb", "redis", "sqlserver", "postgres", "mysql", "grpc-keyword", "kafka-producer", "radius", "rabbitmq", "smtp", "snmp", "real-browser", "gamedig", "push", "group", "tailscale-ping", "manual"]>;
    active: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    parent: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    weight: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    interval: z.ZodNumber;
    retryInterval: z.ZodNumber;
    resendInterval: z.ZodDefault<z.ZodNumber>;
    timeout: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    maxretries: z.ZodDefault<z.ZodNumber>;
    upsideDown: z.ZodDefault<z.ZodBoolean>;
    accepted_statuscodes: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    notificationIDList: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodObject<{
        tag_id: z.ZodOptional<z.ZodNumber>;
        monitor_id: z.ZodOptional<z.ZodNumber>;
        name: z.ZodString;
        color: z.ZodString;
        value: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        color: string;
        tag_id?: number | undefined;
        monitor_id?: number | undefined;
        value?: string | undefined;
    }, {
        name: string;
        color: string;
        tag_id?: number | undefined;
        monitor_id?: number | undefined;
        value?: string | undefined;
    }>, "many">>;
    conditions: z.ZodOptional<z.ZodArray<z.ZodType<import("./monitor-conditions.js").MonitorCondition, z.ZodTypeDef, import("./monitor-conditions.js").MonitorCondition>, "many">>;
    user_id: z.ZodOptional<z.ZodNumber>;
    maintenance: z.ZodOptional<z.ZodBoolean>;
    path: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    pathName: z.ZodOptional<z.ZodString>;
    childrenIDs: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    forceInactive: z.ZodOptional<z.ZodBoolean>;
    includeSensitiveData: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    name: string;
    type: "push" | "group" | "http" | "keyword" | "json-query" | "ping" | "port" | "dns" | "docker" | "mqtt" | "mongodb" | "redis" | "sqlserver" | "postgres" | "mysql" | "grpc-keyword" | "kafka-producer" | "radius" | "rabbitmq" | "smtp" | "snmp" | "real-browser" | "gamedig" | "tailscale-ping" | "manual";
    active: boolean;
    interval: number;
    retryInterval: number;
    resendInterval: number;
    maxretries: number;
    upsideDown: boolean;
    accepted_statuscodes: string[];
    path?: string[] | undefined;
    id?: number | undefined;
    pathName?: string | undefined;
    maintenance?: boolean | undefined;
    tags?: {
        name: string;
        color: string;
        tag_id?: number | undefined;
        monitor_id?: number | undefined;
        value?: string | undefined;
    }[] | undefined;
    description?: string | null | undefined;
    parent?: number | null | undefined;
    weight?: number | null | undefined;
    timeout?: number | null | undefined;
    notificationIDList?: Record<string, boolean> | undefined;
    conditions?: import("./monitor-conditions.js").MonitorCondition[] | undefined;
    user_id?: number | undefined;
    childrenIDs?: number[] | undefined;
    forceInactive?: boolean | undefined;
    includeSensitiveData?: boolean | undefined;
}, {
    name: string;
    type: "push" | "group" | "http" | "keyword" | "json-query" | "ping" | "port" | "dns" | "docker" | "mqtt" | "mongodb" | "redis" | "sqlserver" | "postgres" | "mysql" | "grpc-keyword" | "kafka-producer" | "radius" | "rabbitmq" | "smtp" | "snmp" | "real-browser" | "gamedig" | "tailscale-ping" | "manual";
    interval: number;
    retryInterval: number;
    path?: string[] | undefined;
    id?: number | undefined;
    active?: boolean | undefined;
    pathName?: string | undefined;
    maintenance?: boolean | undefined;
    tags?: {
        name: string;
        color: string;
        tag_id?: number | undefined;
        monitor_id?: number | undefined;
        value?: string | undefined;
    }[] | undefined;
    description?: string | null | undefined;
    parent?: number | null | undefined;
    weight?: number | null | undefined;
    resendInterval?: number | undefined;
    timeout?: number | null | undefined;
    maxretries?: number | undefined;
    upsideDown?: boolean | undefined;
    accepted_statuscodes?: string[] | undefined;
    notificationIDList?: Record<string, boolean> | undefined;
    conditions?: import("./monitor-conditions.js").MonitorCondition[] | undefined;
    user_id?: number | undefined;
    childrenIDs?: number[] | undefined;
    forceInactive?: boolean | undefined;
    includeSensitiveData?: boolean | undefined;
}>;
/**
 * Base monitor type (for creation/update operations)
 */
export type MonitorBase = z.infer<typeof MonitorBaseSchema>;
//# sourceMappingURL=monitor-base.d.ts.map