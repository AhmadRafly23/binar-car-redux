import React, { useEffect } from "react";
import "./Home.css";
import { MdPeopleOutline } from "react-icons/md";
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from "react-router";
import Cards from "../components/Cards";
import "./SearchResult.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { filterData, setCars } from "../redux/actions/carActions";

function SearchResult() {
  const { data } = useParams();
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filterData.data);

  useEffect(() => {
    dispatch(setCars(data));
    // eslint-disable-next-line
  }, [data]);

  return (
    <>
      {/* Navbar */}
      <section id="navbar">
        <div className="container-fluid m-0 p-0">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <Link className="navbar-brand" to={"/"}>
              BinarCar
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#/navbarNavAltMarkup"
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
                <a className="nav-link mr-4" href="#/">
                  Our Services
                </a>
                <a className="nav-link mr-4" href="#/">
                  Why Us
                </a>
                <a className="nav-link mr-4" href="#/">
                  Testimonial
                </a>
                <a className="nav-link mr-4" href="#/">
                  FAQ
                </a>
                <a className="nav-link btn" href="#/">
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
          <div className="py-5"></div>
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
                  onChange={(e) => {
                    const datas = e.target.value;
                    return dispatch(filterData(datas));
                  }}
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
                    className="form-control px-2 clickable"
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
              <div className="d-flex align-items-end">
                <div className="button-cari">
                  <Link to={`/search-result/${filter}`} className="text-edit">
                    Edit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* search-result */}
      <Cards />

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
            <div className="col-md-3">
              <p>Copyright Binar 2022</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchResult;
