import { z } from 'zod';
/**
 * Notification configuration schema
 * Covers common fields for all notification types (Slack, ntfy, Discord, etc.)
 */
export declare const NotificationSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    name: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodString>;
    isDefault: z.ZodOptional<z.ZodBoolean>;
    applyExisting: z.ZodOptional<z.ZodBoolean>;
    active: z.ZodOptional<z.ZodBoolean>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    id: z.ZodOptional<z.ZodNumber>;
    name: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodString>;
    isDefault: z.ZodOptional<z.ZodBoolean>;
    applyExisting: z.ZodOptional<z.ZodBoolean>;
    active: z.ZodOptional<z.ZodBoolean>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    id: z.ZodOptional<z.ZodNumber>;
    name: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodString>;
    isDefault: z.ZodOptional<z.ZodBoolean>;
    applyExisting: z.ZodOptional<z.ZodBoolean>;
    active: z.ZodOptional<z.ZodBoolean>;
}, z.ZodTypeAny, "passthrough">>;
export type Notification = z.infer<typeof NotificationSchema>;
//# sourceMappingURL=notification.d.ts.map