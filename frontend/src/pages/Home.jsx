import React, { useEffect, useState } from "react";
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BooksTable from "../components/home/BooksTable";
import BooksCard from "../components/home/BooksCard";
import filterInfluencer from '../assets/img/filterInfluencerEdited.png';
// import filterInfluencer from '../../img/';
import MyHeading from '../components/MyHeading';
import { apiLink } from "../../config";
import ErrorPage from "./ErrorPage";

const Home = () => {
    const [sponsors, setSponsors] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showType, setShowType] = useState('table');
    const [unauthenticated, setUnauthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        async function checkUserAuthentication() {
            const token = localStorage.getItem('authtoken');

            if (!token) {
                setUnauthenticated(true);
                return false;
            }

            try {
                const response = await fetch(`${apiLink}/auth/get-user`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        authtoken: `${token}`,
                    },
                });

                // if (response.ok) {
                //     const data = await response.json();
                //     // console.log('Data from protected route:', data);
                //     // Process the received data
                // } else {
                //     console.log('Error:', response.statusText);
                //     // Handle errors or unauthorized access
                // }

                if (!response.ok) {
                    setUnauthenticated(true);
                    return false;
                }

                return true;
            } catch (error) {
                console.error('Error fetching data:', error);
                setUnauthenticated(true);
                return false;
            }
        }

        async function loadData() {
            setLoading(true);
            const unauthenticated = await checkUserAuthentication();

            if (!unauthenticated) {
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            }

            setLoading(true);
            axios
                .get(`/sponsor/all`)
                .then((response) => {
                    setSponsors(response.data.data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.log(error);
                    setLoading(false);
                });
        }

        loadData();
    }, []);

    // useEffect(() => {
    //     setLoading(true);
    //     axios
    //         .get(`/sponsor/all`)
    //         .then((response) => {
    //             setSponsors(response.data.data);
    //             setLoading(false);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //             setLoading(false);
    //         });
    // }, []);

    const handleLogout = () => {
        // Perform any logout-related actions (e.g., clearing local storage)
        localStorage.removeItem('authtoken');

        // Set loggedOut to true to trigger redirection
        // setLoggedOut(true);
        return redirect("/login");
    };

    return (
        <>
            {unauthenticated ?
                (
                    <div>
                        <h1>Error. Not Logged In.</h1>
                        <p>Please wait, redirecting to login page...</p>
                    </div>
                ) : (

                    <div className="p-4">
                        <div className="flex justify-center items-center gap-x-4">
                            <button
                                className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
                                onClick={() => setShowType('table')}
                            >Table
                            </button>

                            <button
                                className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
                                onClick={() => setShowType('card')}
                            >Card
                            </button>
                        </div>
                        <Link onClick={handleLogout} to="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-0.5 px-2 rounded"><button>Logout</button></Link>
                        <div className="flex justify-between items-center">
                            <h1 className="text-3x1 mx-2 my-4">Sponsors List</h1>
                            <Link to='/add'>
                                <MdOutlineAddBox className='text-sky-800 text-4x1' />
                            </Link>
                        </div>
                        <>
                            {loading ? <Spinner /> : showType === 'table' ? (<BooksTable sponsors={sponsors} />) : (<BooksCard sponsors={sponsors} />)}
                        </>
                        <div>
                            <img style={{ width: "auto" }} src={filterInfluencer}></img>
                        </div>
                    </div>

                )
            }
        </>
    );
}

export default Home
