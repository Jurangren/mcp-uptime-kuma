import { z } from 'zod';
import type { ApiResponse } from './responses.js';
/**
 * Zod schema for Uptime Kuma settings
 */
export declare const SettingsSchema: z.ZodObject<{
    serverTimezone: z.ZodOptional<z.ZodString>;
    checkUpdate: z.ZodOptional<z.ZodBoolean>;
    searchEngineIndex: z.ZodOptional<z.ZodBoolean>;
    entryPage: z.ZodOptional<z.ZodString>;
    dnsCache: z.ZodOptional<z.ZodBoolean>;
    keepDataPeriodDays: z.ZodOptional<z.ZodNumber>;
    tlsExpiryNotifyDays: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    trustProxy: z.ZodOptional<z.ZodBoolean>;
    nscd: z.ZodOptional<z.ZodBoolean>;
    disableAuth: z.ZodOptional<z.ZodBoolean>;
    primaryBaseURL: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    serverTimezone?: string | undefined;
    checkUpdate?: boolean | undefined;
    searchEngineIndex?: boolean | undefined;
    entryPage?: string | undefined;
    dnsCache?: boolean | undefined;
    keepDataPeriodDays?: number | undefined;
    tlsExpiryNotifyDays?: number[] | undefined;
    trustProxy?: boolean | undefined;
    nscd?: boolean | undefined;
    disableAuth?: boolean | undefined;
    primaryBaseURL?: string | undefined;
}, {
    serverTimezone?: string | undefined;
    checkUpdate?: boolean | undefined;
    searchEngineIndex?: boolean | undefined;
    entryPage?: string | undefined;
    dnsCache?: boolean | undefined;
    keepDataPeriodDays?: number | undefined;
    tlsExpiryNotifyDays?: number[] | undefined;
    trustProxy?: boolean | undefined;
    nscd?: boolean | undefined;
    disableAuth?: boolean | undefined;
    primaryBaseURL?: string | undefined;
}>;
/**
 * Settings type inferred from the Zod schema
 */
export type Settings = z.infer<typeof SettingsSchema>;
/**
 * Get settings response
 */
export interface GetSettingsResponse extends ApiResponse {
    data?: Settings;
}
//# sourceMappingURL=settings.d.ts.map