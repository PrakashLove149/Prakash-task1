
import { Dialog } from "@headlessui/react";
import { useContext, useState } from "react";
import { dataProvider } from "../ContextAPI/ContextProvider";
import ClearIcon from '@mui/icons-material/Clear';

export default function Modal() {
  const { isOpen, closeFeedback } = useContext(dataProvider);

  const [data, setData] = useState({
    FirstName: "",
    LastNmae: "",
    Address: "",
    Country: "",
    EmailId: "",
    Phone_Number: "",
    message: "",
  });

  const [error, setError] = useState({});

  function getData(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function postData(e) {
    e.preventDefault();

    const validationErrors = {};
    if (!data.FirstName.trim()) {
      validationErrors.FirstName = "User Name Is Required";
    } else if (!data.FirstName.match(/^[a-zA-Z ]*$/)) {
      validationErrors.FirstName = "User Name Is Not Valid";
    } else if (data.FirstName.length < 5) {
      validationErrors.FirstName = "User Name must be at least 5 characters";
    }
    if (data.Phone_Number.length !== 10) {
      validationErrors.Phone_Number = "Please Enter Valid Number";
    }
    if (!data.EmailId.trim()) {
      validationErrors.EmailId = "User Email Is Required";
    }

    setError(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form Successfully Submitted");
      setData({
        FirstName: "",
        LastNmae: "",
        Address: "",
        Country: "",
        EmailId: "",
        Phone_Number: "",
        message: "",
      });
      closeFeedback()
    }
  }

  return (
    <>
      <Dialog open={isOpen} onClose={closeFeedback}>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen ">
            <div className="bg-gray-300 rounded-2xl p-6 max-w-2xl w-full mx-auto">
              <div className="relative">
                <ClearIcon
                  className="cursor-pointer text-2xl text-red-400 absolute top-0 right-0"
                  onClick={closeFeedback}
                />
              </div>
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Thank you so much for taking the time!
              </h3>
              <p className="mt-2 text-md text-gray-500">Please provide the below details!</p>

              <form onSubmit={(e) => postData(e)} className="mt-4">
                <div className="mb-4">
                  <label htmlFor="FirstName" className="block text-gray-700">
                    First Name:
                  </label>
                  <input
                    type="text"
                    id="FirstName"
                    name="FirstName"
                    placeholder="John"
                    value={data.FirstName}
                    onChange={getData}
                    className="mt-1 p-2 w-full border rounded outline-none rounded-2xl"
                  />
                  <span className="text-red-500">{error.FirstName}</span>
                </div>

                <div className="mb-4">
                  <label htmlFor="LastNmae" className="block text-gray-700">
                    Last Name:
                  </label>
                  <input
                    type="text"
                    id="LastNmae"
                    name="LastNmae"
                    placeholder="Doe"
                    value={data.LastNmae}
                    onChange={getData}
                    className="mt-1 p-2 w-full border rounded outline-none rounded-2xl"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="Address" className="block text-gray-700">
                    Address:
                  </label>
                  <input
                    type="text"
                    id="Address"
                    name="Address"
                    placeholder="Enter Your full postal Address"
                    value={data.Address}
                    onChange={getData}
                    className="mt-1 p-2 w-full border rounded outline-none rounded-2xl"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="Country" className="block text-gray-700">
                    Country:
                  </label>
                  <input
                    type="text"
                    id="Country"
                    name="Country"
                    placeholder="India"
                    value={data.Country}
                    onChange={getData}
                    className="mt-1 p-2 w-full border rounded outline-none rounded-2xl"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="EmailId" className="block text-gray-700">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="EmailId"
                    name="EmailId"
                    placeholder="Example@sample.com"
                    value={data.EmailId}
                    onChange={getData}
                    className="mt-1 p-2 w-full border rounded outline-none rounded-2xl"
                  />
                  <span className="text-red-500">{error.EmailId}</span>
                </div>

                <div className="mb-4">
                  <label htmlFor="Phone_Number" className="block text-gray-700">
                    Phone Number:
                  </label>
                  <input
                    type="tel"
                    id="Phone_Number"
                    name="Phone_Number"
                    placeholder="+91 1234567890"
                    value={data.Phone_Number}
                    onChange={getData}
                    className="mt-1 p-2 w-full border rounded outline-none rounded-2xl"
                  />
                  <span className="text-red-500">{error.Phone_Number}</span>
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700">
                    Message:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Messege......."
                    value={data.message}
                    onChange={getData}
                    className="mt-1 p-2 w-full border rounded resize-none outline-none rounded-2xl"
                    rows="4"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 rounded-2xl"
                >
                  Submit Feedback
                </button>
              </form>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}
