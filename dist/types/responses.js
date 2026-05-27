import { z } from 'zod';
/**
 * Socket.IO API Response schemas
 */
export const SocketSuccessResponseSchema = z.object({
    ok: z.literal(true),
    msg: z.string().optional(),
    msgi18n: z.boolean().optional(),
    monitorID: z.number().optional(),
});
export const SocketErrorResponseSchema = z.object({
    ok: z.literal(false),
    msg: z.string(),
});
export const SocketResponseSchema = z.union([
    SocketSuccessResponseSchema,
    SocketErrorResponseSchema,
]);
//# sourceMappingURL=responses.js.map