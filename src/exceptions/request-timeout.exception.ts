import { HttpStatus } from '../common/enums/http-status.enum'
import { HttpException, HttpExceptionOptions } from './http.exception'

export class RequestTimeoutException extends HttpException {
  constructor(
    objectOrError?: string | object | any,
    descriptionOrOptions: string | HttpExceptionOptions = 'Request Timeout'
  ) {
    const { description, httpExceptionOptions } =
      HttpException.extractDescriptionAndOptionsFrom(descriptionOrOptions)

    super(
      HttpException.createBody(
        objectOrError,
        description,
        HttpStatus.REQUEST_TIMEOUT
      ),
      HttpStatus.REQUEST_TIMEOUT,
      httpExceptionOptions
    )
  }
}
