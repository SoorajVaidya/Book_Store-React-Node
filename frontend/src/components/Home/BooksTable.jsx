import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'

    
const BooksTable = ({books}) => {
  return (  

    
    <table className='w-full border-separate border-spacing-2 bg-sky-100'>
            <thead>
              <tr>
                <th className='border border-slate-600 rounded-md'>No</th>
                <th className='border border-slate-600 rounded-md'>Title</th>
                <th className='border border-slate-600 rounded-md max-md:hidden'>Auther</th>
                <th className='border border-slate-600 rounded-md max-md:hidden'>Publish Year</th>
                <th className='border border-slate-600 rounded-md'>Operations</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => (
                <tr key={book.id} className='h-8'>

                  <td className='border border-slate-700 rounded-md text-center'>
                    {index + 1}
                  </td>

                  <td className='border border-slate-700 rounded-md text-center'>
                    {book.title}
                  </td>

                  <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                    {book.auther}
                  </td>

                  <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                    {book.publishYear}
                  </td>

                  <td className='border border-slate-700 rounded-md text-center'>
                    <div className='flex justify-center gap-x-4'>
                      <Link to={`/books/details/${book.id}`}>
                        <BsInfoCircle className='text-2xl text-green-800' />
                      </Link>

                      <Link to={`/books/edit/${book.id}`}>
                        <AiOutlineEdit className='text-2xl text-yellow-800' />
                      </Link>

                      <Link to={`/books/delete/${book.id}`}>
                        <MdOutlineDelete className='text-2xl text-red-800' />
                      </Link>

                    </div>
                  </td>
                </tr>
              ))}

            </tbody>

          </table>
  )
}



export default BooksTable
