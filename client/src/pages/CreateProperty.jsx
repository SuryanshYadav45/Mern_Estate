import React from 'react'

const CreateProperty = () => {
    return (
        <div className='w-full h-[calc(100vh-72px)] bg-gray-200 p-2'>
            <h1 className='text-center'>Create Your Property</h1>
            <div className='max-w-[1150px] m-auto flex flex-col tabl:flex-row'>

                <div className='w-[100%] tabl:w-[50%] p-4 flex flex-col'>
                    <input type="text" className='shadow-lg my-2 rounded-md  h-[40px]  border focus:outline-none focus:ring-[#6EB5AA] focus:border-[#6EB5AA] p-2 w-full' placeholder='Name of the Property' />
                    <textarea name="description" className='shadow-lg w-full   my-2 rounded-md p-2 border focus:outline-none focus:ring-[#6EB5AA] focus:border-[#6EB5AA] ' id="desc" rows="10" placeholder='Description'></textarea>
                    <input type="text" className='shadow-lg my-2 rounded-md  h-[40px]  border focus:outline-none focus:ring-[#6EB5AA] focus:border-[#6EB5AA] p-2 w-full' name="address" placeholder='Address' />
                    <div className='flex items-center justify-between'>
                        {/* <label><input type="checkbox" />Sell</label>
                        <label><input type="checkbox" />Rent</label>
                        <label><input type="checkbox" />Parking Spot</label>
                        <label><input type="checkbox" />Furnished</label> */}
                        <ul class="items-center w-full text-sm font-medium text-black rounded-lg sm:flex ">
                            <li class="w-full rounded-sm m-2 ">
                                <div class="flex items-center ps-3">
                                    <input id="list1" type="checkbox" value="" class="w-7 h-7 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " />
                                    <label for="list1" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">Sell</label>
                                </div>
                            </li>
                            <li class="w-full rounded-sm m-2 ">
                                <div class="flex items-center ps-3">
                                    <input id="list2" type="checkbox" value="" class="w-7 h-7 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " />
                                    <label for="list2" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">Rent</label>
                                </div>
                            </li>
                            <li class="w-full rounded-sm m-2 ">
                                <div class="flex items-center ps-3">
                                    <input id="list3" type="checkbox" value="" class="w-7 h-7 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " />
                                    <label for="list3" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">Parking Spot</label>
                                </div>
                            </li>
                            <li class="w-full rounded-sm m-2 ">
                                <div class="flex items-center ps-3">
                                    <input id="list4" type="checkbox" value="" class="w-7 h-7 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " />
                                    <label for="list4" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">Furnished</label>
                                </div>
                            </li>

                        </ul>
                    </div>
                    <div>
                        <input type="text" /><span>Beds</span>
                        <input type="text" /><span>Baths</span>
                    </div>
                    <div>
                        <input type="text" name="" /> <span>Regular Price ($/Month)</span>
                    </div>

                </div>
                <div className='w-[100%] tabl:w-[50%] p-4'>
                    <p><b>Images:</b>The first image will be cover(max-6) </p>
                    <input className='p-2 border border-gray-400' type="file" />
                </div>
            </div>
        </div>
    )
}

export default CreateProperty