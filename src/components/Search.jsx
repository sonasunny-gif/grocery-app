import React from 'react'
import Navigation from './Navigation'



const Search = () => {
  return (
    <div style={{
  backgroundImage: `url("https://img.freepik.com/premium-photo/blurry-background-brown-white-photo-persons-face_1034303-148866.jpg?semt=ais_items_boosted&w=740")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  minHeight: '100vh'
}}>
        <Navigation/>
        <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-dark">SEARCH</button>
                    </div>
                </div>
            </div>
        </div>
    </div></div>
  )
}

export default Search