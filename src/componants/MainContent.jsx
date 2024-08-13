import React from 'react';
import rightslogo from '../images/leftarrow.svg';
import leftslogo from '../images/r-side.svg';
import search from '../images/search.svg'
import alignment from '../images/alignment.svg'
import greendot from '../images/greendot.svg'
import wdaot from '../images/wdot.svg'
import url from '../images/chain.svg'
import clients from '../images/client.svg'
import updtes from '../images/updates.svg'
import wordpress from '../images/wordpress.svg'
import whitedot from '../images/whitedoat.svg'
import client2 from '../images/client2.svg'
import client3 from '../images/client3.svg'
import client4 from '../images/client4.svg'
import client5 from '../images/client5.svg'
import client6 from '../images/client6.svg'




const MainContent = () => {

    return (
        <div className="flex-1 p-4 bg-white ">
            <div className="flex flex-wrap max-w-full items-center mb-4 gap-2 sm:justify-center m-2 lg:justify-start ">
                <h2 className="text-lg sm:text-lg font-medium mr-2">Sites</h2>
                <div className="flex items-center gap-2">
                    <label className='pl-5'>Show</label>
                    <select className="border rounded-md py-1.5 px-3 py-1.5.5 mx-1  shadow-md ">
                        <option>10</option>
                        <option>20</option>
                        <option>25</option>
                        <option>30</option>
                    </select>
                    <span className='p-2'>entries</span>
                </div>
                <div className='hidden md:block  lg:w-max lg:absolute lg:right-1 '>
                <div className="flex  items-center  ">
                    <div className="flex border-[#eaeaeaf5] rounded shadow-md ml-4 mr-2 ">
                        <input placeholder="Search" className="w-[150px] h-[35px] px-3 py-1.5 " />
                        <img src={search} alt="search logo" className="pr-8" />
                    </div>
                    <div className="flex gap-2 items-center">
                        <select className="p-2 border-[#EAEAEA] rounded pr-20 shadow-md">
                            <option>Filter By: Tags</option>
                        </select>
                        <select className="p-2 border-[#EAEAEA] rounded pr-4 shadow-md">
                            <option>Bulk Actions</option>
                        </select>
                        <img src={alignment} alt="alignment" className="border-[#EAEAEA] rounded mr-2 " />
                        </div>
                    </div>
                </div>
            </div>
            <div className='rounded shadow-lg'>
            <div className=" overflow-x-auto ">
                <table className=" min-w-[1000px] w-full bg-white border  ">
                    <thead className='justify-between'>
                        <tr className="bg-gray-100 ">
                            <th className="py-2 pl-4  flex  gap-2">
                                <input type="checkbox" className='mr-3' />
                                Status</th>
                            <th className=" py-2  ">Site</th>
                            <th className="py-2 pl-4  flex  gap-2">
                            <img src={url} alt="greendot"/>
                            Site URL</th>
                            <th className=" py-2 pr-4 ">Client</th>
                            <th className=" py-2 px-4 ">Tags</th>
                            <th className=" py-2 px-4 ">Updates</th>
                            <th className=" py-2 px-4 ">WordPress</th>
                        </tr>
                    </thead> 
                    <tbody>
                    <tr className="border-b  ">
                            <td className="pt-2 pl-4 my-3  flex  gap-2">
                                <input type="checkbox" className='mr-3 ' />
                                <img src={greendot} alt="greendot" className='pl-3' />
                            </td>
                            <td className="  px-4 pl-5">
                                <div className='flex gap-2 '>
                                    <img src={wdaot} alt="greendot" />
                                    Twist Expansion
                            </div>
                            </td>
                            <td className=" py-2 px-4 ">
                                <div className='flex gap-2 '>
                                    <img src={url} alt="greendot"/>
                                    https://twistexpansion.s3...
                                </div>
                            </td>                            
                            <td className="4 py-1">                             
                                <img src={clients} alt="greendot" />
                            </td>
                            <td>Tags, Stag.., Prod..., Dev...</td>
                            <td className="py-2  pl-9 ">
                                <img src={updtes} alt='restart' />
                            </td>
                            <td className="py-2 pl-10 ">
                                <img src={wordpress} alt='delete' />

                            </td>
                        </tr>
                        <tr className="border-b  ">
                        <td className="pt-2 pl-4 my-3  flex  gap-2">
                        <input type="checkbox" className='mr-3 ' />
                                <img src={greendot} alt="greendot" className='pl-3' />
                            </td>
                            <td className=" py-2 px-4 pl-5">
                                <div className='flex gap-2 '>
                                    <img src={wdaot} alt="greendot" />
                                    Twist Expansion
                            </div>
                            </td>
                            <td className=" py-2 px-4 ">
                                <div className='flex gap-2 '>
                                    <img src={url} alt="greendot"/>
                                    https://twistexpansion.s3...
                                </div>
                            </td>                            
                            <td className="4">                             
                                <img src={clients} alt="greendot" />
                            </td>
                            <td>Tags, Stag.., Prod..., Dev...</td>
                            <td className="py-2  pl-9 ">
                                <img src={updtes} alt='restart' />
                            </td>
                            <td className="py-2 pl-10 ">
                                <img src={wordpress} alt='delete' />

                            </td>
                        </tr>
                        <tr className="border-b  ">
                        <td className="pt-2 pl-4 my-3  flex  gap-2">
                        <input type="checkbox" className='mr-3 ' />
                                <img src={greendot} alt="greendot" className='pl-3' />
                            </td>
                            <td className=" py-2 px-4 pl-5">
                                <div className='flex gap-2 '>
                                    <img src={wdaot} alt="greendot" />
                                    Twist Expansion
                            </div>
                            </td>
                            <td className=" py-2 px-4 ">
                                <div className='flex gap-2 '>
                                    <img src={url} alt="greendot"/>
                                    https://twistexpansion.s3...
                                </div>
                            </td>                           
                            <td className="py-2 pr-4">                             
                                <img src={client2} alt="greendot" />
                            </td>
                            <td>Tags, Stag.., Prod..., Dev...</td>
                            <td className="py-2  pl-9 ">
                                <img src={updtes} alt='restart' />
                            </td>
                            <td className="py-2 pl-10 ">
                                <img src={wordpress} alt='delete' />

                            </td>
                        </tr><tr className="border-b  ">
                            <td className="py-2 pl-4  flex  gap-2">
                                <input type="checkbox" className='mr-3 ' />
                                <img src={greendot} alt="greendot" className='pl-3' />
                            </td>
                            <td className=" py-2 px-4 pl-5">
                                <div className='flex gap-2 '>
                                    <img src={wdaot} alt="greendot" />
                                    Twist Expansion
                            </div>
                            </td>
                            <td className=" py-2 px-4 ">
                                <div className='flex gap-2 '>
                                    <img src={url} alt="greendot"/>
                                    https://twistexpansion.s3...
                                </div>
                            </td>                           
                            <td className="4">                             
                                <img src={client3} alt="greendot" />
                            </td>
                            <td>Tags, Stag.., Prod..., Dev...</td>
                            <td className="py-2  pl-9 ">
                                <img src={updtes} alt='restart' />
                            </td>
                            <td className="py-2 pl-10 ">
                                <img src={wordpress} alt='delete' />

                            </td>
                        </tr><tr className="border-b  ">
                        <td className="pt-2 pl-4 my-3  flex  gap-2">
                        <input type="checkbox" className='mr-3 ' />
                                <img src={whitedot} alt="whitedot" className='pl-3' />
                            </td>
                            <td className=" py-2 px-4 pl-5">
                                <div className='flex gap-2 '>
                                    <img src={wdaot} alt="greendot" />
                                    Twist Expansion
                            </div>
                            </td>
                            <td className=" py-2 px-4 ">
                                <div className='flex gap-2 '>
                                    <img src={url} alt="greendot"/>
                                    https://twistexpansion.s3...
                                </div>
                            </td>                           
                            <td className="4">                             
                                <img src={client4} alt="greendot" />
                            </td>
                            <td>Tags, Stag.., Prod..., Dev...</td>
                            <td className="py-2  pl-9 ">
                                <img src={updtes} alt='restart' />
                            </td>
                            <td className="py-2 pl-10 ">
                                <img src={wordpress} alt='delete' />

                            </td>
                        </tr><tr className="border-b  ">
                        <td className="pt-2 pl-4 my-3  flex  gap-2">
                        <input type="checkbox" className='mr-3 ' />
                                <img src={greendot} alt="greendot" className='pl-3' />
                            </td>
                            <td className=" py-2 px-4 pl-5">
                                <div className='flex gap-2 '>
                                    <img src={wdaot} alt="greendot" />
                                    Twist Expansion
                            </div>
                            </td>
                            <td className=" py-2 px-4 ">
                                <div className='flex gap-2'>
                                    <img src={url} alt="greendot"/>
                                    https://twistexpansion.s3...
                                </div>
                            </td>                           
                            <td className="4">                             
                                <img src={clients} alt="greendot" />
                            </td>
                            <td>Tags, Stag.., Prod..., Dev...</td>
                            <td className="py-2  pl-9 ">
                                <img src={updtes} alt='restart' />
                            </td>
                            <td className="py-2 pl-10 ">
                                <img src={wordpress} alt='delete' />

                            </td>
                        </tr><tr className="border-b  ">
                        <td className="pt-2 pl-4 my-3  flex  gap-2">
                        <input type="checkbox" className='mr-3 ' />
                                <img src={whitedot} alt="whitedot" className='pl-3' />
                            </td>
                            <td className=" py-2 px-4 pl-5">
                                <div className='flex gap-2 '>
                                    <img src={wdaot} alt="greendot" />
                                    Twist Expansion
                            </div>
                            </td>
                            <td className=" py-2 px-4 ">
                                <div className='flex gap-2'>
                                    <img src={url} alt="greendot"/>
                                    https://twistexpansion.s3...
                                </div>
                            </td>                           
                            <td className="4">                             
                                <img src={client5} alt="greendot" />
                            </td>
                            <td>Tags, Stag.., Prod..., Dev...</td>
                            <td className="py-2  pl-9 ">
                                <img src={updtes} alt='restart' />
                            </td>
                            <td className="py-2 pl-10 ">
                                <img src={wordpress} alt='delete' />

                            </td>
                        </tr><tr className="border-b  ">
                        <td className="pt-2 pl-4 my-3  flex  gap-2">
                        <input type="checkbox" className='mr-3 ' />
                                <img src={whitedot} alt="whitedot" className='pl-3' />
                            </td>
                            <td className=" py-2 px-4 pl-5">
                                <div className='flex gap-2 '>
                                    <img src={wdaot} alt="greendot" />
                                    Twist Expansion
                            </div>
                            </td>
                            <td className=" py-2 px-4 ">
                                <div className='flex gap-2'>
                                    <img src={url} alt="greendot"/>
                                    https://twistexpansion.s3...
                                </div>
                            </td>                           
                            <td className="4">                             
                                <img src={clients} alt="greendot" />
                            </td>
                            <td>Tags, Stag.., Prod..., Dev...</td>
                            <td className="py-2  pl-9 ">
                                <img src={updtes} alt='restart' />
                            </td>
                            <td className="py-2 pl-10 ">
                                <img src={wordpress} alt='delete' />

                            </td>
                        </tr><tr className="border-b  ">
                        <td className="pt-2 pl-4 my-3  flex  gap-2">
                        <input type="checkbox" className='mr-3 ' />
                                <img src={greendot} alt="greendot" className='pl-3' />
                            </td>
                            <td className=" py-2 px-4 pl-5">
                                <div className='flex gap-2 '>
                                    <img src={wdaot} alt="greendot" />
                                    Twist Expansion
                            </div>
                            </td>
                            <td className=" py-2 px-4 ">
                                <div className='flex gap-2'>
                                    <img src={url} alt="greendot"/>
                                    https://twistexpansion.s3...
                                </div>
                            </td>                           
                            <td className="4">                             
                                <img src={client6} alt="greendot" />
                            </td>
                            <td>Tags, Stag.., Prod..., Dev...</td>
                            <td className="py-2  pl-9 ">
                                <img src={updtes} alt='restart' />
                            </td>
                            <td className="py-2 pl-10 ">
                                <img src={wordpress} alt='delete' />

                            </td>
                        </tr><tr className="border-b  ">
                        <td className="pt-2 pl-4 my-3  flex  gap-2">
                        <input type="checkbox" className='mr-3 ' />
                                <img src={greendot} alt="greendot" className='pl-3' />
                            </td>
                            <td className=" py-2 px-4 pl-5">
                                <div className='flex gap-2 '>
                                    <img src={wdaot} alt="greendot" />
                                    Twist Expansion
                            </div>
                            </td>
                            <td className=" py-2 px-4 ">
                                <div className='flex gap-2 '>
                                    <img src={url} alt="greendot"/>
                                    https://twistexpansion.s3...
                                </div>
                            </td>                           
                            <td className="4">                             
                                <img src={clients} alt="greendot" />
                            </td>
                            <td>Tags, Stag.., Prod..., Dev...</td>
                            <td className="py-2  pl-9 ">
                                <img src={updtes} alt='restart' />
                            </td>
                            <td className="py-2 pl-10 ">
                                <img src={wordpress} alt='delete' />

                            </td>
                        </tr>
                                              
                    </tbody>
                </table>
            </div>
            <div className="flex max-w-full items-center p-4 bg-white justify-between   ">
                    <span className="text-[#1C1C1C99]">Showing 1 to 10 of 18 entries</span>
                    <div className="flex space-x-2 pt-4  ">
                        <button><img src={rightslogo} alt="rightlogo" /></button>
                        <button className="w-7 h-7 border border-[#882EFD] rounded-full bg-[#882EFD] text-white">1</button>
                        <button className="w-7 h-7 border border-[#882EFD] rounded-full text-[#882EFD]">2</button>
                        <button className="w-7 h-7 border border-[#882EFD] rounded-full text-[#882EFD]">3</button>
                        <button><img src={leftslogo} alt="leftlogo" /></button>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center mt-4'>
                <p className='ml-5 text-sm'>Copyright ©2024 Diginnovators</p>
                <div className='flex gap-2 text-[#882EFD]'>
                    <p>Privacy Policy</p>
                    <p>Terms of Conditions</p>
                </div>
            </div>
        </div>
    );
};

export default MainContent;
