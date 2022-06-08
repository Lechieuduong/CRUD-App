import { Module } from '@nestjs/common';
import { ContactsModule } from './contacts/contacts.module';
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [
    ContactsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      post: 5432,
      username: 'postgres',
      password: '02032002',
      database: 'crud-app',
      autoLoadEntities: true,
      synchronize: true
    })
  ],
})
export class AppModule { }
