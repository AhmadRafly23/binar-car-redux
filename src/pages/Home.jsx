import React, { useState } from "react";
import "./Home.css";
import { MdPeopleOutline } from "react-icons/md";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState(null);
  const changeData = (e) => {
    setData(e.target.value);
  };

  console.log(data);
  return (
    <>
      {/* Navbar */}
      <section id="navbar">
        <div className="container-fluid m-0 p-0">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <a className="navbar-brand" href="#">
              BinarCar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav">
                <a className="nav-link mr-4" href="#">
                  Our Services
                </a>
                <a className="nav-link mr-4" href="#">
                  Why Us
                </a>
                <a className="nav-link mr-4" href="#">
                  Testimonial
                </a>
                <a className="nav-link mr-4" href="#">
                  FAQ
                </a>
                <a className="nav-link btn" href="#">
                  Register
                </a>
              </div>
            </div>
          </nav>
        </div>
      </section>

      {/* hero-section */}
      <section id="hero-section">
        <div className="container-fluid p-0 m-0 pt-5">
          <div className="row m-0 p-0">
            <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
              <div className="content-hero">
                <h1 className="heading-hero">
                  Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
                </h1>
                <p className="desc-hero">
                  Selamat datang di Binar Car Rental. Kami menyediakan mobil
                  kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                  kebutuhanmu untuk sewa mobil selama 24 jam.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <img className="w-100" src="./img/img_car.png" alt="img-car" />
            </div>
          </div>
        </div>
      </section>

      {/* search-section */}
      <div id="search-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center content-search">
              <div className="item-search">
                <p className="category">Tipe Driver</p>
                <select
                  className="form-control btn-driver"
                  onChange={changeData}
                >
                  <option value="null">Pilih Tipe Driver</option>
                  <option value="true">Dengan Sopir</option>
                  <option value="false">Tanpa Sopir (Lepas Kunci)</option>
                </select>
                <i className="fa-solid fa-angle-down"></i>
              </div>
              <div className="item-search">
                <p className="category">Tanggal</p>
                <div className="btn-date">
                  <input
                    type="date"
                    className="form-control px-2"
                    placeholder="Pilih Tanggal"
                  />
                </div>
                <i className="fa-regular fa-calendar-check"></i>
              </div>
              <div className="item-search">
                <p className="category">Waktu Jemput/Ambil</p>
                <select className="form-control btn-time">
                  <option value="">Pilih Waktu</option>
                  <option value="1">08.00 WIB</option>
                  <option value="2">09.00 WIB</option>
                  <option value="2">10.00 WIB</option>
                  <option value="2">11.00 WIB</option>
                  <option value="2">12.00 WIB</option>
                </select>
                <i class="fa-regular fa-clock"></i>
              </div>
              <div className="item-search">
                <p className="category ">Jumlah Penumpang (optional)</p>
                <form className="form-penumpang" action="">
                  <label className="input-penumpang">
                    <input
                      type="text"
                      placeholder="Jumlah Penumpang"
                      style={{
                        width: "160px",
                        border: "none",
                        fontSize: "12px",
                      }}
                    />
                    <MdPeopleOutline className="collapsed" />
                  </label>
                </form>
              </div>
              <div className="button-search">
                <Link className="btn" to={`/search-result/${data}`}>
                  Cari Mobil
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer-section */}
      <div id="footer-section">
        <div className="container py-5 mt-5">
          <div className="row">
            <div className="col-md-4">
              <p className="w-75">
                Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
              </p>
              <p>binarcarrental@gmail.com</p>
              <p>081-233-334-808</p>
            </div>
            <div className="col-md-2">
              <p className="font-weight-bold">Our services</p>
              <p className="font-weight-bold">Why Us</p>
              <p className="font-weight-bold">Testimonial</p>
              <p className="font-weight-bold">FAQ</p>
            </div>
            <div className="col-md-3">
              <p>Connect with us</p>
              <div>
                <a href="https://imgbb.com/">
                  <img
                    src="https://i.ibb.co/HDLm5Gk/icon-facebook.png"
                    alt="icon-facebook"
                    border="0"
                  />
                </a>
                <a href="https://imgbb.com/">
                  <img
                    src="https://i.ibb.co/bsJjK8F/icon-instagram.png"
                    alt="icon-instagram"
                    border="0"
                  />
                </a>
                <a href="https://imgbb.com/">
                  <img
                    src="https://i.ibb.co/jLjDcp2/icon-mail.png"
                    alt="icon-mail"
                    border="0"
                  />
                </a>
                <a href="https://imgbb.com/">
                  <img
                    src="https://i.ibb.co/t2B4XC6/icon-twitch.png"
                    alt="icon-twitch"
                    border="0"
                  />
                </a>
                <a href="https://imgbb.com/">
                  <img
                    src="https://i.ibb.co/Tmqs9XX/icon-twitter.png"
                    alt="icon-twitter"
                    border="0"
                  />
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <p>Copyright Binar 2022</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
