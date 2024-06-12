'use client';
import EnaForm from '@/app/components/Dashboard/Form/EnaForm/EnaForm';
import EnaInput from '@/app/components/Dashboard/Form/EnaInput/EnaInput';
import { useLoginMutation } from '@/redux/features/auth/authApi';
import { TUser, setUser } from '@/redux/features/auth/authSlice';
import { useAppDispatch } from '@/redux/hooks';
import { verifyToken } from '@/utils/verifyToken';
import { useRouter } from 'next/navigation';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';

const LoginPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  

  const defaultValues = {
    id: '0001',
    password: 'superAdmin123456',
  }

  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const toastId = toast.loading('Logging in');

    try {
      const userInfo = {
        id: data.id,
        password: data.password,
      };

      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;

      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success('You are logged in successfully', {
        id: toastId,
        duration: 2000,
      });
      router.push('/dashboard/query-management/message');
    } catch (err) {
      toast.error('Something went wrong', { id: toastId, duration: 2000 });
    }
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto ">
      <div className="flex min-h-screen items-center justify-center">
        <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
          <div className="text-center">
            <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Log In
            </h4>
            <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
              Enter your details to register.
            </p>
          </div>
          <EnaForm onSubmit={onSubmit} defaultValues={defaultValues}>
            <div className="mb-4 flex flex-col gap-6">
              <div className="relative h-11 w-full min-w-[200px]">
                <EnaInput type="text" name="id" label="ID" />
              </div>
              <div className="relative h-11 w-full mt-4 min-w-[200px]">
                <EnaInput type="password" name="password" label="Password" />
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-block mt-8 rounded-lg px-10 py-2.5 relative  group overflow-hidden font-medium bg-gray-600 text-white"
            >
              <span className="absolute bottom-0 left-0 flex w-full h-0 mt-0 transition-all duration-500 ease-out transform translate-y-0 bg-gray-200 group-hover:h-full"></span>
              <span className="relative group-hover:text-black font-bold justify-center">
                Login
              </span>
            </button>
            <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
              New to this website ? Please
              <a
                className="font-semibold text-pink-500  ml-2 transition-colors hover:text-blue-700"
                href="#"
              >
                Register
              </a>
            </p>
          </EnaForm>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
