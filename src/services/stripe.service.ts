import { Injectable } from "@nestjs/common";
import {Stripe} from 'stripe'

@Injectable()
export class StripeService{
    stripe = new Stripe(process.env.STRIPE_KEY)
    constructor(){}

    async stripeInfo(){
        console.log('stripe service accessed')
       let session = await this.stripe.checkout.sessions.create( 
            {
                payment_method_types: ['card'],
                line_items: [
                    {
                        price_data: {
                            currency: 'usd',
                            product_data:{
                                name: 'T-shirt',
                            },
                        unit_amount: 2000, // $20.00
                        },
                    quantity: 1,
              },
            ],
            mode: 'payment',
            success_url: 'https://your-domain/success',
            cancel_url: 'https://your-domain/cancel',
    })
    console.log(session)
    return session

    }
}