import { body } from 'motion/react-client';
import React from 'react';
import { data, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import CustomHook from '../Hooks/CustomHook';

const AddJob = () => {
    const navigate=useNavigate();
    const {user}=CustomHook();
    const handleAddJob=(e)=>{
        e.preventDefault();
        const formData = new FormData(e.target);
        // console.log(formData);
        const initialData = Object.fromEntries(formData.entries());
        console.log(initialData);
        const {min,max,currency, ...newJob}=initialData; //jegulo formatingm korbo bakigula newJob e rakbo
        /*
        min, max, currency alada kore raklam karon SalaryRange er moddhe min,max,currency thakbe

        */
        console.log(newJob);
        newJob.SalaryRange={min,max,currency};
        newJob.requirements=newJob.requirements.split('\n');
        newJob.responsibilities=newJob.responsibilities.split('\n');
        console.log(newJob);

        fetch('http://localhost:5000/jobs',{ // jobs er vitor new job add hobe , jobs path first a database a create hoise then ekhane use korsi
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newJob)
        })
            .then(res=>res.json())
            .then(data=>{
                 if (data.insertedId) {
                               
                                   Swal.fire({
                                       position: "top-end",
                                       icon: "success",
                                       title: "Your job has been saved",
                                       showConfirmButton: false,
                                       timer: 1500
                                   });
                                   navigate('/myPostedJobs')
                               } 
    })
}
    return (
        <div>
            <h2 className='text-3xl text-center'>Post a New Job</h2>
            <form onSubmit={handleAddJob} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Title</span>
                    </label>
                    <input  name="title" type="text" placeholder="Job Title" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Location</span>
                    </label>
                    <input name="location" type="text" placeholder="Job Location" className="input input-bordered" required />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Type</span>
                    </label>
                    <select defaultValue="Pick a job type" className="select select-ghost w-full max-w-xs">
                        <option disabled >Pick a job type</option>
                        <option>Full-Time</option>
                        <option>Intern</option>
                        <option>Part-Time</option>
                    </select>

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Field</span>
                    </label>
                    <select defaultValue="Pick a job Field" name="field" className="select select-ghost w-full max-w-xs">
                        <option disabled >Pick a job Field</option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>Finanace</option>
                        <option>Teaching</option>
                    </select>

                </div>

                {/* Salary Range -  */}

                <div className='grid grid-cols-1 lg:grid-cols-3 items-end gap-4'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Salary Range</span>
                        </label>
                        <input name="min" type="text" placeholder="min" className="input input-bordered" required />

                    </div>
                    <div className="form-control">

                        <input name="max" type="text" placeholder="max" className="input input-bordered" required />

                    </div>

                    <div className="form-control">

                        <select defaultValue="Currency" name="currency" className="select select-ghost w-full max-w-xs">
                            <option disabled >Currency</option>
                            <option>BDT</option>
                            <option>USD</option>
                            <option>INR</option>

                        </select>

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Description</span>
                        </label>
                        <textarea className="textarea textarea-bordered" placeholder="Job Description" name="description" required></textarea>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Company Name</span>
                        </label>
                        <input name="company" type="text" placeholder="company" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Requirements</span>
                        </label>
                        <textarea name="requirements" className="textarea textarea-bordered" placeholder="Put each requirments in a new line" required></textarea>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Responsibilities</span>
                        </label>
                        <textarea name="responsibilities" className="textarea textarea-bordered" placeholder="Write each responsibilities in a new line" required></textarea>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">HR Name</span>
                        </label>
                        <input name="hr_name" type="text" placeholder="HR Name" className="input input-bordered" required />
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">HR Email</span>
                        </label>
                        <input defaultValue={user?.email} name="hr_email" type="text" placeholder="HR Email" className="input input-bordered" required />
                    </div>
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Application Deadline</span>
                        </label>
                        <input  name="applicationDeadline" type="date" placeholder="Deadline" className="input input-bordered" required />
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Company Logo URL</span>
                        </label>
                        <input name="company_logo" type="text" placeholder="logo_url" className="input input-bordered" required />
                    </div>



                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    );
};

export default AddJob;
