export const Statistics = ({onGood, onNautral, onBad}) => {
    return (
        <div>
            <h1>Statistics</h1>
            <p>Good: {onGood} </p>
            <p>Neutral: {onNautral}</p>
            <p>Bad: {onBad}</p>
        </div>
    )
}