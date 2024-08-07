import Pocketbase from 'pocketbase';

const App = () => {
  const pb = new Pocketbase("http://127.0.0.1:8090")
  const loginGoogle = async () => {
    const response = await pb.collection("users").authWithOAuth2({provider: "google"})
    console.log(response)
  }

  return (
    <div className="">
      <button className='p-2 w-1/3' onClick={loginGoogle}>Login Google</button>
    </div>
  )
}

export default App;