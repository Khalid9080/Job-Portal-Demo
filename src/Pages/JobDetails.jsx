import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const {_id,title,company,deadline}= useLoaderData()
    // console.log(job);
    return (
        <div className='m-10'>
            <h2 className='text-3xl'>Job Details For:{title}</h2>
            <p>Aplly for: {company}</p>
            <p>Deadline:{deadline}</p>
            <Link to={`/jobApply/${_id}`}>
            <button className='btn btn-primary'>Apply Now</button>
            </Link>
        </div>
    );
};

export default JobDetails;
