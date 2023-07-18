// import React, { useState, useEffect } from 'react';
// import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';
// import { db } from '../firebaseConfige';


// function InputTodoList({ editData,setEditData,showDetails }) {
//   const [name, setName] = useState('');
//   const [task, setTask] = useState('');

//   useEffect(() => {
//     if (editData) {
//       setName(editData.name);
//       setTask(editData.task);
//     }
//   }, [editData]);

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleTaskChange = (event) => {
//     setTask(event.target.value);
//   };

//   const saveUser = async (e) => {
//     e.preventDefault();
//     const userCollectionRef = collection(db, 'users');

//     if (editData) {
//       const userRef = doc(userCollectionRef, editData.id);
//       await updateDoc(userRef, { name, task });
//     } else {
//       await addDoc(userCollectionRef, { name, task });
//     }
//     setName('');
//     setTask('');
//     setEditData()
//     showDetails()
//   };

//   return (
//     <div className=' h-32 w-[100vw]  flex justify-center '>
//       <div >
//       <form onSubmit={saveUser} className=' space-x-5 mt-10'>
//         <input
//           type="text"
//           value={name}
//           onChange={handleNameChange}
//           placeholder="Name"
//           className='h-10 w-96 bg-lime-100 rounded-lg'
//         />
//         <input
//           type="text"
//           value={task}
//           onChange={handleTaskChange}
//           placeholder="Task"
//           className='h-10 w-96 bg-lime-100 rounded-lg'
//         />
//         <button type="submit"  className='h-10 w-96 bg-green-700 rounded-lg'>{editData ? 'Update' : 'Add'}</button>
//       </form>
//       </div>
//       <div></div>
      
//     </div>
//   );
// }

// export default InputTodoList;
import React, { useState, useEffect } from 'react';
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebaseConfige';

function InputTodoList({ editData, setEditData, showDetails }) {
  const [name, setName] = useState('');
  const [task, setTask] = useState('');

  useEffect(() => {
    if (editData) {
      setName(editData.name);
      setTask(editData.task);
    }
  }, [editData]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const saveUser = async (e) => {
    e.preventDefault();
    const userCollectionRef = collection(db, 'users');

    if (editData) {
      const userRef = doc(userCollectionRef, editData.id);
      await updateDoc(userRef, { name, task });
    } else {
      await addDoc(userCollectionRef, { name, task });
    }
    setName('');
    setTask('');
    setEditData();
    showDetails();
  };

  return (
    <div className='flex justify-center'>
      <div className='w-full md:w-3/4 lg:w-1/2 '>
        <form onSubmit={saveUser} className='flex flex-col space-y-4'>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Name"
            className='h-10 px-4 bg-lime-100 rounded-lg'
          />
          <input
            type="text"
            value={task}
            onChange={handleTaskChange}
            placeholder="Task"
            className='h-10 px-4 bg-lime-100 rounded-lg'
          />
          <button type="submit" className='h-10 px-4 bg-green-700 rounded-lg text-white'>
            {editData ? 'Update' : 'Add'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default InputTodoList;

