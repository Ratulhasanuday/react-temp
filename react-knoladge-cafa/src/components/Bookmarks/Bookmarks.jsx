import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 ml-4 mt-2 pt-2">
            <div className='bg-[#6047EC1A] p-4 text-center border border-[#6047EC] my-4'>
                <h1 className="text-2xl font-bold">Spent time on read : {readingTime}</h1>
            </div>
            <div className='bg-[#1111110D] '>
            <h1 className="text-3xl">Bookmarks Blogs: {bookmarks.length}</h1>            
            {
                bookmarks.map((bookmark,idx)=><Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
            </div>
        </div>
    );
};
Bookmarks.propTypes={
    bookmarks: PropTypes.array.isRequired,
    readingTime : PropTypes.number.isRequired
}
export default Bookmarks;