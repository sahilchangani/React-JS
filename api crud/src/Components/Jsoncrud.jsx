import axios from 'axios';
import React, { useEffect, useState } from 'react';


export default function Jsoncrud() {
  const [title, setTitle] = useState('');
  const [view, setView] = useState('');
  const [data, setData] = useState([]);
  const [isEdit, setIsEdit] = useState(null);

  useEffect(() => {
    fetchapi();
  }, []);

  const fetchapi = async () => {
    let response = await axios.get('http://localhost:5000/posts');
    setData(response.data);
  };

  const addData = async () => {
    if (isEdit == null) {
      let addresponse = await axios.post('http://localhost:5000/posts', {"id": String(data.length + 1),"title":title,"view": Number(view),});
        if (addresponse) {
        setData([...data, addresponse.data]);
        setTitle('');
        setView('');
      }
    } else {
      const update = await axios.put(`http://localhost:5000/posts/${isEdit}`, {"title":title,"view": Number(view),});
      if (update) {
        const updatedData = data.find((item)=>{(item.id == isEdit) ?{ ...item ,"title":update.data.title,"view":Number(update.data.view)}: item})
        setData(updatedData);
        setTitle('');
        setView('');
        setIsEdit(null);
      }
    }
  };

  const deleteData = async (id) => {
    await axios.delete(`http://localhost:5000/posts/${id}`);
    setData(data.filter((item) => item.id != id));
  };

  const setEdit = async (id) => {
    const editRec = await axios.get(`http://localhost:5000/posts/${id}`);
    if (editRec) {
      setTitle(editRec.data.title);
      setView(editRec.data.view);
      setIsEdit(id);
    }
  };

  return (
    <div className="container">
      <h1 className="heading">CRUD Application</h1>

      <div className="input-group">
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter title" className="input"/>
        <input type="number" value={view} onChange={(e) => setView(e.target.value)} placeholder="Enter view count" className="input"/>
        <button onClick={addData} className="button">{isEdit ? 'Update' : 'Add'}</button>
      </div>

      {data.length > 0 ? (
        data.map((e, i) => (
          <ul key={i} className="list">
            <li>ID: {e.id}</li>
            <li>Title: {e.title}</li>
            <li>Views: {e.view}</li>
            <div className="button-group">
              <button onClick={() => setEdit(e.id)} className="edit-button">Edit</button>
              <button onClick={() => deleteData(e.id)} className="delete-button">Delete</button>
            </div>
          </ul>
        ))
      ) : (
        <p className="no-data">No data available</p>
      )}
    </div>
  );
}