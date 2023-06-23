
import Link from 'next/link';
import './nav.css'


const DropDownProfile = () => {
    return(
        <div className='flex flex-col dropDownProfile'>
            <ul className='flex flex-col gap-4 text-center divide-y'>
                <div className='flex flex-col gap-4'>
                    <Link href='/profile' className='bg-black text-slate-100 rounded-full p-1'>Profile</Link>
                    <Link href='/profile/setting' className='p-1 hover:bg-gray-200 rounded-full'>Settings</Link>
                </div>
                <li className='cursor-pointer font-medium'>Logout</li>
            </ul>
        </div>
    )
}

export default DropDownProfile;