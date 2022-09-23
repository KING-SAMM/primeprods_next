import GuestNavigationDark from '@/components/Layouts/GuestNavigationDark'
import { useAuth } from '@/hooks/auth'
import Input from '@/components/Input'
import Label from '@/components/Label'
import AuthValidationErrors from '@/components/AuthValidationErrors'
import React, { useState } from 'react'
import AuthCard from '@/components/AuthCard'

const Create = () => {
    // Get the currently authenticated user if any
    const { user, createPrototype } = useAuth({ middleware: 'auth' })

    // Initial input state 
    const [title, setTitle] = useState('');
    const [company, setCompany] = useState('');
    const [location, setLocation] = useState('');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');
    const [tags, setTags] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState([]);

    // State variables for files to be sent to api (backend) server 
    const [image, setImage] = useState(null);
    const [imageInput, setImageInput] = useState(null);
    const [logo, setLogo] = useState(null);
    const [logoInput, setLogoInput] = useState(null);

    const handleImage = (e) => {
        // Get the image file 
        const imageFile = e.target.files[0];
        console.log("Image file is: ", imageFile);

        // Set image file to be sent with form 
        setImageInput(imageFile);
        console.log("Image input is: ", imageInput)

        const fileReader = new FileReader();
        fileReader.onload = function(e) {
            // Display uploaded file on the page 
            console.log("e.target.result is: ", e.target.result);
            setImage(e.target.result);
        }
        // convert file to binary 
        fileReader.readAsDataURL(imageFile);
    }

    const handleLogo = (e) => {
        // Get the image file 
        const logoFile = e.target.files[0];
        console.log("Logo file is: ", logoFile);

        // Set logo file to be sent with form 
        setLogoInput(logoFile);

        const fileReader = new FileReader();
        fileReader.onload = function(e) {
            // Display uploaded file on the page 
            console.log("e.target.result is: ", e.target.result);
            setLogo(e.target.result);
        }
        // convert file to binary 
        fileReader.readAsDataURL(logoFile);
    }

    const submitForm = async (event) => {
        event.preventDefault()

        // Prepare form fields and files to send to api
        const form = new FormData();
        form.append('title', title)
        form.append('image', imageInput)
        form.append('company', company)
        form.append('location', location)
        form.append('email', email)
        form.append('logo', logoInput)
        form.append('website', website)
        form.append('tags', tags)
        form.append('description', description)

        // Send form data to api 
        const result = await createPrototype({ setErrors , form })

        console.log("result is: ", result)
        console.log("form data is: ", form)
        console.log("form individual data is: ", ...form)
    }

  return (
    <div className="py-16 text-center text-gray-700 bg-gray-200 ">
        {/* Navigation  */}
        <GuestNavigationDark user={ user } className="bg-transparent backdrop-blur-md fixed top-0 z-10 w-full" />

        <div className="flex flex-col w-[96%] md:w-3/5 lg:w-2/5 mx-auto my-8 rounded-xl bg-white">
            <header className="my-4">
                <h2 className='px-2'>Add a product prototype</h2>
            </header>
            
            {/* Validation Errors */}
            <AuthValidationErrors className="mb-4" errors={errors} />
        
            {/* Begin Form  */}
            <form onSubmit={submitForm} className="p-6 shadow-md">
                {/* @csrf */}

                {/* Title  */}
                <div className="mb-6">
                    <Label className="inline-block text-lg mb-2" htmlFor="title">Prototype Title</Label>
                    <Input 
                        className="p-2 w-full" 
                        type="text" 
                        value={ title } 
                        id="title" 
                        onChange={event => setTitle(event.target.value)}
                        required
                        autoFocus
                    />
                </div>

                {/* Prototype Image  */}
                <div className="mb-6">
                    <Label className="inline-block text-lg mb-2" htmlFor="image">Prototype Image</Label>
                    {/* Display image on page  */}
                    {image && <img src={ image } className="w-full md:w-1/2 lg:w-[200px] block mx-auto" alt="" />}
                    <Input 
                        className="p-2 w-full" 
                        type="file" 
                        // value={ image } 
                        id="image" 
                        onChange={ handleImage }
                        // onChange={event => setImage(event.target.value)}
                        // required
                    />
                </div>

                {/* Company Name  */}
                <div className="mb-6">
                    <label className="inline-block text-lg mb-2" htmlFor="company">Company Name</label>
                    <Input 
                        className="p-2 w-full" 
                        type="text" 
                        value={ company } 
                        id="company" 
                        onChange={event => setCompany(event.target.value)}
                        required
                    />
                </div>

                {/* Company Location  */}
                <div className="mb-6">
                    <label className="inline-block text-lg mb-2" htmlFor="location">Company Location</label>
                    <Input 
                        className="p-2 w-full" 
                        type="text" 
                        value={ location } 
                        id="location" 
                        placeholder="E.g: Onitsha, Anambra, Nigeria"
                        onChange={event => setLocation(event.target.value)}
                        required
                    />
                </div>

                {/* Company Email  */}
                <div className="mb-6">
                    <label className="inline-block text-lg mb-2" htmlFor="email">Company Email</label>
                    <Input 
                        className="p-2 w-full" 
                        type="text" 
                        value={ email } 
                        id="email" 
                        onChange={event => setEmail(event.target.value)}
                        required
                    />
                </div>

                {/* Company Logo  */}
                <div className="mb-6">
                    <label className="inline-block text-lg mb-2" htmlFor="logo">Company Logo</label>

                    {/* Display logo on page  */}
                    {logo && <img src={ logo } className="w-full md:w-1/2 lg:w-[200px] block mx-auto" alt="" />}

                    <Input 
                        className="p-2 w-full" 
                        type="file" 
                        // value={ logo } 
                        id="logo" 
                        onChange={ handleLogo }
                        // onChange={event => setLogo(event.target.value)}
                    />
                </div>

                {/* Company/Prototype Website */}
                <div className="mb-6">
                    <label className="inline-block text-lg mb-2" htmlFor="website">Company/Prototype Website</label>
                    <Input 
                        className="p-2 w-full" 
                        type="text" 
                        value={ website } 
                        id="website" 
                        placeholder="E.g: https://awesomedomain.com"
                        onChange={event => setWebsite(event.target.value)}
                        required
                    />
                </div>
                
                {/* Tags  */}
                <div className="mb-6">
                    <label className="inline-block text-lg mb-2" htmlFor="tags">Tags (comma separated)</label>
                    <Input 
                        className="p-2 w-full" 
                        type="text" 
                        value={ tags } 
                        id="tags" 
                        placeholder="E.g: AI, anti-gravity"
                        onChange={event => setTags(event.target.value)}
                        required
                    />
                </div>
                
                {/* Description  */}
                <div className="mb-6">
                    <label className="inline-block text-lg mb-2" htmlFor="description">Prototype Description</label>
                    <textarea 
                        value={ description } 
                        id="description" 
                        rows="10" 
                        className="text-gray-600 border-2 border-indigo-300 rounded p-2 w-full"
                        placeholder="Write a detailed description of the product"
                        onChange={event => setDescription(event.target.value)}
                        required
                    >
                        
                    </textarea>
                </div>

                <div className="mb-6">
                    <button className="bg-[#3E4E8D] rounded py-2 px-4 text-white hover:bg-[#1A2A39]">Create Prototype</button>
                </div>
            </form>
            
        </div>
    </div>
  )
}

export default Create