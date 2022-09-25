import React from 'react'
import Card from '@/components/Card'
import { useAuth } from '@/hooks/auth'
import { imgUrl, imageUrlPath } from '@/constants'
import Link from 'next/link'
import Image  from 'next/image'
import NotFoundResource from './NotFoundResource'
// import { useRouter } from 'next/router'

export default function PrototypeCard({ prototypesList, isLoading }) {
    // const router = useRouter()

    // Image variable - uninitialized
    let url

    console.log("ProtoCard prototypes list is: ", prototypesList);  
    
    if (!prototypesList)
    {
        console.log("prototypesList is undefined")
    } else {
        console.log("prototypesList is defined")
    }
  
  return (

    <div className="">
      {/* Loading Message  */}
      { isLoading && (
          <div className="text-5xl text-blue-400">
              Loading...
          </div>
        )}

      {/* Prototypes list  */}
      {  prototypesList ? 
        prototypesList.map((prototype) => {
          return (
          <Card className="" key={ prototype.id }>
              <div className="overflow-hidden">         
                  <img
                    src={prototype.image ? imageUrlPath+prototype.image :`${imgUrl}`}
                    className="w-full h-full object-cover bg-cover transition-transform duration-500 ease-in-out scale-100 bg-no-repeat bg-center lg:object-cover lg:h-[160px]"
                  />
              </div>

              <div className="proto-card-text">
                { url = "/prototypes/" + prototype.id }
                <Link href={ url }>
                  <a className='no-underline'>
                    <h4 className='text-white mt-2'>
                      { prototype.title }
                    </h4>
                    <p className='text-blue-400'>{ prototype.company }</p>
                  </a>
                </Link>    
              </div>
          </Card>
        )})   
        :
        <NotFoundResource title={ 'No prototypes found...' } />
      }
    </div>
  )
}




