/*A react component that displays a modal for collecting payment details from
users within a modal dialog. It integrates with Stripe for payment processing,
performs form validation, and provides a smooth user experience for making
donations to a campaign*/

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
import { useToast } from '@/components/ui/use-toast'

import getStripePromise from '@/lib/stripe'


type Props = {
    campaignId: string
}

const PaymentModal = ({ campaignId }: Props) => {

    const [donation, setDonation] = useState<number>(0) /*state variable for 
    donation received for a specific campaign */
    const { toast } = useToast(); //toast function to display toasts

    /*a validation schema using zod library that specifies the shape of form data,
    including rules for each field and define minimum rules and error messages
    if the rules are not fulfilled */

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

    /*Initialize the form using the useForm hook that takes the form schema and default
    values as arguments, and returns form state and methods for form management */

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema), defaultValues: {
            fullName: '',
            emailAddress: '',
            donation: 0
        }
    })

    const isLoading = form.formState.isSubmitting; /*defining loading state 
    of the form */


    /*The function is called when the form is submitted. It sends a request 
    to the server to initiate a Stripe session based on the the provided
    payment details. If response is successful response, the user is redirected
    to the redirected to the Stripe payment page and a success notification is 
    displayed */
    const onSubmit = async (values: z.infer<typeof formSchema>) => {

        const stripe = await getStripePromise();


        try {
            const response = await fetch('/api/stripe-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ values, campaignId: campaignId })
            });
            /*send a post request to the specified api endpoint and pass relevant
            data in the payload */

            const data = await response.json();

            window.location.href = data.url; /*Redirect user to Stripe payment page */

            toast({
                title: 'Successful Donation',
                description: 'Thank you for contributing to our initiative',
            }) //display success notification

        } catch (error) {
            console.log('PAYMENT_MODAL_ON_SUBMIT_FUNCTION_ERROR', error);
            toast({
                title: 'Something went wrong',
                variant: 'destructive'
            })
        }

    }

    /*a function that updates the donation state and sets the corresponding
    value in the form when the user changes the amount data */
    const handleDonationChange = (donation: number) => {
        setDonation(donation)
        form.setValue('donation', donation);
    }

    return (
        <Dialog>
            <DialogTrigger
                className='bg-[#81f08f] hover:bg-[#81f08f]/60 transition duration-500
                w-full py-3 rounded-xl text-sm'
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
                                    <FormLabel className='font-medium'>
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
                                    <FormLabel className='font-medium '>
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
                                    <FormLabel className="font-medium ">
                                        Select or input custom donation
                                    </FormLabel>
                                    <FormControl>
                                        <div className="grid grid-cols-2 lg:grid-cols-3 w-full gap-5">
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
                                                className='col-span-2 lg:col-span-3 w-full'
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