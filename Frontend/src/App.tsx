/* eslint-disable react-hooks/exhaustive-deps */
import Pocketbase, { RecordModel } from 'pocketbase';
import { useEffect, useState } from 'react';
import ListComponent from './components/ListComponent';

const App = () => {
  const pb = new Pocketbase(import.meta.env.VITE_POCKETBASE)
  
  const [userList, setUserList] = useState<RecordModel[] | null>(null)
  
  useEffect(() => {
    const fetchUser = async() => {
      try {
      const records = await pb.collection('users').getFullList();
        setUserList(records)
        console.log(userList);
      } catch (err) {
        console.error(err);
      }
    }
    fetchUser()
  }, [])

  return (
    <div className="p-2 w-full">
      <h1 className='text-4xl font-semibold uppercase tracking-wider'>User List</h1>
      {
        userList ? (
          userList.map((user, key) => {
            return <ListComponent item={user} key={key} />
          })
        ) : (
          <h1>Loading...</h1>
        )
      }
    </div>
  )
}

export default App;