"use client"

import React, { useState, useEffect } from "react";
import ButtonBar from "../../components/ButtonBar";
import Home from "../../components/homepage/index";
import EndingPopup from "../../components/EndingPopup";
import Prompt from "../../components/prompt/index";
import { useAppContext } from "./context";
import { Habit } from "../../types/types";
import { Database } from "../../lib/supabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Router from "next/router";

export default function Page() {

  // const supabase = createClientComponentClient<Database>();
  // const [user, setUser] = useState(null)

  // useEffect(() => {
  //   async function getUser() {
  //     const { data: user } = await supabase.auth.getUser()
  //     setUser(user)
  //   }
  //   getUser();
  // }, [supabase.auth])

  // console.log(user);

  const {
    currentDate,
    isCommitted,
    setIsCommitted,
    habitData,
    setHabitData,
    habitLogsArray,
    setHabitLogsArray,
    tenDaysPassed,
    toggleTenDaysPassed,
    currentScore,
    maxScore,
    percentageDecimal,
    toggleIsCommitted,
    activePage,
    setActivePage,
    goodLuck,
    toggleGoodLuck,
    user,
    setUser,
    email,
    setEmail,
    password,
    setPassword,
    handleSignUp,
    handleSignIn,
    handleSignOut
  } = useAppContext();

  console.log(user);

  const [date, setDate] = useState<boolean>(false);
  const [showGrowth, setShowGrowth] = useState<string>("normal");
  const handleShowGrowthBtn = () => {
    if (showGrowth === "normal") {
      setShowGrowth("growth");
    } else if (showGrowth === "growth") {
      setShowGrowth("max");
    } else {
      setShowGrowth("normal");
    }

    setTimeout(() => {
      setShowGrowth("normal");
    }, 30000);
  };

  // Function to simulate advancing time by 10 days
  const endRoutine = () => {
    if (habitData) {
      const updatedHabitData = habitData.map((habit: Habit) => {
        const newStartDate = new Date(habit.created_at);
        newStartDate.setDate(newStartDate.getDate() - 10);
        return { ...habit, created_at: newStartDate.toISOString() };
      });
      setHabitData(updatedHabitData);
    }
  };

  if (user === null) {
    Router.push("/login");
  }
  else if (user !== null) {

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
        <>
        <div id="main-plant-container">
          <Home
            currentScore={currentScore}
            maxScore={maxScore}
            percentageDecimal={percentageDecimal}
            habitLogsArray={habitLogsArray}
            habitData={habitData}
            goodLuck={goodLuck}
            toggleGoodLuck={toggleGoodLuck}
            toggleTenDaysPassed={toggleTenDaysPassed}
            showGrowth={showGrowth}
          />
          {tenDaysPassed && (
            // Render EndingPopup component when ten days have passed
            <EndingPopup
              tenDaysPassed={tenDaysPassed}
              maxScore={maxScore}
              currentScore={currentScore}
              percentageDecimal={percentageDecimal}
              toggleIsCommitted={toggleIsCommitted}
              isCommitted={isCommitted}
            />
          )}
          </div>
          <div className="dev-btn-container">
            {/* Button to show maximum plant growth for 10 seconds */}
            <button id="showGrowthBtn" onClick={handleShowGrowthBtn}></button>
            {/* Button to simulate advancing time by 10 days */}
            <button id="endRoutineBtn" onClick={endRoutine}></button>
          </div>
        </>
      <ButtonBar />
    </>
  );
}
}