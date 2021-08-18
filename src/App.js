import logo from './logo.svg';
import './App.css';

function App() {
  return (
<div className="container wrapper">
    <div className="header">
      <img src="./images/logo.svg"  alt="logo-image" className="img-respon"/>
    </div>
    <div className="calculator-body">
      <div className="row">
        <div className="col-sm-6 control">
          Bill
          <div className="form-group mt-2">
            <input type="number" className="bill-input form-control" />
          </div>
          <div className="form-group mt-4">
            Select Tip %
            <div className="grid-container-button mt-3">
              <div className="grid-item">
                <button className="btn btn-default">5%</button>
              </div>
              <div className="grid-item">
                <button className="btn btn-default">5%</button>
              </div>
              <div className="grid-item">
                <button className="btn btn-default">5%</button>
              </div>
              <div className="grid-item">
                <button className="btn btn-default">5%</button>
              </div>
              <div className="grid-item">
                <button className="btn btn-default">5%</button>
              </div>
              <div className="grid-item">
                <button className="btn btn-default">5%</button>
              </div>
            </div>
          </div>
          <div className="form-group mt-4">
            Number of People
            <div className="form-group mt-2">
              <input type="number" className="bill-input user form-control" />
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
              <div className="amount">$0.00</div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-6 text-start">
              <div className="label">Tip amount</div>
              <div className="sub-label">/person</div>
            </div>
            <div className="col-6 text-end">
              <div className="amount">$0.00</div>
            </div>
          </div>
        </div>
        <button className="btn btn-default mt-5">Reset</button>
        </div>
        </div>
        </div>
  </div>
  );
}

export default App;
