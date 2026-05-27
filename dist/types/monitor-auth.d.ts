import { z } from 'zod';
/**
 * Zod schema for OAuth2 Client Credentials
 */
export declare const OAuth2Schema: z.ZodObject<{
    oauth_client_id: z.ZodOptional<z.ZodString>;
    oauth_client_secret: z.ZodOptional<z.ZodString>;
    oauth_token_url: z.ZodOptional<z.ZodString>;
    oauth_scopes: z.ZodOptional<z.ZodString>;
    oauth_audience: z.ZodOptional<z.ZodString>;
    oauth_auth_method: z.ZodOptional<z.ZodEnum<["client_secret_basic", "client_secret_post"]>>;
}, "strip", z.ZodTypeAny, {
    oauth_client_id?: string | undefined;
    oauth_client_secret?: string | undefined;
    oauth_token_url?: string | undefined;
    oauth_scopes?: string | undefined;
    oauth_audience?: string | undefined;
    oauth_auth_method?: "client_secret_basic" | "client_secret_post" | undefined;
}, {
    oauth_client_id?: string | undefined;
    oauth_client_secret?: string | undefined;
    oauth_token_url?: string | undefined;
    oauth_scopes?: string | undefined;
    oauth_audience?: string | undefined;
    oauth_auth_method?: "client_secret_basic" | "client_secret_post" | undefined;
}>;
/**
 * Zod schema for Kafka Producer SASL Options
 */
export declare const KafkaProducerSaslOptionsSchema: z.ZodObject<{
    mechanism: z.ZodString;
    username: z.ZodOptional<z.ZodString>;
    password: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    mechanism: string;
    username?: string | undefined;
    password?: string | undefined;
}, {
    mechanism: string;
    username?: string | undefined;
    password?: string | undefined;
}>;
//# sourceMappingURL=monitor-auth.d.ts.map