'use client';
import EnaForm from '@/app/components/Dashboard/Form/EnaForm/EnaForm';
import EnaInput from '@/app/components/Dashboard/Form/EnaInput/EnaInput';
import { useLoginMutation } from '@/redux/features/auth/authApi';
import { TUser, setUser } from '@/redux/features/auth/authSlice';
import { useAppDispatch } from '@/redux/hooks';
import { verifyToken } from '@/utils/verifyToken';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const LoginPage = () => {
  //TODOS: need to remove default value from here

  const defaultValues = {
    id: '0001',
    password: 'superAdmin123456',
  };

  const [login] = useLoginMutation();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const toastId = toast.loading('Logging in...');

    try {
      const userInfo = {
        id: data.id,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      console.log(res);
      if (res?.error) {
        toast.error(`Something went wrong`, {
          id: toastId,
          duration: 2000,
        });
      } else {
        const user = verifyToken(res.data.accessToken) as TUser;
        console.log(user);
        dispatch(setUser({ user: user, token: res.data.accessToken }));
        toast.success('Login successful!', {
          id: toastId,
          duration: 2000,
        });
        router.push('/dashboard/query-management/message');
      }
    } catch (error) {
      toast.error('Something went wrong', { id: toastId, duration: 2000 });
    }
  };

  const loginUserSchema = z.object({
    id: z.string({ required_error: 'please enter valid id' }),
    password: z.string({ required_error: 'write your password' }),
  });

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
          <div className="flex justify-center mb-8"></div>
          <h1 className="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">
            Login Please
          </h1>
          <EnaForm onSubmit={onSubmit} resolver={zodResolver(loginUserSchema)}>
            <div className="mb-6">
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <EnaInput type="text" name="id" placeholder="your user id" />
              </label>
            </div>
            <div className=" ">
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <EnaInput
                  type="password"
                  name="password"
                  placeholder="password"
                />
              </label>
            </div>
            <a href="#" className="block text-right text-xs text-cyan-600 mt-2">
              Forgot Password ?
            </a>
            <button
              type="submit"
              className="w-32 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-4 mb-6"
            >
              Login
            </button>
          </EnaForm>

          <p className="text-xs text-gray-600 text-center mt-10">
            &copy; 2023 Ena Ema Technologies
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
