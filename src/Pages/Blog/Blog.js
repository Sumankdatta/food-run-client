import React from 'react';
import useTitle from '../../Shared/Hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div>
            <h1 className='text-center text-4xl font-semibold text-orange-600 mt-20 mb-60'>Blog Coming Soon......</h1>
        </div>
    );
};

export default Blog;