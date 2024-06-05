'use client';
import { useCreateHiringPostMutation } from '@/redux/features/hiringApi/hiringApi';
import { FieldValues, useForm } from 'react-hook-form';
import { toast } from 'sonner';
const image_upload_token = process.env.NEXT_PUBLIC_image_upload_token;

const CreateHiringPostPage = () => {
  const { register, handleSubmit, reset } = useForm();
  const [createHiringPost] = useCreateHiringPostMutation();
  const image_upload_url = `https://api.imgbb.com/1/upload?key=${image_upload_token}`;

  const onSubmit = (data: FieldValues) => {
    console.log('Form Data Submitted:', data);
    const toastId = toast.loading('Creating new Service...');

    const formData = new FormData();
    console.log(formData);
    formData.append('image', data.hiringImage[0]);

    fetch(image_upload_url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then(async (hiringResponse) => {
        if (hiringResponse.success) {
          const hiringImageURL = hiringResponse.data.display_url;
          const createNewHiring = {
            ...data,
            hiringImage: hiringImageURL,
          };

          try {
            const res: any = await createHiringPost(createNewHiring);
            console.log(res);
            if (res?.error) {
              toast.error(`Something went wrong`, {
                id: toastId,
                duration: 2000,
              });
            } else {
              toast.success('Service Created!', {
                id: toastId,
                duration: 2000,
              });
              reset();
            }
          } catch (error) {
            toast.error('Something went wrong', {
              id: toastId,
              duration: 2000,
            });
          }
        } else {
          toast.error('image upload failed', {
            id: toastId,
            duration: 2000,
          });
        }
      })
      .catch((error) => {
        toast.error('something went wrong', {
          id: toastId,
          duration: 2000,
        });
      });
  };

  return (
    <div className="col-span-3 px-4 lg:px-0">
      <h1 className="text-2xl mt-8">Create New Hiring Post</h1>
      <form className="lg:pe-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-4 my-5 ">
          <input
            {...register('title')}
            className="w-full bg-[#f8f8f8] border border-slate-300 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Hiring Post Title"
          />

          <input
            {...register('jobNature')}
            className="w-full bg-[#f8f8f8] border border-slate-3 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            placeholder="Job Type "
            type="text"
          />

          <input
            {...register('workingHours')}
            className="w-full bg-[#f8f8f8] border border-slate-3 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            placeholder="Our working hours"
            type="text"
          />

          <input
            {...register('workingDays')}
            className="w-full bg-[#f8f8f8] border border-slate-3 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            placeholder="Total working days"
            type="text"
          />
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-4 my-5 ">
          <input
            {...register('experience')}
            className="w-full bg-[#f8f8f8] border border-slate-300 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Your experience "
          />

          <input
            {...register('minSalary')}
            className="w-full bg-[#f8f8f8] border border-slate-3 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            placeholder="Min offered Salary"
            type="number"
          />

          <input
            {...register('maxSalary')}
            className="w-full bg-[#f8f8f8] border border-slate-3 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            placeholder="Max offered Salary"
            type="number"
          />

          <input
            {...register('currency')}
            className="w-full bg-[#f8f8f8] border border-slate-3 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            placeholder="Preferred Currency"
            type="text"
          />
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-4 my-5 ">
          <input
            {...register('location')}
            className="w-full bg-[#f8f8f8] border border-slate-300 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Job Location"
          />

          <input
            {...register('requirements')}
            className="w-full bg-[#f8f8f8] border border-slate-3 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            placeholder="Our requirement "
            type="text"
          />

          <input
            {...register('benefits1')}
            className="w-full bg-[#f8f8f8] border border-slate-3 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            placeholder="Benefit you'll get 1"
            type="text"
          />

          <input
            {...register('benefits2')}
            className="w-full bg-[#f8f8f8] border border-slate-3 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            placeholder="Benefit you'll get 2"
            type="text"
          />
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-4 my-5 ">
          <input
            {...register('benefits3')}
            className="w-full bg-[#f8f8f8] border border-slate-300 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Benefit you'll get 3"
          />

          <input
            {...register('benefits4')}
            className="w-full bg-[#f8f8f8] border border-slate-3 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            placeholder="Benefit you'll get 4"
            type="text"
          />

          <input
            {...register('benefits5')}
            className="w-full bg-[#f8f8f8] border border-slate-3 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            placeholder="Benefit you'll get 5"
            type="text"
          />

          <input
            {...register('benefits6')}
            className="w-full bg-[#f8f8f8] border border-slate-3 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            placeholder="Benefit you'll get 6"
            type="text"
          />
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-4 my-5 ">
          <input
            {...register('benefits7')}
            className="w-full bg-[#f8f8f8] border border-slate-300 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Benefit you'll get 7"
          />

          <input
            {...register('benefits8')}
            className="w-full bg-[#f8f8f8] border border-slate-3 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            placeholder="Benefit you'll get 8"
            type="text"
          />

          <input
            {...register('benefits9')}
            className="w-full bg-[#f8f8f8] border border-slate-3 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            placeholder="Benefit you'll get 9"
            type="text"
          />

          <input
            {...register('benefits10')}
            className="w-full bg-[#f8f8f8] border border-slate-3 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            placeholder="Benefit you'll get 10"
            type="text"
          />
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-4 my-5 ">
          <input
            {...register('companyName')}
            className="w-full bg-[#f8f8f8] border border-slate-300 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Company name"
          />

          <input
            {...register('responsibilities1')}
            className="w-full bg-[#f8f8f8] border border-slate-3 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            placeholder="Your Responsibilities 1"
            type="text"
          />

          <input
            {...register('responsibilities2')}
            className="w-full bg-[#f8f8f8] border border-slate-3 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            placeholder="Your Responsibilities 2"
            type="text"
          />

          <input
            {...register('responsibilities3')}
            className="w-full bg-[#f8f8f8] border border-slate-3 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            placeholder="Your Responsibilities3"
            type="text"
          />
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-4 my-5 ">
          <input
            {...register('responsibilities4')}
            className="w-full bg-[#f8f8f8] border border-slate-300 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Your Responsibilities 4"
          />

          <input
            {...register('responsibilities5')}
            className="w-full bg-[#f8f8f8] border border-slate-3 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            placeholder="Your Responsibilities 5"
            type="text"
          />

          <input
            {...register('responsibilities6')}
            className="w-full bg-[#f8f8f8] border border-slate-3 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            placeholder="Your Responsibilities 6"
            type="text"
          />

          <input
            {...register('InterviewRd1')}
            className="w-full bg-[#f8f8f8] border border-slate-3 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            placeholder="Interview round 1 process"
            type="text"
          />
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-4 my-5 ">
          <input
            {...register('InterviewRd2')}
            className="w-full bg-[#f8f8f8] border border-slate-300 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Interview round 2 process"
          />

          <input
            {...register('InterviewRd3')}
            className="w-full bg-[#f8f8f8] border border-slate-3 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            placeholder="Interview round 3 process"
            type="text"
          />

          <input
            {...register('applicationDeadline')}
            className="w-full bg-[#f8f8f8] border border-slate-3 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            placeholder="Submission Deadline"
            type="text"
          />

          <input
            {...register('hiringImage')}
            className="w-full bg-[#f8f8f8] border border-slate-3 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            placeholder="Hiring post image"
            type="file"
          />
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-1 my-5 ">
          <textarea
            {...register('description')}
            className="w-full bg-[#f8f8f8] border border-slate-3 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            placeholder="Write a job description"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="mt-8 btn btn-wide mb-6 px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-gray-600 text-white inline-block"
          >
            <span className="absolute bottom-0 left-0 flex w-full h-0 mt-0 transition-all duration-500 ease-out transform translate-y-0 bg-gray-200 group-hover:h-full "></span>
            <span className="relative group-hover:text-black font-bold flex items-center gap-4 justify-center">
              Post New Hiring
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateHiringPostPage;
