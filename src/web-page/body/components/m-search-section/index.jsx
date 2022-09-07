import React, { Fragment } from 'react';

const SearchSection = () => {
    return (
        <Fragment>
            <h1 className='mb-8 text-5xl text-red-800 font-extrabold opacity-100'>MARKETPLACE</h1>
            
            <div className='relative w-full h-[650px] bg-white rounded-2xl shadow-lg p-11'>


                <div className='h-full w-full bg-house-search-bg bg-cover p-in'>
                    <div className='w-full h-full bg-[#141414] opacity-25'>
                    </div>
                </div>

                <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start p-20'>
                    <div className='flex justify-center items-center w-full'>
                        <h1 className='text-white text-4xl w-full text-center font-bold'>Search Marketplace</h1>
                    </div>

                    <div className='grid grid-cols-4 gap-6 w-full mt-20'>
                        <div className='col-span-2' >
                            <label className='block'>
                                <span className='mb-[7px] text-[12px] text-white'>Location</span>
                                <input className='h-[48px] flex items-center w-full bg-white py-2 px-5 text-sm' placeholder='Filter by Location' />
                            </label>
                        </div>


                        <label className='block'>
                            <span className='mb-[7px] text-[12px] text-white'>Property Age</span>
                            <input className='h-[48px] flex items-center w-full bg-white py-2 px-5 text-sm' placeholder='Find by Property Age' />
                        </label>


                        <label className='block'>
                            <span className='mb-[7px] text-[12px] text-white'>Property Type</span>
                            <input className='h-[48px] flex items-center w-full bg-white py-2 px-5 text-sm' placeholder='Filter by Property Type' />
                        </label>

                        <div className='col-span-2 grid grid-cols-4 gap-6'>
                            <label className='block'>
                                <span className='mb-[7px] text-[12px] text-white'>Market Value</span>
                                <input className='h-[48px] flex items-center w-full bg-white py-2 px-5 text-sm' placeholder='Min Value' />
                            </label>

                            <label className='block'>
                                <span className='mb-[7px] text-[12px] text-transparent'>.</span>
                                <input className='h-[48px] flex items-center w-full bg-white py-2 px-5 text-sm' placeholder='Max Value' />
                            </label>

                            <label className='block'>
                                <span className='mb-[7px] text-[12px] text-white'>Min y Max $/sqrt</span>
                                <input className='h-[48px] flex items-center w-full bg-white py-2 px-5 text-sm' placeholder='Min $/sqrt' />
                            </label>

                            <label className='block'>
                                <span className='mb-[7px] text-[12px] text-transparent'>.</span>
                                <input className='h-[48px] flex items-center w-full bg-white py-2 px-5 text-sm' placeholder='Max $/sqrt' />
                            </label>
                        </div>
                    </div>

                    <button className='text-white px-5 py-2 mt-16 bg-orange-600'>Search</button>
                </div>
            </div>
        </Fragment>
    )
}

export default SearchSection;