import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from '../app/app.controller';
import { AppService } from '../app/app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Welcome to graphql-server!"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getData()).toEqual({
        message: 'Welcome to graphql-server!',
      });
    });
  });
});