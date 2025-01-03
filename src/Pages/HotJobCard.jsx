import React from 'react';
import { FaMapMarkerAlt, FaDollarSign } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HotJobCard = ({ job }) => {
    const {_id, title, company, company_logo, requirements, description, location, salaryRange } = job;

    // Check if salaryRange is defined and has required properties
    const salary = salaryRange && salaryRange.min && salaryRange.max && salaryRange.currency
        ? `${salaryRange.min}-${salaryRange.max} ${salaryRange.currency}`
        : 'Not specified';  // Default message if salaryRange is missing

    return (
        <div className="card card-compact bg-base-100 shadow-xl flex gap-8 m-2">
            <figure>
                <img
                    className="w-12"
                    src={company_logo}
                    alt={`${company} Logo`}
                />
                <p className="flex gap-2 items-center">
                    <FaMapMarkerAlt />
                    {location}
                </p>
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description}</p>
                <div className="flex gap-2 flex-wrap">
                    {requirements.map((skill, index) => (
                        <p
                            key={index}
                            className="border rounded-md text-center px-2 hover:text-purple-600 hover:bg-gray-400"
                        >
                            {skill}
                        </p>
                    ))}
                </div>
                <div className="card-actions justify-end items-center mt-4">
                    <p className="flex items-center">
                        Salary: <FaDollarSign />
                        {salary}
                    </p>
                    <Link to={`/jobs/${_id}`}>
                        <button className="btn btn-primary">Apply</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HotJobCard;
