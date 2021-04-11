//var React = require('react');
import React from 'react';
//var ReactDOM = require('react-dom');
import ReactDOM from 'react-dom';
import App from './App';
//import App from './App';
//import './index.css';


// ReactDOM.render( <React.Fragment>
//   <h1> Prantik Mukherjee </h1>
//   <h2> Prantik Mukherjee </h2>
//   <h3> Prantik Mukherjee </h3>
//   </React.Fragment>,
//   document.getElementById('root')
//   );


// const fname ='Prantik'
// const lname ='Mukherjee'


// ReactDOM.render( <React.Fragment>
//   <h1>{`My name is ${fname} ${lname}`}</h1>
//   <h2> Prantik Mukherjee </h2>
//   <h3> Prantik Mukherjee </h3>
//   </React.Fragment>,
//   document.getElementById('root')
//   );



// var today = new Date();
// var date = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate();
// var time = today.getHours() + ':' + today.getMinutes()+ ':' + today.getSeconds();
// const name = 'Prantik Mukherjee'

// ReactDOM.render(<React.Fragment>
//   <h1>Hey, It's Prantik Mukherjee</h1>
//   <p>{`Current Date is ${date}`}</p>
//   <p>{`Current Time is ${time}`}</p>
// </React.Fragment>,
//   document.getElementById('root')
// );


// const name = 'Prantik Mukherjee';
// const img1 ="https://picsum.photos/200/300";
// const img2 ="https://picsum.photos/250/300";
// const img3 ="https://picsum.photos/300/300";


// ReactDOM.render(<React.Fragment>
//   <h1 className="heading">Hey, It's {name}</h1>
//   <a href="https://www.google.com/" target="_blank">
//   <div className="img_div">
//   <img src={img1}/>
//   <img src={img2}/>
//   <img src={img3}/>
//   </div>

//   </a>
// </React.Fragment>,
//   document.getElementById('root')
// );

// let currDate = new Date();
// currDate = currDate.getHours();
// let greetings = '';
// const cssStyle = {};

// if (currDate > 1 && currDate < 12) {
//   greetings = 'Good Morning';
//   cssStyle.color = 'green'
// } else if (currDate >= 12 && currDate < 19) {
//   greetings = 'Good Afternoon';
//   cssStyle.color = 'orange'
// }
// else {
//   greetings = 'Good Night';
//   cssStyle.color = 'black'
// }


// ReactDOM.render(<React.Fragment>
//   <div>
//     <h1> Hello Sir, <span style={cssStyle}>{greetings}</span></h1>
//   </div>
// </React.Fragment>,
//   document.getElementById('root')
// );

ReactDOM.render(<React.Fragment>
  <App />
</React.Fragment>,
  document.getElementById('root')
);





