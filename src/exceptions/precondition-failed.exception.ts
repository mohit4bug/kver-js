import { HttpStatus } from '../common/enums/http-status.enum'
import { HttpException, HttpExceptionOptions } from './http.exception'

export class PreconditionFailedException extends HttpException {
  constructor(
    objectOrError?: string | object | any,
    descriptionOrOptions: string | HttpExceptionOptions = 'Precondition Failed'
  ) {
    const { description, httpExceptionOptions } =
      HttpException.extractDescriptionAndOptionsFrom(descriptionOrOptions)

    super(
      HttpException.createBody(
        objectOrError,
        description,
        HttpStatus.PRECONDITION_FAILED
      ),
      HttpStatus.PRECONDITION_FAILED,
      httpExceptionOptions
    )
  }
}
