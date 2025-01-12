import { z } from "zod";

export const CreateTrasactionSchema = z.object({
    amount: z.coerce.number().positive().multipleOf(0.01),
    description: z.string().optional(),
    date: z.coerce.date(),
    category: z.string(),
    type: z.union([
        z.literal('income'),
        z.literal('expense')
    ])
})

export type CreateTrasactionSchemaType = z.infer<typeof CreateTrasactionSchema>