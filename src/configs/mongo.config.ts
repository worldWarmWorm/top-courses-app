import { TypegooseModuleOptions } from 'nestjs-typegoose';
import { ConfigService } from '@nestjs/config';

const getMongoString = (configService: ConfigService) =>
  'mongodb://' +
  configService.get('LOGIN') +
  ':' +
  configService.get('PASSWORD') +
  '@' +
  configService.get('HOST') +
  ':' +
  configService.get('PORT') +
  '/' +
  configService.get('AUTH_DB');


const getMongoOptions = () => ({
  useNewUrlParser: true,
  useUnifiedTopology: true
});

export const getMongoConfig = async (configService: ConfigService): Promise<TypegooseModuleOptions> => {
  return {
    uri: getMongoString(configService),
    ...getMongoOptions()
  };
};