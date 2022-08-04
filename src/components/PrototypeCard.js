import React, { useState, useEffect } from 'react'
import axios from '@/lib/axios'
import Card from '@/components/Card'
import { useAuth } from '@/hooks/auth'

export default function PrototypeCard() {
    // const { prototypes } = useAuth({ middleware: 'guest' })
    // const result = prototypes()
    // console.log('Prototypes: ', prototypes.data) 

    const [prototypes, setPrototypes] = useState([])
    useEffect(async () => {
        setPrototypes(await axios.get('http://localhost:8000/api/prototypes')
             .then(res => res.data.prototypes.data)
             .catch(error => console.error(error))
            )
             console.log(prototypes)
            return prototypes
    }, [])


  return (

    <div class="u-effect-fade u-effect-hover-zoom u-gallery-item">
      {  
        prototypes.map((prototype, idx) => (
          <Card class="rounded-r-lg lg:h-[160px]" key={ idx }>
              <div class="overflow-hidden">         
                  <img 
                    src={'/storage' + prototype.image }
                    className="object-cover lg:object-cover lg:h-[160px]"
                  />
                  {/* <img  
                      src="{{ $prototype->image 
                      ? asset('storage/' . $prototype->image)
                      : asset('/images/placeholder.png') }}"
                      class="proto-card-image object-cover lg:object-cover lg:h-[160px] u-back-slide"
                      /> */}
              </div>

              <div class="proto-card-text">
                  <a href="/prototypes/{ prototype.id } ">
                    <h4 className='text-white mt-2'>
                      { prototype.title }
                    </h4>
                    <p className=''>{ prototype.company }</p>
                  </a>
                  
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




