import React from 'react'
import Card from '@/components/Card'
import { useAuth } from '@/hooks/auth'
import { imgUrl, imageUrlPath } from '@/constants'
import Link from 'next/link'
import Image  from 'next/image'
// import { useRouter } from 'next/router'

export default function PrototypeCard({ prototypesList }) {
    // const router = useRouter()

    // Image variable - uninitialized
    let url

    console.log("ProtoCard prototypes list is: ", prototypesList);

    // useEffect(() => {
    //   first
    
    //   return () => {
    //     second
    //   }
    // }, [prototypesList])
    
  
  return (

    <div className="u-effect-fade u-effect-hover-zoom relative">
      {  prototypesList ? 
        prototypesList.map((prototype, idx) => {
          return (
          <Card className="" key={ idx }>
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
            <div className="text-5xl text-blue-400">
              No prototype found...
            </div>
      }
    </div>
  )
}




