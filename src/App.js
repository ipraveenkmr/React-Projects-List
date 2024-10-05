import ColorPicker from "./colorPicker/ColorPicker";
import Todo from "./todo/Todo";
import GitHubUserFiner from "./gitHubUserFinder/GitHubUserFinder";
import FlashCards from "./flashCards/FlashCards";
import PomodoroTimer from "./pomodoroTimer/PomodoroTimer";
import CurrencyConverter from "./currencyConverter/CurrencyConverter";
import QuizApp from "./quizApp/QuizApp";
import ExpenseTracker from "./expenseTracker/ExpenseTracker";
import ChatApp from "./chatApp/ChatApp";
import { BrowserRouter, Routes, Route }
  from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ChatApp />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
