import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotebookModule } from './notebook/notebook.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [NotebookModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
