import React from 'react'

import {DNA, Hourglass} from "react-loader-spinner"

function Spinner() {
  return (
    <div className="flex justify-center items-center">
      <div>
        <Hourglass
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={["#306cce", "#72a1ed"]}
        />
      </div>
    </div>
  );
}

export default Spinner
