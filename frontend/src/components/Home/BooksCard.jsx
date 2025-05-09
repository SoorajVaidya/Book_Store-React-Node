import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from 'react-icons/pi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle  } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'
import {BiUserCircle} from 'react-icons/bi'

const BooksCard = ({ books }) => {
    return (
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols4'>
            {books.map((item) => (
                <div key={item.id} className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl bg-sky-100'>
                    <h2 className='absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg'>{item.publishYear}</h2>
                    <h4 className='m-2 text-gray-500'>{item.id}</h4>
                    <div className='flex justify-start items-center gap-x-2'>
                        <PiBookOpenTextLight classname='text-red-300 text-2xl' />
                        <h2 className='my-1'>{item.title}</h2>
                    </div>
                    <div className='flex justify-start items-center gap-x-2'>
                        <BiUserCircle classname='text-red-200 text-2xl' />
                        <h2 className='my-1'>{item.auther}</h2>
                    </div>
                    <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
                        <Link to={`books/details/${item.id}`}>
                            <BsInfoCircle className='text-2xl text-green-800 hover:text-black' />
                        </Link>

                        <Link to={`books/edit/${item.id}`}>
                            <AiOutlineEdit className='text-2xl text-yellow-800 hover:text-black' />
                        </Link>

                        <Link to={`books/delete/${item.id}`}>
                            <MdOutlineDelete className='text-2xl text-red-800 hover:text-black' />
                        </Link>

                    </div>

                </div>
            ))}
        </div>
    )
}

export default BooksCard
