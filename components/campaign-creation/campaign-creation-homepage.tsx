"use client"

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from 'axios'

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import { Input } from "@/components/ui/input"
import { Textarea } from '../ui/textarea'
import ImageUpload from '../image-upload'
import { Button } from '../ui/button'

type Props = {}

const CampaignCreationHomepage = (props: Props) => {

    const formSchema = z.object({
        campaignTitle: z.string().max(33, {
            message: 'Campaign title must be have at most 33 characters'
        }),
        campaignTagline: z.string().max(100, {
            message: 'Campaign tagline must be have at most 100 characters'
        }),
        campaignDescription: z.string().max(750, {
            message: 'Campaign description must have at most 750 characters'
        }),
        campaignImage: z.string().min(1, {
            message: 'Upload image for campaign'
        }),
        campaignCategory: z.string().min(1, 'Campaign category must be specified'),
        campaignNiche: z.string().min(1, 'Campaign niche must be specified'),
        campaignDuration: z.coerce.number().min(7, 'Duration must be a positive number and greater than 7'),

        campaignReceiver: z.string().min(1, 'Please select an option'),
        fundingGoal: z.coerce.number().min(7, 'Funding target must be positive'),

    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema), defaultValues: {
            campaignTitle: '',
            campaignTagline: '',
            campaignDescription: '',
            campaignImage: '',
            campaignCategory: '',
            campaignNiche: '',
            campaignDuration: 1,
            campaignReceiver: '',
            fundingGoal: 1
        }
    })

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values.campaignCategory);
    }



    const handleImageChange = (base64: string) => {
        form.setValue('campaignImage', base64);
    }

    return (
        <section
            className='grid flex-col w-full gap-5 max-w-7xl mx-auto px-4 mt-20'
        >

            <h1 className='text-3xl lg:text-4xl font-bold uppercase'>
                Start Your Crowdfunding Journey Here
            </h1>

            <p className='text-sm font-extralight mb-10 max-w-5xl w-full'>
                Make a good first impression: introduce your campaign objectives and entice people to learn more. This basic information will represent your campaign on your campaign page, on your campaign card, and in searches.
            </p>

            <Form {...form}>
                <form
                    className='space-y-6 pb-10'
                    onSubmit={form.handleSubmit(onSubmit)}
                >

                    {/*Campaign Title */}
                    <FormField
                        name="campaignTitle"
                        render={({ field }) => (
                            <FormItem
                                className='max-w-xl'
                            >
                                <FormLabel className='font-medium md:text-lg'>
                                    Campaign Title
                                </FormLabel>
                                <FormDescription className='text-xs md:text-sm '>
                                    What is the title of your crowdfunding campaign?
                                </FormDescription>
                                <FormControl>
                                    <Input
                                        disabled={isLoading}
                                        placeholder='Help Polar Bears Thrive'
                                        maxLength={33}
                                        required
                                        {...field}
                                    />

                                </FormControl>
                                <FormMessage className='text-sm' />

                            </FormItem>
                        )}
                    />

                    {/*Campaign Tagline */}
                    <FormField
                        name="campaignTagline"
                        render={({ field }) => (
                            <FormItem
                                className='max-w-xl'
                            >
                                <FormLabel className='font-medium md:text-lg'>
                                    Campaign Tagline
                                </FormLabel>
                                <FormDescription className='text-xs md:text-sm '>
                                    Provide a short description that best describes
                                    your campaign to your audience
                                </FormDescription>
                                <FormControl>
                                    <Textarea
                                        disabled={isLoading}
                                        placeholder='This campaign is ...'
                                        maxLength={100}
                                        required
                                        {...field}
                                    />

                                </FormControl>
                                <FormMessage className='text-sm' />

                            </FormItem>
                        )}
                    />

                    {/*Campaign Image */}
                    <FormField
                        name="campaignImage"
                        render={({ field }) => (
                            <FormItem
                                className='max-w-xl'
                            >
                                <FormLabel className='font-medium md:text-lg'>
                                    Campaign Image
                                </FormLabel>
                                <FormDescription className='text-xs md:text-sm '>
                                    Upload an image that best describes your campaign
                                </FormDescription>
                                <FormControl>
                                    <ImageUpload
                                        value={form.watch('campaignImage')}
                                        label='Upload campaign image'
                                        disabled={isLoading}
                                        onChange={handleImageChange}
                                    />

                                </FormControl>
                                <FormMessage className='text-sm' />

                            </FormItem>
                        )}
                    />

                    {/*Campaign Category */}
                    <FormField
                        name="campaignCategory"
                        render={({ field }) => (
                            <FormItem
                                className='max-w-xl'
                            >
                                <FormLabel className='font-medium md:text-lg'>
                                    Campaign Category
                                </FormLabel>
                                <FormDescription className='text-xs md:text-sm '>
                                    What is type of your crowdfunding?
                                </FormDescription>
                                <Select
                                    onValueChange={field.onChange}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder='Select category of campaign' />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="Initiative">Initiative</SelectItem>
                                        <SelectItem value="Project">Project</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage className='text-sm' />
                            </FormItem>
                        )}
                    />

                    {/*Campaign Niche */}
                    <FormField
                        name="campaignNiche"
                        render={({ field }) => (
                            <FormItem
                                className='max-w-xl'
                            >
                                <FormLabel className='font-medium md:text-lg'>
                                    Campaign Niche
                                </FormLabel>
                                <FormDescription className='text-xs md:text-sm '>
                                    To which niche your campaign belong?
                                </FormDescription>
                                <Select
                                    onValueChange={field.onChange}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder='Select category of campaign' />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="Climate Change">Climate Change</SelectItem>
                                        <SelectItem value="Conservation">Conservation</SelectItem>
                                        <SelectItem value="Water Conservation">Water Conservation</SelectItem>
                                        <SelectItem value="Eco-Tech">Eco-Tech</SelectItem>
                                        <SelectItem value="Eco-Education">Eco-Education</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage className='text-sm' />
                            </FormItem>
                        )}
                    />

                    {/*Campaign Description */}
                    <FormField
                        name="campaignDescription"
                        render={({ field }) => (
                            <FormItem
                                className='max-w-xl'
                            >
                                <FormLabel className='font-medium md:text-lg'>
                                    Campaign Description
                                </FormLabel>
                                <FormDescription className='text-xs md:text-sm '>
                                    Tell the world about your campaign. Describe the
                                    problem you are trying to solve and solution to
                                    that problem.
                                </FormDescription>
                                <FormControl>
                                    <Textarea
                                        disabled={isLoading}
                                        placeholder='With this project, we are tying to solve..'
                                        maxLength={1000}
                                        required
                                        className='min-h-[150px]'
                                        {...field}
                                    />

                                </FormControl>
                                <FormMessage className='text-sm' />

                            </FormItem>
                        )}
                    />

                    {/*Campaign Duration */}
                    <FormField
                        name="campaignDuration"
                        render={({ field }) => (
                            <FormItem
                                className='max-w-xl'
                            >
                                <FormLabel className='font-medium md:text-lg'>
                                    Campaign Duration
                                </FormLabel>
                                <FormDescription className='text-xs md:text-sm '>
                                    How long do you want to run the campaign for? It
                                    should be at least 7 days long and 60 days at most
                                </FormDescription>
                                <FormControl>
                                    <Input
                                        disabled={isLoading}
                                        placeholder='7'
                                        min={7}
                                        max={60}
                                        type='number'
                                        required
                                        {...field}
                                        onChange={event => field.onChange(event.target.value)}
                                    />

                                </FormControl>
                                <FormMessage className='text-sm' />

                            </FormItem>
                        )}
                    />

                    {/*Campaign Receiver */}
                    <FormField
                        name="campaignReceiver"
                        render={({ field }) => (
                            <FormItem
                                className='max-w-xl'
                            >
                                <FormLabel className='font-medium md:text-lg'>
                                    Who are you raising money for?
                                </FormLabel>
                                <FormDescription className='text-xs md:text-sm '>
                                    Choose the type of account that will be receiving
                                    your funds
                                </FormDescription>
                                <FormControl>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        className="flex flex-col space-y-1"
                                    >
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="Individual" />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                Individual
                                            </FormLabel>
                                        </FormItem>

                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="Organization" />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                Organization
                                            </FormLabel>
                                        </FormItem>
                                    </RadioGroup>

                                </FormControl>
                                <FormMessage className='text-sm' />

                            </FormItem>
                        )}
                    />

                    {/*Campaign Duration */}
                    <FormField
                        name="fundingGoal"
                        render={({ field }) => (
                            <FormItem
                                className='max-w-xl'
                            >
                                <FormLabel className='font-medium md:text-lg'>
                                    Funding Goal
                                </FormLabel>
                                <FormDescription className='text-xs md:text-sm '>
                                    Who much fund do you want to raise?
                                </FormDescription>
                                <FormControl>
                                    <Input
                                        disabled={isLoading}
                                        placeholder='$50'
                                        min={1}
                                        type='number'
                                        required
                                        {...field}
                                        onChange={event => field.onChange(event.target.value)}
                                    />

                                </FormControl>
                                <FormMessage className='text-sm' />

                            </FormItem>
                        )}
                    />


                    <Button
                        variant='accent'
                        size='lg'
                    >
                        Create Campaign
                    </Button>
                </form>
            </Form>
        </section>
    )
}

export default CampaignCreationHomepage;