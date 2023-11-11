/**
 * @ Author: Abdou Lahi DIOP - Copyright © 2023 Abdallah
 * @ Creation Date: November 11, 2023 at 4:24:22 PM  CST
 * @ Last Modification Date: November 11, 2023 at 5:27:05 PM  CST
 * @ Modified by: Abdou Lahi DIOP
 * @ Description:
 */

import { useState } from "react";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * This is a custom hook that can be used to submit a form and simulate an API call
 * It uses Math.random() to simulate a random success or failure, with 50% chance of each
 */
const useSubmit = () => {
    const [isLoading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const submit = async (url, data) => {
        const random = Math.random();
        setLoading(true);
        try {
            await wait(2000);
            if (random < 0.5) {
                throw new Error("Something went wrong");
            }
            setResponse({
                type: 'success',
                message: `Thanks for your submission ${data.firstName}, we will get back to you shortly!`,
            })
        } catch (error) {
            setResponse({
                type: 'error',
                message: 'Something went wrong, please try again later!',
            })
        } finally {
            setLoading(false);
        }
    };

    return { isLoading, response, submit };
}

export default useSubmit;
