import React from "react";
// import Image from 'next/image';


function Category() {
  return (
    <div className="container">
      <div className="col">
        <h1>Categories</h1>
        <img
          className="img"
          src="https://super-static-assets.s3.amazonaws.com/2eb0ba56-b6df-40ba-bbd5-2aa0f4a70f67/images/e5045bb3-83b6-419a-957d-e472be2e3df1.jpg"
          alt="img"
          width={500}
          height={600}
        />
        <h3>Design</h3>
        <img
          className="img"
          src="https://miro.medium.com/max/12000/1*avlg0U4o26ozRD2Ft6DT9Q.jpeg"
          alt="img"
          width={500}
          height={600}
        />
        <h3>Department & IT</h3>
        <img
          className="img"
          src="https://static001.geekbang.org/infoq/dd/dd1fe1c6f074f4085029c007c79a0eed.jpeg"
          alt="img"
          width={500}
          height={600}
        />
        <h3>Video & Audio</h3>
      </div>
      <div className="col">
        <img
          className="img"
          src="https://miro.medium.com/max/9796/0*dzVsd1pvyYupUG54"
          alt="img"
          width={500}
          height={600}
        />
        <h3>Translation</h3>
        <img
          className="img"
          src="https://lh3.googleusercontent.com/proxy/9oX8NiPmPqlB9IFGVBPQdMOTMNbx9cko886odMaHlWt8SGCUKTHd2ZTWeHP2FsTbTVbHO13p0o4l71cpfe7QFYRLwRgE5wSe8IKChBAP8iuWM9GLd2IbL6hfZJHNt6x3sZ4zVBc1KKAQEQyeZKy1bN_IxBW6"
          alt="img"
          width={500}
          height={600}
        />
        <h3>Marketing</h3>
        <img
          className="img"
          src="https://images.squarespace-cdn.com/content/v1/56c78fa1a3360c4744eb2a90/1542228847150-3B8KGYXLG6YY4CD3JHO1/stil-336189-unsplash.jpg"
          alt="img"
          width={500}
          height={600}
        />
        <h3>Life Style</h3>
        <button className="btn">
          View all
          <img className="icon" src="https://image.flaticon.com/icons/png/512/545/545682.png" />
        </button>
      </div>
    </div>
  );
}

export default Category;