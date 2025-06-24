/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JWTAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { NoteService } from './note.service';

@Controller('notes')
@UseGuards(JWTAuthGuard)
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Post()
  create(@Body() createNoteDto: CreateNoteDto, @Request() req) {
    const userId = req.user.id;
    return this.noteService.create({ ...createNoteDto, userId });
  }

  @Get()
  findAll(@Request() req) {
    const userId = req.user.id;
    return this.noteService.findAll(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Request() req) {
    const userId = req.user.id;
    return this.noteService.findOne(id, userId);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateNoteDto: UpdateNoteDto,
    @Request() req,
  ) {
    const userId = req.user.id;
    return this.noteService.update(id, updateNoteDto, userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Request() req) {
    const userId = req.user.id;
    return this.noteService.remove(id, userId);
  }
}
