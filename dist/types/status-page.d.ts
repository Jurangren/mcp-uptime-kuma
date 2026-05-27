import { z } from 'zod';
/**
 * Status page schema
 */
export declare const StatusPageSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    slug: z.ZodString;
    title: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    theme: z.ZodOptional<z.ZodString>;
    published: z.ZodOptional<z.ZodBoolean>;
    showTags: z.ZodOptional<z.ZodBoolean>;
    domainNameList: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    customCSS: z.ZodOptional<z.ZodString>;
    footerText: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    showPoweredBy: z.ZodOptional<z.ZodBoolean>;
    icon: z.ZodOptional<z.ZodString>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    id: z.ZodOptional<z.ZodNumber>;
    slug: z.ZodString;
    title: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    theme: z.ZodOptional<z.ZodString>;
    published: z.ZodOptional<z.ZodBoolean>;
    showTags: z.ZodOptional<z.ZodBoolean>;
    domainNameList: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    customCSS: z.ZodOptional<z.ZodString>;
    footerText: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    showPoweredBy: z.ZodOptional<z.ZodBoolean>;
    icon: z.ZodOptional<z.ZodString>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    id: z.ZodOptional<z.ZodNumber>;
    slug: z.ZodString;
    title: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    theme: z.ZodOptional<z.ZodString>;
    published: z.ZodOptional<z.ZodBoolean>;
    showTags: z.ZodOptional<z.ZodBoolean>;
    domainNameList: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    customCSS: z.ZodOptional<z.ZodString>;
    footerText: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    showPoweredBy: z.ZodOptional<z.ZodBoolean>;
    icon: z.ZodOptional<z.ZodString>;
}, z.ZodTypeAny, "passthrough">>;
export type StatusPage = z.infer<typeof StatusPageSchema>;
//# sourceMappingURL=status-page.d.ts.map