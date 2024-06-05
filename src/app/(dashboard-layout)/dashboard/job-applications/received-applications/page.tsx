'use client';
import JobApplicationModal from '@/app/components/Dashboard/JobApplicationModal';
import Loader from '@/app/components/Shared/Loader/Loader';
import { useUpdateHiringPostMutation } from '@/redux/features/hiringApi/hiringApi';
import {
  useGetAllJobApplicationsQuery,
  useGetMarkedJobApplicationsQuery,
  useUpdateJobApplicationMutation,
} from '@/redux/features/jobApplicationsApi/jobApplicationsApi';
import React, { useState } from 'react';
import { toast } from 'sonner';

type TJobReference = {
  referenceName: string;
  referenceCompany: string;
  referenceContact: string;
};

type TJobApplication = {
  _id: string;
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
  references?: TJobReference;
  currentCompany?: string;
  availableByDate?: Date;
  education?: string;
  skills?: string;
  workExperience: string;
  applicationSource: string;
  reasonWeHireYou: string;
};

const ReceivedApplications = () => {
  const {
    data: jobApplications,
    isLoading,
    refetch,
  } = useGetAllJobApplicationsQuery(undefined);
  console.log(jobApplications);
  const [updateMark] = useUpdateJobApplicationMutation();

  const [modalOpen, setModalOpen] = useState(false);
  const [currentApplicationIndex, setCurrentApplicationIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentApplicationIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleMark = async (id: string) => {
    const toastId = toast.loading('Updating...');
    try {
      const res: any = await updateMark(id);
      if (res?.error) {
        toast.error(`Something went wrong`, {
          id: toastId,
          duration: 2000,
        });
      } else {
        toast.success('Marked successful!', {
          id: toastId,
          duration: 2000,
        });
        refetch();
      }
    } catch (error) {
      toast.error('Something went wrong', { id: toastId, duration: 2000 });
    }
  };

  if (isLoading) {
    <Loader />;
  }

  return (
    <div className="col-span-3">
      <div className="overflow-x-auto ">
        <table className="min-w-[90%] shadow-md  border mx-auto border-gray-100  my-6">
          <thead>
            <tr className="bg-[#333333] text-white">
              <th className="py-3 px-6 text-left  hidden md:table-cell">
                SL NO
              </th>
              <th className="py-3 px-6 text-left hidden md:table-cell ">
                Name
              </th>
              <th className="py-3 px-6 text-left ">Email</th>
              <th className="py-4 px-6   text-end  ">Action</th>
              <th className="py-4 px-6   text-end hidden md:table-cell ">
                Mark
              </th>
            </tr>
          </thead>
          <tbody>
            {jobApplications?.data?.map(
              (application: TJobApplication, i: number) => (
                <tr
                  key={application._id}
                  className="hover:bg-gray-50 transition duration-300"
                >
                  <td className="py-4 px-6 hidden md:table-cell ">{i + 1} </td>
                  <td className="py-4 px-6 hidden md:table-cell ">
                    {application?.applicantName}
                  </td>
                  <td className="py-4 px-6  ">{application?.applicantEmail}</td>
                  <td className="py-4 px-6  text-end">
                    <button
                      onClick={() => openModal(i)}
                      className="rounded-md bg-indigo-500 px-5 py-[6px] text-white"
                    >
                      Open
                    </button>
                  </td>
                  <td className="py-4 px-6  text-end hidden md:table-cell">
                    <button
                      onClick={() => handleMark(application._id)}
                      className=" text-blue-500"
                    >
                      Mark as read
                    </button>
                  </td>
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>
      {modalOpen && (
        <JobApplicationModal
          applications={jobApplications.data}
          currentIndex={currentApplicationIndex}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default ReceivedApplications;
