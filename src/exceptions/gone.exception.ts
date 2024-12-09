import { HttpStatus } from '../common/enums/http-status.enum'
import { HttpException, HttpExceptionOptions } from './http.exception'

export class GoneException extends HttpException {
  constructor(
    objectOrError?: string | object | any,
    descriptionOrOptions: string | HttpExceptionOptions = 'Gone'
  ) {
    const { description, httpExceptionOptions } =
      HttpException.extractDescriptionAndOptionsFrom(descriptionOrOptions)

    super(
      HttpException.createBody(objectOrError, description, HttpStatus.GONE),
      HttpStatus.GONE,
      httpExceptionOptions
    )
  }
}
