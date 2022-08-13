import React from 'react'
import Card from '@/components/Card'
import { useAuth } from '@/hooks/auth'
import Link from 'next/link'
import Image  from 'next/image'
// import { useRouter } from 'next/router'

export default function PrototypeCard({ prototypes }) {
    // const router = useRouter()

    // Image variable - uninitialized
    let url

    // Image variable 
    const imgUrl = "https://www.notebookcheck.net/fileadmin/_processed_/f/3/csm_csm_Oppo_Watch_3_Render_2_7ef6882bff_4393f5078f.jpg"
  
  return (

    <div class="u-effect-fade u-effect-hover-zoom relative">
      {  prototypes.map(prototype => {
          return (
          <Card class="rounded-r-lg lg:h-[160px]" key={ prototype.id }>
              <div class="overflow-hidden">         
                  <img
                    src={imgUrl}
                    className="w-full h-full object-cover bg-cover transition-transform duration-500 ease-in-out scale-100 bg-no-repeat bg-center lg:object-cover lg:h-[160px]"
                  />
              </div>

              <div class="proto-card-text">
                { url = "/prototypes/" + prototype.id }
                <Link href={ url }>
                  <a>
                    <h4 className='text-white mt-2'>
                      { prototype.title }
                    </h4>
                    <p className='text-blue-400'>{ prototype.company }</p>
                  </a>
                </Link>    
              </div>
          </Card>
        )})
      }
    </div>
  )
}




