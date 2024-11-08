import { useState, useEffect } from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import examQuestionsList from "./topic/topic";

export default function App() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [answerStatus, setAnswerStatus] = useState({});
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const questionsPerPage = 5;

  // Shuffle questions on mount
  useEffect(() => {
    const shuffleArray = (array) => {
      return array
        .map((item) => ({ ...item, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ sort, ...item }) => item);
    };
    setShuffledQuestions(shuffleArray(examQuestionsList));
  }, []);

  // Handle checkbox change
  const handleCheckboxChange = (questionId, optionKey) => {
    setSelectedAnswers((prevAnswers) => {
      const currentAnswers = prevAnswers[questionId] || [];
      if (currentAnswers.includes(optionKey)) {
        // Remove the option if it's already selected
        return {
          ...prevAnswers,
          [questionId]: currentAnswers.filter((key) => key !== optionKey),
        };
      } else {
        // Add the option if it's not selected
        return {
          ...prevAnswers,
          [questionId]: [...currentAnswers, optionKey],
        };
      }
    });
  };

  // Handle submit answers
  const handleSubmitAnswers = () => {
    const status = {};
    shuffledQuestions.forEach((topic) => {
      const correctAnswers = topic.answer; // Correct answers array
      const userAnswers = selectedAnswers[topic.id] || [];
      // Check if the user's answers match the correct answers exactly
      const isCorrect =
        correctAnswers.length === userAnswers.length &&
        correctAnswers.every((answer) => userAnswers.includes(answer));
      status[topic.id] = isCorrect;
    });
    setAnswerStatus(status);
    setShowAll(true); // Show all questions after submitting
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
  };

  // Calculate current page questions
  const currentQuestions = showAll
    ? shuffledQuestions
    : shuffledQuestions.slice(
        currentPage * questionsPerPage,
        (currentPage + 1) * questionsPerPage
      );

  // Check if it's the last page
  const isLastPage =
    (currentPage + 1) * questionsPerPage >= shuffledQuestions.length;

  return (
    <MathJaxContext>
      <div className="flex flex-col items-center p-4 bg-gray-50 min-h-screen">
        {currentQuestions.map((topic, index) => (
          <div
            key={topic.id}
            className={`w-full max-w-3xl m-4 p-6 bg-white rounded-lg shadow-md ${
              answerStatus[topic.id] === true
                ? "border-l-8 border-green-500"
                : answerStatus[topic.id] === false
                ? "border-l-8 border-red-500"
                : "border-l-8 border-transparent"
            }`}
          >
            <div className="mb-4">
              <span className="text-gray-600 text-sm">
                題目{" "}
                {showAll
                  ? index + 1
                  : currentPage * questionsPerPage + index + 1}
              </span>
              <MathJax className="mt-2 text-lg">{topic.question}</MathJax>
            </div>
            <div className="mt-4">
              {Object.entries(topic.option).map(([key, value]) => (
                <label
                  key={key}
                  className="flex items-center mb-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={
                      selectedAnswers[topic.id] &&
                      selectedAnswers[topic.id].includes(key)
                    }
                    onChange={() => handleCheckboxChange(topic.id, key)}
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <span className="ml-2 font-medium text-gray-700">
                    {key.toUpperCase()}：
                  </span>
                  <MathJax className="ml-2 text-gray-700">{value}</MathJax>
                </label>
              ))}
            </div>
            {answerStatus[topic.id] !== undefined && (
              <div
                className={`mt-4 p-3 rounded ${
                  answerStatus[topic.id] ? "bg-green-100" : "bg-red-100"
                }`}
              >
                {answerStatus[topic.id] ? (
                  <p className="text-green-700">回答正確！</p>
                ) : (
                  <p className="text-red-700">
                    回答錯誤，正確答案是：
                    {topic.answer.map((ans) => ans.toUpperCase()).join(", ")}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}

        {!showAll && (
          <div className="mt-6 flex justify-center items-center space-x-4">
            {currentPage > 0 && (
              <button
                onClick={() => setCurrentPage((prev) => prev - 1)}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
              >
                上一頁
              </button>
            )}

            {!isLastPage ? (
              <button
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                下一頁
              </button>
            ) : (
              <button
                onClick={handleSubmitAnswers}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
              >
                送出答案
              </button>
            )}
          </div>
        )}

        {showAll && (
          <button
            onClick={() => setShowAll(false)}
            className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            返回分頁模式
          </button>
        )}

        {!showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            顯示全部
          </button>
        )}
      </div>
    </MathJaxContext>
  );
}
