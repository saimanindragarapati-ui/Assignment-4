export default function LandingPageAdmin({ user, onLogout }) {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-green-100">
      <h1 className="text-3xl font-bold mb-4">Welcome Admin, {user?.email}</h1>
      <p className="text-lg">This is the Admin Dashboard of Hospital Management System.</p>
      <button
        className="mt-6 bg-red-500 text-white px-4 py-2 rounded"
        onClick={onLogout}
      >
        Logout
      </button>
    </div>
  );
}