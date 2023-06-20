import {submitRequestAPI} from "../index";

export const FinalCalculation = async ({amountToLease, paymentDuration, chequeCount, leaseDelay}) => {

    const postData = {
        amountRequest: amountToLease,
        repaymentPeriod: paymentDuration,
        numberOfInstallments: chequeCount,
        type: leaseDelay,
        usage: 0
    };

    return await submitRequestAPI.post('api/v1/leasing/installment', postData)
        .then(response => {
            console.log(response)
            if (response.status === 200) {
                console.log(response)
                return response;
            } else {
                console.log("failed fetch! status:" + response.data.status);
            }
        })
        .catch(() => {
            return {status: 500}
        });
}