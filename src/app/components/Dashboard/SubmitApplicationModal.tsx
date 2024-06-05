import { useCreateJobApplicationsMutation } from '@/redux/features/jobApplicationsApi/jobApplicationsApi';
import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { MdClose } from 'react-icons/md';
import { toast } from 'sonner';
import './SubmitApplication.css';
import { z } from 'zod';

export const jobApplicationSchema = z.object({
  applicantName: z.string().nonempty('Applicant name is required'),
  applicantEmail: z
    .string()
    .email('Please enter a valid email address')
    .nonempty('Applicant email is required'),
  applicantPhone: z.string().nonempty('Applicant phone number is required'),
  resumeLink: z
    .string()
    .url('Invalid URL format')
    .nonempty('Resume link is required'),
  linkedInProfile: z.string().url('Invalid URL format').optional(),
  facebookProfile: z.string().url('Invalid URL format').optional(),
  portfolioLink: z
    .string()
    .url('Invalid URL format')
    .nonempty('Portfolio link is required'),
  githubProfile: z
    .string()
    .url('Invalid URL format')
    .nonempty('GitHub profile is required'),
  expectedSalary: z
    .number()
    .positive('Expected salary must be a positive number'),
  currency: z.string().nonempty('Currency is required'),
  currentCompany: z.string().optional(),
  availableByDate: z.date().optional(),
  education: z.string().optional(),
  skills: z.string().optional(),
  workExperience: z.string().nonempty('Work experience is required'),
  preferredWorkingHours: z
    .string()
    .nonempty('Preferred working hours are required'),
  applicationSource: z.string().nonempty('Application source is required'),
  reasonWeHireYou: z.string().nonempty('Reason we should hire you is required'),
});

const SubmitApplicationModal = ({ onClose }: any) => {
  const [submitApplication] = useCreateJobApplicationsMutation();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);

    const toastId = toast.loading('Application is now submitting...');
    const applicationData = { ...data };

    try {
      const res: any = await submitApplication(applicationData);
      console.log(res);
      if (res?.error) {
        toast.error('Something went wrong', {
          id: toastId,
          duration: 2000,
        });
      } else {
        toast.success('Application submission successfully', {
          id: toastId,
          duration: 2000,
        });
        onClose();
      }
    } catch (error) {
      toast.error('Something went wrong', { id: toastId, duration: 2000 });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-20 backdrop-blur-sm">
      <div className="relative w-full max-w-7xl mx-4 md:mx-auto my-8 md:my-auto max-h-screen md:max-h-[90vh] bg-white rounded-lg p-8 shadow-2xl flex flex-col overflow-hidden">
        <MdClose
          onClick={onClose}
          className=" absolute top-4 right-4 text-3xl text-black hover:text-blue-400 cursor-pointer"
        />

        {/* application submission starts from here  */}
        <div className="overflow-auto flex-1 no-scrollbar">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 mt-5">
              <div>
                <input
                  {...register('applicantName', {
                    required: { value: true, message: 'full name is required' },
                  })}
                  className="w-full bg-[#f8f8f8] text-gray-900 border border-slate-300  p-2 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Your Full Name"
                />
              </div>

              <div>
                <input
                  {...register('applicantEmail', {
                    required: {
                      value: true,
                      message: 'Please insert a valid email id',
                    },
                  })}
                  className="w-full bg-[#f8f8f8] text-gray-900 border border-slate-300  p-2 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Your Email Address"
                />
              </div>

              <div>
                <input
                  {...register('applicantPhone', {
                    required: {
                      value: true,
                      message: 'Please insert your phone number',
                    },
                  })}
                  className="w-full bg-[#f8f8f8] text-gray-900 border border-slate-300  p-2 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Your Phone Number"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 mt-5">
              <div>
                <input
                  {...register('resumeLink', {
                    required: {
                      value: true,
                      message: 'Please enter a valid URL',
                    },
                  })}
                  className="w-full bg-[#f8f8f8] text-gray-900 border border-slate-300  p-2 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Type your resume link here "
                />
              </div>
              <div>
                <input
                  {...register('linkedInProfile', {
                    required: {
                      value: true,
                      message: 'Please enter a valid URL',
                    },
                  })}
                  className="w-full bg-[#f8f8f8] text-gray-900 border border-slate-300  p-2 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Your Linkedin profile link here "
                />
              </div>
              <div>
                <input
                  {...register('facebookProfile', {
                    required: {
                      value: true,
                      message: 'Please enter a valid URL',
                    },
                  })}
                  className="w-full bg-[#f8f8f8] text-gray-900 border border-slate-300  p-2 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Your Facebook profile link here "
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 mt-5">
              <div>
                <input
                  {...register('portfolioLink', {
                    required: {
                      value: true,
                      message: 'Please enter a valid URL',
                    },
                  })}
                  className="w-full bg-[#f8f8f8] text-gray-900 border border-slate-300  p-2 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Your Portfolio link here?"
                />
              </div>

              <div>
                <input
                  {...register('githubProfile', {
                    required: {
                      value: true,
                      message: 'Please enter a valid URL',
                    },
                  })}
                  className="w-full bg-[#f8f8f8] text-gray-900 border border-slate-300  p-2 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Your Github profile link here"
                />
              </div>

              <div>
                <input
                  {...register('expectedSalary', {
                    required: {
                      value: true,
                      message: 'Enter a positive number only',
                    },
                  })}
                  className="w-full bg-[#f8f8f8] text-gray-900 border border-slate-300  p-2 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="How much you want for this role ?"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 mt-5">
              <select
                {...register('currency', {
                  required: {
                    value: true,
                    message: 'Choose desired currency from below',
                  },
                })}
                className="w-full bg-[#f8f8f8] text-gray-900 border border-slate-300  p-2 rounded-lg focus:outline-none focus:shadow-outline"
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="AUD">AUD</option>
                <option value="BDT">BDT</option>
              </select>

              <div>
                <input
                  {...register('currentCompany', {
                    required: {
                      value: true,
                      message: 'Write the name of company, you are working now',
                    },
                  })}
                  className="w-full bg-[#f8f8f8] text-gray-900 border border-slate-300  p-2 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Current work place, if any ?"
                />
              </div>
              <div>
                <input
                  {...register('availableByDate', {
                    required: {
                      value: true,
                      message: 'Please enter a valid date only',
                    },
                  })}
                  className="w-full bg-[#f8f8f8] text-gray-900 border border-slate-300  p-2 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="When you can join here ?"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 mt-5">
              <div>
                <input
                  {...register('education', {
                    required: {
                      value: true,
                      message: 'Your educational background please',
                    },
                  })}
                  className="w-full bg-[#f8f8f8] text-gray-900 border border-slate-300  p-2 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Your academic qualification"
                />
              </div>

              <div>
                <input
                  {...register('skills', {
                    required: {
                      value: true,
                      message: 'Write skills name, you are expert only',
                    },
                  })}
                  className="w-full bg-[#f8f8f8] text-gray-900 border border-slate-300  p-2 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Technologies you are expert with"
                />
              </div>

              <div>
                <input
                  {...register('workExperience', {
                    required: {
                      value: true,
                      message: 'If you have previous working experience ',
                    },
                  })}
                  className="w-full bg-[#f8f8f8] text-gray-900 border border-slate-300  p-2 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Have you any previous work experience ?"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <div>
                <input
                  {...register('preferredWorkingHours', {
                    required: {
                      value: true,
                      message: 'if you have any preferred working hours ',
                    },
                  })}
                  className="w-full bg-[#f8f8f8] text-gray-900 border border-slate-300  p-2 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Your working hours preference "
                />
              </div>

              <div>
                <input
                  {...register('applicationSource', {
                    required: {
                      value: true,
                      message: 'Where you heard regarding this job post ?',
                    },
                  })}
                  className="w-full bg-[#f8f8f8] text-gray-900 border border-slate-300  p-2 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Where you heard regarding this job ?"
                />
              </div>
            </div>

            <div className="my-4">
              <textarea
                {...register('reasonWeHireYou', {
                  required: {
                    value: true,
                    message: 'Please explain, why we should hire you ?',
                  },
                })}
                placeholder="Please explain, why we hire you ?"
                className="w-full h-44 bg-[#f8f8f8] text-gray-900 border border-slate-300 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                defaultValue={''}
              />
            </div>

            <div className="text-center">
              <button className="btn lg:w-[570px] my-4 text-md py-3 px-8 border border-black relative group overflow-hidden font-semibold">
                <span className="absolute inset-0 bg-slate-700 z-0 transition-transform duration-500 transform -translate-x-full group-hover:translate-x-0"></span>
                <span className="relative z-10 text-black group-hover:text-white uppercase">
                  Submit Your Application
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* application submission ended here  */}
    </div>
  );
};

export default SubmitApplicationModal;
