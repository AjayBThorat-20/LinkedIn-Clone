import React from 'react';
import YouTube from 'react-youtube';

class Python extends React.Component {


  render() {


    const opts = {
      // height: '390',
      // width: '640',
      // scroll: 'y-axis',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters,
        autoplay: 0,
        origin: 'http://localhost:3000',

      },
    };

    const videos = ["gfDE2a7MKjA", "rfscVS0vtbw", "PtQiiknWUcI", "_uQrJ0TkZlc"];


    const pythontext = ["Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Its language constructs and object-oriented approach aim to help programmers write clear, logical code for small- and large-scale projects.",
                        "Python is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly procedural), object-oriented and functional programming. It is often described as a 'batteries included' language due to its comprehensive standard library.",
                        "Guido van Rossum began working on Python in the late 1980s as a successor to the ABC programming language and first released it in 1991 as Python 0.9.0. Python 2.0 was released in 2000 and introduced new features such as list comprehensions, cycle-detecting garbage collection, reference counting, and Unicode support. Python 3.0, released in 2008, was a major revision that is not completely backward-compatible with earlier versions. Python 2 was discontinued version 2.7.18 in 2020."];







                        
    return (

      <div className="justify-center">

        <div className="items-center m-6">
          <h1 className="text-center text-3xl font-bold">Python</h1>
          <div className="ml-7 mr-7 mt-5">
            {pythontext.map(pythontext => <p className="indent-20 mt-3">{pythontext}</p>)}
          </div>
        </div>


        <div className="overflow-x-scroll float flex aspect-w-16 aspect-h-9">

          {/* <YouTube videoId="FyBjKLBqZhM" opts={opts} onReady={this._onReady} />; */}
          {videos.map(videos => <YouTube videoId={videos} opts={opts} onReady={this._onReady} className="m-2" />)}

        </div>
      </div>



    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Python