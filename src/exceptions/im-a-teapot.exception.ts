import { HttpStatus } from '../common/enums/http-status.enum'
import { HttpException, HttpExceptionOptions } from './http.exception'

export class ImATeapotException extends HttpException {
  constructor(
    objectOrError?: string | object | any,
    descriptionOrOptions: string | HttpExceptionOptions = `I'm a teapot`
  ) {
    const { description, httpExceptionOptions } =
      HttpException.extractDescriptionAndOptionsFrom(descriptionOrOptions)

    super(
      HttpException.createBody(
        objectOrError,
        description,
        HttpStatus.I_AM_A_TEAPOT
      ),
      HttpStatus.I_AM_A_TEAPOT,
      httpExceptionOptions
    )
  }
}
