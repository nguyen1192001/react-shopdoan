import React from 'react';

function Product_Banner() {
    return (
        <section className="section">
        <div className="product-banner">
          <div className="left">
            <img src="./image/test.png" alt="" />
          </div>
          <div className="right">
            <div className="content">
              <h2><span className="discount">70%</span>SALE OFF</h2>
              <h1>
                <span>Collect Your</span>
                <span>Kids Collection</span>
              </h1>
              <a href="/" className="btn">Shop now</a>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Product_Banner