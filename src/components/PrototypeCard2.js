import React, { useState, useEffect } from 'react'
import axios from '@/lib/axios'
import Card from '@/components/Card'
import { useAuth } from '@/hooks/auth'
import Link from 'next/link'
import Image  from 'next/image'
// import { useRouter } from 'next/router'

export default function PrototypeCard2({ prototypes }) {
    // Image variable - uninitialized
    let url

    // Image variable 
    const imgUrl = "https://www.notebookcheck.net/fileadmin/_processed_/f/3/csm_csm_Oppo_Watch_3_Render_2_7ef6882bff_4393f5078f.jpg"

    

  return (

    <div className="u-effect-fade u-effect-hover-zoom relative">
      {  
        prototypes.map((prototype, idx) => (
          <Card className="rounded-r-lg lg:h-[160px]" key={ idx }>
              <div className="overflow-hidden">         
                  <img
                    src={imgUrl}
                    className="w-full h-full object-cover bg-cover transition-transform duration-500 ease-in-out scale-100 bg-no-repeat bg-center lg:object-cover lg:h-[160px]"
                  />
              </div>

              <div className="proto-card-text">
                { url = "/prototypes/" + prototype.id }
                <Link href={ url }>
                  <a>
                    <h4 className='text-white mt-2'>
                      { prototype.title }
                    </h4>
                    <p className=''>{ prototype.company }</p>
                  </a>
                </Link>
                  
                  {/* <a href="/prototypes/{{ $prototype->id }}">
                      <h4 class="u-gallery-heading mt-2">{{ $prototype->title }}</h4>
                      <p class="u-gallery-text">{{ $prototype->company }}</p>
                  </a> */}
                  {/* <x-prototype-tags :tagsCsv="$prototype->tags" class="bg-[#142443]" />
                  <p class="u-gallery-text">{{ $prototype->location }}</p> */}
                  
              </div>
          </Card>
        )) 
      }
    </div>
  )
}

export async function getStaticProps() {
    const res = await axios.get('http://localhost:8000/api/prototypes')
    const prototypes = res.json()
    console.log(prototypes)

    return {
        props: {
            prototypes
        }
    }
}




