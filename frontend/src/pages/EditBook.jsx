/* import React, {useState, useEffect} from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const EditBook = () =>{
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishYear, setPublishYear] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {enqueueSnackbar} = useSnackbar();
    const {id} = useParams();

    useEffect(()=>{
        setLoading(true);
        axios
        .get(`http://localhost:5555/books/${id}`)
        .then((response)=>{
            setTitle(response.data.title);
            setAuthor(response.data.author);
            setPublishYear(response.data.publishYear);
        })
        .catch((error)=>{
            setLoading(false);
            alert("An error happened. Please check console.");
            console.log(error);
        });
    }, []);

    const handleEditBook = () =>{
        const data = {
            title,
            author,
            publishYear
        };
        setLoading(true);
        axios
        .put(`http://localhost:5555/books/${id}`, data)
        .then(()=>{
            setLoading(false);
            enqueueSnackbar('Book edited successfully.', {variant: 'success'})
            navigate('/');
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
            <h1 className="text-3x1 my-4">Edit Book</h1>
            {loading ? <Spinner /> : ''}
            <div className="flex flex-col border-2 border-sky-400 rounded-x1 w-[600px] p-4 mx-auto">
                <div className="my-4">
                    <label className="text-x1 mr-4 text-gray-500">Title</label>
                    <input 
                    type="text"
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                    className="border-2 border-gray-500 px-4 py-2 w-full" 
                    />
                </div>
                <div className="my-4">
                    <label className="text-x1 mr-4 text-gray-500">Author</label>
                    <input 
                    type="text"
                    value={author}
                    onChange={(e)=> setAuthor(e.target.value)}
                    className="border-2 border-gray-500 px-4 py-2 w-full" 
                    />
                </div>
                <div className="my-4">
                    <label className="text-x1 mr-4 text-gray-500">Publish Year</label>
                    <input 
                    type="number"
                    value={publishYear}
                    onChange={(e)=> setPublishYear(e.target.value)}
                    className="border-2 border-gray-500 px-4 py-2 w-full" 
                    />
                </div>
                <button className="p-2 bg-sky-300 m-8" onClick={handleEditBook}>Save</button>
            </div>
        </div>
    )
}

export default EditBook
 */

//-----------------------------------------------------------------------------------------

import React, {useState, useEffect} from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const EditSponsor = () =>{
    const [orgName, setOrgName] = useState('');
    const [orgType, setOrgType] = useState('');
    const [industry, setIndustry] = useState('');
    const [budget, setBudget] = useState(0);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {enqueueSnackbar} = useSnackbar();
    const {id} = useParams();

    useEffect(()=>{
        setLoading(true);
        axios
        .get(`/sponsor/${id}`)
        .then((response)=>{
            setLoading(false);
            setOrgName(response.data.orgName);
            setOrgType(response.data.orgType);
            setIndustry(response.data.industry);
            setBudget(response.data.budget);
        })
        .catch((error)=>{
            setLoading(false);
            alert("An error happened. Please check console.");
            console.log(error);
        });
    }, []);

    const handleEditSponsor = () =>{
        const data = {
            orgName,
            orgType,
            industry,
            budget,
        };
        setLoading(true);
        axios
        .put(`/sponsor/${id}`, data)
        .then(()=>{
            setLoading(false);
            enqueueSnackbar('Sponsor edited successfully.', {variant: 'success'})
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
            <h1 className="text-3x1 my-4">Edit Sponsor</h1>
            {loading ? <Spinner /> : ''}
            <div className="flex flex-col border-2 border-sky-400 rounded-x1 w-[600px] p-4 mx-auto">
                <div className="my-4">
                    <label className="text-x1 mr-4 text-gray-500">Org. Name</label>
                    <input 
                    type="text"
                    value={orgName}
                    onChange={(e)=> setOrgName(e.target.value)}
                    className="border-2 px-4 py-2 w-full" 
                    />
                </div>
                <div className="my-4">
                    <label className="text-x1 mr-4 text-gray-500">Org. Type</label>
                    {/* <input 
                    type="text"
                    value={orgType}
                    onChange={(e)=> setOrgType(e.target.value)}
                    className="border-2 border-gray-500 px-4 py-2 w-full" 
                    /> */}
                    <select
                        className="border rounded w-full py-2 px-3"
                        onChange={(e) => setOrgType(e.target.value)}
                        value={orgType}
                        required
                    >
                        <option value="Product">Product</option>
                        <option value="Service">Service</option>
                    </select>
                </div>
                <div className="my-4">
                    <label className="text-x1 mr-4 text-gray-500">Industry</label>
                    {/* <input 
                    type="number"
                    value={publishYear}
                    onChange={(e)=> setPublishYear(e.target.value)}
                    className="border-2 border-gray-500 px-4 py-2 w-full" 
                    /> */}
                    <select
                        className="border rounded w-full py-2 px-3"
                        onChange={(e) => setIndustry(e.target.value)}
                        value={industry}
                        required
                    >
                        <option value="Technology">Technology</option>
                        <option value="Automobile">Automobile</option>
                        <option value="Cosmetic">Cosmetic</option>
                        <option value="Food">Food</option>
                        <option value="Beverage">Beverage</option>
                    </select>
                </div>
                <div className="my-4">
                    <label className="text-x1 mr-4 text-gray-500">Industry</label>
                    <input 
                    type="number"
                    value={budget}
                    onChange={(e)=> {e!=null ? setBudget(e.target.value) : setBudget(0)}}
                    className="border-2  px-4 py-2 w-full" 
                    />
                </div>
                <button className="p-2 bg-sky-300 m-8" onClick={handleEditSponsor}>Save</button>
            </div>
        </div>
    )
}

export default EditSponsor