'use client';
import { useRegisterMutation } from '@/redux/features/register/registerApi';
import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { toast } from 'sonner';
const image_upload_token = process.env.NEXT_PUBLIC_image_upload_token;

const CreateAccount = () => {
  const { register, handleSubmit, reset } = useForm();
  const [createUser] = useRegisterMutation();
  const image_upload_url = `https://api.imgbb.com/1/upload?key=${image_upload_token}`;

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading('Creating account...');

    const formData = new FormData();
    formData.append('image', data.profilePhoto[0]);

    try {
      const profileResponse = await fetch(image_upload_url, {
        method: 'POST',
        body: formData,
      }).then((res) => res.json());

      if (profileResponse.success) {
        const profileURL = profileResponse.data.display_url;
        const createNewAccount = {
          ...data,
          profilePhoto: profileURL,
        };

        const res: any = await createUser(createNewAccount);

        if (res?.error) {
          const errorMessage = res.error.message;
          toast.error(`Error: ${errorMessage}`, {
            id: toastId,
            duration: 2000,
          });
        } else {
          toast.success('Account Created!', {
            id: toastId,
            duration: 2000,
          });
          reset();
        }
      }
    } catch (error) {
      toast.error('Something went wrong', {
        id: toastId,
        duration: 2000,
      });
    }
  };

  // TODOS: create admin is need to do later.

  return (
    <div className="col-span-3 px-4 lg:px-0">
      <h1 className="text-2xl mt-20">Create an Admin</h1>
      <form className="lg:pe-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 my-5 ">
          <input
            {...register('id')}
            className="w-full bg-[#f8f8f8] border border-slate-300 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Admin Id"
          />
          <input
            {...register('name')}
            className="w-full bg-[#f8f8f8] border border-slate-300 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Your Full Name"
          />
          <input
            {...register('email')}
            className="w-full bg-[#f8f8f8] border border-slate-300 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Your email"
          />
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 my-5">
          <input
            {...register('password')}
            className="w-full bg-[#f8f8f8] border border-slate-300 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="your password"
          />
          <input
            {...register('gender')}
            className="w-full bg-[#f8f8f8] border border-slate-300 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Your Gender please"
          />
          <input
            {...register('role')}
            className="w-full bg-[#f8f8f8] border border-slate-300 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="your role in the company"
          />
          <input
            {...register('emergencyContactNo')}
            className="w-full bg-[#f8f8f8] border border-slate-300 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Type an emergency contact number"
          />
          <input
            {...register('presentAddress')}
            className="w-full bg-[#f8f8f8] border border-slate-300 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="your present address"
          />
          <input
            {...register('profilePhoto')}
            className="w-full bg-[#f8f8f8] border border-slate-300 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="file"
            placeholder="Select profile photo"
          />
        </div>
        <div className="text-center">
          <button className="mt-8 btn btn-wide mb-6 px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-gray-600 text-white inline-block">
            <span className="absolute bottom-0 left-0 flex w-full h-0 mt-0 transition-all duration-500 ease-out transform translate-y-0 bg-gray-200 group-hover:h-full"></span>
            <span className="relative group-hover:text-black font-bold flex items-center gap-4 justify-center">
              Create New Admin
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAccount;
