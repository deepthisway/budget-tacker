"use client";
import {
  CreateTrasactionSchema,
  CreateTrasactionSchemaType,
} from "@/app/zod-schemas/transaction";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TransactionType } from "@/lib/types";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
import { Form, FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CategoryPicker from "./CategoryPicker";

interface Props {
  trigger: ReactNode;
  type: TransactionType;
}

const CreateTransactionDialogue = ({ trigger, type }: Props) => {
  const form = useForm<CreateTrasactionSchemaType>({
    resolver: zodResolver(CreateTrasactionSchema),
    defaultValues: {
      type,
      date: new Date(),
    },
  });
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Create a new{""}
            <span
              className={cn(
                "m-1",
                type == "income" ? "text-emerald-500" : "text-red-500"
              )}
            >
              {type}
            </span>
            transaction
          </DialogTitle>
        </DialogHeader>
        <FormProvider {...form}>
          <form
            className="space-y-4"
          >

            <FormField
            control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input defaultValue={""} {...field} />
                  </FormControl>
                  <FormDescription>
                    Transaction description (optional)
                  </FormDescription>
                </FormItem>
              )}
            />
            <FormField
            control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount</FormLabel>
                  <FormControl>
                    <Input defaultValue={0} {...field} type="number"/>
                  </FormControl>
                  <FormDescription>
                    Enter the amount
                  </FormDescription>
                </FormItem>
              )}
            />


            <button type="submit">Submit</button>
              <div className="flex items-center justify-between gap-2">
              <FormField
            control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <CategoryPicker type= {type}/>
                  </FormControl>
                  <FormDescription>
                    Select the category
                  </FormDescription>
                </FormItem>
              )}
            />
              </div>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};

export default CreateTransactionDialogue;
