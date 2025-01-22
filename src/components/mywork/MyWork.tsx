function MyWork() {
  return (
    <div style={{ height: "1000px", width: "100%" }}>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            {/* <img src="..." className="d-block w-100" alt="..."></img> */}
            <div style={{height:'100px', width:'100%', backgroundColor:'black'}}></div>
          </div>
          <div className="carousel-item">
          <div style={{height:'100px', width:'100%', backgroundColor:'pink'}}></div>
          </div>
          <div className="carousel-item">
          <div style={{height:'100px', width:'100%', backgroundColor:'green'}}></div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
export default MyWork;
