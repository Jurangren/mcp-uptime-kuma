import { z } from 'zod';
/**
 * Maintenance window schema
 */
export declare const MaintenanceSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    title: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    strategy: z.ZodOptional<z.ZodEnum<["single", "recurring-interval", "recurring-weekday", "recurring-day-of-month", "manual"]>>;
    active: z.ZodOptional<z.ZodBoolean>;
    timezone: z.ZodOptional<z.ZodString>;
    dateRange: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    timeRange: z.ZodOptional<z.ZodArray<z.ZodObject<{
        hours: z.ZodNumber;
        minutes: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        hours: number;
        minutes: number;
    }, {
        hours: number;
        minutes: number;
    }>, "many">>;
    weekdays: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    daysOfMonth: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    intervalDay: z.ZodOptional<z.ZodNumber>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    id: z.ZodOptional<z.ZodNumber>;
    title: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    strategy: z.ZodOptional<z.ZodEnum<["single", "recurring-interval", "recurring-weekday", "recurring-day-of-month", "manual"]>>;
    active: z.ZodOptional<z.ZodBoolean>;
    timezone: z.ZodOptional<z.ZodString>;
    dateRange: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    timeRange: z.ZodOptional<z.ZodArray<z.ZodObject<{
        hours: z.ZodNumber;
        minutes: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        hours: number;
        minutes: number;
    }, {
        hours: number;
        minutes: number;
    }>, "many">>;
    weekdays: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    daysOfMonth: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    intervalDay: z.ZodOptional<z.ZodNumber>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    id: z.ZodOptional<z.ZodNumber>;
    title: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    strategy: z.ZodOptional<z.ZodEnum<["single", "recurring-interval", "recurring-weekday", "recurring-day-of-month", "manual"]>>;
    active: z.ZodOptional<z.ZodBoolean>;
    timezone: z.ZodOptional<z.ZodString>;
    dateRange: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    timeRange: z.ZodOptional<z.ZodArray<z.ZodObject<{
        hours: z.ZodNumber;
        minutes: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        hours: number;
        minutes: number;
    }, {
        hours: number;
        minutes: number;
    }>, "many">>;
    weekdays: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    daysOfMonth: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    intervalDay: z.ZodOptional<z.ZodNumber>;
}, z.ZodTypeAny, "passthrough">>;
export type Maintenance = z.infer<typeof MaintenanceSchema>;
//# sourceMappingURL=maintenance.d.ts.map