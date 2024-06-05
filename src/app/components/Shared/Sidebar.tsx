'use client';
import { logout, selectCurrentUser } from '@/redux/features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import Image from 'next/image';
import React, { useState } from 'react';
import {
  FaArchive,
  FaArrowRight,
  FaBars,
  FaEnvelopeOpen,
  FaHome,
  FaUserPlus,
  FaUsers,
} from 'react-icons/fa';
import { FaMessage, FaPeopleRoof, FaUsersGear, FaX } from 'react-icons/fa6';
import profilePhoto from '../../../../public/images/team-img04.jpg';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { GrBusinessService, GrServices, GrTasks } from 'react-icons/gr';
import { TfiWrite } from 'react-icons/tfi';
import { PiHandshakeFill } from 'react-icons/pi';
import { BiRepost } from 'react-icons/bi';
import { TbDeviceIpadMinus, TbFiles } from 'react-icons/tb';
import { MdDesignServices } from 'react-icons/md';
import { PiMicrosoftTeamsLogoBold } from 'react-icons/pi';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenDrop, setIsOpenDrop] = useState(Array(4).fill(false));
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();
  const router = useRouter();

  // logout user
  const handleLogout = () => {
    const toastId = toast.loading('loading...');
    dispatch(logout());
    router.push('/login');
    toast.success('Logged out', { id: toastId, duration: 2000 });
  };

  // toggle sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpenDrop);
  };

  // toggle dropdown
  const toggleDropdown = (index: number) => {
    setIsOpenDrop((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="col-span-1">
      {isOpen ? (
        <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-slate-700">
          <div className="text-gray-100 text-xl">
            <div className="p-2.5 lg:p-0 mt-1 flex items-center justify-between lg:flex-col">
              <div className="my-8 text-center">
                <Image
                  src={(user && user?.profilePhoto) || profilePhoto}
                  height={400}
                  width={400}
                  alt=""
                  className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
                />
                <h5 className="hidden mt-4 text-xl font-semibold  lg:block">
                  {user && user?.name}
                </h5>
                <p className="text-lg text-green-500">{user && user.role}</p>
              </div>
              <FaX
                onClick={toggleSidebar}
                className=" cursor-pointer ml-28 lg:hidden"
              />
            </div>
            <div className="my-2 bg-gray-600 h-[1px]" />
          </div>

          <div>
            <div
              className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
              onClick={() => toggleDropdown(0)}
            >
              <FaEnvelopeOpen className="text-xl" />
              <div className="flex justify-between w-full items-center">
                <span className="text-[15px] ml-4 text-gray-200 font-bold">
                  Query Management
                </span>
                <span className="text-lg rotate-180" id="arrow">
                  {isOpenDrop ? <BiChevronUp /> : <BiChevronDown />}
                </span>
              </div>
            </div>
            {isOpenDrop[0] && (
              <div className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold">
                <Link href="/dashboard/query-management/message">
                  <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                    <FaMessage />
                    <span className="text-[15px] ml-4 text-gray-200 font-bold">
                      Client Messages
                    </span>
                  </div>
                </Link>
                <Link href="/dashboard/query-management/archive">
                  <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                    <FaArchive />
                    <span className="text-[15px] ml-4 text-gray-200 font-bold">
                      Archived msg
                    </span>
                  </div>
                </Link>
              </div>
            )}
          </div>
          {user && user.role === 'superAdmin' && (
            <>
              <div>
                <div
                  className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
                  onClick={() => toggleDropdown(1)}
                >
                  <FaUsersGear className="text-2xl" />
                  <div className="flex justify-between w-full items-center">
                    <span className="text-[15px] ml-4 text-gray-200 font-bold">
                      Admin Management
                    </span>
                    <span className="text-lg rotate-180" id="arrow">
                      {isOpenDrop ? <BiChevronUp /> : <BiChevronDown />}
                    </span>
                  </div>
                </div>
                {isOpenDrop[1] && (
                  <div className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold">
                    <Link href="/dashboard/admin-management/create-account">
                      <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                        <TbDeviceIpadMinus className="text-xl" />
                        <span className="text-[15px] ml-4 text-gray-200 font-bold">
                          Create Admin
                        </span>
                      </div>
                    </Link>

                    <Link href="/dashboard/admin-management/all-admins">
                      <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                        <FaUsers className="text-2xl" />
                        <span className="text-[15px] ml-4 text-gray-200 font-bold">
                          All Admins List
                        </span>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
              {/* team management starts from here */}
              <div>
                <div
                  className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
                  onClick={() => toggleDropdown(2)}
                >
                  <PiMicrosoftTeamsLogoBold className="text-2xl" />
                  <div className="flex justify-between w-full items-center">
                    <span className="text-[15px] ml-4 text-gray-200 font-bold">
                      Team Management
                    </span>
                    <span className="text-lg rotate-180" id="arrow">
                      {isOpenDrop ? <BiChevronUp /> : <BiChevronDown />}
                    </span>
                  </div>
                </div>
                {isOpenDrop[2] && (
                  <div className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold">
                    <Link href="/dashboard/team-management/add-member">
                      <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                        <FaUserPlus className="text-xl" />
                        <span className="text-[15px] ml-4 text-gray-200 font-bold">
                          Add Team Member
                        </span>
                      </div>
                    </Link>

                    <Link href="/dashboard/team-management/all-member">
                      <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                        <FaUsers className="text-xl" />
                        <span className="text-[15px] ml-4 text-gray-200 font-bold">
                          All Team Member
                        </span>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
              {/* service management starts from here  */}

              <div>
                <div
                  className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
                  onClick={() => toggleDropdown(3)}
                >
                  <GrServices className="text-2xl" />
                  <div className="flex justify-between w-full items-center">
                    <span className="text-[15px] ml-4 text-gray-200 font-bold">
                      Service Management
                    </span>
                    <span className="text-lg rotate-180" id="arrow">
                      {isOpenDrop ? <BiChevronUp /> : <BiChevronDown />}
                    </span>
                  </div>
                </div>
                {isOpenDrop[3] && (
                  <div className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold">
                    <Link href="/dashboard/service-management/create-service">
                      <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                        <MdDesignServices className="text-2xl" />
                        <span className="text-[15px] ml-4 text-gray-200 font-bold">
                          Add New Service
                        </span>
                      </div>
                    </Link>

                    <Link href="/dashboard/service-management/all-service">
                      <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                        <GrBusinessService className="text-xl" />
                        <span className="text-[15px] ml-4 text-gray-200 font-bold">
                          All Services list
                        </span>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Hiring management starts from here  */}

              <div>
                <div
                  className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
                  onClick={() => toggleDropdown(4)}
                >
                  <PiHandshakeFill className="text-2xl" />
                  <div className="flex justify-between w-full items-center">
                    <span className="text-[15px] ml-4 text-gray-200 font-bold">
                      Start Hiring Now
                    </span>
                    <span className="text-lg rotate-180" id="arrow">
                      {isOpenDrop ? <BiChevronUp /> : <BiChevronDown />}
                    </span>
                  </div>
                </div>
                {isOpenDrop[4] && (
                  <div className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold">
                    <Link href="/dashboard/hiring-management/create-hiring-post">
                      <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                        <TfiWrite className="text-2xl" />
                        <span className="text-[15px] ml-4 text-gray-200 font-bold">
                          Create Hiring Post
                        </span>
                      </div>
                    </Link>

                    <Link href="/dashboard/hiring-management/all-hiring-post">
                      <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                        <BiRepost className="text-3xl" />
                        <span className="text-[15px] ml-4 text-gray-200 font-bold">
                          All Hiring Post
                        </span>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Job Application starts from here  */}

              <div>
                <div
                  className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
                  onClick={() => toggleDropdown(5)}
                >
                  <GrTasks className="text-2xl" />
                  <div className="flex justify-between w-full items-center">
                    <span className="text-[15px] ml-4 text-gray-200 font-bold">
                      Job Applications
                    </span>
                    <span className="text-lg rotate-180" id="arrow">
                      {isOpenDrop ? <BiChevronUp /> : <BiChevronDown />}
                    </span>
                  </div>
                </div>
                {isOpenDrop[5] && (
                  <div className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold">
                    <Link href="/dashboard/job-applications/received-applications">
                      <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                        <TbFiles className="text-3xl" />
                        <span className="text-[12px] ml-4 text-gray-200 font-bold">
                          Received Applications
                        </span>
                      </div>
                    </Link>

                    <Link href="/dashboard/job-applications/archived-applications">
                      <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                        <FaArchive className="text-xl" />
                        <span className="text-[13px] ml-4 text-gray-200 font-bold">
                          Archived Applications
                        </span>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </>
          )}

          <div className="my-4 bg-gray-600 h-[1px]" />
          <Link href="/">
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
              <FaHome />
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                Back to Home
              </span>
            </div>
          </Link>

          <div
            onClick={handleLogout}
            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
          >
            <FaArrowRight />
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Logout
            </span>
          </div>
        </div>
      ) : (
        <div className="sidebar-bar lg:hidden">
          <FaBars className="cursor-pointer mt-1" onClick={toggleSidebar} />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
