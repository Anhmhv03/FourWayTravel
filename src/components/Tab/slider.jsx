import BasicTabs from '@/layout/Tabs';
import React from 'react';


const slider = () => {

    const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);

    const handlePrevious = () => {
        // Di chuyển đến slide trước đó
        setCurrentSlideIndex(
            (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
        );
    };
    const handleNext = () => {
        // Di chuyển đến slide kế tiếp
        setCurrentSlideIndex(
            (prevIndex) => (prevIndex + 1) % slides.length
        );
    };
    return (
        <>
            <BasicTabs
                currentSlideIndex={currentSlideIndex}
                handlePrevious={handlePrevious}
                handleNext={handleNext}
            />
        </>
    );
};

export default slider;