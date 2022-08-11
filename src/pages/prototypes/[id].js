import { getAllPrototypes } from "@/lib/helper";
import GuestLayout from "@/components/Layouts/GuestLayout";
import GuestNavigation from "@/components/Layouts/GuestNavigation";
import Head from "next/head";

export default function Prototype({ prototypes }) {
    // Image variable 
    const imgUrl = "https://www.notebookcheck.net/fileadmin/_processed_/f/3/csm_csm_Oppo_Watch_3_Render_2_7ef6882bff_4393f5078f.jpg"

    return (
        <GuestLayout>
        {  
            prototypes.map(prototype => (
            <>
                <Head>
                    <title>{ prototype.title }</title>
                </Head>
                <GuestNavigation />
                <div className="relative px-4 md:px-4 lg:px-8">
                    <div key={ prototype.id }>
                        <h1 className="text-center text-6xl">{ prototype.title }</h1>
                        <p className="text-center">{ prototype.tags }</p>
                        {/* <x-prototype-tags :tagsCsv="$prototype->tags" /> */}

                        <div className="flex w-full flex-col md:flex-col lg:flex-row mt-10 lg:mt-15 px-2 ">
                            {/* Prototype Image   */}
                            <div className="flex-auto w-full lg:w-[40%] flex justify-center items-center">
                                <img 
                                    src={ prototype.image ? prototype.image : imgUrl }
                                    className="w-full"
                                    alt="Porototype Image" />
                            </div>
                            {/* Prototype Details  */}
                            <div className="flex-auto w-full lg:w-[60%] lg:ml-10 text-center lg:text-justify sm:mx-auto">
                                
                                {/* Description   */}
                                <p>{ prototype.description }</p>

                                {/* Company details and logo   */}
                                <div className="flex lg:flex-row flex-col">
                                    <div className="mt-2">
                                        <h4 className="text-bold">{ prototype.company }</h4>
                                        <p className="">{ prototype.location }</p>
                                        <p className="text-sm">{ prototype.email }</p>
                                        <p className="text-sm">{ prototype.website }</p>
                                    </div>
                                    <div className="mx-auto">
                                        <img 
                                            src={ prototype.logo ? prototype.logo : imgUrl } 
                                            alt="Company logo"
                                            width="150"
                                            className="mt-2 object-contain lg:object-contain" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>          
                </div>
                </>
            )) 
        }
        </GuestLayout>
    )
}

export async function getStaticProps({ params }) {
    const { id } = params;
    const prototypes = await getAllPrototypes(id);

    return {
        props: { prototypes }
    }
}

export async function getStaticPaths() {
    const prototypes = await getAllPrototypes();                  

    const paths = prototypes.map(prototype => ({
        params: { id: prototype.id.toString() }
    }));

    return {
        paths,
        fallback: false
    }
}