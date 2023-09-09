export const Statistics = ({onGood, onNautral, onBad, totalFeedback, positiveFeedbackPer}) => {
    return (
        <div>
            <h1>Statistics</h1>
            <p>Good: {onGood} </p>
            <p>Neutral: {onNautral}</p>
            <p>Bad: {onBad}</p>
            <p>Total: {totalFeedback}</p>
            <p>Positive feedback: {positiveFeedbackPer}%</p>
        </div>
    )
}