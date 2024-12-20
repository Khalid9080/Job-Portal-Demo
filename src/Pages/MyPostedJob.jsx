import React, { useEffect, useState } from 'react';
import CustomHook from '../Hooks/CustomHook';
import { Link } from 'react-router-dom';

const MyPostedJob = () => {
    const [jobs, setJobs] = useState([]);
    const { user } = CustomHook();
    useEffect(() => {
        fetch(`http://localhost:5000/jobs?email=${user.email}`)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [user.email]);
    return (
        <div>
            <h1 className='text-3xl'>my posted jobs:{jobs.length}</h1>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Job Title</th>
        <th>Deadline</th>
        <th>Application Count</th>
        <th>Applications</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {jobs.map((job,index) =>
        <tr key={job.id}>
        <th>{index+1}</th>
        <td>{job.title}</td>
        <td>{job.applicationDeadline}</td>
        <td>{job.applicationCount}</td>
        <td><Link to={`/viewApplications/${job._id}`}><button className='btn btn-link'>View Applications</button></Link></td>
      </tr>)
      }
     
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyPostedJob;