export const Statistics = ({good, neutral, bad, totalFeedback, positiveFeedbackPer}) => {
    return (
        <div>
            <p>Good: {good} </p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {totalFeedback}</p>
            <p>Positive feedback: {positiveFeedbackPer}%</p>
        </div>
    )
}