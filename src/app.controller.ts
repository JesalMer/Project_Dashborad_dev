import { Controller, Get } from '@nestjs/common';

@Controller('api')
export class AppController {
  @Get('project-details')
  getProjectDetails() {
    // This is your mock data
    return {
      title: 'NestJS AWS Learning Project',
      description: 'This API demonstrates how to deploy a NestJS app to AWS EC2.',
      data: {
        id: 101,
        status: 'Active',
        tags: ['aws', 'ec2', 'nestjs', 'deployment'],
        createdAt: new Date().toISOString(),
      },
    };
  }
}