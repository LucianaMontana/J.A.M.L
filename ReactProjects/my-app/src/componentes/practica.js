var React = require('react');
var InputItem = require('');
const { render } = require('react-dom');

var InputBox = React.CreateClass({  
    onClick: function(event){
        console.log();
    }


      render: function cerrarSesion(){
          return(
              <div className='CerrarSesion'>
                <InputItem/>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={this.onClick}>
                 Button
                </button>
             </div>
          );
      }
  }
);


module.exports = InputBox;

