import React from "react";
import iconSupervisor from "../assets/images/icon-supervisor.svg";
import iconCalculator from "../assets/images/icon-calculator.svg";
import iconKarma from "../assets/images/icon-karma.svg";
import iconTeamBuilder from "../assets/images/icon-team-builder.svg";

export default function FourCardFeature() {
  return (
    //   container
    <div className="flex justify-center items-center h-max w-full pb-10 lg:h-screen">
      {/* wrapper  */}
      <div className="flex flex-col px-8 mt-20 lg:mt-0 justify-center">
        <div>
          <article className="flex flex-col text-center gap-2 lg:px-[29rem]">
            <h1 className="text-c-veryDarkBlue font-cfw-200 text-2xl">
              Reliable, efficient delivery
            </h1>
            <h1 className="text-c-veryDarkBlue font-cfw-600 text-2xl mb-2">
              Powered by Technology
            </h1>
            <p className="font-cfw-400 text-c-grayishBlue">
              Our Artificial Intelligence powered tools use millions of project
              data points to ensure that your project is successful
            </p>
          </article>
        </div>
        {/* item container  */}
        <div className="flex flex-col mt-20 gap-9 lg:flex-row justify-center items-center">
          {/* cards  */}
          <div className="sm:w-[21.688rem] sm:h-[15.625rem] bg-white rounded-lg overflow-hidden shadow-[0px_15px_20px_1px_#00000024]">
            <div className="bg-c-cyan py-[.17rem]"></div>
            <div>
              <article className="px-7 py-7 flex flex-col gap-4">
                <h2 className="font-cfw-600 text-c-veryDarkBlue text-2xl">
                  Supervisor
                </h2>
                <p className="font-cfw-400 text-c-grayishBlue">
                  Monitors activity to identify project roadblocks
                </p>
                <div className="self-end">
                  <img src={iconSupervisor} alt="Supervisor" />
                </div>
              </article>
            </div>
          </div>
          {/* item center  */}
          <div className="flex flex-col gap-9">
            <div className="sm:w-[21.688rem] sm:h-[15.625rem] bg-white rounded-lg overflow-hidden shadow-[0px_15px_20px_1px_#00000024]">
              <div className="bg-c-red py-[.17rem]"></div>
              <div>
                <article className="px-7 py-7 flex flex-col gap-4">
                  <h2 className="font-cfw-600 text-c-veryDarkBlue text-2xl">
                    Team Builder
                  </h2>
                  <p className="font-cfw-400 text-c-grayishBlue">
                    Scans our talent network to create the optimal team for your
                    project
                  </p>
                  <div className="self-end">
                    <img src={iconTeamBuilder} alt="Team Builder" />
                  </div>
                </article>
              </div>
            </div>
            <div className="sm:w-[21.688rem] sm:h-[15.625rem] bg-white rounded-lg overflow-hidden shadow-[0px_15px_20px_1px_#00000024]">
              <div className="bg-c-orange py-[.17rem]"></div>
              <div>
                <article className="px-7 py-7 flex flex-col gap-4">
                  <h2 className="font-cfw-600 text-c-veryDarkBlue text-2xl">
                    Karma
                  </h2>
                  <p className="font-cfw-400 text-c-grayishBlue">
                    Regularly evaluates our talent to ensure quality
                  </p>
                  <div className="self-end">
                    <img src={iconKarma} alt="Karma" />
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div className="sm:w-[21.688rem] sm:h-[15.625rem] bg-white rounded-lg overflow-hidden shadow-[0px_15px_20px_1px_#00000024]">
            <div className="bg-c-blue py-[.17rem]"></div>
            <div>
              <article className="px-7 py-7 flex flex-col gap-4">
                <h2 className="font-cfw-600 text-c-veryDarkBlue text-2xl">
                  Calculator
                </h2>
                <p className="font-cfw-400 text-c-grayishBlue">
                  Uses data from past projects to provide better delivery
                  estimates
                </p>
                <div className="self-end">
                  <img src={iconCalculator} alt="Calculator" />
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
