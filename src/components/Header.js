
import Image from 'next/image'
import HeaderItem from './HeaderItem';
import { HomeIcon, BoltIcon, CheckIcon, RectangleStackIcon, MagnifyingGlassIcon, UserIcon } from '@heroicons/react/24/solid'


const Header = () => {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between
        items-center h-auto">
            {/* <BiHomeAlt/> */}

            <div>
                <div className='flex flex-grow justify-evenly max-w-2xl'>
                    <HeaderItem title="HOME" Icon={HomeIcon} />
                    <HeaderItem title="TRENDING" Icon={BoltIcon} />
                    <HeaderItem title="VERIFIED" Icon={CheckIcon} />
                    <HeaderItem title="COLLECTIONS" Icon={RectangleStackIcon} />
                    <HeaderItem title="SEARCH" Icon={MagnifyingGlassIcon} />
                    <HeaderItem title="ACCOUNT" Icon={UserIcon} />
                </div>
            </div>

            <Image
                className='object-contain'
                src="/Images/hulu.jpg"
                width={200} height={100}
                alt='poster'
            />

        </header>
    )
}

export default Header
