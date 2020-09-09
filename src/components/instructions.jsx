import React from "react";

const instructions = () => {
  return (
    <div>
      <h1>Kakuro App</h1>
      <p>
        This app is to auto complete a kakuro board or verify that the board is
        correct
      </p>
      <br />
      <p>
        Please fill in the board using -1 to establish a blank half of
        a box, using 0 to establish an empty half of a box to be filled and place
        values in everything else say for instance you had a box with
        20/19 you would write in the textbox 20, 19 
      </p>
    </div>
  );
};


export default instructions;