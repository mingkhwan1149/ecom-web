import axios from 'axios'


export const payment = async (token:any) => await axios.post('https://ecom-api-mocha.vercel.app/api/user/create-payment-intent', {}, {
    headers: {
        Authorization: `Bearer ${token}`
    }
})
