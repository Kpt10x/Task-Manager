"use client"; // Import the Tasks component and useGlobalState hook
import Tasks from "./Components/Tasks/Tasks";
import { useGlobalState } from "./context/globalProvider";

// Define the Home component
export default function Home() {
  // Use the useGlobalState hook to get the tasks state
  const { tasks } = useGlobalState();

  // Render the Tasks component with the tasks state and the "All Tasks" title
  return <Tasks title="All Tasks" tasks={tasks} />;
}
// End of Home component
