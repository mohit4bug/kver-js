import { HttpStatus } from '../common/enums/http-status.enum'
import { HttpException, HttpExceptionOptions } from './http.exception'

export class GatewayTimeoutException extends HttpException {
  constructor(
    objectOrError?: string | object | any,
    descriptionOrOptions: string | HttpExceptionOptions = 'Gateway Timeout'
  ) {
    const { description, httpExceptionOptions } =
      HttpException.extractDescriptionAndOptionsFrom(descriptionOrOptions)

    super(
      HttpException.createBody(
        objectOrError,
        description,
        HttpStatus.GATEWAY_TIMEOUT
      ),
      HttpStatus.GATEWAY_TIMEOUT,
      httpExceptionOptions
    )
  }
}
