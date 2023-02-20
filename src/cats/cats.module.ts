import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Cat, CatSchema } from './schema/cat.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync(
      [
        {
          name: Cat.name,
          useFactory: () => {
            const schema = CatSchema;
            schema.pre('find', function () {
              console.log('Hello from pre find');
            });
            return schema;
          },
        },
      ],
      'nestjs',
    ),
  ],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
