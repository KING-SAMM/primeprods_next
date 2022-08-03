import React from 'react'
import Card from '@/components/Card'

const PrototypeLayout = ({ prototype } ) => {
  return (
    <div class="u-effect-fade u-effect-hover-zoom u-gallery-item">
        <Card class="proto-card rounded-r-lg lg:h-[160px]">
            <div class="overflow-hidden">
                <img  
                    src="{{ $prototype->image 
                    ? asset('storage/' . $prototype->image)
                    : asset('/images/placeholder.png') }}"
                    class="proto-card-image object-cover lg:object-cover lg:h-[160px] u-back-slide"
                    />
            </div>

            <div class="proto-card-text">
                <a href="/prototypes/{{ $prototype->id }}">
                    <h4 class="u-gallery-heading mt-2">{{ $prototype->title }}</h4>
                    <p class="u-gallery-text">{{ $prototype->company }}</p>
                </a>
                <x-prototype-tags :tagsCsv="$prototype->tags" class="bg-[#142443]" />
                <p class="u-gallery-text">{{ $prototype->location }}</p>
                
            </div>
        </Card>
    </div>
    
  )
}

export default PrototypeLayout



