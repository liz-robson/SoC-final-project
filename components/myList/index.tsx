"use client";
import DelToDoBtn from "../delToDo";
import MainBtn from "../MainBtn";
import List from "../list";
import { useState } from "react";
import Link from "next/link";
import RoutineForm from "../defineRoutine";

// let taskDataOriginal: Task[] = [
//   // { id: 1, title: "20 minutes yoga session", completed: true },
//   // { id: 2, title: "meditate", completed: true },
//   // { id: 3, title: "gratitude journal", completed: false },
// ];

// interface DeleteBtnProps {
//   armDelete: boolean;
// }

// let deleteState = {
//   armDelete: false
// }
interface Habit {
  habit_id: string;
  habit_name: string;
  created_at: string;
  completed: boolean;
}

const task = [];

export default function MyList({ toggleVariable, variable, habitData }: any) {
  const [taskData, setTaskData] = useState<Habit[]>(task);

  // Set state of armDelete - default false
  const [armDelete, setArmDelete] = useState(false);

  // Handle the state of armDelete, set to true or false
  const handleArmDelete = () => {
    setArmDelete(!armDelete);
    console.log(armDelete);
  };

  function addNewData(habit: Habit) {
    setTaskData([...taskData, habit]);
  }
  console.log(taskData);
  return variable ? (
    <>
      <div>
        {/* pass down the armDelete to DelToDo */}
        <List
          taskData={taskData}
          addNewData={addNewData}
          armDelete={armDelete}
        />
      </div>
      <div className="btn-container">
        {/* <DelToDoBtn handleArmDelete={handleArmDelete} /> */}
      </div>
    </>
  ) : (
    <RoutineForm toggleVariable={toggleVariable} variable={variable} />
  );
}
