'use client';

import Loader from '@/app/components/Shared/Loader/Loader';
import {
  useDeleteJobApplicationsMutation,
  useGetMarkedJobApplicationsQuery,
} from '@/redux/features/jobApplicationsApi/jobApplicationsApi';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';

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
  currentCompany?: string;
  availableByDate?: Date;
  education?: string;
  skills?: string;
  workExperience: string;
  applicationSource: string;
  reasonWeHireYou: string;
  mark: boolean;
};

const ArchivedApplications = () => {
  const { data: applications, isFetching } =
    useGetMarkedJobApplicationsQuery(undefined);
  const [deleteJobApplications] = useDeleteJobApplicationsMutation();

  if (isFetching) {
    <Loader />;
  }

  const handleDelete = (id: string) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteJobApplications(id);
        Swal.fire({
          title: 'Deleted!',
          text: 'Your query has been deleted.',
          icon: 'success',
        });
      }
    });
  };

  return (
    <div className="col-span-3">
      <div className="overflow-x-auto ">
        <table className="min-w-[90%] shadow-md  border mx-auto border-gray-100  my-6">
          <thead>
            <tr className="bg-[#333333] text-white">
              <th className="py-3 px-6 text-left border-b">SL NO</th>
              <th className="py-3 px-6 text-left border-b">Name</th>
              <th className="py-3 px-6 text-left border-b">Email</th>
              <th className="py-4 px-6 text-lg border-b text-end">Action</th>
            </tr>
          </thead>
          <tbody>
            {applications?.data?.map(
              (application: TJobApplication, i: number) => (
                <tr
                  key={application._id}
                  className="hover:bg-gray-50 transition duration-300"
                >
                  <td className="py-4 px-6 border-b">{i + 1} </td>
                  <td className="py-4 px-6 border-b">
                    {application?.applicantName}
                  </td>
                  <td className="py-4 px-6 border-b">
                    {application?.applicantEmail}
                  </td>
                  <td className="py-4 px-6 border-b text-end">
                    <button
                      onClick={() => handleDelete(application._id)}
                      className="rounded-md bg-red-500 p-3 py-[6px] text-white"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ArchivedApplications;
