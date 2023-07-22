/*
 Copyright (c) 2022, Xgrid Inc, http://xgrid.co

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

//React imports
import Slider from "react-slick";

// A function which controls the animations for rotating text component that is added on a home page
function VerticalSlider() {

  const settings = {
    infinite: true,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 500,
    pauseOnHover: false,
  };
  const verticalText = [
    {
      startingText: "Talent?",
      spanText: "Top 1%",
    },
    {
      startingText: "Quality?",
      spanText: "Top-notch",
    },
    {
      startingText: "Delivery?",
      spanText: "In Time",
    },
    {
      startingText: "KPI?",
      spanText: "Client Obsessed",
    },
    {
      startingText: "Customers?",
      spanText: "Satisfied",
    },
    {
      startingText: "Visibility?",
      spanText: "100%",
    },
    {
      startingText: "Liability?",
      spanText: "Zero",
    },
  ];
  return (
    <>
      <Slider {...settings}>
        {verticalText.map((text, index) => (
          <p
            key={index}
            className="customer-heading text-center fw-500"
          >
            {text.startingText}
            <span className="color-purple"> {text.spanText}</span>
          </p>
        ))}
      </Slider>
    </>
  );
}
export default VerticalSlider;
