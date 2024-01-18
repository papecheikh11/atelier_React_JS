import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Loader from "../components/loader/Loader";
import DetailCountry from "../components/main/DetailCountry";
import useCountry from "../hooks/useCountry";

const DetailsCountries = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { getcountry, loading } = useCountry();

  useEffect(() => {
    getcountry(id);
  }, [getcountry, id]);

  return (
    <div className="container mb-4 pt-5 ">
      {loading ? (
        <Loader />
      ) : (
        <div className="row mx-1 mt-5 mb-0">
          <button
            className="col-3 col-lg-1 p-2 mx-3 mx-lg-0 border-0 elements style"
            id="back"
            onClick={() => navigate("/")}
          >
            <FaArrowLeft className=" me-2" /> Back
          </button>
          <DetailCountry />
        </div>
      )}
    </div>
  );
};

export default DetailsCountries;
