import styled from "styled-components";
import { AnimationPage } from "./animation";
import { SchoolTestPage } from "./schoolTest";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column: 2 / -1;
    min-height: 100dvh;
    flex-direction: column;
`;

export function ExtraPage() {
    return (
        <Container>
            <AnimationPage />
            <SchoolTestPage />
        </Container>
    )
}