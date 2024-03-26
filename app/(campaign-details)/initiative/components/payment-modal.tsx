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
            donation: donation
        }
    })

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values)
    }

    return (
        <Dialog>
            <DialogTrigger>
                <Button
                    variant='accent'
                    size='lg'
                    className='w-full'
                >
                    Back This Project
                </Button>
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
                                <FormItem
                                    className='max-w-xl'
                                >
                                    <FormLabel className='font-medium md:text-lg'>
                                        Select or input custom donation
                                    </FormLabel>
                                    <FormControl>
                                        <div className='grid lg:grid-cols-3 w-full gap-5'>
                                            <Button
                                                value={25}
                                                onClick={() => setDonation(25)}
                                                variant='outline'
                                                type='button'
                                                className={donation === 25 ? 'bg-[#81f08f]' : ''}
                                            >
                                                $25
                                            </Button>

                                            <Button
                                                value={50}
                                                onClick={() => setDonation(50)}
                                                variant='outline'
                                                type='button'
                                                className={donation === 50 ? 'bg-[#81f08f]' : ''}
                                            >
                                                $50
                                            </Button>

                                            <Button
                                                value={100}
                                                onClick={() => setDonation(100)}
                                                variant='outline'
                                                type='button'
                                                className={donation === 100 ? 'bg-[#81f08f]' : ''}
                                            >
                                                $100
                                            </Button>

                                            <Button
                                                value={250}
                                                onClick={() => setDonation(250)}
                                                variant='outline'
                                                type='button'
                                                className={donation === 250 ? 'bg-[#81f08f]' : ''}
                                            >
                                                $250
                                            </Button>

                                            <Button
                                                value={500}
                                                onClick={() => setDonation(500)}
                                                variant='outline'
                                                type='button'
                                                className={donation === 500 ? 'bg-[#81f08f]' : ''}
                                            >
                                                $500
                                            </Button>

                                            <Button
                                                value={1000}
                                                onClick={() => setDonation(1000)}
                                                variant='outline'
                                                type='button'
                                                className={donation === 1000 ? 'bg-[#81f08f]' : ''}
                                            >
                                                $1000
                                            </Button>

                                            <Input
                                                placeholder='Add custom donation'
                                                disabled={isLoading}
                                                type='number'
                                                min={1}
                                                onChange={event => setDonation(Number(event.target.value))}
                                                className='w-full lg:col-span-3'
                                            />
                                        </div>

                                    </FormControl>
                                    <FormMessage className='text-sm' />
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