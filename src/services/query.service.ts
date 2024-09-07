import { Injectable } from "@nestjs/common"
import { StripeService } from "./stripe.service"
import { User, Profile } from "../entities"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"


@Injectable() //it can work with no injectable decorator but injecting stripe or other provider will not be possible then
export class QueryService{
    constructor(
        private readonly stripeService: StripeService,
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,

        @InjectRepository(Profile)
        private readonly profileRepository: Repository<Profile>,
        )
        
    {}
    async run(){
       const user = await this.userRepository
       .createQueryBuilder('user')
       .select("user.id")
       .getOne() 
       console.log(user)
       return "Success"   
    }
}