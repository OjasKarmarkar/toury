import { Link } from "react-router-dom";

function ErrorScreen(params) {
  
  return (
    
    <div className="z-50 top-0 absolute h-screen bg-primary-white w-full text-accent" >
      <div class="flex items-center justify-center h-screen">
    
    <div class="text-5xl gap-x-6 flex flex-col md:flex-row font-semibold p-10">
      <div>404</div>
      <div className="hidden md:block border-l-2 border-solid h-24"></div>
      <div className="flex flex-col text-primary">
        <div className="hidden md:block">You Lost Your Trail !</div>
        
        <p className="py-4 text-xl">You are looking for something else , nomad !</p>
        <Link exact to="/" className="text-center text-xl bg-primary hover:bg-blue-700 text-white font-bold p-2 w-1/2 rounded-l">
  Go back home
</Link>
      </div>
    </div>
    
    </div>
    </div>
  );
}

export default ErrorScreen;
