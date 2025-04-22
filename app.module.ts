import { Module } from '@nestjs/common';
import { UserModule } from './src/user/user.module';
import { AdminModule } from './src/admin/admin.module';
import { ProductModule } from './src/product/product.module';
import { OrderModule } from './src/order/order.module';

@Module({
  imports: [UserModule, AdminModule, ProductModule, OrderModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
