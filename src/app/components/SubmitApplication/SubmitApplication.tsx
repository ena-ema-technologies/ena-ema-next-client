import { useCreateJobApplicationsMutation } from '@/redux/features/jobApplicationsApi/jobApplicationsApi';
import { FieldValues, useForm } from 'react-hook-form';
import { toast } from 'sonner';

type TJobApplication = {
  applicantName: string;
  applicantEmail: string;
  applicantPhone: string;
  resumeLink: string;
  linkedInProfile?: string;
  facebookProfile?: string;
  portfolioLink: string;
  githubProfile: string;
  expectedSalary: number;
  currency: string;
  currentCompany?: string;
  availableByDate?: Date;
  education?: string;
  skills?: string;
  workExperience: string;
  preferredWorkingHours: string;
  applicationSource: string;
  reasonWeHireYou: string;
  mark: boolean;
};

const SubmitApplication = () => {
  const [createJobApplications] = useCreateJobApplicationsMutation();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const toastId = toast.loading('Sending message...');
    const phoneNo = Number(data.phoneNo);
    const applicationData = {
      ...data,
      phoneNo,
    };

    try {
      const res: any = await createJobApplications(applicationData);
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

  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 mt-5">
          <input
            {...register('applicantName')}
            className="w-full bg-[#f8f8f8] text-gray-900 border border-slate-300 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Your Full Name"
          />

          <input
            {...register('applicantEmail')}
            className="w-full bg-[#f8f8f8] text-gray-900 border border-slate-300 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Your Email Address"
          />

          <input
            {...register('applicantPhone')}
            className="w-full bg-[#f8f8f8] text-gray-900 border border-slate-300 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Your Phone Number"
          />
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 mt-5">
          <input
            {...register('resumeLink')}
            className="w-full bg-[#f8f8f8] text-gray-900 border border-slate-300 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="How we contact with you back ?"
          />

          <input
            {...register('linkedInProfile')}
            className="w-full bg-[#f8f8f8] text-gray-900 border border-slate-300 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Your Budget"
          />

          <input
            {...register('facebookProfile')}
            className="w-full bg-[#f8f8f8] text-gray-900 border border-slate-300 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Your Budget"
          />
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 mt-5">
          <input
            {...register('portfolioLink')}
            className="w-full bg-[#f8f8f8] text-gray-900 border border-slate-300 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Your Company Name"
          />

          <input
            {...register('githubProfile')}
            className="w-full bg-[#f8f8f8] text-gray-900 border border-slate-300 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Your website, if any ?"
          />

          <input
            {...register('expectedSalary')}
            className="w-full bg-[#f8f8f8] text-gray-900 border border-slate-300 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="If you like any website"
          />
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 mt-5">
          <select
            {...register('currency')}
            className="w-full bg-[#f8f8f8] text-gray-900 border border-slate-300 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="AUD">AUD</option>
            <option value="BDT">BDT</option>
          </select>

          <input
            {...register('currentCompany')}
            className="w-full bg-[#f8f8f8] text-gray-900 border border-slate-300 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Your Facebook page Name"
          />

          <input
            {...register('availableByDate')}
            className="w-full bg-[#f8f8f8] text-gray-900 border border-slate-300 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="what is your product ?"
          />
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 mt-5">
          <input
            {...register('education')}
            className="w-full bg-[#f8f8f8] text-gray-900 border border-slate-300 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Your Location Name"
          />

          <input
            {...register('skills')}
            className="w-full bg-[#f8f8f8] text-gray-900 border border-slate-300 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Your Language Name"
          />

          <input
            {...register('workExperience')}
            className="w-full bg-[#f8f8f8] text-gray-900 border border-slate-300 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Your Name"
          />
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
          <input
            {...register('preferredWorkingHours')}
            className="w-full bg-[#f8f8f8] text-gray-900 border border-slate-300 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Your Location Name"
          />

          <input
            {...register('applicationSource')}
            className="w-full bg-[#f8f8f8] text-gray-900 border border-slate-300 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Your Language Name"
          />
        </div>

        <div className="my-4">
          <textarea
            {...register('reasonWeHireYou')}
            placeholder="Write your Message"
            className="w-full h-44 bg-[#f8f8f8] text-gray-900 border border-slate-300 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            defaultValue={''}
          />
        </div>
        <div className="text-center my-10 flex justify-center items-center">
          <input type="checkbox" name="" id="" />
          <p className="ms-1">
            Save my name, email, and website in this browser for the next time I
            comment.
          </p>
        </div>
        <div className="text-center">
          <button className="btn lg:w-[570px] my-10 text-md py-3 px-8 border border-black relative group overflow-hidden font-semibold">
            <span className="absolute inset-0 bg-slate-700 z-0 transition-transform duration-500 transform -translate-x-full group-hover:translate-x-0"></span>
            <span className="relative z-10 text-black group-hover:text-white uppercase">
              Send a message
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubmitApplication;
