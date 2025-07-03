import { FormData } from "../types/index"



const SimulatedApi = (data: FormData): Promise<{ success: boolean; data?: FormData; message?: string }> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                reject({ message: "Server error occured. Please try agian" })
            } else {
                resolve({ success: true, data })
            }
        }, 2000);
    })
}

export default SimulatedApi