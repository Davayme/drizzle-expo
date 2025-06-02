import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Module({
    imports: [],
    providers: [DatabaseService],
    exports: [DatabaseService],
    controllers: [],
})
export class DatabaseModule {}
