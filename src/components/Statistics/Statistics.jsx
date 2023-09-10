import {Wrapp} from "./Statistics.styled"

export const Statistics = ({good, neutral, bad, totalFeedback, positiveFeedbackPer}) => {
    return (
        <Wrapp>
            <p>Good: {good} </p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {totalFeedback}</p>
            <p>Positive feedback: {positiveFeedbackPer}%</p>
        </Wrapp>
    )
}