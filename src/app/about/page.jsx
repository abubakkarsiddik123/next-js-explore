import Image from 'next/image';
import React from 'react';


export const metadata = {
  title: 'About',
  description: '...',
}

const AboutPage = () => {
    return (
        <div className='text-5xl text-center mt-10'>
            this is about page
            <Image src="/sakib.jpg" alt='sakib al hasan' width='500' height='300' className='mx-auto mt-4'></Image>
        </div>
    );
};

export default AboutPage;