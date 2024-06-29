import React from "react";

import { Link } from "react-router-dom";

import { FiEdit } from "react-icons/fi";
import { GrPowerReset } from "react-icons/gr";

import styled from "styled-components";

import avatar from "../assets/media/avatar.png";

import { useUserContext } from "../context/UserContext";

import advancedFormat from "dayjs/plugin/advancedFormat";
import dayjs from "dayjs";
dayjs.extend(advancedFormat);

const Profile = () => {
    const { user } = useUserContext();
    const date = dayjs(user?.createdAt).format("MMM Do, YYYY");

    return (
        <Wrapper>
            <div className="wrapper">
                <h5 className="title">Profile</h5>
                <div className="profile-container">
                    <div className="first-col">
                        <img src={avatar} alt="avatar" className="avatar" />
                        <div className=" flex flex-col justify-center items-center mt-6">
                            <Link
                                to={`/dashboard/edit-profile/${user?._id}}`}
                                className="flex items-center"
                            >
                                <FiEdit />
                                <span className="text-xs capitalize ml-1 font-medium ">
                                    edit
                                </span>
                            </Link>
                            {/* <Link to="" className="flex items-center mt-3">
                                <GrPowerReset />
                                <span className="text-xs capitalize ml-1 font-medium ">
                                    Reset Password
                                </span>
                            </Link> */}
                        </div>
                    </div>
                    <table className="information-table">
                        <tbody>
                            <tr className="row">
                                <td className="info">Username :</td>
                                <td className="value">{user?.username}</td>
                            </tr>
                            <tr className="row">
                                <td className="info">Role :</td>
                                <td className="value">{user?.role}</td>
                            </tr>
                            <tr className="row">
                                <td className="info">email :</td>
                                <td className="value email">{user?.email}</td>
                            </tr>
                            <tr className="row">
                                <td className="info">Join :</td>
                                <td className="value">{date}</td>
                            </tr>
                            <tr className="row">
                                <td className="info">Location :</td>
                                <td className="value">
                                    {user?.location || "not available"}
                                </td>
                            </tr>
                            <tr className="row">
                                <td className="info">Gender :</td>
                                <td className="value">{user?.gender}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* <p className="resume text-justify">
                    <span className="info">resume</span>
                    <span className="value overflow-hidden">
                        {user?.resume}
                    </span>
                </p> */}
            </div>
            {/* <div className="wrapper">
                <h5 className="title">Reset Password</h5>
            </div> */}
        </Wrapper>
    );
};

const Wrapper = styled.section`
.wrapper {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
    padding: 2rem;
    border-radius: 10px;
    width: 100%;
    max-width: 600px;
    background-color: #ffffff;
    transition: box-shadow 0.3s ease;
}

.wrapper:hover {
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.12);
}

.title {
    font-size: calc(22px + 0.5vw);
    text-transform: capitalize;
    font-weight: 700;
    color: #333333;
    margin-bottom: calc(20px + 1vw);
}

.avatar {
    width: 100%;
    max-width: 250px;
    border-radius: 10px;
}

.profile-container {
    display: flex;
    justify-content: center;
    gap: calc(20px + 2vw);
}

.profile-container a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #555555;
    transition: color 0.3s ease;
}

.profile-container a:hover {
    color: #333333;
}

.profile-container a svg {
    margin-right: 5px;
}

.information-table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
}

.information-table .info {
    width: 120px;
    font-weight: bold;
    color: #555555;
}

.information-table .value {
    width: calc(100% - 120px);
    color: #333333;
}

.information-table .value.email {
    width: calc(100% - 120px);
    text-transform: none;
}

td {
    font-size: calc(12px + 0.15vw);
    font-weight: 500;
    text-transform: capitalize;
    color: #555555;
    margin-bottom: 20px;
    transition: color 0.3s ease;
}

td.value {
    color: #333333;
}

td:hover {
    color: #111111;
}

@media screen and (max-width: 785px) {
    .title {
        margin-bottom: 25px;
    }
    .information-table .info {
        width: 40%;
    }
    .information-table .value {
        width: 60%;
    }
}

`;

export default Profile;
