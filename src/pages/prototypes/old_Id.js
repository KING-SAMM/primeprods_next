import { getAllPrototypes } from "@/lib/fetch";
import GuestLayout from "@/components/Layouts/GuestLayout";
import GuestNavigation from "@/components/Layouts/GuestNavigation";
import logo from "../../../public/images/logo.PNG";
import Image from "next/image";
import Head from "next/head";
import { useAuth } from "@/hooks/auth";

export default function Prototype({ prototypes }) {
    // Get the currently authenticated user if any
    const { user } = useAuth({ middleware: 'guest' });
    // API image url and logo url
    const imageUrlPath = "http://localhost:8000/storage/";
    const logoUrlPath = imageUrlPath;

    // Default image variable 
    const imgUrl = "https://www.notebookcheck.net/fileadmin/_processed_/f/3/csm_csm_Oppo_Watch_3_Render_2_7ef6882bff_4393f5078f.jpg";

    // Default logo variable
    const logo = "https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo3.png";


    return (
        <GuestLayout>
        {  prototypes ?
            prototypes.map(prototype => (
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
            )) 
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

export async function getStaticProps({ params }) {
    const { id } = params;
    const prototypes = await getAllPrototypes(id);

    console.log("Prototypes list is: ", prototypes);

    return {
        props: { prototypes }
    }
}

export async function getStaticPaths() {
    const prototypesObj = await getAllPrototypes();  
    
    const { data } = prototypesObj;

    const prototypes = data;

    const paths = prototypes.map(prototype => ({
        params: { id: prototype.id.toString() }
    }));

    return {
        paths,
        fallback: "blocking" 
    }
}