import { z } from 'zod';
/**
 * Zod schema for Monitor Tag
 */
export declare const MonitorTagSchema: z.ZodObject<{
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
}>;
/**
 * Monitor Tag type
 */
export type MonitorTag = z.infer<typeof MonitorTagSchema>;
//# sourceMappingURL=tags.d.ts.map