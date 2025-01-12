"use client"
import { Button } from '@/components/ui/button';
import { Command, CommandInput } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { TransactionType } from '@/lib/types';
import { Category } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import React from 'react'


interface Props {
    type: TransactionType;
}


const CategoryPicker = ({type}: Props) => {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");

    const categoryQuery = useQuery({
        queryKey: ['categories', type],
        queryFn: async () => fetch(`/api/categories?type=${type}`).then((res) =>    
            res.json()
        )
    })

    const selectedCategory = categoryQuery.data?.find(
        (category: Category) => category.name === value
    );


  return (
    <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
            <Button variant={"outline"} role= "combobox" aria-expanded= {open} className='w-[200px] justify-between'>
                {selectedCategory ? (<CategoryRow category = {selectedCategory}/>) : ("Selected category")}
            </Button>
        </PopoverTrigger>
        <PopoverContent className='w-[200px] p-0'>
            <Command onSubmit={e => {
                e.preventDefault();
            }}>
                <CommandInput placeholder= "Search Category....."/>
            </Command>
        </PopoverContent>
    </Popover>
    )
}

export default CategoryPicker


function CategoryRow({category} : {category: Category}) {
    return <div className="flex items-center gap-2">
        <span role="img">{category.icon}</span>
    </div>
}