'use client';

import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';

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
  availableByDate?: string;
  education?: string;
  skills?: string;
  workExperience: string;
  preferredWorkingHours: string;
  applicationSource: string;
  reasonWeHireYou: string;
};

type TProps = {
  applications: TJobApplication[];
  currentIndex: number;
  onClose: () => void;
};

const JobApplicationModal: React.FC<TProps> = ({
  applications,
  currentIndex,
  onClose,
}) => {
  const [currentApplicationIndex, setCurrentApplicationIndex] =
    useState<number>(currentIndex);

  const handleNext = () => {
    setCurrentApplicationIndex((prevIndex) =>
      prevIndex === applications.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handlePrev = () => {
    setCurrentApplicationIndex((prevIndex) =>
      prevIndex === 0 ? applications.length - 1 : prevIndex - 1,
    );
  };

  const application = applications[currentApplicationIndex];
  return (
    <div>
      <div
        className={`fixed z-[100] flex items-center justify-center
            } inset-0 bg-black/20 backdrop-blur-sm duration-100`}
      >
        <div
          className={`w-[1400px] h-[700px] text-left rounded-lg bg-white  p-8 drop-shadow-2xl dark:bg-gray-800 dark:text-white relative flex flex-col`}
        >
          <MdClose
            onClick={onClose}
            className="   text-8xl mx-auto mr-0 text-black hover:text-indigo-600 cursor-pointer"
          />

          {/* modal contents starts from here  */}

          <div className="grid grid-cols-1 md:grid-cols-2 px-4">
            <div className="md:justify-self-start">
              <div className="flex justify-between gap-4">
                <div className="">
                  <p className=""> Name:</p>
                  <p className="">Email:</p>
                  <p className="">Phone :</p>
                  <p className="">Resume Link: </p>
                  <p className="">Portfolio Link: </p>
                  <p className=" ">GitHub Profile : </p>
                  <p className=" ">LinkedIn Profile : </p>
                  <p className=" ">Facebook Profile : </p>
                </div>
                {/* data extraction starts from here using map  */}
                <div className="text-slate-600 ">
                  <p className="">{application?.applicantName}</p>
                  <p className="">{application?.applicantEmail}</p>
                  <p className="">{application?.applicantPhone}</p>
                  <p className=""> {application?.resumeLink} </p>
                  <p className="">{application?.portfolioLink} </p>
                  <p className="">{application?.githubProfile}</p>
                  <p className="">{application?.linkedInProfile}</p>
                  <p className="">{application?.facebookProfile}</p>
                </div>

                {/* budget er sathe currency add korte hobe  */}
              </div>
            </div>

            <div className="md:justify-self-end">
              <div className="flex justify-between gap-4">
                <div className="">
                  <p>Expected Salary: </p>
                  <p className="">Current Company: </p>
                  <p className="">They Can Join: </p>
                  <p className="">Education: </p>
                  <p className=""> Skills:</p>
                  <p className="">Previous experience:</p>
                  <p className="">Preferred Hours:</p>
                  <p className="">Where they heard:</p>
                </div>
                <div className="mr-4 text-slate-600 ">
                  <p className="">
                    {application?.expectedSalary} {application?.currency}
                  </p>
                  <p className="">{application?.currentCompany}</p>
                  <p className="">{application?.availableByDate}</p>
                  <p className=""> {application?.education} </p>
                  <p className="">{application?.skills} </p>
                  <p className="">{application?.workExperience}</p>
                  <p className="">{application?.preferredWorkingHours}</p>
                  <p className="">{application?.applicationSource}</p>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <p className="px-1 my-3 text-md opacity-80 border h-screen border-indigo-600">
            {application?.reasonWeHireYou}
          </p>
          <div className="flex-grow"></div>
          <div className="flex justify-between items-center">
            <button
              onClick={handlePrev}
              className="rounded-md bg-indigo-600 hover:bg-indigo-700 px-6 py-1.5 text-white"
            >
              Prev
            </button>
            <button
              onClick={handleNext}
              className="rounded-md bg-indigo-600 hover:bg-indigo-700 px-6 py-1.5 text-white"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApplicationModal;
