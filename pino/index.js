import pino from 'pino';
import formatDateTime from './format-datetime';

class LoggerPino {
  #pino;
  #id = {
    account_id: '',
  };
  #module = '';

  constructor() {
    this.#module = process.env.SERVICE_NAME;
    this.#pino = pino({
      level: process.env.LOGGER_LEVEL || 'info',
      messageKey: 'log_message',
      timestamp: () => `,"@timestamp":"${formatDateTime(new Date())}"`,
      formatters: {
        level(label) {
          return { log_level: label };
        },
        bindings() {
          return {
            business_unit: 'RJS HUB',
            programming_language: 'NODEJS',
            log_type: 'AppLog',
          };
        },
      },
    });
  }

  setIdAccount(id) {
    this.#id = {
      account_id: id,
    };
  }

  clearId() {
    this.#id = {
      account_id: '',
    };
  }

  info(message = null) {
    const childLogger = this.#pino.child({
      request: {},
      module: this.#module,
      custom_attributes: {
        ...this.#id,
        data: {},
      },
      err: {},
    });
    const logs = {
      log_message: { message },
    };
    childLogger.info(logs);
  }

  debug({ message, data }) {
    const childLogger = this.#pino.child({
      request: {},
      module: this.#module,
      custom_attributes: {
        ...this.#id,
        data: data,
      },
      err: {},
    });
    const logs = {
      log_message: { message },
    };
    childLogger.debug(logs);
  }

  error({ message, error }) {
    const childLogger = this.#pino.child({
      request: {},
      module: this.#module,
      custom_attributes: {
        ...this.#id,
        data: {},
      },
      err: error,
    });
    const logs = {
      log_message: { message },
    };
    childLogger.error(logs);
  }
}

const logger = new LoggerPino();
export default logger;
