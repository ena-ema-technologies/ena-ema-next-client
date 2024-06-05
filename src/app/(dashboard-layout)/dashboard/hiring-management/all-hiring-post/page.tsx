'use client';
import MemberUpdateModal from '@/app/components/Dashboard/MemberUpdateModal';
import Loader from '@/app/components/Shared/Loader/Loader';
import {
  useDeleteHiringPostMutation,
  useGetAllHiringPostQuery,
} from '@/redux/features/hiringApi/hiringApi';
import React from 'react';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';

type THiring = {
  _id: string;
  title: string;
  jobNature: string;
  workingHours: string;
  workingDays: string;
  description: string;
  minSalary: number;
  maxSalary: number;
  currency: string;
  location: string;
  requirements: string;
  experience: string;
  applicationDeadline: string;
  companyName: string;
};

const AllHiringPostPage = () => {
  const { data: hiringPost, isFetching } = useGetAllHiringPostQuery(undefined);
  const [deleteHiringPost] = useDeleteHiringPostMutation();

  if (isFetching) {
    return <Loader />;
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
        await deleteHiringPost(id);
        Swal.fire({
          title: 'Deleted!',
          text: 'User has been deleted.',
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
              <th className="py-3 px-6 text-left hidden md:table-cell">
                SL NO
              </th>
              <th className="py-3 px-6 text-left ">Title</th>
              <th className="py-3 px-6 text-left hidden md:table-cell">
                Job Nature
              </th>
              <th className="py-3 px-6 text-left hidden md:table-cell">
                Working Time
              </th>
              <th className="py-4 px-6 text-lg  text-end hidden md:table-cell">
                Update
              </th>
              <th className="py-4 px-6 text-lg  text-end">Delete</th>
            </tr>
          </thead>
          <tbody>
            {hiringPost?.data?.map((hiringP: THiring, i: number) => (
              <tr
                key={hiringP._id}
                className="hover:bg-gray-50 transition duration-300"
              >
                <td className="py-4 px-6 hidden md:table-cell">{i + 1} </td>
                <td className="py-4 px-6 ">{hiringP?.title}</td>
                <td className="py-4 px-6 hidden md:table-cell">
                  {hiringP?.jobNature}
                </td>
                <td className="py-4 px-6 hidden md:table-cell">
                  {hiringP?.workingHours}
                </td>
                <td className="py-4 px-6  text-end hidden md:table-cell">
                  {/* <MemberUpdateModal member={hiringP} /> todos: job post update  er kaj korte hobe */}
                </td>
                <td className="py-4 px-6  text-end">
                  <button
                    onClick={() => handleDelete(hiringP._id)}
                    className="rounded-md bg-red-500 p-3 py-[6px] text-white"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllHiringPostPage;
