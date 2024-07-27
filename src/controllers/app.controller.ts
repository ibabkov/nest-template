import { Controller, Get } from '@nestjs/common';

import { AppService } from '../services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/v1/get-hello-world')
  getHello(): string {
    return this.appService.getHello();
  }
}
