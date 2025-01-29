import React, { useState } from "react";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "What is React?",
            answer: "React is a JavaScript library for building user interfaces.",
        },
        {
            question: "How does React work?",
            answer:
                "React creates a virtual DOM to efficiently update and render components.",
        },
        {
            question: "What is a component in React?",
            answer: "A component is a reusable piece of UI in a React application.",
        },
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="max-w-lg mx-auto p-4 mt-2">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="gap-4">
                {faqs.map((faq, index) => (
                    <div key={index} onClick={() => toggleFAQ(index)}
                        className="border-b py-2 cursor-pointer">
                        <div className="text-lg font-semibold flex justify-between">
                            {faq.question}
                            <span>{activeIndex === index ? "-" : "+"}</span>
                        </div>
                        {activeIndex === index && (
                            <div className="text-gray-700 mt-2">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
