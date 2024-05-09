import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <section className=" flex justify-center items-center max-w-7xl px-5 mx-auto mt-32">
      <div className="flex">
        <div>
          <img src="/error.png" alt="error" />
        </div>
        <div className="flex flex-col py-3 gap-2">
          <div>
            <h1 className="text-8xl font-thin">404</h1>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold">Ooops!</span>
            <span className="text-3xl font-bold">Page Not Found</span>
          </div>
          <p>This page does not exist or has been removed!</p>
          <p>We suggest that you go back to Home</p>
          <Link to={""}>
            <button className="rounded-xl bg-indigo-500 py-3 max-w-sm px-6 text-white">
              Back to home
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
