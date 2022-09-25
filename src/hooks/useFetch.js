import { useRouter } from "next/router";
import { useState } from "react";

// export const useFetch = () => {
//     // const router = useRouter();

//     const getPage = async ({ setErrors, current_page }) => {
//         setErrors(null)

//         console.log("PAGE is: ", current_page)

//         return fetch(`http://localhost:8000/api?page=${ current_page }`)
//         .then( response => response.json())
//         .then(response => {

//             // Error checking
//             // if(! response ) {
//             //     return router.push('/404')
//             // }
//             if (response.error) {
//                 throw Error(response.error.message);
//             }
//             if(response.status === 500) {
//                 throw Error("Encountered possible network error.")
//             }

//             // Return the payload if no errors
//             console.log("RESPONSE IS NOW: ", response)
//             return response = response.prototypes

//         })
//         .catch(error => console.log(error))

//     }

//     return {
//         getPage
//     }
// }


export const useFetch = async ( url, setErrors, current_page ) => {
    // const [response, setResponse] = useState(null);
    setErrors(null)

    console.log("PAGE is: ", current_page)

    return fetch(`${url}`)
    .then( response => response.json())
    .then(response => {

        // Error checking
        if(! response ) {
            return router.push('/404');
        }
        if (response.error) {
            // throw Error(response.error.message);
            return response.error.message;
        }
        if(response.status === 500) {
            throw Error("Encountered possible network error.")
        }

        // Return the payload if no errors
        console.log("RESPONSE IS NOW: ", response)
        return response = response.prototypes

    })
    .catch(error => {
        console.log("NEWWW ERROR IS: ", error);
        setErrors(error);
    })

}

