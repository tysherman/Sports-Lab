// Deafault App component that all other compents are rendered through
function App(props) {
  return (
    <div>
      <h1>Welcome to the British and Irish Quidditch League Cup!</h1>
      <br />
      <img src="images\chudley.gif" />
      {/* <br />
      <h2>Vs.</h2>
       */}
      <br />
      <img scr="images\holyhead.gif" />
    </div>
  );
}

//Render the application
ReactDOM.render(<App />, document.getElementById("root"));
