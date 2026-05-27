import { z } from 'zod';
/**
 * Monitor Condition type
 */
export type MonitorCondition = {
    type: 'condition' | 'group';
    variable?: string;
    operator?: string;
    value?: string;
    andOr?: 'and' | 'or';
    children?: MonitorCondition[];
};
/**
 * Zod schema for Monitor Condition
 */
export declare const MonitorConditionSchema: z.ZodType<MonitorCondition>;
//# sourceMappingURL=monitor-conditions.d.ts.map