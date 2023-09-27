import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import Image from "next/image";

function Dummy2() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  const pgtext = ["people you may know from Machine Learning and Data Science"];

  useEffect(() => {
    setLoading(true)
    fetch('https://randomuser.me/api/?results=5000')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)

      })
  }, [])

  // console.log(data);
  // if (isLoading) return <p>Loading...</p>
  // if (!data) return <p>No profile data</p>

  if (isLoading) return null;
  if (!data) return null;

  return (
    <div className="justify-center">

      <div className="items-center m-6">
        <div className="ml-2 mr-7 mt-5">
        {pgtext.map(pgtxt => <h3><b>{pgtxt}</b></h3>)}
          {/* {pythontext.map(pythontext => <p className="indent-20 mt-3">{pythontext}</p>)} */}
        </div>
      </div>

      <div className="flex items-center font-bold px-2 overflow-x-scroll">
        {(((data.results).slice(16, 30))).map((result, index) => (

      // {((data.results)).map((result, index) => ( 
          <div key={index} className="min-w-max max-w-lg float-left mr-2 ml-2  ">
            <div className="bg-white dark:bg-[#1D2226] rounded-lg overflow-hidden relative flex flex-col items-center text-center border border-gray-300 dark:border-[#dfdbdb]">
              <div className="relative w-full h-14">
                <Image src="https://rb.gy/i26zak" layout="fill" priority />
              </div>
              <Avatar
                src={result.picture.medium}
                className="!h-14 !w-14 !border-2 !absolute !top-4 !cursor-pointer"
              />
              <div className="mt-5 py-4 space-x-0.5">
                <h4 className="hover:underline decoration-purple-700 underline-offset-1 cursor-pointer p-2">
                  <span className="ml-2">{result.name.title}</span><span className="ml-2">{result.name.first}</span><span className="ml-2">{result.name.last}</span>
                </h4>
                <p className="text-black/60 dark:text-white/75 text-sm p-2">
                  {result.email}
                </p>

                <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 mt-2 mb-2 rounded-full">
                Connect
                </button>
              </div>


            </div>
          </div>

        ))}</div>

    </div>
  )
}

export default Dummy2


