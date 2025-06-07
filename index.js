import logger from "./pino";

logger.debug({message: 'Test debug', data: { id: '123'}});
logger.error({message: 'Test running', data: { error: { message: 'error running' }}});
logger.info('Running info logger');
