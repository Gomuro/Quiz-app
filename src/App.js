import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Settings from "./pages/Settings";
// import Questions from "./pages/Questions";
// import FinalPage from "./pages/FinalPage";
import { Box, Container } from "@mui/material";

function App() {
  return (
    <Router>
      <Container maxWidth ="sm">
        <Box mt={5} textAlign="center">
          <Routes>
            <Route path="/" element={<Settings />} />
            {/* <Route path="/questions" element={<Questions />} />
            <Route path="/final" element={<FinalPage />} /> */}
          </Routes>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
