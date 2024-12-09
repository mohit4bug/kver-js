import { HttpStatus } from '../common/enums/http-status.enum'
import { HttpException, HttpExceptionOptions } from './http.exception'

export class UnsupportedMediaTypeException extends HttpException {
  constructor(
    objectOrError?: string | object | any,
    descriptionOrOptions:
      | string
      | HttpExceptionOptions = 'Unsupported Media Type'
  ) {
    const { description, httpExceptionOptions } =
      HttpException.extractDescriptionAndOptionsFrom(descriptionOrOptions)

    super(
      HttpException.createBody(
        objectOrError,
        description,
        HttpStatus.UNSUPPORTED_MEDIA_TYPE
      ),
      HttpStatus.UNSUPPORTED_MEDIA_TYPE,
      httpExceptionOptions
    )
  }
}
