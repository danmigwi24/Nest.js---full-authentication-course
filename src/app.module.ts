import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [CatsModule, UsersModule, AuthModule,PrismaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
