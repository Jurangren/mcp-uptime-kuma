import { z } from 'zod';
import type { MonitorBaseWithExtendedData, MonitorWithExtendedData } from './monitor-types.js';
/**
 * Response structure for API callbacks
 */
export interface ApiResponse {
    ok: boolean;
    msg?: string;
    msgi18n?: boolean;
}
/**
 * Login response
 */
export interface LoginResponse extends ApiResponse {
    token?: string;
    tokenRequired?: boolean;
}
/**
 * Socket.IO API Response schemas
 */
export declare const SocketSuccessResponseSchema: z.ZodObject<{
    ok: z.ZodLiteral<true>;
    msg: z.ZodOptional<z.ZodString>;
    msgi18n: z.ZodOptional<z.ZodBoolean>;
    monitorID: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    ok: true;
    msg?: string | undefined;
    msgi18n?: boolean | undefined;
    monitorID?: number | undefined;
}, {
    ok: true;
    msg?: string | undefined;
    msgi18n?: boolean | undefined;
    monitorID?: number | undefined;
}>;
export declare const SocketErrorResponseSchema: z.ZodObject<{
    ok: z.ZodLiteral<false>;
    msg: z.ZodString;
}, "strip", z.ZodTypeAny, {
    msg: string;
    ok: false;
}, {
    msg: string;
    ok: false;
}>;
export declare const SocketResponseSchema: z.ZodUnion<[z.ZodObject<{
    ok: z.ZodLiteral<true>;
    msg: z.ZodOptional<z.ZodString>;
    msgi18n: z.ZodOptional<z.ZodBoolean>;
    monitorID: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    ok: true;
    msg?: string | undefined;
    msgi18n?: boolean | undefined;
    monitorID?: number | undefined;
}, {
    ok: true;
    msg?: string | undefined;
    msgi18n?: boolean | undefined;
    monitorID?: number | undefined;
}>, z.ZodObject<{
    ok: z.ZodLiteral<false>;
    msg: z.ZodString;
}, "strip", z.ZodTypeAny, {
    msg: string;
    ok: false;
}, {
    msg: string;
    ok: false;
}>]>;
/**
 * Socket.IO response types
 */
export type SocketSuccessResponse = z.infer<typeof SocketSuccessResponseSchema>;
export type SocketErrorResponse = z.infer<typeof SocketErrorResponseSchema>;
export type SocketResponse = z.infer<typeof SocketResponseSchema>;
/**
 * Monitor list structure
 * When includeTypeSpecificFields is true, returns full monitor details with type-specific fields and runtime data
 * When includeTypeSpecificFields is false, returns only common monitor fields plus runtime data
 */
export type MonitorList<T extends boolean = false> = {
    [monitorID: string]: T extends true ? MonitorWithExtendedData : MonitorBaseWithExtendedData;
};
/**
 * Get monitor response
 * When includeTypeSpecificFields is true, returns full monitor details with type-specific fields and runtime data
 * When includeTypeSpecificFields is false, returns only common monitor fields plus runtime data
 */
export interface GetMonitorResponse<T extends boolean = false> extends ApiResponse {
    monitor?: T extends true ? MonitorWithExtendedData : MonitorBaseWithExtendedData;
}
//# sourceMappingURL=responses.d.ts.map