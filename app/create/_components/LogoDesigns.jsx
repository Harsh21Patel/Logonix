import React, { useState } from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'
import LogoDesign from '@/app/_data/LogoDesign'
import Image from 'next/image'


function LogoDesigns({onHandleInputChange,formData}) {

    const [selectedOptions, setSelectedOptions] = useState(formData?.design?.title);

    return (
        <div className='my-10'>
            <HeadingDescription
            title={Lookup.LogoDesignTitle}
            description={Lookup.LogoDesignDesc}
            />

            <div className='grid grid-cols-2 md:grid-cols-3 gap-10 mt-10'>
                {LogoDesign.map((design,index) => (
                    <div key={index} onClick={()=>{setSelectedOptions(design.title);
                        onHandleInputChange(design)}}
                        className={`p-1 hover:border-2 border-primary rounded-xl cursor-pointer ${selectedOptions==design.title&&'border-2 rounded-xl border-primary'}`}>
                        <Image src={design.image} alt={design.title} width={300} height={200} className="w-full rounded-2xl h-[160px] object-cover" />
                        <h3 className={'text-center mt-1 texl-xl'}>{design.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LogoDesigns
