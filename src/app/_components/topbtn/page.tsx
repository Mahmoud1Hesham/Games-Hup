'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { faSpaceAwesome } from '@fortawesome/free-brands-svg-icons'

const TopBtn = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-14 right-14 p-3 rounded-sm cursor-pointer shadow-2xl"
                >
                    <FontAwesomeIcon icon={faSpaceAwesome} className="text-4xl hover:scale-125  transition-all duration-500 ease-in-out"/>                </button>
            )}
        </>
    );
};

export default TopBtn;
