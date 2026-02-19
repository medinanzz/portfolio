import { t } from "i18next";
import { useState } from "react";
import { Box, BtnPausedRunning, DivBox, SectionAnimation } from "./styles";

export function AnimationPage() {
    const [isAnimating, setIsAnimating] = useState(false);
    return (
        <>
            <SectionAnimation>
                <BtnPausedRunning onClick={() => setIsAnimating(!isAnimating)}>
                    {isAnimating ? t("stopAnimation") : t("startAnimation")}
                </BtnPausedRunning>
                <Box>
                    <DivBox className={`box ${isAnimating ? "animate" : ""}`}>
                        <span className="spanFront">Front</span>
                        <span className="spanBack">Back</span>
                    </DivBox>
                </Box>
            </SectionAnimation>
        </>
    )
}