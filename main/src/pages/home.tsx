import { Link } from "react-router";

export default function Home() {



    return (
        <div className="h-screen flex justify-center items-center flex-col">
            <h1 className="text-3xl">Welcome</h1>
            <Link to="/login" className="text-xl ml-2 text-blue-500">Login</Link>
            <Link to="/register" className="text-xl ml-2 text-blue-500">Register</Link>
        </div>
    );
}
