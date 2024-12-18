import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ViewApplications = () => {
    const applications = useLoaderData();
    return (
        <div>
            <h2 className='text-3xl'>Application fo this job</h2>

            <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Status</th>
        <th>Update Status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {applications.map((app,index) =>
        <tr key={app._id}>
        <th>{index+1}</th>
        <td>{app.applicant_email}</td>
        
       
      </tr>)
      }
     
     
    </tbody>
  </table>
        </div>
    );
};

export default ViewApplications;