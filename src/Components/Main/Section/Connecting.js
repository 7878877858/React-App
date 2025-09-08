import React from "react";
import aadhar_housing_finance_ltd from "../../../assets/image/operators/aadhar_housing_finance_ltd.svg";
import aavas_financiers_ltd from "../../../assets/image/operators/aavas_financiers_ltd.svg";
import act_digital from "../../../assets/image/operators/act_digital.svg";
import adani_housing_finance from "../../../assets/image/operators/adani_housing_finance.svg";
import asianet_broadband from "../../../assets/image/operators/asianet_broadband.svg";
import byjus from "../../../assets/image/operators/byjus.svg";
import indian_bank from "../../../assets/image/operators/indian_bank.svg";
import punjab_national_bank from "../../../assets/image/operators/punjab_national_bank.svg";
import rajasthan_rajya_vidyut_prasaran_nigam_limited from "../../../assets/image/operators/rajasthan_rajya_vidyut_prasaran_nigam_limited.svg";
import reliance_general_insurance_health_insurance_plans from "../../../assets/image/operators/reliance_general_insurance_health_insurance_plans.svg";

import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/main.css";
import "../../../assets/css/snow_fall.css";
import LazyImage from "../../../assets/js/LazyImage";

const operators = [
  { icon: aadhar_housing_finance_ltd, name: "aadhar_housing_finance_ltd" },
  { icon: aavas_financiers_ltd, name: "aavas_financiers_ltd" },
  { icon: act_digital, name: "act_digital" },
  { icon: adani_housing_finance, name: "adani_housing_finance" },
  { icon: asianet_broadband, name: "asianet_broadband" },
  { icon: byjus, name: "byjus" },
  { icon: indian_bank, name: "indian_bank" },
  { icon: punjab_national_bank, name: "punjab_national_bank" },
  {
    icon: rajasthan_rajya_vidyut_prasaran_nigam_limited,
    name: "rajasthan_rajya_vidyut_prasaran_nigam_limited",
  },
  {
    icon: reliance_general_insurance_health_insurance_plans,
    name: "reliance_general_insurance_health_insurance_plans",
  },
];

export default function Connecting() {
  // Duplicate array for continuous loop
  const scrollingOperators = [...operators, ...operators];

  return (
    <section>
      <div className="container py-5">
        <h1 className="text-center fw-semibold mb-4">
          <span className="text-primary">Connecting You </span>
          <span className="text-black">with 2000+ Operators</span>
        </h1>

        <div id="operators_container_scroll">
          <div className="container">
            <div className="carousel d-flex">
              {scrollingOperators.map((op, index) => (
                <LazyImage key={index} src={op.icon} alt={op.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
