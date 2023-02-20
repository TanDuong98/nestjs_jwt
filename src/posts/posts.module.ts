import { Module } from '@nestjs/common';
import { PostService } from './posts.service';
import { PostsController } from './posts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostSchema } from './schema/post.schema';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: Post.name, schema: PostSchema }],
      'practice_jwt',
    ),
  ],
  controllers: [PostsController],
  providers: [PostService],
})
export class PostsModule {}
