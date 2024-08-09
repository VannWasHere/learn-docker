import Pocketbase from 'pocketbase';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

    const navigate = useNavigate()

    const pb = new Pocketbase(import.meta.env.VITE_POCKETBASE)

    const loginGoogle = async () => {
        let response = null;
        try {
            response = await pb.collection("users").authWithOAuth2({provider: "google"})
        } catch(err) {
            console.error(err);
        }
        finally {
            console.log(response);
            navigate('/')
        }
    }

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="bg-slate-100 text-black border border-white w-1/5">
                <div className="w-full bg-black text-white p-6">
                    <h1 className="text-2xl uppercase text-center">Login Form</h1>
                </div>
                <div className="w-full p-2">
                    <p className="text-sm">Please fill out this form below!</p>
                    <section className="mt-4">
                        <div>
                            <label htmlFor="Email">Email <span className="text-red-600">*</span></label>
                            <input type="email" name="email" className="block p-1 w-full bg-transparent border-b-2 border-black focus:outline-none" />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="Password">Password <span className="text-red-600">*</span></label>
                            <input type="password" name="password" className="block p-1 w-full bg-transparent border-b-2 border-black focus:outline-none" />
                        </div>
                        <button className="w-full p-2 bg-green-700 text-white mt-4">Submit</button>
                        <button className="w-full p-2 bg-white font-semibold mt-4" onClick={loginGoogle}>Continue with google</button>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;