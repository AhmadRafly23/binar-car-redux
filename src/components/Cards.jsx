import React from "react";
import "./Cards.css";
import { MdPeopleOutline, MdOutlineDateRange } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Cards({ cardData }) {
  const { setListCarLoading, setListCarResult, setListCarError } = useSelector(
    (state) => state.allCars
  );

  return (
    <>
      <div className="container p-0 mt-5">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center flex-wrap">
            {setListCarResult ? (
              setListCarResult.map((item) => {
                return (
                  <div className="card mr-3 mb-3" style={{ maxWidth: "22rem" }}>
                    <img src={item.image} className="img-card" alt="..." />
                    <div className="card-body">
                      <p className="card-text font-weight-bold">{item.name}</p>
                      <p className="card-text font-weight-bold">
                        Rp. {item.price} / hari
                      </p>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Vitae laborum nam officiis, architecto voluptatum
                        non in deleniti tenetur nostrum. Delectus sint doloribus
                        sapiente laudantium facilis. Tenetur harum repudiandae
                        ea iusto.
                      </p>
                      <div>
                        <div className="card-info">
                          <MdPeopleOutline /> <p>4 orang</p>
                        </div>
                        <div className="card-info">
                          <FiSettings /> <p>Manual</p>
                        </div>
                        <div className="card-info">
                          <MdOutlineDateRange /> <p>Tahun 2020</p>
                        </div>
                      </div>
                      <Link
                        className="btn btn-primary w-100"
                        to={`/show-detail/${item.id}`}
                      >
                        Pilih Mobil
                      </Link>
                    </div>
                  </div>
                );
              })
            ) : setListCarLoading ? (
              <p>Loading...</p>
            ) : (
              <p>{setListCarError ? setListCarError : "Data Error"}</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
