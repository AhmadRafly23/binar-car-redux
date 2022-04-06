import React, { useState } from "react";
import "./Home.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { MdOutlineDateRange, MdPeopleOutline } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Home() {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const handleCheckInDate = (date) => {
    setCheckInDate(date);
    setCheckOutDate(null);
  };
  return (
    <>
      {/* Navbar */}
      <section id="navbar">
        <div className="container-fluid m-0 p-0">
          <nav className="navbar navbar-expand-lg navbar-light">
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
                <div className="dropdown">
                  <button
                    className="btn-search w-100"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pilih Tipe Driver
                    <FaAngleUp className="expanded" />
                    <FaAngleDown className="collapsed" />
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <p className="dropdown-item">Dengan Sopir</p>
                    <p className="dropdown-item">Tanpa Sopir (Lepas Kunci)</p>
                  </div>
                </div>
              </div>
              <div className="item-search">
                <p className="category">Tanggal</p>
                <div className="dropdown">
                  <button
                    className="btn-search w-100"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pilih Tanggal
                    <MdOutlineDateRange className="expanded" />
                    <MdOutlineDateRange className="collapsed" />
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <p className="dropdown-item">True</p>
                    <p className="dropdown-item">False</p>
                  </div>
                </div>
                {/* <div>
                  <div>
                    <DatePicker
                      placeholder="hallooo"
                      selected={checkInDate}
                      onChange={handleCheckInDate}
                    />
                  </div>
                </div> */}
              </div>
              <div className="item-search">
                <p className="category">Waktu Jemput/Ambil</p>
                <div className="dropdown">
                  <button
                    className="btn-search w-100"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pilih Waktu
                    <FaAngleUp className="expanded" />
                    <IoMdTime className="collapsed" />
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <div className="dropdown-item">
                      <p>08.00</p>
                      <p>WIB</p>
                    </div>
                    <div className="dropdown-item">
                      <p>09.00</p>
                      <p>WIB</p>
                    </div>
                    <div className="dropdown-item">
                      <p>10.00</p>
                      <p>WIB</p>
                    </div>
                    <div className="dropdown-item">
                      <p>11.00</p>
                      <p>WIB</p>
                    </div>
                    <div className="dropdown-item">
                      <p>12.00</p>
                      <p>WIB</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item-search">
                <p className="category ">Jumlah Penumpang (optional)</p>
                <form className="form-penumpang" action="">
                  <label className="input-penumpang">
                    <input
                      type="text"
                      placeholder="Jumlah Penumpang"
                      style={{ width: "160px", border: "none" }}
                    />
                    <MdPeopleOutline className="collapsed" />
                  </label>
                </form>
              </div>
              <div className="button-search">
                <a className="btn" href="#">
                  Cari Mobil
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
