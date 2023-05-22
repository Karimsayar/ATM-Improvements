const ATMDeposit = ({ onChange, onSubmit, isDeposit }) => {
  const choice = ["Deposit", "Cash Back"];
  return (
    <label className="label huge">
      <h3>{choice[Number(!isDeposit)]}</h3>
      <input type="number" width="200" onChange={onChange} />
      <input type="submit" width="200" value="Submit" />
    </label>
  );
};

const Account = () => {
  let deposit = 0; // state of this transaction
  const [totalState, setTotalState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(true);

  let status = `Account Balance $${totalState}`;

  const handleChange = event => {
    console.log(`handleChange ${event.target.value}`);
    deposit = Number(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (isDeposit) {
      setTotalState(totalState + deposit);
    } else {
      if (deposit <= totalState) {
        setTotalState(totalState - deposit);
      } else {
        console.log("Insufficient funds for cash back withdrawal");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 id="total">{status}</h2>
      <button onClick={() => setIsDeposit(true)}>Deposit</button>
      <button onClick={() => setIsDeposit(false)}>Cash Back</button>
      <ATMDeposit onChange={handleChange} onSubmit={handleSubmit} isDeposit={isDeposit} />
    </form>
  );
};

// Render the Account component
ReactDOM.render(<Account />, document.getElementById("root"));





