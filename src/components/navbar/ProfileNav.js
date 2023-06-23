
import { UserCircleIcon } from '@heroicons/react/24/outline'


function ProfileNav({onclick}) {
    return (
        <div 
            className='justify-self-end rounded-lg border border-slate-300 sticky items-center justify-center cursor-pointer justify-center align-center px-8 py-1 mr-10'
            onClick={onclick}
        > 
            <UserCircleIcon className="h-8 w-8 text-black-500"/>
        </div>
    );
}

export default ProfileNav;