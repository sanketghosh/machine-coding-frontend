import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AsyncTagsForm, DatePicker, Home, QuizApp, TimePicker } from "./pages";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<QuizApp />} path="/quiz-app" />
        <Route element={<TimePicker />} path="/time-picker" />
        <Route element={<DatePicker />} path="/date-picker" />
        <Route element={<AsyncTagsForm />} path="/async-tags-forms" />
      </Routes>
    </Router>
  );
}
