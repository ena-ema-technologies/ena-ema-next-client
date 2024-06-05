'use client';
import { useGetServiceQuery } from '@/redux/features/serviceApi/serviceApi';
import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

const ServiceDetailsPage = ({ params }: any) => {
  const { data: service } = useGetServiceQuery(params.id);
  console.log(service);

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <p className="text-center text-4xl font-bold my-8 text-slate-500">
        {service?.data?.title}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
        <div className="flex flex-col justify-between">
          <Image
            src={service?.data?.photo}
            height={1000}
            width={640}
            alt="Cash Flow Management"
            className="w-full h-auto mb-3 my-auto"
          />
          <p className="text-slate-500 font-bold">
            {' '}
            <span className="font-bold">Price:</span> start from BDT{' '}
            {service?.data?.price}
          </p>
          <p className="text-slate-500 font-bold">
            {' '}
            <span className="font-bold">Turn around:</span>{' '}
            {service?.data?.turnAroundTime} Days
          </p>
          <p className="text-slate-500 font-bold">
            {' '}
            <span className="font-bold">{service?.data?.availability}</span>:
            YES
          </p>

          {/* description goes here  */}
        </div>

        <div className="flex flex-col ">
          <div>
            <p className="  text-slate-500 ">{service?.data?.description}</p>
          </div>

          <div>
            <p className="underline text-slate-500 font-semibold mt-4">
              Feature:
            </p>
            <p className="  text-slate-500 ">- {service?.data?.feature3}</p>
            <p className="  text-slate-500 ">- {service?.data?.feature4}</p>
            <p className="  text-slate-500 ">- {service?.data?.feature1}</p>
            <p className="  text-slate-500 ">- {service?.data?.feature2}</p>
            <p className="  text-slate-500 ">- {service?.data?.feature5}</p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <p className=" mt-2 font-bold text-slate-500">FrontEnd: </p>

            <Marquee speed={10}>
              <div className="flex  justify-center items-center gap-2 mt-4 ">
                <button className="btn btn-outline btn-sm ">
                  {service?.data?.frontendTech1}
                </button>
                <button className="btn btn-outline btn-sm">
                  {service?.data?.frontendTech2}
                </button>
                <button className="btn btn-outline btn-sm">
                  {service?.data?.frontendTech3}
                </button>
                <button className="btn btn-outline btn-sm">
                  {service?.data?.frontendTech4}
                </button>
                <button className="btn btn-outline btn-sm">
                  {service?.data?.frontendTech5}
                </button>
                <button className="btn btn-outline btn-sm">
                  {service?.data?.frontendTech6}
                </button>
              </div>
            </Marquee>
          </div>

          <div className="flex items-center justify-center gap-4">
            <p className=" mt-2 font-bold text-slate-500">BackEnd: </p>

            <Marquee direction="right" speed={10}>
              <div className="flex  justify-center items-center gap-2 mt-4">
                <button className="btn btn-outline btn-sm">
                  {service?.data?.backEndTech1}
                </button>
                <button className="btn btn-outline btn-sm">
                  {service?.data?.backEndTech2}
                </button>
                <button className="btn btn-outline btn-sm">
                  {service?.data?.backEndTech3}
                </button>
                <button className="btn btn-outline btn-sm">
                  {service?.data?.backEndTech4}
                </button>
                <button className="btn btn-outline btn-sm">
                  {service?.data?.backEndTech5}
                </button>
                <button className="btn btn-outline btn-sm">
                  {service?.data?.backEndTech6}
                </button>
              </div>
            </Marquee>
          </div>

          <div className="flex items-center justify-center gap-4">
            <p className=" mt-2 font-bold text-slate-500">Database: </p>
            <Marquee speed={10}>
              <div className="flex  justify-center items-center gap-2 mt-4">
                <button className="btn btn-outline btn-sm">
                  {service?.data?.database1}
                </button>
                <button className="btn btn-outline btn-sm">
                  {service?.data?.database2}
                </button>
                <button className="btn btn-outline btn-sm">
                  {service?.data?.database3}
                </button>
                <button className="btn btn-outline btn-sm">
                  {service?.data?.database4}
                </button>
                <button className="btn btn-outline btn-sm">
                  {service?.data?.database5}
                </button>
                <button className="btn btn-outline btn-sm">
                  {service?.data?.database6}
                </button>
              </div>
            </Marquee>
          </div>

          <button
            type="submit"
            className="mt-8 btn btn-block mb-6 px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-gray-600 text-white inline-block"
          >
            <span className="absolute bottom-0 left-0 flex w-full h-0 mt-0 transition-all duration-500 ease-out transform translate-y-0 bg-gray-200 group-hover:h-full "></span>
            <span className="relative group-hover:text-black font-bold flex items-center gap-4 justify-center">
              Request a consultation
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
