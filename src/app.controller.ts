import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { StripeService } from './services/stripe.service';
import { Response } from 'express';
import { QueryService } from './services/query.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly stripeService: StripeService,
    private readonly queryService: QueryService
  ) {}

  @Get()
  getHello() {
    return this.queryService.run()
  }



  @Get('/stripe')
 async stripeInfo(@Res() res:Response){
  const session = await this.stripeService.stripeInfo()
    res.redirect(session.url)
    return 'route accessed '
  }
}
