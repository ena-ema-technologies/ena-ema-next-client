'use client';
import QueryModal from '@/app/components/Dashboard/QueryModal';
import Loader from '@/app/components/Shared/Loader/Loader';
import {
  useGetAllQueryQuery,
  useUpdateQueryMutation,
} from '@/redux/features/query/queryApi';
import React, { useState } from 'react';
import { toast } from 'sonner';

type TQuery = {
  _id: string;
  fullName: string;
  email: string;
  phone: number;
  ContactMethod: string;
  budget: string;
  currency: string;
  companyName: string;
  facebookPage: string;
  inspirationWebsite: string;
  serviceOrProduct: string;
  location: string;
  language: string;
  additionalInformation: string;
};

const Message = () => {
  const { data: queries, isLoading, refetch } = useGetAllQueryQuery(undefined);
  const [updateMark] = useUpdateQueryMutation();

  const [modalOpen, setModalOpen] = useState(false);
  const [currentQueryIndex, setCurrentQueryIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentQueryIndex(index);
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
  // TOOD: refetch ta kaj korano lagbe, karon, refresh chara data paina.
  // TOOD: open button press korle, jei modal open hoi, sekhan thekei mark read and delete er kaj kora
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
            {queries?.data?.map((query: TQuery, i: number) => (
              <tr
                key={query._id}
                className="hover:bg-gray-50 transition duration-300"
              >
                <td className="py-4 px-6 hidden md:table-cell ">{i + 1} </td>
                <td className="py-4 px-6 hidden md:table-cell ">
                  {' '}
                  {query?.fullName}{' '}
                </td>
                <td className="py-4 px-6  ">{query?.email}</td>
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
                    onClick={() => handleMark(query._id)}
                    className=" text-blue-500"
                  >
                    Mark as read
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {modalOpen && (
        <QueryModal
          queries={queries.data}
          currentIndex={currentQueryIndex}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Message;
