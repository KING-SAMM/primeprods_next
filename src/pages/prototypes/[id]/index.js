import { getAllPrototypes, getSinglePage } from "@/lib/fetch";
import GuestLayout from "@/components/Layouts/GuestLayout";
import GuestNavigation from "@/components/Layouts/GuestNavigation";
import { imageUrlPath, logoUrlPath, imgUrl, logo } from "@/constants";
// import logo from "../../../../public/images/logo.PNG";
import Image from "next/image";
import Head from "next/head";
import { useAuth } from "@/hooks/auth";
import { useEffect, useState } from "react";

export default function Prototype() {
    // Get the currently authenticated user if any
    const { user } = useAuth({ middleware: 'guest' });
    const [pathname, setPathname] = useState('');
    const [id, setId] = useState('');
    const [prototype, setPrototype] = useState({})

    
    useEffect(() => {
        let isCancelled = false;

        const getDetails = async() => {
            setPathname(window.location.pathname);
            console.log("Window path is: ", window.location.pathname);
            const path = window.location.pathname;
            console.log("The current url path is: ", path);
            setPathname(path);
            setId(pathname.slice(12));
            setId(path.slice(12));
            console.log("The current pathname is: ", path);
            console.log("Id is: ", id);
    
            const resp = await getSinglePage(id);

            if (!isCancelled) {
                setPrototype(resp);
                console.log("PROTOTYPE is: ", prototype);
                
                console.log("The prototype is: ", prototype);
            }
        }
    
        getDetails();
    
      return () => {
        isCancelled = true
      }
    
    }, [id, prototype])
    

    // setTimeout(() => {
    //     // console.log("The prototype is: ", prototype);
    // }, 3000);
    console.log("Global prototype is: ", prototype);
    // console.log("Prototypes is: ", prototypes);
    console.log("The prototype is: ", prototype);
    console.log("The prototype id is: ", prototype.id);
    console.log("The prototype title is: ", prototype.title);
    console.log("The prototype location is: ", prototype.location);
    console.log("The prototype email is: ", prototype.email);
    
    return (
        <GuestLayout>
        {  prototype ? (
                <>
                   <Head>
                       <title>{ prototype.title } - Prime Prototypes</title>
                   </Head>
                   <GuestNavigation user={ user } />
                   <div className="relative px-4 md:px-4 lg:px-8">
                       <div key={ prototype.id }>
                           <h1 className="text-center text-6xl mt-4 lg:mt-6">{ prototype.title }</h1>
                           <p className="text-center font-semibold">{ prototype.tags }</p>
                           {/* <x-prototype-tags :tagsCsv="$prototype->tags" /> */}

                           <div className="flex w-full flex-col md:flex-col lg:flex-row mt-10 lg:mt-15 px-2 ">
                               {/* Prototype Image   */}
                               <div className="flex-auto w-full lg:w-[40%] flex justify-center items-center lg:justify-start lg:items-center">
                                   <img 
                                       src={ prototype.image ? imageUrlPath + prototype.image : `${imgUrl}`}
                                       layout='fill'
                                       alt="Porototype Image" />
                               </div>
                               {/* Prototype Details  */}
                               <div className="flex-auto w-full lg:w-[60%] lg:ml-10 text-center lg:text-justify sm:mx-auto">
                                   
                                   {/* Description   */}
                                   <p>{ prototype.description }</p>

                                   {/* Company details and logo   */}
                                   <div className="flex lg:flex-row flex-col">
                                       <div className="mt-2">
                                           <h4 className="font-bold">{ prototype.company }</h4>
                                           <p className="font-thin">{ prototype.location }</p>
                                           <p className="text-sm">{ prototype.email }</p>
                                           <p className="text-sm">{ prototype.website }</p>
                                       </div>
                                       <div className="mx-auto">
                                           <img 
                                               src={ prototype.logo ? logoUrlPath + prototype.logo : logo } 
                                               alt="Company logo"
                                               width={150}
                                               className="mt-2 object-contain lg:object-contain" />
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>          
                   </div>
               </>
            )
            : <>
                <Head>
                    <title>Loading...</title>
                </Head>
                <GuestNavigation user={ user } />
                <div className="relative px-4 md:px-4 lg:px-8">
                    <h1 className="text-center">
                        Loading...
                    </h1>
                </div>
            </>
        }
        </GuestLayout>
    )
}

// export async function getStaticProps({ params }) {
//     const { id } = params;
//     const prototype = await getSinglePage(id);

//     return {
//         props: { prototype }
//     }
// }

// export async function getStaticPaths() {
//     const pathname = "/prototypes/52";
//     console.log("The current url path is: ", pathname);
//     const id = pathname.slice(12);
//     console.log("Id is: ", id);

//     const paths = (id) => {params: { id: id.toString() }};

//     return {
//         paths,
//         fallback: "blocking" 
//     }

// }

// export async function getStaticProps({ params }) {
//     const { id } = params;
//     const prototypes = await getSinglePage(id);

//     return {
//         props: { prototypes }
//     }
// }

// export async function getStaticPaths() {
//     const prototypesObj = await getAllPrototypes();  
    
//     const { data } = prototypesObj;

//     const prototypes = data;

//     const paths = prototypes.map(prototype => ({
//         params: { id: prototype.id.toString() }
//     }));

//     return {
//         paths,
//         fallback: "blocking" 
//     }
// }