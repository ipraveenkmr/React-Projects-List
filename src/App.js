import ColorPicker from "./colorPicker/ColorPicker";
import Todo from "./todo/Todo";
import GitHubUserFinder from "./gitHubUserFinder/GitHubUserFinder";
import FlashCards from "./flashCards/FlashCards";
import PomodoroTimer from "./pomodoroTimer/PomodoroTimer";
import CurrencyConverter from "./currencyConverter/CurrencyConverter";
import QuizApp from "./quizApp/QuizApp";
import ExpenseTracker from "./expenseTracker/ExpenseTracker";
import Charts from "./charts/Charts";
import ChatApp from "./chatApp/ChatApp";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/color-picker" element={<ColorPicker />} />
        <Route exact path="/todo" element={<Todo />} />
        <Route exact path="/github-user-finder" element={<GitHubUserFinder />} />
        <Route exact path="/flash-cards" element={<FlashCards />} />
        <Route exact path="/pomodoro-timer" element={<PomodoroTimer />} />
        <Route exact path="/currency-converter" element={<CurrencyConverter />} />
        <Route exact path="/quiz-app" element={<QuizApp />} />
        <Route exact path="/expense-tracker" element={<ExpenseTracker />} />
        <Route exact path="/charts" element={<Charts />} />
        <Route exact path="/chat" element={<ChatApp />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
