    import {Link} from 'react-router-dom';
    import {AiOutlineEdit} from 'react-icons/ai';
    import { BsInfoCircle } from 'react-icons/bs';
    import { MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md';

    const SponsorsTable = ({sponsors}) =>{
    return(
        <table className="w-full border-separate border-spacing-2">
                        <thead>
                            <tr>
                                <th className="border border-slate-600 rounded-md">No
                                </th>
                                {/* <th className="border border-slate-600 rounded-md">ID
                                </th> */}
                                <th className="border border-slate-600 rounded-md">Organisation Name
                                </th>
                                <th className="border border-slate-600 rounded-md max-md:hidden">Org. Type
                                </th>
                                <th className="border border-slate-600 rounded-md max-md:hidden">Industry
                                </th>
                                <th className="border border-slate-600 rounded-md max-md:hidden">Budget
                                </th>
                                <th className="border border-slate-600 rounded-md">Operations
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {sponsors.map((sponsor, index) =>(
                                <tr key = {sponsor._id} className="h-8">
                                    <td className="border border-slate-700 rounded-md text-center">{index+1}</td>
                                    {/* <td className="border border-slate-700 rounded-md text-center">{book._id}</td> */}
                                    {/* {console.log(book._id)}
                                    {console.log(typeof book._id)} */}
                                    <td className="border border-slate-700 rounded-md text-center">{sponsor.orgName}</td>
                                    <td className="border border-slate-700 rounded-md text-center max-md:hidden">{sponsor.orgType}</td>
                                    <td className="border border-slate-700 rounded-md text-center max-md:hidden">{sponsor.industry}</td>
                                    <td className="border border-slate-700 rounded-md text-center max-md:hidden">{sponsor.budget}</td>
                                    <td className="border border-slate-700 rounded-md text-center">
                                        <div className="flex justify-center gap-x-4">
                                            <Link to={`/details/${sponsor._id}`}>
                                                <BsInfoCircle className="text-2x1 text-green-800"/>
                                            </Link>
                                            <Link to={`/edit/${sponsor._id}`}>
                                                <AiOutlineEdit className="text-2x1 text-yellow-800"/>
                                            </Link>
                                            <Link to={`/delete/${sponsor._id}`}>
                                                <MdOutlineDelete className="text-2x1 text-red-600"/>
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
    )
    }

    export default SponsorsTable