import icon2 from '../../Images/3.svg'
import icon3 from '../../Images/4.svg'
import icon4 from '../../Images/3.png'
import icon5 from '../../Images/5.svg'
import icon6 from '../../Images/6.svg'
import icon from '../../Images/Icon.svg'
import Image from 'next/image'
import Type2 from '../type'

interface Type{
    id: string
}


const getData = async (id: string) => {
    const res = await fetch(`https://akil-backend.onrender.com/opportunities/${id}`, {method: 'GET'})
    if (res.status === 200){
        return res.json()
    } else {
        return []
    }
  }


const page = async ({searchParams}: {searchParams: Type}) => {

    // fetching specific job by id 
    const { data }: { data: Type2} = await getData(searchParams.id);

    // colors to alternate
    const colors = ["orange", "green", "purple"]
    const back = ["rgb(219, 219, 176)", "rgb(113, 190, 113)", "rgb(180, 143, 180);"]

    // Handling Error
    if (!data){
        return (
        <div className=" flex h-screen justify-center items-center">
        <h1 className="text-red-500 text-center">Error while fetching data</h1>
        </div>
    )
    }

    return (
    <div className=' flex space-x-28'>
                    {/* LEFT SIDE OF THE DASHBOARD */}

        <div className=' w-8/12 bg-white ml-7 mt-20 mb-4'>
            <div className='clr1 space-y-3'>
                <h1  className=' font-exrabold text-xl size6'>Description</h1>
                <p className='s'>{data.description}</p>
            </div>

                {/* Responsibilties */}

            <div className=' space-y-3 mt-10 '>
                <h1 className=' font-extrabold text-xl size6'>Responsibilties</h1>
                <div className='clr1 space-y-3'>

                    <div className='flex text-base'> 
                        <Image className=' self-start mr-3 mt-1' src={icon} alt='A2SV'/>
                        {data.responsibilities} 
                    </div>

                </div>
            </div>

                {/* Ideal Candidate */}

            <div className=' space-y-3 mt-10'>
                <h1  className=' font-extrabold text-xl size6'>Ideal Candidate we want</h1>

                <div className=' list-disc text-base ml-5'>
                    <div className='clr1'>
                        {data.idealCandidate}
                    </div>
                </div>
            </div>

                {/* When and Where */}

            <div className=' space-y-4 mt-10'>
                <h1 className=' font-extrabold text-xl size6'>When & Where</h1>
                <div className='flex space-x-4 items-center'>
                    <Image src={icon3} alt='A2SV' />
                    <p className=''>{data.whenAndWhere}</p>
                </div>
            </div>
        </div>

                        {/* RIGHT SIDE OF THE DASHBOARD */}


        <div className=' w-3/12 mt-8 mb-4'>

                    {/* About */}
            <div className='space-y-6'>
                <h1  className='size6'>About</h1>

                <div className='flex space-x-3'>
                    <Image className='w-10 h-10' src={icon2} alt='A2SV'></Image>
                    <div className=''>
                        <h5 className='size2'>Posted On</h5>
                        <h1 className='text-sm font-semibold'>{data.datePosted}</h1>
                    </div>
                </div>

                <div className='flex space-x-3'>
                    <Image className='w-10 h-10' src={icon4} alt='A2SV'></Image>
                    <div className=''>
                        <h5 className='size2'>Deadline</h5>
                        <h1 className='text-sm font-semibold'>{data.deadline}</h1>
                    </div>
                </div>
                <div className='flex space-x-3'>
                    <Image className='w-10 h-10' src={icon3} alt='A2SV'></Image>
                    <div className=''>
                        <h5 className='size2'>Location</h5>
                        <div className='flex text-sm font-semibold'>{data.location.map((item, ind) => (
                            item
                        ) )}</div>
                    </div>
                </div>
                <div className='flex space-x-3'>
                    <Image className='w-10 h-10' src={icon5} alt='A2SV'></Image>
                    <div className=''>
                        <h5 className='size2'>Start date</h5>
                        <h1 className='text-sm font-semibold'>{data.startDate}</h1>
                    </div>
                </div>
                <div className='flex space-x-3'>
                    <Image className='w-10 h-10' src={icon6} alt='A2SV'></Image>
                    <div className=''>
                        <h5 className='size2'>End date</h5>
                        <h1 className='text-sm font-semibold'>{data.endDate}</h1>
                    </div>
                </div>
            </div>

            {/* Categories */}

            <div className='mt-5 mr-6 border-r-0 border-l-0 space-y-5 border-b-0 border-2 py-4'>
                <h1 className='size6'>Categories</h1>
                <ul className=' text-xs space-y-2 flex flex-wrap space-x-2'>
                    {data.categories.map((item, index) => (
                        <li style={{color: colors[index%2], backgroundColor: back[index%2]}} className={' bg-'+colors[index%3]+'-100'+' px-3 py-1 rounded-full'} key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            {/* Required Skills */}

            <div className='mt-5 mr-6 py-4 border-r-0 border-l-0 space-y-3 border-b-0 border-2'>
                <h1 className='size6'>Required Skills</h1>
                <ul className='flex flex-wrap space-y-1 items-center gap-2'>
                    {data.requiredSkills.map((item, index) => (
                        <li className=' self-center p-1 text-purple-600 bg-purple-100' key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
)
}

export default page