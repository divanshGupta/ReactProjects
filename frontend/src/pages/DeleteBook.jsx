// import React, {useState} from "react";
// import BackButton from "../components/BackButton";
// import axios from "axios";
// import Spinner from "../components/Spinner";
// import { useNavigate, useParams } from "react-router-dom";
// import { useSnackbar } from "notistack";

// const DeleteBooks = () =>{
//     const [loading, setLoading] = useState(false);
//     const navigate = useNavigate();
//     const {id} = useParams();
//     const {enqueueSnackbar} = useSnackbar();

//     const handleDeleteBook = () =>{
//         setLoading(true);
//         axios
//         .delete(`http://localhost:5555/books/${id}`)
//         .then(()=>{
//             setLoading(false);
//             enqueueSnackbar('Book deleted successfully.', {variant: 'success'});
//             navigate('/');
//         })
//         .catch((error)=>{
//             setLoading(false);
//             // alert('An error happened. Please check console.');
//             enqueueSnackbar('Error', { variant: 'error'});
//             console.log(error);
//         });
//     }
//     return(
//         <div className="p-4">
//             <BackButton/>
//             <h1 className="text-3x1 my-4">Edit Book</h1>
//             {loading ? <Spinner /> : ''}
//             <div className="flex flex-col items-center border-2 border-sky-400 rounded-x1 w-[600px] p-8 mx-auto">

//             <h3 className="text-2x1">Are you sure you want to delete this file?</h3>

//             <button className="p-4 bg-red-600 text-white m-8 w-full" onClick={handleDeleteBook}>Yes, delete it</button>
//             </div>
//         </div>
//     )
// }

// export default DeleteBooks


//-----------------------------------------------------------------------------------------


import React, {useState} from "react";
import BackButton from "../components/BackButton";
import axios from "axios";
import Spinner from "../components/Spinner";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const DeleteSponsor = () =>{
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();
    const {enqueueSnackbar} = useSnackbar();

    const handleDeleteSponsor = () =>{
        setLoading(true);
        axios
        .delete(`/sponsor/${id}`)
        .then(()=>{
            setLoading(false);
            enqueueSnackbar('Sponsor deleted successfully.', {variant: 'success'});
            navigate('/home');
        })
        .catch((error)=>{
            setLoading(false);
            // alert('An error happened. Please check console.');
            enqueueSnackbar('Error', { variant: 'error'});
            console.log(error);
        });
    }
    return(
        <div className="p-4">
            <BackButton/>
            <h1 className="text-3x1 my-4">Delete Sponsor</h1>
            {loading ? <Spinner /> : ''}
            <div className="flex flex-col items-center border-2 border-sky-400 rounded-x1 w-[600px] p-8 mx-auto">

            <h3 className="text-2x1">Are you sure you want to delete this sponsor?</h3>

            <button className="p-4 bg-red-600 text-white m-8 w-full" onClick={handleDeleteSponsor}>Yes, delete it</button>
            </div>
        </div>
    )
}

export default DeleteSponsor