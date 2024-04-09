import { useEffect, useState } from 'react';
import axios from 'axios';
import baseURL from '../DB';
import { toast } from 'react-toastify';

function CinemaProfilePage() {
  let token = localStorage.getItem('myToken');
  token = JSON.parse(token);
  // console.log("Data", token);
  const [address, setAddress] = useState('');
  const [cinemaName, setCinemaName] = useState('');
  const [edit, setEdit] = useState(false);
  useEffect(() => {
    getData();
  }, [edit])
  const getData = async () => {

    try {
      const response = await axios.get(`${baseURL}/admin/profile/${token.id}`);
      if (response) {
        const { cinemaName, address } = response.data;
        setCinemaName(cinemaName);
        setAddress(address);
      }
      else {
        console.error('No data received from the server');
      }
    }
    catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const handleSave = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.patch(`${baseURL}/admin/profile/${token.id}`, {
        cinemaName,
        address
      })
      if (response.status == 200) {
        setEdit(false);
      }
      else {
        toast.error('Unable to Save Changes');
      }
    } catch (error) {
      console.error('Error: ', error);
    }
  }
  return (
    <div className="text-gray-800 container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4 text-red-500">Cinema Profile Page</h1>
      <div className="flex flex-col mb-4">
        <label htmlFor="cinemaName" className="mb-2 font-bold">Cinema Name</label>
        <input type="text" id="cinemaName" value={cinemaName} onChange={(e) => setCinemaName(e.target.value)} placeholder='Enter your Cinema name' className="border rounded-md px-4 py-2" disabled={edit ? false : true} />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="cinemaAddress" className="mb-2 font-bold">Cinema Address</label>
        <textarea id="cinemaAddress" placeholder='Enter your Cinema Address' className="border rounded-md px-4 py-2 h-32" onChange={(e) => setAddress(e.target.value)} value={address} disabled={edit ? false : true}  ></textarea>
      </div>
      <div className="flex justify-between">
        {edit ?
          <>

            <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={handleSave}>Save</button>
            <button className="bg-gray-400 text-white px-4 py-2 rounded-md" onClick={() => setEdit(!edit)}>Cancel</button>

          </>

          :
          <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={() => setEdit(!edit)}>Edit</button>
        }
      </div>
    </div >
  );
}

export default CinemaProfilePage;
