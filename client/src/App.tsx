import Login from "@/views/Login";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [id, setId] = useLocalStorage("id");

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="absolute right-5 top-5">
        <ModeToggle />
      </div>
      <Login onIdSubmit={setId} />
    </ThemeProvider>
  );
}

export default App;
