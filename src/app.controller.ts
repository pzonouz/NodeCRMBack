import { Controller, Get, Res } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  redirect(@Res() res: any) {
    res.redirect('/contacts');
  }
}
