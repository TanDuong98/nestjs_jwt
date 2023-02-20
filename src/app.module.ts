import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { CatsModule } from './cats/cats.module';
import { AuthModule } from './auth/auth.module';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/practice_jwt', {
      connectionName: 'practice_jwt',
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/nestjs', {
      connectionName: 'nestjs',
    }),
    ConfigModule.forRoot(),
    RouterModule.register([
      {
        path: 'api',

        children: [
          {
            path: 'users',

            module: UsersModule,
          },

          {
            path: 'posts',

            module: PostsModule,
          },

          {
            path: 'cats',

            module: CatsModule,
          },
        ],
      },
    ]),
    UsersModule,
    PostsModule,
    CatsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
