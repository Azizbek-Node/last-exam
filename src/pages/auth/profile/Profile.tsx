import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/auth/sign-in");
      return;
    }

    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    alert("Logged out successfully!");
    navigate("/sign-up");
  };

  if (!user) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white p-4 text-center text-lg font-semibold">
        Profile
      </header>

      <div className="flex flex-1 flex-col md:flex-row p-4 md:p-10">
        <aside className="w-full md:w-1/4 bg-white shadow-md p-5 rounded-lg mb-4 md:mb-0">
          <h3 className="text-lg font-semibold text-red-500 mb-4">Manage My Account</h3>
          <ul className="space-y-2">
            <li className="text-red-500 font-medium cursor-pointer">My Profile</li>
            <li className="text-gray-600 cursor-pointer">Address Book</li>
            <li className="text-gray-600 cursor-pointer">My Payment Options</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-700 mt-6">My Orders</h3>
          <ul className="space-y-2">
            <li className="text-gray-600 cursor-pointer">My Returns</li>
            <li className="text-gray-600 cursor-pointer">My Cancellations</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-700 mt-6">My Wishlist</h3>

          <button
            onClick={handleLogout}
            className="mt-6 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        </aside>

        <div className="flex-1 bg-white shadow-md rounded-lg p-8 ml-0 md:ml-6">
          <h2 className="text-xl font-bold text-red-500 mb-5">Edit Your Profile</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-gray-600 text-sm">First Name</label>
              <input type="text" value={user.firstName} className="w-full p-2 border rounded bg-gray-100" readOnly />
            </div>

            <div>
              <label className="text-gray-600 text-sm">Last Name</label>
              <input type="text" value={user.lastName} className="w-full p-2 border rounded bg-gray-100" readOnly />
            </div>

            <div>
              <label className="text-gray-600 text-sm">Email</label>
              <input type="email" value={user.email} className="w-full p-2 border rounded bg-gray-100" readOnly />
            </div>

            <div>
              <label className="text-gray-600 text-sm">Username</label>
              <input type="text" value={user.username} className="w-full p-2 border rounded bg-gray-100" readOnly />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
