import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title}=bookmark;
    return (
        <div className='bg-white text-center p-4 m-4 rounded-xl'>
            <h1 className='text-2xl'>{title}</h1>
        </div>
    );
};
Bookmark.propTypes={
    bookmark: PropTypes.object.isRequired
}
export default Bookmark;