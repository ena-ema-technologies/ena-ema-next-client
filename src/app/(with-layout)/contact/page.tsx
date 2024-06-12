'use client';
import EnaForm from '@/app/components/Dashboard/Form/EnaForm/EnaForm';
import EnaInput from '@/app/components/Dashboard/Form/EnaInput/EnaInput';
import EnaSelect from '@/app/components/Dashboard/Form/EnaSelect/EnaSelect';
import { useCreateQueryMutation } from '@/redux/features/query/queryApi';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const ContactPage = () => {
  const [sendQuery] = useCreateQueryMutation();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const toastId = toast.loading('Sending message...');
    const phoneNo = Number(data.phoneNo);
    const queryData = {
      ...data,
      phoneNo,
    };

    try {
      const res: any = await sendQuery(queryData);
      console.log(res);
      if (res?.error) {
        toast.error(`Something went wrong`, {
          id: toastId,
          duration: 2000,
        });
      } else {
        toast.success('Message send successful!', {
          id: toastId,
          duration: 2000,
        });
        reset();
      }
    } catch (error) {
      toast.error('Something went wrong', { id: toastId, duration: 2000 });
    }
  };

  const contactFormSchema = z.object({
    fullName: z.string({ required_error: 'Full name required' }),
    email: z.string({ required_error: 'Email required' }),
    phone: z.string({ required_error: 'Phone Number required' }),
    ContactMethod: z.string({ required_error: 'contact method required' }),

    budget: z.number({ required_error: 'Please insert a positive number' }),

    currency: z.string({ required_error: 'choose a currency please' }),
    companyName: z.string({ required_error: 'Company name missing' }),
    website: z.string({ required_error: 'website link required' }),
    inspirationWebsite: z.string({
      required_error: 'Any website, you liked ?',
    }),
    facebookPage: z.string({ required_error: 'Facebook link please' }),
    serviceOrProduct: z.string({ required_error: 'what is your product ?' }),
    location: z.string({ required_error: 'Your location please' }),
    language: z.string({ required_error: 'Your language' }),
    subject: z.string({ required_error: 'Subject line required' }),
    clientMessages: z.string({ required_error: 'Client message required' }),
  });

  return (
    <>
      <div className="max-w-7xl mx-auto my-10 px-3 lg:px-0">
        <div className="p-10 shadow-md">
          <div className="text-center py-5 space-y-3">
            <h1 className="text-4xl ">
              Contact <span className="font-bold">Form</span>
            </h1>
          </div>
          <EnaForm
            onSubmit={onSubmit}
            resolver={zodResolver(contactFormSchema)}
          >
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 mt-5">
              <EnaInput
                type="text"
                name="fullName"
                placeholder="Your Full name"
              />
              <EnaInput type="text" name="email" placeholder="your email id" />
              <EnaInput
                type="text"
                name="phone"
                placeholder="your phone number"
              />
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 mt-5 content-center items-center ">
              <EnaInput
                type="text"
                name="ContactMethod"
                placeholder="How we contact with you back"
              />
              <EnaInput type="number" name="budget" placeholder="your budget" />
              <EnaSelect
                type="select"
                name="currency"
                placeholder="please choose a currency"
                control={undefined}
              />

              {/*  

              <select
                {...register('currency')}
                className="w-full bg-[#f8f8f8] text-gray-900 border border-slate-300 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="AUD">AUD</option>
                <option value="BDT">BDT</option>
              </select> */}
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 mt-5">
              <EnaInput
                type="text"
                name="companyName"
                placeholder="your user id"
              />
              <EnaInput type="text" name="website" placeholder="your user id" />
              <EnaInput
                type="text"
                name="inspirationWebsite"
                placeholder="your user id"
              />
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 mt-5">
              <EnaInput
                type="text"
                name="facebookPage"
                placeholder="your user id"
              />
              <EnaInput
                type="text"
                name="serviceOrProduct"
                placeholder="your user id"
              />
              <EnaInput
                type="text"
                name="location"
                placeholder="your user id"
              />
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <EnaInput
                type="text"
                name="language"
                placeholder="your user id"
              />
              <EnaInput type="text" name="subject" placeholder="your user id" />
            </div>

            <div className="my-4">
              <textarea
                {...register('clientMessages')}
                placeholder="Write your Message"
                className="w-full h-44 bg-[#f8f8f8] text-gray-900 border border-slate-300 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                defaultValue={''}
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="btn lg:w-[570px] my-10 text-md py-3 px-8 border border-black relative group overflow-hidden font-semibold"
              >
                <span className="absolute inset-0 bg-slate-700 z-0 transition-transform duration-500 transform -translate-x-full group-hover:translate-x-0"></span>
                <span className="relative z-10 text-black group-hover:text-white uppercase">
                  Send a message
                </span>
              </button>
            </div>
          </EnaForm>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
