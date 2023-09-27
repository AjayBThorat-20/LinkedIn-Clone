import React from 'react';
import cheerio from "cheerio";
import axios from "axios";
import Head from "next/head";
import Header from "../components/Header";
import Link from 'next/link';



class events extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      eventdata: [],
    }
  }

  refreshList() {
    axios.get(`https://cors-anywhere.herokuapp.com/https://www.techevents.online/` || "http://localhost:3000/")
      .then(html => {
        const eventdata = [];
        const $ = cheerio.load(html.data);

        $('div.row').each((_i, element) => {
          let eventd = {};;
          const photo = $(element)
            .prepend()
            .prepend()
            .find("div.col")
            .find("div.b-conference")
            .find("a")
            .find("div.image")
            .find("img")
            .attr("src");
          eventd.photo = photo;

          const header = $(element)
            .prepend()
            .find("div.col")
            .find("div.b-conference")
            .find("a")
            .find("div.h")
            .find("h4")
            .text();
          eventd.header = header;

          const links = $(element)
            .prepend()
            .find("div.col")
            .find("div.b-conference")
            .find("a")
            .attr("href");
          eventd.links = links;

          const dates = $(element)
            .prepend()
            .find("div.col")
            .find("div.b-conference")
            .find("a")
            .find("div.h")
            .find("p.meta")
            .find("span")
            .text()
            .slice(0, 14);
            // .replace('-', '/').split('')[0].replace('-', '/');
          eventd.dates = dates;

          // Main Console
          // console.log(photo);
          // console.log(header);
          // console.log(link);
          console.log("main dates : ", dates);
          // console.log("-----------------------\n");


          eventdata.push({
            ...eventd
          });
        });
        this.setState({ eventdata: [...eventdata], loading: false });
      })
      .catch(function (err) {
        console.log("crawl failed");
      });


  }

  componentDidMount() {
    this.refreshList();
  }

  render() {
    const { eventdata } = this.state;
    console.log(eventdata);


    return (
      <div className="space-y-10 relative">

        <Head>
          <title>Linkedin-Events</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>


        <Header />
        <main>

        <div className="item-center pl-5 pr-5">
                <div className="bg-white dark:bg-[#1D2226] py-2 rounded-lg space-y-2 overflow-hidden border border-gray-300 dark:border-none ">


          <div className="justify-center ">
            {this.state.loading ?

              <div className="justify-center items-center text-center "> 
              <h1 className="text-2xl font-bold">Loading...</h1>
               </div> :

              <div className="justify-center items-center">
                <div >
                  <div className="text-center">
                  <h1 className="text-3xl font-bold">Upcoming Events</h1>
                  </div>
                  
                  {/* {/* <div className=" flex flex-wrap"> */}
                  <div className="m-2 justify-center "> 

                    {eventdata.slice(0, 27).map((evdata, index) => {
                        if (evdata.photo === "") {
                          console.log("line no 26");
                          return null;
                      }
                      console.log("event date : ", evdata?.dates);
                      return (


                        <div key={index} className="float-left max-h-3xl max-w-3xl mb-3 justify-center items-center" >

                          <div className=" m-6 ">
                          <a href={evdata.links} target="_blank" >

                            <div className="text-center justify-center items-center">
                              <div className=" flex justify-center items-center"> 
                              <img src={evdata.photo} className="object-fill h-48 w-96 mt-3" alt="#" />
                              </div>
                              <h1 className="m-5 text-center">{evdata.header}</h1>
                              <p className="mb-5 text-center">{evdata.dates}</p>
                            </div>

                          </a>
                          </div>



                        </div>
                      );
                    })}
                  </div>
                  </div>
               </div>
            }
          </div>
          </div>
          </div>


        </main>
      </div>


    )
  }
}

export default events