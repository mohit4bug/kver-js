import { HttpStatus } from '../common/enums/http-status.enum'
import { HttpException, HttpExceptionOptions } from './http.exception'

export class HttpVersionNotSupportedException extends HttpException {
  constructor(
    objectOrError?: string | object | any,
    descriptionOrOptions:
      | string
      | HttpExceptionOptions = 'HTTP Version Not Supported'
  ) {
    const { description, httpExceptionOptions } =
      HttpException.extractDescriptionAndOptionsFrom(descriptionOrOptions)

    super(
      HttpException.createBody(
        objectOrError,
        description,
        HttpStatus.HTTP_VERSION_NOT_SUPPORTED
      ),
      HttpStatus.HTTP_VERSION_NOT_SUPPORTED,
      httpExceptionOptions
    )
  }
}
