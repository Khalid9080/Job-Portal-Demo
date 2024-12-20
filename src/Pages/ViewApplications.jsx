import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ViewApplications = () => {

  const handleStatusUpdate=(e,id)=>{
    console.log(e.target.value,id);

    const data = {
      status : e.target.value
    }

    // const status = e.target.value;
    // console.log("Selected Status:", status);  // Log the selected status value
    
    // const data = { status };

    fetch(`http://localhost:5000/job-applications/${id}`,{
      method:'PATCH',
      headers:{
          'Content-Type': 'application/json'
      },
      body:JSON.stringify(data)
     })

    .then(res=>res.json())
    .then(data=>{
      console.log(data);
    })

  }

  const applications = useLoaderData();
  return (
    <div>
      <h2 className='text-3xl'>Application for this job</h2>

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
          {applications.map((app, index) =>
            <tr key={app._id}>
              <th>{index + 1}</th>
              <td>{app.applicant_email}</td>
              <td>View Control Specialist</td>
              <td>
                <select 
                onChange={(e)=>handleStatusUpdate(e,app._id)}
                defaultValue={app.status || 'Change Status'}
                className="select select-bordered select-xs w-full max-w-xs">
                  <option disabled >Change Status</option>
                  <option>Under Review</option>
                  <option>Set Interview</option>
                  <option>Hired</option>  
                  <option>Rejected</option>  
                </select>
              </td>


            </tr>)
          }


        </tbody>
      </table>
    </div>
  );
};

export default ViewApplications;