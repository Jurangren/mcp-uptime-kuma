import { z } from 'zod';
/**
 * Zod schema for Monitor Condition
 */
export const MonitorConditionSchema = z.object({
    type: z.enum(['condition', 'group']).describe('Condition or group'),
    variable: z.string().optional().describe('Variable to check'),
    operator: z.string().optional().describe('Comparison operator'),
    value: z.string().optional().describe('Expected value'),
    andOr: z.enum(['and', 'or']).optional().describe('Group logic operator'),
    children: z.array(z.lazy(() => MonitorConditionSchema)).optional().describe('Nested conditions'),
});
//# sourceMappingURL=monitor-conditions.js.map