import icon2 from '../../Images/3.svg'
import icon3 from '../../Images/4.svg'
import icon4 from '../../Images/3.png'
import icon5 from '../../Images/5.svg'
import icon6 from '../../Images/6.svg'
import icon from '../../Images/Icon.svg'
import Image from 'next/image'

interface Type{
    description: string;
    res: string[];
    age: string;
    gender: string;
    traits: string[];
    whenandwhere: string;
    postedon: string;
    deadline: string;
    location : string,
    start_date: string,
    end_date: string,
    categories: string[],
    required: string[];
}


const page = ({searchParams}: {searchParams: Type}) => {
    const colors = ["orange", "green", "purple"]
    const back = ["rgb(219, 219, 176)", "rgb(113, 190, 113)", "rgb(180, 143, 180);"]

    const splitString = (text: string): string[] => {
        let split = 0
        for (let i = 0; i < text.length; i++){
            if (text[i] === ':'){
                split = i
                break
            }
        }
        return [text.substring(0, split+1), text.substring(split+1, text.length)]
    }


    // console.log(searchParams)
    return (
    <div className=' flex space-x-28'>
        <div className=' w-8/12 bg-white ml-7 mt-20 mb-4'>
            <div className='clr1 space-y-3'>
                <h1  className=' font-exrabold text-xl size6'>Description</h1>
                <p className='s'>{searchParams.description}</p>
            </div>

            {/* Responsibilties */}

            <div className=' space-y-3 mt-10 '>
                <h1 className=' font-extrabold text-xl size6'>Responsibilties</h1>
                <ul className='clr1 space-y-3'>
                    {searchParams.res.map((item: string, index: number) => (
                        <li className='flex text-base' key={index}> 
                        <Image className='mr-3' src={icon} alt=''/>
                        {item} 
                        </li>
                    ))}
                </ul>
            </div>

            {/* Ideal Candidate */}

            <div className=' space-y-3 mt-10'>
                <h1  className=' font-extrabold text-xl size6'>Ideal Candidate we want</h1>
                <ul className=' list-disc text-base ml-5'>
                    <li className='clr1 font-bold'>
                        <div className=' space-x-2 flex '>
                            <span>Age({searchParams.age})</span>
                            <span>Gender({searchParams.gender})</span>
                        </div>
                    </li>

                    {searchParams.traits.map((item: string, index: number) => (
                        <li key={index} className='clr1'>
                            <span  className=' font-bold'>{splitString(item)[0]}</span>
                            <span>{splitString(item)[1]}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className=' space-y-4 mt-10'>
                <h1 className=' font-extrabold text-xl size6'>When & Where</h1>
                <div className='flex space-x-4 items-center'>
                    <Image src={icon3} alt='' />
                    <p className=''>{searchParams.whenandwhere}</p>
                </div>
            </div>
        </div>

        {/* Right side of the dashboard */}


        <div className=' w-3/12 mt-8 mb-4'>
            <div className='space-y-6'>
                <h1  className='size6'>About</h1>
                <div className='flex space-x-3'>
                    <Image className='w-10 h-10' src={icon2} alt=''></Image>
                    <div className=''>
                        <h5 className='size2'>Posted On</h5>
                        <h1 className='text-sm font-semibold'>{searchParams.postedon}</h1>
                    </div>
                </div>

                <div className='flex space-x-3'>
                    <Image className='w-10 h-10' src={icon4} alt=''></Image>
                    <div className=''>
                        <h5 className='size2'>Deadline</h5>
                        <h1 className='text-sm font-semibold'>{searchParams.deadline}</h1>
                    </div>
                </div>
                <div className='flex space-x-3'>
                    <Image className='w-10 h-10' src={icon3} alt=''></Image>
                    <div className=''>
                        <h5 className='size2'>Location</h5>
                        <h1 className='text-sm font-semibold'>{searchParams.location}</h1>
                    </div>
                </div>
                <div className='flex space-x-3'>
                    <Image className='w-10 h-10' src={icon5} alt=''></Image>
                    <div className=''>
                        <h5 className='size2'>Start date</h5>
                        <h1 className='text-sm font-semibold'>{searchParams.start_date}</h1>
                    </div>
                </div>
                <div className='flex space-x-3'>
                    <Image className='w-10 h-10' src={icon6} alt=''></Image>
                    <div className=''>
                        <h5 className='size2'>End date</h5>
                        <h1 className='text-sm font-semibold'>{searchParams.end_date}</h1>
                    </div>
                </div>
            </div>

            {/* Categories */}

            <div className='mt-5 mr-6 border-r-0 border-l-0 space-y-5 border-b-0 border-2 py-4'>
                <h1 className='size6'>Categories</h1>
                <ul className='flex space-x-2'>
                    {searchParams.categories.map((item, index) => (
                        <li style={{color: colors[index%2], backgroundColor: back[index%2]}} className={' bg-'+colors[index%3]+'-100'+' px-3 py-1 rounded-full'} key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            {/* Required Skills */}

            <div className='mt-5 mr-6 py-4 border-r-0 border-l-0 space-y-3 border-b-0 border-2'>
                <h1 className='size6'>Required Skills</h1>
                <ul className='flex flex-wrap space-y-1 items-center gap-2'>
                    {searchParams.required.map((item, index) => (
                        <li className=' self-center p-1 text-purple-600 bg-purple-100' key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
)
}

export default page