import {Injectable, NestMiddleware} from '@nestjs/common';
import {PrismaClient} from '@prisma/client';
//export class DatabaseCheck implements NestMiddleware si tu veut un middelware a ajouter a consumer
@Injectable()
export class DatabaseCheck {
  private prisma: PrismaClient = new PrismaClient();

  async checkConnection() {
    try {
      await this.prisma.$connect();
      console.log('database connected 🚀');
    } catch (e) {
      console.log('error while connecting database 🤬', e);
    }
  }
}
