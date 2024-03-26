import React, { useState } from 'react'

import { useForm } from 'react-hook-form'
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'


type Props = {}

const PaymentModal = (props: Props) => {

    const [donation, setDonation] = useState<number>(0)
    console.log(donation)

    const formSchema = z.object({
        fullName: z.string().min(1, {
            message: 'Please enter your name'
        }),
        emailAddress: z.string().min(1, {
            message: 'Please enter a valid email address'
        }),
        donation: z.number().min(0, {
            message: 'Give positive number'
        }),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema), defaultValues: {
            fullName: '',
            emailAddress: '',
            donation: 0
        }
    })

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values)
    }

    const handleDonationChange = (donation: number) => {
        setDonation(donation)
        form.setValue('donation', donation);
    }

    return (
        <Dialog>
            <DialogTrigger
                className='bg-[#81f08f] w-full py-3 rounded-xl text-sm'
            >
                Back This Project
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Payment Details</DialogTitle>
                    <DialogDescription>
                        Fill in the details
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form
                        className='space-y-6 pb-10'
                        onSubmit={form.handleSubmit(onSubmit)}
                    >
                        {/*Full Name */}
                        <FormField
                            name="fullName"
                            render={({ field }) => (
                                <FormItem
                                    className='max-w-xl'
                                >
                                    <FormLabel className='font-medium md:text-lg'>
                                        Enter your full name
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            disabled={isLoading}
                                            placeholder='John Doe'
                                            required
                                            {...field}
                                        />

                                    </FormControl>
                                    <FormMessage className='text-sm' />
                                </FormItem>
                            )}
                        />


                        {/*Email Address Name */}
                        <FormField
                            name="emailAddress"
                            render={({ field }) => (
                                <FormItem
                                    className='max-w-xl'
                                >
                                    <FormLabel className='font-medium md:text-lg'>
                                        Enter your email address
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            disabled={isLoading}
                                            placeholder='johndoe@mail.com'
                                            required
                                            type='email'
                                            {...field}
                                        />

                                    </FormControl>
                                    <FormMessage className='text-sm' />
                                </FormItem>
                            )}
                        />

                        {/*Donations */}
                        <FormField
                            name="donations"
                            render={({ field }) => (
                                <FormItem className="max-w-xl">
                                    <FormLabel className="font-medium md:text-lg">
                                        Select or input custom donation
                                    </FormLabel>
                                    <FormControl>
                                        <div className="grid lg:grid-cols-3 w-full gap-5">
                                            {
                                                [25, 50, 100, 250, 500, 1000].map((value) => (
                                                    <Button
                                                        key={value}
                                                        onClick={() => {
                                                            handleDonationChange(value);
                                                        }}
                                                        variant="outline"
                                                        type="button"
                                                        className={donation === value ? 'bg-[#81f08f]' : ''}
                                                        {...field}
                                                    >
                                                        ${value}
                                                    </Button>
                                                ))
                                            }
                                            <Input
                                                disabled={isLoading}
                                                placeholder='Add custom payment'
                                                min={1}
                                                type='number'
                                                required
                                                value={donation}
                                                onChange={event => handleDonationChange(Number(event.target.value))}
                                                className='lg:col-span-3 w-full'
                                            />
                                        </div>
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <Button
                            variant='accent'
                            type='submit'
                            className='w-full'
                        >
                            Donate
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}

export default PaymentModal