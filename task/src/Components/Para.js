import React from 'react';
import Courses from './Courses';

const Para = () => {
    return(
        <>
        <br/><br/>
        <h1 className='text-center text-2xl font-bold mt-10 mb-10'>Where Learning Meets The Expectation</h1>
        <Courses courseName = {"Javascript"} price={"$200"}/>
        <Courses courseName = {"ReactJS"} price={"$500"}/>
        <Courses courseName = {"Angular"} price={"$700"}/>
        </>
    );
}

export default Para;