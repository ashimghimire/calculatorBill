import React ,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import iconDollar from './images/icon-dollar.svg';
import iconUser from './images/icon-person.svg';

function App() {

const [BillInput, setBillInput]=useState(0);

const [tip, setTip]=useState(0);
const [people, setNumPeople]=useState(0);
  const styleBillInput={
  backgroundImage:`url(${iconDollar})`
}
const styleIconUser={
  backgroundImage:`url(${iconUser})`
}

const handleChange=(e,type)=>{
  let obj=parseInt(e.target.value);
  switch(type){
    case 'bill':
    setBillInput(obj);
    break;
    case 'tip':
      setTip(obj);
      break;
    case 'num_people':
      setNumPeople(obj)
  }
 
}

const handleTipClick=(value)=>{
  setTip(value);

}

const calculateTipAmount = ( ) => {
  return ((BillInput*(tip/100)))
}

const calculateTotal = ()=>{
  return (BillInput*people)+calculateTipAmount();
}

const reset = ()=>{
  setBillInput(0);
  setNumPeople(0);
  setTip(0);
}


return (
<div className="">
    <div className="header">
      <img src="./images/logo.svg"  alt="logo-image" className="img-respon"/>
    </div>
    <div className="calculator-body">
      <div className="row">
        <div className="col-sm-6 control">
          Bill
          <div className="form-group mt-2">
            <input type="number" className="bill-input form-control" value={BillInput} onChange={(event)=>handleChange(event,'bill')} style={styleBillInput} />
          </div>
          <div className="form-group mt-4">
            Select Tip %
            <div className="grid-container-button mt-3">
              <div className="grid-item">
                <button className="btn btn-default" onClick={(event)=>handleTipClick(5)}>5%</button>
              </div>
              <div className="grid-item">
                <button className="btn btn-default" onClick={(event)=>handleTipClick(10)}>10%</button>
              </div>
              <div className="grid-item">
                <button className="btn btn-default" onClick={(event)=>handleTipClick(15)}>15%</button>
              </div>
              <div className="grid-item">
                <button className="btn btn-default" onClick={(event)=>handleTipClick(25)}>25%</button>
              </div>
              <div className="grid-item">
                <button className="btn btn-default" onClick={(event)=>handleTipClick(50)}>50%</button>
              </div>
              <div className="grid-item">
              <input type="number" placeholder="Custom" value={tip} onChange={(event)=>handleChange(event,'tip')} className="bill-input form-control"/>
              </div>
            </div>
          </div>
          <div className="form-group mt-4">
            Number of People
            <div className="form-group mt-2">
              <input type="number" className="bill-input user form-control" value={people} onChange={(event)=>handleChange(event,'num_people')}  style={styleIconUser}/>
            </div>
          </div>

        </div>
        <div className="col-md-6 display p-5">
          <div className="container m-0 p-0">
          <div className="row">
            <div className="col-6 text-start">
              <div className="label">Tip amount</div>
              <div className="sub-label">/person</div>
            </div>
            <div className="col-6 text-end">
              <div className="amount">${calculateTipAmount()}</div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-6 text-start">
              <div className="label">Total amount</div>
              <div className="sub-label">/person</div>
            </div>
            <div className="col-6 text-end">
              <div className="amount">${calculateTotal()}</div>
            </div>
          </div>
        </div>
        <button className="btn btn-default mt-5" onClick={()=>reset()}>Reset</button>
        </div>
        </div>
        </div>
  </div>
  );
}

export default App;
