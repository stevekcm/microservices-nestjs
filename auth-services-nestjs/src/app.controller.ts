import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
@ApiTags('Health check')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/_health')
  @ApiResponse({ status: 200, description: 'The service is running' })
  health(): string {
    return this.appService.health();
  }
}
