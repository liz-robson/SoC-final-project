"use client"
import Prompt from "../../../components/prompt";
import ButtonBar from "../../../components/ButtonBar";
import plantGrowth1 from "../../../public/plants/temp/plant-growth-1.png";
import plantGrowth2 from "../../../public/plants/temp/plant-growth-2.png";
import plantGrowth4 from "../../../public/plants/temp/plant-growth-4.png";
import plantGrowthBees from "../../../public/plants/temp/plant-growth-bees-2.png";
import Image from "next/image";
import { useAppContext } from "../context";
import Lottie from "lottie-react";
import allFlowersOne from "../../../public/plants/flower-bunch-2.json";
import threeBeesPlease from "../../../public/plants/three-bees-please.json";
import yourFirstBee from "../../../public/plants/your-first-bee.json";
import twoWholeBees from "../../../public/plants/two-whole-bees.json";
import allFlowersTwo from "../../../public/plants/flower-bunch-2.json";
import allFlowersThree from "../../../public/plants/flower-bunch-2.json";

import { Flower, OneBee, TwoBees, ThreeBees, Plant, PlantProps } from "../../../types/types";

export default function Settings() {

    const {
        isCommitted,
        tenDaysPassed,
        currentScore,
        maxScore,
        percentageDecimal,
        activePage,
      } = useAppContext();
      let startFrame = allFlowersTwo.ip; //in-point or first frame of animation
      let endFrame = allFlowersTwo.op;   //out-point or last frame of animation
      allFlowersTwo.op = 1;

      // State to manage animation options
      const animationOptionsOne = {
        speed: 1,
        loop: false,
        autoplay: true,
        animationData: threeBeesPlease,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
        inPoint: allFlowersOne.ip,  // Set the inPoint to the initial in-point
        outPoint: allFlowersOne.op = 192, // Set the outPoint to the initial out-point
      };

      const animationOptionsTwo = {
        speed: 1,
        loop: false,
        autoplay: true,
        animationData: yourFirstBee,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
        inPoint: allFlowersOne.ip,  // Set the inPoint to the initial in-point
        outPoint: allFlowersOne.op, // Set the outPoint to the initial out-point
      };

      const animationOptionsThree = {
        speed: 1,
        loop: false,
        autoplay: true,
        animationData: allFlowersTwo,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
        inPoint: allFlowersTwo.ip,  // Set the inPoint to the initial in-point
        outPoint: endFrame, // Set the outPoint to the initial out-point
      };

      const animationOptionsFour = {
        speed: 1,
        loop: false,
        autoplay: true,
        animationData: twoWholeBees,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
        inPoint: allFlowersThree.ip,  // Set the inPoint to the initial in-point
        outPoint: allFlowersThree.op = 283, // Set the outPoint to the initial out-point
      };

    return (
        <>
<Prompt
            tenDaysPassed={tenDaysPassed}
            isCommitted={isCommitted}
            maxScore={maxScore}
            currentScore={currentScore}
            percentageDecimal={percentageDecimal}
            activePage={activePage}
        />
        <div className="hive-row">
            <div className="hive-box">
                <Lottie
                className="hive-plant"
                animationData={animationOptionsOne.animationData}
                loop={animationOptionsOne.loop}
                autoplay={animationOptionsOne.autoplay}
                rendererSettings={animationOptionsOne.rendererSettings}
                    alt="hive member's progress plant"
                />
                <div>
                    <p className="hive-team-member-name">funkapotamus</p>
                </div>
            </div>
            <div className="hive-box">
            <Lottie
                className="hive-plant"
                animationData={animationOptionsTwo.animationData}
                loop={animationOptionsTwo.loop}
                autoplay={animationOptionsTwo.autoplay}
                rendererSettings={animationOptionsTwo.rendererSettings}
                    alt="hive member's progress plant"
                />
                <div>
                    <p className="hive-team-member-name">lizzier</p>
                </div>
            </div>
            </div>
            <div className="hive-row">
            <div className="hive-box">
            <Lottie
                className="hive-plant"
                animationData={animationOptionsThree.animationData}
                loop={animationOptionsThree.loop}
                autoplay={animationOptionsThree.autoplay}
                rendererSettings={animationOptionsThree.rendererSettings}
                    alt="hive member's progress plant"
                />
                <div>
                    <p className="hive-team-member-name">50Spence</p>
                </div>
            </div>
            <div className="hive-box">
            <Lottie
                className="hive-plant"
                animationData={animationOptionsFour.animationData}
                loop={animationOptionsFour.loop}
                autoplay={animationOptionsFour.autoplay}
                rendererSettings={animationOptionsFour.rendererSettings}
                />
                <div>
                    <p className="hive-team-member-name">Mr.Horse</p>
                </div>
            </div>
            </div>
        <ButtonBar />
        </>
    );
}