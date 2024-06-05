'use client';

import SubmitApplicationModal from '@/app/components/Dashboard/SubmitApplicationModal';
import { useGetAllHiringPostQuery } from '@/redux/features/hiringApi/hiringApi';
import { THiring } from '@/redux/type/common';
import Image from 'next/image';
import React, { useState } from 'react';

const CareersPage = () => {
  const { data: hiringPosts, isFetching } = useGetAllHiringPostQuery(undefined);

  const [saModalOpen, setSaModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const openSaModal = () => {
    setSaModalOpen(true);
    setIsSubmitted(false);
  };

  const closeSaModal = () => {
    setSaModalOpen(false);
  };

  const handleCloseModal = () => {
    setSaModalOpen(false);
  };
  const handleApplicationSubmitted = () => {
    setIsSubmitted(true);
    handleCloseModal();
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <div>
        {hiringPosts?.data?.map((hiringPost: THiring, i: number) => (
          <div
            key={hiringPost._id}
            className=" shadow-lg p-4 group transition-transform duration-500 transform-gpu hover:-translate-y-2"
          >
            <div className="mt-16">
              <div className="text-center mt-16">
                <p className="text-3xl font-bold text-slate-600 mb-8">
                  Open position for {hiringPost.title}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div>
                  <div className="overflow-hidden">
                    <Image
                      src={hiringPost.hiringImage}
                      alt={hiringPost.title}
                      width={500}
                      height={450}
                      className="rounded-lg transform transition duration-500 group-hover:scale-110 "
                    />
                  </div>
                </div>
                <div>
                  <p>{hiringPost.description}</p>
                  <p>
                    Candidate must have{' '}
                    <span className="text-orange-400 font-semibold">
                      {' '}
                      {hiringPost.requirements}
                    </span>
                  </p>
                  <p>
                    This is a <span>{hiringPost.jobNature}</span> job, where you
                    will have to work{' '}
                    <span className="text-orange-400 font-semibold">
                      {' '}
                      {hiringPost.workingHours}
                    </span>
                    . Total 5 working days{' '}
                    <span className="text-orange-400 font-semibold">
                      {hiringPost.workingDays}
                    </span>
                  </p>
                  <p>
                    We are offering{' '}
                    <span className="text-orange-400 font-semibold">
                      {hiringPost.currency} {hiringPost.minSalary} -{' '}
                      {hiringPost.maxSalary}
                    </span>{' '}
                    at this moment. If you think you are good fit for this
                    position please apply Now ! Here is more details about the
                    job :
                  </p>

                  <p className="font-semibold underline text-orange-400">
                    BenefitS:{' '}
                  </p>

                  <p>{hiringPost.benefits1}</p>
                  <p>{hiringPost.benefits2}</p>
                  <p>{hiringPost.benefits3}</p>
                  <p>{hiringPost.benefits4}</p>
                  <p>{hiringPost.benefits5}</p>
                  <p>{hiringPost.benefits6}</p>
                  <p>{hiringPost.benefits7}</p>
                </div>
              </div>
              {/* text starts again:  */}
              <p>{hiringPost.benefits8}</p>
              <p>{hiringPost.benefits9}</p>
              <p>{hiringPost.benefits10}</p>

              <p className="font-semibold underline text-orange-400 mt-4">
                Responsibilities:{' '}
              </p>
              <p>{hiringPost.responsibilities1}</p>
              <p>{hiringPost.responsibilities2}</p>
              <p>{hiringPost.responsibilities3}</p>
              <p>{hiringPost.responsibilities4}</p>
              <p>{hiringPost.responsibilities5}</p>
              <p>{hiringPost.responsibilities6}</p>
            </div>
            <p className="font-semibold underline text-orange-400  mt-4">
              Interview process:{' '}
            </p>
            <p>{hiringPost.InterviewRd1}</p>
            <p>{hiringPost.InterviewRd2}</p>
            <p>{hiringPost.InterviewRd3}</p>
            <p>
              Please note, we do not accept any single application after{' '}
              {hiringPost.applicationDeadline}, so do hurry and grab your chance
              to work such an amazing company
            </p>
          </div>
        ))}
        <button
          onClick={openSaModal}
          className="btn btn-block my-8 bg-blue-500 text-white"
        >
          Apply Now
        </button>
      </div>

      {saModalOpen && (
        <SubmitApplicationModal
          onClose={closeSaModal}
          onFormSubmitSuccess={handleApplicationSubmitted}
        />
      )}
    </div>
  );
};

export default CareersPage;
