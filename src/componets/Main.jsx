import { useGlobalContext } from "../utils/Context"

export const Main = () => {
  const { handleClick, objectMeme, handleInputChange, formText, meme } = useGlobalContext();
  const clicked = (e) => {
    e.preventDefault();
    handleClick();
  };
  return (
    <div className="container text-center  d-flex align-items-center position-absolute top-50 start-50 translate-middle overflow-hidden mt-5" style={{'marginTop': '200px'}}>
      <form className="w-100" onSubmit={clicked}>
        <div className="col-12 mt-5">
          <div className="row justify-content-center py-3">
            <div className="col-6">
              <input
                type="text"
                name="textTop"
                value={formText.textTop}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Top text"
              />
            </div>
            <div className="col-6">
              <input
                type="text"
                name="textBottom"
                value={formText.textBottom}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Bottom text"
              />
            </div>
          </div>
          <div className="row justify-content-center py-3">
            <div className="col-10 d-grid gap-2">
              <button onClick={clicked} className="btn text-white" style={{ background: "linear-gradient(90deg, rgba(103,34,128,1) 0%, rgba(166,38,211,1) 100%)" }}>
                Get a new meme image
              </button>
            </div>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-12 h-100 d-flex align-items-center justify-content-center position-relative overflow-hidden">
            <div className="z-3 d-flex align-items-start position-absolute top-0">
              <p className=""
                style={{
                  'color': 'white',
                  'fontSize': '35px',
                  'WebkitTextStrokeWidth': '2px',
                  'WebkitTextStrokeColor': 'black',
                  'fontWeight': '900',
                  'maxWidth': '30rem'
                }}>{meme.textTop}</p>
            </div>
            <img src={objectMeme.url} alt={objectMeme.name} style={{ maxWidth: '35rem', maxHeight: '50rem'}} />
            <div className="z-3 d-flex align-items-end position-absolute bottom-0">
              <p className=""
                style={{
                  'color': 'white',
                  'fontSize': '35px',
                  'WebkitTextStrokeWidth': '2px',
                  'WebkitTextStrokeColor': 'black',
                  'fontWeight': '900',
                  'maxWidth': '30rem'
                }}>{meme.textBottom}</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}