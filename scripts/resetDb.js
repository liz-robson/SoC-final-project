import createClient from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseKey);

const currentDate = new Date();
const nineDaysAgo = new Date(currentDate);
nineDaysAgo.setDate(currentDate.getDate() - 9);

async function resetDatabase() {
  try {
    // Clear existing data from tables
    await supabase.from("habit_table").delete().eq("user_id", "1");
    await supabase.from("habit_log").delete().eq("user_id", "1");

    // // Create habit_table if not exists
    // const { error: createTableError1 } = await supabase.rpc('create_habit_table');
    // if (createTableError1) {
    //   console.error('Error creating habit_table:', createTableError1);
    //   return;
    // }

    // // Create habit_log if not exists
    // const { error: createTableError2 } = await supabase.rpc('create_habit_log');
    // if (createTableError2) {
    //   console.error('Error creating habit_log:', createTableError2);
    //   return;
    // }

    // Seed habit_table with data
    const { data: habitTableData, error: seedError1 } = await supabase
      .from("habit_table")
      .insert([
        {
          created_at: nineDaysAgo,
          habit_name: "Walk the dog",
          completed: false,
          user_id: 1,
          committed_days: 10,
        },
        {
          created_at: nineDaysAgo,
          habit_name: "Yoga Session",
          completed: false,
          user_id: 1,
          committed_days: 10,
        },
        {
          created_at: nineDaysAgo,
          habit_name: "Read 15 pages",
          completed: false,
          user_id: 1,
          committed_days: 10,
        },
        {
          created_at: nineDaysAgo,
          habit_name: "Morning run",
          completed: false,
          user_id: 1,
          committed_days: 10,
        },
        {
          created_at: nineDaysAgo,
          habit_name: "Remember to breathe",
          completed: false,
          user_id: 1,
          committed_days: 10,
        },
      ]);

    if (seedError1) {
      console.error("Error seeding habit_table:", seedError1);
      return;
    }

    // Seed habit_log with data
    const { data: habitLogData, error: seedError2 } = await supabase
      .from("habit_log")
      .insert([
        {
          habit_id: habitTableData[0].habit_id,
          completed_at: nineDaysAgo,
          user_id: 1,
        },
        {
          habit_id: habitTableData[1].habit_id,
          completed_at: nineDaysAgo,
          user_id: 1,
        },
        {
          habit_id: habitTableData[2].habit_id,
          completed_at: nineDaysAgo,
          user_id: 1,
        },
        {
          habit_id: habitTableData[3].habit_id,
          completed_at: nineDaysAgo,
          user_id: 1,
        },
        {
          habit_id: habitTableData[4].habit_id,
          completed_at: nineDaysAgo,
          user_id: 1,
        },
        // Add more rows as needed
      ]);

    if (seedError2) {
      console.error("Error seeding habit_log:", seedError2);
      return;
    }

    console.log("Database reset and seeded successfully.");
  } catch (error) {
    console.error("Error:", error);
  }
}

resetDatabase();
