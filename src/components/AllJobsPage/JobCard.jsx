import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { TfiLocationPin } from "react-icons/tfi";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { TbTargetArrow } from "react-icons/tb";
import { FaRegCalendarAlt } from "react-icons/fa";

import advancedFormat from "dayjs/plugin/advancedFormat";
import dayjs from "dayjs";
dayjs.extend(advancedFormat);

import { useUserContext } from "../../context/UserContext";

import { Link } from "react-router-dom";
import { postHandler } from "../../utils/FetchHandlers";
import Swal from "sweetalert2";

const JobCard = ({ job }) => {
    const date = dayjs(job?.jobDeadline).format("MMM Do, YYYY");
    const { user } = useUserContext();

    const handleApply = async (id) => {
        let currentDate = new Date();
        let date = currentDate.toISOString().slice(0, 10);
        const appliedJob = {
            applicantId: user?._id,
            recruiterId: job?.createdBy,
            jobId: id,
            status: "pending",
            dateOfApplication: date,
            resume: user?.resume || "",
        };
        try {
            const response = await postHandler({
                url: "http://localhost:3000/api/v1/application/apply",
                body: appliedJob,
            });
            Swal.fire({
                icon: "success",
                title: "Hurray...",
                text: response?.data?.message,
            });
        } catch (error) {
            console.log(error);
            if (error?.response?.data?.error) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error?.response?.data?.error[0].msg,
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error?.response?.data,
                });
            }
        }
    };
    return (
        <Wrapper>
    <div className="card-container">
        <div className="card-header">
            <div className="logo">{job.company.charAt(0)}</div>
            <div className="right">
                <h2 className="title">{job?.position}</h2>
                <h4 className="company">{job?.company}</h4>
            </div>
        </div>
        <div className="details">
            <div className="detail">
                <FaRegCalendarAlt className="icon" />
                <span>{date}</span>
            </div>
            <div className="detail">
                <TfiLocationPin className="icon" />
                <span>{job?.jobLocation}</span>
            </div>
            <div className="detail">
                <BsFillBriefcaseFill className="icon" />
                <span>{job?.jobType}</span>
            </div>
            <div className={`detail ${job?.jobStatus}`}>
                <TbTargetArrow className="icon" />
                <span>{job?.jobStatus}</span>
            </div>
        </div>
        <div className="actions">
            <Link to={`/job/${job._id}`} className="detail-btn">
                Details
            </Link>
            {user?.role === "user" && (
                <button className="apply-btn" onClick={() => handleApply(job._id)}>
                    Apply
                </button>
            )}
            {user?._id === job?.createdBy && (
                <Link to={`/dashboard/edit-job/${job._id}`} className="detail-btn">
                    Edit
                </Link>
            )}
        </div>
    </div>
</Wrapper>
    );
};

const Wrapper = styled.div`
    .card-container {
        background-color: #ffffff;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        padding: 1.5rem;
        transition: transform 0.3s ease-in-out;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .card-container:hover {
        transform: translateY(-5px);
    }

    .card-header {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .logo {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #fb891f;
        color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
    }

    .right {
        flex: 1;
    }

    .title {
        font-size: 1.25rem;
        font-weight: 600;
        color: #333333;
        margin-bottom: 0.25rem; /* Adjusted margin for better spacing */
    }

    .company {
        font-size: 0.875rem;
        font-weight: 500;
        color: #666666;
        margin-bottom: 0.5rem; /* Adjusted margin for better spacing */
    }

    .details {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
    }

    .detail {
        display: flex;
        align-items: center; /* Align items vertically */
        gap: 0.5rem;
        font-size: 0.875rem;
        color: #666666;
    }

    .icon {
        font-size: 1.125rem;
        display: inline-block; /* Ensure the icon behaves as an inline block element */
        vertical-align: middle; /* Align the icon vertically within its container */
    }

    .actions {
        display: flex;
        gap: 1rem;
        margin-top: 1rem;
    }

    .detail-btn,
    .apply-btn {
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
        text-transform: uppercase;
        font-size: 0.875rem;
        font-weight: 500;
        letter-spacing: 1px;
        display: inline-block;
    }

    .detail-btn:hover,
    .apply-btn:hover {
        background-color: #f2f2f2;
    }

    .apply-btn {
        background-color: #007bff;
        color: #ffffff;
    }
`;

export default JobCard;
