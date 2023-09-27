import React from 'react';
import Head from "next/head";
import Header from "../components/Header";
import Python from '../components/language/Python';
import Java from '../components/language/Java';


class about extends React.Component {


  render() {


    return (
      <div className="space-y-10 relative">

        <Head>
          <title>Linkedin-Course</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>


        <Header />
        <main>


          <div className="justify-center">
            <div className="item-center pl-5 pr-5">
              <div className="bg-white dark:bg-[#1D2226] py-2 rounded-lg space-y-2 overflow-hidden border border-gray-300 dark:border-none">

                {/* <div className=" overflow-y-scroll"> */}
                <div className="m-8">
                  <Python className="ml-10 mr-10 " />
                </div>
                <div className="m-8">
                  <Java className="ml-10 mr-10 " />
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </main>
      </div>


    )
  }
}

export default about