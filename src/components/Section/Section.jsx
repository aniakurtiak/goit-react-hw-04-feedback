import { SectionWrap} from "./Section.styled"

export const Section = ({title, children}) => (
    <SectionWrap>
        <h2>{title}</h2>
        {children}
    </SectionWrap>
);