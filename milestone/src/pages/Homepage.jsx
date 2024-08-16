// HomePage.jsx
import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="bg-blue-600 w-full py-4">
        <h1 className="text-white text-3xl text-center">Invoice Application</h1>
      </header>
      <main className="flex flex-col items-center mt-10">
        <h2 className="text-2xl font-semibold mb-4">
          Welcome to the Invoice Application
        </h2>
        <p className="text-gray-700 mb-6">
          Manage your invoices efficiently and effortlessly.
        </p>
        <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Create New Invoice
        </button>
      </main>
      <footer className="bg-gray-800 w-full py-4 mt-auto">
        <p className="text-white text-center">
          &copy; 2023 Invoice Application. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
