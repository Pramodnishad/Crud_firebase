import React, { useEffect, useState } from 'react';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import InputTodoList from './InputTodoList';
import { db } from '../firebaseConfige';

function DisplayTodo() {
  const [todos, setTodos] = useState([]);
  const [editData, setEditData] = useState("");
  const userCollectionRef = collection(db, 'users');

  const showDetails = async () => {
    const querySnapshot = await getDocs(userCollectionRef);
    const showDetails = querySnapshot.docs.map((doc, index) => ({
      id: doc.id,
      ...doc.data()
    }));
    setTodos(showDetails)
  }

  const deleteDetails = async (id) => {
    const userRef = doc(userCollectionRef, id)
    await deleteDoc(userRef);
    showDetails()
  }

  const editDetails = (todo) => {
    setEditData(todo)
  }

  useEffect(() => {
    showDetails();
  }, [])

  return (
    <div className='grid'>
      <h1 className='text-4xl text-center font-bold h-20 mt-5'>Todo App</h1>
      <InputTodoList editData={editData} setEditData={setEditData} showDetails={showDetails} />
      <h1 className='text-center text-4xl font-semibold text-black mt-10'>Display Stored Records</h1>
      {todos.map((todo) => (
        <div key={todo.id} className='w-full md:w-[90%] lg:w-[80%] mx-auto mt-8'>
          <table className='border w-full'>
            <thead className='bg-slate-500 border text-xl'>
              <tr>
                <th className='p-2 text-center w-4/12'>Name</th>
                <th className='p-2 text-center w-4/12'>Task</th>
                <th className='p-2 text-center '>Update</th>
                <th className='p-2 text-center '>Delete</th>

              </tr>
            </thead>
            <tbody className='text-center'>
              <tr>
                <td className='p-2 border w-4/12'>{todo.name}</td>
                <td className='p-2 border w-4/12'>{todo.task}</td>
                <td className='border '>
                  <button className='p-1 text-white bg-blue-950 w-24 rounded-lg ' onClick={() => editDetails(todo)}>Edit</button>
                </td>
                <td className='border '>
                  <button className='p-1 text-white bg-red-500 w-24 rounded-lg' onClick={() => deleteDetails(todo.id)}>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  )
}

export default DisplayTodo;


