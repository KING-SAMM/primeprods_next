import GuestNavigationDark from '@/components/Layouts/GuestNavigationDark'
import { useAuth } from '@/hooks/auth'
import React from 'react'

const create = () => {
    // Get the currently authenticated user if any
    const { user } = useAuth({ middleware: 'auth' })

  return (
    <div class="py-16 text-center text-gray-700 bg-gray-200 ">
        {/* Navigation  */}
        <GuestNavigationDark user={ user } className="bg-transparent backdrop-blur-md fixed top-0 z-10 w-full" />

        <div className="flex flex-col w-[96%] md:w-3/5 lg:w-2/5 mx-auto my-8 rounded-xl bg-white rounded-lg">
            <header className="my-4">
                <h2 className='px-2'>Add a product prototype</h2>
            </header>

            {/* Begin Form  */}
            <form method="POST" action="/prototypes" enctype="multipart/form-data" class="p-6 ">
                {/* @csrf */}

                <div class="mb-6">
                    <label class="inline-block text-lg mb-2" for="title">Prototype Title</label>
                    <input 
                        className="text-gray-600 border-2 border-indigo-300 rounded p-2 w-full" 
                        type="text" 
                        name="title" 
                        id="title" 
                        // value="{{ old('title') }}"
                        />
                    
                    {/* @error('title')
                        <p class="text-red-300 text-xs mt-1">{{ $message }}</p>
                    @enderror */}
                </div>

                <div class="mb-6">
                    <label class="inline-block text-lg mb-2" for="image">Prototype Image</label>
                    <input 
                        className="text-white border-2 border-indigo-300 rounded p-2 w-full" 
                        type="file" 
                        name="image" 
                        id="image" 
                        // value="{{ old('image') }}"
                        />
                    
                    {/* @error('image')
                        <p class="text-red-300 text-xs mt-1">{{ $message }}</p>
                    @enderror */}
                </div>

                <div class="mb-6">
                    <label class="inline-block text-lg mb-2" for="company">Company Name</label>
                    <input 
                        className="text-gray-600 border-2 border-indigo-300 rounded p-2 w-full" 
                        type="text" 
                        name="company" 
                        id="company" 
                        // value="{{ old('company') }}"
                    />
                    
                    {/* @error('company')
                        <p class="text-red-300 text-xs mt-1">{{ $message }}</p>
                    @enderror */}
                </div>

                <div class="mb-6">
                    <label class="inline-block text-lg mb-2" for="location">Company Location</label>
                    <input 
                        className="text-gray-600 border-2 border-indigo-300 rounded p-2 w-full" 
                        type="text" 
                        name="location" 
                        id="location" 
                        placeholder="E.g: Onitsha, Anambra, Nigeria"
                        // value="{{ old('location') }}"
                    />
                    
                    {/* @error('location')
                        <p class="text-red-300 text-xs mt-1">{{ $message }}</p>
                    @enderror */}
                </div>

                <div class="mb-6">
                    <label class="inline-block text-lg mb-2" for="email">Company Email</label>
                    <input 
                        className="text-gray-600 border-2 border-indigo-300 rounded p-2 w-full" 
                        type="text" 
                        name="email" 
                        id="email" 
                        // value="{{ old('email') }}"
                    />
                    
                    {/* @error('email')
                        <p class="text-red-300 text-xs mt-1">{{ $message }}</p>
                    @enderror */}
                </div>

                <div class="mb-6">
                    <label class="inline-block text-lg mb-2" for="logo">Company Logo</label>
                    <input 
                        className="text-white border-2 border-indigo-300 rounded p-2 w-full" 
                        type="file" 
                        name="logo" 
                        id="logo" 
                        // value="{{ old('logo') }}"
                        />
                    
                        {/* @error('logo')
                        <p class="text-red-300 text-xs mt-1">{{ $message }}</p>
                    @enderror */}
                </div>

                <div class="mb-6">
                    <label class="inline-block text-lg mb-2" for="website">Company/Prototype Website</label>
                    <input 
                        className="text-gray-600 border-2 border-indigo-300 rounded p-2 w-full" 
                        type="text" 
                        name="website" 
                        id="website" 
                        placeholder="E.g: https://awesomedomain.com"
                        // value="{{ old('website') }}"
                    />
                    
                    {/* @error('website')
                        <p class="text-red-300 text-xs mt-1">{{ $message }}</p>
                    @enderror */}
                </div>
                
                <div class="mb-6">
                    <label class="inline-block text-lg mb-2" for="tags">Tags (comma separated)</label>
                    <input 
                        className="text-gray-600 border-2 border-indigo-300 rounded p-2 w-full" 
                        type="text" 
                        name="tags" 
                        id="tags" 
                        placeholder="E.g: AI, anti-gravity"
                        // value="{{ old('tags') }}"
                    />
                    
                    {/* @error('tags')
                        <p class="text-red-300 text-xs mt-1">{{ $message }}</p>
                    @enderror */}
                </div>
                
                <div class="mb-6">
                    <label class="inline-block text-lg mb-2" for="description">Prototype Description</label>
                    <textarea 
                        name="description" 
                        id="description" 
                        rows="10" 
                        className="text-gray-600 border-2 border-indigo-300 rounded p-2 w-full"
                        placeholder="Write a detailed description of the product"
                    >
                        {/* {{ old('description') }} */}
                    </textarea>
                    
                    {/* @error('description')
                        <p class="text-red-300 text-xs mt-1">{{ $message }}</p>
                    @enderror */}
                </div>

                <div class="mb-6">
                    <button className="bg-[#3E4E8D] rounded py-2 px-4 text-white hover:bg-[#1A2A39]">Create Prototype</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default create