import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfileModule } from './ProfileModule/profile.module';
import { ContactModule } from './ContactModule/contact.module';


@Module({
  imports: [
    ContactModule,
    ProfileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
