const sb = require("@supabase/supabase-js");

const supabaseUrl = "https://cpynnguxtbyhpnfbetqq.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = sb.createClient(
  supabaseUrl,
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNweW5uZ3V4dGJ5aHBuZmJldHFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcwNzU1OTUsImV4cCI6MjAxMjY1MTU5NX0.ENiVtUPO5dULDVJKcIXtC7KZOdTp9PkVoblmRL-21T8"
);

const fetchData = async () => {
  const { data, error } = await supabase.from("table1").select();
  console.log("data", data);
  console.log("error", error);
};

fetchData();

console.log("supabase", supabase);
