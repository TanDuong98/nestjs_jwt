import { ApiTags } from '@nestjs/swagger';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { PostService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';

@ApiTags('Posts')
@Controller()
export class PostsController {
  constructor(private readonly postsService: PostService) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @Get()
  findAll() {
    return this.postsService.findAll();
  }
}
