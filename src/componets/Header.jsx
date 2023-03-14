import trollface from '../images/trollface.png';
export const Header = () => {
  return (
    <div style={{ background: "rgb(103,34,128)", background: "linear-gradient(90deg, rgba(103,34,128,1) 0%, rgba(166,38,211,1) 100%)" }}>
      <div className="container-fluid col-11">
        <header className="d-flex flex-wrap justify-content-between py-3">
          <button className="border-0 bg-transparent d-flex align-items-center mb-md-0 me-md-auto text-decoration-none">
            <img src={trollface} height="45"></img>
            <span className="fs-4 text-white fw-semibold">Meme Generator</span>
          </button>
          <div className="text-white py-2 align-self-center">React Proyect</div>
        </header>
      </div>
    </div>
  )
}