import { Button, ButtonWrapp } from "./Feedback.styled"

export const Feedback = ({onClickGood, onClickNeutral, onClickBad}) => {
    return (
        <div>
            <h1>Please leave feedback</h1>
            <ButtonWrapp>
                <Button onClick={onClickGood}>Good</Button>
                <Button onClick= {onClickNeutral}>Neutral</Button>
                <Button onClick={onClickBad}>Bad</Button>
            </ButtonWrapp>
        </div>
    )
}