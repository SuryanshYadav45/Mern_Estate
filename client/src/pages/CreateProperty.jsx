import React from 'react'

const CreateProperty = () => {
    return (
        <div className='w-full h-[calc(100vh-72px)] bg-gray-200 p-2'>
            <h1 className='text-center'>Create Your Property</h1>
            <div className='max-w-[1150px] m-auto flex flex-col tabl:flex-row'>

                <div className='w-[100%] tabl:w-[50%] p-4 flex flex-col'>
                    <input type="text" placeholder='Name of the Porperty' />
                    <textarea name="description" id="desc" cols="30" rows="10" placeholder='Description'></textarea>
                    <input type="text" name="address" placeholder='Address' />
                    <div className='flex items-center justify-between'>
                        <label>
                            <input
                                type="checkbox"
                            />
                            Sell
                        </label>
                        <label>
                            <input
                                type="checkbox"
                            />
                            Rent
                        </label>
                        <label>
                            <input
                                type="checkbox"
                            />
                            Parking Spot
                        </label>
                        <label>
                            <input
                                type="checkbox"
                            />
                            Furnished
                        </label>
                    </div>
                    <div>
                        <input type="text" />Beds
                        <input type="text" />Baths
                    </div>
                    <div>
                        <input type="text" name="" /> Regular Price ($/Month)
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