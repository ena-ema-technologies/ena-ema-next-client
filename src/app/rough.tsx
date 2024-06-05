`
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
                {errors.applicantName && (
                  <p className="text-red-600 text-sm   absolute">
                    {String(errors.applicantName?.message)}
                  </p>
                )}
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
                {errors.applicantName && (
                  <p className="text-red-600 text-sm   absolute">
                    {String(errors.applicantEmail?.message)}
                  </p>
                )}
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
                {errors.applicantName && (
                  <p className="text-red-600 text-sm  absolute">
                    {String(errors.applicantPhone?.message)}
                  </p>
                )}
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
                {errors.applicantName && (
                  <p className="text-red-600 text-sm absolute">
                    {String(errors.resumeLink?.message)}
                  </p>
                )}
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
                {errors.applicantName && (
                  <p className="text-red-600 text-sm absolute">
                    {String(errors.linkedInProfile?.message)}
                  </p>
                )}
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
                {errors.applicantName && (
                  <p className="text-red-600 text-sm absolute">
                    {String(errors.facebookProfile?.message)}
                  </p>
                )}
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
                {errors.applicantName && (
                  <p className="text-red-600 text-sm absolute">
                    {String(errors.portfolioLink?.message)}
                  </p>
                )}
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
                {errors.applicantName && (
                  <p className="text-red-600 text-sm absolute">
                    {String(errors.githubProfile?.message)}
                  </p>
                )}
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
                {errors.applicantName && (
                  <p className="text-red-600 text-sm absolute">
                    {String(errors.expectedSalary?.message)}
                  </p>
                )}
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
              {errors.applicantName && (
                <p className="text-red-600 text-sm absolute">
                  {String(errors.currency?.message)}
                </p>
              )}
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
                {errors.applicantName && (
                  <p className="text-red-600 text-sm absolute">
                    {String(errors.currentCompany?.message)}
                  </p>
                )}
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
                {errors.applicantName && (
                  <p className="text-red-600 text-sm absolute">
                    {String(errors.availableByDate?.message)}
                  </p>
                )}

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
                {errors.applicantName && (
                  <p className="text-red-600 text-sm absolute">
                    {String(errors.education?.message)}
                  </p>
                )}
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
                {errors.applicantName && (
                  <p className="text-red-600 text-sm absolute">
                    {String(errors.skills?.message)}
                  </p>
                )}
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
                {errors.applicantName && (
                  <p className="text-red-600 text-sm absolute">
                    {String(errors.workExperience?.message)}
                  </p>
                )}
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
                {errors.applicantName && (
                  <p className="text-red-600 text-sm absolute">
                    {String(errors.preferredWorkingHours?.message)}
                  </p>
                )}
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
                {errors.applicantName && (
                  <p className="text-red-600 text-sm absolute">
                    {String(errors.applicationSource?.message)}
                  </p>
                )}
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
              {errors.applicantName && (
                <p className="text-red-600 text-sm absolute">
                  {String(errors.reasonWeHireYou?.message)}
                </p>
              )}
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
;




`;
