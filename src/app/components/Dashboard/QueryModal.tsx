'use client';
import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';

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
  subject: string;
  clientMessages: string;
  website: string;
};

type TProps = {
  queries: TQuery[];
  currentIndex: number;
  onClose: () => void;
};

const QueryModal: React.FC<TProps> = ({ queries, currentIndex, onClose }) => {
  const [currentQueryIndex, setCurrentQueryIndex] =
    useState<number>(currentIndex);

  const handleNext = () => {
    setCurrentQueryIndex((prevIndex) =>
      prevIndex === queries.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handlePrev = () => {
    setCurrentQueryIndex((prevIndex) =>
      prevIndex === 0 ? queries.length - 1 : prevIndex - 1,
    );
  };

  const query = queries[currentQueryIndex];

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
                  <p className="">budget: </p>
                  <p className="">Contact way: </p>
                  <p className=" ">Company : </p>
                </div>
                {/* data extraction starts from here using map  */}
                <div className="text-slate-600 ">
                  <p className="">{query?.fullName}</p>
                  <p className="">{query?.email}</p>
                  <p className="">{query?.phone}</p>
                  <p className="">
                    {query?.budget} {query.currency}
                  </p>
                  <p className="">{query?.ContactMethod} </p>
                  <p className="">{query?.companyName}</p>
                </div>

                {/* budget er sathe currency add korte hobe  */}
              </div>
            </div>

            <div className="md:justify-self-end">
              <div className="flex justify-between gap-4">
                <div className="">
                  <p>website: </p>
                  <p className="">Client sell: </p>
                  <p className="">Location: </p>
                  <p className="">Language: </p>
                  <p className=""> facebookPage:</p>
                  <p className="mb-4">Inspiration:</p>
                </div>
                <div className="mr-4 text-slate-600 ">
                  <p className="">{query?.website}</p>
                  <p className="">{query?.serviceOrProduct}</p>
                  <p className="">{query?.location}</p>
                  <p className="">{query?.language}</p>
                  <p className="">{query?.facebookPage}</p>
                  <p className="mb-4 ">{query?.inspirationWebsite}</p>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <p className="px-1 my-3 text-md opacity-80 border border-indigo-600">
            Subject: {query?.subject}
          </p>
          <p className="px-1 my-3 text-md opacity-80 border h-screen border-indigo-600">
            {query?.clientMessages}
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

export default QueryModal;
