/* import React, {useState} from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const CreateBooks = () =>{
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishYear, setPublishYear] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const handleSaveBook = () =>{
        const data = {
            title,
            author,
            publishYear
        };
        setLoading(true);
        axios
        .post(`http://localhost:5555/books`, data)
        .then(()=>{
            setLoading(false);
            enqueueSnackbar('Book Created Succesfully.'), { variant: 'success' };
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
            <h1 className="text-3x1 my-4">Create Book</h1>
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
                <button className="p-2 bg-sky-300 m-8" onClick={handleSaveBook}>Save</button>
            </div>
        </div>
    )
}

export default CreateBooks */

//-----------------------------------------------------------------------------------------


import React, {useState} from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import Select from 'react-select';

const CreateBook = () =>{
    const [orgName, setOrgName] = useState('');
    const [orgType, setOrgType] = useState('');
    const [industry, setIndustry] = useState('');
    const [budget, setBudget] = useState(0);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const handleAddSponsor = () =>{
        const data = {
            orgName,
            orgType,
            industry,
            budget,
        };
        setLoading(true);
        axios
        .post(`/sponsor`, data)
        .then(()=>{
            setLoading(false);
            // console.log(data);
            enqueueSnackbar('Sponsor added Succesfully.'), { variant: 'success' };
            navigate('/home');
        })
        .catch((error)=>{
            // console.log(data);
            setLoading(false);
            // alert('An error happened. Please check console.');
            enqueueSnackbar('Error', { variant: 'error'});
            console.log(error);
        });
    }

    const orgTypeOptions = [
        { value: 'Product', label: 'Product'},
        { value: 'Service', label: 'Service'},
    ]

    const industryOptions = [
        { value: 'Technology', label: 'Technology'},
        { value: 'Cosmetic', label: 'Cosmetic'},
        { value: 'Food', label: 'Food'},
        { value: 'Automobile', label: 'Automobile'},
        { value: 'Beverages', label: 'Beverages'},
    ]

    return(
        <div className="p-4">
            <BackButton/>
            <h1 className="text-3x1 my-4">Add Sponsor</h1>
            {loading ? <Spinner /> : ''}
            <div className="flex flex-col border-2 border-sky-400 rounded-x1 w-[600px] p-4 mx-auto">
                <div className="my-4">
                    <label className="text-x1 mr-4 text-gray-500">Organisation Name</label>
                    <input 
                    type="text"
                    value={orgName}
                    onChange={(e)=> setOrgName(e.target.value)}
                    className="border-2 px-4 py-2 w-full" 
                    />
                </div>
                <div className="my-4">
                    <label className="text-x1 mr-4 text-gray-500">Organisation Type</label>
                    <Select
                    onChange={(selectedOption) => setOrgType(selectedOption.value)}
                    options={orgTypeOptions}
                    defaultValue={{label: "Choose org. type", value: "placeholder"}}>
                    </Select>
                </div>
                <div className="my-4">
                    <label className="text-x1 mr-4 text-gray-500">Industry</label>
                    <Select
                    onChange={(selectedOption) => setIndustry(selectedOption.value)}
                    options={industryOptions}
                    defaultValue={{label: "Choose an industry", value: "placeholder"}}>
                    </Select>
                </div>
                <div className="my-4">
                    <label className="text-x1 mr-4 text-gray-500">Budget</label>
                    <input 
                    type="number"
                    value={budget}
                    onChange={(e)=> setBudget(e.target.value)}
                    className="border-2 px-4 py-2 w-full" 
                    />
                </div>
                <button className="p-2 bg-sky-300 m-8" onClick={handleAddSponsor}>Add</button>
            </div>
        </div>
    )
}

export default CreateBook