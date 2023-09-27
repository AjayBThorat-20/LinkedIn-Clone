import React from 'react';
import YouTube from 'react-youtube';

class Java extends React.Component {

  render() {

    const opts = {
      // scroll: 'y-axis',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        origin: 'http://localhost:3000'
      },
    };

    const video = ["yRpLlJmRo2w", "grEKMHGYyns", "Ae-r8hsbPUo", "hBh_CC5y8-s"];


    const javatext = ["Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere (WORA),meaning that compiled Java code can run on all platforms that support Java without the need to recompile. Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of the underlying computer architecture. The syntax of Java is similar to C and C++, but has fewer low-level facilities than either of them. The Java runtime provides dynamic capabilities (such as reflection and runtime code modification) that are typically not available in traditional compiled languages. As of 2019, Java was one of the most popular programming languages in use according to GitHub, particularly for client–server web applications, with a reported 9 million developers.",
                      "Java was originally developed by James Gosling at Sun Microsystems and released in May 1995 as a core component of Sun Microsystems' Java platform. The original and reference implementation Java compilers, virtual machines, and class libraries were originally released by Sun under proprietary licenses. As of May 2007, in compliance with the specifications of the Java Community Process, Sun had relicensed most of its Java technologies under the GPL-2.0-only license. Oracle offers its own HotSpot Java Virtual Machine, however the official reference implementation is the OpenJDK JVM which is free open-source software and used by most developers and is the default JVM for almost all Linux distributions.",
                    ]
    return (
      // <div className="justify-center flex float ">

      <div className="justify-center">

        <div className="items-center m-6">
          <h1 className="text-center text-3xl font-bold">Java</h1>
          <div className="ml-7 mr-7 mt-5">
          {javatext.map(javatext => <p className="indent-20 mt-3">{javatext}</p>)}
          </div>
        </div>


        <div className="overflow-x-scroll float flex aspect-w-16 aspect-h-9">

        {/* <YouTube videoId="FyBjKLBqZhM" opts={opts} onReady={this._onReady} />; */}
          {video.map(video => <YouTube videoId={video} opts={opts} onReady={this._onReady} className="m-2 " />)}


        </div>
      </div>

    

    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Java