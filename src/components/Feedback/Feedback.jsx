import { Button, ButtonWrapp } from "./Feedback.styled"

export const Feedback = ({onLeaveFeedback, options}) => {
    return (
            <ButtonWrapp>
                {options.map((option) => (
                <Button key={option} onClick={() => onLeaveFeedback(option)}>
                 {option.toUpperCase()}
                </Button>
                ))}
            </ButtonWrapp>
    )
}