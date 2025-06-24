import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotebookModule } from './notebook/notebook.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { NoteModule } from './note/note.module';

@Module({
  imports: [NotebookModule, AuthModule, PrismaModule, NoteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
