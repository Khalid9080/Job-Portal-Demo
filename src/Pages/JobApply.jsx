import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CustomHook from '../Hooks/CustomHook';
import Swal from 'sweetalert2'


const JobApply = () => {
    const { id } = useParams();
    const { user } = CustomHook();
    const navigate = useNavigate();
    console.log(id, user);
    const handleSubmitjob = (e) => {
        e.preventDefault();
        console.log("Job Applied");
        const form = e.target;
        const linkedin = form.linkedin.value;
        const github = form.github.value;
        const resume = form.resume.value;

        const jobApplication = { // submit er jonno post korbo
            job_id: id, // specific job er id , email er maddhome, linkin,github,resume apply korbe.
            applicant_email: user.email,
            linkedin,
            github,
            resume
        }
        fetch("http://localhost:5000/job-applications", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobApplication)
        })

            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/myApplications')
                }
            })

    }
    return (

        <div className="text-center lg:text-left">
            <h1 className="text-5xl text-center m-10 font-bold">Apply Job and Good Luck Now</h1>

            <div onSubmit={handleSubmitjob} className="card bg-base-100 max-w-7xl mx-auto my-16 shadow-2xl">
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">LinkedIn URL</span>
                        </label>
                        <input type="url" name="linkedin" placeholder="LinkedIn URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Github URL</span>
                        </label>
                        <input type="url" name="github" placeholder="Github URL" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Resume URL</span>
                        </label>
                        <input type="url" name="resume" placeholder="Resume URL" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Apply</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default JobApply;
