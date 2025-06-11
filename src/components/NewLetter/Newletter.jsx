import "./NewLetter.css";
const Newletter = () => {
  return (
    <div className="newletter">
      <h1>Get Exclusive offer your Email</h1>
      <p>subscribe to our newletter and stay update</p>
      <div>
        <input type="email" placeholder="Your Email id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Newletter;
